import React, { useState, useEffect } from 'react';
import { UserProgress, loadUserProgress, updateUserProgress } from '../../utils/storage';

interface Character {
  id: string;
  name: string;
  ichorCost: number;
  type: 'common' | 'uncommon' | 'rare' | 'main';
  abilities: string[];
  researchBonus?: number; // Rodger特有
  unlockRequirements?: string[];
  priority: number; // 1-5, 5为最高优先级
}

// 角色优先级数据
const characterPriorities = [
  // 最高优先级 - 必须早期解锁
  { name: 'Rodger', ichorCost: 1000, priority: 5, reason: '2x research speed, essential for unlocking others' },
  { name: 'Poppy', ichorCost: 100, priority: 5, reason: 'Cheap starter with speed boost' },
  
  // 高优先级 - 主角色
  { name: 'Astro', ichorCost: 3000, priority: 4, reason: 'Main character with unique abilities' },
  { name: 'Vee', ichorCost: 4000, priority: 4, reason: 'Main character, requires Dandy run' },
  { name: 'Pebble', ichorCost: 4000, priority: 4, reason: 'Main character, high difficulty' },
  { name: 'Shelly', ichorCost: 3500, priority: 4, reason: 'Fast main character' },
  
  // 中等优先级 - 实用角色
  { name: 'Goob', ichorCost: 1200, priority: 3, reason: 'Pull ability, good for team play' },
  { name: 'Boxten', ichorCost: 200, priority: 3, reason: 'Fast machine completion' },
  { name: 'Tisha', ichorCost: 350, priority: 3, reason: 'Movement speed and cleaning' },
  
  // 较低优先级 - 特殊用途
  { name: 'Brightney', ichorCost: 800, priority: 2, reason: 'Light source, specific maps' },
  { name: 'Scraps', ichorCost: 1500, priority: 2, reason: 'Ranged attack, advanced players' },
  
  // 最低优先级 - 收藏用途
  { name: 'Shrimpo', ichorCost: 50, priority: 1, reason: 'Meme character, very weak' }
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

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-bg-card rounded-lg p-8 shadow-lg">
        <h2 className="text-2xl font-bold text-text-primary mb-6 text-center">
          Unlock Optimizer
        </h2>
        
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
              <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto">
                {characterPriorities.map((char) => (
                  <label key={char.name} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={ownedCharacters.includes(char.name)}
                      onChange={() => toggleCharacterOwnership(char.name)}
                      className="w-4 h-4 text-accent-main bg-bg-card border-gray-600 rounded"
                    />
                    <span className="text-sm text-text-primary">{char.name}</span>
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
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-accent-main">
                      {recommendation.target.ichorCost.toLocaleString()} Ichor
                    </span>
                    <span className={`px-3 py-1 rounded text-sm font-medium text-white ${getPriorityColor(recommendation.target.priority)}`}>
                      {getPriorityText(recommendation.target.priority)}
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
                            <span className="text-text-primary">{char.name}</span>
                            <span className={`px-2 py-1 rounded text-xs font-medium text-white ${getPriorityColor(char.priority)}`}>
                              {getPriorityText(char.priority)}
                            </span>
                          </div>
                          <span className="text-text-secondary">{char.ichorCost.toLocaleString()}</span>
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
                            <span className="text-text-primary">{char.name}</span>
                            <span className={`px-2 py-1 rounded text-xs font-medium text-white ${getPriorityColor(char.priority)}`}>
                              {getPriorityText(char.priority)}
                            </span>
                          </div>
                          <div className="text-right">
                            <div className="text-text-secondary">{char.ichorCost.toLocaleString()}</div>
                            <div className="text-xs text-text-secondary">{char.reason}</div>
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
