import { useState } from 'react';
import { Character, characters } from '../data/characters';
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
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-center mb-2">Character Comparison</h1>
          <p className="text-gray-400 text-center">Compare up to 3 characters side by side</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Character Selector */}
        <CharacterSelector 
          characters={characters}
          selectedCharacters={selectedCharacters}
          onAddCharacter={handleAddCharacter}
          onRemoveCharacter={handleRemoveCharacter}
          onClearAll={handleClearAll}
        />

        {/* Comparison Table */}
        {selectedCharacters.length > 0 && (
          <ComparisonTable characters={selectedCharacters} />
        )}

        {/* Empty State */}
        {selectedCharacters.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl mb-2">Select characters to compare</h3>
            <p className="text-gray-400">Choose up to 3 characters to see detailed comparison</p>
          </div>
        )}
      </div>
    </div>
  );
}
