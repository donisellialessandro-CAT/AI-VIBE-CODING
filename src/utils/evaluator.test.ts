import test from 'node:test';
import assert from 'node:assert/strict';
import { QUESTION_BANK } from '../data/questions';
import { TOPICS_META } from '../data/topics';
import {
  AnswerMode,
  Difficulty,
  EvaluationVerdict,
  QuizConfig,
  TopicId,
} from '../types/quiz';
import {
  applyManualVerdict,
  calculateScoreSummary,
  createOptionOrder,
  createQuizSession,
  createReviewSession,
  evaluateMultipleChoice,
  evaluateOpenResponse,
  filterQuestions,
  normalizeItalianText,
} from './evaluator';

test('question bank has at least 60 balanced questions across all 6 topics and 3 difficulties', () => {
  assert.ok(QUESTION_BANK.length >= 60, `Expected >= 60 questions, got ${QUESTION_BANK.length}`);
  const ids = new Set(QUESTION_BANK.map((q) => q.id));
  assert.equal(ids.size, QUESTION_BANK.length, 'Question IDs must be unique');

  for (const meta of TOPICS_META) {
    const byTopic = QUESTION_BANK.filter((q) => q.topic === meta.id);
    assert.ok(byTopic.length >= 10, `Topic ${meta.id} should have >= 10 questions`);
    for (const diff of [Difficulty.Base, Difficulty.Intermedia, Difficulty.Avanzata]) {
      const count = byTopic.filter((q) => q.difficulty === diff).length;
      assert.ok(count >= 3, `Topic ${meta.id} / ${diff} should have >= 3 questions`);
    }
  }
});

test('normalizeItalianText folds accents, apostrophes, and punctuation', () => {
  assert.equal(
    normalizeItalianText('L’Unité d’Habitation è una «città verticale» a Marsiglia!'),
    'l unite d habitation e una citta verticale a marsiglia',
  );
});

test('evaluateMultipleChoice scores 1 for correct and 0 for incorrect', () => {
  const q = QUESTION_BANK[0];
  const ok = evaluateMultipleChoice(q, q.correctOptionIndex);
  assert.equal(ok.verdict, EvaluationVerdict.Corretta);
  assert.equal(ok.points, 1);

  const wrongIdx = (q.correctOptionIndex + 1) % 4;
  const ko = evaluateMultipleChoice(q, wrongIdx);
  assert.equal(ko.verdict, EvaluationVerdict.NonCorretta);
  assert.equal(ko.points, 0);
});

test('evaluateOpenResponse awards Corretta, Parziale, DaVerificare, and NonCorretta properly', () => {
  const cp01 = QUESTION_BANK.find((q) => q.id === 'CP-01')!;

  const full = evaluateOpenResponse(
    cp01,
    'Lo scheletro a telaio in cemento armato elimina la necessità di muri portanti continui.',
    AnswerMode.Scritta,
  );
  assert.equal(full.verdict, EvaluationVerdict.Corretta);
  assert.equal(full.points, 1);

  const partial = evaluateOpenResponse(
    cp01,
    'Si basa sull’uso del telaio in calcestruzzo armato.',
    AnswerMode.Scritta,
  );
  assert.equal(partial.verdict, EvaluationVerdict.Parziale);
  assert.equal(partial.points, 0.5);

  const ambiguous = evaluateOpenResponse(
    cp01,
    'Le Corbusier trasforma la concezione tradizionale della casa moderna introducendo spazi flessibili e luminosi grazie alla tecnologia contemporanea.',
    AnswerMode.Orale,
  );
  assert.equal(ambiguous.verdict, EvaluationVerdict.DaVerificare);
  assert.equal(ambiguous.points, 0);

  const wrong = evaluateOpenResponse(cp01, 'Non lo ricordo', AnswerMode.Scritta);
  assert.equal(wrong.verdict, EvaluationVerdict.NonCorretta);
  assert.equal(wrong.points, 0);
});

