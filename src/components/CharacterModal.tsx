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

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75"
      onClick={onClose}
    >
      <div 
        className="glass-effect rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">{character.fullName}</h2>
              <p className="text-text-secondary capitalize">{character.type} Character • {character.rarity}</p>
            </div>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
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
              {character.abilities.active && (
                <div className="bg-bg-secondary rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3 text-rainbow-3">Active Ability</h3>
                  <h4 className="font-semibold mb-2">{character.abilities.active.name}</h4>
                  <p className="text-text-secondary mb-3">{character.abilities.active.description}</p>
                  <div className="flex items-center space-x-2 text-sm">
                    <span className="text-accent-main">⏱️ Cooldown:</span>
                    <span>{character.abilities.active.cooldown}s</span>
                  </div>
                </div>
              )}
              
              {character.abilities.passive && (
                <div className="bg-bg-secondary rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3 text-rainbow-4">Passive Ability</h3>
                  <h4 className="font-semibold mb-2">{character.abilities.passive.name}</h4>
                  <p className="text-text-secondary">{character.abilities.passive.description}</p>
                </div>
              )}
              
              <div className="bg-bg-secondary rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-rainbow-2">Unlock Requirements</h3>
                <div className="space-y-2">
                  {character.requirements.ichor && (
                    <div className="flex items-center space-x-2">
                      <span className="text-accent-main">💰</span>
                      <span>{character.requirements.ichor.toLocaleString()} Ichor</span>
                    </div>
                  )}
                  {character.requirements.ornaments && (
                    <div className="flex items-center space-x-2">
                      <span className="text-rainbow-2">🎄</span>
                      <span>{character.requirements.ornaments.toLocaleString()} Ornaments</span>
                    </div>
                  )}
                  {character.requirements.research && (
                    <div className="flex items-center space-x-2">
                      <span className="text-rainbow-3">🔬</span>
                      <span>{character.requirements.research}</span>
                    </div>
                  )}
                  {character.requirements.mastery && (
                    <div className="flex items-center space-x-2">
                      <span className="text-rainbow-4">⭐</span>
                      <span>{character.requirements.mastery}</span>
                    </div>
                  )}
                  {character.requirements.other && character.requirements.other.map((req: string, index: number) => (
                    <div key={index} className="flex items-center space-x-2">
                      <span className="text-rainbow-5">❗</span>
                      <span>{req}</span>
                    </div>
                  ))}
                  {character.requirements.note && (
                    <div className="flex items-center space-x-2">
                      <span className="text-rainbow-1">ℹ️</span>
                      <span>{character.requirements.note}</span>
                    </div>
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

