import React, { useState, useEffect } from 'react';
import { UserProgress, loadUserProgress, updateUserProgress } from '../../utils/storage';

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

// 角色优先级数据 - 基于真实数据文件
const characterPriorities = [
  // 最高优先级 - 免费角色和核心角色
  { name: 'Boxten', ichorCost: 0, type: 'toon', rarity: 'common', priority: 5, reason: '免费角色，提升提取速度' },
  { name: 'Poppy', ichorCost: 0, type: 'toon', rarity: 'common', priority: 5, reason: '免费角色，移动速度提升' },
  
  // 高优先级 - 主角色 (Legendary)
  { name: 'Astro', ichorCost: 5000, type: 'main', rarity: 'legendary', priority: 5, reason: '主角色，最大潜行能力，恢复队友体力' },
  { name: 'Vee', ichorCost: 4500, type: 'main', rarity: 'legendary', priority: 5, reason: '主角色，高亮Twisted，标记未完成机器' },
  { name: 'Pebble', ichorCost: 3750, type: 'main', rarity: 'legendary', priority: 5, reason: '主角色，最大移动速度，嗅探物品' },
  { name: 'Shelly', ichorCost: 4250, type: 'main', rarity: 'legendary', priority: 5, reason: '主角色，快速移动，团队激励' },
  { name: 'Sprout', ichorCost: 4500, type: 'main', rarity: 'legendary', priority: 5, reason: '主角色，烘焙能力，专注细节' },
  { name: 'Bobette', ichorCost: 2500, type: 'main', rarity: 'legendary', priority: 4, reason: '主角色，圣诞限定，隐身能力' },
  { name: 'Bassie', ichorCost: 2500, type: 'main', rarity: 'legendary', priority: 4, reason: '主角色，复活节限定，团队分享' },
  
  // 高优先级 - 实用角色
  { name: 'Rodger', ichorCost: 1200, type: 'regular', rarity: 'rare', priority: 5, reason: '2倍研究速度，解锁其他角色的关键' },
  { name: 'Cosmo', ichorCost: 750, type: 'regular', rarity: 'uncommon', priority: 4, reason: '糖分冲刺，甜香气息，性价比高' },
  { name: 'Tisha', ichorCost: 500, type: 'regular', rarity: 'uncommon', priority: 4, reason: '清理负面状态，自动拾取物品' },
  { name: 'Brightney', ichorCost: 1000, type: 'regular', rarity: 'uncommon', priority: 4, reason: '光源，揭示Twisted，黑暗区域视野' },
  
  // 中等优先级 - 战斗和实用角色
  { name: 'Shrimpo', ichorCost: 50, type: 'regular', rarity: 'uncommon', priority: 3, reason: '最便宜角色，愤怒模式，单独时提取速度提升' },
  { name: 'Goob', ichorCost: 800, type: 'regular', rarity: 'uncommon', priority: 3, reason: '熊抱保护，团队支持，体力恢复' },
  { name: 'Finn', ichorCost: 900, type: 'regular', rarity: 'common', priority: 3, reason: '章鱼角色，多任务处理，拉拽能力' },
  { name: 'Toodles', ichorCost: 1250, type: 'regular', rarity: 'common', priority: 3, reason: '8球角色，隐身加速，团队速度提升' },
  { name: 'Gigi', ichorCost: 1350, type: 'regular', rarity: 'rare', priority: 3, reason: '扭蛋角色，随机奖励，幸运抽奖' },
  { name: 'Glisten', ichorCost: 2300, type: 'regular', rarity: 'rare', priority: 3, reason: '反光能力，虚荣心，特殊机制' },
  
  // 中等优先级 - 特殊用途角色
  { name: 'Scraps', ichorCost: 1750, type: 'regular', rarity: 'rare', priority: 3, reason: '远程攻击，资源利用，高级玩家' },
  { name: 'Teagan', ichorCost: 1100, type: 'regular', rarity: 'uncommon', priority: 3, reason: '茶时间，安抚存在，团队支持' },
  { name: 'Razzle & Dazzle', ichorCost: 1600, type: 'regular', rarity: 'rare', priority: 3, reason: '双角色，位置交换，双重性质' },
  { name: 'Connie', ichorCost: 1400, type: 'regular', rarity: 'rare', priority: 3, reason: '贝壳护盾，螺旋防御，保护能力' },
  { name: 'Flutter', ichorCost: 600, type: 'regular', rarity: 'common', priority: 3, reason: '蝴蝶角色，优雅飞行，移动能力' },
  { name: 'Looey', ichorCost: 900, type: 'regular', rarity: 'common', priority: 3, reason: '气球角色，爆炸能力，放气机制' },
  
  // 较低优先级 - 特殊角色
  { name: 'Gigi', ichorCost: 1350, type: 'regular', rarity: 'rare', priority: 2, reason: '扭蛋角色，随机奖励，幸运抽奖' },
  { name: 'Glisten', ichorCost: 2300, type: 'regular', rarity: 'rare', priority: 2, reason: '反光能力，虚荣心，特殊机制' },
  { name: 'Scraps', ichorCost: 1750, type: 'regular', rarity: 'rare', priority: 2, reason: '远程攻击，资源利用，高级玩家' },
  { name: 'Teagan', ichorCost: 1100, type: 'regular', rarity: 'uncommon', priority: 2, reason: '茶时间，安抚存在，团队支持' },
  { name: 'Razzle & Dazzle', ichorCost: 1600, type: 'regular', rarity: 'rare', priority: 2, reason: '双角色，位置交换，双重性质' },
  { name: 'Connie', ichorCost: 1400, type: 'regular', rarity: 'rare', priority: 2, reason: '贝壳护盾，螺旋防御，保护能力' },
  
  // 最低优先级 - 收藏和挑战角色
  { name: 'Shrimpo', ichorCost: 50, type: 'regular', rarity: 'uncommon', priority: 1, reason: '最弱角色，收藏用途，挑战玩法' },
  { name: 'Bobette', ichorCost: 2500, type: 'main', rarity: 'legendary', priority: 1, reason: '圣诞限定，收藏价值' },
  { name: 'Bassie', ichorCost: 2500, type: 'main', rarity: 'legendary', priority: 1, reason: '复活节限定，收藏价值' }
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
  const [lastSaved, setLastSaved] = useState<string>('');
  const [filterType, setFilterType] = useState<string | null>(null);

  // 加载保存的用户进度
  useEffect(() => {
    const savedProgress = loadUserProgress();
    if (savedProgress) {
      setCurrentIchor(savedProgress.currentIchor);
      setOwnedCharacters(savedProgress.ownedCharacters);
      setLastSaved(savedProgress.lastUpdated);
    }
  }, []);

  // 自动保存用户进度
  const saveProgress = () => {
    const progress: UserProgress = {
      ownedCharacters,
      currentIchor,
      researchProgress: {}, // 这个组件不需要研究进度
      lastUpdated: new Date().toISOString()
    };
    updateUserProgress(progress, progress);
    setLastSaved(progress.lastUpdated);
  };

  // 当数据变化时自动保存
  useEffect(() => {
    if (lastSaved) { // 避免初始加载时保存
      saveProgress();
    }
  }, [currentIchor, ownedCharacters]);

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
    setOwnedCharacters(prev => 
      prev.includes(characterName) 
        ? prev.filter(name => name !== characterName)
        : [...prev, characterName]
    );
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
    console.log('Filter type:', filterType); // 调试日志
    if (!filterType || filterType === 'all') {
      return characterPriorities;
    }
    const filtered = characterPriorities.filter(char => char.type === filterType);
    console.log('Filtered characters:', filtered.length); // 调试日志
    return filtered;
  };

  // 处理筛选类型变化
  const handleFilterChange = (type: string) => {
    console.log('Changing filter to:', type); // 调试日志
    if (type === 'all') {
      setFilterType(null);
    } else {
      setFilterType(type);
    }
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
                    onClick={() => {
                      const freeCharacters = characterPriorities
                        .filter(char => char.ichorCost === 0)
                        .map(char => char.name);
                      setOwnedCharacters(prev => [...new Set([...prev, ...freeCharacters])]);
                    }}
                    className="px-3 py-1 bg-green-600 text-white rounded text-xs font-medium hover:bg-green-700 transition-colors"
                  >
                    Select All Free
                  </button>
                  <button
                    onClick={() => setOwnedCharacters([])}
                    className="px-3 py-1 bg-red-600 text-white rounded text-xs font-medium hover:bg-red-700 transition-colors"
                  >
                    Clear All
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
