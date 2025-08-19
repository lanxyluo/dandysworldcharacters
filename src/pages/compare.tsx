import React, { useState } from 'react';
import { characters } from '../data/characters';
import { Character } from '../types/character';
import CharacterSelector from '../components/compare/CharacterSelector';
import ComparisonTable from '../components/compare/ComparisonTable';

export default function ComparePage() {
  const [selectedCharacters, setSelectedCharacters] = useState<Character[]>([]);

  const handleAddCharacter = (character: Character) => {
    if (selectedCharacters.length < 3 && !selectedCharacters.find(c => c.id === character.id)) {
      setSelectedCharacters([...selectedCharacters, character]);
    }
  };

  const handleRemoveCharacter = (characterId: string) => {
    setSelectedCharacters(selectedCharacters.filter(c => c.id !== characterId));
  };

  const handleClearAll = () => {
    setSelectedCharacters([]);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
            Character Comparison
          </h1>
          <p className="text-gray-400 text-lg">
            Select up to 3 characters to compare their stats, abilities, and requirements
          </p>
        </div>

        {/* Character Selector */}
        <div className="mb-8">
          <CharacterSelector
            characters={characters}
            selectedCharacters={selectedCharacters}
            onAddCharacter={handleAddCharacter}
            onRemoveCharacter={handleRemoveCharacter}
            onClearAll={handleClearAll}
          />
        </div>

        {/* Comparison Table */}
        {selectedCharacters.length > 0 && (
          <div className="mb-8">
            <ComparisonTable characters={selectedCharacters} />
          </div>
        )}

        {/* Instructions */}
        {selectedCharacters.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold mb-2">No Characters Selected</h3>
            <p className="text-gray-400">
              Use the character selector above to choose characters for comparison
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
