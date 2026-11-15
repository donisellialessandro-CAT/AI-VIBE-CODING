import React, { useState } from 'react';
import { TopicId } from '../../types/quiz';

interface DiagramProps {
  topic: TopicId;
  caption?: string;
}

export const HeroAxonometricDiagram: React.FC = () => {
  const perspectiveRays = [-380, -280, -195, -125, -70, -25, 25, 70, 125, 195, 280, 380];
  const horizonDepths = [174, 182, 193, 208, 228, 255, 290, 336];

  return (
    <figure className="arch-plate border border-[#171717] bg-white p-4 sm:p-5">
      <div className="flex items-center justify-between border-b border-[#171717] pb-2 mb-3 font-mono-tech text-[11px] text-[#171717]">
        <span>TAV. 00 / PROSPETTIVA E ASSONOMETRIA MODULARE</span>
        <span className="text-[#D62828] font-semibold">SCALA 1:100</span>
      </div>

      <svg
        viewBox="0 0 560 390"
        className="w-full h-auto block border border-[#171717] bg-white"
        role="img"
        aria-label="Tavola di progetto originale con griglia prospettica infinita all'orizzonte e volume sospeso su pilotis"
      >
        <defs>
          <pattern id="hero-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#EBEBE6" strokeWidth="0.7" />
          </pattern>
        </defs>
        <rect x="0" y="0" width="560" height="390" fill="url(#hero-grid)" />

        {/* Superstudio-inspired original infinite perspective ground plane */}
        <rect x="0" y="168" width="560" height="222" fill="#F7F7F5" fillOpacity="0.92" />
        <line x1="0" y1="168" x2="560" y2="168" stroke="#171717" strokeWidth="1.2" />

        {/* Perspective depth lines converging to central horizon vanishing point (280, 168) */}
        {perspectiveRays.map((offset) => (
          <line
            key={offset}
            x1="280"
            y1="168"
            x2={280 + offset}
            y2="390"
            stroke="#171717"
            strokeWidth="0.65"
            strokeOpacity="0.45"
          />
        ))}
        {/* Foreshortened horizontal grid lines */}
        {horizonDepths.map((y) => (
          <line
            key={y}
            x1="0"
            y1={y}
            x2="560"
            y2={y}
            stroke="#171717"
            strokeWidth={y > 250 ? '0.9' : '0.6'}
            strokeOpacity={y > 250 ? '0.65' : '0.45'}
          />
        ))}

        {/* Red datum horizon axis */}
        <line x1="0" y1="168" x2="560" y2="168" stroke="#D62828" strokeWidth="1.3" />
        <line x1="280" y1="18" x2="280" y2="390" stroke="#D62828" strokeWidth="0.7" strokeDasharray="4 4" />

        {/* Ground projection footprint */}
        <polygon
          points="105,295 295,232 455,286 265,349"
          fill="#FFFFFF"
          stroke="#171717"
          strokeWidth="1.3"
        />

        {/* Construction extension lines */}
        <line x1="105" y1="295" x2="105" y2="102" stroke="#52524E" strokeWidth="0.8" strokeDasharray="3 3" />
        <line x1="455" y1="286" x2="455" y2="92" stroke="#52524E" strokeWidth="0.8" strokeDasharray="3 3" />
        <line x1="265" y1="349" x2="265" y2="156" stroke="#52524E" strokeWidth="0.8" strokeDasharray="3 3" />

        {/* Pilotis vertical supports */}
        <line x1="132" y1="286" x2="132" y2="202" stroke="#171717" strokeWidth="2.6" />
        <line x1="196" y1="265" x2="196" y2="181" stroke="#171717" strokeWidth="2.6" />
        <line x1="260" y1="244" x2="260" y2="160" stroke="#171717" strokeWidth="2.6" />
        <line x1="195" y1="312" x2="195" y2="228" stroke="#171717" strokeWidth="2.6" />
        <line x1="265" y1="335" x2="265" y2="251" stroke="#171717" strokeWidth="2.6" />
        <line x1="330" y1="314" x2="330" y2="230" stroke="#171717" strokeWidth="2.6" />
        <line x1="395" y1="292" x2="395" y2="208" stroke="#171717" strokeWidth="2.6" />

        {/* Elevated main suspended volume */}
        <polygon
          points="115,208 265,258 265,160 115,110"
          fill="#FFFFFF"
          stroke="#171717"
          strokeWidth="1.7"
        />
        <polygon
          points="265,258 438,200 438,102 265,160"
          fill="#EFEFEC"
          stroke="#171717"
          strokeWidth="1.7"
        />
        <polygon
          points="115,110 288,52 438,102 265,160"
          fill="#FFFFFF"
          stroke="#171717"
          strokeWidth="1.7"
        />

        {/* Ribbon windows */}
        <polygon
          points="122,163 257,208 257,186 122,141"
          fill="#171717"
          fillOpacity="0.12"
          stroke="#171717"
          strokeWidth="1.1"
        />
        <polygon
          points="273,208 430,155 430,133 273,186"
          fill="#171717"
          fillOpacity="0.12"
          stroke="#171717"
          strokeWidth="1.1"
        />

        {/* Red curved roof solarium */}
        <path
          d="M 225 108 C 252 84, 308 86, 328 111 L 328 92 C 308 67, 252 65, 225 89 Z"
          fill="#D62828"
          fillOpacity="0.16"
          stroke="#D62828"
          strokeWidth="1.6"
        />

        {/* Promenade path */}
        <polyline
          points="162,294 222,244 300,214 256,136"
          fill="none"
          stroke="#D62828"
          strokeWidth="2"
          strokeDasharray="5 3"
        />
        <circle cx="162" cy="294" r="3.5" fill="#D62828" />
        <circle cx="256" cy="136" r="3.5" fill="#D62828" />

        {/* Technical callout labels */}
        <line x1="438" y1="102" x2="470" y2="74" stroke="#171717" strokeWidth="1" />
        <text x="474" y="71" fontSize="9.5" fontFamily="IBM Plex Mono, monospace" fill="#171717" fontWeight="600">
          01 TETTO
        </text>
        <text x="474" y="83" fontSize="8.5" fontFamily="IBM Plex Mono, monospace" fill="#52524E">
          GIARDINO
        </text>

        <line x1="430" y1="144" x2="470" y2="144" stroke="#171717" strokeWidth="1" />
        <text x="474" y="141" fontSize="9.5" fontFamily="IBM Plex Mono, monospace" fill="#171717" fontWeight="600">
          02 NASTRO
        </text>
        <text x="474" y="153" fontSize="8.5" fontFamily="IBM Plex Mono, monospace" fill="#52524E">
          FACCIATA
        </text>

        <line x1="395" y1="248" x2="470" y2="248" stroke="#171717" strokeWidth="1" />
        <text x="474" y="245" fontSize="9.5" fontFamily="IBM Plex Mono, monospace" fill="#171717" fontWeight="600">
          03 PILOTIS
        </text>
        <text x="474" y="257" fontSize="8.5" fontFamily="IBM Plex Mono, monospace" fill="#52524E">
          TELAIO C.A.
        </text>

        {/* Graphic scale bar */}
        <g transform="translate(18, 360)">
          <rect x="0" y="0" width="24" height="4" fill="#171717" />
          <rect x="24" y="0" width="24" height="4" fill="#FFFFFF" stroke="#171717" strokeWidth="0.8" />
          <rect x="48" y="0" width="24" height="4" fill="#171717" />
          <text x="0" y="15" fontSize="8" fontFamily="IBM Plex Mono, monospace" fill="#171717">
            0      2M     4M     6M
          </text>
        </g>

        <text x="16" y="24" fontSize="9" fontFamily="IBM Plex Mono, monospace" fill="#171717" fontWeight="600">
          ORIZZONTE PROSPETTICO / GRIGLIA CONTINUA
        </text>
        <text x="342" y="375" fontSize="8.5" fontFamily="IBM Plex Mono, monospace" fill="#52524E">
          SCHEMA INTERPRETATIVO ORIGINALE
        </text>
      </svg>

      {/* Drafting-plate Cartiglio footer */}
      <figcaption className="mt-3 pt-3 border-t border-[#171717] grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] font-mono-tech text-[#52524E]">
        <div className="sm:col-span-2">
          <span className="text-[#171717] font-semibold">OGGETTO:</span> Sintesi su griglia prospettica continua e telaio puntiforme.
        </div>
        <div className="sm:text-right text-[#171717]">
          FOGLIO 00 · REV. A
        </div>
      </figcaption>
    </figure>
  );
};

