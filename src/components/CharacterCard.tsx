import React from 'react';
import { Character } from '../types/character';

interface CharacterCardProps {
  character: Character;
  onClick: () => void;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-bg-card border border-gray-700 rounded-xl p-6 text-left hover:border-accent-main transition-colors"
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold">{character.name}</h3>
          <p className="text-sm text-text-secondary capitalize">
            {character.type} • {character.rarity}
          </p>
        </div>
        <div className="text-5xl" aria-hidden>{character.image || '🎴'}</div>
      </div>

      <p className="text-sm text-text-secondary mb-4">
        {character.overview || 'Guide content is being translated. Detailed notes will return soon.'}
      </p>

      {character.attributes && (
        <div className="grid grid-cols-2 gap-3 text-xs text-text-secondary">
          {Object.entries(character.attributes).map(([stat, value]) => (
            <div key={stat} className="flex justify-between bg-bg-secondary border border-gray-700 rounded-lg px-3 py-2">
              <span className="capitalize">{stat.replace(/([A-Z])/g, ' $1')}</span>
              <span className="text-white font-semibold">{value}</span>
            </div>
          ))}
        </div>
      )}
    </button>
  );
};

export default CharacterCard;
