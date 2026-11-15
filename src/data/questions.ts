import { Difficulty, Question, TopicId } from '../types/quiz';

export const QUESTION_BANK: Question[] = [
  // =========================================================================
  // ARGOMENTO 1: I CINQUE PUNTI DELL'ARCHITETTURA MODERNA (11 domande)
  // =========================================================================
  {
    id: 'CP-01',
    topic: TopicId.CinquePunti,
    difficulty: Difficulty.Base,
    text: 'Quale innovazione strutturale rende tecnicamente possibili tutti e cinque i punti dell’architettura moderna teorizzati da Le Corbusier?',
    options: [
      'Lo scheletro puntiforme a pilastri e solai in cemento armato',
      'La muratura portante in mattoni pieni con archi di scarico',
      'La volta a botte in pietra da taglio armata con tiranti metallici',
      'La copertura a capriate lignee poggiata su setti murari continui',
    ],
    correctOptionIndex: 0,
    referenceAnswer:
      'I cinque punti derivano dallo scheletro puntiforme in cemento armato (sistema Dom-Ino), che concentra i carichi sui pilastri liberando pareti e facciate dalla funzione portante.',
    requiredConcepts: [
      {
        label: 'Scheletro / telaio in cemento armato',
        synonyms: [
          'cemento armato',
          'calcestruzzo armato',
          'telaio',
          'scheletro',
          'struttura puntiforme',
          'pilastri e solai',
          'domino',
          'dom-ino',
        ],
      },
      {
        label: 'Sostituzione dei muri portanti',
        synonyms: [
          'muri portanti',
          'pareti portanti',
          'libera',
          'indipendente',
          'carichi sui pilastri',
          'non portanti',
        ],
      },
    ],
    explanation:
      'Con il prototipo Maison Dom-Ino (1914–1915), Le Corbusier comprende che pilastri e solette in cemento armato eliminano il muro portante continuo, generando pianta libera, facciata libera e finestre a nastro.',
    studyTip: 'Collega sempre ogni singolo punto alla logica strutturale del telaio in c.a.',
  },
  {
    id: 'CP-02',
    topic: TopicId.CinquePunti,
    difficulty: Difficulty.Base,
    text: 'Qual è la funzione principale dei pilotis nell’impostazione di Le Corbusier?',
    options: [
      'Sollevare l’edificio dal terreno umido lasciando libero il suolo per verde e circolazione',
      'Sostenere unicamente le capriate del tetto a falde inclinate',
      'Decorare il basamento bugnato in pietra come nei palazzi rinascimentali',
      'Isolare acusticamente i locali interrati destinati alle cantine',
    ],
    correctOptionIndex: 0,
    referenceAnswer:
      'I pilotis sono pilastri in cemento armato che sollevano l’edificio dal suolo umido, consentendo la continuità del giardino e dei percorsi sotto il fabbricato.',
    requiredConcepts: [
      {
        label: 'Pilastri / sollevamento dell’edificio',
        synonyms: ['pilastri', 'sollev', 'sospes', 'staccat', 'alz'],
      },
      {
        label: 'Igiene dal suolo umido o continuità del verde/percorsi',
        synonyms: [
          'terreno umido',
          'umidita',
          'suolo libero',
          'giardino',
          'verde',
          'circolazione',
          'passaggio',
        ],
      },
    ],
    explanation:
      'I pilotis sostituiscono gli scantinati umidi e i basamenti murari chiusi: l’edificio appare sospeso e il piano terra rimane permeabile a luce, aria, vegetazione e circolazione.',
    studyTip: 'Ricorda sia il beneficio igienico-salubre sia la continuità del suolo pubblico/verde.',
  },
  {
    id: 'CP-03',
    topic: TopicId.CinquePunti,
    difficulty: Difficulty.Base,
    text: 'Perché Le Corbusier propone il tetto-giardino al posto della tradizionale copertura a falde?',
    options: [
      'Per restituire la superficie verde sottratta al suolo e proteggere il solaio piano dagli sbalzi termici',
      'Per evitare l’uso di membrane impermeabilizzanti e risparmiare sui pluviali',
      'Per accumulare il peso della neve come zavorra antisismica della struttura',
      'Per imitare le terrazze barocche senza modificare la distribuzione interna',
    ],
    correctOptionIndex: 0,
    referenceAnswer:
      'Il tetto-giardino sfrutta il solaio piano in cemento armato per restituire all’uomo lo spazio verde occupato dalla pianta dell’edificio e regolare termicamente la copertura tramite terreno e vegetazione.',
    requiredConcepts: [
      {
        label: 'Restituzione del suolo / spazio verde praticabile',
        synonyms: ['restituir', 'verde', 'giardino', 'terrazza', 'spazio aperto', 'suolo'],
      },
      {
        label: 'Protezione termica o funzionalità del solaio piano',
        synonyms: [
          'solaio piano',
          'tetto piano',
          'umidita',
          'sbalzi termici',
          'isolamento',
          'dilatazioni',
          'protegge',
        ],
      },
    ],
    explanation:
      'Il tetto piano in cemento armato non teme il ristagno se ben impermeabilizzato; anzi, lo strato di terra e piante mantiene costante la temperatura della soletta evitando fessurazioni da sbalzo termico.',
    studyTip: 'Nei temi CAT evidenzia anche l’aspetto tecnico dell’inerzia termica del solaio piano.',
  },
  {
    id: 'CP-04',
    topic: TopicId.CinquePunti,
    difficulty: Difficulty.Base,
    text: 'Che cosa indica esattamente il concetto di «pianta libera» (plan libre)?',
    options: [
      'La possibilità di collocare i tramezzi interni in modo indipendente a ogni piano grazie all’assenza di muri portanti interni',
      'L’obbligo di eliminare qualsiasi parete divisoria trasformando la casa in un unico vano aperto',
      'La costruzione di un edificio privo di pilastri interni su luci superiori a cento metri',
      'La disposizione simmetrica delle stanze lungo un asse centrale fisso',
    ],
    correctOptionIndex: 0,
    referenceAnswer:
      'La pianta libera significa che i tramezzi interni non sono portanti e possono essere disposti con forme e posizioni diverse su ciascun livello secondo le esigenze funzionali.',
    requiredConcepts: [
      {
        label: 'Tramezzi non portanti / svincolati dalla struttura',
        synonyms: [
          'tramezzi',
          'pareti divisorie',
          'muri interni',
          'non portanti',
          'svincolat',
          'indipendent',
        ],
      },
      {
        label: 'Libertà distributiva diversa per ogni piano',
        synonyms: [
          'ogni piano',
          'livello',
          'distribuzione',
          'flessibil',
          'libert',
          'curve',
          'esigenze',
        ],
      },
    ],
    explanation:
      'Nella muratura tradizionale i muri maestri dovevano sovrapporsi esattamente dal basso verso l’alto. Con lo scheletro a pilastri, i tramezzi leggeri si posizionano liberamente a ogni quota.',
    studyTip: 'Distingui pianta libera (organizzazione interna) da facciata libera (pelle esterna).',
  },
  {
    id: 'CP-05',
    topic: TopicId.CinquePunti,
    difficulty: Difficulty.Intermedia,
    text: 'Qual è la differenza sostanziale tra «finestra a nastro» e apertura verticale tradizionale dal punto di vista illuminotecnico e strutturale?',
    options: [
      'La finestra a nastro corre continua da un pilastro all’altro senza architravi murari di facciata, garantendo luce uniforme senza zone d’ombra',
      'La finestra a nastro è sempre alta meno di trenta centimetri per impedire la vista dell’orizzonte',
      'La finestra tradizionale illumina in modo più omogeneo perché taglia verticalmente l’intera altezza del muro',
      'La finestra a nastro richiede necessariamente muri perimetrali portanti spessi almeno sessanta centimetri',
    ],
    correctOptionIndex: 0,
    referenceAnswer:
      'Con la facciata libera i muri esterni non portano carico: la finestra può correre orizzontalmente in modo continuo, distribuendo la luce naturale in maniera uniforme lungo tutta la parete senza alternanza di forti contrasti luce-ombra.',
    requiredConcepts: [
      {
        label: 'Taglio orizzontale continuo / assenza muro portante',
        synonyms: [
          'orizzontale',
          'continua',
          'da un lato allaltro',
          'nastro',
          'senza muro portante',
          'facciata non portante',
        ],
      },
      {
        label: 'Illuminazione uniforme / riduzione zone d’ombra',
        synonyms: ['uniforme', 'omogenea', 'luce', 'illuminazione', 'zone dombra', 'ombre'],
      },
    ],
    explanation:
      'Secondo le misurazioni riportate da Le Corbusier, una fascia finestrata orizzontale illumina gli ambienti interni in modo molto più uniforme rispetto a singole finestre verticali intervallate da spessi maschi murari bui.',
    studyTip: 'Ricorda la celebre polemica di Le Corbusier contro Auguste Perret sulla finestra orizzontale vs verticale.',
  },
  {
    id: 'CP-06',
    topic: TopicId.CinquePunti,
    difficulty: Difficulty.Intermedia,
    text: 'In che modo i pilastri devono essere disposti rispetto al perimetro affinché si realizzi la «facciata libera»?',
    options: [
      'Arretrati rispetto al filo esterno dei solai a sbalzo, così che la facciata diventi una membrana continua leggera',
      'Allineati esattamente sul filo esterno in pietra a vista per scandire gli ordini classici',
      'Collocati esclusivamente agli angoli dell’edificio con travi di bordo in mattoni armati',
      'Sostituiti da contrafforti inclinati sporgenti oltre la linea di gronda',
    ],
    correctOptionIndex: 0,
    referenceAnswer:
      'Arretrando i pilastri verso l’interno e prolungando i solai a sbalzo, la chiusura esterna è completamente svincolata dai punti portanti e può ospitare aperture o pannelli in qualsiasi punto.',
    requiredConcepts: [
      {
        label: 'Pilastri arretrati / solai a sbalzo',
        synonyms: ['arretrat', 'interno', 'sbalzo', 'aggetto', 'mensola'],
      },
      {
        label: 'Involucro leggero indipendente dalla struttura',
        synonyms: [
          'membrana',
          'pelle',
          'tamponamento',
          'indipendente',
          'non portante',
          'svincolata',
        ],
      },
    ],
    explanation:
      'L’arretramento del telaio strutturale genera un piccolo sbalzo del solaio perimetrale: la facciata non deve più interrompersi in corrispondenza dei pilastri e diventa pura composizione di pieni e finestrature continue.',
    studyTip: 'Disegna mentalmente la sezione del solaio che sporge oltre il filo del pilotis.',
  },
  {
    id: 'CP-07',
    topic: TopicId.CinquePunti,
    difficulty: Difficulty.Intermedia,
    text: 'Quale rapporto lega reciprocamente la «pianta libera» e la «facciata libera»?',
    options: [
      'Entrambe derivano dalla separazione tra scheletro portante puntiforme e chiusure non portanti, applicata rispettivamente all’interno e all’involucro',
      'La pianta libera impedisce di aprire finestre continue in facciata per motivi di rigidezza torsionale',
      'La facciata libera riguarda solo i tetti inclinati mentre la pianta libera riguarda solo i seminterrati',
      'Sono indipendenti dal materiale costruttivo e venivano usate regolarmente nell’architettura neoclassica',
    ],
    correctOptionIndex: 0,
    referenceAnswer:
      'Entrambi i principi esprimono la dissociazione tra ossatura portante e chiusure: nella pianta libera si svincolano i tramezzi interni, nella facciata libera si svincola l’involucro esterno.',
    requiredConcepts: [
      {
        label: 'Separazione struttura portante e pareti',
        synonyms: [
          'separazione',
          'dissociazione',
          'scheletro',
          'ossatura',
          'non portanti',
          'svincolat',
        ],
      },
      {
        label: 'Distinzione interno (tramezzi) ed esterno (involucro)',
        synonyms: ['interno', 'tramezzi', 'esterno', 'involucro', 'facciata', 'tamponamento'],
      },
    ],
    explanation:
      'Si tratta delle due facce dello stesso principio tecnologico: lo scheletro in cemento armato assume ogni sforzo statico, liberando tanto l’articolazione planimetrica interna quanto il disegno del prospetto.',
    studyTip: 'In sede di interrogazione usa il binomio «struttura portante / elementi portati».',
  },
  {
    id: 'CP-08',
    topic: TopicId.CinquePunti,
    difficulty: Difficulty.Intermedia,
    text: 'In quali edifici realizzati nel 1927 alla mostra del Weissenhof di Stoccarda Le Corbusier e Pierre Jeanneret applicarono in modo programmatico i cinque punti?',
    options: [
      'Nella casa unifamiliare isolata e nella casa bifamiliare del quartiere sperimentale Weissenhofsiedlung',
      'Nel padiglione dell’Esposizione Internazionale delle Arti Decorative di Parigi',
      'Nel complesso del Campidoglio e nell’Alta Corte del Punjab',
      'Nella cappella pellegrina di Ronchamp e nel convento domenicano di Éveux',
    ],
    correctOptionIndex: 0,
    referenceAnswer:
      'Le Corbusier e Pierre Jeanneret testarono e pubblicizzarono i cinque punti nelle due case realizzate nel 1927 per il quartiere modello Weissenhofsiedlung a Stoccarda.',
    requiredConcepts: [
      {
        label: 'Weissenhof / Stoccarda 1927',
        synonyms: ['weissenhof', 'stoccarda', '1927', 'case modello'],
      },
    ],
    explanation:
      'Proprio in occasione del Weissenhofsiedlung (1927) diretto da Mies van der Rohe, Le Corbusier pubblicò il testo programmatico sui «Cinque punti di una nuova architettura» dimostrando la flessibilità dell’alloggio trasformabile.',
    studyTip: 'Collega il 1927 al Weissenhof di Stoccarda e il 1928–31 alla maturità di Villa Savoye.',
  },
  {
    id: 'CP-09',
    topic: TopicId.CinquePunti,
    difficulty: Difficulty.Avanzata,
    text: 'Confrontando un edificio in muratura portante tradizionale e uno basato sui cinque punti, quale conseguenza principale si osserva nella relazione tra piano terreno, volume abitato e copertura?',
    options: [
      'Il basamento chiuso e il tetto a falde vengono ribaltati: il suolo rimane aperto sotto i pilotis, la vita si eleva nel volume sospeso e il verde si sposta sul tetto-giardino',
      'I carichi si concentrano lungo tutto il perimetro del piano terra rendendo necessarie finestre sempre più piccole verso l’alto',
      'Il tetto diventa inutilizzabile e il piano terra deve ospitare necessariamente tutte le stanze di rappresentanza murate',
      'La sezione verticale perde ogni continuità perché ogni piano deve replicare esattamente la pianta del livello inferiore',
    ],
    correctOptionIndex: 0,
    referenceAnswer:
      'Mentre la casa muraria si radica pesantemente al suolo con cantine e culmina in falde chiuse, il sistema dei cinque punti smaterializza il contatto col terreno tramite i pilotis e trasferisce il giardino sulla copertura piana.',
    requiredConcepts: [
      {
        label: 'Ribaltamento basamento chiuso -> pilotis aperti al suolo',
        synonyms: ['pilotis', 'suolo aperto', 'basamento', 'sollevato', 'terreno'],
      },
      {
        label: 'Trasferimento del verde/uso sulla copertura piana',
        synonyms: ['tetto-giardino', 'tetto giardino', 'copertura piana', 'terrazza', 'verde'],
      },
    ],
    explanation:
      'I cinque punti trasformano radicalmente la tettonica classica (basamento-corpo-coronamento): il peso visivo scompare alla base grazie ai pilotis e la cima piana diventa spazio naturale abitabile.',
    studyTip: 'Immagina la sezione: suolo permeabile in basso, giardino restituito in alto.',
  },
  {
    id: 'CP-10',
    topic: TopicId.CinquePunti,
    difficulty: Difficulty.Avanzata,
    text: 'Perché la finestra a nastro e la facciata libera modificano profondamente anche il modo di progettare i prospetti rispetto alla composizione accademica classica?',
    options: [
      'Superano la simmetria assiale basata su pieni portanti e bucature verticali, sostituendola con un equilibrio dinamico di fasce orizzontali e proporzioni regolatrici',
      'Impongono l’uso obbligatorio di ordini colossali e cornici marcapiano in marmo travertino',
      'Eliminano qualsiasi rapporto proporzionale o tracciato regolatore nella composizione delle facciate',
      'Obbligano a disegnare le quattro facciate dell’edificio in modo perfettamente identico e cieco',
    ],
    correctOptionIndex: 0,
    referenceAnswer:
      'Eliminando i vincoli di simmetria della muratura portante, la facciata libera viene composta tramite tracciati regolatori, rapporti aurei e fasce orizzontali continue che rispondono alla luce e alla funzione interna.',
    requiredConcepts: [
      {
        label: 'Superamento della simmetria muraria tradizionale',
        synonyms: ['simmetria', 'accademica', 'classica', 'bucature verticali', 'equilibrio'],
      },
      {
        label: 'Composizione per fasce orizzontali / tracciati regolatori',
        synonyms: [
          'fasce',
          'orizzontali',
          'tracciati regolatori',
          'proporzioni',
          'funzione',
          'dinamico',
        ],
      },
    ],
    explanation:
      'La facciata non è più un muro bucato simmetricamente per ragioni statiche: diventa una superficie bidimensionale tesa, regolata geometricamente (tracés régulateurs) e aperta verso l’orizzonte.',
    studyTip: 'Ricorda che libertà compositiva in Le Corbusier non significa arbitrio, ma controllo geometrico.',
  },
  {
    id: 'CP-11',
    topic: TopicId.CinquePunti,
    difficulty: Difficulty.Avanzata,
    text: 'In quale delle opere successive di Le Corbusier i cinque punti vengono messi in discussione o superati in modo più radicale nella forma plastica?',
    options: [
      'Nella cappella di Notre-Dame du Haut a Ronchamp, dove murature curve e scultoree sostituiscono lo scheletro ortogonale su pilotis',
      'Nella Villa Savoye a Poissy, che ne costituisce la negazione integrale',
      'Nelle case del Weissenhof a Stoccarda, costruite interamente in pietra portante',
      'Nel padiglione dell’Esprit Nouveau, progettato senza pilastri in cemento armato',
    ],
    correctOptionIndex: 0,
    referenceAnswer:
      'A Ronchamp (1950–1955) Le Corbusier abbandona il prisma su pilotis, la finestra a nastro e il tetto-giardino piano per modellare pareti murarie spesse, strombate e una copertura scultorea curva.',
    requiredConcepts: [
      {
        label: 'Ronchamp',
        synonyms: ['ronchamp', 'notre-dame du haut', 'notre dame du haut', 'cappella'],
      },
      {
        label: 'Abbandono del prisma ortogonale / murature plastiche',
        synonyms: [
          'plastica',
          'scultorea',
          'curv',
          'murature',
          'muri',
          'supera',
          'abbandona',
          'ortogonale',
        ],
      },
    ],
    explanation:
      'Pur continuando a utilizzare cemento armato in altre opere tarde (come l’Unité e La Tourette, dove i pilotis si trasformano in sostegni massicci), a Ronchamp il linguaggio cambia radicalmente verso la plasticità organica.',
    studyTip: 'Ottimo ponte concettuale tra il primo Le Corbusier purista (anni ’20) e il secondo dopoguerra.',
  },

  // =========================================================================
  // ARGOMENTO 2: VILLA SAVOYE (11 domande)
  // =========================================================================
  {
    id: 'VS-01',
    topic: TopicId.VillaSavoye,
    difficulty: Difficulty.Base,
    text: 'Dove e in quali anni fu progettata e costruita Villa Savoye?',
    options: [
      'A Poissy (vicino a Parigi), progettata nel 1928 e costruita tra il 1928 e il 1931',
      'A Marsiglia, progettata nel 1947 e completata nel 1952',
      'A Ginevra, progettata nel 1919 e costruita tra il 1920 e il 1923',
      'A Garches, progettata nel 1935 e ultimata nel 1939',
    ],
    correctOptionIndex: 0,
    referenceAnswer:
      'Villa Savoye si trova a Poissy, vicino a Parigi; fu progettata nel 1928 e costruita tra il 1928 e il 1931.',
    requiredConcepts: [
      { label: 'Poissy (Francia)', synonyms: ['poissy', 'parigi', 'francia'] },
      { label: '1928–1931', synonyms: ['1928', '1931', 'ventotto', 'trentuno'] },
    ],
    explanation:
      'Commissionata dai coniugi Pierre ed Eugénie Savoye come casa di campagna a Poissy, a circa 30 km da Parigi, la villa fu avviata nel 1928 e completata nel 1931.',
    studyTip: 'Fissa bene le date 1928–1931: chiudono la fase purista tra le due guerre.',
  },
  {
    id: 'VS-02',
    topic: TopicId.VillaSavoye,
    difficulty: Difficulty.Base,
    text: 'Quale elemento tecnologico contemporaneo determina la forma curva del volume vetrato al piano terra di Villa Savoye?',
    options: [
      'Il raggio minimo di sterzata dell’automobile che gira attorno al nucleo centrale per accedere al garage',
      'La traiettoria solare invernale calcolata per riscaldare le scuderie',
      'Il tracciato di una linea tranviaria preesistente sul lotto',
      'La forma circolare dell’abside di una cappella romanica adiacente',
    ],
    correctOptionIndex: 0,
    referenceAnswer:
      'La parete vetrata curva del piano terra segue esattamente il raggio di sterzata dell’automobile che accompagna i passeggeri all’ingresso coperto prima di entrare in autorimessa.',
    requiredConcepts: [
      {
        label: 'Automobile / raggio di sterzata',
        synonyms: ['automobile', 'auto', 'macchina', 'sterzata', 'raggio', 'garage', 'autorimessa'],
      },
      {
        label: 'Curva del piano terra',
        synonyms: ['curv', 'piano terra', 'vetrat', 'ingresso'],
      },
    ],
    explanation:
      'Le Corbusier integra l’automobile nella geometria dell’edificio: il passo dei pilotis e la curva dell’atrio consentono all’auto di accostare al coperto sotto il volume sospeso.',
    studyTip: 'Villa Savoye è il simbolo della modernità meccanica integrata nell’abitare.',
  },
  {
    id: 'VS-03',
    topic: TopicId.VillaSavoye,
    difficulty: Difficulty.Base,
    text: 'Che cosa si intende per «promenade architecturale» in Villa Savoye?',
    options: [
      'Il percorso spaziale continuo che guida il visitatore attraverso rampa, scala e terrazze, svelando scorci sempre mutevoli',
      'Il viale alberato esterno riservato esclusivamente alle carrozze dei domestici',
      'La passerella sopraelevata che collega la villa alla stazione ferroviaria di Poissy',
      'La galleria ipogea dedicata all’esposizione delle sculture dei proprietari',
    ],
    correctOptionIndex: 0,
    referenceAnswer:
      'La promenade architecturale è il percorso dinamico di attraversamento dell’edificio — lungo la rampa, la scala e il giardino pensile — attraverso cui lo spazio si rivela progressivamente al movimento dell’osservatore.',
    requiredConcepts: [
      {
        label: 'Percorso spaziale dinamico / movimento',
        synonyms: ['percorso', 'cammino', 'movimento', 'passeggiata', 'attravers', 'visitatore'],
      },
      {
        label: 'Sequenza di rampa, scala, luce e vedute',
        synonyms: ['rampa', 'scala', 'scorci', 'vedute', 'spazio', 'terrazza', 'livelli'],
      },
    ],
    explanation:
      'Per Le Corbusier l’architettura non si coglie da un punto di vista fisso come un quadro prospettico, ma percorrendola: salendo lungo la rampa centrale si attraversano interno ed esterno fino al solarium.',
    studyTip: 'Associa sempre la promenade al concetto di quarta dimensione: il tempo del cammino nello spazio.',
  },
  {
    id: 'VS-04',
    topic: TopicId.VillaSavoye,
    difficulty: Difficulty.Base,
    text: 'Quali due sistemi di collegamento verticale convivono nel cuore di Villa Savoye?',
    options: [
      'Una rampa centrale a doppia salita e una scala elicoidale a chiocciola',
      'Due ascensori idraulici gemelli e una scalinata monumentale esterna',
      'Una scala a forbice in pietra serena e un montacarichi in ghisa',
      'Una scala rettilinea a tre rampe appoggiata sui muri di cinta esterni',
    ],
    correctOptionIndex: 0,
    referenceAnswer:
      'Al centro della villa si trovano sia una rampa inclinata a doppia rampa (asse della promenade architecturale) sia una scala a chiocciola dal profilo scultoreo per i passaggi rapidi.',
    requiredConcepts: [
      { label: 'Rampa', synonyms: ['rampa'] },
      { label: 'Scala a chiocciola / elicoidale', synonyms: ['scala', 'chiocciola', 'elicoidale'] },
    ],
    explanation:
      'La scala permette il collegamento funzionale veloce dal piano terra al tetto, mentre la rampa invita a una salita lenta e contemplativa che collega atrio, soggiorno, terrazza e solarium.',
    studyTip: 'Confronta sempre velocità funzionale della scala e percezione lenta della rampa.',
  },
  {
    id: 'VS-05',
    topic: TopicId.VillaSavoye,
    difficulty: Difficulty.Intermedia,
    text: 'Come è organizzato il rapporto tra spazi coperti e spazi aperti al primo piano (piano nobile) di Villa Savoye?',
    options: [
      'Il volume quadrato superiore ospita l’abitazione disposta a L attorno a una grande terrazza scoperta che prosegue il soggiorno all’aperto',
      'Il primo piano è occupato interamente da camere cieche prive di affacci sull’esterno',
      'Le stanze sono distribuite in quattro padiglioni isolati collegati da ponti levatoi',
      'L’intero primo piano è lasciato vuoto come rimessa per le imbarcazioni',
    ],
    correctOptionIndex: 0,
    referenceAnswer:
      'Al primo piano gli ambienti dell’alloggio (soggiorno, cucina, camere e bagni) si articolano attorno a un grande giardino pensile scoperto delimitato dalle stesse pareti con finestre a nastro del parallelepipedo.',
    requiredConcepts: [
      {
        label: 'Terrazza / patio / giardino pensile integrato al primo piano',
        synonyms: ['terrazza', 'giardino pensile', 'patio', 'scoperto', 'aperto'],
      },
      {
        label: 'Continuità con il soggiorno / forma a L dentro il prisma',
        synonyms: ['soggiorno', 'abitazione', 'forma a l', 'prisma', 'parallelepipedo', 'attorno'],
      },
    ],
    explanation:
      'Dall’esterno Villa Savoye appare come una scatola pura sospesa, ma al suo interno un quarto del piano nobile è scavato a cielo aperto in un ampio giardino protetto dal vento e schermato dalle finestre a nastro.',
    studyTip: 'Osserva in pianta come la «scatola» contenga sia ambienti chiusi sia un vero vuoto urbano privato.',
  },
  {
    id: 'VS-06',
    topic: TopicId.VillaSavoye,
    difficulty: Difficulty.Intermedia,
    text: 'In che modo i prospetti esterni di Villa Savoye rispettano la «facciata libera» e la «finestra a nastro»?',
    options: [
      'Le quattro facciate del blocco superiore sono tagliate da un’identica finestra a nastro orizzontale continua, indipendente dai pilastri arretrati',
      'Solo il prospetto sud presenta finestre continue, mentre gli altri tre lati sono muri pieni in laterizio',
      'Le finestre sono incorniciate da colonne doriche binate poste esattamente sul filo esterno',
      'Ogni prospetto cambia materiale costruttivo passando dal granito alla lamiera ondulata',
    ],
    correctOptionIndex: 0,
    referenceAnswer:
      'Tutti e quattro i fronti del volume superiore presentano una finestra a nastro continua che gira sugli spigoli; i pilastri perimetrali sono arretrati o integrati in modo da non interrompere la lettura orizzontale dell’apertura.',
    requiredConcepts: [
      {
        label: 'Finestra a nastro continua sui quattro fronti',
        synonyms: ['finestra a nastro', 'continua', 'quattro', 'lati', 'orizzontale'],
      },
      {
        label: 'Indipendenza dai pilastri / facciata libera',
        synonyms: ['arretrat', 'indipendent', 'facciata libera', 'pilastri'],
      },
    ],
    explanation:
      'Perfino attorno alla terrazza scoperta del primo piano, la parete di bordo mantiene la stessa finestra a nastro priva di vetri, inquadrando il paesaggio come un quadro continuo e preservando l’unità geometrica del prisma.',
    studyTip: 'Nota il dettaglio raffinato delle aperture non vetrate sul bordo della terrazza: geometria prima ancora che chiusura.',
  },
  {
    id: 'VS-07',
    topic: TopicId.VillaSavoye,
    difficulty: Difficulty.Intermedia,
    text: 'Qual è il ruolo spaziale e compositivo dei setti curvi bianchi situati sul tetto-terrazza di Villa Savoye?',
    options: [
      'Creano un solarium riparato dal vento e definiscono una scultura plastica che dialoga con l’orizzonte e conclude la promenade',
      'Sostengono le cisterne idriche e le turbine eoliche per il riscaldamento',
      'Nascondono il tetto spiovente in tegole rosse richiesto dal comune di Poissy',
      'Costituiscono le pareti portanti di un ulteriore appartamento di servizio',
    ],
    correctOptionIndex: 0,
    referenceAnswer:
      'I setti curvi sul tetto-giardino formano un solarium riparato dal vento, dialogano per contrasto plastico con il parallelepipedo sottostante e concludono la promenade architecturale aprendo una finestra sul paesaggio.',
    requiredConcepts: [
      {
        label: 'Solarium / riparo dal vento',
        synonyms: ['solarium', 'vento', 'riparo', 'riparat'],
      },
      {
        label: 'Conclusione della promenade e dialogo plastico con il paesaggio',
        synonyms: ['promenade', 'paesaggio', 'orizzonte', 'plastico', 'scultura', 'finestra'],
      },
    ],
    explanation:
      'Sulla sommità della villa l’ortogonalità rigorosa si scioglie nelle curve morbide del solarium, quasi a richiamare i ponti delle navi e i quadri puristi dipinti dallo stesso Le Corbusier.',
    studyTip: 'Ricorda la metafora navale amata da Le Corbusier in «Vers une architecture» (1923).',
  },
  {
    id: 'VS-08',
    topic: TopicId.VillaSavoye,
    difficulty: Difficulty.Intermedia,
    text: 'Che ruolo svolge la maglia regolare dei pilotis cilindrici nella distribuzione dei diversi livelli di Villa Savoye?',
    options: [
      'Stabilisce una griglia modulare costante (circa 4,75 m di passo) che permette a ciascun piano di organizzarsi liberamente al suo interno',
      'Obbliga tutte le stanze del primo piano a essere quadrati identici di tre metri per tre',
      'Impedisce il passaggio della rampa costringendola all’esterno del perimetro',
      'È presente solo sul fronte nord per sostenere il balcone del soggiorno',
    ],
    correctOptionIndex: 0,
    referenceAnswer:
      'La griglia modulare regolare dei pilotis funge da ordine geometrico stabile sul quale la pianta libera può articolare ambienti di forme e dimensioni differenti tra piano terra, piano nobile e copertura.',
    requiredConcepts: [
      {
        label: 'Griglia / passo modulare regolare',
        synonyms: ['griglia', 'maglia', 'passo', 'modulare', 'regolare', '4,75'],
      },
      {
        label: 'Sostegno che consente la pianta libera ai vari livelli',
        synonyms: ['pianta libera', 'distribuzion', 'divers', 'livelli', 'piani', 'libera'],
      },
    ],
    explanation:
      'In Villa Savoye ordine e libertà convivono: la griglia strutturale impone disciplina metrica, mentre pareti curve e tramezzi asimmetrici rispondono liberamente alle funzioni dell’abitare.',
    studyTip: 'Coppia chiave per l’orale: «griglia strutturale regolare + pianta libera asimmetrica».',
  },
  {
    id: 'VS-09',
    topic: TopicId.VillaSavoye,
    difficulty: Difficulty.Avanzata,
    text: 'Analizzando la sezione della rampa di Villa Savoye dal piano terra al tetto-giardino, come cambia il rapporto visivo con l’esterno durante la salita?',
    options: [
      'Si passa da un atrio ombroso e protetto sotto i pilotis a un soggiorno-terrazza luminoso al primo livello, fino alla piena apertura panoramica sul cielo e sul bosco dal solarium',
      'Il percorso rimane costantemente chiuso in un cunicolo cieco privo di luce naturale fino all’uscita finale',
      'La rampa scende sotto il livello della falda acquifera per poi risalire al primo piano tramite un ponte esterno',
      'La luce diminuisce progressivamente salendo per ricreare l’effetto delle cripte medievali',
    ],
    correctOptionIndex: 0,
    referenceAnswer:
      'La rampa orchestra una progressione luminosa e spaziale: dall’ombra sotto il portico dei pilotis all’atrio, poi alla luce diffusa tra interno e giardino pensile al primo piano, fino all’apertura totale sul paesaggio nel solarium.',
    requiredConcepts: [
      {
        label: 'Progressione spaziale / variazione di luce e visuali',
        synonyms: ['progressione', 'luce', 'luminos', 'ombra', 'graduale', 'apertura'],
      },
      {
        label: 'Passaggio dal piano terra (pilotis/atrio) al tetto-solarium',
        synonyms: ['pilotis', 'atrio', 'primo piano', 'terrazza', 'solarium', 'paesaggio', 'tetto'],
      },
    ],
    explanation:
      'La rampa funziona come un dispositivo ottico e cinestesico: ogni cambio di direzione offre un nuovo inquadramento tra spazi coperti, vetrate e natura circostante.',
    studyTip: 'Descrivi sempre la sequenza dal basso verso l’alto: terra/ombra → piano nobile/filtro → tetto/orizzonte.',
  },
  {
    id: 'VS-10',
    topic: TopicId.VillaSavoye,
    difficulty: Difficulty.Avanzata,
    text: 'Perché Le Corbusier definì una casa come Villa Savoye una «machine à habiter» (macchina per abitare)?',
    options: [
      'Perché doveva rispondere con precisione tecnica, igiene, luce ed efficienza funzionale ai bisogni dell’uomo moderno, proprio come un’automobile o un piroscafo',
      'Perché l’edificio era dotato di motori a vapore per ruotare seguendo il sole durante il giorno',
      'Perché negava ogni valore estetico, proporzionale o emotivo riducendo la casa a una fabbrica industriale',
      'Perché era prodotta interamente in catena di montaggio senza alcun intervento progettuale in sito',
    ],
    correctOptionIndex: 0,
    referenceAnswer:
      'Con «macchina per abitare» Le Corbusier non intendeva un freddo automatismo disumano, bensì un’abitazione progettata con rigore funzionale, igiene, luminosità e bellezza geometrica analoga a quella dei prodotti industriali ben progettati.',
    requiredConcepts: [
      {
        label: 'Efficienza funzionale, igiene e risposta ai bisogni moderni',
        synonyms: ['funzional', 'igiene', 'luce', 'efficienza', 'bisogni', 'precisione'],
      },
      {
        label: 'Riferimento all’ingegneria moderna senza negare la dimensione estetica',
        synonyms: ['ingegner', 'automobile', 'piroscafo', 'estetica', 'bellezza', 'geometria', 'strumento'],
      },
    ],
    explanation:
      'Spesso fraintesa, la formula «machine à habiter» unisce rigore tecnico (sole, aria, pulizia, circolazione) e commozione poetica prodotta dalle proporzioni pure.',
    studyTip: 'Sottolinea sempre che per Le Corbusier «macchina» significa strumento perfetto al servizio dell’uomo.',
  },
  {
    id: 'VS-11',
    topic: TopicId.VillaSavoye,
    difficulty: Difficulty.Avanzata,
    text: 'In cosa differisce l’impiego del cemento armato in Villa Savoye rispetto alle opere del secondo dopoguerra come l’Unité d’Habitation o La Tourette?',
    options: [
      'In Villa Savoye la struttura è nascosta sotto intonaco bianco liscio per ottenere volumi puristi astratti, mentre nelle opere tarde il cemento resta grezzo a vista (béton brut)',
      'Villa Savoye è costruita in legno lamellare dipinto di bianco, mentre le opere tarde usano acciaio corten',
      'In Villa Savoye il cemento è lasciato non intonacato con l’impronta delle casseforme, a differenza di Marsiglia',
      'Le Corbusier non usò mai il cemento armato in Villa Savoye, preferendo la muratura intonacata a calce',
    ],
    correctOptionIndex: 0,
    referenceAnswer:
      'In Villa Savoye il cemento armato (e i tamponamenti) sono rivestiti di intonaco bianco liscio per enfatizzare l’astrazione purista della forma; nel dopoguerra Le Corbusier valorizza invece la materia grezza del béton brut.',
    requiredConcepts: [
      {
        label: 'Intonaco liscio / superfici bianche puriste a Villa Savoye',
        synonyms: ['intonac', 'bianc', 'lisc', 'puris', 'astratt', 'nascost'],
      },
      {
        label: 'Béton brut / cemento a vista nelle opere tarde',
        synonyms: ['beton brut', 'béton brut', 'a vista', 'grezz', 'casseform', 'materic'],
      },
    ],
    explanation:
      'A Poissy la tecnologia costruttiva viene dissimulata sotto superfici terse ed essenziali; dopo la Seconda guerra mondiale la realtà povera dei cantieri spinge Le Corbusier a trasformare il calcestruzzo imperfetto in valore espressivo.',
    studyTip: 'Confronto classico d’esame: estetica macchinista liscia (1928) vs brutalismo materico (1947–60).',
  },

  // =========================================================================
  // ARGOMENTO 3: UNITÉ D'HABITATION DI MARSIGLIA (11 domande)
  // =========================================================================
  {
    id: 'UH-01',
    topic: TopicId.UniteHabitation,
    difficulty: Difficulty.Base,
    text: 'In quale città e in quale arco temporale fu costruita la prima e più celebre Unité d’Habitation?',
    options: [
      'A Marsiglia, tra il 1947 e il 1952',
      'A Lione, tra il 1925 e il 1929',
      'A Parigi, tra il 1933 e il 1936',
      'A Berlino, tra il 1961 e il 1965',
    ],
    correctOptionIndex: 0,
    referenceAnswer:
      'La prima Unité d’Habitation (la «Cité Radieuse») fu progettata e costruita a Marsiglia nel secondo dopoguerra tra il 1947 e il 1952.',
    requiredConcepts: [
      { label: 'Marsiglia', synonyms: ['marsiglia', 'marseille'] },
      { label: '1947–1952 / secondo dopoguerra', synonyms: ['1947', '1952', 'dopoguerra'] },
    ],
    explanation:
      'Commissionata dal Ministero della Ricostruzione francese dopo le distruzioni belliche, l’Unité d’Habitation di Marsiglia venne inaugurata nel 1952 e servì da prototipo per altre quattro unità (Nantes-Rezé, Berlino, Briey, Firminy).',
    studyTip: 'Associa Marsiglia al 1947–1952 e al contesto della ricostruzione postbellica.',
  },
  {
    id: 'UH-02',
    topic: TopicId.UniteHabitation,
    difficulty: Difficulty.Base,
    text: 'Che cosa indica il termine «città verticale» riferito all’Unité d’Habitation?',
    options: [
      'Un grande edificio residenziale collettivo che integra alloggi, strade interne, negozi e servizi comuni in un parco verde',
      'Una torre per uffici direzionali interamente priva di appartamenti o servizi sociali',
      'Un quartiere di villette a schiera disposte lungo i tornanti di una collina',
      'Un grattacielo in vetro e acciaio destinato esclusivamente a uffici ministeriali',
    ],
    correctOptionIndex: 0,
    referenceAnswer:
      'L’Unité concentra in un unico edificio verticale circa 337 alloggi insieme a negozi, strada interna, servizi collettivi, asilo e attrezzature sportive sul tetto, liberando il suolo circostante a parco.',
    requiredConcepts: [
      {
        label: 'Concentrazione di alloggi e servizi comuni / sociali',
        synonyms: ['alloggi', 'servizi', 'negozi', 'collettiv', 'comun', 'asilo', 'strade interne'],
      },
      {
        label: 'Edificio autosufficiente in altezza / suolo libero a parco',
        synonyms: ['verticale', 'unico edificio', 'autonom', 'autosufficient', 'parco', 'verde'],
      },
    ],
    explanation:
      'Invece di estendere periferie a bassa densità consumando territorio, Le Corbusier concentra in un organismo compatto abitazioni e servizi di quartiere, restituendo il terreno alla natura.',
    studyTip: 'Ricorda i tre elementi: densità abitativa + servizi integrati + suolo libero attorno.',
  },
  {
    id: 'UH-03',
    topic: TopicId.UniteHabitation,
    difficulty: Difficulty.Base,
    text: 'Che cos’è il «Modulor» utilizzato da Le Corbusier per dimensionare l’Unité d’Habitation?',
    options: [
      'Un sistema di proporzioni basato sulle misure del corpo umano e sulla sezione aurea',
      'Un particolare tipo di cassero metallico brevettato per i getti in acciaio',
      'Il nome del consorzio di imprese edili che finanziò il cantiere di Marsiglia',
      'Un software analogico usato per calcolare la resistenza a taglio dei pilastri',
    ],
    correctOptionIndex: 0,
    referenceAnswer:
      'Il Modulor è una scala di misure armoniche fondata sulle proporzioni del corpo umano (1,83 m con braccio alzato a 2,26 m) e sulla serie aurea / di Fibonacci, usata per calibrare ogni parte dell’edificio.',
    requiredConcepts: [
      {
        label: 'Sistema proporzionale basato sulle misure umane',
        synonyms: ['corpo umano', 'uomo', 'statura', 'scala umana', 'misure umane', '1,83', '2,26'],
      },
      {
        label: 'Sezione aurea / serie armonica',
        synonyms: ['sezione aurea', 'aureo', 'fibonacci', 'armonic', 'proporzion'],
      },
    ],
    explanation:
      'Con il Modulor Le Corbusier vuole conciliare la standardizzazione industriale (prefabbricazione di componenti) con la scala percettiva dell’uomo, evitando misure arbitrarie.',
    studyTip: 'Cita sempre i numeri chiave del Modulor: uomo alto 1,83 m, mano alzata 2,26 m.',
  },
  {
    id: 'UH-04',
    topic: TopicId.UniteHabitation,
    difficulty: Difficulty.Base,
    text: 'Che cosa significa l’espressione «béton brut», divenuta emblematica con l’Unité d’Habitation?',
    options: [
      'Cemento armato lasciato grezzo a vista così come esce dalle casseforme in legno, senza intonaco né rivestimenti',
      'Calcestruzzo levigato e verniciato con smalto bianco lucido a specchio',
      'Pietra calcarea scalpellata a mano e posata a secco sui pilastri',
      'Conglomerato bituminoso colorato usato esclusivamente per le pavimentazioni stradali',
    ],
    correctOptionIndex: 0,
    referenceAnswer:
      'Béton brut significa «cemento grezzo»: il calcestruzzo armato viene lasciato a vista senza intonaco, conservando le venature e i giunti delle casseforme lignee come valore espressivo e materico.',
    requiredConcepts: [
      {
        label: 'Cemento armato grezzo / a vista',
        synonyms: ['cemento', 'calcestruzzo', 'grezz', 'a vista', 'senza intonaco', 'non rivestito'],
      },
      {
        label: 'Impronta delle casseforme',
        synonyms: ['casseform', 'casseri', 'tavole', 'legno', 'impront', 'venatur'],
      },
    ],
    explanation:
      'Di fronte ai limiti economici e tecnici delle maestranze del dopoguerra, Le Corbusier trasforma le imperfezioni del getto in legno in una potente estetica materica che darà impulso al Brutalismo.',
    studyTip: 'Attenzione alla traduzione: «brut» in francese significa «grezzo, allo stato naturale», non «brutto».',
  },
  {
    id: 'UH-05',
    topic: TopicId.UniteHabitation,
    difficulty: Difficulty.Intermedia,
    text: 'Come sono organizzati in sezione gli alloggi tipo all’interno dell’Unité d’Habitation?',
    options: [
      'Sono appartamenti duplex a doppia altezza incastrati a L attorno a una strada interna centrale posta ogni tre piani',
      'Sono monolocali su un solo livello affacciati su un ballatoio esterno esposto a nord',
      'Sono unità quadrate prive di affaccio trasversale distribuite intorno a un cavedio chiuso',
      'Ogni piano dell’edificio possiede un proprio lungo corridoio centrale cieco su tutti i diciotto livelli',
    ],
    correctOptionIndex: 0,
    referenceAnswer:
      'Gli alloggi sono cellule duplex su due livelli incastrate a L rovesciata: un corridoio («strada interna») ogni tre piani serve due appartamenti che attraversano l’intero spessore del corpo di fabbrica, garantendo doppio affaccio.',
    requiredConcepts: [
      {
        label: 'Alloggi duplex / su due livelli incastrati',
        synonyms: ['duplex', 'due piani', 'due livelli', 'incastr', 'a l'],
      },
      {
        label: 'Strada interna ogni tre piani e doppio affaccio',
        synonyms: ['strada interna', 'corridoio', 'tre piani', 'doppio affaccio', 'ventilazione'],
      },
    ],
    explanation:
      'Questa geniale sezione a incastro (già studiata da Le Corbusier negli anni ’20 con l’Immeuble-Villa) riduce di due terzi i corridoi di distribuzione e assicura soleggiamento est-ovest e ventilazione naturale a ogni appartamento.',
    studyTip: 'Disegna sempre la sezione a incastro «a bottiglia» o a L dei due duplex opposti.',
  },
  {
    id: 'UH-06',
    topic: TopicId.UniteHabitation,
    difficulty: Difficulty.Intermedia,
    text: 'Quali funzioni collettive ospita il tetto-terrazza dell’Unité d’Habitation di Marsiglia?',
    options: [
      'Una vera piazza civica sopraelevata con asilo nido, piscina per bambini, pista podistica, palestra, teatro all’aperto e solarium',
      'Esclusivamente gli impianti di condizionamento meccanico e le antenne vietati agli abitanti',
      'Un parcheggio multipiano collegato da rampe elicoidali per le automobili dei residenti',
      'Un giardino botanico privato accessibile solo all’amministratore del condominio',
    ],
    correctOptionIndex: 0,
    referenceAnswer:
      'Il tetto-terrazza è progettato come spazio pubblico collettivo all’aperto: ospita scuola materna, piscina per bambini, pista da corsa, palestra, teatro all’aperto e belvedere verso il mare e le montagne.',
    requiredConcepts: [
      {
        label: 'Spazio pubblico / collettivo per gli abitanti',
        synonyms: ['pubblic', 'collettiv', 'piazza', 'comun', 'abitanti', 'residenti'],
      },
      {
        label: 'Attrezzature educative, sportive o ricreative',
        synonyms: ['asilo', 'scuola materna', 'pista', 'palestra', 'teatro', 'piscina', 'gioco'],
      },
    ],
    explanation:
      'Qui il quinto punto (tetto-giardino) compie un salto di scala: da giardino privato di una villa borghese diventa luogo d’incontro comunitario per oltre mille persone, protetto dall’alto parapetto per mantenere il dialogo con l’orizzonte lontano.',
    studyTip: 'Confronta il tetto-giardino privato di Villa Savoye con quello collettivo di Marsiglia.',
  },
  {
    id: 'UH-07',
    topic: TopicId.UniteHabitation,
    difficulty: Difficulty.Intermedia,
    text: 'Quale funzione svolgono in facciata i profondi elementi aggettanti in cemento armato (logge e brise-soleil) dell’Unité d’Habitation?',
    options: [
      'Schermano l’irraggiamento solare estivo lasciando entrare il sole basso invernale e offrono logge abitabili colorate',
      'Servono unicamente come mensole ornamentali senza rapporto con l’orientamento solare',
      'Costituiscono le guide scorrevoli delle tapparelle metalliche motorizzate di chiusura totale',
      'Impediscono qualsiasi ricambio d’aria naturale all’interno dei soggiorni a doppia altezza',
    ],
    correctOptionIndex: 0,
    referenceAnswer:
      'Le logge profonde fungono da brise-soleil (frangisole) passivi che proteggono dal sole estivo, sfruttano il sole invernale e creano una fascia intermedia policroma tra interno ed esterno.',
    requiredConcepts: [
      {
        label: 'Protezione solare / brise-soleil',
        synonyms: ['brise-soleil', 'brise soleil', 'frangisole', 'sole', 'ombreggi', 'irraggiamento'],
      },
      {
        label: 'Logge abitabili / controllo climatico stagionale',
        synonyms: ['logge', 'loggia', 'estate', 'inverno', 'climatic', 'policrom'],
      },
    ],
    explanation:
      'A differenza delle vetrate lisce degli anni ’20 soggette a surriscaldamento, all’Unité l’involucro diventa spesso e tridimensionale: le pareti interne delle logge sono dipinte con colori primari vivi per contrastare il grigio del béton brut.',
    studyTip: 'Ricorda l’uso della policromia nelle rientranze delle logge: rosso, blu, giallo e verde.',
  },
  {
    id: 'UH-08',
    topic: TopicId.UniteHabitation,
    difficulty: Difficulty.Intermedia,
    text: 'Che cos’è la «rue intérieure» (strada interna) collocata al settimo e ottavo piano dell’Unité d’Habitation?',
    options: [
      'Una galleria coperta di servizio pubblico che ospitava negozi di alimentari, ufficio postale, lavanderia e un piccolo albergo',
      'La corsia sotterranea riservata al transito dei camion per la raccolta dei rifiuti',
      'Il corridoio vetrato di collegamento con l’ospedale municipale di Marsiglia',
      'Un ponte pedonale esterno sospeso verso il porto vecchio della città',
    ],
    correctOptionIndex: 0,
    referenceAnswer:
      'A metà altezza dell’edificio, una strada interna ampliata ospitava servizi commerciali di vicinato (negozi, panetteria, pescheria, lavanderia, albergo) per ridurre gli spostamenti quotidiani delle famiglie.',
    requiredConcepts: [
      {
        label: 'Galleria / corridoio centrale attrezzato a metà edificio',
        synonyms: ['strada interna', 'galleria', 'piano', 'livello', 'interno'],
      },
      {
        label: 'Negozi e servizi di quartiere',
        synonyms: ['negozi', 'commercio', 'alimentari', 'albergo', 'servizi', 'botteghe'],
      },
    ],
    explanation:
      'Le Corbusier traspone in altezza la vita della strada di quartiere tradizionale: gli abitanti potevano fare la spesa al piano commerciale senza scendere dall’edificio.',
    studyTip: 'Non confondere le strade interne residenziali (ogni 3 piani) con la strada commerciale centrale.',
  },
  {
    id: 'UH-09',
    topic: TopicId.UniteHabitation,
    difficulty: Difficulty.Avanzata,
    text: 'Come si trasforma il concetto di «pilotis» passando da Villa Savoye (1928–31) all’Unité d’Habitation (1947–52)?',
    options: [
      'Da esili cilindri bianchi regolari diventano grandi pilastri plastici tronco-conici in béton brut che assorbono gli impianti nel solaio cavo portante',
      'Vengono completamente eliminati appoggiando l’edificio direttamente su fondazioni continue in muratura',
      'Diventano colonne in ghisa decorate con capitelli corinzi dipinti',
      'Rimangono identici per diametro e finitura intonacata nonostante l’altezza di diciassette piani',
    ],
    correctOptionIndex: 0,
    referenceAnswer:
      'I pilotis dell’Unité non sono più sottili cilindri puristi ma massicci sostegni scultorei sagomati in cemento grezzo, collegati a un imponente solettone cavo («sol artificiel») che accoglie le reti impiantistiche.',
    requiredConcepts: [
      {
        label: 'Da pilastri snelli/cilindrici a sostegni massicci scultorei',
        synonyms: ['massicc', 'scultore', 'plastici', 'grandi', 'sagomat', 'tronco'],
      },
      {
        label: 'Cemento a vista e basamento impiantistico (sol artificiel)',
        synonyms: ['beton brut', 'béton brut', 'grezzo', 'impianti', 'solettone', 'sol artificiel'],
      },
    ],
    explanation:
      'Il salto di scala (da una villa unifamiliare a un blocco di oltre 50 metri d’altezza) trasforma i pilotis in monumentali gambe plastiche che incorniciano un portico pubblico monumentale al piede dell’edificio.',
    studyTip: 'Segui l’evoluzione di uno stesso tema (il pilotis) attraverso le epoche dell’opera corbusiana.',
  },
  {
    id: 'UH-10',
    topic: TopicId.UniteHabitation,
    difficulty: Difficulty.Avanzata,
    text: 'Quale criterio costruttivo fu adottato per gli alloggi all’interno del telaio strutturale dell’Unité d’Habitation?',
    options: [
      'Il principio del «portabottiglie» (casier à bouteilles): una grande ossatura portante in c.a. in cui inserire cellule abitative indipendenti e isolate acusticamente',
      'Murature portanti in mattoni forati costruite dal basso verso l’alto senza pilastri interni',
      'Volte sottili autoportanti in lamiera d’acciaio saldata sul posto senza solaio inferiore',
      'Tamponamenti in pietra arenaria portante collegati a secco con grappe di bronzo',
    ],
    correctOptionIndex: 0,
    referenceAnswer:
      'Le Corbusier concepisce lo scheletro in cemento armato come un grande «portabottiglie» strutturale indipendente, all’interno del quale gli alloggi modulari sono inseriti come scatole autonome isolate acusticamente e termicamente.',
    requiredConcepts: [
      {
        label: 'Metafora del portabottiglie / telaio autonomo',
        synonyms: ['portabottiglie', 'casier', 'ossatura', 'telaio', 'scaffale'],
      },
      {
        label: 'Inserimento di cellule abitative autonome / prefabbricate',
        synonyms: ['cellule', 'scatole', 'moduli', 'prefabbric', 'indipendent', 'isolat'],
      },
    ],
    explanation:
      'Lo schizzo celebre mostra la mano che infila una bottiglia nello scaffale: la struttura primaria porta tutto il peso mentre ogni cellula abitativa (pensata anche per produzione industriale) poggia su appoggi elastici anti-rumore.',
    studyTip: 'L’immagine del portabottiglie riassume perfettamente il rapporto tra macro-struttura e cellula abitativa.',
  },
  {
    id: 'UH-11',
    topic: TopicId.UniteHabitation,
    difficulty: Difficulty.Avanzata,
    text: 'Quale fu il risultato effettivo del progetto di prefabbricazione integrale immaginato da Le Corbusier per l’Unité di Marsiglia?',
    options: [
      'La scarsa standardizzazione del cantiere postbellico francese rese impossibile la prefabbricazione totale delle cellule, portando al getto in opera e al linguaggio del béton brut',
      'Tutte le 337 cellule furono prodotte in acciaio negli Stati Uniti e trasportate via mare già arredate',
      'L’edificio fu realizzato in soli quattro mesi con stampi industriali completamente automatizzati',
      'La prefabbricazione totale ebbe pieno successo grazie all’uso esclusivo di mattoni pieni fatti a mano',
    ],
    correctOptionIndex: 0,
    referenceAnswer:
      'Le difficoltà industriali e artigianali del dopoguerra impedirono la prefabbricazione integrale in serie; molte parti furono gettate in opera in legno grezzo, trasformando un limite produttivo nell’estetica del béton brut.',
    requiredConcepts: [
      {
        label: 'Difficoltà/rinuncia alla prefabbricazione totale industriale',
        synonyms: ['non riusci', 'impossibile', 'difficolt', 'mancanza', 'limiti', 'prefabbricazione'],
      },
      {
        label: 'Getto in opera con casseforme in legno -> béton brut',
        synonyms: ['getto in opera', 'in opera', 'casseforme', 'legno', 'beton brut', 'béton brut'],
      },
    ],
    explanation:
      'Comprendere questa tensione tra utopia industriale e realtà di cantiere è fondamentale per leggere il cambiamento di poetica di Le Corbusier dopo il 1945.',
    studyTip: 'Ricorda: nella storia dell’architettura i limiti tecnici di cantiere spesso generano nuove forme espressive.',
  },

  // =========================================================================
  // ARGOMENTO 4: CHANDIGARH (11 domande)
  // =========================================================================
  {
    id: 'CH-01',
    topic: TopicId.Chandigarh,
    difficulty: Difficulty.Base,
    text: 'Per quale ragione storica fu decisa la fondazione della città di Chandigarh all’inizio degli anni Cinquanta?',
    options: [
      'Per dotare la parte indiana del Punjab di una nuova capitale dopo che la Partizione del 1947 assegnò Lahore al Pakistan',
      'Per sostituire Nuova Delhi come capitale federale dell’intera Repubblica Indiana',
      'Per costruire un porto commerciale sull’Oceano Indiano destinato alle esportazioni tessili',
      'Per trasformare una città-fortezza moghul esistente in sede di un’esposizione universale',
    ],
    correctOptionIndex: 0,
    referenceAnswer:
      'Dopo la Partizione del 1947, la storica capitale del Punjab, Lahore, passò al Pakistan; l’India progettò quindi Chandigarh come nuova capitale simbolica e moderna del Punjab orientale.',
    requiredConcepts: [
      { label: 'Capitale del Punjab', synonyms: ['punjab', 'capitale'] },
      {
        label: 'Partizione del 1947 / perdita di Lahore',
        synonyms: ['partizione', '1947', 'lahore', 'pakistan', 'indipendenza'],
      },
    ],
    explanation:
      'Il primo ministro Jawaharlal Nehru volle che Chandigarh fosse «libera dalle tradizioni del passato», espressione della fiducia dell’India indipendente nel futuro.',
    studyTip: 'Inquadra sempre Chandigarh nella storia della decolonizzazione e della Partizione del 1947.',
  },
  {
    id: 'CH-02',
    topic: TopicId.Chandigarh,
    difficulty: Difficulty.Base,
    text: 'Quale affermazione descrive correttamente il ruolo di Le Corbusier nella progettazione di Chandigarh?',
    options: [
      'Rielaborò il piano urbano generale (succedendo a Mayer e Nowicki) e progettò il Campidoglio, collaborando con Pierre Jeanneret, Jane Drew, Maxwell Fry e progettisti indiani',
      'Progettò e diresse da solo ogni singolo edificio pubblico, residenziale e scolastico dell’intera città',
      'Si limitò a disegnare una sola scultura commemorativa senza occuparsi né del piano né degli edifici pubblici',
      'Fu chiamato solo nel 1975 per restaurare le mura storiche del centro medievale',
    ],
    correctOptionIndex: 0,
    referenceAnswer:
      'Le Corbusier non progettò da solo tutta Chandigarh: partendo dallo schema precedente di Albert Mayer e Matthew Nowicki, definì il masterplan e gli edifici monumentali del Campidoglio insieme a Pierre Jeanneret, Jane Drew, Maxwell Fry e un’ampia équipe indiana che sviluppò gran parte dei settori residenziali.',
    requiredConcepts: [
      {
        label: 'Lavoro d’équipe / presenza di altri progettisti',
        synonyms: [
          'jeanneret',
          'drew',
          'fry',
          'indiani',
          'mayer',
          'nowicki',
          'equipe',
          'team',
          'collaborazione',
          'non da solo',
        ],
      },
      {
        label: 'Ruolo di Le Corbusier su masterplan e Campidoglio',
        synonyms: ['piano', 'masterplan', 'campidoglio', 'capitol', 'edifici pubblici'],
      },
    ],
    explanation:
      'È storicamente errato attribuire tutta Chandigarh al solo Le Corbusier: Pierre Jeanneret, Maxwell Fry, Jane Drew e architetti/urbanisti indiani (come M.N. Sharma e P.L. Varma) realizzarono la grande maggioranza delle residenze, scuole e servizi di settore.',
    studyTip: 'Evita semplificazioni: distingui sempre il Campidoglio/piano generale dal lavoro collegiale nei settori.',
  },
  {
    id: 'CH-03',
    topic: TopicId.Chandigarh,
    difficulty: Difficulty.Base,
    text: 'Come è strutturata la maglia urbana di Chandigarh?',
    options: [
      'In settori rettangolari autosufficienti (unità di vicinato) dotati di servizi quotidiani e fasce verdi continue',
      'In anelli concentrici radiocentrici attorno a una cattedrale gotica centrale',
      'In un’unica strada lineare lunga trenta chilometri priva di traverse ortogonali',
      'In isolati irregolari medievali stretti attorno a canali navigabili',
    ],
    correctOptionIndex: 0,
    referenceAnswer:
      'La città è organizzata su una griglia di grandi settori rettangolari (circa 800 × 1.200 m), pensati come unità di vicinato dotate di scuole, mercati e parchi interni attraversati da percorsi pedonali.',
    requiredConcepts: [
      { label: 'Settori rettangolari', synonyms: ['settori', 'griglia', 'maglia'] },
      {
        label: 'Autosufficienza di vicinato / servizi e verde',
        synonyms: ['vicinato', 'autosufficient', 'servizi', 'scuole', 'mercati', 'verde', 'parchi'],
      },
    ],
    explanation:
      'Ogni settore funziona come una piccola città nella città: gli abitanti trovano a breve distanza a piedi le attrezzature quotidiane, senza dover attraversare le grandi arterie automobilistiche perimetrali.',
    studyTip: 'Dimensione tipica del settore di Chandigarh: circa 800 × 1.200 m.',
  },
  {
    id: 'CH-04',
    topic: TopicId.Chandigarh,
    difficulty: Difficulty.Base,
    text: 'Quali sono i tre grandi edifici istituzionali effettivamente realizzati nel complesso del Campidoglio (Settore 1) di Chandigarh?',
    options: [
      'Il Palazzo dell’Alta Corte, il Palazzo del Segretariato e il Palazzo dell’Assemblea',
      'La Cattedrale, il Museo dei Trasporti e la Torre dell’Orologio',
      'La Stazione Centrale, il Teatro dell’Opera e la Biblioteca Nazionale',
      'Il Palazzo del Governatore, l’Università Politecnica e lo Stadio Olimpico',
    ],
    correctOptionIndex: 0,
    referenceAnswer:
      'Nel Campidoglio furono costruiti tre grandi palazzi istituzionali: l’Alta Corte (potere giudiziario), il Segretariato (potere esecutivo/amministrativo) e l’Assemblea (potere legislativo), mentre il Palazzo del Governatore non fu realizzato.',
    requiredConcepts: [
      { label: 'Palazzo dell’Alta Corte', synonyms: ['alta corte', 'giustizia'] },
      { label: 'Palazzo del Segretariato', synonyms: ['segretariato'] },
      { label: 'Palazzo dell’Assemblea', synonyms: ['assemblea', 'parlamento'] },
    ],
    explanation:
      'La tripartizione dei poteri democratici prende forma monumentale nella grande spianata del Campidoglio: l’Assemblea fronteggia l’Alta Corte attraverso ampi piazzali e specchi d’acqua, mentre il lungo Segretariato chiude il lato ovest.',
    studyTip: 'Ricorda anche il monumento simbolico della «Mano Aperta» (Open Hand) sul sito del Campidoglio.',
  },
  {
    id: 'CH-05',
    topic: TopicId.Chandigarh,
    difficulty: Difficulty.Intermedia,
    text: 'Che cos’è la regola delle «7 V» (Les Sept Voies) applicata alla viabilità di Chandigarh?',
    options: [
      'Una gerarchia stradale a sette livelli (da V1 collegamenti regionali fino a V7 percorsi pedonali nel verde) per separare il traffico veloce dalla vita dei settori',
      'Un sistema di sette autostrade sopraelevate che attraversano diagonalmente il Campidoglio',
      'Il nome dei sette ponti identici progettati per attraversare il fiume Gange',
      'Una rete di sette linee ferroviarie sotterranee scavate sotto ogni settore',
    ],
    correctOptionIndex: 0,
    referenceAnswer:
      'La teoria delle 7 V organizza la circolazione in sette classi gerarchiche: dalle arterie veloci territoriali (V1) e di scorrimento tra settori (V2–V3), alle strade locali interne (V4–V6), fino ai percorsi pedonali e ciclabili nel verde (V7).',
    requiredConcepts: [
      {
        label: 'Gerarchia stradale a sette livelli / tipologie di vie',
        synonyms: ['gerarchia', 'sette', '7 v', 'livelli', 'classi', 'categorie'],
      },
      {
        label: 'Separazione tra traffico automobilistico veloce e percorsi lenti/pedonali',
        synonyms: ['traffico', 'veloce', 'pedonal', 'ciclabil', 'verde', 'separazione', 'settori'],
      },
    ],
    explanation:
      'La gerarchia 7V protegge la quiete interna dei settori: le auto veloci corrono sui bordi perimetrali (V2–V3), mentre le fasce verdi centrali restano sicure per pedoni e biciclette (V7).',
    studyTip: 'Ricorda la logica progressiva: più cresce il numero (da V1 a V7), più la strada diventa lenta e locale.',
  },
  {
    id: 'CH-06',
    topic: TopicId.Chandigarh,
    difficulty: Difficulty.Intermedia,
    text: 'Quali accorgimenti architettonici e climatici adotta Le Corbusier nel Palazzo dell’Alta Corte di Chandigarh?',
    options: [
      'Una grande copertura a parasole doppio in cemento armato sospesa sopra le aule per creare ventilazione naturale e grandi pilastri-portale policromi all’ingresso',
      'Una facciata continua interamente vetrata senza aggetti rivolta a sud-ovest per massimizzare l’effetto serra',
      'Muri perimetrali sigillati ermeticamente con coperture in lamiera nera prive di sporgenze',
      'Tetti a falda ripida in scandole alpine per favorire lo scivolamento delle nevi',
    ],
    correctOptionIndex: 0,
    referenceAnswer:
      'L’Alta Corte è protetta da una copertura monumentale a doppia falda concava («parasole») staccata dal volume sottostante per consentire il passaggio d’aria fresca, insieme a profondi brise-soleil e al grande portico d’ingresso colorato.',
    requiredConcepts: [
      {
        label: 'Copertura a parasole / doppio tetto ventilato',
        synonyms: ['parasole', 'doppia copertura', 'ombrello', 'ventilazione', 'tetto'],
      },
      {
        label: 'Protezione dal clima caldo-monsonico / brise-soleil',
        synonyms: ['sole', 'caldo', 'monson', 'pioggia', 'brise-soleil', 'ombreggi', 'clima'],
      },
    ],
    explanation:
      'Nel clima estremo del Punjab (sole intenso e piogge monsoniche), Le Corbusier usa la copertura come un grande ombrello in cemento armato che ombreggia le aule giudiziarie e lascia circolare le correnti d’aria.',
    studyTip: 'La soluzione del «tetto-parasole» è la risposta corbusiana all’architettura tropicale e sub-himalayana.',
  },
  {
    id: 'CH-07',
    topic: TopicId.Chandigarh,
    difficulty: Difficulty.Intermedia,
    text: 'Quale elemento plastico caratterizza inconfondibilmente il profilo dell’edificio del Palazzo dell’Assemblea di Chandigarh?',
    options: [
      'La grande torre conica/iperbolica della sala consiliare che emerge dalla copertura e l’ampio portico d’ingresso a profilo curvo',
      'Una cupola geodetica metallica rivestita in rame dorato poggiata su archi acuti',
      'Tre campanili cilindrici identici a quelli della cappella di Ronchamp',
      'Una piramide vetrata rovesciata collocata al centro del cortile interrato',
    ],
    correctOptionIndex: 0,
    referenceAnswer:
      'Il Palazzo dell’Assemblea si distingue per il volume iperbolico tronco-conico che emerge dal tetto (ispirato alle torri di raffreddamento industriali) a copertura dell’aula parlamentare e per il monumentale portico scultoreo.',
    requiredConcepts: [
      {
        label: 'Torre iperbolica / tronco-conica emergente',
        synonyms: ['torre', 'iperbolic', 'conic', 'tronco', 'emergente', 'aula'],
      },
      {
        label: 'Portico monumentale e luce zenitale',
        synonyms: ['portico', 'curv', 'luce', 'zenitale', 'copertura'],
      },
    ],
    explanation:
      'La torre iperbolica di cemento sottile illumina dall’alto la sala dell’Assemblea e diventa un segnale urbano potente, affiancato dalla sagoma a mezzaluna rovesciata del grande portico d’ingresso affacciato sullo specchio d’acqua.',
    studyTip: 'Osserva il dialogo tra il portico scultoreo orizzontale e la torre verticale iperbolica.',
  },
  {
    id: 'CH-08',
    topic: TopicId.Chandigarh,
    difficulty: Difficulty.Intermedia,
    text: 'Che ruolo svolge il Palazzo del Segretariato all’interno della composizione del Campidoglio di Chandigarh?',
    options: [
      'È un lungo edificio orizzontale di uffici amministrativi (circa 250 metri) scandito da brise-soleil modulari, con rampa esterna e giardino pensile panoramico',
      'È un piccolo padiglione circolare in legno adibito a residenza privata del sindaco',
      'È una torre cilindrica alta trecento metri interamente rivestita in vetro riflettente',
      'È un anfiteatro scavato nel terreno privo di piani fuori terra',
    ],
    correctOptionIndex: 0,
    referenceAnswer:
      'Il Segretariato è un lungo blocco lineare multipiano destinato agli uffici amministrativi, caratterizzato da un ritmo modulare di brise-soleil sul prospetto, nuclei di rampe esterne scultoree e un tetto-terrazza attrezzato.',
    requiredConcepts: [
      {
        label: 'Blocco lineare / lungo edificio per uffici',
        synonyms: ['lungo', 'lineare', 'orizzontale', 'uffici', 'amministrativ', 'blocco'],
      },
      {
        label: 'Brise-soleil modulari e rampe/tetto-terrazza',
        synonyms: ['brise-soleil', 'frangisole', 'modul', 'rampe', 'tetto', 'terrazza'],
      },
    ],
    explanation:
      'Riprendendo su scala monumentale i principi dell’Unité d’Habitation, il Segretariato oppone la propria massa orizzontale scandita dal Modulor ai profili plastici dell’Assemblea e dell’Alta Corte.',
    studyTip: 'Ricorda che sul tetto del Segretariato Le Corbusier ricava ancora una volta una terrazza-belvedere verso l’Himalaya.',
  },
  {
    id: 'CH-09',
    topic: TopicId.Chandigarh,
    difficulty: Difficulty.Avanzata,
    text: 'Quale lettura antropomorfa guidava la disposizione delle funzioni nel piano generale di Chandigarh?',
    options: [
      'La metafora del corpo umano: il Campidoglio come «testa» a nord, il centro civico e commerciale come «cuore», i settori residenziali come corpo e i polmoni verdi come sistema respiratorio',
      'L’imitazione di un ingranaggio meccanico circolare privo di gerarchia tra centro e periferia',
      'La riproduzione letterale dell’impianto viario di Parigi ottocentesca con boulevard radiali',
      'La divisione della città in tre isole separate da canali industriali destinati alle acciaierie',
    ],
    correctOptionIndex: 0,
    referenceAnswer:
      'Le Corbusier concepì il piano attraverso un’analogia biologica: la testa (Campidoglio a nord), il cuore (Settore 17 centro civico-commerciale), i polmoni (fasce verdi della Valle del Tempo Libero) e la circolazione (rete 7V).',
    requiredConcepts: [
      {
        label: 'Analogia biologica / corpo umano',
        synonyms: ['corpo', 'antropomorf', 'biologic', 'organismo', 'testa', 'cuore', 'polmoni'],
      },
      {
        label: 'Corrispondenza tra Campidoglio, centro e verde/viabilità',
        synonyms: ['campidoglio', 'settore 17', 'verde', 'valle', 'circolazione'],
      },
    ],
    explanation:
      'Questa visione organica collegava il simbolismo istituzionale al paesaggio naturale: collocando la «testa» del Campidoglio a nord, gli edifici istituzionali hanno sempre sullo sfondo il profilo maestoso delle montagne dell’Himalaya.',
    studyTip: 'Testa = Campidoglio, Cuore = Settore 17, Polmoni = parchi lineari, Arterie = 7V.',
  },
  {
    id: 'CH-10',
    topic: TopicId.Chandigarh,
    difficulty: Difficulty.Avanzata,
    text: 'Quali criticità urbanistiche e climatiche emersero nella realizzazione della grande spianata pedonale del Campidoglio?',
    options: [
      'Le distanze monumentali tra gli edifici risultano eccessive rispetto alla scala pedonale sotto il sole torrido estivo, accentuando l’isolamento del Campidoglio dalla città',
      'I palazzi furono costruiti troppo vicini tra loro, impedendo la circolazione dell’aria e bloccando la vista dell’Himalaya',
      'L’alta densità residenziale all’interno della piazza causò la demolizione immediata del Palazzo dell’Assemblea',
      'L’assenza di cemento armato costrinse a realizzare tutte le strutture principali in bambù e terra cruda',
    ],
    correctOptionIndex: 0,
    referenceAnswer:
      'Pur dotata di grande forza scenografica e simbolica, la spianata del Campidoglio presenta distanze enormi difficili da percorrere a piedi nel clima torrido del Punjab e una separazione fisica rispetto al tessuto abitato dei settori.',
    requiredConcepts: [
      {
        label: 'Distanze eccessive / fuori scala pedonale',
        synonyms: ['distanz', 'enorm', 'eccessiv', 'scala', 'pedonal', 'lontan', 'vuoto'],
      },
      {
        label: 'Disagio climatico (caldo/sole) o separazione dalla città',
        synonyms: ['caldo', 'sole', 'torrido', 'clima', 'separazione', 'isolament', 'citta'],
      },
    ],
    explanation:
      'La critica storica riconosce il valore scultoreo straordinario del Campidoglio ma evidenzia come le proporzioni monumentali della piazza di cemento, pensate per grandi adunate e per la percezione dall’auto, rendano faticoso l’attraversamento quotidiano a piedi.',
    studyTip: 'Saper valutare sia i meriti poetici sia i limiti d’uso è segno di maturità critica all’esame.',
  },
  {
    id: 'CH-11',
    topic: TopicId.Chandigarh,
    difficulty: Difficulty.Avanzata,
    text: 'In che modo i dispositivi architettonici del Campidoglio (bacini d’acqua, ombrelloni in c.a., brise-soleil) integrano monumentalità ed esigenze climatiche?',
    options: [
      'Trasformano la risposta passiva al sole e ai monsoni (ombra, ventilazione trasversale, raffrescamento evaporativo e riflessi sull’acqua) nella forma plastica stessa dei palazzi',
      'Nascondono grandi impianti di climatizzazione a gasolio dietro finti portici classici in stucco',
      'Affidano il raffrescamento unicamente alla colorazione bianca delle coperture in lamiera sottile',
      'Escludono qualsiasi relazione tra forma degli edifici e orientamento solare del sito',
    ],
    correctOptionIndex: 0,
    referenceAnswer:
      'A Chandigarh l’espressività monumentale non è decorazione applicata, ma nasce dagli stessi elementi climatici passivi: grandi tetti-parasole ventilati, profondi brise-soleil ombreggianti e vasche d’acqua che rinfrescano l’aria e raddoppiano visivamente i volumi.',
    requiredConcepts: [
      {
        label: 'Coincidenza tra forma monumentale e dispositivo climatico',
        synonyms: ['forma', 'monumental', 'plastic', 'espressiv', 'climatic', 'passiv'],
      },
      {
        label: 'Ombra, ventilazione e ruolo termico/visivo dell’acqua',
        synonyms: ['ombra', 'ventilazione', 'acqua', 'vasche', 'bacini', 'parasole', 'brise-soleil'],
      },
    ],
    explanation:
      'Le grandi masse d’acqua nella spianata non servono solo a riflettere il cemento armato come specchi metafisici, ma contribuiscono al raffrescamento microclimatico insieme all’ombra profonda delle coperture a sbalzo.',
    studyTip: 'Collega sempre gli aspetti formali (monumentalità) a quelli fisici-ambientali (clima, luce, acqua).',
  },

  // =========================================================================
  // ARGOMENTO 5: CAPPELLA DI RONCHAMP (11 domande)
  // =========================================================================
  {
    id: 'RO-01',
    topic: TopicId.Ronchamp,
    difficulty: Difficulty.Base,
    text: 'Dove si trova la cappella di Notre-Dame du Haut e in quale anno fu completata?',
    options: [
      'A Ronchamp (Francia orientale), completata nel 1955',
      'A Éveux (vicino a Lione), completata nel 1960',
      'A Poissy (vicino a Parigi), completata nel 1931',
      'A Zurigo (Svizzera), completata nel 1967',
    ],
    correctOptionIndex: 0,
    referenceAnswer:
      'Notre-Dame du Haut si trova sulla collina di Bourlémont a Ronchamp (Francia orientale) ed è stata completata nel 1955.',
    requiredConcepts: [
      { label: 'Ronchamp (Francia)', synonyms: ['ronchamp', 'francia', 'bourlemont'] },
      { label: '1955', synonyms: ['1955', 'cinquantacinque'] },
    ],
    explanation:
      'Progettata a partire dal 1950 per sostituire l’antica chiesa di pellegrinaggio distrutta dai bombardamenti del 1944, fu consacrata nel giugno 1955.',
    studyTip: 'Ricorda la sequenza cronologica delle grandi opere religiose: Ronchamp 1955 → La Tourette 1960.',
  },
  {
    id: 'RO-02',
    topic: TopicId.Ronchamp,
    difficulty: Difficulty.Base,
    text: 'Come può essere definita la composizione formale della cappella di Ronchamp rispetto ai prismi bianchi degli anni Venti?',
    options: [
      'Una composizione plastica, organica e scultorea, basata su muri curvi e copertura concava anziché su un parallelepipedo ortogonale su pilotis',
      'Un cubo trasparente interamente vetrato sostenuto da un telaio metallico modulare',
      'Una pianta centrale perfettamente simmetrica a croce greca sormontata da una cupola emisferica',
      'Una torre verticale di diciassette piani in blocchi prefabbricati identici',
    ],
    correctOptionIndex: 0,
    referenceAnswer:
      'Ronchamp abbandona l’ortogonalità cartesiana del purismo per diventare un’architettura plastica e scultorea, modellata attraverso pareti curve inclinate e una grande copertura scultorea.',
    requiredConcepts: [
      {
        label: 'Carattere plastico / scultoreo / organico',
        synonyms: ['plastic', 'scultore', 'organic', 'curv', 'modellat'],
      },
      {
        label: 'Superamento del prisma ortogonale razionalista',
        synonyms: ['prisma', 'ortogonale', 'razionalis', 'puris', 'geometrico', 'supera', 'abbandona'],
      },
    ],
    explanation:
      'La stessa forma dell’edificio nasce come un oggetto scultoreo posto alla sommità della collina, capace di dialogare con i quattro orizzonti del paesaggio.',
    studyTip: 'Parole chiave immediate: «scultura abitabile», «vaso acustico», «linee curve».',
  },
  {
    id: 'RO-03',
    topic: TopicId.Ronchamp,
    difficulty: Difficulty.Base,
    text: 'Qual è la caratteristica strutturale e visiva più evidente della copertura di Ronchamp?',
    options: [
      'Una grande calotta curva scura in cemento armato a vista, cava all’interno, che appare sospesa grazie a una sottile fessura di luce sopra i muri',
      'Un tetto-giardino perfettamente piano rivestito di prato inglese e dotato di pista da corsa',
      'Una copertura a capriate metalliche a vista ricoperta di tegole marsigliesi rosse',
      'Una serie di cupole in vetro cemento appoggiate direttamente su colonne corinzie interne',
    ],
    correctOptionIndex: 0,
    referenceAnswer:
      'La copertura è una doppia guscio cavo in cemento armato a vista dalla forma concava e dinamica, appoggiata su pilastri annegati nel muro in modo da lasciare una fessura continua di luce tra tetto e pareti.',
    requiredConcepts: [
      {
        label: 'Copertura curva scultorea in cemento armato',
        synonyms: ['curv', 'guscio', 'cava', 'cemento', 'calotta', 'tetto'],
      },
      {
        label: 'Sospensione visiva / fessura luminosa perimetrale',
        synonyms: ['fessura', 'lama di luce', 'sospes', 'staccat', 'luce', 'pilastri'],
      },
    ],
    explanation:
      'Le Corbusier raccontò di essersi ispirato anche alla leggerezza strutturale di un guscio di granchio raccolto sulla spiaggia: la struttura cava permette un grande aggetto senza gravare visivamente sulle pareti.',
    studyTip: 'La fessura luminosa sotto la copertura scura annulla la sensazione di peso schiacciante.',
  },
  {
    id: 'RO-04',
    topic: TopicId.Ronchamp,
    difficulty: Difficulty.Base,
    text: 'Quale materiale riveste le pareti esterne e interne della cappella di Ronchamp, in contrasto con la copertura scura?',
    options: [
      'Un intonaco bianco grezzo spruzzato con cemento-pistola (gunit) su muratura sagomata',
      'Lastre lucide di marmo verde e acciaio inox specchiante',
      'Pannelli modulari prefabbricati in alluminio anodizzato rosso',
      'Mattoni smaltati policromi disposti a spina di pesce',
    ],
    correctOptionIndex: 0,
    referenceAnswer:
      'I muri portanti sagomati (realizzati anche recuperando pietre delle rovine precedenti inglobate entro un telaio) sono rivestiti da un intonaco bianco ruvido spruzzato a cemento-pistola.',
    requiredConcepts: [
      {
        label: 'Intonaco bianco grezzo / ruvido',
        synonyms: ['intonaco', 'bianc', 'grezz', 'ruvid', 'calce', 'gunit'],
      },
    ],
    explanation:
      'Questo intonaco granuloso, molto diverso dalle superfici lisce di Villa Savoye, cattura la luce radente e dialoga matericamente con il béton brut della copertura.',
    studyTip: 'Nota il contrasto cromatico e tattile: muri bianchi ruvidi vs copertura grigia scura.',
  },
  {
    id: 'RO-05',
    topic: TopicId.Ronchamp,
    difficulty: Difficulty.Intermedia,
    text: 'Come è costruito e come modula la luce il celebre muro sud della cappella di Ronchamp?',
    options: [
      'È un muro molto spesso alla base che si assottiglia verso l’alto, traforato da aperture strombate di dimensioni diverse con vetri colorati e trasparenti',
      'È una parete completamente vetrata a tutta altezza priva di qualsiasi elemento opaco o schermatura',
      'È un muro cieco privo di aperture per mantenere l’aula interna totalmente al buio',
      'Presenta una serie rigorosamente uguale di finestre rettangolari a nastro allineate al Modulor',
    ],
    correctOptionIndex: 0,
    referenceAnswer:
      'Il muro sud è una parete spessa, inclinata e rastremata verso l’alto, traforata irregolarmente da profonde strombature rettangolari e quadrate chiuse con vetri trasparenti, smerigliati e dipinti che diffondono fasci di luce colorata nella penombra.',
    requiredConcepts: [
      {
        label: 'Muro spesso / rastremato con aperture strombate asimmetriche',
        synonyms: ['spess', 'strombat', 'inclinat', 'rastremat', 'aperture', 'fori'],
      },
      {
        label: 'Modulazione della luce colorata e penombra raccolta',
        synonyms: ['luce', 'vetri', 'colorat', 'dipint', 'penombra', 'raccolt', 'fasci'],
      },
    ],
    explanation:
      'Le strombature profonde funzionano come piccoli imbuti luminosi: dall’interno, il muro appare perforato come una costellazione di luci bianche e policrome che accentuano il senso di raccoglimento spirituale.',
    studyTip: 'Ricorda che la strombatura amplia il fascio di luce entrando verso l’aula.',
  },
  {
    id: 'RO-06',
    topic: TopicId.Ronchamp,
    difficulty: Difficulty.Intermedia,
    text: 'Che cosa ospitano le tre torri semicilindriche rivestite di bianco che emergono dal profilo della cappella?',
    options: [
      'Tre cappelle secondarie illuminate dall’alto da aperture orientate in direzioni diverse (luce zenitale)',
      'Gli ascensori di servizio per accedere al ristorante panoramico sul tetto',
      'Le cisterne idriche per l’irrigazione del parco sottostante',
      'Le campane elettriche motorizzate che suonano automaticamente ogni ora',
    ],
    correctOptionIndex: 0,
    referenceAnswer:
      'Le tre torri verticali ospitano altrettante cappelle laterali raccolte per il culto privato, illuminate da luce naturale zenitale captata dall’alto secondo orientamenti differenti.',
    requiredConcepts: [
      { label: 'Cappelle laterali / secondarie', synonyms: ['cappell', 'altar'] },
      { label: 'Luce zenitale / dall’alto', synonyms: ['zenitale', 'alto', 'luce', 'cattura'] },
    ],
    explanation:
      'Ciascuna torre agisce come una lanterna periscopica: cattura la luce naturale in quota e la fa scendere radente lungo l’intonaco curvo interno fino all’altare sottostante.',
    studyTip: 'Torri = cappelle raccolte + luce zenitale indiretta.',
  },
  {
    id: 'RO-07',
    topic: TopicId.Ronchamp,
    difficulty: Difficulty.Intermedia,
    text: 'Come risolve Le Corbusier la doppia esigenza liturgica di piccole celebrazioni quotidiane e grandi pellegrinaggi con migliaia di fedeli?',
    options: [
      'Progettando un’aula interna raccolta e un secondo altare all’aperto sotto lo sbalzo orientale della copertura verso il prato',
      'Realizzando due chiese identiche separate da una strada statale',
      'Dotando la cappella di pareti mobili gonfiabili per triplicare la capienza invernale',
      'Spostando l’intera celebrazione dei pellegrinaggi nei sotterranei scavati nella collina',
    ],
    correctOptionIndex: 0,
    referenceAnswer:
      'L’aula interna accoglie poche decine di persone in raccoglimento, mentre il fronte est forma un santuario all’aperto protetto dallo sbalzo della copertura, con altare esterno e pulpito affacciati sul grande prato dei pellegrini.',
    requiredConcepts: [
      {
        label: 'Doppia scala: aula interna raccolta + santuario all’aperto',
        synonyms: ['interna', 'raccolta', 'esterno', 'aperto', 'prato', 'pellegrini'],
      },
      {
        label: 'Altare esterno sotto lo sbalzo della copertura (fronte est)',
        synonyms: ['altare', 'sbalzo', 'est', 'orientale', 'copertura'],
      },
    ],
    explanation:
      'In questo modo lo spazio sacro non richiede un edificio gigante sproporzionato alla collina: quando arrivano migliaia di pellegrini, il prato stesso diventa la navata a cielo aperto.',
    studyTip: 'Sottolinea il fronte est concavo come palcoscenico liturgico verso il paesaggio.',
  },
  {
    id: 'RO-08',
    topic: TopicId.Ronchamp,
    difficulty: Difficulty.Intermedia,
    text: 'Quale affermazione descrive meglio la relazione tra il pavimento interno di Ronchamp e il profilo del terreno?',
    options: [
      'Il pavimento segue leggermente l’inclinazione naturale della collina scendendo verso l’altare principale',
      'L’edificio è sollevato su pilotis di quattro metri lasciando completamente vuoto il piano di campagna',
      'Il pavimento è sospeso su molle metalliche per isolarlo acusticamente dal sottosuolo',
      'Tutti gli ambienti sono disposti su cinque piani sovrapposti identici',
    ],
    correctOptionIndex: 0,
    referenceAnswer:
      'A differenza degli edifici sollevati su pilotis, la cappella si radica sulla sommità della collina e il pavimento inclinato accompagna dolcemente la pendenza naturale verso la zona dell’altare.',
    requiredConcepts: [
      {
        label: 'Radicamento al suolo / inclinazione verso l’altare',
        synonyms: ['inclinat', 'pendenza', 'collina', 'terreno', 'radicat', 'altare', 'pavimento'],
      },
    ],
    explanation:
      'Il leggero declivio del pavimento indirizza fisicamente e visivamente l’attenzione verso il presbiterio, rafforzando il legame topografico con la collina di Bourlémont.',
    studyTip: 'Contrasto netto: Villa Savoye si stacca dal suolo; Ronchamp vi si radica.',
  },
  {
    id: 'RO-09',
    topic: TopicId.Ronchamp,
    difficulty: Difficulty.Avanzata,
    text: 'Perché la cappella di Ronchamp sorprese profondamente i critici e gli allievi del Movimento Moderno nel 1955?',
    options: [
      'Perché sembrava contraddire il funzionalismo geometrico e i cinque punti degli anni Venti, aprendo a un linguaggio lirico, simbolico e irriducibile alla standardizzazione industriale',
      'Perché utilizzava unicamente archi a sesto acuto e volte a crociera in pietra copiati dal gotico francese',
      'Perché era stata progettata interamente secondo le regole della finestra a nastro e del tetto-giardino',
      'Perché segnava l’abbandono definitivo di qualsiasi interesse di Le Corbusier per la luce e la proporzione',
    ],
    correctOptionIndex: 0,
    referenceAnswer:
      'Molti critici videro in Ronchamp una svolta «espressionista» o irrazionalista rispetto ai dogmi puristi e industriali degli anni ’20; in realtà Le Corbusier mostrava che la modernità poteva esprimere anche sacralità, simbolo e forma plastica irripetibile.',
    requiredConcepts: [
      {
        label: 'Svolta oltre il funzionalismo/razionalismo ortogonale degli anni ’20',
        synonyms: ['svolta', 'funzionalis', 'razionalis', 'puris', 'cinque punti', 'standardizz', 'dogm'],
      },
      {
        label: 'Linguaggio lirico, simbolico o plastico-emozionale',
        synonyms: ['liric', 'simbolic', 'sacral', 'emozion', 'plastic', 'espression', 'spirituale'],
      },
    ],
    explanation:
      'Ronchamp dimostra che Le Corbusier non è un progettista dogmatico fermo al 1926: il linguaggio cambia radicalmente in base al programma (luogo di pellegrinaggio sacro vs villa o residenza di massa), pur restando fedele al controllo proporzionale del Modulor.',
    studyTip: 'Distingui ciò che cambia (forma ortogonale, cinque punti) da ciò che resta (luce, proporzione, paesaggio).',
  },
  {
    id: 'RO-10',
    topic: TopicId.Ronchamp,
    difficulty: Difficulty.Avanzata,
    text: 'In che modo Le Corbusier definì l’interazione tra i muri curvi di Ronchamp e il paesaggio dei Vosgi?',
    options: [
      'Come una «acustica visiva»: le superfici concave e convesse raccolgono e proiettano le direttrici visive dei quattro orizzonti circostanti',
      'Come una barriera difensiva chiusa che nega qualunque relazione visiva con la valle sottostante',
      'Come un’imitazione naturalistica di grotte rocciose prive di geometria',
      'Come una sequenza seriale di specchi parabolici per concentrare l’energia solare',
    ],
    correctOptionIndex: 0,
    referenceAnswer:
      'Le Corbusier parla di «acustica visiva» (o plastica): la cappella non si isola né si mimetizza, ma risponde con pareti concave e convesse alle forze e alle direzioni del paesaggio collinare circostante.',
    requiredConcepts: [
      {
        label: 'Acustica visiva / risposta plastica al paesaggio',
        synonyms: ['acustica visiva', 'orizzonti', 'paesaggio', 'concave', 'convesse', 'collina'],
      },
    ],
    explanation:
      'Nel testo «Textes et dessins pour Ronchamp», Le Corbusier disegna quattro frecce convergenti dai quattro lati della collina: l’edificio agisce come un risuonatore spaziale in dialogo attivo con la topografia.',
    studyTip: 'Il concetto di «acustica visiva» collega direttamente forme curve e contesto paesaggistico.',
  },
  {
    id: 'RO-11',
    topic: TopicId.Ronchamp,
    difficulty: Difficulty.Avanzata,
    text: 'Confrontando la luce in Villa Savoye e a Ronchamp, quale differenza concettuale emerge?',
    options: [
      'A Villa Savoye la luce è diffusa, uniforme e chiara attraverso finestre a nastro; a Ronchamp è dosata, drammatica, direzionale e colorata nella penombra sacra',
      'In entrambe le opere la luce entra esclusivamente dall’alto attraverso lucernari circolari identici',
      'A Ronchamp la luce è uniforme e priva di ombre, mentre a Villa Savoye domina la penombra mistica',
      'Nessuna delle due opere utilizza la luce naturale come strumento di progetto',
    ],
    correctOptionIndex: 0,
    referenceAnswer:
      'In Villa Savoye la finestra a nastro ricerca una luminosità diffusa, igienica e uniforme; a Ronchamp la luce è invece drammatica, filtrata da fessure, strombature policrome e torri-camino per suscitare raccoglimento emotivo.',
    requiredConcepts: [
      {
        label: 'Villa Savoye: luce uniforme e diffusa (finestra a nastro)',
        synonyms: ['uniforme', 'diffusa', 'chiara', 'finestra a nastro', 'savoye'],
      },
      {
        label: 'Ronchamp: luce drammatica, filtrata, penombra e colore',
        synonyms: ['drammatica', 'penombra', 'filtrata', 'colorata', 'direzionale', 'sacra', 'ronchamp'],
      },
    ],
    explanation:
      'La celebre frase di Le Corbusier «L’architettura è il gioco sapiente, rigoroso e magnifico dei volumi sotto la luce» trova in queste due opere due declinazioni opposte ma complementari.',
    studyTip: 'Confronto molto richiesto all’interrogazione: luce igienica/cartesiana vs luce mistica/teatrale.',
  },

  // =========================================================================
  // ARGOMENTO 6: CONVENTO SAINTE-MARIE DE LA TOURETTE (11 domande)
  // =========================================================================
  {
    id: 'LT-01',
    topic: TopicId.LaTourette,
    difficulty: Difficulty.Base,
    text: 'Dove si trova il convento di Sainte-Marie de La Tourette e in che anno fu completato?',
    options: [
      'A Éveux, vicino a Lione (Francia), completato nel 1960',
      'A Ronchamp, completato nel 1955',
      'A Marsiglia, completato nel 1952',
      'A Poissy, completato nel 1931',
    ],
    correctOptionIndex: 0,
    referenceAnswer:
      'Il convento domenicano di Sainte-Marie de La Tourette si trova a Éveux, vicino a Lione, ed è stato progettato negli anni Cinquanta e completato nel 1960.',
    requiredConcepts: [
      { label: 'Éveux / Lione (Francia)', synonyms: ['eveux', 'éveux', 'lione', 'lyon', 'francia'] },
      { label: '1960 / anni Cinquanta', synonyms: ['1960', 'cinquanta', 'sessanta'] },
    ],
    explanation:
      'Commissionato dai padri domenicani su impulso di padre Marie-Alain Couturier, il convento fu progettato dal 1953 e inaugurato nel 1960 (consacrato nell’ottobre 1960).',
    studyTip: 'Ricorda: Éveux (Lione), Domenicani, 1953–1960.',
  },
  {
    id: 'LT-02',
    topic: TopicId.LaTourette,
    difficulty: Difficulty.Base,
    text: 'Come si adatta l’edificio del convento di La Tourette al forte pendio naturale del terreno?',
    options: [
      'Mantiene orizzontale la linea della copertura e lascia scendere pilastri e volumi su pilotis lungo la pendenza naturale senza sbancare la collina',
      'Sbanca interamente la collina creando un basamento perfettamente piatto in cemento armato',
      'Si sviluppa interamente in gallerie sotterranee scavate nella roccia calcarea',
      'Spezza il tetto in gradoni sfalsati che imitano una cascata di tegole tradizionali',
    ],
    correctOptionIndex: 0,
    referenceAnswer:
      'La Tourette fissa in alto un piano orizzontale costante alla quota del tetto delle celle e lascia che la struttura su pilotis e setti scenda verso valle seguendo il pendio naturale del prato.',
    requiredConcepts: [
      {
        label: 'Copertura orizzontale costante in alto',
        synonyms: ['orizzontale', 'tetto', 'copertura', 'quota costante', 'alto'],
      },
      {
        label: 'Pilastri / volumi che seguono il pendio naturale',
        synonyms: ['pendio', 'pendenza', 'terreno', 'pilotis', 'pilastri', 'collina', 'scend'],
      },
    ],
    explanation:
      'Anziché imporre un costoso terrazzamento artificiale, Le Corbusier fa misurare la pendenza del sito dalla diversa altezza dei pilastri e dei livelli inferiori.',
    studyTip: 'Immagina una riga orizzontale tracciata sul bordo superiore di una sezione collinare.',
  },
  {
    id: 'LT-03',
    topic: TopicId.LaTourette,
    difficulty: Difficulty.Base,
    text: 'Come sono distribuite e caratterizzate le celle individuali dei frati a La Tourette?',
    options: [
      'Sono allineate ai due livelli superiori dei tre bracci a U, strette e misurate sul Modulor, ciascuna dotata di una loggia-brise-soleil privata verso il paesaggio',
      'Sono situate nel piano interrato attorno alla chiesa senza alcuna apertura verso l’esterno',
      'Sono padiglioni autonomi sparsi nel bosco collegati da sentieri sterrati',
      'Sono ampi appartamenti duplex a doppia altezza distribuiti su dieci piani',
    ],
    correctOptionIndex: 0,
    referenceAnswer:
      'Le circa cento celle monastiche occupano i due piani più alti delle tre ali a U; sono spazi essenziali dimensionati col Modulor e conclusi da una loggia profonda in cemento che funziona da brise-soleil individuale affacciata sulla valle.',
    requiredConcepts: [
      {
        label: 'Collocazione ai livelli superiori delle tre ali',
        synonyms: ['superiori', 'alti', 'ali', 'bracci', 'u'],
      },
      {
        label: 'Dimensioni essenziali (Modulor) e loggia privata verso il paesaggio',
        synonyms: ['modulor', 'loggia', 'balcone', 'brise-soleil', 'paesaggio', 'essenziali'],
      },
    ],
    explanation:
      'Le Corbusier applica qui il principio della cellula individuale rigorosa, già osservato nei chiostri certosini (come la Certosa di Ema in Toscana), offrendo al singolo frate solitudine, luce e vista sulla natura.',
    studyTip: 'Ricorda l’influenza della Certosa di Ema, visitata da Le Corbusier in gioventù.',
  },
  {
    id: 'LT-04',
    topic: TopicId.LaTourette,
    difficulty: Difficulty.Base,
    text: 'Qual è l’aspetto della chiesa conventuale di La Tourette rispetto al resto del complesso?',
    options: [
      'Un parallelepipedo austero e quasi completamente cieco in cemento armato a vista, affiancato da basse cappelle con «cannoni di luce» colorati',
      'Una basilica neoclassica con pronao esastilo e cupola emisferica affrescata',
      'Una tenda tesa in cavi d’acciaio priva di pareti perimetrali in muratura',
      'Una chiesa identica per curvature organiche alla copertura di Ronchamp',
    ],
    correctOptionIndex: 0,
    referenceAnswer:
      'La chiesa chiude il lato nord del complesso come un volume prismatico chiuso e solenne in béton brut, privo di finestre tradizionali e illuminato attraverso tagli verticali, fessure e i caratteristici cannoni di luce delle cappelle laterali.',
    requiredConcepts: [
      {
        label: 'Volume prismatico/parallelepipedo austero in cemento a vista',
        synonyms: ['parallelepipedo', 'prismatic', 'auster', 'chiuso', 'cieco', 'beton brut', 'cemento'],
      },
      {
        label: 'Cannoni di luce / tagli luminosi',
        synonyms: ['cannoni di luce', 'lucernari', 'fessure', 'tagli', 'cappelle', 'colorat'],
      },
    ],
    explanation:
      'Diversissima da Ronchamp, la chiesa di La Tourette rinuncia alle linee curve per esprimere una spiritualità severa, silenziosa e monumentale affidata alla purezza del parallelepipedo e alla luce zenitale.',
    studyTip: 'La chiesa di La Tourette è il polo di gravità silenzioso dell’intero convento.',
  },
  {
    id: 'LT-05',
    topic: TopicId.LaTourette,
    difficulty: Difficulty.Intermedia,
    text: 'In che modo La Tourette reinterpreta il chiostro tradizionale del convento medievale?',
    options: [
      'Non ha un porticato perimetrale praticabile a livello del prato, ma due gallerie vetrate chiuse che attraversano a croce il cortile inclinato per collegare i bracci alla chiesa',
      'Ripropone un chiostro quadrato con archi a tutto sesto in marmo bianco e pozzo centrale',
      'Elimina completamente ogni corte interna trasformando l’edificio in un blocco compatto senza vuoti',
      'Sostituisce il cortile con un parcheggio multipiano scoperto per i visitatori',
    ],
    correctOptionIndex: 0,
    referenceAnswer:
      'Poiché il cortile interno è in forte pendenza e non piano, il chiostro tradizionale attorno al perimetro è sostituito da passerelle coperte e vetrate che si incrociano diagonalmente/ortogonalmente collegando direttamente le ali comunitarie alla chiesa.',
    requiredConcepts: [
      {
        label: 'Cortile inclinato non praticabile come chiostro tradizionale',
        synonyms: ['cortile', 'corte', 'inclinat', 'pendio', 'chiostro'],
      },
      {
        label: 'Passerelle / gallerie coperte a croce',
        synonyms: ['passerell', 'galler', 'croce', 'attravers', 'collegano', 'chiesa'],
      },
    ],
    explanation:
      'Le Corbusier capovolge la tipologia conventuale: il vuoto centrale resta terreno erboso e tetti scultorei delle cappelle basse, mentre la circolazione dei frati taglia lo spazio sospesa su passerelle vetrate.',
    studyTip: 'Spiega sempre *perché* sparisce il chiostro perimetrale: il terreno è troppo scosceso.',
  },
  {
    id: 'LT-06',
    topic: TopicId.LaTourette,
    difficulty: Difficulty.Intermedia,
    text: 'Che cosa sono i «pans de verre ondulatoires» delle facciate collettive di La Tourette e con chi furono concepiti?',
    options: [
      'Pareti vetrate scandite da montanti verticali in cemento armato disposti a intervalli variabili secondo rapporti musicali e del Modulor, progettati con Iannis Xenakis',
      'Grandi tende ondulate in tessuto acrilico fissate con funi alle finestre delle celle',
      'Mattoni di vetro curvi prodotti a mano per le sole docce del convento',
      'Frangisole motorizzati in alluminio progettati insieme a Pierre Savoye',
    ],
    correctOptionIndex: 0,
    referenceAnswer:
      'I pans de verre ondulatoires sono vetrate continue interrotte da sottili montanti verticali in cemento disposti a ritmi variabili (ispirati alla composizione musicale e al Modulor) ideati da Le Corbusier insieme all’architetto e compositore Iannis Xenakis.',
    requiredConcepts: [
      {
        label: 'Montanti verticali a ritmo variabile / musicale',
        synonyms: ['montanti', 'vetrate', 'ritmo', 'musical', 'modulor', 'irregolare', 'intervalli'],
      },
      {
        label: 'Collaborazione con Iannis Xenakis',
        synonyms: ['xenakis', 'iannis'],
      },
    ],
    explanation:
      'Xenakis, ingegnere e musicista nello studio di Le Corbusier, tradusse serie matematiche e progressioni musicali nel passo asimmetrico dei montanti di facciata lungo il refettorio, le aule e i corridoi.',
    studyTip: 'Citare Iannis Xenakis e il ritmo musicale delle vetrate arricchisce subito l’interrogazione.',
  },
  {
    id: 'LT-07',
    topic: TopicId.LaTourette,
    difficulty: Difficulty.Intermedia,
    text: 'Come sono stratificate verticalmente le funzioni comunitarie e private nelle tre ali a U di La Tourette?',
    options: [
      'In basso (a contatto col pendio) gli spazi collettivi come refettorio, sala capitolare e biblioteca; nei due piani superiori, sotto il tetto-giardino, le celle individuali e l’infermeria',
      'Le celle occupano il piano terra umido mentre cucina e refettorio si trovano sopra la chiesa',
      'Ogni piano mescola casualmente laboratori rumorosi e celle silenziose senza distinzione di quota',
      'Gli spazi collettivi si trovano all’esterno del convento in edifici separati',
    ],
    correctOptionIndex: 0,
    referenceAnswer:
      'L’edificio separa chiaramente vita comune e solitudine per fasce altimetriche: nei piani inferiori e intermedi stanno biblioteca, aule, sala capitolare e refettorio; nei due piani superiori trovano posto le celle silenziose.',
    requiredConcepts: [
      {
        label: 'Spazi collettivi ai piani inferiori/intermedi',
        synonyms: ['collettiv', 'refettorio', 'biblioteca', 'capitolare', 'inferiori', 'intermedi'],
      },
      {
        label: 'Celle individuali ai due piani superiori',
        synonyms: ['celle', 'superiori', 'alti', 'silenzio', 'solitudine'],
      },
    ],
    explanation:
      'Questa gerarchia verticale rispecchia la regola domenicana, bilanciando lo studio e la preghiera comunitaria con il ritiro individuale nella propria cella.',
    studyTip: 'Ricorda la sequenza verticale dal basso verso l’alto: terra/pendio → vita comune → celle → tetto.',
  },
  {
    id: 'LT-08',
    topic: TopicId.LaTourette,
    difficulty: Difficulty.Intermedia,
    text: 'Qual è la funzione dei tre «cannoni di luce» (canons à lumière) inclinati sopra la cappella bassa di La Tourette?',
    options: [
      'Catturare la luce naturale dall’alto tramite condotti tronco-conici dipinti internamente con colori primari per creare un’illuminazione intensa e simbolica sull’altare',
      'Espellere i fumi delle caldaie a carbone dell’impianto di riscaldamento centrale',
      'Raccogliere l’acqua piovana convogliandola verso una turbina idroelettrica nella valle',
      'Consentire l’osservazione astronomica notturna dalla sala capitolare',
    ],
    correctOptionIndex: 0,
    referenceAnswer:
      'I cannoni di luce sono camini tronco-conici inclinati in cemento armato che captano la luce zenitale e la riflettono attraverso superfici interne dipinte di rosso, giallo, blu o bianco sulla cappella bassa laterale.',
    requiredConcepts: [
      {
        label: 'Captazione di luce naturale zenitale attraverso condotti conici',
        synonyms: ['luce', 'zenitale', 'condotti', 'conici', 'camini', 'inclinati'],
      },
      {
        label: 'Colorazione interna / effetto simbolico sulla cappella',
        synonyms: ['color', 'rosso', 'giallo', 'blu', 'cappella', 'altare', 'simbolic'],
      },
    ],
    explanation:
      'In un ambiente privo di finestre laterali, i cannoni di luce guidano la luce dall’alto come fasci materiali e cromatici, trasformando il béton brut nudo in spazio mistico.',
    studyTip: 'Confrontali con le torri-cappella di Ronchamp: entrambe usano la luce zenitale su pareti cieche.',
  },
  {
    id: 'LT-09',
    topic: TopicId.LaTourette,
    difficulty: Difficulty.Avanzata,
    text: 'In che modo il linguaggio del béton brut a La Tourette traduce un’esigenza etica oltre che economica e costruttiva?',
    options: [
      'La nudità sincera e austera del calcestruzzo grezzo rispecchia l’ideale di povertà evangelica e verità costruttiva richiesto dall’ordine domenicano',
      'L’uso di rivestimenti costosi in marmo e oro fu impedito solo da una legge comunale sul colore dei tetti',
      'Il cemento a vista serve unicamente a mascherare una struttura interna in acciaio lucido',
      'La rugosità delle pareti impedisce deliberatamente qualsiasi riflessione della luce naturale dentro la chiesa',
    ],
    correctOptionIndex: 0,
    referenceAnswer:
      'A La Tourette la povertà di mezzi e la sincerità del cemento armato grezzo, privo di ornamenti applicati, diventano espressione coerente dell’ascesi e della povertà monastica, elevando la materia povera mediante proporzione e luce.',
    requiredConcepts: [
      {
        label: 'Coerenza etica con la povertà monastica / austerità',
        synonyms: ['povert', 'ascesi', 'auster', 'monastic', 'domenican', 'etic', 'spirituale'],
      },
      {
        label: 'Sincerità materica / assenza di ornamento compensata da luce e proporzione',
        synonyms: ['sincer', 'materia', 'grezz', 'senza ornament', 'luce', 'proporzion'],
      },
    ],
    explanation:
      'Padre Couturier aveva raccomandato a Le Corbusier di progettare «una costruzione povera», fidandosi che proprio il rigore essenziale del cemento armato avrebbe espresso la verità spirituale del convento.',
    studyTip: 'Sottolinea il legame tra «povertà tecnica», «verità strutturale» ed «esperienza spirituale».',
  },
  {
    id: 'LT-10',
    topic: TopicId.LaTourette,
    difficulty: Difficulty.Avanzata,
    text: 'Confrontando la cappella di Ronchamp (1955) e il convento di La Tourette (1960), quale differenza compositiva emerge nel trattamento dello spazio sacro?',
    options: [
      'Ronchamp è un organismo scultoreo curvilineo e organico pensato per il pellegrinaggio, mentre La Tourette è un complesso ortogonale, rigoroso e strutturalmente severo pensato per la vita comunitaria e lo studio',
      'Ronchamp usa soltanto vetrate continue ondulatoires, mentre La Tourette adotta coperture concave a guscio di granchio',
      'Entrambe le opere rifiutano completamente l’uso della luce zenitale e del cemento armato',
      'La Tourette è una piccola cappella isolata su un prato mentre Ronchamp ospita cento celle monastiche',
    ],
    correctOptionIndex: 0,
    referenceAnswer:
      'Pur appartenendo entrambe all’ultima stagione di Le Corbusier e utilizzando la luce come materia sacra, Ronchamp adotta forme curve e scultoree per la devozione popolare dei pellegrini, mentre La Tourette ritrova il rigore geometrico ortogonale del telaio in béton brut per la vita claustrale dei domenicani.',
    requiredConcepts: [
      {
        label: 'Ronchamp: forme curve scultoree per il pellegrinaggio',
        synonyms: ['ronchamp', 'curv', 'scultore', 'organic', 'pellegrin'],
      },
      {
        label: 'La Tourette: rigore ortogonale/geometrico per la comunità monastica',
        synonyms: ['tourette', 'ortogonal', 'geometric', 'rigore', 'comunit', 'monastic', 'celle'],
      },
    ],
    explanation:
      'Questo confronto dimostra quanto in Le Corbusier la forma non sia mai formula fissa: varia profondamente in rapporto al programma liturgico, alla topografia e al tipo di comunità.',
    studyTip: 'Domanda trasversale tipica: saper contrapporre Ronchamp e La Tourette senza ridurle a un’unica etichetta.',
  },
  {
    id: 'LT-11',
    topic: TopicId.LaTourette,
    difficulty: Difficulty.Avanzata,
    text: 'Quali elementi dei cinque punti del 1926 sopravvivono, trasformati, nel convento di La Tourette del 1960?',
    options: [
      'I pilotis (trasformati in setti e pilastri irregolari sul pendio), il tetto-giardino (presente sopra le ali delle celle) e la struttura puntiforme indipendente dai tamponamenti',
      'Esclusivamente le finestre a nastro identiche e l’intonaco bianco liscio di Villa Savoye',
      'Nessuno: La Tourette è costruita interamente in pietra portante con copertura a falde in coppi',
      'Solo i pilotis cilindrici da trenta centimetri di diametro dipinti di azzurro pastello',
    ],
    correctOptionIndex: 0,
    referenceAnswer:
      'A La Tourette permangono, profondamente trasformati, i pilotis/pilastri che staccano i bracci dal pendio, la copertura piana a tetto-giardino sulle ali delle celle e la distinzione tra telaio strutturale e chiusure vetrate o prefabbricate.',
    requiredConcepts: [
      {
        label: 'Permanenza trasformata di pilotis / tetto-giardino / scheletro',
        synonyms: ['pilotis', 'pilastri', 'tetto-giardino', 'tetto giardino', 'scheletro', 'telaio'],
      },
      {
        label: 'Adattamento al béton brut e al pendio',
        synonyms: ['trasformat', 'pendio', 'beton brut', 'grezzo', 'setti'],
      },
    ],
    explanation:
      'Anche nell’opera tarda Le Corbusier non dimentica i principi degli anni Venti, ma li reinterpreta matericamente: il tetto-giardino ritorna sopra le celle come prato ecologico e i sostegni verticali liberano il deflusso del terreno.',
    studyTip: 'Concludi sempre i confronti trasversali mostrando continuità e trasformazione nell’opera di Le Corbusier.',
  },
];
