import React, { useState } from 'react';
import CharacterCard from './components/CharacterCard';
import CharacterModal from './components/CharacterModal';
import { characters } from './data/characters';
import { Character } from './types/character';

function App() {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCharacterClick = (character: Character) => {
    setSelectedCharacter(character);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCharacter(null);
  };

  const mainCharacters = characters.filter(c => c.type === 'main');
  const regularCharacters = characters.filter(c => c.type === 'regular');
  const legendaryCharacters = characters.filter(c => c.rarity === 'legendary');
  const commonCharacters = characters.filter(c => c.rarity === 'common');

  return (
    <div className="min-h-screen bg-dark-bg">
      {/* Header */}
      <header className="bg-card-bg border-b border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Dandy's World Characters
          </h1>
          <p className="text-center text-gray-400 mt-2">
            Discover the amazing characters from Dandy's World
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-card-bg rounded-lg p-4 text-center border border-gray-700">
            <h3 className="text-lg font-semibold text-gray-300">Total Characters</h3>
            <p className="text-3xl font-bold text-white">{characters.length}</p>
          </div>
          <div className="bg-card-bg rounded-lg p-4 text-center border border-gray-700">
            <h3 className="text-lg font-semibold text-gray-300">Main Characters</h3>
            <p className="text-3xl font-bold text-yellow-400">{mainCharacters.length}</p>
          </div>
          <div className="bg-card-bg rounded-lg p-4 text-center border border-gray-700">
            <h3 className="text-lg font-semibold text-gray-300">Legendary</h3>
            <p className="text-3xl font-bold text-orange-400">{legendaryCharacters.length}</p>
          </div>
          <div className="bg-card-bg rounded-lg p-4 text-center border border-gray-700">
            <h3 className="text-lg font-semibold text-gray-300">Common</h3>
            <p className="text-3xl font-bold text-gray-400">{commonCharacters.length}</p>
          </div>
        </div>

        {/* Characters Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {characters.map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
              onClick={handleCharacterClick}
            />
          ))}
        </div>
      </main>

      {/* Character Modal */}
      <CharacterModal
        character={selectedCharacter}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default App;
