import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { ATLAS_ENTRIES } from '../data/atlas';
import { TopicId } from '../types/quiz';
import { HeroAxonometricDiagram } from './diagrams/ArchitecturalDiagrams';

interface HomeViewProps {
  totalQuestionsCount: number;
  hasResumeSession: boolean;
  onStartConfigure: () => void;
  onExploreAtlas: (initialTopic?: TopicId) => void;
  onResumeSession: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  totalQuestionsCount,
  hasResumeSession,
  onStartConfigure,
  onExploreAtlas,
  onResumeSession,
}) => {
  return (
    <section aria-labelledby="home-title" className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
      {/* Drafting Sheet Header Strip */}
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-b border-[#171717] pb-2.5 mb-7">
        <span className="font-mono-tech text-xs tracking-wider text-[#D62828] font-semibold whitespace-nowrap">
          01 / HOME
        </span>
        <span className="font-mono-tech text-xs text-[#52524E] whitespace-nowrap">
          ISTITUTI TECNICI CAT · STORIA DELL’ARCHITETTURA
        </span>
      </div>

      {/* Hero Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        <div className="arch-plate lg:col-span-6 flex flex-col justify-between bg-white border border-[#171717] p-6 sm:p-8">
          <div>
            <div className="flex items-center justify-between border-b border-[#D4D4CE] pb-3 mb-5 font-mono-tech text-xs text-[#52524E]">
              <span>LE CORBUSIER / ARCHITETTURA MODERNA</span>
              <span className="text-[#171717] font-semibold">1926—1960</span>
            </div>

            <h1
              id="home-title"
              className="font-display text-4xl sm:text-5xl lg:text-[3.75rem] font-bold tracking-tight leading-[0.98] text-[#171717] mb-5"
            >
              INTERROGAMI!
            </h1>

            <p className="text-base sm:text-lg text-[#171717] leading-relaxed mb-4 max-w-[56ch]">
              Laboratorio digitale di verifica e ripasso sull’opera teorica e costruita di Le Corbusier, dal sistema costruttivo dei cinque punti alle grandi architetture del secondo dopoguerra.
            </p>
            <p className="text-sm sm:text-base text-[#52524E] leading-relaxed max-w-[58ch]">
              Esercitati con domande a risposta multipla, brevi elaborazioni scritte o esposizione orale guidata al microfono, con spiegazioni storiche, valutazione trasparente e atlante grafico consultabile in qualsiasi momento.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-[#171717]">
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={onStartConfigure}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#D62828] text-white border border-[#D62828] font-mono-tech text-xs sm:text-sm font-semibold tracking-wide hover:bg-[#a81c1c] transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                <span>INIZIA L’INTERROGAZIONE</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={() => onExploreAtlas()}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-[#171717] border border-[#171717] font-mono-tech text-xs sm:text-sm font-medium tracking-wide hover:bg-[#171717] hover:text-white transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                <BookOpen className="w-4 h-4" aria-hidden="true" />
                <span>ESPLORA GLI ARGOMENTI</span>
              </button>
            </div>

            {hasResumeSession && (
              <div className="mt-4 pt-3.5 border-t border-[#D4D4CE] flex items-center justify-between gap-4">
                <span className="text-xs font-mono-tech text-[#52524E]">
                  Sessione locale salvata in corso
                </span>
                <button
                  type="button"
                  onClick={onResumeSession}
                  className="text-xs font-mono-tech font-semibold text-[#D62828] underline underline-offset-4 hover:text-[#a81c1c] cursor-pointer whitespace-nowrap shrink-0"
                >
                  Riprendi interrogazione
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="lg:col-span-6 flex flex-col justify-center">
          <HeroAxonometricDiagram />
        </div>
      </div>

      {/* Modular Cartiglio Strip */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 border border-[#171717] bg-white divide-y md:divide-y-0 md:divide-x divide-[#171717]">
        <div className="p-5">
          <p className="font-mono-tech text-xs text-[#73736E] mb-1">01 · ARCHIVIO DIDATTICO</p>
          <p className="font-display text-2xl font-bold tabular-nums text-[#171717]">
            {totalQuestionsCount} Quesiti
          </p>
          <p className="text-sm text-[#52524E] mt-1">
            Distinti su tre livelli di difficoltà: Base, Intermedia e Avanzata.
          </p>
        </div>
        <div className="p-5">
          <p className="font-mono-tech text-xs text-[#73736E] mb-1">02 · MODALITÀ DI VERIFICA</p>
          <p className="font-display text-2xl font-bold text-[#171717]">
            3 Formati
          </p>
          <p className="text-sm text-[#52524E] mt-1">
            Scelta multipla, risposta breve scritta e risposta orale in italiano.
          </p>
        </div>
        <div className="p-5">
          <p className="font-mono-tech text-xs text-[#73736E] mb-1">03 · ATLANTE ARCHITETTONICO</p>
          <p className="font-display text-2xl font-bold text-[#171717]">
            6 Tavole
          </p>
          <p className="text-sm text-[#52524E] mt-1">
            Riferimenti fotografici e schemi geometrici interpretativi consultabili liberamente.
          </p>
        </div>
      </div>

      {/* Six Curriculum Units with Reference Photography Plates */}
      <div className="mt-10">
        <div className="flex flex-wrap items-baseline justify-between gap-2 pb-2.5 mb-5 border-b border-[#171717]">
          <h2 className="font-display text-xl font-bold text-[#171717]">
            Indice dei nuclei tematici e opere di riferimento
          </h2>
          <span className="font-mono-tech text-xs text-[#52524E]">
            TAVOLE 01—06 · CONSULTAZIONE RAPIDA
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ATLAS_ENTRIES.map((entry) => (
            <button
              key={entry.id}
              type="button"
              onClick={() => onExploreAtlas(entry.id)}
              className="group arch-plate text-left bg-white border border-[#171717] hover:bg-[#171717] hover:text-white transition-colors cursor-pointer flex flex-col justify-between overflow-hidden"
            >
              <div className="w-full aspect-[4/3] bg-[#EFEFEC] border-b border-[#171717] overflow-hidden">
                <img
                  src={entry.imagePath}
                  alt={entry.imageAlt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale contrast-[1.06] group-hover:scale-[1.02] transition-transform duration-200"
                />
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between w-full">
                <div>
                  <div className="flex items-center justify-between font-mono-tech text-xs text-[#D62828] group-hover:text-[#D62828] mb-2">
                    <span className="font-semibold">TAV. {entry.index}</span>
                    <span className="text-[#52524E] group-hover:text-[#D4D4CE]">
                      {entry.dating.split('(')[0].trim()}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold leading-snug mb-2">
                    {entry.title}
                  </h3>
                </div>
                <p className="text-xs font-mono-tech text-[#52524E] group-hover:text-[#D4D4CE] pt-3 mt-2 border-t border-[#D4D4CE] group-hover:border-[#52524E]">
                  {entry.location}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
