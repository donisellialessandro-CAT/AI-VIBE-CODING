export enum TopicId {
  CinquePunti = 'cinque-punti',
  VillaSavoye = 'villa-savoye',
  UniteHabitation = 'unite-habitation',
  Chandigarh = 'chandigarh',
  Ronchamp = 'ronchamp',
  LaTourette = 'la-tourette',
}

export type TopicSelection = TopicId | 'tutti';

export enum Difficulty {
  Base = 'Base',
  Intermedia = 'Intermedia',
  Avanzata = 'Avanzata',
}

export type DifficultySelection = Difficulty | 'tutte';

export enum AnswerMode {
  Multipla = 'multipla',
  Scritta = 'scritta',
  Orale = 'orale',
  Mista = 'mista',
}

export type EffectiveAnswerMode =
  | AnswerMode.Multipla
  | AnswerMode.Scritta
  | AnswerMode.Orale;

export type QuestionCountSelection = 5 | 10 | 15 | 'tutte';

export enum AppSection {
  Home = 'home',
  Configura = 'configura',
  Interrogazione = 'interrogazione',
  Risultati = 'risultati',
  Atlante = 'atlante',
}

export enum EvaluationVerdict {
  Corretta = 'corretta',
  Parziale = 'parziale',
  NonCorretta = 'non-corretta',
  DaVerificare = 'da-verificare',
}

export interface ConceptCriterion {
  label: string;
  synonyms: string[];
}

export interface Question {
  id: string;
  topic: TopicId;
  difficulty: Difficulty;
  text: string;
  options: [string, string, string, string];
  correctOptionIndex: 0 | 1 | 2 | 3;
  referenceAnswer: string;
  requiredConcepts: ConceptCriterion[];
  bonusConcepts?: ConceptCriterion[];
  explanation: string;
  studyTip: string;
  evaluationNote?: string;
}

export interface QuestionAttempt {
  questionId: string;
  modeUsed: EffectiveAnswerMode;
  selectedOptionIndex?: number;
  textAnswer?: string;
  verdict: EvaluationVerdict;
  points: number; // 1 | 0.5 | 0 (0 provisional if DaVerificare)
  matchedConcepts: string[];
  missedConcepts: string[];
  manualOverride?: boolean;
  evaluationReason: string;
}

export interface QuizConfig {
  topic: TopicSelection;
  answerMode: AnswerMode;
  difficulty: DifficultySelection;
  questionCount: QuestionCountSelection;
}

export type OptionOrder = [number, number, number, number];

export interface QuizSession {
  id: string;
  config: QuizConfig;
  questionIds: string[];
  questionModes: Record<string, EffectiveAnswerMode>;
  questionOptionOrders?: Record<string, OptionOrder>;
  currentIndex: number;
  attempts: Record<string, QuestionAttempt>;
  isReviewMode: boolean;
  completed: boolean;
}

export interface TopicMeta {
  id: TopicId;
  index: string;
  title: string;
  shortTitle: string;
  dating: string;
  location: string;
}

export interface AtlasEntry {
  id: TopicId;
  index: string;
  title: string;
  subtitle: string;
  dating: string;
  location: string;
  imagePath: string;
  imageAlt: string;
  imageCaption: string;
  summary: string;
  architecturalFeatures: string[];
  keyConcepts: [
    { title: string; detail: string },
    { title: string; detail: string },
    { title: string; detail: string },
  ];
  diagramCaption: string;
}
