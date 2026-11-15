import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ATLAS_ENTRIES } from '../data/atlas';
import { TopicId } from '../types/quiz';
import { ArchitecturalPlateImage } from './ArchitecturalPlateImage';
import { ArchitecturalDiagram } from './diagrams/ArchitecturalDiagrams';

interface AtlasViewProps {
  selectedTopic: TopicId;
  onSelectTopic: (topic: TopicId) => void;
  onQuizTopic: (topic: TopicId) => void;
}

export const AtlasView: React.FC<AtlasViewProps> = ({
  selectedTopic,
  onSelectTopic,
  onQuizTopic,
}) => {
  const activeEntry =
    ATLAS_ENTRIES.find((entry) => entry.id === selectedTopic) ?? ATLAS_ENTRIES[0];

  return (
    <section
      aria-labelledby="atlas-title"
      className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10"
    >
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-b border-[#171717] pb-2.5 mb-7">
        <span className="font-mono-tech text-xs tracking-wider text-[#D62828] font-semibold whitespace-nowrap">
          05 / ATLANTE ARCHITETTONICO
        </span>
        <span className="font-mono-tech text-xs text-[#52524E] whitespace-nowrap">
          CONSULTAZIONE LIBERA · TAVOLE SINTETICHE
        </span>
      </div>

      <div className="mb-7">
        <h1 id="atlas-title" className="font-display text-3xl sm:text-4xl font-bold text-[#171717] mb-2">
          Atlante delle opere e dei principi
        </h1>
        <p className="text-base text-[#52524E] max-w-[70ch]">
          Seleziona una tavola per consultare il riferimento fotografico dell’opera, datazione, localizzazione, caratteri costruttivi, tre concetti chiave e schemi geometrici interpretativi originali.
        </p>
      </div>

      {/* Topic selector bar */}
      <div
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-7"
        role="tablist"
        aria-label="Seleziona tavola dell'atlante"
      >
        {ATLAS_ENTRIES.map((entry) => {
          const isActive = entry.id === activeEntry.id;
          return (
            <button
              key={entry.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => onSelectTopic(entry.id)}
              className={`text-left p-3.5 border cursor-pointer ${
                isActive
                  ? 'bg-[#171717] text-white border-[#171717]'
                  : 'bg-white text-[#171717] border-[#171717] hover:bg-[#EFEFEC]'
              }`}
            >
              <span
                className={`block font-mono-tech text-xs mb-1 ${
                  isActive ? 'text-[#D62828] font-semibold' : 'text-[#73736E]'
                }`}
              >
                TAV. {entry.index}
              </span>
              <span className="block font-display text-sm font-bold leading-snug">
                {entry.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Atlas Sheet (Drafting Board) */}
      <article className="arch-plate bg-white border border-[#171717] p-6 sm:p-8">
        {/* Title Cartiglio */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 pb-6 mb-7 border-b border-[#171717]">
          <div>
            <p className="font-mono-tech text-xs text-[#D62828] font-semibold mb-2">
              TAVOLA {activeEntry.index} · {activeEntry.dating}
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#171717] mb-1">
              {activeEntry.title}
            </h2>
            <p className="text-sm font-mono-tech text-[#52524E]">
              {activeEntry.location} · {activeEntry.subtitle}
            </p>
          </div>

          <button
            type="button"
            onClick={() => onQuizTopic(activeEntry.id)}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#D62828] text-white border border-[#D62828] font-mono-tech text-xs font-semibold hover:bg-[#a81c1c] transition-colors cursor-pointer whitespace-nowrap shrink-0 self-start"
          >
            <span>INTERROGAMI SU QUESTO ARGOMENTO</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

        {/* Visual Dual-Plate Row: Reference Photo + Original Schematic Diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8 items-start">
          <div className="lg:col-span-5">
            <ArchitecturalPlateImage
              src={activeEntry.imagePath}
              alt={activeEntry.imageAlt}
              plateCode={`FOTO · TAV. ${activeEntry.index}`}
              caption={activeEntry.imageCaption}
            />
          </div>

          <div className="lg:col-span-7">
            <ArchitecturalDiagram
              topic={activeEntry.id}
              caption={activeEntry.diagramCaption}
            />
          </div>
        </div>

        {/* Technical Text & Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 border-t border-[#171717]">
          <div className="lg:col-span-5">
            <h3 className="font-mono-tech text-xs font-semibold text-[#73736E] uppercase mb-2.5">
              Inquadramento storico e costruttivo
            </h3>
            <p className="text-sm sm:text-base text-[#171717] leading-relaxed">
              {activeEntry.summary}
            </p>
          </div>

          <div className="lg:col-span-7">
            <h3 className="font-mono-tech text-xs font-semibold text-[#73736E] uppercase mb-2.5">
              Caratteristiche architettoniche fondamentali
            </h3>
            <ul className="space-y-2.5 border-t border-[#D4D4CE] pt-3">
              {activeEntry.architecturalFeatures.map((feat, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-[#171717] leading-relaxed">
                  <span className="font-mono-tech text-xs text-[#D62828] font-semibold mt-0.5 shrink-0">
                    0{i + 1}
                  </span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Three Key Concepts Strip */}
        <div className="mt-8 pt-6 border-t border-[#171717]">
          <h3 className="font-mono-tech text-xs font-semibold text-[#73736E] uppercase mb-4">
            Tre concetti chiave per il ripasso
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 border border-[#171717] divide-y md:divide-y-0 md:divide-x divide-[#171717]">
            {activeEntry.keyConcepts.map((kc, idx) => (
              <div key={kc.title} className="p-5 bg-[#F7F7F5]">
                <p className="font-mono-tech text-xs text-[#D62828] font-semibold mb-1.5">
                  CONCETTO 0{idx + 1}
                </p>
                <h4 className="font-display text-base font-bold text-[#171717] mb-1.5">
                  {kc.title}
                </h4>
                <p className="text-sm text-[#52524E] leading-relaxed">{kc.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </article>
    </section>
  );
};
