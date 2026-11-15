import { TopicId, TopicMeta } from '../types/quiz';

export const TOPICS_META: TopicMeta[] = [
  {
    id: TopicId.CinquePunti,
    index: '01',
    title: 'I cinque punti dell’architettura moderna',
    shortTitle: 'I cinque punti',
    dating: '1926 — 1927',
    location: 'Formulazione teorica (Parigi / Weissenhof)',
  },
  {
    id: TopicId.VillaSavoye,
    index: '02',
    title: 'Villa Savoye',
    shortTitle: 'Villa Savoye',
    dating: 'Progetto 1928 — Costruzione 1928–1931',
    location: 'Poissy, Île-de-France, Francia',
  },
  {
    id: TopicId.UniteHabitation,
    index: '03',
    title: 'Unité d’Habitation di Marsiglia',
    shortTitle: 'Unité d’Habitation',
    dating: '1947 — 1952',
    location: 'Marsiglia, Boulevard Michelet, Francia',
  },
  {
    id: TopicId.Chandigarh,
    index: '04',
    title: 'Chandigarh e il Campidoglio',
    shortTitle: 'Chandigarh',
    dating: '1951 — 1965 (sviluppo successivo)',
    location: 'Punjab, India',
  },
  {
    id: TopicId.Ronchamp,
    index: '05',
    title: 'Notre-Dame du Haut a Ronchamp',
    shortTitle: 'Cappella di Ronchamp',
    dating: '1950 — Completamento 1955',
    location: 'Ronchamp, Borgogna-Franca Contea, Francia',
  },
  {
    id: TopicId.LaTourette,
    index: '06',
    title: 'Convento Sainte-Marie de La Tourette',
    shortTitle: 'Convento La Tourette',
    dating: '1953 — Completamento 1960',
    location: 'Éveux, vicino a Lione, Francia',
  },
];

export const TOPIC_MAP: Record<TopicId, TopicMeta> = TOPICS_META.reduce(
  (acc, item) => {
    acc[item.id] = item;
    return acc;
  },
  {} as Record<TopicId, TopicMeta>,
);
