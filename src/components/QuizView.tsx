import React, { useEffect, useRef, useState } from 'react';
import {
  AlertCircle,
  ArrowRight,
  Check,
  HelpCircle,
  Mic,
  MicOff,
  Square,
  X,
} from 'lucide-react';
import { ATLAS_ENTRIES, TOPIC_MAP } from '../data/atlas';
import { ArchitecturalPlateImage } from './ArchitecturalPlateImage';
import {
  AnswerMode,
  EffectiveAnswerMode,
  EvaluationVerdict,
  Question,
  QuestionAttempt,
  QuizSession,
} from '../types/quiz';
import {
  applyManualVerdict,
  calculateScoreSummary,
  evaluateMultipleChoice,
  evaluateOpenResponse,
} from '../utils/evaluator';

interface SpeechRecognitionAlternativeLike {
  transcript: string;
}

interface SpeechRecognitionResultLike {
  isFinal: boolean;
  0: SpeechRecognitionAlternativeLike;
}

interface SpeechRecognitionEventLike {
  resultIndex: number;
  results: ArrayLike<SpeechRecognitionResultLike>;
}

interface SpeechRecognitionErrorEventLike {
  error: string;
}

interface SpeechRecognitionLike {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  onstart: (() => void) | null;
  onend: (() => void) | null;
  onerror: ((event: SpeechRecognitionErrorEventLike) => void) | null;
  onresult: ((event: SpeechRecognitionEventLike) => void) | null;
  start: () => void;
  stop: () => void;
  abort: () => void;
}

type SpeechRecognitionConstructor = new () => SpeechRecognitionLike;

function getSpeechRecognitionConstructor(): SpeechRecognitionConstructor | null {
  if (typeof window === 'undefined') return null;
  const win = window as unknown as {
    SpeechRecognition?: SpeechRecognitionConstructor;
    webkitSpeechRecognition?: SpeechRecognitionConstructor;
  };
  return win.SpeechRecognition ?? win.webkitSpeechRecognition ?? null;
}

interface QuizViewProps {
  session: QuizSession;
  questionMap: Record<string, Question>;
  onRecordAttempt: (attempt: QuestionAttempt) => void;
  onUpdateAttempt: (attempt: QuestionAttempt) => void;
  onNextQuestion: () => void;
  onQuitToConfig: () => void;
}

