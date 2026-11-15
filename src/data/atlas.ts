import { AtlasEntry, TopicId } from '../types/quiz';
import imgCinquePunti from '../assets/images/ref_cinque_punti_weissenhof_1794734102781.jpg';
import imgVillaSavoye from '../assets/images/ref_villa_savoye_poissy_1794734102604.jpg';
import imgUniteHabitation from '../assets/images/ref_unite_habitation_marsiglia_1794734103718.jpg';
import imgChandigarh from '../assets/images/ref_chandigarh_campidoglio_1794734104575.jpg';
import imgRonchamp from '../assets/images/ref_cappella_ronchamp_1794734104803.jpg';
import imgLaTourette from '../assets/images/ref_convento_la_tourette_1794734104949.jpg';

export { TOPICS_META, TOPIC_MAP } from './topics';

export const ATLAS_ENTRIES: AtlasEntry[] = [
  {
    id: TopicId.CinquePunti,
    index: '01',
    title: 'I cinque punti dell’architettura moderna',
    subtitle: 'Sistema costruttivo Domino e liberazione spaziale',
    dating: '1926 — 1927 (pubblicati su «L’Esprit Nouveau» e applicati al Weissenhof)',
    location: 'Teoria generale / Stoccarda, Francia ed Europa',
    imagePath: imgCinquePunti,
    imageAlt: 'Riferimento fotografico in bianco e nero di un edificio razionalista su pilotis con finestre a nastro e tetto-giardino',
    imageCaption: 'Riferimento architettonico · Sistema a telaio, pilotis e finestra a nastro',
    summary:
      'Codificati da Le Corbusier e Pierre Jeanneret, i cinque punti derivano direttamente dall’adozione dello scheletro puntiforme in cemento armato (sistema Dom-Ino, 1914–1915). Sostituendo i muri portanti perimetrali e interni con pilastri e solai a sbalzo, l’edificio si emancipa dalla gravità tradizionale e acquisisce flessibilità distributiva, luce continua e continuità con il suolo e il cielo.',
    architecturalFeatures: [
      'Pilotis: pilastri snelli in cemento armato che sollevano il volume abitato dal terreno umido, lasciando circolare aria, verde e percorsi sotto l’edificio.',
      'Tetto-giardino (toit-terrasse): solaio piano impermeabilizzato che sostituisce la copertura a falde, restituendo all’abitante la superficie di suolo occupata dalla costruzione.',
      'Pianta libera (plan libre): svincolata dai muri portanti, consente di disporre i tramezzi interni con piena libertà funzionale su ogni piano.',
      'Finestra a nastro (fenêtre en longueur): taglio orizzontale continuo reso possibile dall’assenza di muratura portante in facciata, per un’illuminazione uniforme.',
      'Facciata libera (façade libre): arretrando i pilastri rispetto al filo esterno, il tamponamento diventa una pelle leggera e indipendente dalla struttura.',
    ],
    keyConcepts: [
      {
        title: 'Struttura puntiforme in c.a.',
        detail:
          'Pilastri e solette a sbalzo concentrano i carichi in punti discreti, eliminando la muratura portante continua.',
      },
      {
        title: 'Dissociazione struttura-involucro',
        detail:
          'Lo scheletro porta il peso, mentre pareti interne e facciate svolgono solo funzioni distributive e di chiusura.',
      },
      {
        title: 'Continuità spaziale e igiene',
        detail:
          'Aria sotto i pilotis, luce orizzontale diffusa e terrazze verdi praticabili migliorano salubrità e rapporto con l’esterno.',
      },
    ],
    diagramCaption:
      'Schema interpretativo originale: scomposizione assonometrica dei cinque punti su telaio puntiforme in cemento armato.',
  },
  {
    id: TopicId.VillaSavoye,
    index: '02',
    title: 'Villa Savoye',
    subtitle: 'Sintesi purista e promenade architecturale',
    dating: 'Progetto 1928 — Realizzazione 1928–1931',
    location: 'Poissy, Francia',
    imagePath: imgVillaSavoye,
    imageAlt: 'Riferimento fotografico di Villa Savoye a Poissy con prisma bianco sospeso su pilotis cilindrici e solarium curvo',
    imageCaption: 'Riferimento architettonico · Villa Savoye, Poissy (1928–1931)',
    summary:
      'Concepita come casa di villeggiatura per Pierre ed Eugénie Savoye su una radura circondata da alberi, Villa Savoye costituisce il manifesto costruito dei cinque punti. Un prisma bianco sospeso su una griglia regolare di pilotis accoglie al piano terra la curva di sterzata dell’automobile e guida il visitatore lungo una sequenza dinamica ascendente fino al solarium curvo sulla copertura.',
    architecturalFeatures: [
      'Griglia strutturale modulare di pilotis cilindrici (passo regolare di circa 4,75 m) che sostiene il volume principale del primo piano.',
      'Piano terreno arretrato e vetrato con profilo curvo calibrato sul raggio di sterzata dell’automobile.',
      'Promenade architecturale articolata su rampa centrale a doppia salita e scala elicoidale a chiocciola.',
      'Soggiorno a L aperto su un ampio patio scoperto protetto dalle finestre a nastro perimetrali.',
      'Tetto-giardino con solarium caratterizzato da setti curvi frangivento e apertura verso il paesaggio circostante.',
    ],
    keyConcepts: [
      {
        title: 'Promenade architecturale',
        detail:
          'L’architettura si comprende muovendosi nello spazio attraverso rampa, scala e variazioni continue di luce e visuali.',
      },
      {
        title: 'Rampa vs Scala',
        detail:
          'La scala connette rapidamente in verticale; la rampa impone una salita lenta, continua e percettiva tra i livelli.',
      },
      {
        title: 'Astrazione geometrica purista',
        detail:
          'Il parallelepipedo bianco sospeso dialoga per contrasto geometrico netto con il prato e il bosco di Poissy.',
      },
    ],
    diagramCaption:
      'Schema interpretativo originale: sezione longitudinale della promenade architecturale dalla quota dei pilotis al solarium.',
  },
  {
    id: TopicId.UniteHabitation,
    index: '03',
    title: 'Unité d’Habitation di Marsiglia',
    subtitle: 'Città verticale, Modulor e béton brut',
    dating: '1947 — 1952',
    location: 'Marsiglia, Francia',
    imagePath: imgUniteHabitation,
    imageAlt: 'Riferimento fotografico dell’Unité d’Habitation a Marsiglia in béton brut su pilotis scultorei con logge brise-soleil',
    imageCaption: 'Riferimento architettonico · Unité d’Habitation, Marsiglia (1947–1952)',
    summary:
      'Commissionata dallo Stato francese nell’emergenza abitativa del secondo dopoguerra, l’Unité d’Habitation sperimenta un nuovo modello di residenza collettiva capace di ospitare circa 1.600 abitanti in un unico blocco autonomo immerso nel verde. L’edificio traduce in scala urbana la ricerca proporzionale del Modulor e inaugura l’espressività materica del cemento armato a vista (béton brut).',
    architecturalFeatures: [
      'Imponente parallelepipedo sollevato su robusti pilastri scultorei in cemento armato (pilotis sagomati) che liberano il parco sottostante.',
      'Sistema di alloggi duplex a incastro (tipo L rovesciata) serviti ogni tre piani da una strada interna centrale, riducendo i corridoi.',
      'Dimensionamento integrale basato sul Modulor, sistema armonico fondato sulla statura umana (1,83 m / 2,26 m) e sulla sezione aurea.',
      'Strada commerciale interna al 7°–8° livello con negozi, servizi e piccolo albergo; servizi educativi e ricreativi sul tetto-terrazza.',
      'Tetto-terrazza collettivo concepito come piazza pubblica sopraelevata con asilo nido, pista podistica, palestra, teatro all’aperto e camini scultorei.',
    ],
    keyConcepts: [
      {
        title: 'Città verticale autonoma',
        detail:
          'Alloggi, servizi sociali, commercio e spazi comuni coesistono in un unico organismo risparmiando suolo urbano.',
      },
      {
        title: 'Sezione a incastro duplex',
        detail:
          'Due appartamenti sovrapposti si intrecciano attorno a un corridoio centrale, garantendo doppio affaccio e ventilazione trasversale.',
      },
      {
        title: 'Béton brut e brise-soleil',
        detail:
          'Il calcestruzzo lasciato grezzo con le impronte delle casseforme in legno diventa linguaggio espressivo insieme ai frangisole profondi.',
      },
    ],
    diagramCaption:
      'Schema interpretativo originale: sezione trasversale con pilotis massicci, cellule duplex a incastro, strada interna e tetto-terrazza.',
  },
  {
    id: TopicId.Chandigarh,
    index: '04',
    title: 'Chandigarh',
    subtitle: 'Pianificazione urbana e complesso del Campidoglio',
    dating: '1951 — 1965 (attuazione pluriennale)',
    location: 'Chandigarh, Punjab, India',
    imagePath: imgChandigarh,
    imageAlt: 'Riferimento fotografico del Palazzo dell’Assemblea a Chandigarh con portico curvo e torre iperbolica riflessi nel bacino d’acqua',
    imageCaption: 'Riferimento architettonico · Palazzo dell’Assemblea, Campidoglio di Chandigarh',
    summary:
      'Dopo la Partizione del 1947 e la perdita di Lahore a favore del Pakistan, l’India decise di fondare una nuova capitale per il Punjab. Subentrato al piano iniziale di Albert Mayer e Matthew Nowicki, Le Corbusier lavorò alla revisione del piano generale e alla progettazione del Campidoglio in collaborazione con Pierre Jeanneret, Jane Drew, Maxwell Fry e un’ampia équipe di architetti e ingegneri indiani.',
    architecturalFeatures: [
      'Maglia urbana organizzata in settori rettangolari autosufficienti (circa 800 × 1.200 m), dotati di scuole, mercati e aree verdi interne.',
      'Sistema viario gerarchico delle «7 V» (da V1 arterie territoriali a V7 percorsi pedonali), separando il traffico motorizzato dai flussi lenti.',
      'Complesso monumentale del Campidoglio (Settore 1) posto a nord ai piedi dell’Himalaya, isolato dalla città residenziale.',
      'Tre grandi edifici istituzionali realizzati: Palazzo dell’Alta Corte, Palazzo del Segretariato e Palazzo dell’Assemblea (il Palazzo del Governatore rimase irrealizzato).',
      'Dispositivi climatici passivi: grandi coperture a parasole rovesciato, bacini d’acqua riflettenti e brise-soleil profondi in cemento armato.',
    ],
    keyConcepts: [
      {
        title: 'Lavoro collegiale internazionale',
        detail:
          'Le Corbusier definì l’impianto urbano e il Campidoglio; Drew, Fry, Jeanneret e i progettisti indiani svilupparono gran parte dei settori e dell’edilizia.',
      },
      {
        title: 'Gerarchia stradale 7V e Settori',
        detail:
          'Ogni settore funziona come unità di vicinato protetta dal traffico veloce che scorre lungo i bordi.',
      },
      {
        title: 'Monumentalità climatica',
        detail:
          'Tetti a ombrello, torri iperboliche e portici ombreggiati adattano il cemento armato al sole e ai monsoni indiani.',
      },
    ],
    diagramCaption:
      'Schema interpretativo originale: maglia a settori, gerarchia viaria perimetrale e disposizione assiale del Campidoglio (Assemblea, Segretariato, Alta Corte).',
  },
  {
    id: TopicId.Ronchamp,
    index: '05',
    title: 'Notre-Dame du Haut a Ronchamp',
    subtitle: 'Architettura scultorea, luce e spazio sacro',
    dating: '1950 — Completamento 1955',
    location: 'Ronchamp, Francia',
    imagePath: imgRonchamp,
    imageAlt: 'Riferimento fotografico della cappella Notre-Dame du Haut a Ronchamp con copertura scultorea curva e muro sud traforato',
    imageCaption: 'Riferimento architettonico · Notre-Dame du Haut, Ronchamp (1955)',
    summary:
      'Eretta sulla collina di Bourlémont al posto di un santuario distrutto durante la Seconda guerra mondiale, la cappella di Ronchamp segna una svolta radicale rispetto al purismo geometrico degli anni Venti. Non più un prisma ortogonale su pilotis, bensì un organismo plastico e acustico modellato per il raccoglimento dei pellegrini e aperto verso la cerimonia all’aperto sul prato.',
    architecturalFeatures: [
      'Copertura monumentale a doppia membrana cava in cemento armato, dalla sagoma concava e scultorea, staccata leggermente dai muri perimetrali da una fessura luminosa.',
      'Muro sud fortemente inclinato e rastremato (strombatura spessa alla base), traforato da aperture di dimensioni e profondità variabili con vetri colorati e trasparenti.',
      'Tre torri-cappella semicilindriche rivestite d’intonaco bianco grezzo che captano la luce zenitale e la diffondono sugli altari laterali.',
      'Altare esterno coperto dallo sbalzo della copertura sul fronte est per accogliere i grandi pellegrinaggi all’aperto.',
      'Superamento dell’ortogonalità cartesiana di Villa Savoye a favore di superfici curve, asimmetria dinamica e tensione emotiva.',
    ],
    keyConcepts: [
      {
        title: 'Svolta plastico-scultorea',
        detail:
          'L’edificio agisce come «vaso acustico» in dialogo topografico con l’orizzonte collinare dei Vosgi.',
      },
      {
        title: 'Luce come materiale costruttivo',
        detail:
          'Fessura perimetrale sotto il tetto, strombature profonde e camini di luce modulano penombra e raccoglimento.',
      },
      {
        title: 'Evoluzione oltre il razionalismo',
        detail:
          'Dal rigore geometrico della «macchina per abitare» si passa a un linguaggio lirico, simbolico e materico.',
      },
    ],
    diagramCaption:
      'Schema interpretativo originale: sezione concettuale tra copertura cava curva, fessura di luce zenitale e muro sud strombato.',
  },
  {
    id: TopicId.LaTourette,
    index: '06',
    title: 'Convento Sainte-Marie de La Tourette',
    subtitle: 'Rigore monastico, pendio e modulazione della luce',
    dating: '1953 — Completamento 1960',
    location: 'Éveux, vicino a Lione, Francia',
    imagePath: imgLaTourette,
    imageAlt: 'Riferimento fotografico del Convento Sainte-Marie de La Tourette a Éveux con ali in béton brut su pilotis lungo il pendio',
    imageCaption: 'Riferimento architettonico · Convento de La Tourette, Éveux (1960)',
    summary:
      'Progettato per l’ordine domenicano su un terreno scosceso nei pressi di Lione, La Tourette concilia la povertà materica del cemento armato grezzo con l’organizzazione tradizionale del chiostro monastico, completamente reinterpretata. Anziché scavare terrazzamenti, il convento appoggia la propria copertura su un piano orizzontale costante e lascia scendere pilastri e volumi lungo il pendio naturale.',
    architecturalFeatures: [
      'Impianto a U composto da tre ali su pilotis intorno a un cortile inclinato, chiuso sul lato nord dal volume compatto e cieco della chiesa.',
      'Celle individuali dei frati collocate ai due livelli superiori lungo i bracci principali, ciascuna dotata di loggia brise-soleil privata aperta sul paesaggio.',
      'Spazi collettivi (refettorio, sala capitolare, biblioteca, aule) distribuiti nei livelli intermedi e caratterizzati dai vetri ondulatoires progettati con Iannis Xenakis.',
      'Chiesa monastica a pianta rettangolare austera, affiancata da una cappella bassa con copertura inclinata e «cannoni di luce» colorati.',
      'Passerelle chiuse a croce nel cortile interno che sostituiscono il chiostro perimetrale tradizionale.',
    ],
    keyConcepts: [
      {
        title: 'Insediamento sul pendio',
        detail:
          'La linea del tetto rimane orizzontale come riferimento assoluto mentre la base dell’edificio segue la pendenza del terreno.',
      },
      {
        title: 'Pans de verre ondulatoires',
        detail:
          'Montanti in calcestruzzo a passo musicale (con Iannis Xenakis) ritmano la luce e la vista lungo i corridoi collettivi.',
      },
      {
        title: 'Povertà brutale e spiritualità',
        detail:
          'Il béton brut nudo, la scala individuale delle celle e i cannoni di luce trasformano la tecnica industriale in ascesi.',
      },
    ],
    diagramCaption:
      'Schema interpretativo originale: sezione trasversale sul pendio tra ali delle celle, corte inclinata con passerelle e chiesa con cannoni di luce.',
  },
];
