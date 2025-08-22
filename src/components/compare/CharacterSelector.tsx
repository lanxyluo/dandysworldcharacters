import { useState, useMemo } from 'react';
import { Character } from '../../types/character';

interface CharacterSelectorProps {
  characters: Character[];
  selectedCharacters: Character[];
  onAddCharacter: (character: Character) => void;
  onRemoveCharacter: (characterId: string) => void;
  onClearAll: () => void;
}

export default function CharacterSelector({
  characters,
  selectedCharacters,
  onAddCharacter,
  onRemoveCharacter,
  onClearAll
}: CharacterSelectorProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedRarity, setSelectedRarity] = useState<string>('all');

  const filteredCharacters = useMemo(() => {
    return characters.filter(character => {
      const matchesSearch = character.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           character.fullName.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = selectedType === 'all' || character.type === selectedType;
      const matchesRarity = selectedRarity === 'all' || character.rarity === selectedRarity;
      
      return matchesSearch && matchesType && matchesRarity;
    });
  }, [characters, searchTerm, selectedType, selectedRarity]);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'toon': return 'bg-gradient-to-r from-indigo-500 to-purple-500';
      case 'main': return 'bg-gradient-to-r from-purple-500 to-pink-500';
      case 'regular': return 'bg-gradient-to-r from-blue-500 to-cyan-500';
      case 'event': return 'bg-gradient-to-r from-orange-500 to-red-500';
      case 'lethal': return 'bg-gradient-to-r from-red-600 to-black';
      case 'twisted': return 'bg-gradient-to-r from-purple-800 to-black';
      default: return 'bg-gray-600';
    }
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'text-gray-400';
      case 'uncommon': return 'text-green-400';
      case 'rare': return 'text-blue-400';
      case 'legendary': return 'text-yellow-400';
      case 'twisted': return 'text-purple-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="mb-8">
      {/* Selected Characters Display */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Selected Characters ({selectedCharacters.length}/3)</h2>
          {selectedCharacters.length > 0 && (
            <button
              onClick={onClearAll}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
            >
              Clear All
            </button>
          )}
        </div>
        
        <div className="flex flex-wrap gap-3">
          {selectedCharacters.map(character => (
            <div
              key={character.id}
              className="flex items-center gap-3 bg-gray-800 rounded-lg p-3 border border-gray-700"
            >
              <div className="text-2xl">{character.image}</div>
              <div>
                <div className="font-medium">{character.name}</div>
                <div className="text-sm text-gray-400">{character.fullName}</div>
              </div>
              <button
                onClick={() => onRemoveCharacter(character.id)}
                className="ml-2 p-1 text-gray-400 hover:text-red-400 transition-colors"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Search and Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium mb-2">Search Characters</label>
          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Filter by Type</label>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
          >
            <option value="all">All Types</option>
            <option value="toon">Toons</option>
            <option value="main">Main Characters</option>
            <option value="regular">Regular Characters</option>
            <option value="event">Event Characters</option>
            <option value="lethal">Lethal Characters</option>
            <option value="twisted">Twisted Characters</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Filter by Rarity</label>
          <select
            value={selectedRarity}
            onChange={(e) => setSelectedRarity(e.target.value)}
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
          >
            <option value="all">All Rarities</option>
            <option value="common">Common</option>
            <option value="uncommon">Uncommon</option>
            <option value="rare">Rare</option>
            <option value="legendary">Legendary</option>
            <option value="twisted">Twisted</option>
          </select>
        </div>
      </div>

      {/* Character Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {filteredCharacters.map(character => {
          const isSelected = selectedCharacters.some(c => c.id === character.id);
          const isDisabled = isSelected || selectedCharacters.length >= 3;
          
          return (
            <div
              key={character.id}
              className={`relative rounded-lg border-2 transition-all cursor-pointer ${
                isSelected 
                  ? 'border-green-500 bg-green-900/20' 
                  : isDisabled 
                    ? 'border-gray-600 bg-gray-800/50 cursor-not-allowed' 
                    : 'border-gray-600 bg-gray-800 hover:border-blue-500 hover:bg-gray-700'
              }`}
              onClick={() => !isDisabled && onAddCharacter(character)}
            >
              <div className="p-4 text-center">
                <div className="text-4xl mb-2">{character.image}</div>
                <div className="font-semibold text-sm mb-1">{character.name}</div>
                <div className="text-xs text-gray-400 mb-2">{character.fullName}</div>
                
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${getTypeColor(character.type)}`}>
                    {character.type}
                  </span>
                  <span className={`text-xs font-medium ${getRarityColor(character.rarity)}`}>
                    {character.rarity}
                  </span>
                </div>
                
                {isSelected && (
                  <div className="absolute top-2 right-2 text-green-500 text-xl">
                    ✓
                  </div>
                )}
                
                {!isSelected && !isDisabled && (
                  <button className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded text-sm transition-colors">
                    Add
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
