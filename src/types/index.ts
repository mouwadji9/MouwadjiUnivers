// types.ts
export interface Book {
  id: number;
  title: string;
  content: string;
}

export interface Quote {
  id: number;
  text: string;
  author: string; // Ajout de l'auteur pour les citations
}

export interface Poem {
  id: number;
  title: string;
  excerpt: string; // Ajout d'extrait pour les poèmes
  content: string;
  analysis: string; // Ajout d'analyse pour les poèmes
}

export type ContentType = "quotes" | "poems" | "books";
