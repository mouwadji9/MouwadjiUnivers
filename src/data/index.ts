import { Book, Quote, Poem } from "../types"; // Importation des types
import citations from "./citations"; // Importation des citations
import poemes from "./poemesData"; // Importation des poèmes

export const books: Book[] = [
  { id: 1, title: "L'aube nouvelle", content: "Contenu du livre 1..." },
  { id: 2, title: "Les chemins du destin", content: "Contenu du livre 2..." },
  { id: 3, title: "Échos du passé", content: "Contenu du livre 3..." },
];

// Conversion des citations pour correspondre à l'interface Quote
export const quotes: Quote[] = citations.map((citation, index) => ({
  id: index + 1,
  text: `${citation.texte} - ${citation.auteur}`,
}));

// Conversion des poèmes pour correspondre à l'interface Poem
export const poems: Poem[] = poemes.map((poeme) => ({
  id: poeme.id,
  title: poeme.titre,
  content: poeme.contenu,
}));
