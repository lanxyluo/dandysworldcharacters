import React, { useState, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { Character } from '../types/character';
import { characters } from '../data/characters/index';
import { useNavigate, useParams } from 'react-router-dom';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import SearchAndFilter from '../components/SearchAndFilter';

const CharactersPage: React.FC = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentFilter, setCurrentFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  
  const navigate = useNavigate();
  const { characterId } = useParams();

  // 重置所有筛选状态到默认值
  const resetFilters = useCallback(() => {
    setSearchTerm('');
    setCurrentFilter('all');
    setSortBy('name');
    setSortOrder('asc');
  }, []);

  // 当URL参数变化时，自动显示对应的角色详情
  useEffect(() => {
    if (characterId) {
      const character = characters.find(c => c.id === characterId);
      if (character) {
        setSelectedCharacter(character);
      }
    } else {
      setSelectedCharacter(null);
      // 当从详情页返回时，重置筛选状态
      resetFilters();
    }
  }, [characterId, resetFilters]);

  // 处理角色选择
  const handleCharacterSelect = (character: Character) => {
    setSelectedCharacter(character);
    // 更新URL，但不替换历史记录
    navigate(`/characters/${character.id}`, { replace: false });
  };

  // 处理返回列表
  const handleBackToList = () => {
    setSelectedCharacter(null);
    navigate('/characters');
  };

  // 计算角色统计
  const characterStats = {
    total: characters.length,
    main: characters.filter(c => c.type === 'main').length,
    event: characters.filter(c => c.type === 'event').length
  };

  // 过滤和排序角色
  const filteredAndSortedCharacters = characters
    .filter(character => {
      // 搜索筛选
      const matchesSearch = character.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           character.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      // 快速筛选（All/Main/Regular/Event）
      const matchesQuickFilter = currentFilter === 'all' || character.type === currentFilter;
      
      return matchesSearch && matchesQuickFilter;
    })
    .sort((a, b) => {
      let comparison = 0;
      switch (sortBy) {
        case 'name':
          comparison = a.name.localeCompare(b.name);
          break;
        case 'type':
          comparison = a.type.localeCompare(b.type);
          break;
        case 'rarity':
          comparison = a.rarity.localeCompare(b.rarity);
          break;
        case 'skillCheck':
          comparison = a.stats.skillCheck - b.stats.skillCheck;
          break;
        case 'stealth':
          comparison = a.stats.stealth - b.stats.stealth;
          break;
        case 'speed':
          comparison = a.stats.speed - b.stats.speed;
          break;
        case 'health':
          comparison = a.stats.health - b.stats.health;
          break;
        case 'damage':
          comparison = a.stats.damage - b.stats.damage;
          break;
        default:
          comparison = 0;
      }
      return sortOrder === 'asc' ? comparison : -comparison;
    });

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

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common':
        return 'text-gray-400';
      case 'uncommon':
        return 'text-green-400';
      case 'rare':
        return 'text-blue-400';
      case 'legendary':
        return 'text-purple-400';
      case 'twisted':
        return 'text-red-500';
      default:
        return 'text-text-secondary';
    }
  };

  return (
    <>
      <Helmet>
        <title>Dandys World Characters | Complete Character Guide & Stats</title>
        <meta name="description" content="Explore all characters in Dandy's World. View stats, abilities, requirements, and unlock strategies for every character type." />
        <meta name="keywords" content="dandys world, characters, stats, abilities, unlock guide, character guide" />
        <meta property="og:title" content="Dandys World Characters | Complete Character Guide & Stats" />
        <meta property="og:description" content="Explore all characters in Dandy's World. View stats, abilities, requirements, and unlock strategies for every character type." />
        <link rel="canonical" href="https://www.dandysworldcharacters.com/characters" />
      </Helmet>

      <Navigation />
      <div className="min-h-screen bg-bg-primary pt-16">
        {/* 如果没有选中角色，显示完整的角色页面 */}
        {!selectedCharacter && (
          <>
            <HeroSection 
              totalCharacters={characterStats.total}
              mainCharacters={characterStats.main}
              eventCharacters={characterStats.event}
            />
            <SearchAndFilter
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              currentFilter={currentFilter}
              onFilterChange={setCurrentFilter}
              sortBy={sortBy}
              onSortChange={setSortBy}
              sortOrder={sortOrder}
              onSortOrderChange={setSortOrder}
              onResetFilters={resetFilters}
            />
          </>
        )}
        
        <div className="container mx-auto px-4 py-8">
          {/* 页面标题 - 只在没有选中角色时显示 */}
          {!selectedCharacter && (
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-4">Dandy's World Characters</h1>
              <p className="text-xl text-text-secondary">
                Explore all characters, their abilities, and unlock requirements
              </p>
            </div>
          )}

          {/* 条件渲染：角色详情或角色列表 */}
          {selectedCharacter ? (
            // 角色详情页面
            <div className="bg-bg-card border border-gray-600 rounded-lg p-8">
              {/* 返回按钮和导航提示 */}
              <div className="mb-6 flex justify-between items-center">
                <button
                  onClick={handleBackToList}
                  className="px-4 py-2 bg-accent-main hover:bg-accent-main/80 text-white rounded-md transition-colors flex items-center space-x-2"
                >
                  <span>←</span>
                  <span>Back to Characters</span>
                </button>
                
                {/* 导航提示 */}
                <div className="text-sm text-text-secondary bg-bg-primary px-3 py-2 rounded-md border border-gray-600">
                  <span className="mr-2">📖</span>
                  Scroll down for detailed strategy guide
                </div>
              </div>

              {/* 角色详情内容 */}
              <div className="text-center mb-8">
                <div className="text-8xl mb-6">{selectedCharacter.image}</div>
                <h2 className="text-3xl font-bold mb-4">{selectedCharacter.name}</h2>
                <div className="flex justify-center space-x-4 text-lg mb-4">
                  <span className={`${getTypeColor(selectedCharacter.type)} capitalize`}>
                    {selectedCharacter.type}
                  </span>
                  <span className="text-gray-400">•</span>
                  <span className={`${getRarityColor(selectedCharacter.rarity)} capitalize`}>
                    {selectedCharacter.rarity}
                  </span>
                </div>
                <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                  {selectedCharacter.description}
                </p>
              </div>

              {/* 统计信息 */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
                <div className="text-center p-4 bg-bg-secondary rounded-lg">
                  <div className="text-2xl font-bold text-accent-main">{selectedCharacter.stats.skillCheck}/5</div>
                  <div className="text-sm text-text-secondary">Skill Check</div>
                </div>
                <div className="text-center p-4 bg-bg-secondary rounded-lg">
                  <div className="text-2xl font-bold text-accent-main">{selectedCharacter.stats.stealth}/5</div>
                  <div className="text-sm text-text-secondary">Stealth</div>
                </div>
                <div className="text-center p-4 bg-bg-secondary rounded-lg">
                  <div className="text-2xl font-bold text-accent-main">{selectedCharacter.stats.speed}/5</div>
                  <div className="text-sm text-text-secondary">Speed</div>
                </div>
                <div className="text-center p-4 bg-bg-secondary rounded-lg">
                  <div className="text-2xl font-bold text-accent-main">{selectedCharacter.stats.health}/5</div>
                  <div className="text-sm text-text-secondary">Health</div>
                </div>
                <div className="text-center p-4 bg-bg-secondary rounded-lg">
                  <div className="text-2xl font-bold text-accent-main">{selectedCharacter.stats.damage}/5</div>
                  <div className="text-sm text-text-secondary">Damage</div>
                </div>
              </div>

              {/* 能力信息 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-bg-secondary p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-accent-main">Active Ability</h3>
                  <div className="text-2xl mb-4 text-accent-main">⚡</div>
                  <h4 className="text-lg font-semibold mb-2">{selectedCharacter.abilities.active.name}</h4>
                  <p className="text-text-secondary">{selectedCharacter.abilities.active.description}</p>
                  {selectedCharacter.abilities.active.cooldown && (
                    <div className="mt-3 text-sm text-text-secondary">
                      <span className="font-semibold">Cooldown:</span> {selectedCharacter.abilities.active.cooldown}s
                    </div>
                  )}
                </div>
                <div className="bg-bg-secondary p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-accent-main">Passive Ability</h3>
                  <div className="text-2xl mb-4 text-accent-main">🛡️</div>
                  <h4 className="text-lg font-semibold mb-2">{selectedCharacter.abilities.passive.name}</h4>
                  <p className="text-text-secondary">{selectedCharacter.abilities.passive.description}</p>
                </div>
              </div>

              {/* 能力机制详解 */}
              {selectedCharacter.detailedGuide?.abilityMechanics && (
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-6 text-accent-main text-center">Ability Mechanics</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* 主动能力详解 */}
                    <div className="bg-bg-secondary p-6 rounded-lg">
                      <h4 className="text-xl font-bold mb-4 text-accent-main">Active Ability Deep Dive</h4>
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-semibold text-white mb-2">Detailed Description</h5>
                          <p className="text-text-secondary text-sm">{selectedCharacter.detailedGuide.abilityMechanics.active.detailedDescription}</p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-white mb-2">How It Works</h5>
                          <p className="text-text-secondary text-sm">{selectedCharacter.detailedGuide.abilityMechanics.active.howItWorks}</p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-white mb-2">Best Usage</h5>
                          <p className="text-text-secondary text-sm">{selectedCharacter.detailedGuide.abilityMechanics.active.bestUsage}</p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-white mb-2">Visual Effects</h5>
                          <p className="text-text-secondary text-sm">{selectedCharacter.detailedGuide.abilityMechanics.active.visualEffects}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* 被动能力详解 */}
                    <div className="bg-bg-secondary p-6 rounded-lg">
                      <h4 className="text-xl font-bold mb-4 text-accent-main">Passive Ability Deep Dive</h4>
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-semibold text-white mb-2">Detailed Description</h5>
                          <p className="text-text-secondary text-sm">{selectedCharacter.detailedGuide.abilityMechanics.passive.detailedDescription}</p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-white mb-2">How It Works</h5>
                          <p className="text-text-secondary text-sm">{selectedCharacter.detailedGuide.abilityMechanics.passive.howItWorks}</p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-white mb-2">Strategic Value</h5>
                          <p className="text-text-secondary text-sm">{selectedCharacter.detailedGuide.abilityMechanics.passive.strategicValue}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 使用策略指南 */}
              {selectedCharacter.detailedGuide?.strategies && (
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-6 text-accent-main text-center">Strategy Guide</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* 使用该角色的策略 */}
                    <div className="bg-bg-secondary p-6 rounded-lg">
                      <h4 className="text-xl font-bold mb-4 text-accent-main">Playing As {selectedCharacter.name}</h4>
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-semibold text-white mb-2">Overview</h5>
                          <p className="text-text-secondary text-sm">{selectedCharacter.detailedGuide.strategies.playingAs.overview}</p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-white mb-2">Tips</h5>
                          <ul className="list-disc list-inside space-y-1 text-sm text-text-secondary">
                            {selectedCharacter.detailedGuide.strategies.playingAs.tips.map((tip, index) => (
                              <li key={index}>{tip}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-white mb-2">Common Mistakes</h5>
                          <ul className="list-disc list-inside space-y-1 text-sm text-text-secondary">
                            {selectedCharacter.detailedGuide.strategies.playingAs.commonMistakes.map((mistake, index) => (
                              <li key={index}>{mistake}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-white mb-2">Advanced Techniques</h5>
                          <ul className="list-disc list-inside space-y-1 text-sm text-text-secondary">
                            {selectedCharacter.detailedGuide.strategies.playingAs.advancedTechniques.map((technique, index) => (
                              <li key={index}>{technique}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* 对抗该角色的策略 */}
                    <div className="bg-bg-secondary p-6 rounded-lg">
                      <h4 className="text-xl font-bold mb-4 text-accent-main">Playing Against {selectedCharacter.name}</h4>
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-semibold text-white mb-2">Overview</h5>
                          <p className="text-text-secondary text-sm">{selectedCharacter.detailedGuide.strategies.playingAgainst.overview}</p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-white mb-2">Counter Strategies</h5>
                          <ul className="list-disc list-inside space-y-1 text-sm text-text-secondary">
                            {selectedCharacter.detailedGuide.strategies.playingAgainst.counterStrategies.map((strategy, index) => (
                              <li key={index}>{strategy}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-white mb-2">What To Avoid</h5>
                          <ul className="list-disc list-inside space-y-1 text-sm text-text-secondary">
                            {selectedCharacter.detailedGuide.strategies.playingAgainst.whatToAvoid.map((avoid, index) => (
                              <li key={index}>{avoid}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-white mb-2">Team Composition</h5>
                          <ul className="list-disc list-inside space-y-1 text-sm text-text-secondary">
                            {selectedCharacter.detailedGuide.strategies.playingAgainst.teamComposition.map((composition, index) => (
                              <li key={index}>{composition}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 团队配合分析 */}
              {selectedCharacter.detailedGuide?.interactions && (
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-6 text-accent-main text-center">Team Interactions</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* 协同效果 */}
                    <div className="bg-bg-secondary p-6 rounded-lg">
                      <h4 className="text-xl font-bold mb-4 text-accent-main">Synergies</h4>
                      <div className="space-y-4">
                        <p className="text-text-secondary text-sm mb-4">{selectedCharacter.detailedGuide.interactions.synergies.description}</p>
                        <div className="space-y-3">
                          {selectedCharacter.detailedGuide.interactions.synergies.bestPartners.map((partner, index) => (
                            <div key={index} className="border-l-4 border-accent-main pl-4">
                              <h5 className="font-semibold text-white mb-1">{partner.character}</h5>
                              <p className="text-text-secondary text-sm mb-2">{partner.reason}</p>
                              <p className="text-accent-main text-sm font-medium">{partner.combo}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* 克制关系 */}
                    <div className="bg-bg-secondary p-6 rounded-lg">
                      <h4 className="text-xl font-bold mb-4 text-accent-main">Counters</h4>
                      <div className="space-y-4">
                        <p className="text-text-secondary text-sm mb-4">{selectedCharacter.detailedGuide.interactions.counters.description}</p>
                        
                        <div>
                          <h5 className="font-semibold text-green-400 mb-2">Strong Against</h5>
                          <div className="space-y-2">
                            {selectedCharacter.detailedGuide.interactions.counters.strongAgainst.map((counter, index) => (
                              <div key={index} className="flex justify-between items-start">
                                <span className="text-white font-medium">{counter.character}</span>
                                <span className="text-text-secondary text-sm text-right">{counter.reason}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h5 className="font-semibold text-red-400 mb-2">Weak Against</h5>
                          <div className="space-y-2">
                            {selectedCharacter.detailedGuide.interactions.counters.weakAgainst.map((counter, index) => (
                              <div key={index} className="flex justify-between items-start">
                                <span className="text-white font-medium">{counter.character}</span>
                                <span className="text-text-secondary text-sm text-right">{counter.reason}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 场景分析 */}
              {selectedCharacter.detailedGuide?.scenarios && (
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-6 text-accent-main text-center">Scenario Analysis</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-bg-secondary p-6 rounded-lg">
                      <h4 className="text-lg font-bold mb-4 text-accent-main">Best Maps</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-text-secondary">
                        {selectedCharacter.detailedGuide.scenarios.bestMaps.map((map, index) => (
                          <li key={index}>{map}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-bg-secondary p-6 rounded-lg">
                      <h4 className="text-lg font-bold mb-4 text-accent-main">Best Situations</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-text-secondary">
                        {selectedCharacter.detailedGuide.scenarios.bestSituations.map((situation, index) => (
                          <li key={index}>{situation}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-bg-secondary p-6 rounded-lg">
                      <h4 className="text-lg font-bold mb-4 text-accent-main">Challenging Situations</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-text-secondary">
                        {selectedCharacter.detailedGuide.scenarios.challengingSituations.map((situation, index) => (
                          <li key={index}>{situation}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-bg-secondary p-6 rounded-lg">
                      <h4 className="text-lg font-bold mb-4 text-accent-main">Team Roles</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-text-secondary">
                        {selectedCharacter.detailedGuide.scenarios.teamRoles.map((role, index) => (
                          <li key={index}>{role}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* 解锁要求 */}
              {selectedCharacter.requirements && (
                <div className="mt-8 bg-bg-secondary p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-accent-main">Unlock Requirements</h3>
                  <div className="space-y-3">
                    {selectedCharacter.requirements.ichor && (
                      <div className="flex justify-between items-center">
                        <span className="text-text-secondary">Ichor:</span>
                        <span className="font-semibold text-accent-main">{selectedCharacter.requirements.ichor}</span>
                      </div>
                    )}
                    {selectedCharacter.requirements.ornaments && (
                      <div className="flex justify-between items-center">
                        <span className="text-text-secondary">Ornaments:</span>
                        <span className="font-semibold text-accent-main">{selectedCharacter.requirements.ornaments}</span>
                      </div>
                    )}
                    {selectedCharacter.requirements.baskets && (
                      <div className="flex justify-between items-center">
                        <span className="text-text-secondary">Baskets:</span>
                        <span className="font-semibold text-accent-main">{selectedCharacter.requirements.baskets}</span>
                      </div>
                    )}
                    {selectedCharacter.requirements.research && (
                      <div className="flex justify-between items-center">
                        <span className="text-text-secondary">Research:</span>
                        <span className="font-semibold text-accent-main">{selectedCharacter.requirements.research}</span>
                      </div>
                    )}
                    {selectedCharacter.requirements.mastery && (
                      <div className="flex justify-between items-center">
                        <span className="text-text-secondary">Mastery:</span>
                        <span className="font-semibold text-accent-main">{selectedCharacter.requirements.mastery}</span>
                      </div>
                    )}
                    {selectedCharacter.requirements.other && selectedCharacter.requirements.other.length > 0 && (
                      <div>
                        <span className="text-text-secondary">Other Requirements:</span>
                        <ul className="mt-2 space-y-1">
                          {selectedCharacter.requirements.other.map((req, index) => (
                            <li key={index} className="text-accent-main">• {req}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {selectedCharacter.requirements.note && (
                      <div className="mt-3 p-3 bg-bg-primary rounded border-l-4 border-accent-main">
                        <p className="text-sm text-text-secondary italic">{selectedCharacter.requirements.note}</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* 详细指南提示 */}
              {!selectedCharacter.detailedGuide && (
                <div className="mt-8 bg-bg-primary border border-gray-600 rounded-lg p-6">
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-4 text-accent-main">Strategy Guide Coming Soon!</h3>
                    <p className="text-text-secondary mb-4">
                      We're working on detailed strategy guides for all characters, including:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-text-secondary">
                      <div>
                        <h4 className="font-semibold text-white mb-2">📚 Ability Mechanics</h4>
                        <ul className="space-y-1">
                          <li>• Detailed ability descriptions</li>
                          <li>• How abilities work in practice</li>
                          <li>• Best usage strategies</li>
                          <li>• Visual effects and indicators</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2">🎯 Strategy Guide</h4>
                        <ul className="space-y-1">
                          <li>• Playing as this character</li>
                          <li>• Playing against this character</li>
                          <li>• Tips and common mistakes</li>
                          <li>• Advanced techniques</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2">🤝 Team Interactions</h4>
                        <ul className="space-y-1">
                          <li>• Synergies with other characters</li>
                          <li>• Counter strategies</li>
                          <li>• Team composition advice</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2">🗺️ Scenario Analysis</h4>
                        <ul className="space-y-1">
                          <li>• Best maps and situations</li>
                          <li>• Challenging scenarios</li>
                          <li>• Team role recommendations</li>
                        </ul>
                      </div>
                    </div>
                    <p className="text-text-secondary mt-4 text-sm">
                      Check back soon for comprehensive guides that will help you master every character!
                    </p>
                  </div>
                </div>
              )}
            </div>
          ) : (
            // 角色列表页面
            <>

              {/* 角色网格 */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredAndSortedCharacters.map((character) => (
                  <div
                    key={character.id}
                    onClick={() => handleCharacterSelect(character)}
                    className="bg-bg-card border border-gray-600 rounded-lg p-6 cursor-pointer hover:border-accent-main hover:shadow-lg hover:shadow-accent-main/20 transition-all duration-300 group"
                  >
                    <div className="text-center mb-4">
                      <div className="text-6xl mb-3 group-hover:scale-110 transition-transform">
                        {character.image}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{character.name}</h3>
                      <div className="flex justify-center space-x-2 text-sm">
                        <span className={`${getTypeColor(character.type)} capitalize`}>
                          {character.type}
                        </span>
                        <span className="text-gray-400">•</span>
                        <span className={`${getRarityColor(character.rarity)} capitalize`}>
                          {character.rarity}
                        </span>
                      </div>
                    </div>

                    <p className="text-text-secondary text-sm mb-4 text-center">
                      {character.description}
                    </p>

                    {/* 统计概览 */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Skill:</span>
                        <span className="font-semibold text-accent-main">{character.stats.skillCheck}/5</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Stealth:</span>
                        <span className="font-semibold text-accent-main">{character.stats.stealth}/5</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Speed:</span>
                        <span className="font-semibold text-accent-main">{character.stats.speed}/5</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Health:</span>
                        <span className="font-semibold text-accent-main">{character.stats.health}/5</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Damage:</span>
                        <span className="font-semibold text-accent-main">{character.stats.damage}/5</span>
                      </div>
                    </div>

                    {/* 能力预览 */}
                    <div className="mt-4 pt-4 border-t border-gray-600">
                      <div className="text-sm">
                        <p className="font-semibold text-accent-main mb-1">
                          {character.abilities.active.name}
                        </p>
                        <p className="text-text-secondary text-xs">
                          {character.abilities.active.description}
                        </p>
                      </div>
                    </div>

                    {/* 点击提示 */}
                    <div className="mt-4 text-center">
                      <span className="text-xs text-accent-main opacity-0 group-hover:opacity-100 transition-opacity">
                        Click to view details →
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* 结果统计 */}
              <div className="mt-8 text-center text-text-secondary">
                Showing {filteredAndSortedCharacters.length} of {characters.length} characters
              </div>
            </>
          )}
        </div>


      </div>
    </>
  );
};

export default CharactersPage;
