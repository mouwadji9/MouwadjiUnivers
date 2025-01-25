import React from 'react';
import { Menu, BookOpen, Quote, PenTool, X } from 'lucide-react';
import { ContentType } from '../types';

interface HeaderProps {
  selectedType: ContentType;
  isNavOpen: boolean;
  toggleNav: () => void;
  handleNavClick: (type: ContentType) => void;
}

export function Header({ selectedType, isNavOpen, toggleNav, handleNavClick }: HeaderProps) {
  return (
    <header className="bg-black bg-opacity-80 text-white shadow-lg relative">
      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <button className="md:hidden" onClick={toggleNav}>
            <Menu size={24} />
          </button>
          <h1 className="text-2xl font-bold">Mouwadji Écrits</h1>
          <div className="hidden md:flex space-x-8">
            <button 
              className={`text-white hover:text-gray-300 transition-colors ${
                selectedType === 'books' ? 'border-b-2 border-white' : ''
              }`}
              onClick={() => handleNavClick('books')}
            >
              Livres
            </button>
            <button 
              className={`text-white hover:text-gray-300 transition-colors ${
                selectedType === 'quotes' ? 'border-b-2 border-white' : ''
              }`}
              onClick={() => handleNavClick('quotes')}
            >
              Citations
            </button>
            <button 
              className={`text-white hover:text-gray-300 transition-colors ${
                selectedType === 'poems' ? 'border-b-2 border-white' : ''
              }`}
              onClick={() => handleNavClick('poems')}
            >
              Poèmes
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`
          md:hidden 
          fixed 
          inset-0 
          z-50 
          bg-black 
          transform 
          transition-transform duration-300 ease-in-out
          ${isNavOpen ? 'translate-y-0' : '-translate-y-full'}
        `}
      >
        <div className="p-4">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold">Menu</h1>
            <button onClick={toggleNav}>
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col space-y-4">
            <button 
              className={`text-white text-xl py-2 ${
                selectedType === 'books' ? 'font-bold' : ''
              }`}
              onClick={() => handleNavClick('books')}
            >
              <span className="flex items-center gap-2">
                <BookOpen size={20} />
                Livres
              </span>
            </button>
            <button 
              className={`text-white text-xl py-2 ${
                selectedType === 'quotes' ? 'font-bold' : ''
              }`}
              onClick={() => handleNavClick('quotes')}
            >
              <span className="flex items-center gap-2">
                <Quote size={20} />
                Citations
              </span>
            </button>
            <button 
              className={`text-white text-xl py-2 ${
                selectedType === 'poems' ? 'font-bold' : ''
              }`}
              onClick={() => handleNavClick('poems')}
            >
              <span className="flex items-center gap-2">
                <PenTool size={20} />
                Poèmes
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}