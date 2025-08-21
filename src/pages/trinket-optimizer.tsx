import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { characters } from '../data/characters';

// 游戏风格类型
type GameStyle = 'extractor' | 'distractor' | 'support' | 'balanced';

// 饰品接口
interface Trinket {
  id: string;
  name: string;
  type: 'primary' | 'secondary';
  effects: string[];
  description: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  icon: string;
}

// 推荐组合接口
interface TrinketRecommendation {
  primary: Trinket;
  secondary: Trinket;
  reasoning: string;
  synergy: string;
  playstyle: GameStyle;
}

const TrinketOptimizer: React.FC = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<string>('');
  const [selectedGameStyle, setSelectedGameStyle] = useState<GameStyle>('balanced');
  const [recommendations, setRecommendations] = useState<TrinketRecommendation[]>([]);

  // 模拟饰品数据 - 实际应该从数据库获取
  const trinkets: Trinket[] = [
    // 主饰品
    {
      id: 'lucky-charm',
      name: 'Lucky Charm',
      type: 'primary',
      effects: ['+15% Extraction Speed', '+10% Skill Check Success'],
      description: 'A mystical charm that enhances your luck and extraction abilities',
      rarity: 'epic',
      icon: '🍀'
    },
    {
      id: 'stealth-cloak',
      name: 'Stealth Cloak',
      type: 'primary',
      effects: ['+20% Stealth', '+15% Movement Speed'],
      description: 'A magical cloak that makes you nearly invisible to enemies',
      rarity: 'epic',
      icon: '👻'
    },
    {
      id: 'stamina-booster',
      name: 'Stamina Booster',
      type: 'primary',
      effects: ['+25% Stamina', '+20% Stamina Recovery'],
      description: 'Enhances your endurance and recovery rate',
      rarity: 'rare',
      icon: '⚡'
    },
    {
      id: 'skill-master',
      name: 'Skill Master',
      type: 'primary',
      effects: ['+30% Skill Check Success', '+15% All Stats'],
      description: 'Master of all skills, enhancing your overall capabilities',
      rarity: 'legendary',
      icon: '⭐'
    },
    {
      id: 'extraction-expert',
      name: 'Extraction Expert',
      type: 'primary',
      effects: ['+40% Extraction Speed', '+25% Success Rate'],
      description: 'Specialized in quick and successful extractions',
      rarity: 'epic',
      icon: '🚀'
    },
    {
      id: 'distraction-master',
      name: 'Distraction Master',
      type: 'primary',
      effects: ['+35% Distraction Effectiveness', '+20% Movement Speed'],
      description: 'Expert at creating diversions and escaping danger',
      rarity: 'epic',
      icon: '🎭'
    },
    {
      id: 'support-aura',
      name: 'Support Aura',
      type: 'primary',
      effects: ['+30% Team Support', '+25% Healing Effectiveness'],
      description: 'Radiates positive energy that helps your team',
      rarity: 'epic',
      icon: '💫'
    },
    {
      id: 'balanced-harmony',
      name: 'Balanced Harmony',
      type: 'primary',
      effects: ['+15% All Stats', '+20% Versatility'],
      description: 'Perfectly balanced for any situation',
      rarity: 'rare',
      icon: '⚖️'
    },

    // 副饰品
    {
      id: 'quick-escape',
      name: 'Quick Escape',
      type: 'secondary',
      effects: ['+20% Movement Speed', '+15% Escape Success'],
      description: 'Helps you escape from dangerous situations quickly',
      rarity: 'rare',
      icon: '🏃'
    },
    {
      id: 'silent-step',
      name: 'Silent Step',
      type: 'secondary',
      effects: ['+25% Stealth', '+10% Movement Speed'],
      description: 'Makes your movements completely silent',
      rarity: 'rare',
      icon: '👣'
    },
    {
      id: 'energy-siphon',
      name: 'Energy Siphon',
      type: 'secondary',
      effects: ['+20% Stamina Recovery', '+15% Skill Check Success'],
      description: 'Drains energy from enemies to restore your own',
      rarity: 'epic',
      icon: '🔋'
    },
    {
      id: 'team-link',
      name: 'Team Link',
      type: 'secondary',
      effects: ['+30% Team Coordination', '+20% Support Effectiveness'],
      description: 'Creates a psychic link with your teammates',
      rarity: 'rare',
      icon: '🔗'
    },
    {
      id: 'distraction-field',
      name: 'Distraction Field',
      type: 'secondary',
      effects: ['+25% Distraction Range', '+20% Effectiveness'],
      description: 'Creates a field that distracts nearby enemies',
      rarity: 'rare',
      icon: '🌀'
    },
    {
      id: 'extraction-boost',
      name: 'Extraction Boost',
      type: 'secondary',
      effects: ['+20% Extraction Speed', '+15% Success Rate'],
      description: 'Provides an extra boost during extractions',
      rarity: 'common',
      icon: '📦'
    }
  ];

  // 生成推荐组合
  const generateRecommendations = () => {
    if (!selectedCharacter || !selectedGameStyle) return;

    const primaryTrinkets = trinkets.filter(t => t.type === 'primary');
    const secondaryTrinkets = trinkets.filter(t => t.type === 'secondary');
    
    let filteredPrimaries = primaryTrinkets;
    let filteredSecondaries = secondaryTrinkets;

    // 根据游戏风格过滤主饰品
    switch (selectedGameStyle) {
      case 'extractor':
        filteredPrimaries = primaryTrinkets.filter(t => 
          t.name.includes('Extraction') || 
          t.name.includes('Skill') || 
          t.name.includes('Stamina')
        );
        break;
      case 'distractor':
        filteredPrimaries = primaryTrinkets.filter(t => 
          t.name.includes('Distraction') || 
          t.name.includes('Stealth') || 
          t.name.includes('Movement')
        );
        break;
      case 'support':
        filteredPrimaries = primaryTrinkets.filter(t => 
          t.name.includes('Support') || 
          t.name.includes('Team') || 
          t.name.includes('Healing')
        );
        break;
      case 'balanced':
        filteredPrimaries = primaryTrinkets.filter(t => 
          t.name.includes('Balanced') || 
          t.name.includes('Harmony') || 
          t.name.includes('Master')
        );
        break;
    }

    // 生成推荐组合
    const newRecommendations: TrinketRecommendation[] = [];
    
    // 为每个主饰品找到最佳的副饰品组合
    filteredPrimaries.forEach(primary => {
      let bestSecondary = filteredSecondaries[0];
      let bestSynergy = '';

      // 根据主饰品选择最佳的副饰品
      if (primary.name.includes('Extraction')) {
        bestSecondary = filteredSecondaries.find(s => s.name.includes('Extraction')) || filteredSecondaries[0];
        bestSynergy = 'Extraction-focused combination for maximum efficiency';
      } else if (primary.name.includes('Stealth')) {
        bestSecondary = filteredSecondaries.find(s => s.name.includes('Silent') || s.name.includes('Stealth')) || filteredSecondaries[0];
        bestSynergy = 'Stealth-focused combination for maximum concealment';
      } else if (primary.name.includes('Support')) {
        bestSecondary = filteredSecondaries.find(s => s.name.includes('Team') || s.name.includes('Support')) || filteredSecondaries[0];
        bestSynergy = 'Support-focused combination for maximum team effectiveness';
      } else if (primary.name.includes('Distraction')) {
        bestSecondary = filteredSecondaries.find(s => s.name.includes('Distraction')) || filteredSecondaries[0];
        bestSynergy = 'Distraction-focused combination for maximum diversion';
      } else {
        bestSecondary = filteredSecondaries.find(s => s.name.includes('Quick') || s.name.includes('Energy')) || filteredSecondaries[0];
        bestSynergy = 'Balanced combination for versatile gameplay';
      }

      newRecommendations.push({
        primary,
        secondary: bestSecondary,
        reasoning: `This combination maximizes your ${selectedGameStyle} playstyle by combining ${primary.name} with ${bestSecondary.name} for optimal synergy.`,
        synergy: bestSynergy,
        playstyle: selectedGameStyle
      });
    });

    // 限制推荐数量并排序
    setRecommendations(newRecommendations.slice(0, 6).sort((a, b) => {
      // 按稀有度排序
      const rarityOrder = { 'legendary': 4, 'epic': 3, 'rare': 2, 'common': 1 };
      return rarityOrder[b.primary.rarity] - rarityOrder[a.primary.rarity];
    }));
  };

  // 当选择变化时重新生成推荐
  useEffect(() => {
    generateRecommendations();
  }, [selectedCharacter, selectedGameStyle]);

  // 获取角色信息
  const getCharacterInfo = (characterId: string) => {
    return characters.find(c => c.id === characterId);
  };

  // 获取稀有度颜色
  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'legendary': return 'text-yellow-400';
      case 'epic': return 'text-purple-400';
      case 'rare': return 'text-blue-400';
      case 'common': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <>
      <SEO
        title="Trinket Optimizer - Dandy's World Calculator"
        description="Optimize your trinket combinations for maximum effectiveness in Dandy's World. Get personalized recommendations based on your character and playstyle."
        keywords="Dandy's World, trinket optimizer, character optimization, game strategy, trinket combinations"
        ogTitle="Trinket Optimizer"
        ogDescription="Optimize your trinket combinations for maximum effectiveness"
        canonical="/trinket-optimizer"
      />
      <Navigation />
      <div className="min-h-screen bg-bg-primary pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* 页面标题 */}
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-text-primary mb-4">
              Trinket Optimizer
            </h1>
            <p className="text-xl text-text-secondary">
              Optimize your trinket combinations for maximum effectiveness
            </p>
          </header>

          {/* 返回链接 */}
          <div className="text-center mb-8">
            <Link 
              to="/calculator" 
              className="inline-flex items-center space-x-2 text-accent-main hover:text-accent-main/80 transition-colors"
            >
              <span>←</span>
              <span>Back to Calculator</span>
            </Link>
          </div>
          
          {/* 配置区域 */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-bg-card rounded-lg p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-text-primary mb-6 text-center">
                Configuration
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* 角色选择 */}
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-3">
                    Select Character
                  </label>
                  <select
                    value={selectedCharacter}
                    onChange={(e) => setSelectedCharacter(e.target.value)}
                    className="w-full px-4 py-3 bg-bg-secondary border border-gray-600 rounded-lg text-text-primary focus:ring-2 focus:ring-accent-main focus:border-transparent"
                  >
                    <option value="">Choose a character...</option>
                    {characters.map((char) => (
                      <option key={char.id} value={char.id}>
                        {char.name} ({char.type})
                      </option>
                    ))}
                  </select>
                  
                  {selectedCharacter && (
                    <div className="mt-4 p-4 bg-bg-secondary rounded-lg">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-2xl">{getCharacterInfo(selectedCharacter)?.image}</span>
                        <div>
                          <h4 className="font-semibold text-text-primary">
                            {getCharacterInfo(selectedCharacter)?.name}
                          </h4>
                          <p className="text-sm text-text-secondary">
                            {getCharacterInfo(selectedCharacter)?.type} • {getCharacterInfo(selectedCharacter)?.rarity}
                          </p>
                        </div>
                      </div>
                      <p className="text-sm text-text-secondary">
                        {getCharacterInfo(selectedCharacter)?.description}
                      </p>
                    </div>
                  )}
                </div>

                {/* 游戏风格选择 */}
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-3">
                    Game Style
                  </label>
                  <div className="space-y-3">
                    {[
                      { id: 'extractor', name: 'Extractor', icon: '🚀', desc: 'Focus on completing objectives quickly' },
                      { id: 'distractor', name: 'Distractor', icon: '🎭', desc: 'Create diversions and escape danger' },
                      { id: 'support', name: 'Support', icon: '💫', desc: 'Help teammates and provide utility' },
                      { id: 'balanced', name: 'Balanced', icon: '⚖️', desc: 'Adapt to any situation' }
                    ].map((style) => (
                      <label key={style.id} className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="radio"
                          name="gameStyle"
                          value={style.id}
                          checked={selectedGameStyle === style.id}
                          onChange={(e) => setSelectedGameStyle(e.target.value as GameStyle)}
                          className="w-4 h-4 text-accent-main bg-bg-card border-gray-600"
                        />
                        <div className="flex items-center space-x-3 flex-1 p-3 bg-bg-secondary rounded-lg hover:bg-bg-card transition-colors">
                          <span className="text-xl">{style.icon}</span>
                          <div>
                            <div className="font-medium text-text-primary">{style.name}</div>
                            <div className="text-sm text-text-secondary">{style.desc}</div>
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 推荐结果 */}
          {recommendations.length > 0 && (
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-text-primary mb-6 text-center">
                Recommended Trinket Combinations
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {recommendations.map((rec, index) => (
                  <div key={index} className="bg-bg-card rounded-lg p-6 shadow-lg border border-gray-600">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-text-primary">
                        Combination {index + 1}
                      </h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${
                        rec.playstyle === 'extractor' ? 'bg-blue-900 text-blue-200' :
                        rec.playstyle === 'distractor' ? 'bg-purple-900 text-purple-200' :
                        rec.playstyle === 'support' ? 'bg-green-900 text-green-200' :
                        'bg-gray-700 text-gray-200'
                      }`}>
                        {rec.playstyle}
                      </span>
                    </div>

                    {/* 主饰品 */}
                    <div className="mb-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-2xl">{rec.primary.icon}</span>
                        <div className="flex-1">
                          <h4 className="font-semibold text-text-primary">{rec.primary.name}</h4>
                          <span className={`text-sm ${getRarityColor(rec.primary.rarity)} capitalize`}>
                            {rec.primary.rarity}
                          </span>
                        </div>
                      </div>
                      <p className="text-sm text-text-secondary mb-2">{rec.primary.description}</p>
                      <div className="space-y-1">
                        {rec.primary.effects.map((effect, i) => (
                          <div key={i} className="text-xs text-accent-main">• {effect}</div>
                        ))}
                      </div>
                    </div>

                    {/* 副饰品 */}
                    <div className="mb-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-2xl">{rec.secondary.icon}</span>
                        <div className="flex-1">
                          <h4 className="font-semibold text-text-primary">{rec.secondary.name}</h4>
                          <span className={`text-sm ${getRarityColor(rec.secondary.rarity)} capitalize`}>
                            {rec.secondary.rarity}
                          </span>
                        </div>
                      </div>
                      <p className="text-sm text-text-secondary mb-2">{rec.secondary.description}</p>
                      <div className="space-y-1">
                        {rec.secondary.effects.map((effect, i) => (
                          <div key={i} className="text-xs text-accent-main">• {effect}</div>
                        ))}
                      </div>
                    </div>

                    {/* 协同效果 */}
                    <div className="border-t border-gray-600 pt-4">
                      <h5 className="font-medium text-text-primary mb-2">Synergy</h5>
                      <p className="text-sm text-text-secondary mb-3">{rec.synergy}</p>
                      <p className="text-sm text-text-secondary">{rec.reasoning}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 空状态 */}
          {(!selectedCharacter || !selectedGameStyle) && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-text-primary mb-2">
                Select Your Configuration
              </h3>
              <p className="text-text-secondary">
                Choose a character and game style to see personalized trinket recommendations
              </p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TrinketOptimizer;
