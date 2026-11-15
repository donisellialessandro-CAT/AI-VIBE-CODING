import {
  AnswerMode,
  DifficultySelection,
  EffectiveAnswerMode,
  EvaluationVerdict,
  OptionOrder,
  Question,
  QuestionAttempt,
  QuestionCountSelection,
  QuizConfig,
  QuizSession,
  TopicSelection,
} from '../types/quiz';

const ITALIAN_ARCHITECTURAL_SIGNALS = [
  'cemento',
  'calcestruzzo',
  'pilastri',
  'pilotis',
  'solaio',
  'facciata',
  'pianta',
  'finestra',
  'tetto',
  'terrazza',
  'giardino',
  'luce',
  'spazio',
  'struttura',
  'muro',
  'muratura',
  'rampa',
  'scala',
  'percorso',
  'modulor',
  'brise',
  'alloggi',
  'duplex',
  'settori',
  'strade',
  'campidoglio',
  'cappella',
  'convento',
  'chiesa',
  'celle',
  'pendio',
  'corbusier',
  'architettura',
  'edificio',
  'volume',
  'beton',
  'intonaco',
  'vetro',
  'ombra',
];

export function normalizeItalianText(input: string): string {
  return input
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[’'`]/g, ' ')
    .replace(/[-_/.,;:!?()«»"“”]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function matchesSynonym(normalizedText: string, words: string[], synonymRaw: string): boolean {
  const syn = normalizeItalianText(synonymRaw);
  if (!syn) return false;

  // Multi-word phrase check
  if (syn.includes(' ')) {
    if (normalizedText.includes(syn)) return true;
    const synParts = syn.split(' ').filter((w) => w.length >= 3);
    if (synParts.length >= 2) {
      return synParts.every((part) => words.some((w) => w.startsWith(part) || w.includes(part)));
    }
    return false;
  }

  // Single token or stem check
  if (syn.length <= 3) {
    return words.some((w) => w === syn);
  }
  return words.some((w) => w === syn || w.startsWith(syn) || (w.length >= 5 && syn.startsWith(w)));
}

export function evaluateMultipleChoice(
  question: Question,
  selectedOptionIndex: number,
): QuestionAttempt {
  const isCorrect = selectedOptionIndex === question.correctOptionIndex;
  return {
    questionId: question.id,
    modeUsed: AnswerMode.Multipla,
    selectedOptionIndex,
    verdict: isCorrect ? EvaluationVerdict.Corretta : EvaluationVerdict.NonCorretta,
    points: isCorrect ? 1 : 0,
    matchedConcepts: isCorrect ? question.requiredConcepts.map((c) => c.label) : [],
    missedConcepts: isCorrect ? [] : question.requiredConcepts.map((c) => c.label),
    evaluationReason: isCorrect
      ? 'Opzione selezionata conforme alla risposta corretta.'
      : `Opzione errata. Risposta corretta: ${question.options[question.correctOptionIndex]}`,
  };
}

export function evaluateOpenResponse(
  question: Question,
  rawAnswer: string,
  modeUsed: AnswerMode.Scritta | AnswerMode.Orale,
): QuestionAttempt {
  const trimmed = rawAnswer.trim();
  const normalized = normalizeItalianText(trimmed);
  const words = normalized ? normalized.split(' ') : [];

  if (!normalized || words.length === 0) {
    return {
      questionId: question.id,
      modeUsed,
      textAnswer: trimmed,
      verdict: EvaluationVerdict.NonCorretta,
      points: 0,
      matchedConcepts: [],
      missedConcepts: question.requiredConcepts.map((c) => c.label),
      evaluationReason: 'Nessun contenuto rilevato nella risposta.',
    };
  }

  const matchedConcepts: string[] = [];
  const missedConcepts: string[] = [];

  for (const criterion of question.requiredConcepts) {
    const hit = criterion.synonyms.some((syn) => matchesSynonym(normalized, words, syn));
    if (hit) {
      matchedConcepts.push(criterion.label);
    } else {
      missedConcepts.push(criterion.label);
    }
  }

  const totalReq = question.requiredConcepts.length;
  const matchedCount = matchedConcepts.length;

  if (totalReq > 0 && matchedCount === totalReq) {
    return {
      questionId: question.id,
      modeUsed,
      textAnswer: trimmed,
      verdict: EvaluationVerdict.Corretta,
      points: 1,
      matchedConcepts,
      missedConcepts: [],
      evaluationReason:
        'Tutti i concetti disciplinari fondamentali risultano presenti nella risposta.',
    };
  }

  if (matchedCount > 0 && matchedCount < totalReq) {
    return {
      questionId: question.id,
      modeUsed,
      textAnswer: trimmed,
      verdict: EvaluationVerdict.Parziale,
      points: 0.5,
      matchedConcepts,
      missedConcepts,
      evaluationReason: `Individuati ${matchedCount} concetti su ${totalReq}. Integra gli elementi mancanti per il punteggio pieno.`,
    };
  }

  // 0 requiredConcepts matched: distinguish clearly off-topic/too short from substantial ambiguous formulation
  const hasDomainTerms = ITALIAN_ARCHITECTURAL_SIGNALS.some((term) =>
    words.some((w) => w.startsWith(term)),
  );
  const meaningfulWords = words.filter((w) => w.length >= 3);

  if (meaningfulWords.length >= 5 && (hasDomainTerms || normalized.length >= 36)) {
    return {
      questionId: question.id,
      modeUsed,
      textAnswer: trimmed,
      verdict: EvaluationVerdict.DaVerificare,
      points: 0,
      matchedConcepts: [],
      missedConcepts,
      evaluationReason:
        'Risposta articolata ma espressa con termini diversi dai criteri automatici: classificata "Da verificare" senza penalità automatica, in attesa di revisione manuale.',
    };
  }

  return {
    questionId: question.id,
    modeUsed,
    textAnswer: trimmed,
    verdict: EvaluationVerdict.NonCorretta,
    points: 0,
    matchedConcepts: [],
    missedConcepts,
    evaluationReason:
      'La risposta non contiene i concetti disciplinari essenziali richiesti dalla domanda.',
  };
}

export function applyManualVerdict(
  attempt: QuestionAttempt,
  newVerdict: EvaluationVerdict.Corretta | EvaluationVerdict.Parziale | EvaluationVerdict.NonCorretta,
): QuestionAttempt {
  const points =
    newVerdict === EvaluationVerdict.Corretta
      ? 1
      : newVerdict === EvaluationVerdict.Parziale
        ? 0.5
        : 0;

  return {
    ...attempt,
    verdict: newVerdict,
    points,
    manualOverride: true,
    evaluationReason: `Valutazione aggiornata manualmente in sede di revisione (${
      newVerdict === EvaluationVerdict.Corretta
        ? 'Corretta: 1 pt'
        : newVerdict === EvaluationVerdict.Parziale
          ? 'Parzialmente corretta: 0,5 pt'
          : 'Non corretta: 0 pt'
    }).`,
  };
}

export interface ScoreSummary {
  totalQuestions: number;
  answeredCount: number;
  correctCount: number;
  partialCount: number;
  incorrectCount: number;
  toVerifyCount: number;
  points: number;
  maxPoints: number;
  percentage: number;
}

export function calculateScoreSummary(
  questionIds: string[],
  attempts: Record<string, QuestionAttempt>,
): ScoreSummary {
  const totalQuestions = questionIds.length;
  let answeredCount = 0;
  let correctCount = 0;
  let partialCount = 0;
  let incorrectCount = 0;
  let toVerifyCount = 0;
  let points = 0;

  for (const id of questionIds) {
    const attempt = attempts[id];
    if (!attempt) continue;
    answeredCount += 1;
    points += attempt.points;
    switch (attempt.verdict) {
      case EvaluationVerdict.Corretta:
        correctCount += 1;
        break;
      case EvaluationVerdict.Parziale:
        partialCount += 1;
        break;
      case EvaluationVerdict.NonCorretta:
        incorrectCount += 1;
        break;
      case EvaluationVerdict.DaVerificare:
        toVerifyCount += 1;
        break;
    }
  }

  const maxPoints = totalQuestions;
  const percentage = maxPoints > 0 ? Math.round((points / maxPoints) * 100) : 0;

  return {
    totalQuestions,
    answeredCount,
    correctCount,
    partialCount,
    incorrectCount,
    toVerifyCount,
    points,
    maxPoints,
    percentage,
  };
}

export function filterQuestions(
  bank: Question[],
  topic: TopicSelection,
  difficulty: DifficultySelection,
): Question[] {
  return bank.filter((q) => {
    const topicMatch = topic === 'tutti' || q.topic === topic;
    const diffMatch = difficulty === 'tutte' || q.difficulty === difficulty;
    return topicMatch && diffMatch;
  });
}

export function shuffleArray<T>(items: T[], rng: () => number = Math.random): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rng() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function selectQuizQuestions(
  bank: Question[],
  config: QuizConfig,
  rng: () => number = Math.random,
): Question[] {
  const filtered = filterQuestions(bank, config.topic, config.difficulty);
  const shuffled = shuffleArray(filtered, rng);
  if (config.questionCount === 'tutte') {
    return shuffled;
  }
  return shuffled.slice(0, Math.min(config.questionCount, shuffled.length));
}

export function resolveQuestionMode(
  configuredMode: AnswerMode,
  speechAvailable: boolean,
  rng: () => number = Math.random,
): EffectiveAnswerMode {
  if (configuredMode === AnswerMode.Multipla) return AnswerMode.Multipla;
  if (configuredMode === AnswerMode.Scritta) return AnswerMode.Scritta;
  if (configuredMode === AnswerMode.Orale) {
    return speechAvailable ? AnswerMode.Orale : AnswerMode.Scritta;
  }
  const pool: EffectiveAnswerMode[] = speechAvailable
    ? [AnswerMode.Multipla, AnswerMode.Scritta, AnswerMode.Orale]
    : [AnswerMode.Multipla, AnswerMode.Scritta];
  return pool[Math.floor(rng() * pool.length)];
}

export function createOptionOrder(rng: () => number = Math.random): OptionOrder {
  const shuffled = shuffleArray([0, 1, 2, 3], rng);
  return [shuffled[0], shuffled[1], shuffled[2], shuffled[3]];
}

export function createQuizSession(
  bank: Question[],
  config: QuizConfig,
  speechAvailable: boolean,
  rng: () => number = Math.random,
): QuizSession {
  const selected = selectQuizQuestions(bank, config, rng);
  const questionIds = selected.map((q) => q.id);
  const questionModes: Record<string, EffectiveAnswerMode> = {};
  const questionOptionOrders: Record<string, OptionOrder> = {};
  for (const id of questionIds) {
    questionModes[id] = resolveQuestionMode(config.answerMode, speechAvailable, rng);
    questionOptionOrders[id] = createOptionOrder(rng);
  }
  return {
    id: `session-${Date.now()}`,
    config,
    questionIds,
    questionModes,
    questionOptionOrders,
    currentIndex: 0,
    attempts: {},
    isReviewMode: false,
    completed: false,
  };
}

export function getReviewQuestionIds(session: QuizSession): string[] {
  return session.questionIds.filter((id) => {
    const attempt = session.attempts[id];
    if (!attempt) return false;
    return attempt.verdict !== EvaluationVerdict.Corretta;
  });
}

export function createReviewSession(
  previousSession: QuizSession,
  speechAvailable: boolean,
  rng: () => number = Math.random,
): QuizSession | null {
  const reviewIds = getReviewQuestionIds(previousSession);
  if (reviewIds.length === 0) return null;
  const questionModes: Record<string, EffectiveAnswerMode> = {};
  const questionOptionOrders: Record<string, OptionOrder> = {};
  for (const id of reviewIds) {
    questionModes[id] = resolveQuestionMode(previousSession.config.answerMode, speechAvailable, rng);
    questionOptionOrders[id] = createOptionOrder(rng);
  }
  return {
    id: `review-${Date.now()}`,
    config: previousSession.config,
    questionIds: reviewIds,
    questionModes,
    questionOptionOrders,
    currentIndex: 0,
    attempts: {},
    isReviewMode: true,
    completed: false,
  };
}