const CinquePuntiDiagram: React.FC = () => {
  const [activePoint, setActivePoint] = useState<number>(1);

  const points = [
    { id: 1, label: '1. Pilotis', desc: 'Pilastri in c.a. che sollevano l’edificio dal suolo umido.' },
    { id: 2, label: '2. Tetto-giardino', desc: 'Solaio piano praticabile con verde e protezione termica.' },
    { id: 3, label: '3. Pianta libera', desc: 'Tramezzi interni indipendenti dallo scheletro portante.' },
    { id: 4, label: '4. Finestra a nastro', desc: 'Apertura orizzontale continua per luce omogenea.' },
    { id: 5, label: '5. Facciata libera', desc: 'Tamponamento arretrato rispetto ai pilastri, solai a sbalzo.' },
  ];

  const strokeFor = (id: number) => (activePoint === id ? '#D62828' : '#171717');
  const widthFor = (id: number) => (activePoint === id ? 2.4 : 1.2);

  return (
    <div>
      <div className="flex flex-wrap gap-1.5 mb-4" role="tablist" aria-label="Seleziona punto dell'architettura">
        {points.map((pt) => (
          <button
            key={pt.id}
            type="button"
            role="tab"
            aria-selected={activePoint === pt.id}
            onClick={() => setActivePoint(pt.id)}
            className={`px-3 py-1.5 text-xs font-mono-tech border transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
              activePoint === pt.id
                ? 'bg-[#D62828] text-white border-[#D62828]'
                : 'bg-white text-[#171717] border-[#D4D4CE] hover:border-[#171717]'
            }`}
          >
            {pt.label}
          </button>
        ))}
      </div>

      <svg
        viewBox="0 0 560 300"
        className="w-full h-auto block border border-[#D4D4CE] bg-[#F7F7F5]"
        role="img"
        aria-label="Diagramma interattivo dei cinque punti dell'architettura moderna"
      >
        {/* Background grid */}
        <line x1="40" y1="255" x2="520" y2="255" stroke="#171717" strokeWidth="1.2" />
        <text x="40" y="275" fontSize="9" fontFamily="IBM Plex Mono, monospace" fill="#52524E">
          QUOTA TERRENO / SUOLO LIBERO
        </text>

        {/* 1. Pilotis */}
        <g stroke={strokeFor(1)} strokeWidth={activePoint === 1 ? 4 : 2.5}>
          <line x1="115" y1="255" x2="115" y2="175" />
          <line x1="215" y1="255" x2="215" y2="175" />
          <line x1="315" y1="255" x2="315" y2="175" />
          <line x1="415" y1="255" x2="415" y2="175" />
        </g>
        {activePoint === 1 && (
          <line x1="75" y1="242" x2="455" y2="242" stroke="#D62828" strokeWidth="1" strokeDasharray="4 3" />
        )}

        {/* Structural slab (5. Facciata libera cantilever) */}
        <rect
          x="80"
          y="167"
          width="370"
          height="8"
          fill={activePoint === 5 ? '#D62828' : '#FFFFFF'}
          fillOpacity={activePoint === 5 ? 0.25 : 1}
          stroke={strokeFor(5)}
          strokeWidth={widthFor(5)}
        />
        <rect
          x="80"
          y="82"
          width="370"
          height="8"
          fill={activePoint === 2 ? '#D62828' : '#FFFFFF'}
          fillOpacity={activePoint === 2 ? 0.15 : 1}
          stroke={activePoint === 2 ? '#D62828' : strokeFor(5)}
          strokeWidth={activePoint === 2 ? 2.4 : widthFor(5)}
        />

        {/* Interior columns continuing up */}
        <g stroke="#A3A39D" strokeWidth="1.2" strokeDasharray="3 3">
          <line x1="115" y1="167" x2="115" y2="90" />
          <line x1="215" y1="167" x2="215" y2="90" />
          <line x1="315" y1="167" x2="315" y2="90" />
          <line x1="415" y1="167" x2="415" y2="90" />
        </g>

        {/* 3. Pianta libera curved partition inside */}
        <path
          d="M 155 167 L 155 90 M 265 167 C 280 140, 250 115, 278 90 M 358 167 L 358 90"
          fill="none"
          stroke={strokeFor(3)}
          strokeWidth={activePoint === 3 ? 2.8 : 1.1}
        />

        {/* 5. Facade skin (front edge overhanging pilotis) */}
        <rect
          x="80"
          y="90"
          width="370"
          height="77"
          fill="none"
          stroke={strokeFor(5)}
          strokeWidth={widthFor(5)}
        />

        {/* 4. Finestra a nastro */}
        <rect
          x="80"
          y="108"
          width="370"
          height="28"
          fill={activePoint === 4 ? '#D62828' : '#171717'}
          fillOpacity={activePoint === 4 ? 0.2 : 0.08}
          stroke={strokeFor(4)}
          strokeWidth={widthFor(4)}
        />

        {/* 2. Tetto-giardino */}
        <g stroke={strokeFor(2)} strokeWidth={widthFor(2)} fill="none">
          <line x1="80" y1="68" x2="80" y2="82" />
          <line x1="450" y1="68" x2="450" y2="82" />
          <path d="M 80 78 Q 140 70 200 78 T 320 78 T 450 78" />
          <circle cx="145" cy="60" r="10" />
          <line x1="145" y1="70" x2="145" y2="82" />
          <rect x="310" y="54" width="60" height="28" />
        </g>

        {/* Dimension arrows for cantilever */}
        <line x1="80" y1="190" x2="115" y2="190" stroke={strokeFor(5)} strokeWidth="1" />
        <text x="48" y="193" fontSize="8.5" fontFamily="IBM Plex Mono, monospace" fill={strokeFor(5)}>
          SBALZO
        </text>

        <text x="16" y="22" fontSize="9.5" fontFamily="IBM Plex Mono, monospace" fill="#171717">
          {points.find((p) => p.id === activePoint)?.label.toUpperCase()}
        </text>
      </svg>
      <p className="mt-2.5 text-sm text-[#171717] font-medium">
        {points.find((p) => p.id === activePoint)?.desc}
      </p>
    </div>
  );
};

