import React from 'react';
import { Character } from '../types/character';

interface CharacterModalProps {
  character: Character | null;
  isOpen: boolean;
  onClose: () => void;
}

const CharacterModal: React.FC<CharacterModalProps> = ({ character, isOpen, onClose }) => {
  if (!isOpen || !character) return null;

  const renderStatBar = (value: number, max: number = 5) => {
    const percentage = (value / max) * 100;
    return (
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-300 min-w-[80px]">
          {value}/{max}
        </span>
        <div className="flex-1 bg-gray-700 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    );
  };

  const getRarityColor = () => {
    if (character.rarity === 'legendary') {
      return 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black';
    }
    return 'bg-gray-600 text-white';
  };

  const getRarityText = () => {
    if (character.rarity === 'legendary') {
      return 'LEGENDARY CHARACTER';
    }
    return 'COMMON CHARACTER';
  };

  const getTypeColor = () => {
    if (character.type === 'main') {
      return 'text-yellow-400';
    }
    return 'text-gray-400';
  };

  const getTypeText = () => {
    if (character.type === 'main') {
      return 'Main Character';
    }
    return 'Regular Character';
    };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-card-bg rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-white">{character.name}</h2>
              <p className="text-lg text-gray-300 mt-1">{character.fullName}</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white text-2xl font-bold"
            >
              ×
            </button>
          </div>
          
          {/* Type and Rarity Badges */}
          <div className="flex gap-3 mt-3">
            <span className={`px-3 py-1 text-sm font-bold rounded-full ${getRarityColor()}`}>
              {getRarityText()}
            </span>
            <span className={`px-3 py-1 text-sm font-bold rounded-full bg-gray-700 text-white`}>
              {getTypeText()}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Avatar and Description */}
            <div className="text-center">
              <img
                src={character.image}
                alt={character.name}
                className="w-40 h-40 rounded-full object-cover border-4 border-gray-700 mx-auto mb-6"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `https://via.placeholder.com/150x150/4a5568/ffffff?text=${character.name.charAt(0)}`;
                }}
              />

              <div className="text-left">
                <h3 className="text-lg font-semibold text-gray-300 mb-2">Description</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {character.description}
                </p>

                {/* Requirements */}
                <h3 className="text-lg font-semibold text-gray-300 mb-3">Requirements</h3>
                <div className="space-y-2">
                  {character.requirements.ichor > 0 && (
                    <div className="flex items-center gap-2">
                      <span className="text-purple-400 font-semibold">💰</span>
                      <span className="text-gray-400 text-sm">
                        {character.requirements.ichor.toLocaleString()} Ichor
                      </span>
                    </div>
                  )}
                  {character.requirements.research && (
                    <div className="flex items-center gap-2">
                      <span className="text-blue-400 font-semibold">🔬</span>
                      <span className="text-gray-400 text-sm">{character.requirements.research}</span>
                    </div>
                  )}
                  {character.requirements.mastery && (
                    <div className="flex items-center gap-2">
                      <span className="text-green-400 font-semibold">🏆</span>
                      <span className="text-gray-400 text-sm">{character.requirements.mastery}</span>
                    </div>
                  )}
                  {character.requirements.other && character.requirements.other.map((req, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="text-yellow-400 font-semibold">⭐</span>
                      <span className="text-gray-400 text-sm">{req}</span>
                    </div>
                  ))}
                  {character.requirements.note && (
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400 font-semibold">ℹ️</span>
                      <span className="text-gray-400 text-sm">{character.requirements.note}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column - Stats and Abilities */}
            <div>
              {/* Stats */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-300 mb-4">Stats</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-2 flex items-center gap-2">
                      <span className="text-red-400">❤️</span> Hearts
                    </h4>
                    {renderStatBar(character.stats.hearts)}
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-2 flex items-center gap-2">
                      <span className="text-blue-400">🎯</span> Skill Check
                    </h4>
                    {renderStatBar(character.stats.skillCheck)}
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-2 flex items-center gap-2">
                      <span className="text-green-400">🏃</span> Movement Speed
                    </h4>
                    {renderStatBar(character.stats.movementSpeed)}
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-2 flex items-center gap-2">
                      <span className="text-yellow-400">⚡</span> Stamina
                    </h4>
                    {renderStatBar(character.stats.stamina)}
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-2 flex items-center gap-2">
                      <span className="text-purple-400">👁️</span> Stealth
                    </h4>
                    {renderStatBar(character.stats.stealth)}
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-2 flex items-center gap-2">
                      <span className="text-cyan-400">⚙️</span> Extraction Speed
                    </h4>
                    {renderStatBar(character.stats.extractionSpeed)}
                  </div>
                </div>
              </div>

              {/* Abilities */}
              <div>
                <h3 className="text-lg font-semibold text-gray-300 mb-4">Abilities</h3>
                <div className="space-y-4">
                  {character.abilities.active && (
                    <div className="bg-gray-800 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-sm font-medium text-blue-400">{character.abilities.active.name}</h4>
                        <span className="text-xs text-gray-400">Cooldown: {character.abilities.active.cooldown}s</span>
                      </div>
                      <p className="text-gray-300 text-sm">{character.abilities.active.description}</p>
                    </div>
                  )}
                  
                  <div className="bg-gray-800 rounded-lg p-4">
                    <h4 className="text-sm font-medium text-green-400 mb-2">{character.abilities.passive.name}</h4>
                    <p className="text-gray-300 text-sm">{character.abilities.passive.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-700 text-center">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-gray-600 hover:bg-gray-500 text-white rounded-lg transition-colors duration-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CharacterModal;