export const QuizView: React.FC<QuizViewProps> = ({
  session,
  questionMap,
  onRecordAttempt,
  onUpdateAttempt,
  onNextQuestion,
  onQuitToConfig,
}) => {
  const questionId = session.questionIds[session.currentIndex];
  const question = questionMap[questionId];
  const configuredMode: EffectiveAnswerMode =
    session.questionModes[questionId] ?? AnswerMode.Multipla;
  const existingAttempt = session.attempts[questionId];

  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [textInput, setTextInput] = useState('');
  const [validationError, setValidationError] = useState<string | null>(null);

  // Speech recognition states
  const [speechCtor] = useState<SpeechRecognitionConstructor | null>(() =>
    getSpeechRecognitionConstructor(),
  );
  const [fallbackToWritten, setFallbackToWritten] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [interimTranscript, setInterimTranscript] = useState('');
  const [speechNotice, setSpeechNotice] = useState<string | null>(null);
  const recognitionRef = useRef<SpeechRecognitionLike | null>(null);

  const effectiveMode: EffectiveAnswerMode =
    configuredMode === AnswerMode.Orale && (!speechCtor || fallbackToWritten)
      ? AnswerMode.Scritta
      : configuredMode;

  useEffect(() => {
    setSelectedOption(existingAttempt?.selectedOptionIndex ?? null);
    setTextInput(existingAttempt?.textAnswer ?? '');
    setValidationError(null);
    setInterimTranscript('');
    setSpeechNotice(null);
    setFallbackToWritten(false);

    return () => {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.abort();
        } catch {
          // ignore cleanup errors
        }
        recognitionRef.current = null;
      }
      setIsListening(false);
    };
  }, [questionId, existingAttempt]);

  if (!question) {
    return (
      <section className="max-w-[960px] mx-auto px-4 py-12">
        <div className="bg-white border border-[#171717] p-6">
          <p className="text-base text-[#171717] mb-4">
            Domanda non trovata nella sessione corrente.
          </p>
          <button
            type="button"
            onClick={onQuitToConfig}
            className="px-4 py-2 bg-[#171717] text-white font-mono-tech text-xs cursor-pointer"
          >
            Torna alla configurazione
          </button>
        </div>
      </section>
    );
  }

  const summary = calculateScoreSummary(session.questionIds, session.attempts);
  const topicMeta = TOPIC_MAP[question.topic];
  const isLastQuestion = session.currentIndex === session.questionIds.length - 1;
  const optionLetters = ['A', 'B', 'C', 'D'] as const;

  const stopListening = () => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch {
        // ignore stop errors
      }
    }
    setIsListening(false);
    setInterimTranscript('');
  };

  const startListening = async () => {
    setValidationError(null);
    setSpeechNotice(null);

    if (!speechCtor) {
      setFallbackToWritten(true);
      setSpeechNotice(
        'Il riconoscimento vocale non è disponibile su questo browser. È stata attivata automaticamente la risposta scritta.',
      );
      return;
    }

    // Request explicit microphone permission first without recording audio files
    if (typeof navigator !== 'undefined' && navigator.mediaDevices?.getUserMedia) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        stream.getTracks().forEach((track) => track.stop());
      } catch (err) {
        const errorName = err instanceof Error ? err.name : '';
        if (errorName === 'NotAllowedError' || errorName === 'PermissionDeniedError') {
          setSpeechNotice(
            'Permesso per il microfono negato. Puoi concederlo dalle impostazioni del browser oppure passare alla risposta scritta.',
          );
        } else {
          setSpeechNotice(
            'Microfono non disponibile o non rilevato. Puoi digitare direttamente la tua risposta qui sotto.',
          );
        }
        setFallbackToWritten(true);
        return;
      }
    }

    try {
      const recognition = new speechCtor();
      recognition.lang = 'it-IT';
      recognition.continuous = true;
      recognition.interimResults = true;

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event: SpeechRecognitionEventLike) => {
        let finalChunk = '';
        let interimChunk = '';
        for (let i = event.resultIndex; i < event.results.length; i += 1) {
          const result = event.results[i];
          const text = result[0]?.transcript ?? '';
          if (result.isFinal) {
            finalChunk += `${text} `;
          } else {
            interimChunk += text;
          }
        }
        if (finalChunk.trim()) {
          setTextInput((prev) => `${prev.trim()} ${finalChunk.trim()}`.trim());
        }
        setInterimTranscript(interimChunk);
      };

      recognition.onerror = (event: SpeechRecognitionErrorEventLike) => {
        setIsListening(false);
        setInterimTranscript('');
        if (event.error === 'not-allowed' || event.error === 'service-not-allowed') {
          setSpeechNotice(
            'Accesso al microfono non consentito dal browser. Passaggio automatico alla risposta scritta.',
          );
          setFallbackToWritten(true);
        } else if (event.error === 'no-speech') {
          setSpeechNotice('Nessun parlato rilevato. Riprova parlando vicino al microfono oppure scrivi la risposta.');
        } else if (event.error === 'network') {
          setSpeechNotice(
            'Servizio di riconoscimento vocale temporaneamente non raggiungibile. Puoi completare o modificare il testo manualmente.',
          );
        } else {
          setSpeechNotice(
            'Si è verificato un errore durante il riconoscimento vocale. Puoi proseguire scrivendo la risposta.',
          );
        }
      };

      recognition.onend = () => {
        setIsListening(false);
        setInterimTranscript('');
      };

      recognitionRef.current = recognition;
      recognition.start();
    } catch {
      setIsListening(false);
      setFallbackToWritten(true);
      setSpeechNotice(
        'Impossibile avviare il riconoscimento vocale su questo dispositivo. È stata attivata la risposta scritta.',
      );
    }
  };

  const handleConfirm = () => {
    if (existingAttempt) return;

    if (effectiveMode === AnswerMode.Multipla) {
      if (selectedOption === null) {
        setValidationError('Seleziona una delle quattro opzioni (A, B, C, D) prima di confermare.');
        return;
      }
      setValidationError(null);
      const attempt = evaluateMultipleChoice(question, selectedOption);
      onRecordAttempt(attempt);
      return;
    }

    const combinedText = `${textInput} ${interimTranscript}`.trim();
    if (!combinedText) {
      setValidationError(
        effectiveMode === AnswerMode.Orale
          ? 'Registra o inserisci una trascrizione prima di confermare la risposta.'
          : 'Scrivi una breve risposta (da una a quattro frasi) prima di confermare.',
      );
      return;
    }

    if (isListening) {
      stopListening();
    }

    setValidationError(null);
    const attempt = evaluateOpenResponse(question, combinedText, effectiveMode);
    onRecordAttempt(attempt);
  };

  const renderVerdictBadge = (verdict: EvaluationVerdict) => {
    switch (verdict) {
      case EvaluationVerdict.Corretta:
        return (
          <div className="inline-flex items-center gap-2 text-sm font-mono-tech font-semibold text-[#171717]">
            <Check className="w-4 h-4 text-[#171717]" aria-hidden="true" />
            <span>CORRETTA · +1 PUNTO</span>
          </div>
        );
      case EvaluationVerdict.Parziale:
        return (
          <div className="inline-flex items-center gap-2 text-sm font-mono-tech font-semibold text-[#171717]">
            <AlertCircle className="w-4 h-4 text-[#D62828]" aria-hidden="true" />
            <span>PARZIALMENTE CORRETTA · +0,5 PUNTI</span>
          </div>
        );
      case EvaluationVerdict.DaVerificare:
        return (
          <div className="inline-flex items-center gap-2 text-sm font-mono-tech font-semibold text-[#D62828]">
            <HelpCircle className="w-4 h-4 text-[#D62828]" aria-hidden="true" />
            <span>DA VERIFICARE · PROVVISORIA (NON CONTEGGIATA COME ERRORE)</span>
          </div>
        );
      case EvaluationVerdict.NonCorretta:
        return (
          <div className="inline-flex items-center gap-2 text-sm font-mono-tech font-semibold text-[#D62828]">
            <X className="w-4 h-4 text-[#D62828]" aria-hidden="true" />
            <span>NON CORRETTA · 0 PUNTI</span>
          </div>
        );
    }
  };

  return (
    <section
      aria-labelledby="quiz-question-text"
      className="max-w-[980px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10"
    >
      {/* Top Section Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#171717] pb-3 mb-6">
        <div className="flex items-center gap-3 font-mono-tech text-xs">
          <span className="text-[#D62828] font-semibold">03 / INTERROGAZIONE</span>
          {session.isReviewMode && (
            <>
              <span aria-hidden="true">·</span>
              <span className="text-[#171717] font-semibold">RIPASSO ERRORI</span>
            </>
          )}
        </div>

        <div className="flex items-center gap-4 font-mono-tech text-xs text-[#171717]">
          <span className="tabular-nums">
            Punteggio: <strong>{summary.points.toString().replace('.', ',')}</strong> / {summary.totalQuestions}
          </span>
          <button
            type="button"
            onClick={onQuitToConfig}
            className="text-[#52524E] hover:text-[#D62828] underline underline-offset-4 cursor-pointer"
          >
            Nuova configurazione
          </button>
        </div>
      </div>

      {/* Linear Segmented Progress Bar */}
      <div className="mb-6" aria-label={`Avanzamento: domanda ${session.currentIndex + 1} di ${session.questionIds.length}`}>
        <div className="flex items-center justify-between font-mono-tech text-xs text-[#52524E] mb-2">
          <span className="tabular-nums">
            DOMANDA {String(session.currentIndex + 1).padStart(2, '0')} / {String(session.questionIds.length).padStart(2, '0')}
          </span>
          <span className="tabular-nums">
            {summary.answeredCount} completate · {summary.correctCount} corrette
          </span>
        </div>
        <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${session.questionIds.length}, minmax(0, 1fr))` }}>
          {session.questionIds.map((id, idx) => {
            const isCurrent = idx === session.currentIndex;
            const hasAttempt = Boolean(session.attempts[id]);
            return (
              <div
                key={id}
                className={`h-1.5 transition-colors ${
                  isCurrent
                    ? 'bg-[#D62828]'
                    : hasAttempt
                      ? 'bg-[#171717]'
                      : 'bg-[#D4D4CE]'
                }`}
              />
            );
          })}
        </div>
      </div>

      {/* Question Card */}
      <article className="arch-plate bg-white border border-[#171717] p-6 sm:p-8">
        {/* Unboxed Clean Metadata Line */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono-tech text-[#52524E] pb-4 mb-5 border-b border-[#D4D4CE]">
          <span className="text-[#171717] font-semibold">{topicMeta.shortTitle}</span>
          <span aria-hidden="true">·</span>
          <span>Livello: {question.difficulty}</span>
          <span aria-hidden="true">·</span>
          <span>
            Modalità:{' '}
            {effectiveMode === AnswerMode.Multipla
              ? 'Risposta multipla'
              : effectiveMode === AnswerMode.Orale
                ? 'Risposta orale (microfono)'
                : 'Risposta breve scritta'}
          </span>
          <span aria-hidden="true">·</span>
          <span className="tabular-nums">Codice {question.id}</span>
        </div>

        <h1
          id="quiz-question-text"
          className="font-display text-xl sm:text-2xl font-bold text-[#171717] leading-snug mb-6"
        >
          {question.text}
        </h1>

        {/* MODE A: MULTIPLE CHOICE */}
        {effectiveMode === AnswerMode.Multipla && (
          <div className="space-y-3" role="radiogroup" aria-label="Opzioni di risposta">
            {(session.questionOptionOrders?.[questionId] ?? [0, 1, 2, 3]).map(
              (originalIdx, displayIdx) => {
                const optionText = question.options[originalIdx];
                const isSelected = selectedOption === originalIdx;
                const isConfirmed = Boolean(existingAttempt);
                const isCorrectOption = originalIdx === question.correctOptionIndex;

                let rowStyle = 'bg-[#F7F7F5] text-[#171717] border-[#D4D4CE] hover:border-[#171717]';
                if (!isConfirmed && isSelected) {
                  rowStyle = 'bg-[#171717] text-white border-[#171717]';
                } else if (isConfirmed) {
                  if (isCorrectOption) {
                    rowStyle = 'bg-white text-[#171717] border-[#171717] ring-2 ring-[#171717]';
                  } else if (isSelected && !isCorrectOption) {
                    rowStyle = 'bg-[#F7F7F5] text-[#D62828] border-[#D62828]';
                  } else {
                    rowStyle = 'bg-[#F7F7F5] text-[#73736E] border-[#E5E5DF]';
                  }
                }

                return (
                  <button
                    key={optionLetters[displayIdx]}
                    type="button"
                    role="radio"
                    aria-checked={isSelected}
                    disabled={isConfirmed}
                    onClick={() => {
                      setSelectedOption(originalIdx);
                      setValidationError(null);
                    }}
                    className={`w-full text-left p-4 border transition-colors flex items-start justify-between gap-4 ${
                      isConfirmed ? 'cursor-default' : 'cursor-pointer'
                    } ${rowStyle}`}
                  >
                    <div className="flex items-start gap-3.5">
                      <span
                        className={`font-mono-tech text-xs font-bold px-2 py-0.5 border shrink-0 mt-0.5 ${
                          isSelected && !isConfirmed
                            ? 'border-white text-white'
                            : isConfirmed && isCorrectOption
                              ? 'border-[#171717] bg-[#171717] text-white'
                              : isConfirmed && isSelected && !isCorrectOption
                                ? 'border-[#D62828] text-[#D62828]'
                                : 'border-[#171717] text-[#171717]'
                        }`}
                      >
                        {optionLetters[displayIdx]}
                      </span>
                      <span className="text-sm sm:text-base leading-relaxed">{optionText}</span>
                    </div>

                    {isConfirmed && isCorrectOption && (
                      <span className="inline-flex items-center gap-1 font-mono-tech text-xs font-semibold text-[#171717] shrink-0 mt-0.5">
                        <Check className="w-4 h-4" aria-hidden="true" />
                        <span>Corretta</span>
                      </span>
                    )}
                    {isConfirmed && isSelected && !isCorrectOption && (
                      <span className="inline-flex items-center gap-1 font-mono-tech text-xs font-semibold text-[#D62828] shrink-0 mt-0.5">
                        <X className="w-4 h-4" aria-hidden="true" />
                        <span>Errata</span>
                      </span>
                    )}
                  </button>
                );
              },
            )}
          </div>
        )}

        {/* MODE B & C: WRITTEN OR ORAL */}
        {(effectiveMode === AnswerMode.Scritta || effectiveMode === AnswerMode.Orale) && (
          <div className="space-y-4">
            {configuredMode === AnswerMode.Orale && (
              <div className="border border-[#D4D4CE] bg-[#F7F7F5] p-4 space-y-3">
                {effectiveMode === AnswerMode.Orale ? (
                  <>
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap items-center gap-2">
                        {!isListening ? (
                          <button
                            type="button"
                            disabled={Boolean(existingAttempt)}
                            onClick={startListening}
                            className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#D62828] text-white border border-[#D62828] font-mono-tech text-xs font-semibold hover:bg-[#a81c1c] transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            <Mic className="w-4 h-4" aria-hidden="true" />
                            <span>ATTIVA MICROFONO (IT)</span>
                          </button>
                        ) : (
                          <button
                            type="button"
                            onClick={stopListening}
                            className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#171717] text-white border border-[#171717] font-mono-tech text-xs font-semibold hover:bg-[#333333] transition-colors cursor-pointer"
                          >
                            <Square className="w-3.5 h-3.5" aria-hidden="true" />
                            <span>TERMINA RISPOSTA</span>
                          </button>
                        )}

                        {!existingAttempt && (
                          <button
                            type="button"
                            onClick={() => {
                              if (isListening) stopListening();
                              setFallbackToWritten(true);
                            }}
                            className="inline-flex items-center gap-1.5 px-3 py-2.5 bg-white text-[#171717] border border-[#171717] font-mono-tech text-xs hover:bg-[#171717] hover:text-white transition-colors cursor-pointer"
                          >
                            <MicOff className="w-3.5 h-3.5" aria-hidden="true" />
                            <span>Usa solo tastiera</span>
                          </button>
                        )}
                      </div>

                      {isListening && (
                        <div className="flex items-center gap-2 font-mono-tech text-xs font-semibold text-[#D62828]">
                          <span>ASCOLTO IN CORSO</span>
                        </div>
                      )}
                    </div>

                    {isListening && (
                      <div className="w-full h-1 bg-[#D4D4CE] overflow-hidden" aria-hidden="true">
                        <div className="h-full w-1/3 bg-[#D62828] animate-pulse" />
                      </div>
                    )}
                  </>
                ) : null}

                <p className="text-xs text-[#52524E] leading-relaxed">
                  Informativa: il riconoscimento vocale utilizza le API del browser (it-IT), che possono inviare l’audio ai servizi del fornitore del browser; non è garantito il funzionamento offline. Questa applicazione non registra né archivia file audio.
                </p>

                {speechNotice && (
                  <p className="text-xs font-medium text-[#D62828] bg-white border border-[#D62828] p-2.5">
                    {speechNotice}
                  </p>
                )}
              </div>
            )}

            <div>
              <label
                htmlFor="open-answer-textarea"
                className="block font-mono-tech text-xs font-semibold text-[#171717] mb-2"
              >
                {effectiveMode === AnswerMode.Orale
                  ? 'TRASCRIZIONE RISPOSTA ORALE (PUOI CORREGGERLA MANUALMENTE PRIMA DI CONFERMARE)'
                  : 'RISPOSTA BREVE SCRITTA (1–4 FRASI)'}
              </label>
              <textarea
                id="open-answer-textarea"
                rows={4}
                disabled={Boolean(existingAttempt)}
                value={
                  interimTranscript
                    ? `${textInput}${textInput ? ' ' : ''}${interimTranscript}`
                    : textInput
                }
                onChange={(e) => {
                  setTextInput(e.target.value);
                  setValidationError(null);
                }}
                placeholder={
                  effectiveMode === AnswerMode.Orale
                    ? 'Premi "Attiva microfono" per dettare in italiano oppure digita o modifica qui il testo...'
                    : 'Esponi in modo sintetico e preciso i concetti architettonici richiesti...'
                }
                className="w-full p-3.5 bg-[#F7F7F5] border border-[#171717] text-sm sm:text-base text-[#171717] placeholder:text-[#73736E] focus:bg-white disabled:opacity-80"
              />
            </div>
          </div>
        )}

        {validationError && (
          <p role="alert" className="mt-4 text-xs sm:text-sm font-medium text-[#D62828]">
            {validationError}
          </p>
        )}

        {/* Immediate Feedback Panel */}
        {existingAttempt && (
          <div className="mt-6 border border-[#171717] bg-[#F7F7F5] p-5 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#D4D4CE]">
              {renderVerdictBadge(existingAttempt.verdict)}
              {existingAttempt.manualOverride && (
                <span className="font-mono-tech text-xs text-[#52524E]">
                  Verificata dal docente
                </span>
              )}
            </div>

            <p className="text-sm text-[#171717]">{existingAttempt.evaluationReason}</p>

            {/* Open response concept criteria breakdown */}
            {existingAttempt.modeUsed !== AnswerMode.Multipla && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <p className="font-mono-tech text-xs font-semibold text-[#171717] mb-1.5">
                    CONCETTI RILEVATI
                  </p>
                  {existingAttempt.matchedConcepts.length > 0 ? (
                    <ul className="text-xs text-[#171717] space-y-1">
                      {existingAttempt.matchedConcepts.map((c) => (
                        <li key={c} className="flex items-start gap-1.5">
                          <Check className="w-3.5 h-3.5 shrink-0 mt-0.5" aria-hidden="true" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-xs text-[#73736E]">Nessuno rilevato automaticamente.</p>
                  )}
                </div>

                <div>
                  <p className="font-mono-tech text-xs font-semibold text-[#171717] mb-1.5">
                    CONCETTI DA INTEGRARE
                  </p>
                  {existingAttempt.missedConcepts.length > 0 ? (
                    <ul className="text-xs text-[#D62828] space-y-1">
                      {existingAttempt.missedConcepts.map((c) => (
                        <li key={c} className="flex items-start gap-1.5">
                          <X className="w-3.5 h-3.5 shrink-0 mt-0.5" aria-hidden="true" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-xs text-[#52524E]">Tutti i criteri essenziali coperti.</p>
                  )}
                </div>
              </div>
            )}

            {/* Teacher Manual Review ONLY for ambiguous DaVerificare */}
            {existingAttempt.verdict === EvaluationVerdict.DaVerificare && (
              <div className="bg-white border border-[#171717] p-4">
                <p className="font-mono-tech text-xs font-semibold text-[#171717] mb-2">
                  REVISIONE MANUALE DEL DOCENTE (VALUTAZIONE PROVVISORIA)
                </p>
                <p className="text-xs text-[#52524E] mb-3">
                  Confronta la risposta con i criteri attesi e assegna l’esito definitivo:
                </p>
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      onUpdateAttempt(
                        applyManualVerdict(existingAttempt, EvaluationVerdict.Corretta),
                      )
                    }
                    className="px-3 py-1.5 text-xs font-mono-tech font-semibold bg-white border border-[#171717] hover:bg-[#171717] hover:text-white transition-colors cursor-pointer"
                  >
                    Segna Corretta (1 pt)
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      onUpdateAttempt(
                        applyManualVerdict(existingAttempt, EvaluationVerdict.Parziale),
                      )
                    }
                    className="px-3 py-1.5 text-xs font-mono-tech font-semibold bg-white border border-[#171717] hover:bg-[#171717] hover:text-white transition-colors cursor-pointer"
                  >
                    Segna Parziale (0,5 pt)
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      onUpdateAttempt(
                        applyManualVerdict(existingAttempt, EvaluationVerdict.NonCorretta),
                      )
                    }
                    className="px-3 py-1.5 text-xs font-mono-tech font-semibold bg-white border border-[#D62828] text-[#D62828] hover:bg-[#D62828] hover:text-white transition-colors cursor-pointer"
                  >
                    Segna Non corretta (0 pt)
                  </button>
                </div>
              </div>
            )}

            {/* Reference Answer + Historical Explanation + Post-Answer Work Plate */}
            <div className="pt-4 border-t border-[#171717] grid grid-cols-1 md:grid-cols-12 gap-5 items-start">
              <div className="md:col-span-8 space-y-2">
                {existingAttempt.modeUsed !== AnswerMode.Multipla && (
                  <p className="text-xs sm:text-sm text-[#171717]">
                    <strong className="font-mono-tech text-xs uppercase mr-1.5">
                      Risposta di riferimento:
                    </strong>
                    {question.referenceAnswer}
                  </p>
                )}
                <p className="text-xs sm:text-sm text-[#171717] leading-relaxed">
                  <strong className="font-mono-tech text-xs uppercase mr-1.5">
                    Spiegazione storica e tecnica:
                  </strong>
                  {question.explanation}
                </p>
                <p className="text-xs text-[#52524E]">
                  <strong className="font-mono-tech uppercase mr-1.5">Suggerimento per il ripasso:</strong>
                  {question.studyTip}
                </p>
              </div>

              {(() => {
                const atlasItem = ATLAS_ENTRIES.find((a) => a.id === question.topic);
                if (!atlasItem) return null;
                return (
                  <div className="md:col-span-4">
                    <ArchitecturalPlateImage
                      src={atlasItem.imagePath}
                      alt={atlasItem.imageAlt}
                      plateCode={`TAV. ${atlasItem.index}`}
                      caption={atlasItem.title}
                    />
                  </div>
                );
              })()}
            </div>
          </div>
        )}

        {/* Primary Action Row */}
        <div className="mt-6 pt-5 border-t border-[#D4D4CE] flex flex-wrap items-center justify-between gap-4">
          {!existingAttempt ? (
            <button
              type="button"
              onClick={handleConfirm}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#D62828] text-white border border-[#D62828] font-mono-tech text-xs sm:text-sm font-semibold tracking-wide hover:bg-[#a81c1c] transition-colors cursor-pointer"
            >
              <span>
                {effectiveMode === AnswerMode.Orale ? 'CONFERMA RISPOSTA' : 'CONFERMA'}
              </span>
            </button>
          ) : (
            <button
              type="button"
              onClick={onNextQuestion}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#171717] text-white border border-[#171717] font-mono-tech text-xs sm:text-sm font-semibold tracking-wide hover:bg-[#D62828] hover:border-[#D62828] transition-colors cursor-pointer"
            >
              <span>{isLastQuestion ? 'VAI AI RISULTATI' : 'DOMANDA SUCCESSIVA'}</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          )}

          <span className="font-mono-tech text-xs text-[#73736E]">
            {existingAttempt
              ? 'Risposta registrata — punteggio bloccato'
              : 'Nessun limite di tempo obbligatorio'}
          </span>
        </div>
      </article>
    </section>
  );
};
