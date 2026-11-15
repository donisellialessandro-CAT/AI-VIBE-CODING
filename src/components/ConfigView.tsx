import React from 'react';
import { ArrowRight, Mic, PencilLine, CheckSquare, Shuffle } from 'lucide-react';
import { TOPICS_META } from '../data/atlas';
import {
  AnswerMode,
  Difficulty,
  DifficultySelection,
  QuestionCountSelection,
  QuizConfig,
  TopicSelection,
} from '../types/quiz';

interface ConfigViewProps {
  config: QuizConfig;
  availableCount: number;
  speechSupported: boolean;
  onChangeConfig: (next: QuizConfig) => void;
  onStartQuiz: () => void;
  onBackHome: () => void;
}

export const ConfigView: React.FC<ConfigViewProps> = ({
  config,
  availableCount,
  speechSupported,
  onChangeConfig,
  onStartQuiz,
  onBackHome,
}) => {
  const setTopic = (topic: TopicSelection) => onChangeConfig({ ...config, topic });
  const setAnswerMode = (answerMode: AnswerMode) => onChangeConfig({ ...config, answerMode });
  const setDifficulty = (difficulty: DifficultySelection) =>
    onChangeConfig({ ...config, difficulty });
  const setQuestionCount = (questionCount: QuestionCountSelection) =>
    onChangeConfig({ ...config, questionCount });

  const topicOptions: { id: TopicSelection; code: string; label: string }[] = [
    ...TOPICS_META.map((t) => ({ id: t.id as TopicSelection, code: t.index, label: t.title })),
    { id: 'tutti', code: '00', label: 'Tutti gli argomenti' },
  ];

  const modeOptions: {
    id: AnswerMode;
    label: string;
    detail: string;
    icon: React.ReactNode;
  }[] = [
    {
      id: AnswerMode.Multipla,
      label: 'Risposta multipla',
      detail: 'Quattro alternative (A, B, C, D) con riscontro immediato.',
      icon: <CheckSquare className="w-4 h-4" aria-hidden="true" />,
    },
    {
      id: AnswerMode.Scritta,
      label: 'Risposta breve scritta',
      detail: 'Testo libero valutato su concetti chiave e sinonimi.',
      icon: <PencilLine className="w-4 h-4" aria-hidden="true" />,
    },
    {
      id: AnswerMode.Orale,
      label: 'Risposta orale (microfono)',
      detail: speechSupported
        ? 'Riconoscimento vocale it-IT con modifica manuale del testo.'
        : 'Microfono non supportato su questo browser: passaggio automatico a scritta.',
      icon: <Mic className="w-4 h-4" aria-hidden="true" />,
    },
    {
      id: AnswerMode.Mista,
      label: 'Modalità mista casuale',
      detail: 'Alterna in modo casuale le tipologie di risposta disponibili.',
      icon: <Shuffle className="w-4 h-4" aria-hidden="true" />,
    },
  ];

  const difficultyOptions: { id: DifficultySelection; label: string; detail: string }[] = [
    { id: Difficulty.Base, label: 'Base', detail: 'Definizioni, date, luoghi e principi fondamentali.' },
    { id: Difficulty.Intermedia, label: 'Intermedia', detail: 'Relazioni spaziali, funzioni e lettura tecnica.' },
    { id: Difficulty.Avanzata, label: 'Avanzata', detail: 'Confronti critici, evoluzione linguistica e sintesi.' },
    { id: 'tutte', label: 'Tutti i livelli', detail: 'Progressione mista dal livello base all’avanzato.' },
  ];

  const countOptions: { id: QuestionCountSelection; label: string }[] = [
    { id: 5, label: '5 domande' },
    { id: 10, label: '10 domande' },
    { id: 15, label: '15 domande' },
    { id: 'tutte', label: 'Tutte le disponibili' },
  ];

  const effectiveCount =
    config.questionCount === 'tutte'
      ? availableCount
      : Math.min(config.questionCount, availableCount);

  return (
    <section
      aria-labelledby="config-title"
      className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8"
    >
      <div className="flex items-center justify-between border-b border-[#171717] pb-2.5 mb-5">
        <span className="font-mono-tech text-xs tracking-wider text-[#D62828] font-semibold whitespace-nowrap">
          02 / CONFIGURA
        </span>
        <button
          type="button"
          onClick={onBackHome}
          className="font-mono-tech text-xs text-[#52524E] hover:text-[#171717] underline underline-offset-4 cursor-pointer whitespace-nowrap"
        >
          Torna a 01 Home
        </button>
      </div>

      <div className="mb-6">
        <h1 id="config-title" className="font-display text-2xl sm:text-3xl font-bold text-[#171717] mb-1.5">
          Imposta la sessione d’interrogazione
        </h1>
        <p className="text-sm sm:text-base text-[#52524E] max-w-[68ch]">
          Seleziona il nucleo tematico, la modalità di risposta, il livello di difficoltà e il numero di quesiti da estrarre dalla banca dati.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        {/* Left column: Parameters A & B */}
        <div className="lg:col-span-7 space-y-5">
          {/* A. Argomento */}
          <fieldset className="bg-white border border-[#171717] p-4 sm:p-5">
            <legend className="font-mono-tech text-xs font-semibold tracking-wider text-[#171717] px-2 bg-[#F7F7F5] border border-[#171717]">
              A · ARGOMENTO
            </legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
              {topicOptions.map((opt) => {
                const selected = config.topic === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => setTopic(opt.id)}
                    className={`text-left p-3 border transition-colors cursor-pointer flex items-start gap-2.5 ${
                      selected
                        ? 'bg-[#171717] text-white border-[#171717]'
                        : 'bg-[#F7F7F5] text-[#171717] border-[#D4D4CE] hover:border-[#171717]'
                    }`}
                  >
                    <span
                      className={`font-mono-tech text-xs shrink-0 mt-0.5 ${
                        selected ? 'text-[#D62828] font-semibold' : 'text-[#73736E]'
                      }`}
                    >
                      {opt.code}
                    </span>
                    <span className="text-sm font-medium leading-snug">{opt.label}</span>
                  </button>
                );
              })}
            </div>
          </fieldset>

          {/* B. Modalità di risposta */}
          <fieldset className="bg-white border border-[#171717] p-4 sm:p-5">
            <legend className="font-mono-tech text-xs font-semibold tracking-wider text-[#171717] px-2 bg-[#F7F7F5] border border-[#171717]">
              B · MODALITÀ DI RISPOSTA
            </legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
              {modeOptions.map((opt) => {
                const selected = config.answerMode === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => setAnswerMode(opt.id)}
                    className={`text-left p-3.5 border transition-colors cursor-pointer ${
                      selected
                        ? 'bg-[#171717] text-white border-[#171717]'
                        : 'bg-[#F7F7F5] text-[#171717] border-[#D4D4CE] hover:border-[#171717]'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className={selected ? 'text-[#D62828]' : 'text-[#171717]'}>
                        {opt.icon}
                      </span>
                      <span className="text-sm font-semibold">{opt.label}</span>
                    </div>
                    <p
                      className={`text-xs leading-relaxed ${
                        selected ? 'text-[#D4D4CE]' : 'text-[#52524E]'
                      }`}
                    >
                      {opt.detail}
                    </p>
                  </button>
                );
              })}
            </div>
          </fieldset>
        </div>

        {/* Right column: C, D & Summary Launch Box */}
        <div className="lg:col-span-5 space-y-5">
          {/* C. Difficoltà */}
          <fieldset className="bg-white border border-[#171717] p-4 sm:p-5">
            <legend className="font-mono-tech text-xs font-semibold tracking-wider text-[#171717] px-2 bg-[#F7F7F5] border border-[#171717]">
              C · DIFFICOLTÀ
            </legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
              {difficultyOptions.map((opt) => {
                const selected = config.difficulty === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => setDifficulty(opt.id)}
                    className={`w-full text-left p-3 border transition-colors cursor-pointer ${
                      selected
                        ? 'bg-[#171717] text-white border-[#171717]'
                        : 'bg-[#F7F7F5] text-[#171717] border-[#D4D4CE] hover:border-[#171717]'
                    }`}
                  >
                    <div className="text-sm font-semibold">{opt.label}</div>
                    <div
                      className={`text-xs mt-0.5 leading-snug ${
                        selected ? 'text-[#D4D4CE]' : 'text-[#52524E]'
                      }`}
                    >
                      {opt.detail}
                    </div>
                  </button>
                );
              })}
            </div>
          </fieldset>

          {/* D. Numero di domande */}
          <fieldset className="bg-white border border-[#171717] p-4 sm:p-5">
            <legend className="font-mono-tech text-xs font-semibold tracking-wider text-[#171717] px-2 bg-[#F7F7F5] border border-[#171717]">
              D · NUMERO DI DOMANDE
            </legend>
            <div className="grid grid-cols-2 gap-2 mt-2">
              {countOptions.map((opt) => {
                const selected = config.questionCount === opt.id;
                return (
                  <button
                    key={String(opt.id)}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => setQuestionCount(opt.id)}
                    className={`p-2.5 text-center border font-mono-tech text-xs font-semibold transition-colors cursor-pointer ${
                      selected
                        ? 'bg-[#171717] text-white border-[#171717]'
                        : 'bg-[#F7F7F5] text-[#171717] border-[#D4D4CE] hover:border-[#171717]'
                    }`}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </fieldset>

          {/* Summary & Launch */}
          <div className="arch-plate bg-white border border-[#171717] p-4 sm:p-5">
            <div className="flex items-center justify-between gap-4 pb-3 mb-4 border-b border-[#D4D4CE]">
              <div>
                <span className="block font-mono-tech text-xs text-[#52524E]">QUESITI DISPONIBILI</span>
                <span className="font-mono-tech text-xl font-bold tabular-nums text-[#171717]">
                  {availableCount}
                </span>
              </div>
              <div className="text-right">
                <span className="block font-mono-tech text-xs text-[#52524E]">QUESITI IN PROVA</span>
                <span className="font-mono-tech text-xl font-bold tabular-nums text-[#D62828]">
                  {effectiveCount}
                </span>
              </div>
            </div>

            {availableCount === 0 ? (
              <p className="text-xs text-[#D62828] font-medium">
                Nessuna domanda corrisponde ai filtri selezionati. Modifica argomento o livello.
              </p>
            ) : (
              <button
                type="button"
                onClick={onStartQuiz}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#D62828] text-white border border-[#D62828] font-mono-tech text-xs sm:text-sm font-semibold tracking-wide hover:bg-[#a81c1c] transition-colors cursor-pointer"
              >
                <span>AVVIA INTERROGAZIONE</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
