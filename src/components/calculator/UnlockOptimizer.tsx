import React, { useState, useEffect, useCallback } from 'react';
import { UserProgress, loadUserProgress, saveUserProgress } from '../../utils/storage';

interface Character {
  id: string;
  name: string;
  ichorCost: number;
  type: 'main' | 'toon' | 'regular' | 'event' | 'lethal';
  rarity: 'common' | 'uncommon' | 'rare' | 'legendary';
  abilities: string[];
  researchBonus?: number; // Rodger特有
  unlockRequirements?: string[];
  priority: number; // 1-5, 5为最高优先级
}

// 角色优先级数据 - 基于真实数据文件，移除重复项
const characterPriorities = [
  // 最高优先级 - 免费角色和核心角色
  { name: 'Boxten', ichorCost: 0, type: 'toon', rarity: 'common', priority: 5, reason: 'Free character, increases extraction speed' },
  { name: 'Poppy', ichorCost: 0, type: 'toon', rarity: 'common', priority: 5, reason: 'Free character, movement speed boost' },
  
  // 高优先级 - 主角色 (Legendary)
  { name: 'Astro', ichorCost: 5000, type: 'main', rarity: 'legendary', priority: 5, reason: 'Main character, maximum stealth ability, restores teammate stamina' },
  { name: 'Vee', ichorCost: 4500, type: 'main', rarity: 'legendary', priority: 5, reason: 'Main character, highlights Twisted, marks incomplete machines' },
  { name: 'Pebble', ichorCost: 3750, type: 'main', rarity: 'legendary', priority: 5, reason: 'Main character, maximum movement speed, sniffs items' },
  { name: 'Shelly', ichorCost: 4250, type: 'main', rarity: 'legendary', priority: 5, reason: 'Main character, fast movement, team motivation' },
  { name: 'Sprout', ichorCost: 4500, type: 'main', rarity: 'legendary', priority: 5, reason: 'Main character, baking ability, attention to detail' },
  { name: 'Bobette', ichorCost: 2500, type: 'main', rarity: 'legendary', priority: 4, reason: 'Main character, Christmas limited, invisibility ability' },
  { name: 'Bassie', ichorCost: 2500, type: 'main', rarity: 'legendary', priority: 4, reason: 'Main character, Easter limited, team sharing' },
  
  // 高优先级 - 实用角色
  { name: 'Rodger', ichorCost: 1200, type: 'regular', rarity: 'rare', priority: 5, reason: '2x research speed, key to unlocking other characters' },
  { name: 'Cosmo', ichorCost: 750, type: 'regular', rarity: 'uncommon', priority: 4, reason: 'Sugar rush, sweet scent, high cost-effectiveness' },
  { name: 'Tisha', ichorCost: 500, type: 'regular', rarity: 'uncommon', priority: 4, reason: 'Clears negative status, auto-collects items' },
  { name: 'Brightney', ichorCost: 1000, type: 'regular', rarity: 'uncommon', priority: 4, reason: 'Light source, reveals Twisted, dark area vision' },
  
  // 中等优先级 - 战斗和实用角色
  { name: 'Shrimpo', ichorCost: 50, type: 'regular', rarity: 'uncommon', priority: 3, reason: 'Cheapest character, rage mode, extraction speed boost when alone' },
  { name: 'Goob', ichorCost: 800, type: 'regular', rarity: 'uncommon', priority: 3, reason: 'Bear hug protection, team support, stamina recovery' },
  { name: 'Finn', ichorCost: 900, type: 'regular', rarity: 'common', priority: 3, reason: 'Octopus character, multi-tasking, pulling ability' },
  { name: 'Toodles', ichorCost: 1250, type: 'regular', rarity: 'common', priority: 3, reason: '8-ball character, invisibility acceleration, team speed boost' },
  { name: 'Gigi', ichorCost: 1350, type: 'regular', rarity: 'rare', priority: 3, reason: 'Gachapon character, random rewards, lucky draws' },
  { name: 'Glisten', ichorCost: 2300, type: 'regular', rarity: 'rare', priority: 3, reason: 'Reflective ability, vanity, special mechanics' },
  
  // 中等优先级 - 特殊用途角色
  { name: 'Scraps', ichorCost: 1750, type: 'regular', rarity: 'rare', priority: 3, reason: 'Ranged attacks, resource utilization, advanced players' },
  { name: 'Teagan', ichorCost: 1100, type: 'regular', rarity: 'uncommon', priority: 3, reason: 'Tea time, soothes existence, team support' },
  { name: 'Razzle & Dazzle', ichorCost: 1600, type: 'regular', rarity: 'rare', priority: 3, reason: 'Dual character, position swap, dual nature' },
  { name: 'Connie', ichorCost: 1400, type: 'regular', rarity: 'rare', priority: 3, reason: 'Shell shield, spiral defense, protection ability' },
  { name: 'Flutter', ichorCost: 600, type: 'regular', rarity: 'common', priority: 3, reason: 'Butterfly character, elegant flight, movement ability' },
  { name: 'Looey', ichorCost: 900, type: 'regular', rarity: 'common', priority: 3, reason: 'Balloon character, explosion ability, deflation mechanics' }
];

