import { Book, Quote, Poem } from '../types';

export const books: Book[] = [
  { id: 1, title: "L'aube nouvelle", content: "Contenu du livre 1..." },
  { id: 2, title: "Les chemins du destin", content: "Contenu du livre 2..." },
  { id: 3, title: "Échos du passé", content: "Contenu du livre 3..." },
];

export const quotes: Quote[] = [
  { id: 1, text: "La vie est un voyage qui nous mène vers l'inconnu..." },
  { id: 2, text: "Dans le silence de la nuit, les étoiles nous parlent..." },
  { id: 3, text: "Chaque pas nous rapproche de notre destin..." },
];

export const poems: Poem[] = [
  { id: 1, title: "Soleil Levant", content: "Vers du poème 1..." },
  { id: 2, title: "Nuit Étoilée", content: "Vers du poème 2..." },
  { id: 3, title: "L'océan infini", content: "Vers du poème 3..." },
];