const VillaSavoyeDiagram: React.FC = () => (
  <svg
    viewBox="0 0 560 300"
    className="w-full h-auto block border border-[#D4D4CE] bg-[#F7F7F5]"
    role="img"
    aria-label="Schema in sezione della promenade architecturale di Villa Savoye"
  >
    {/* Ground */}
    <line x1="30" y1="255" x2="530" y2="255" stroke="#171717" strokeWidth="1.3" />
    {/* Pilotis grid */}
    <line x1="95" y1="255" x2="95" y2="180" stroke="#171717" strokeWidth="2.5" />
    <line x1="185" y1="255" x2="185" y2="180" stroke="#171717" strokeWidth="2.5" />
    <line x1="275" y1="255" x2="275" y2="180" stroke="#171717" strokeWidth="2.5" />
    <line x1="365" y1="255" x2="365" y2="180" stroke="#171717" strokeWidth="2.5" />
    <line x1="455" y1="255" x2="455" y2="180" stroke="#171717" strokeWidth="2.5" />

    {/* Curved ground floor glazed enclosure */}
    <path
      d="M 160 255 L 160 180 L 395 180 L 395 255"
      fill="#FFFFFF"
      fillOpacity="0.6"
      stroke="#171717"
      strokeWidth="1"
      strokeDasharray="3 3"
    />

    {/* Piano nobile box */}
    <rect x="75" y="110" width="405" height="70" fill="#FFFFFF" stroke="#171717" strokeWidth="1.6" />
    {/* Finestra a nastro */}
    <rect x="75" y="125" width="405" height="24" fill="#171717" fillOpacity="0.08" stroke="#171717" strokeWidth="1" />
    {/* Patio cut-out indication */}
    <rect x="315" y="110" width="140" height="70" fill="#F7F7F5" stroke="#171717" strokeWidth="1" strokeDasharray="4 3" />

    {/* Solarium curve on roof */}
    <path
      d="M 155 110 L 155 62 C 195 48, 255 56, 285 78 L 285 110"
      fill="#FFFFFF"
      stroke="#171717"
      strokeWidth="1.5"
    />

    {/* Promenade Architecturale Ramp in Red */}
    <polyline
      points="175,255 280,180 205,110 265,70"
      fill="none"
      stroke="#D62828"
      strokeWidth="2.5"
    />
    <circle cx="175" cy="255" r="4" fill="#D62828" />
    <circle cx="280" cy="180" r="4" fill="#D62828" />
    <circle cx="205" cy="110" r="4" fill="#D62828" />
    <circle cx="265" cy="70" r="4" fill="#D62828" />

    {/* Spiral stair vertical column */}
    <rect x="132" y="110" width="16" height="145" fill="none" stroke="#171717" strokeWidth="1" />
    <line x1="132" y1="130" x2="148" y2="140" stroke="#171717" strokeWidth="0.9" />
    <line x1="132" y1="160" x2="148" y2="170" stroke="#171717" strokeWidth="0.9" />
    <line x1="132" y1="190" x2="148" y2="200" stroke="#171717" strokeWidth="0.9" />
    <line x1="132" y1="220" x2="148" y2="230" stroke="#171717" strokeWidth="0.9" />

    <text x="16" y="24" fontSize="9.5" fontFamily="IBM Plex Mono, monospace" fill="#171717">
      SEZIONE SCHEMATICA — PROMENADE ARCHITECTURALE (POISSY, 1928–31)
    </text>
    <text x="292" y="75" fontSize="8.5" fontFamily="IBM Plex Mono, monospace" fill="#D62828">
      SOLARIUM / TETTO-GIARDINO
    </text>
    <text x="328" y="148" fontSize="8.5" fontFamily="IBM Plex Mono, monospace" fill="#52524E">
      PATIO PIANO NOBILE
    </text>
    <text x="466" y="232" fontSize="8.5" fontFamily="IBM Plex Mono, monospace" fill="#52524E">
      PILOTIS
    </text>
  </svg>
);

