import React, { useState } from 'react';
import { ContentType } from './types';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Books } from './components/Books';
import { Poems } from './components/Poems';
import { Quotes } from './components/Quotes';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedType, setSelectedType] = useState<ContentType>('books');
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  const handleNavClick = (type: ContentType) => {
    setSelectedType(type);
    setSelectedItemId(null);
    setIsNavOpen(false);
    setIsSidebarOpen(true);
  };

  const renderContent = () => {
    switch (selectedType) {
      case 'quotes':
        return <Quotes />;
      case 'books':
        return <Books selectedItemId={selectedItemId} />;
      case 'poems':
        return <Poems selectedItemId={selectedItemId} />;
      default:
        return null;
    }
  };

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{ backgroundImage: 'url(https://i.imgur.com/cHvbk5i_d.jpeg?maxwidth=520&shape=thumb&fidelity=high)' }}
    >
      <Header
        selectedType={selectedType}
        isNavOpen={isNavOpen}
        toggleNav={toggleNav}
        handleNavClick={handleNavClick}
      />

      <div className="flex min-h-[calc(100vh-64px)]">
        {(selectedType === 'books' || selectedType === 'poems') && (
          <Sidebar
            selectedType={selectedType}
            selectedItemId={selectedItemId}
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
            setSelectedItemId={setSelectedItemId}
          />
        )}

        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            {renderContent() || (
              <div className="text-center bg-white bg-opacity-90 p-8 rounded-lg shadow-md">
                <p className="text-black">Sélectionnez un élément pour voir son contenu</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;