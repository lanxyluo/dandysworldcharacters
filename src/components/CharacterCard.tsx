import React from 'react';
import { Character } from '../types/character';

interface CharacterCardProps {
  character: Character;
  onClick: () => void;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character, onClick }) => {
  const isMain = character.type === 'main';
  const cardClass = isMain ? 'rainbow-border' : 'bg-bg-card border border-gray-600';
  
  const formatStatName = (stat: string) => {
    return stat.replace(/([A-Z])/g, ' $1').trim();
  };

  return (
    <div 
      className={`${cardClass} rounded-xl card-hover cursor-pointer`}
      onClick={onClick}
    >
      {isMain ? (
        <div className="rainbow-border-content p-6">
          <div className="text-center">
            <div className="text-6xl mb-4 animate-float">{character.image}</div>
            <h3 className="text-xl font-bold mb-2">{character.name}</h3>
            <p className="text-sm text-text-secondary mb-4 capitalize">{character.type} • {character.rarity}</p>
            
            <div className="space-y-2 mb-4">
              {Object.entries(character.stats).map(([stat, value]) => (
                <div key={stat} className="flex items-center justify-between text-sm">
                  <span className="capitalize">{formatStatName(stat)}</span>
                  <div className="flex items-center space-x-2">
                    <div className="stat-bar w-16">
                      <div className="stat-fill" style={{ width: `${((value as number) / 5) * 100}%` }}></div>
                    </div>
                    <span className="text-accent-main font-semibold w-6">{value as number}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="w-full bg-accent-main hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors">
              View Details
            </button>
          </div>
        </div>
      ) : (
        <div className="p-6">
          <div className="text-center">
            <div className="text-6xl mb-4 animate-float">{character.image}</div>
            <h3 className="text-xl font-bold mb-2">{character.name}</h3>
            <p className="text-sm text-text-secondary mb-4 capitalize">{character.type} • {character.rarity}</p>
            
            <div className="space-y-2 mb-4">
              {Object.entries(character.stats).map(([stat, value]) => (
                <div key={stat} className="flex items-center justify-between text-sm">
                  <span className="capitalize">{formatStatName(stat)}</span>
                  <div className="flex items-center space-x-2">
                    <div className="stat-bar w-16">
                      <div className="stat-fill" style={{ width: `${((value as number) / 5) * 100}%` }}></div>
                    </div>
                    <span className="text-accent-main font-semibold w-6">{value as number}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="w-full bg-accent-main hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors">
              View Details
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CharacterCard;