interface UnlockRecommendation {
  recommendation: string;
  reason?: string;
  target: typeof characterPriorities[0];
  canAfford: boolean;
  alternatives?: typeof characterPriorities[0][];
}

const UnlockOptimizer: React.FC = () => {
  const [currentIchor, setCurrentIchor] = useState(500);
  const [ownedCharacters, setOwnedCharacters] = useState<string[]>([]);
  const [recommendation, setRecommendation] = useState<UnlockRecommendation | null>(null);
  const [filterType, setFilterType] = useState<string | null>(null);
  const [lastSaved, setLastSaved] = useState<string | null>(null);

  // 加载保存的用户进度
  useEffect(() => {
    const savedProgress = loadUserProgress();
    if (savedProgress) {
      setCurrentIchor(savedProgress.currentIchor);
      setOwnedCharacters(savedProgress.ownedCharacters);
      setLastSaved(savedProgress.lastUpdated);
    }
  }, []);

  // 手动保存进度
  const saveProgress = useCallback(() => {
    const progress: UserProgress = {
      ownedCharacters,
      currentIchor,
      researchProgress: {},
      lastUpdated: new Date().toISOString()
    };
    saveUserProgress(progress);
    setLastSaved(progress.lastUpdated);
  }, [ownedCharacters, currentIchor]);

  // 推荐算法逻辑
  const getUnlockRecommendation = (currentIchor: number, ownedCharacters: string[]): UnlockRecommendation => {
    const availableCharacters = characterPriorities.filter(char => 
      !ownedCharacters.includes(char.name) && char.ichorCost <= currentIchor
    );
    
    if (availableCharacters.length === 0) {
      const nextCheapest = characterPriorities
        .filter(char => !ownedCharacters.includes(char.name))
        .sort((a, b) => a.ichorCost - b.ichorCost)[0];
      
      return {
        recommendation: `Save ${nextCheapest.ichorCost - currentIchor} more Ichor for ${nextCheapest.name}`,
        target: nextCheapest,
        canAfford: false
      };
    }
    
    const bestOption = availableCharacters.sort((a, b) => b.priority - a.priority)[0];
    
    return {
      recommendation: `Unlock ${bestOption.name} next`,
      reason: bestOption.reason,
      target: bestOption,
      canAfford: true,
      alternatives: availableCharacters.slice(1, 3)
    };
  };

  const calculateOptimization = () => {
    const result = getUnlockRecommendation(currentIchor, ownedCharacters);
    setRecommendation(result);
  };

  const toggleCharacterOwnership = (characterName: string) => {
    setOwnedCharacters(prev => {
      const newOwned = prev.includes(characterName) 
        ? prev.filter(name => name !== characterName)
        : [...prev, characterName];
      return newOwned;
    });
  };

  const getPriorityColor = (priority: number) => {
    if (priority === 5) return 'bg-red-600';
    if (priority === 4) return 'bg-orange-600';
    if (priority === 3) return 'bg-yellow-600';
    if (priority === 2) return 'bg-blue-600';
    return 'bg-green-600';
  };

  const getPriorityText = (priority: number) => {
    if (priority === 5) return 'Critical';
    if (priority === 4) return 'High';
    if (priority === 3) return 'Medium';
    if (priority === 2) return 'Low';
    return 'Very Low';
  };

  // 获取筛选后的角色列表
  const getFilteredCharacters = () => {
    if (!filterType || filterType === 'all') {
      return characterPriorities;
    }
    return characterPriorities.filter(char => char.type === filterType);
  };

  // 处理筛选类型变化
  const handleFilterChange = (type: string) => {
    if (type === 'all') {
      setFilterType(null);
    } else {
      setFilterType(type);
    }
  };

  // 选择所有免费角色
  const selectAllFree = () => {
    const freeCharacters = characterPriorities
      .filter(char => char.ichorCost === 0)
      .map(char => char.name);
    setOwnedCharacters(prev => [...new Set([...prev, ...freeCharacters])]);
  };

  // 清除所有选择
  const clearAll = () => {
    setOwnedCharacters([]);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-bg-card rounded-lg p-8 shadow-lg">
        <h2 className="text-2xl font-bold text-text-primary mb-6 text-center">
          Unlock Optimizer
        </h2>
        
        {/* 统计信息 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-bg-secondary rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-accent-main">
              {characterPriorities.length}
            </div>
            <div className="text-sm text-text-secondary">Total Characters</div>
          </div>
          <div className="bg-bg-secondary rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-green-500">
              {ownedCharacters.length}
            </div>
            <div className="text-sm text-text-secondary">Owned</div>
          </div>
          <div className="bg-bg-secondary rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-blue-500">
              {characterPriorities.length - ownedCharacters.length}
            </div>
            <div className="text-sm text-text-secondary">Remaining</div>
          </div>
          <div className="bg-bg-secondary rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-yellow-500">
              {characterPriorities
                .filter(char => !ownedCharacters.includes(char.name))
                .reduce((sum, char) => sum + char.ichorCost, 0)
                .toLocaleString()}
            </div>
            <div className="text-sm text-text-secondary">Total Cost</div>
          </div>
        </div>
        
        {/* 保存状态指示器 */}
        {lastSaved && (
          <div className="text-center mb-4">
            <span className="text-xs text-text-secondary">
              Last saved: {new Date(lastSaved).toLocaleString()}
            </span>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 左侧：输入配置 */}
          <div className="space-y-6">
            {/* 当前Ichor数量 */}
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">
                Current Ichor: {currentIchor.toLocaleString()}
              </label>
              <input
                type="range"
                min="0"
                max="10000"
                step="100"
                value={currentIchor}
                onChange={(e) => setCurrentIchor(parseInt(e.target.value))}
                className="w-full h-2 bg-bg-secondary rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-xs text-text-secondary mt-1">
                <span>0</span>
                <span>5,000</span>
                <span>10,000</span>
              </div>
            </div>

            {/* 已拥有角色 */}
            <div>
              <h3 className="text-lg font-semibold text-text-primary mb-3">Owned Characters</h3>
              
              {/* 角色类型过滤器 */}
              <div className="mb-3">
                <div className="text-sm text-text-secondary mb-2">Filter by type:</div>
                <div className="flex flex-wrap gap-2">
                  {['all', 'main', 'toon', 'regular', 'event', 'lethal'].map((type) => (
                    <button
                      key={type}
                      onClick={() => handleFilterChange(type)}
                      className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                        (type === 'all' && !filterType) || filterType === type
                          ? 'bg-accent-main text-white'
                          : 'bg-bg-secondary text-text-secondary hover:bg-bg-card'
                      }`}
                    >
                      {type === 'all' ? 'All' : type.charAt(0).toUpperCase() + type.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* 快速操作按钮 */}
              <div className="mb-3">
                <div className="text-sm text-text-secondary mb-2">Quick actions:</div>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={selectAllFree}
                    className="px-3 py-1 bg-green-600 text-white rounded text-xs font-medium hover:bg-green-700 transition-colors"
                  >
                    Select All Free
                  </button>
                  <button
                    onClick={clearAll}
                    className="px-3 py-1 bg-red-600 text-white rounded text-xs font-medium hover:bg-red-700 transition-colors"
                  >
                    Clear All
                  </button>
                  <button
                    onClick={saveProgress}
                    className="px-3 py-1 bg-blue-600 text-white rounded text-xs font-medium hover:bg-blue-700 transition-colors"
                  >
                    Save Progress
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto">
                {getFilteredCharacters().map((char) => (
                  <label key={char.name} className="flex items-center space-x-2 cursor-pointer hover:bg-bg-secondary p-2 rounded transition-colors">
                    <input
                      type="checkbox"
                      checked={ownedCharacters.includes(char.name)}
                      onChange={() => toggleCharacterOwnership(char.name)}
                      className="custom-checkbox"
                    />
                    <div className="flex flex-col">
                      <span className="text-sm text-text-primary">{char.name}</span>
                      <span className="text-xs text-text-secondary">
                        {char.ichorCost === 0 ? 'Free' : `${char.ichorCost.toLocaleString()} Ichor`}
                      </span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <button
              onClick={calculateOptimization}
              className="w-full px-6 py-3 bg-accent-main text-white rounded-lg hover:bg-accent-main/80 transition-colors font-medium"
            >
              Get Unlock Recommendation
            </button>
          </div>

          {/* 右侧：推荐结果 */}
          <div className="bg-bg-secondary rounded-lg p-6">
            <h3 className="text-lg font-semibold text-text-primary mb-4">Unlock Recommendation</h3>
            
            {recommendation ? (
              <div className="space-y-6">
                {/* 主要推荐 */}
                <div className={`bg-bg-card rounded-lg p-4 border-l-4 ${
                  recommendation.canAfford ? 'border-green-500' : 'border-yellow-500'
                }`}>
                  <div className="text-xl font-bold text-text-primary mb-2">
                    {recommendation.recommendation}
                  </div>
                  {recommendation.reason && (
                    <div className="text-sm text-text-secondary mb-3">
                      {recommendation.reason}
                    </div>
                  )}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-lg font-semibold text-accent-main">
                      {recommendation.target.ichorCost === 0 ? 'Free' : `${recommendation.target.ichorCost.toLocaleString()} Ichor`}
                    </span>
                    <span className={`px-3 py-1 rounded text-sm font-medium text-white ${getPriorityColor(recommendation.target.priority)}`}>
                      {getPriorityText(recommendation.target.priority)}
                    </span>
                  </div>
                  <div className="flex space-x-2 text-sm">
                    <span className={`px-2 py-1 rounded text-white ${
                      recommendation.target.type === 'main' ? 'bg-purple-600' :
                      recommendation.target.type === 'toon' ? 'bg-blue-600' :
                      recommendation.target.type === 'event' ? 'bg-green-600' :
                      recommendation.target.type === 'lethal' ? 'bg-red-600' : 'bg-gray-600'
                    }`}>
                      {recommendation.target.type}
                    </span>
                    <span className={`px-2 py-1 rounded text-white ${
                      recommendation.target.rarity === 'legendary' ? 'bg-yellow-600' :
                      recommendation.target.rarity === 'rare' ? 'bg-purple-600' :
                      recommendation.target.rarity === 'uncommon' ? 'bg-blue-600' : 'bg-gray-600'
                    }`}>
                      {recommendation.target.rarity}
                    </span>
                  </div>
                </div>

                {/* 替代选择 */}
                {recommendation.alternatives && recommendation.alternatives.length > 0 && (
                  <div>
                    <h4 className="font-medium text-text-primary mb-3">Alternative Options:</h4>
                    <div className="space-y-2">
                      {recommendation.alternatives.map((char, index) => (
                        <div key={index} className="flex justify-between items-center bg-bg-card rounded-lg p-3">
                          <div className="flex items-center space-x-3">
                            <div className="flex flex-col">
                              <span className="text-text-primary font-medium">{char.name}</span>
                              <div className="flex space-x-2 text-xs">
                                <span className={`px-2 py-1 rounded text-white ${
                                  char.type === 'main' ? 'bg-purple-600' :
                                  char.type === 'toon' ? 'bg-blue-600' :
                                  char.type === 'event' ? 'bg-green-600' :
                                  char.type === 'lethal' ? 'bg-red-600' : 'bg-gray-600'
                                }`}>
                                  {char.type}
                                </span>
                                <span className={`px-2 py-1 rounded text-white ${
                                  char.rarity === 'legendary' ? 'bg-yellow-600' :
                                  char.rarity === 'rare' ? 'bg-purple-600' :
                                  char.rarity === 'uncommon' ? 'bg-blue-600' : 'bg-gray-600'
                                }`}>
                                  {char.rarity}
                                </span>
                              </div>
                            </div>
                            <span className={`px-2 py-1 rounded text-xs font-medium text-white ${getPriorityColor(char.priority)}`}>
                              {getPriorityText(char.priority)}
                            </span>
                          </div>
                          <div className="text-right">
                            <div className="text-text-secondary font-medium">
                              {char.ichorCost === 0 ? 'Free' : `${char.ichorCost.toLocaleString()} Ichor`}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 所有角色优先级列表 */}
                <div>
                  <h4 className="font-medium text-text-primary mb-3">Character Priority List:</h4>
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                    {characterPriorities
                      .filter(char => !ownedCharacters.includes(char.name))
                      .map((char, index) => (
                        <div key={index} className="flex justify-between items-center bg-bg-card rounded-lg p-3">
                          <div className="flex items-center space-x-3">
                            <span className="w-6 h-6 bg-accent-main text-white rounded-full flex items-center justify-center text-sm font-bold">
                              {index + 1}
                            </span>
                            <div className="flex flex-col">
                              <span className="text-text-primary font-medium">{char.name}</span>
                              <div className="flex space-x-2 text-xs">
                                <span className={`px-2 py-1 rounded text-white ${
                                  char.type === 'main' ? 'bg-purple-600' :
                                  char.type === 'toon' ? 'bg-blue-600' :
                                  char.type === 'event' ? 'bg-green-600' :
                                  char.type === 'lethal' ? 'bg-red-600' : 'bg-gray-600'
                                }`}>
                                  {char.type}
                                </span>
                                <span className={`px-2 py-1 rounded text-white ${
                                  char.rarity === 'legendary' ? 'bg-yellow-600' :
                                  char.rarity === 'rare' ? 'bg-purple-600' :
                                  char.rarity === 'uncommon' ? 'bg-blue-600' : 'bg-gray-600'
                                }`}>
                                  {char.rarity}
                                </span>
                              </div>
                            </div>
                            <span className={`px-2 py-1 rounded text-xs font-medium text-white ${getPriorityColor(char.priority)}`}>
                              {getPriorityText(char.priority)}
                            </span>
                          </div>
                          <div className="text-right">
                            <div className="text-text-secondary font-medium">
                              {char.ichorCost === 0 ? 'Free' : `${char.ichorCost.toLocaleString()} Ichor`}
                            </div>
                            <div className="text-xs text-text-secondary max-w-32">{char.reason}</div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-text-secondary text-center py-8">
                Configure your current Ichor and owned characters, then click "Get Unlock Recommendation"
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnlockOptimizer;
