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
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [sortBy, setSortBy] = useState<string>('name');

  const filteredCharacters = useMemo(() => {
    let filtered = characters.filter(character => {
      const matchesSearch = character.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           (character.fullName && character.fullName.toLowerCase().includes(searchTerm.toLowerCase())) ||
                           character.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = selectedType === 'all' || character.type === selectedType;
      const matchesRarity = selectedRarity === 'all' || character.rarity === selectedRarity;
      
      return matchesSearch && matchesType && matchesRarity;
    });

    // Sort characters
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'rarity':
          const rarityOrder = { 'common': 1, 'uncommon': 2, 'rare': 3, 'legendary': 4, 'twisted': 5 };
          return (rarityOrder[a.rarity as keyof typeof rarityOrder] || 0) - (rarityOrder[b.rarity as keyof typeof rarityOrder] || 0);
        case 'type':
          return a.type.localeCompare(b.type);
        case 'skillCheck':
          return b.stats.skillCheck - a.stats.skillCheck;
        case 'stealth':
          return b.stats.stealth - a.stats.stealth;
        case 'speed':
          return b.stats.speed - a.stats.speed;
        case 'health':
          return b.stats.health - a.stats.health;
        case 'damage':
          return b.stats.damage - a.stats.damage;
        default:
          return 0;
      }
    });

    return filtered;
  }, [characters, searchTerm, selectedType, selectedRarity, sortBy]);

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
      case 'common': return 'text-green-400';
      case 'uncommon': return 'text-green-400';
      case 'rare': return 'text-blue-400';
      case 'legendary': return 'text-yellow-400';
      case 'twisted': return 'text-purple-400';
      default: return 'text-gray-400';
    }
  };

  const getStatColor = (value: number) => {
    if (value >= 4) return 'text-green-400';
    if (value >= 3) return 'text-yellow-400';
    if (value >= 2) return 'text-orange-400';
    return 'text-red-400';
  };

  const quickFilters = [
    { label: 'High Stealth', filter: (c: Character) => c.stats.stealth >= 4 },
    { label: 'High Speed', filter: (c: Character) => c.stats.speed >= 4 },
    { label: 'High Health', filter: (c: Character) => c.stats.health >= 4 },
    { label: 'High Damage', filter: (c: Character) => c.stats.damage >= 4 },
    { label: 'Balanced', filter: (c: Character) => 
      c.stats.stealth >= 3 && c.stats.speed >= 3 && c.stats.health >= 3 && c.stats.damage >= 3
    }
  ];

  const [activeQuickFilter, setActiveQuickFilter] = useState<string>('');

  const applyQuickFilter = (filterLabel: string) => {
    if (activeQuickFilter === filterLabel) {
      setActiveQuickFilter('');
      return;
    }
    setActiveQuickFilter(filterLabel);
  };

  const getFilteredByQuickFilter = () => {
    if (!activeQuickFilter) return filteredCharacters;
    const filter = quickFilters.find(f => f.label === activeQuickFilter);
    return filter ? filteredCharacters.filter(filter.filter) : filteredCharacters;
  };

  const finalCharacters = getFilteredByQuickFilter();

  return (
    <div className="mb-8">
      {/* Selected Characters Display */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Selected Characters ({selectedCharacters.length}/3)</h2>
          {selectedCharacters.length > 0 && (
            <button
              onClick={onClearAll}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors text-sm"
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
                aria-label={`Remove ${character.name}`}
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Search and Filters */}
      <div className="bg-gray-800 rounded-lg border border-gray-700 p-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-2">Search Characters</label>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by name, description..."
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Type</label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="all">All Types</option>
              <option value="toon">Toon</option>
              <option value="main">Main</option>
              <option value="regular">Regular</option>
              <option value="event">Event</option>
              <option value="lethal">Lethal</option>
              <option value="twisted">Twisted</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Rarity</label>
            <select
              value={selectedRarity}
              onChange={(e) => setSelectedRarity(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="all">All Rarities</option>
              <option value="common">Common</option>
              <option value="uncommon">Uncommon</option>
              <option value="rare">Rare</option>
              <option value="legendary">Legendary</option>
              <option value="twisted">Twisted</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Sort By</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="name">Name</option>
              <option value="rarity">Rarity</option>
              <option value="type">Type</option>
              <option value="skillCheck">Skill Check</option>
              <option value="stealth">Stealth</option>
              <option value="speed">Speed</option>
              <option value="health">Health</option>
              <option value="damage">Damage</option>
            </select>
          </div>
        </div>

        {/* Quick Filters */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {quickFilters.map((filter) => (
              <button
                key={filter.label}
                onClick={() => applyQuickFilter(filter.label)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  activeQuickFilter === filter.label
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Advanced Filters Toggle */}
        <div className="flex justify-between items-center">
          <button
            onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
            className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
          >
            {showAdvancedFilters ? 'Hide' : 'Show'} Advanced Filters
          </button>
          
          <div className="text-sm text-gray-400">
            Showing {finalCharacters.length} of {characters.length} characters
          </div>
        </div>

        {/* Advanced Filters */}
        {showAdvancedFilters && (
          <div className="mt-4 pt-4 border-t border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Min Skill Check</label>
                <input
                  type="range"
                  min="1"
                  max="5"
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Min Stealth</label>
                <input
                  type="range"
                  min="1"
                  max="5"
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Min Speed</label>
                <input
                  type="range"
                  min="1"
                  max="5"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Character Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {finalCharacters.map(character => {
          const isSelected = selectedCharacters.some(c => c.id === character.id);
          const isDisabled = selectedCharacters.length >= 3 && !isSelected;
          
          return (
            <div
              key={character.id}
              className={`relative bg-gray-800 rounded-lg border-2 transition-all duration-200 hover:scale-105 ${
                isSelected 
                  ? 'border-purple-500 bg-gray-700' 
                  : isDisabled 
                    ? 'border-gray-600 bg-gray-900 opacity-50 cursor-not-allowed'
                    : 'border-gray-700 hover:border-gray-600 cursor-pointer'
              }`}
              onClick={() => !isDisabled && onAddCharacter(character)}
            >
              {/* Character Image and Name */}
              <div className="p-4 text-center">
                <div className="text-4xl mb-2">{character.image}</div>
                <div className="font-semibold text-lg mb-1">{character.name}</div>
                <div className="text-sm text-gray-400 mb-3">{character.fullName}</div>
                
                {/* Type and Rarity Badges */}
                <div className="flex items-center justify-center gap-2 mb-3">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${getTypeColor(character.type)}`}>
                    {character.type}
                  </span>
                  <span className={`text-sm font-medium ${getRarityColor(character.rarity)}`}>
                    {character.rarity}
                  </span>
                </div>

                {/* Stats Preview */}
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="text-center">
                    <div className="text-gray-400">Stealth</div>
                    <div className={getStatColor(character.stats.stealth)}>{character.stats.stealth}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-400">Speed</div>
                    <div className={getStatColor(character.stats.speed)}>{character.stats.speed}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-400">Health</div>
                    <div className={getStatColor(character.stats.health)}>{character.stats.health}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-400">Damage</div>
                    <div className={getStatColor(character.stats.damage)}>{character.stats.damage}</div>
                  </div>
                </div>
              </div>

              {/* Selection Status */}
              {isSelected && (
                <div className="absolute top-2 right-2 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
              )}

              {/* Add/Remove Button */}
              <div className="p-4 pt-0">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (isSelected) {
                      onRemoveCharacter(character.id);
                    } else if (!isDisabled) {
                      onAddCharacter(character);
                    }
                  }}
                  disabled={isDisabled}
                  className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
                    isSelected
                      ? 'bg-red-600 hover:bg-red-700 text-white'
                      : isDisabled
                        ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                        : 'bg-purple-600 hover:bg-purple-700 text-white'
                  }`}
                >
                  {isSelected ? 'Remove' : 'Add Character'}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* No Results Message */}
      {finalCharacters.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold mb-2">No Characters Found</h3>
          <p className="text-gray-400">
            Try adjusting your search terms or filters to find more characters.
          </p>
        </div>
      )}
    </div>
  );
}
