import React from 'react';
import { BookOpen, PenTool, X } from 'lucide-react';
import { ContentType } from '../types';
import { books, poems } from '../data';

interface SidebarProps {
  selectedType: ContentType;
  selectedItemId: number | null;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (open: boolean) => void;
  setSelectedItemId: (id: number) => void;
}

export function Sidebar({ 
  selectedType, 
  selectedItemId, 
  isSidebarOpen, 
  setIsSidebarOpen, 
  setSelectedItemId 
}: SidebarProps) {
  return (
    <>
      {/* Overlay pour mobile */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden ${
          isSidebarOpen ? 'block' : 'hidden'
        }`}
        onClick={() => setIsSidebarOpen(false)}
      />
      
      <aside className={`
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0
        fixed md:static
        w-64 h-[calc(100vh-64px)]
        bg-white bg-opacity-90
        shadow-lg
        transition-transform duration-300
        z-20
        border-r border-gray-200
      `}>
        <div className="p-4">
          <button 
            className="md:hidden absolute top-4 right-4"
            onClick={() => setIsSidebarOpen(false)}
          >
            <X size={24} className="text-black" />
          </button>

          <nav className="space-y-6 mt-8">
            {selectedType === 'books' && (
              <div>
                <div className="flex items-center gap-2 text-black font-semibold mb-2">
                  <BookOpen size={20} />
                  <h2>Livres</h2>
                </div>
                <ul className="space-y-2 ml-6">
                  {books.map(book => (
                    <li key={book.id}>
                      <button
                        className={`text-sm hover:text-black ${
                          selectedItemId === book.id
                            ? 'text-black font-medium'
                            : 'text-gray-600'
                        }`}
                        onClick={() => {
                          setSelectedItemId(book.id);
                          setIsSidebarOpen(false);
                        }}
                      >
                        {book.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {selectedType === 'poems' && (
              <div>
                <div className="flex items-center gap-2 text-black font-semibold mb-2">
                  <PenTool size={20} />
                  <h2>Poèmes</h2>
                </div>
                <ul className="space-y-2 ml-6">
                  {poems.map(poem => (
                    <li key={poem.id}>
                      <button
                        className={`text-sm hover:text-black ${
                          selectedItemId === poem.id
                            ? 'text-black font-medium'
                            : 'text-gray-600'
                        }`}
                        onClick={() => {
                          setSelectedItemId(poem.id);
                          setIsSidebarOpen(false);
                        }}
                      >
                        {poem.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </nav>
        </div>
      </aside>
    </>
  );
}