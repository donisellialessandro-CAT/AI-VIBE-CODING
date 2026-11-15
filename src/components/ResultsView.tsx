import React from 'react';
import { AlertCircle, Check, HelpCircle, RotateCcw, X } from 'lucide-react';
import { TOPIC_MAP } from '../data/atlas';
import {
  AnswerMode,
  EvaluationVerdict,
  Question,
  QuestionAttempt,
  QuizSession,
} from '../types/quiz';
import {
  applyManualVerdict,
  calculateScoreSummary,
  getReviewQuestionIds,
} from '../utils/evaluator';

interface ResultsViewProps {
  session: QuizSession;
  questionMap: Record<string, Question>;
  onRetrySameConfig: () => void;
  onReviewMistakes: () => void;
  onConfigureNew: () => void;
  onUpdateAttempt: (attempt: QuestionAttempt) => void;
}

export const ResultsView: React.FC<ResultsViewProps> = ({
  session,
  questionMap,
  onRetrySameConfig,
  onReviewMistakes,
  onConfigureNew,
  onUpdateAttempt,
}) => {
  const summary = calculateScoreSummary(session.questionIds, session.attempts);
  const reviewIds = getReviewQuestionIds(session);

  return (
    <section
      aria-labelledby="results-title"
      className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10"
    >
      <div className="flex items-center justify-between border-b border-[#171717] pb-3 mb-8">
        <span className="font-mono-tech text-xs tracking-wider text-[#D62828] font-semibold">
          04 / RISULTATI
        </span>
        <button
          type="button"
          onClick={onConfigureNew}
          className="font-mono-tech text-xs text-[#52524E] hover:text-[#171717] underline underline-offset-4 cursor-pointer"
        >
          Torna a 02 Configura
        </button>
      </div>

      <div className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <h1 id="results-title" className="font-display text-3xl sm:text-4xl font-bold text-[#171717] mb-2">
            Esito dell’interrogazione
          </h1>
          <p className="text-base text-[#52524E]">
            Punteggio complessivo calcolato assegnando 1 punto alle corrette, 0,5 alle parziali e 0 alle errate.
            {summary.toVerifyCount > 0 &&
              ' Le risposte da verificare restano provvisorie finché non vengono revisionate.'}
          </p>
        </div>

        <div className="flex flex-wrap gap-3 shrink-0">
          <button
            type="button"
            onClick={onRetrySameConfig}
            className="inline-flex items-center gap-2 px-5 py-3 bg-[#171717] text-white border border-[#171717] font-mono-tech text-xs font-semibold hover:bg-[#333333] transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            <RotateCcw className="w-4 h-4" aria-hidden="true" />
            <span>RIPROVA</span>
          </button>

          {reviewIds.length > 0 && (
            <button
              type="button"
              onClick={onReviewMistakes}
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#D62828] text-white border border-[#D62828] font-mono-tech text-xs font-semibold hover:bg-[#a81c1c] transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              <span>RIPASSA GLI ERRORI ({reviewIds.length})</span>
            </button>
          )}
        </div>
      </div>

      {/* KPI Metrics Grid */}
      <div className="arch-plate grid grid-cols-2 lg:grid-cols-5 border border-[#171717] bg-white divide-y lg:divide-y-0 lg:divide-x divide-[#171717] mb-10">
        <div className="p-5">
          <p className="font-mono-tech text-xs text-[#73736E] mb-1">PUNTEGGIO</p>
          <p className="font-display text-3xl font-bold tabular-nums text-[#D62828]">
            {summary.percentage}%
          </p>
          <p className="font-mono-tech text-xs text-[#52524E] mt-1 tabular-nums">
            {summary.points.toString().replace('.', ',')} / {summary.maxPoints} pt
          </p>
        </div>

        <div className="p-5">
          <p className="font-mono-tech text-xs text-[#73736E] mb-1">CORRETTE</p>
          <p className="font-display text-3xl font-bold tabular-nums text-[#171717]">
            {summary.correctCount}
          </p>
          <p className="font-mono-tech text-xs text-[#52524E] mt-1">1 punto ciascuna</p>
        </div>

        <div className="p-5">
          <p className="font-mono-tech text-xs text-[#73736E] mb-1">PARZIALI</p>
          <p className="font-display text-3xl font-bold tabular-nums text-[#171717]">
            {summary.partialCount}
          </p>
          <p className="font-mono-tech text-xs text-[#52524E] mt-1">0,5 punti ciascuna</p>
        </div>

        <div className="p-5">
          <p className="font-mono-tech text-xs text-[#73736E] mb-1">ERRATE</p>
          <p className="font-display text-3xl font-bold tabular-nums text-[#D62828]">
            {summary.incorrectCount}
          </p>
          <p className="font-mono-tech text-xs text-[#52524E] mt-1">0 punti</p>
        </div>

        <div className="p-5 col-span-2 lg:col-span-1">
          <p className="font-mono-tech text-xs text-[#73736E] mb-1">DA VERIFICARE</p>
          <p className="font-display text-3xl font-bold tabular-nums text-[#171717]">
            {summary.toVerifyCount}
          </p>
          <p className="font-mono-tech text-xs text-[#52524E] mt-1">Provvisorie</p>
        </div>
      </div>

      {/* Detailed Questions & Explanations Review */}
      <div>
        <h2 className="font-display text-xl font-bold text-[#171717] mb-4">
          Riepilogo analitico delle domande e spiegazioni
        </h2>

        <div className="space-y-4">
          {session.questionIds.map((qId, idx) => {
            const q = questionMap[qId];
            const attempt = session.attempts[qId];
            if (!q || !attempt) return null;
            const topicMeta = TOPIC_MAP[q.topic];

            return (
              <article key={qId} className="bg-white border border-[#171717] p-5 sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-[#D4D4CE]">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono-tech text-[#52524E]">
                    <span className="text-[#171717] font-semibold tabular-nums">
                      #{String(idx + 1).padStart(2, '0')}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{topicMeta.shortTitle}</span>
                    <span aria-hidden="true">·</span>
                    <span>{q.difficulty}</span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 font-mono-tech text-xs font-semibold">
                    {attempt.verdict === EvaluationVerdict.Corretta && (
                      <>
                        <Check className="w-4 h-4 text-[#171717]" aria-hidden="true" />
                        <span className="text-[#171717]">CORRETTA (1 PT)</span>
                      </>
                    )}
                    {attempt.verdict === EvaluationVerdict.Parziale && (
                      <>
                        <AlertCircle className="w-4 h-4 text-[#D62828]" aria-hidden="true" />
                        <span className="text-[#171717]">PARZIALE (0,5 PT)</span>
                      </>
                    )}
                    {attempt.verdict === EvaluationVerdict.NonCorretta && (
                      <>
                        <X className="w-4 h-4 text-[#D62828]" aria-hidden="true" />
                        <span className="text-[#D62828]">ERRATA (0 PT)</span>
                      </>
                    )}
                    {attempt.verdict === EvaluationVerdict.DaVerificare && (
                      <>
                        <HelpCircle className="w-4 h-4 text-[#D62828]" aria-hidden="true" />
                        <span className="text-[#D62828]">DA VERIFICARE (PROVVISORIA)</span>
                      </>
                    )}
                  </div>
                </div>

                <h3 className="font-display text-base sm:text-lg font-bold text-[#171717] mb-3">
                  {q.text}
                </h3>

                <div className="bg-[#F7F7F5] border border-[#D4D4CE] p-3.5 text-sm space-y-1.5 mb-3">
                  <p className="text-[#171717]">
                    <strong className="font-mono-tech text-xs uppercase mr-1.5">
                      Tua risposta:
                    </strong>
                    {attempt.modeUsed === AnswerMode.Multipla &&
                    attempt.selectedOptionIndex !== undefined
                      ? q.options[attempt.selectedOptionIndex]
                      : attempt.textAnswer || '—'}
                  </p>
                  <p className="text-[#171717]">
                    <strong className="font-mono-tech text-xs uppercase mr-1.5">
                      Risposta attesa:
                    </strong>
                    {attempt.modeUsed === AnswerMode.Multipla
                      ? q.options[q.correctOptionIndex]
                      : q.referenceAnswer}
                  </p>
                </div>

                {attempt.verdict === EvaluationVerdict.DaVerificare && (
                  <div className="border border-[#171717] p-3.5 mb-3 bg-white">
                    <p className="font-mono-tech text-xs font-semibold text-[#171717] mb-2">
                      REVISIONE DOCENTE
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <button
                        type="button"
                        onClick={() =>
                          onUpdateAttempt(
                            applyManualVerdict(attempt, EvaluationVerdict.Corretta),
                          )
                        }
                        className="px-3 py-1.5 text-xs font-mono-tech border border-[#171717] hover:bg-[#171717] hover:text-white cursor-pointer"
                      >
                        Corretta (1 pt)
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          onUpdateAttempt(
                            applyManualVerdict(attempt, EvaluationVerdict.Parziale),
                          )
                        }
                        className="px-3 py-1.5 text-xs font-mono-tech border border-[#171717] hover:bg-[#171717] hover:text-white cursor-pointer"
                      >
                        Parziale (0,5 pt)
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          onUpdateAttempt(
                            applyManualVerdict(attempt, EvaluationVerdict.NonCorretta),
                          )
                        }
                        className="px-3 py-1.5 text-xs font-mono-tech border border-[#D62828] text-[#D62828] hover:bg-[#D62828] hover:text-white cursor-pointer"
                      >
                        Non corretta (0 pt)
                      </button>
                    </div>
                  </div>
                )}

                <p className="text-sm text-[#52524E] leading-relaxed">
                  <strong className="font-mono-tech text-xs text-[#171717] uppercase mr-1.5">
                    Spiegazione:
                  </strong>
                  {q.explanation}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
