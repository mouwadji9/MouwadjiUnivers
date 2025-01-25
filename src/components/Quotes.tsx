import React from 'react';
import { Quote } from 'lucide-react';
import { quotes } from '../data';

export function Quotes() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {quotes.map(quote => (
        <div 
          key={quote.id}
          className="bg-white bg-opacity-90 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200"
        >
          <div className="text-black mb-2">
            <Quote size={24} />
          </div>
          <p className="text-black italic">"{quote.text}"</p>
        </div>
      ))}
    </div>
  );
}