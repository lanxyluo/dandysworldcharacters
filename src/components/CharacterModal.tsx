import React, { useState } from 'react';
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

// 可折叠区域组件
interface CollapsibleSectionProps {
  title: string;
  icon: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({ 
  title, 
  icon, 
  children, 
  defaultExpanded = false 
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div className="bg-bg-secondary rounded-lg border border-gray-600">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-4 flex items-center justify-between hover:bg-gray-700 transition-colors rounded-lg"
      >
        <div className="flex items-center space-x-3">
          <span className="text-2xl">{icon}</span>
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <span className={`text-xl transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      {isExpanded && (
        <div className="px-4 pb-4">
          {children}
        </div>
      )}
    </div>
  );
};

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
        <div className="bg-bg-card border border-gray-600 rounded-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
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
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <div className="text-center mb-6">
                  <div className="text-8xl mb-4">{character.image}</div>
                  <p className="text-text-secondary">{character.description}</p>
                </div>
                
                <div className="bg-bg-secondary rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4">Stats</h3>
                  <div className="space-y-3">
                    {(() => {
                      // 获取角色属性数据，兼容stats和attributes两种格式
                      const characterStats = character.attributes || (character as any).stats || {};
                      return Object.entries(characterStats).map(([stat, value]) => (
                        <div key={stat} className="flex items-center justify-between">
                          <span className="capitalize">{formatStatName(stat)}</span>
                          <div className="flex items-center space-x-3">
                            <div className="stat-bar w-24">
                              <div className="stat-fill" style={{ width: `${((value as number) / 5) * 100}%` }}></div>
                            </div>
                            <span className="text-accent-main font-bold">{value as number}/5</span>
                          </div>
                        </div>
                      ));
                    })()}
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

            {/* 详细说明区域 - 可折叠设计 */}
            {character.detailedGuide && (
              <div className="space-y-4 mb-8">
                <h3 className="text-2xl font-bold text-center mb-6">Detailed Character Guide</h3>
                
                {/* 能力机制详解 */}
                <CollapsibleSection title="Ability Mechanics" icon="🔍" defaultExpanded={true}>
                  <div className="space-y-6">
                    {/* 主动能力详解 */}
                    <div className="bg-bg-card rounded-lg p-4 border border-gray-600">
                      <h4 className="text-lg font-semibold text-accent-main mb-3">
                        {character.abilities.active.name} - Detailed Breakdown
                      </h4>
                      <div className="space-y-3 text-sm">
                        <div>
                          <p className="font-semibold text-white">What it does:</p>
                          <p className="text-text-secondary">{character.detailedGuide.abilityMechanics.active.detailedDescription}</p>
                        </div>
                        <div>
                          <p className="font-semibold text-white">How it works:</p>
                          <p className="text-text-secondary">{character.detailedGuide.abilityMechanics.active.howItWorks}</p>
                        </div>
                        <div>
                          <p className="font-semibold text-white">Best usage:</p>
                          <p className="text-text-secondary">{character.detailedGuide.abilityMechanics.active.bestUsage}</p>
                        </div>
                        <div>
                          <p className="font-semibold text-white">Visual effects:</p>
                          <p className="text-text-secondary">{character.detailedGuide.abilityMechanics.active.visualEffects}</p>
                        </div>
                      </div>
                    </div>

                    {/* 被动能力详解 */}
                    <div className="bg-bg-card rounded-lg p-4 border border-gray-600">
                      <h4 className="text-lg font-semibold text-accent-main mb-3">
                        {character.abilities.passive.name} - Strategic Value
                      </h4>
                      <div className="space-y-3 text-sm">
                        <div>
                          <p className="font-semibold text-white">What it does:</p>
                          <p className="text-text-secondary">{character.detailedGuide.abilityMechanics.passive.detailedDescription}</p>
                        </div>
                        <div>
                          <p className="font-semibold text-white">How it works:</p>
                          <p className="text-text-secondary">{character.detailedGuide.abilityMechanics.passive.howItWorks}</p>
                        </div>
                        <div>
                          <p className="font-semibold text-white">Strategic value:</p>
                          <p className="text-text-secondary">{character.detailedGuide.abilityMechanics.passive.strategicValue}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CollapsibleSection>

                {/* 策略指南 */}
                <CollapsibleSection title="Strategy Guide" icon="⚔️" defaultExpanded={true}>
                  <div className="space-y-6">
                    {/* 使用策略 */}
                    <div className="bg-bg-card rounded-lg p-4 border border-gray-600">
                      <h4 className="text-lg font-semibold text-green-400 mb-3">Playing As {character.name}</h4>
                      <div className="space-y-3 text-sm">
                        <div>
                          <p className="font-semibold text-white">Overview:</p>
                          <p className="text-text-secondary">{character.detailedGuide.strategies.playingAs.overview}</p>
                        </div>
                        <div>
                          <p className="font-semibold text-white">Key Tips:</p>
                          <ul className="list-disc list-inside text-text-secondary space-y-1">
                            {character.detailedGuide.strategies.playingAs.tips.map((tip, index) => (
                              <li key={index}>{tip}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="font-semibold text-white">Common Mistakes:</p>
                          <ul className="list-disc list-inside text-text-secondary space-y-1">
                            {character.detailedGuide.strategies.playingAs.commonMistakes.map((mistake, index) => (
                              <li key={index}>{mistake}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="font-semibold text-white">Advanced Techniques:</p>
                          <ul className="list-disc list-inside text-text-secondary space-y-1">
                            {character.detailedGuide.strategies.playingAs.advancedTechniques.map((technique, index) => (
                              <li key={index}>{technique}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* 对抗策略 */}
                    <div className="bg-bg-card rounded-lg p-4 border border-gray-600">
                      <h4 className="text-lg font-semibold text-red-400 mb-3">Playing Against {character.name}</h4>
                      <div className="space-y-3 text-sm">
                        <div>
                          <p className="font-semibold text-white">Overview:</p>
                          <p className="text-text-secondary">{character.detailedGuide.strategies.playingAgainst.overview}</p>
                        </div>
                        <div>
                          <p className="font-semibold text-white">Counter Strategies:</p>
                          <ul className="list-disc list-inside text-text-secondary space-y-1">
                            {character.detailedGuide.strategies.playingAgainst.counterStrategies.map((strategy, index) => (
                              <li key={index}>{strategy}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="font-semibold text-white">What to Avoid:</p>
                          <ul className="list-disc list-inside text-text-secondary space-y-1">
                            {character.detailedGuide.strategies.playingAgainst.whatToAvoid.map((avoid, index) => (
                              <li key={index}>{avoid}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="font-semibold text-white">Team Composition:</p>
                          <ul className="list-disc list-inside text-text-secondary space-y-1">
                            {character.detailedGuide.strategies.playingAgainst.teamComposition.map((composition, index) => (
                              <li key={index}>{composition}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CollapsibleSection>

                {/* 互动指南 */}
                <CollapsibleSection title="Character Interactions" icon="🤝" defaultExpanded={true}>
                  <div className="space-y-6">
                    {/* 协同效应 */}
                    <div className="bg-bg-card rounded-lg p-4 border border-gray-600">
                      <h4 className="text-lg font-semibold text-blue-400 mb-3">Team Synergies</h4>
                      <div className="space-y-3 text-sm">
                        <p className="text-text-secondary">{character.detailedGuide.interactions.synergies.description}</p>
                        <div className="space-y-3">
                          {character.detailedGuide.interactions.synergies.bestPartners.map((partner, index) => (
                            <div key={index} className="bg-bg-secondary rounded-lg p-3">
                              <p className="font-semibold text-white">{partner.character}</p>
                              <p className="text-text-secondary text-xs mb-2">{partner.reason}</p>
                              <p className="text-accent-main text-xs">{partner.combo}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* 克制关系 */}
                    <div className="bg-bg-card rounded-lg p-4 border border-gray-600">
                      <h4 className="text-lg font-semibold text-purple-400 mb-3">Counter Relationships</h4>
                      <div className="space-y-4">
                        <div>
                          <p className="font-semibold text-green-400 mb-2">Strong Against:</p>
                          <div className="space-y-2">
                            {character.detailedGuide.interactions.counters.strongAgainst.map((counter, index) => (
                              <div key={index} className="bg-bg-secondary rounded-lg p-2">
                                <p className="font-semibold text-white">{counter.character}</p>
                                <p className="text-text-secondary text-xs">{counter.reason}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="font-semibold text-red-400 mb-2">Weak Against:</p>
                          <div className="space-y-2">
                            {character.detailedGuide.interactions.counters.weakAgainst.map((counter, index) => (
                              <div key={index} className="bg-bg-secondary rounded-lg p-2">
                                <p className="font-semibold text-white">{counter.character}</p>
                                <p className="text-text-secondary text-xs">{counter.reason}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CollapsibleSection>

                {/* 场景适用性 */}
                <CollapsibleSection title="Scenario Analysis" icon="🗺️" defaultExpanded={true}>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-bg-card rounded-lg p-4 border border-gray-600">
                        <h4 className="text-lg font-semibold text-green-400 mb-3">Best Situations</h4>
                        <ul className="list-disc list-inside text-text-secondary text-sm space-y-1">
                          {character.detailedGuide.scenarios.bestSituations.map((situation, index) => (
                            <li key={index}>{situation}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-bg-card rounded-lg p-4 border border-gray-600">
                        <h4 className="text-lg font-semibold text-red-400 mb-3">Challenging Situations</h4>
                        <ul className="list-disc list-inside text-text-secondary text-sm space-y-1">
                          {character.detailedGuide.scenarios.challengingSituations.map((situation, index) => (
                            <li key={index}>{situation}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="bg-bg-card rounded-lg p-4 border border-gray-600">
                      <h4 className="text-lg font-semibold text-blue-400 mb-3">Team Roles</h4>
                      <ul className="list-disc list-inside text-text-secondary text-sm space-y-1">
                        {character.detailedGuide.scenarios.teamRoles.map((role, index) => (
                          <li key={index}>{role}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CollapsibleSection>
              </div>
            )}
            
            {/* 相关工具推荐区域 - 内链建设 */}
            <div className="mt-8 pt-6 border-t border-gray-600">
              <h3 className="text-xl font-bold mb-4 text-center">Related Tools & Resources</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <ScrollToTopLink 
                  to="/progress-tracker" 
                  className="group bg-bg-secondary hover:bg-accent-main hover:bg-opacity-20 rounded-lg p-4 text-center transition-all duration-300 border border-gray-600 hover:border-accent-main hover:shadow-lg hover:shadow-accent-main/20"
                >
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">📈</div>
                  <h4 className="font-semibold mb-1">Track Research</h4>
                  <p className="text-sm text-text-secondary">规划解锁路线与研究节奏</p>
                </ScrollToTopLink>
                
                <ScrollToTopLink 
                  to="/character-recommender" 
                  className="group bg-bg-secondary hover:bg-accent-main hover:bg-opacity-20 rounded-lg p-4 text-center transition-all duration-300 border border-gray-600 hover:border-accent-main hover:shadow-lg hover:shadow-accent-main/20"
                >
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">🎭</div>
                  <h4 className="font-semibold mb-1">Character Recommender</h4>
                  <p className="text-sm text-text-secondary">快速筛选最佳角色组合</p>
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

