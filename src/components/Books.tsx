import React from 'react';
import { books } from '../data';

interface BooksProps {
  selectedItemId: number | null;
}

export function Books({ selectedItemId }: BooksProps) {
  const book = books.find(b => b.id === selectedItemId);
  
  if (!book) return null;
  
  return (
    <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold mb-4 text-black">{book.title}</h2>
      <p className="text-black">{book.content}</p>
    </div>
  );
}