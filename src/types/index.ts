export interface Book {
  id: number;
  title: string;
  content: string;
}

export interface Quote {
  id: number;
  text: string;
}

export interface Poem {
  id: number;
  title: string;
  content: string;
}

export type ContentType = 'quotes' | 'poems' | 'books';