const UniteDiagram: React.FC = () => (
  <svg
    viewBox="0 0 560 300"
    className="w-full h-auto block border border-[#D4D4CE] bg-[#F7F7F5]"
    role="img"
    aria-label="Schema in sezione trasversale dell'Unité d'Habitation di Marsiglia"
  >
    {/* Ground */}
    <line x1="30" y1="268" x2="530" y2="268" stroke="#171717" strokeWidth="1.3" />
    {/* Heavy sculptural pilotis */}
    <polygon points="150,268 185,268 195,215 140,215" fill="#171717" fillOpacity="0.14" stroke="#171717" strokeWidth="1.5" />
    <polygon points="375,268 410,268 420,215 365,215" fill="#171717" fillOpacity="0.14" stroke="#171717" strokeWidth="1.5" />
    {/* Sol artificiel */}
    <rect x="115" y="200" width="330" height="15" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />

    {/* Main block */}
    <rect x="125" y="65" width="310" height="135" fill="#FFFFFF" stroke="#171717" strokeWidth="1.6" />

    {/* Interlocking Duplex Section */}
    {/* Lower L unit */}
    <polygon
      points="145,195 268,195 268,150 295,150 295,172 415,172 415,195"
      fill="#D62828"
      fillOpacity="0.12"
      stroke="#D62828"
      strokeWidth="1.4"
    />
    {/* Upper inverted L unit */}
    <polygon
      points="145,150 268,150 268,128 295,128 295,150 415,150 415,128 145,128"
      fill="#171717"
      fillOpacity="0.06"
      stroke="#171717"
      strokeWidth="1.2"
    />
    {/* Central internal street */}
    <rect x="268" y="150" width="27" height="22" fill="#D62828" />
    <text x="225" y="114" fontSize="8.5" fontFamily="IBM Plex Mono, monospace" fill="#171717">
      STRADA INTERNA / INCASTRO DUPLEX
    </text>

    {/* Brise-soleil logge */}
    <rect x="115" y="128" width="10" height="67" fill="none" stroke="#171717" strokeWidth="1.2" />
    <rect x="435" y="128" width="10" height="67" fill="none" stroke="#171717" strokeWidth="1.2" />

    {/* Roof terrace public facilities */}
    <line x1="125" y1="45" x2="125" y2="65" stroke="#171717" strokeWidth="1.4" />
    <line x1="435" y1="45" x2="435" y2="65" stroke="#171717" strokeWidth="1.4" />
    <rect x="180" y="38" width="75" height="27" fill="#FFFFFF" stroke="#171717" strokeWidth="1.2" />
    <polygon points="315,65 322,30 342,30 349,65" fill="#171717" fillOpacity="0.12" stroke="#171717" strokeWidth="1.2" />

    <text x="16" y="22" fontSize="9.5" fontFamily="IBM Plex Mono, monospace" fill="#171717">
      SEZIONE TRASVERSALE — UNITÉ D’HABITATION (MARSIGLIA, 1947–52)
    </text>
    <text x="182" y="32" fontSize="8.5" fontFamily="IBM Plex Mono, monospace" fill="#52524E">
      TETTO-TERRAZZA COLLETTIVO
    </text>
    <text x="210" y="252" fontSize="8.5" fontFamily="IBM Plex Mono, monospace" fill="#52524E">
      PILOTIS SCULTOREI / BÉTON BRUT
    </text>
  </svg>
);

