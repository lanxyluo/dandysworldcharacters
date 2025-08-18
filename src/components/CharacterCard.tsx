import React from 'react';
import { Character } from '../types/character';

interface CharacterCardProps {
  character: Character;
  onClick: (character: Character) => void;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character, onClick }) => {
  const renderStatBar = (value: number, max: number = 5) => {
    const percentage = (value / max) * 100;
    return (
      <div className="flex items-center gap-1">
        <div className="flex-1 bg-gray-700 rounded-full h-1.5">
          <div
            className="bg-gradient-to-r from-blue-500 to-purple-500 h-1.5 rounded-full transition-all duration-300"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    );
  };

  const getBorderStyle = () => {
    if (character.type === 'main') {
      return 'border-2 border-transparent bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 via-purple-500 to-pink-500 bg-clip-border';
    }
    return 'border-2 border-gray-600';
  };

  const getRarityColor = () => {
    if (character.rarity === 'legendary') {
      return 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black';
    }
    return 'bg-gray-600 text-white';
  };

  const getRarityText = () => {
    if (character.rarity === 'legendary') {
      return 'LEGENDARY';
    }
    return 'COMMON';
  };

  return (
    <div
      className={`
        relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300 
        hover:scale-105 hover:shadow-2xl bg-card-bg
        ${getBorderStyle()}
      `}
      onClick={() => onClick(character)}
    >
      {/* Rarity Badge */}
      <div className="absolute top-2 right-2 z-10">
        <span
          className={`px-2 py-1 text-xs font-bold rounded-full ${getRarityColor()}`}
        >
          {getRarityText()}
        </span>
      </div>

      {/* Avatar */}
      <div className="p-4 flex justify-center">
        <img
          src={character.image}
          alt={character.name}
          className="w-24 h-24 rounded-full object-cover border-4 border-gray-700"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = `https://via.placeholder.com/150x150/4a5568/ffffff?text=${character.name.charAt(0)}`;
          }}
        />
      </div>

      {/* Character Info */}
      <div className="p-4 pt-0">
        <h3 className="text-xl font-bold text-center mb-1 text-white">
          {character.name}
        </h3>
        
        <p className="text-xs text-gray-400 text-center mb-3">
          {character.fullName}
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-2 mb-3">
          <div className="text-center">
            <div className="text-xs text-gray-400 mb-1">Hearts</div>
            <div className="text-sm font-semibold text-red-400">{character.stats.hearts}</div>
          </div>
          <div className="text-center">
            <div className="text-xs text-gray-400 mb-1">Stealth</div>
            <div className="text-sm font-semibold text-blue-400">{character.stats.stealth}</div>
          </div>
          <div className="text-center">
            <div className="text-xs text-gray-400 mb-1">Speed</div>
            <div className="text-sm font-semibold text-green-400">{character.stats.movementSpeed}</div>
          </div>
          <div className="text-center">
            <div className="text-xs text-gray-400 mb-1">Stamina</div>
            <div className="text-sm font-semibold text-yellow-400">{character.stats.stamina}</div>
          </div>
        </div>

        {/* Description */}
        <p className="text-xs text-gray-300 text-center line-clamp-2 leading-relaxed">
          {character.description}
        </p>

        {/* Ichor Cost */}
        {character.requirements.ichor > 0 && (
          <div className="mt-3 text-center">
            <span className="text-xs text-gray-400">Cost: </span>
            <span className="text-sm font-bold text-purple-400">{character.requirements.ichor.toLocaleString()} Ichor</span>
          </div>
        )}
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 rounded-lg" />
    </div>
  );
};

export default CharacterCard;
