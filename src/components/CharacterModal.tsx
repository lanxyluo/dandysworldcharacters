import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Character } from '../types/character';
import { Link } from 'react-router-dom'; // Added Link import
import ScrollToTopLink from './ScrollToTopLink';

interface CharacterModalProps {
  character: Character | null;
  isOpen: boolean;
  onClose: () => void;
}

// 动态生成角色页面标题的函数
function generateCharacterTitle(characterName: string, characterType: string): string {
  // 根据角色类型和重要性生成不同的标题
  if (characterType === 'main') {
    return `${characterName} Dandys World Guide | Main Character Stats & Abilities`;
  } else if (characterType === 'lethal') {
    return `${characterName} Dandys World Guide | Character Stats & Build Tips`;
  } else {
    return `${characterName} Dandys World Guide | Character Abilities & Strategy`;
  }
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
    <>
      <Helmet>
        <title>{generateCharacterTitle(character.name, character.type)}</title>
        <meta name="description" content={`Complete guide for ${character.name} in Dandy's World. Stats, abilities, requirements, and unlock strategy.`} />
        <meta name="keywords" content={`dandys world, ${character.name.toLowerCase()}, character guide, stats, abilities, unlock guide, ${character.type} character`} />
        <meta property="og:title" content={generateCharacterTitle(character.name, character.type)} />
        <meta property="og:description" content={`Complete guide for ${character.name} in Dandy's World. Stats, abilities, requirements, and unlock strategy.`} />
        <link rel="canonical" href={`https://www.dandysworldcharacters.com/characters/${character.id}`} />
      </Helmet>
      
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
            
            {/* 相关工具推荐区域 - 内链建设 */}
            <div className="mt-8 pt-6 border-t border-gray-600">
              <h3 className="text-xl font-bold mb-4 text-center">Related Tools & Resources</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <ScrollToTopLink 
                  to="/calculator" 
                  className="group bg-bg-secondary hover:bg-accent-main hover:bg-opacity-20 rounded-lg p-4 text-center transition-all duration-300 border border-gray-600 hover:border-accent-main hover:shadow-lg hover:shadow-accent-main/20"
                >
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">🧮</div>
                  <h4 className="font-semibold mb-1">Calculate Resources</h4>
                  <p className="text-sm text-text-secondary">Plan your unlock strategy</p>
                </ScrollToTopLink>
                
                <ScrollToTopLink 
                  to="/compare" 
                  className="group bg-bg-secondary hover:bg-accent-main hover:bg-opacity-20 rounded-lg p-4 text-center transition-all duration-300 border border-gray-600 hover:border-accent-main hover:shadow-lg hover:shadow-accent-main/20"
                >
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">⚖️</div>
                  <h4 className="font-semibold mb-1">Compare Characters</h4>
                  <p className="text-sm text-text-secondary">Find the best team composition</p>
                </ScrollToTopLink>
                
                <ScrollToTopLink 
                  to="/guides/game-mechanics" 
                  className="group bg-bg-secondary hover:bg-accent-main hover:bg-opacity-20 rounded-lg p-4 text-center transition-all duration-300 border border-gray-600 hover:border-accent-main hover:shadow-lg hover:shadow-accent-main/20"
                >
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">📚</div>
                  <h4 className="font-semibold mb-1">Game Strategies</h4>
                  <p className="text-sm text-text-secondary">Master advanced techniques</p>
                </ScrollToTopLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CharacterModal;