const ChandigarhDiagram: React.FC = () => (
  <svg
    viewBox="0 0 560 300"
    className="w-full h-auto block border border-[#D4D4CE] bg-[#F7F7F5]"
    role="img"
    aria-label="Schema planimetrico a settori e Campidoglio di Chandigarh"
  >
    {/* Capitol Complex at North */}
    <rect x="175" y="38" width="210" height="58" fill="#D62828" fillOpacity="0.1" stroke="#D62828" strokeWidth="1.5" />
    <rect x="195" y="54" width="42" height="24" fill="#FFFFFF" stroke="#171717" strokeWidth="1.2" />
    <rect x="260" y="48" width="54" height="18" fill="#FFFFFF" stroke="#171717" strokeWidth="1.2" />
    <rect x="330" y="54" width="38" height="24" fill="#FFFFFF" stroke="#171717" strokeWidth="1.2" />
    <text x="175" y="31" fontSize="8.5" fontFamily="IBM Plex Mono, monospace" fill="#D62828">
      SETTORE 1: CAMPIDOGLIO (ASSEMBLEA · SEGRETARIATO · ALTA CORTE)
    </text>

    {/* Sector Grid */}
    {[0, 1, 2, 3].map((col) =>
      [0, 1, 2].map((row) => {
        const x = 110 + col * 86;
        const y = 112 + row * 50;
        const isHeart = col === 1 && row === 1;
        return (
          <g key={`${col}-${row}`}>
            <rect
              x={x}
              y={y}
              width="76"
              height="40"
              fill={isHeart ? '#171717' : '#FFFFFF'}
              fillOpacity={isHeart ? 0.1 : 1}
              stroke="#171717"
              strokeWidth="1.1"
            />
            <line
              x1={x + 38}
              y1={y}
              x2={x + 38}
              y2={y + 40}
              stroke="#A3A39D"
              strokeWidth="0.9"
              strokeDasharray="2 2"
            />
          </g>
        );
      }),
    )}

    {/* 7V Green Leisure Valley ribbon */}
    <rect x="206" y="106" width="18" height="162" fill="#D62828" fillOpacity="0.15" />

    <text x="16" y="20" fontSize="9.5" fontFamily="IBM Plex Mono, monospace" fill="#171717">
      SCHEMA URBANO — SETTORI E RETE VIARIA 7V (CHANDIGARH)
    </text>
    <text x="110" y="282" fontSize="8.5" fontFamily="IBM Plex Mono, monospace" fill="#52524E">
      MAGLIA A SETTORI AUTOSUFFICIENTI (~800×1200 M) E FASCE VERDI
    </text>
  </svg>
);

