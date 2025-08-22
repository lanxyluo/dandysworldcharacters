import React from 'react';
import { Character } from '../types/character';

interface CharacterModalProps {
  character: Character | null;
  isOpen: boolean;
  onClose: () => void;
}

const CharacterModal: React.FC<CharacterModalProps> = ({ character, isOpen, onClose }) => {
  if (!character || !isOpen) return null;

  const formatStatName = (stat: string) => {
    return stat.replace(/([A-Z])/g, ' $1').trim();
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'main':
        return 'text-rainbow-3';
      case 'lethal':
        return 'text-red-400';
      default:
        return 'text-text-secondary';
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
      <div className="bg-bg-card border border-gray-600 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">{character.name}</h2>
              <p className={`text-lg ${getTypeColor(character.type)} capitalize`}>
                {character.type} • {character.rarity}
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white text-2xl font-bold"
            >
              ×
            </button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="text-center mb-6">
                <div className="text-8xl mb-4">{character.image}</div>
                <p className="text-text-secondary">{character.description}</p>
              </div>
              
              <div className="bg-bg-secondary rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Stats</h3>
                <div className="space-y-3">
                  {Object.entries(character.stats).map(([stat, value]) => (
                    <div key={stat} className="flex items-center justify-between">
                      <span className="capitalize">{formatStatName(stat)}</span>
                      <div className="flex items-center space-x-3">
                        <div className="stat-bar w-24">
                          <div className="stat-fill" style={{ width: `${((value as number) / 5) * 100}%` }}></div>
                        </div>
                        <span className="text-accent-main font-bold">{value as number}/5</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-bg-secondary rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Abilities</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-accent-main mb-2">
                      {character.abilities.active.name} (Active)
                    </h4>
                    <p className="text-text-secondary mb-2">{character.abilities.active.description}</p>
                    <p className="text-sm text-gray-400">Cooldown: {character.abilities.active.cooldown}s</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-accent-main mb-2">
                      {character.abilities.passive.name} (Passive)
                    </h4>
                    <p className="text-text-secondary">{character.abilities.passive.description}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-bg-secondary rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Requirements</h3>
                <div className="space-y-2">
                  {character.requirements.ichor && (
                    <p><span className="font-semibold">Ichor:</span> {character.requirements.ichor}</p>
                  )}
                  {character.requirements.ornaments && (
                    <p><span className="font-semibold">Ornaments:</span> {character.requirements.ornaments}</p>
                  )}
                  {character.requirements.baskets && (
                    <p><span className="font-semibold">Baskets:</span> {character.requirements.baskets}</p>
                  )}
                  {character.requirements.research && (
                    <p><span className="font-semibold">Research:</span> {character.requirements.research}</p>
                  )}
                  {character.requirements.mastery && (
                    <p><span className="font-semibold">Mastery:</span> {character.requirements.mastery}</p>
                  )}
                  {character.requirements.other && character.requirements.other.map((req, index) => (
                    <p key={index}><span className="font-semibold">Other:</span> {req}</p>
                  ))}
                  {character.requirements.note && (
                    <p className="text-yellow-400 italic">{character.requirements.note}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterModal;