test('calculateScoreSummary keeps DaVerificare provisional and not counted as error', () => {
  const q1 = QUESTION_BANK[0];
  const q2 = QUESTION_BANK[1];
  const q3 = QUESTION_BANK[2];
  const q4 = QUESTION_BANK[3];

  const attempts = {
    [q1.id]: evaluateMultipleChoice(q1, q1.correctOptionIndex),
    [q2.id]: {
      ...evaluateOpenResponse(q2, 'pilastri', AnswerMode.Scritta),
      verdict: EvaluationVerdict.Parziale,
      points: 0.5,
    },
    [q3.id]: {
      ...evaluateOpenResponse(q3, 'risposta lunga con concetti di architettura moderna', AnswerMode.Scritta),
      verdict: EvaluationVerdict.DaVerificare,
      points: 0,
    },
    [q4.id]: evaluateMultipleChoice(q4, (q4.correctOptionIndex + 1) % 4),
  };

  const summary = calculateScoreSummary([q1.id, q2.id, q3.id, q4.id], attempts);
  assert.equal(summary.correctCount, 1);
  assert.equal(summary.partialCount, 1);
  assert.equal(summary.toVerifyCount, 1);
  assert.equal(summary.incorrectCount, 1);
  assert.equal(summary.points, 1.5);
  assert.equal(summary.percentage, 38);

  const overridden = applyManualVerdict(attempts[q3.id], EvaluationVerdict.Corretta);
  const updated = calculateScoreSummary([q1.id, q2.id, q3.id, q4.id], {
    ...attempts,
    [q3.id]: overridden,
  });
  assert.equal(updated.correctCount, 2);
  assert.equal(updated.toVerifyCount, 0);
  assert.equal(updated.points, 2.5);
});

test('session filtering, creation, and review session target only non-passed questions', () => {
  const villaBase = filterQuestions(QUESTION_BANK, TopicId.VillaSavoye, Difficulty.Base);
  assert.equal(villaBase.length, 4);

  const config: QuizConfig = {
    topic: TopicId.VillaSavoye,
    answerMode: AnswerMode.Multipla,
    difficulty: 'tutte',
    questionCount: 5,
  };
  const session = createQuizSession(QUESTION_BANK, config, false, () => 0.25);
  assert.equal(session.questionIds.length, 5);

  const firstQ = QUESTION_BANK.find((q) => q.id === session.questionIds[0])!;
  const secondQ = QUESTION_BANK.find((q) => q.id === session.questionIds[1])!;
  session.attempts[firstQ.id] = evaluateMultipleChoice(firstQ, firstQ.correctOptionIndex);
  session.attempts[secondQ.id] = evaluateMultipleChoice(
    secondQ,
    (secondQ.correctOptionIndex + 1) % 4,
  );

  const review = createReviewSession(session, false);
  assert.ok(review);
  assert.deepEqual(review.questionIds, [secondQ.id]);
  assert.equal(review.isReviewMode, true);
  assert.ok(review.questionOptionOrders?.[secondQ.id]);
});

test('randomized option ordering produces valid permutations and distributes correct option across A/B/C/D', () => {
  let seed = 123456789;
  const deterministicRng = () => {
    seed = (1664525 * seed + 1013904223) % 4294967296;
    return seed / 4294967296;
  };

  const positionsOfCorrect = new Set<number>();
  for (let i = 0; i < 40; i += 1) {
    const order = createOptionOrder(deterministicRng);
    assert.equal(order.length, 4);
    assert.deepEqual([...order].sort((a, b) => a - b), [0, 1, 2, 3]);
    positionsOfCorrect.add(order.indexOf(0));
  }
  assert.deepEqual([...positionsOfCorrect].sort((a, b) => a - b), [0, 1, 2, 3]);

  const session = createQuizSession(
    QUESTION_BANK,
    {
      topic: 'tutti',
      answerMode: AnswerMode.Multipla,
      difficulty: 'tutte',
      questionCount: 15,
    },
    false,
    deterministicRng,
  );
  const sessionCorrectDisplayPositions = new Set<number>();
  for (const id of session.questionIds) {
    const q = QUESTION_BANK.find((item) => item.id === id)!;
    const order = session.questionOptionOrders?.[id];
    assert.ok(order && order.length === 4);
    assert.deepEqual([...order].sort((a, b) => a - b), [0, 1, 2, 3]);
    sessionCorrectDisplayPositions.add(order.indexOf(q.correctOptionIndex));
  }
  assert.ok(
    sessionCorrectDisplayPositions.size > 1,
    'Correct answer must not always appear in the first slot',
  );
});