const RonchampDiagram: React.FC = () => (
  <svg
    viewBox="0 0 560 300"
    className="w-full h-auto block border border-[#D4D4CE] bg-[#F7F7F5]"
    role="img"
    aria-label="Studio astratto della copertura curva e della luce a Notre-Dame du Haut a Ronchamp"
  >
    {/* Sloped hill line */}
    <path d="M 30 250 Q 260 228 530 258" fill="none" stroke="#171717" strokeWidth="1.2" />

    {/* Tapered thick South wall */}
    <polygon
      points="120,242 175,240 155,115 130,115"
      fill="#FFFFFF"
      stroke="#171717"
      strokeWidth="1.6"
    />
    {/* Light apertures piercing wall */}
    <rect x="132" y="140" width="24" height="14" fill="#D62828" fillOpacity="0.28" stroke="#D62828" strokeWidth="1" />
    <rect x="128" y="176" width="35" height="20" fill="#D62828" fillOpacity="0.28" stroke="#D62828" strokeWidth="1" />
    <rect x="124" y="210" width="42" height="12" fill="#D62828" fillOpacity="0.28" stroke="#D62828" strokeWidth="1" />

    {/* Light tower */}
    <path d="M 355 242 L 355 72 L 405 72 L 405 245" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />
    {/* Zenithal light rays inside tower */}
    <line x1="380" y1="78" x2="380" y2="235" stroke="#D62828" strokeWidth="1.5" strokeDasharray="4 3" />

    {/* Sculptural curved hollow roof hovering with light gap */}
    <path
      d="M 85 112 C 190 128, 330 92, 465 72 C 445 102, 315 135, 130 107 Z"
      fill="#171717"
      fillOpacity="0.16"
      stroke="#171717"
      strokeWidth="1.8"
    />

    {/* Light slit indicator */}
    <line x1="130" y1="112" x2="355" y2="112" stroke="#D62828" strokeWidth="2" />

    <text x="16" y="24" fontSize="9.5" fontFamily="IBM Plex Mono, monospace" fill="#171717">
      SEZIONE CONCETTUALE — COPERTURA CURVA E LUCE (RONCHAMP, 1955)
    </text>
    <text x="58" y="192" fontSize="8.5" fontFamily="IBM Plex Mono, monospace" fill="#D62828">
      MURO STROMBATO
    </text>
    <text x="200" y="132" fontSize="8.5" fontFamily="IBM Plex Mono, monospace" fill="#D62828">
      FESSURA LUMINOSA
    </text>
    <text x="415" y="128" fontSize="8.5" fontFamily="IBM Plex Mono, monospace" fill="#52524E">
      TORRE ZENITALE
    </text>
  </svg>
);

