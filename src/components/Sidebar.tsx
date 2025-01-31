import React from "react";
import { BookOpen, PenTool, Quote, X } from "lucide-react";
import { ContentType } from "../types";
import { books, poems, quotes } from "../data";

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
  setSelectedItemId,
}: SidebarProps) {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden ${
          isSidebarOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsSidebarOpen(false)}
      />

      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden fixed w-64 h-full bg-white z-20 transition-transform duration-300`}
      >
        <div className="p-4">
          <button
            className="absolute top-4 right-4"
            onClick={() => setIsSidebarOpen(false)}
          >
            <X size={24} className="text-black" />
          </button>

          <nav className="space-y-6 mt-8">
            {selectedType === "books" && (
              <div>
                <div className="flex items-center gap-2 text-black font-semibold mb-2">
                  <BookOpen size={20} />
                  <h2>Livres</h2>
                </div>
                <ul className="space-y-2 ml-6">
                  {books.map((book) => (
                    <li key={book.id}>
                      <button
                        className={`text-sm hover:text-black ${
                          selectedItemId === book.id
                            ? "text-black font-medium"
                            : "text-gray-600"
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

            {selectedType === "poems" && (
              <div>
                <div className="flex items-center gap-2 text-black font-semibold mb-2">
                  <PenTool size={20} />
                  <h2>Poèmes</h2>
                </div>
                <ul className="space-y-2 ml-6">
                  {poems.map((poem) => (
                    <li key={poem.id}>
                      <button
                        className={`text-sm hover:text-black ${
                          selectedItemId === poem.id
                            ? "text-black font-medium"
                            : "text-gray-600"
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

            {selectedType === "quotes" && (
              <div>
                <div className="flex items-center gap-2 text-black font-semibold mb-2">
                  <Quote size={20} />
                  <h2>Citations</h2>
                </div>
                <ul className="space-y-2 ml-6">
                  {quotes.map((quote) => (
                    <li key={quote.id}>
                      <button
                        className={`text-sm hover:text-black ${
                          selectedItemId === quote.id
                            ? "text-black font-medium"
                            : "text-gray-600"
                        }`}
                        onClick={() => {
                          setSelectedItemId(quote.id);
                          setIsSidebarOpen(false);
                        }}
                      >
                        {quote.text}
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
