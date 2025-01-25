import React from 'react';
import { poems } from '../data';

interface PoemsProps {
  selectedItemId: number | null;
}

export function Poems({ selectedItemId }: PoemsProps) {
  const poem = poems.find(p => p.id === selectedItemId);
  
  if (!poem) return null;
  
  return (
    <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold mb-4 text-black">{poem.title}</h2>
      <p className="whitespace-pre-line text-black">{poem.content}</p>
    </div>
  );
}