const LaTouretteDiagram: React.FC = () => (
  <svg
    viewBox="0 0 560 300"
    className="w-full h-auto block border border-[#D4D4CE] bg-[#F7F7F5]"
    role="img"
    aria-label="Diagramma in sezione sul pendio del Convento di La Tourette"
  >
    {/* Natural hillside slope */}
    <line x1="35" y1="185" x2="525" y2="275" stroke="#171717" strokeWidth="1.4" />
    <text x="415" y="272" fontSize="8.5" fontFamily="IBM Plex Mono, monospace" fill="#52524E">
      PENDIO NATURALE
    </text>

    {/* Constant horizontal roof datum */}
    <line x1="65" y1="68" x2="495" y2="68" stroke="#D62828" strokeWidth="1.6" strokeDasharray="5 3" />
    <text x="70" y="58" fontSize="8.5" fontFamily="IBM Plex Mono, monospace" fill="#D62828">
      ORIZZONTALE COSTANTE DI COPERTURA (TETTO-GIARDINO)
    </text>

    {/* Left blind church volume */}
    <rect x="75" y="68" width="95" height="125" fill="#171717" fillOpacity="0.1" stroke="#171717" strokeWidth="1.6" />
    <text x="95" y="134" fontSize="9" fontFamily="IBM Plex Mono, monospace" fill="#171717">
      CHIESA
    </text>

    {/* Light cannons on low chapel */}
    <polygon points="170,193 220,193 220,150 170,162" fill="#FFFFFF" stroke="#171717" strokeWidth="1.3" />
    <polygon points="185,158 192,132 204,132 200,155" fill="#D62828" fillOpacity="0.3" stroke="#D62828" strokeWidth="1.2" />

    {/* Courtyard walkways */}
    <line x1="170" y1="125" x2="345" y2="125" stroke="#171717" strokeWidth="2" />
    <text x="235" y="118" fontSize="8.5" fontFamily="IBM Plex Mono, monospace" fill="#52524E">
      PASSERELLA
    </text>

    {/* Right monastic cells wing on pilotis following slope */}
    <rect x="345" y="68" width="130" height="58" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />
    <line x1="345" y1="97" x2="475" y2="97" stroke="#171717" strokeWidth="1" />
    {/* Collective spaces below cells */}
    <rect x="345" y="126" width="130" height="44" fill="#FFFFFF" stroke="#171717" strokeWidth="1.2" />
    {/* Ondulatoires vertical rhythm */}
    {[358, 366, 379, 386, 405, 412, 428, 444, 460].map((vx) => (
      <line key={vx} x1={vx} y1="126" x2={vx} y2="170" stroke="#171717" strokeWidth="1" />
    ))}

    {/* Variable height pilotis meeting slope */}
    <line x1="360" y1="170" x2="360" y2="244" stroke="#171717" strokeWidth="2.4" />
    <line x1="410" y1="170" x2="410" y2="253" stroke="#171717" strokeWidth="2.4" />
    <line x1="460" y1="170" x2="460" y2="262" stroke="#171717" strokeWidth="2.4" />

    <text x="16" y="24" fontSize="9.5" fontFamily="IBM Plex Mono, monospace" fill="#171717">
      SEZIONE SUL PENDIO — CONVENTO DE LA TOURETTE (ÉVEUX, 1960)
    </text>
    <text x="355" y="86" fontSize="8.5" fontFamily="IBM Plex Mono, monospace" fill="#171717">
      CELLE + LOGGE
    </text>
    <text x="355" y="185" fontSize="8.5" fontFamily="IBM Plex Mono, monospace" fill="#52524E">
      ONDULATOIRES / PILOTIS
    </text>
  </svg>
);

export const ArchitecturalDiagram: React.FC<DiagramProps> = ({ topic, caption }) => {
  return (
    <figure className="arch-plate bg-white border border-[#171717] p-4 sm:p-5">
      <div className="flex items-center justify-between border-b border-[#171717] pb-2 mb-3 font-mono-tech text-[11px] text-[#171717]">
        <span>DISEGNO ANALITICO / SEZIONE CONCETTUALE</span>
        <span className="text-[#D62828] font-semibold">ELABORAZIONE ORIGINALE</span>
      </div>

      {topic === TopicId.CinquePunti && <CinquePuntiDiagram />}
      {topic === TopicId.VillaSavoye && <VillaSavoyeDiagram />}
      {topic === TopicId.UniteHabitation && <UniteDiagram />}
      {topic === TopicId.Chandigarh && <ChandigarhDiagram />}
      {topic === TopicId.Ronchamp && <RonchampDiagram />}
      {topic === TopicId.LaTourette && <LaTouretteDiagram />}

      <figcaption className="mt-3 pt-3 border-t border-[#171717] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-xs font-mono-tech text-[#52524E]">
        <span>{caption ?? 'Schema interpretativo originale.'}</span>
        <span className="text-[#171717] shrink-0">Non riproduzione fedele</span>
      </figcaption>
    </figure>
  );
};
