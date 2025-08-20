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

interface StrategyInput {
  currentIchor: number;
  ownedCharacters: string[];
  researchProgress: Record<string, number>; // twisted名称 -> 进度%
  gameGoal: 'fast_unlock' | 'main_chars' | 'completion' | 'efficiency';
}

interface StrategyStep {
  step: number;
  action: string;
  description: string;
  ichorNeeded?: number;
  floorsNeeded?: number;
  priority: 'critical' | 'high' | 'medium' | 'low';
  details?: any;
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

// 推荐算法逻辑
const getUnlockRecommendation = (currentIchor: number, ownedCharacters: string[]) => {
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

// 综合策略逻辑
const generateCombinedStrategy = (input: StrategyInput): StrategyStep[] => {
  const strategy: StrategyStep[] = [];
  
  // 步骤1: 检查是否有Rodger
  if (!input.ownedCharacters.includes('Rodger')) {
    strategy.push({
      step: 1,
      action: 'unlock_rodger',
      description: 'Unlock Rodger first for 2x research speed',
      ichorNeeded: Math.max(0, 1000 - input.currentIchor),
      priority: 'critical'
    });
  }
  
  // 步骤2: 研究进度优化
  const lowResearchTwisteds = Object.entries(input.researchProgress)
    .filter(([name, progress]) => progress < 100)
    .sort(([,a], [,b]) => a - b)
    .slice(0, 3);
  
  if (lowResearchTwisteds.length > 0) {
    strategy.push({
      step: 2,
      action: 'focus_research',
      description: `Focus research on: ${lowResearchTwisteds.map(([name]) => name).join(', ')}`,
      floorsNeeded: Math.ceil((100 - lowResearchTwisteds[0][1]) / (input.ownedCharacters.includes('Rodger') ? 10 : 5)),
      priority: 'high'
    });
  }
  
  // 步骤3: 下一个角色解锁建议
  const nextCharRecommendation = getUnlockRecommendation(input.currentIchor, input.ownedCharacters);
  strategy.push({
    step: 3,
    action: 'unlock_character',
    description: nextCharRecommendation.recommendation,
    details: nextCharRecommendation,
    priority: 'medium'
  });
  
  return strategy;
};

const CombinedStrategy: React.FC = () => {
  const [strategyInput, setStrategyInput] = useState<StrategyInput>({
    currentIchor: 500,
    ownedCharacters: [],
    researchProgress: {
      'Twisted Alice': 25,
      'Twisted Bob': 45,
      'Twisted Charlie': 10
    },
    gameGoal: 'efficiency'
  });

  const [strategy, setStrategy] = useState<StrategyStep[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [lastSaved, setLastSaved] = useState<string>('');

  // 加载保存的用户进度
  useEffect(() => {
    const savedProgress = loadUserProgress();
    if (savedProgress) {
      setStrategyInput(prev => ({
        ...prev,
        currentIchor: savedProgress.currentIchor,
        ownedCharacters: savedProgress.ownedCharacters,
        researchProgress: savedProgress.researchProgress
      }));
      setLastSaved(savedProgress.lastUpdated);
    }
  }, []);

  // 自动保存用户进度
  const saveProgress = () => {
    const progress: UserProgress = {
      ownedCharacters: strategyInput.ownedCharacters,
      currentIchor: strategyInput.currentIchor,
      researchProgress: strategyInput.researchProgress,
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
  }, [strategyInput.currentIchor, strategyInput.ownedCharacters, strategyInput.researchProgress]);

  const generateStrategy = async () => {
    setIsLoading(true);
    // 模拟API调用延迟
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const result = generateCombinedStrategy(strategyInput);
    setStrategy(result);
    setIsLoading(false);
  };

  const toggleCharacterOwnership = (characterName: string) => {
    setStrategyInput(prev => ({
      ...prev,
      ownedCharacters: prev.ownedCharacters.includes(characterName)
        ? prev.ownedCharacters.filter(name => name !== characterName)
        : [...prev.ownedCharacters, characterName]
    }));
  };

  const updateResearchProgress = (name: string, progress: number) => {
    setStrategyInput(prev => ({
      ...prev,
      researchProgress: {
        ...prev.researchProgress,
        [name]: progress
      }
    }));
  };

  const addResearchTarget = () => {
    const newName = `Twisted ${String.fromCharCode(65 + Object.keys(strategyInput.researchProgress).length)}`;
    setStrategyInput(prev => ({
      ...prev,
      researchProgress: {
        ...prev.researchProgress,
        [newName]: 0
      }
    }));
  };

  const removeResearchTarget = (name: string) => {
    const newProgress = { ...strategyInput.researchProgress };
    delete newProgress[name];
    setStrategyInput(prev => ({
      ...prev,
      researchProgress: newProgress
    }));
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'bg-red-600';
      case 'high': return 'bg-orange-600';
      case 'medium': return 'bg-yellow-600';
      case 'low': return 'bg-blue-600';
      default: return 'bg-gray-600';
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'critical': return '🚨';
      case 'high': return '⚡';
      case 'medium': return '📋';
      case 'low': return '💡';
      default: return '📝';
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-bg-card rounded-lg p-8 shadow-lg">
        <h2 className="text-2xl font-bold text-text-primary mb-6 text-center">
          Combined Strategy Planner
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
          {/* 左侧：策略配置 */}
          <div className="space-y-6">
            {/* 游戏目标 */}
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">
                Game Goal
              </label>
              <select
                value={strategyInput.gameGoal}
                onChange={(e) => setStrategyInput(prev => ({ ...prev, gameGoal: e.target.value as any }))}
                className="w-full px-4 py-3 bg-bg-secondary border border-gray-600 rounded-lg text-text-primary focus:ring-2 focus:ring-accent-main focus:border-transparent"
              >
                <option value="efficiency">Efficiency Focus</option>
                <option value="fast_unlock">Fast Unlock</option>
                <option value="main_chars">Main Characters</option>
                <option value="completion">Completion</option>
              </select>
            </div>

            {/* 当前Ichor数量 */}
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">
                Current Ichor: {strategyInput.currentIchor.toLocaleString()}
              </label>
              <input
                type="range"
                min="0"
                max="10000"
                step="100"
                value={strategyInput.currentIchor}
                onChange={(e) => setStrategyInput(prev => ({ ...prev, currentIchor: parseInt(e.target.value) }))}
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
              <div className="grid grid-cols-2 gap-2 max-h-32 overflow-y-auto">
                {characterPriorities.map((char) => (
                  <label key={char.name} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={strategyInput.ownedCharacters.includes(char.name)}
                      onChange={() => toggleCharacterOwnership(char.name)}
                      className="w-4 h-4 text-accent-main bg-bg-card border-gray-600 rounded"
                    />
                    <span className="text-sm text-text-primary">{char.name}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* 研究进度 */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-text-primary">Research Progress</h3>
                <button
                  onClick={addResearchTarget}
                  className="px-3 py-1 bg-accent-main text-white rounded text-sm hover:bg-accent-main/80 transition-colors"
                >
                  Add Target
                </button>
              </div>
              <div className="space-y-3">
                {Object.entries(strategyInput.researchProgress).map(([name, progress]) => (
                  <div key={name} className="bg-bg-secondary rounded-lg p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-text-primary">{name}</span>
                      <button
                        onClick={() => removeResearchTarget(name)}
                        className="px-2 py-1 bg-red-600 text-white rounded text-xs hover:bg-red-700 transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                    <div className="flex items-center space-x-3">
                      <input
                        type="range"
                        min="0"
                        max="100"
                        step="5"
                        value={progress}
                        onChange={(e) => updateResearchProgress(name, parseInt(e.target.value))}
                        className="flex-1 h-2 bg-bg-card rounded-lg appearance-none cursor-pointer slider"
                      />
                      <span className="text-sm text-text-secondary w-12 text-right">{progress}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={generateStrategy}
              disabled={isLoading}
              className="w-full px-6 py-3 bg-accent-main text-white rounded-lg hover:bg-accent-main/80 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
            >
              {isLoading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Generating Strategy...</span>
                </div>
              ) : (
                'Generate Strategy'
              )}
            </button>
          </div>

          {/* 右侧：策略建议 */}
          <div className="bg-bg-secondary rounded-lg p-6">
            <h3 className="text-lg font-semibold text-text-primary mb-4">Strategy Recommendations</h3>
            
            {strategy.length > 0 ? (
              <div className="space-y-4">
                {strategy.map((step, index) => (
                  <div key={index} className="bg-bg-card rounded-lg p-4 border-l-4 border-accent-main">
                    <div className="flex items-start space-x-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm ${getPriorityColor(step.priority)}`}>
                        {getPriorityIcon(step.priority)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="text-sm font-medium text-accent-main">Step {step.step}</span>
                          <span className={`px-2 py-1 rounded text-xs font-medium text-white ${getPriorityColor(step.priority)}`}>
                            {step.priority.toUpperCase()}
                          </span>
                        </div>
                        <div className="text-text-primary mb-2">{step.description}</div>
                        
                        {step.ichorNeeded !== undefined && step.ichorNeeded > 0 && (
                          <div className="text-sm text-text-secondary">
                            Need {step.ichorNeeded.toLocaleString()} more Ichor
                          </div>
                        )}
                        
                        {step.floorsNeeded !== undefined && (
                          <div className="text-sm text-text-secondary">
                            Need {step.floorsNeeded} research floors
                          </div>
                        )}
                        
                        {step.details && step.details.target && (
                          <div className="mt-2 p-2 bg-bg-secondary rounded text-xs">
                            <div className="text-text-primary font-medium">{step.details.target.name}</div>
                            <div className="text-text-secondary">{step.details.target.reason}</div>
                            <div className="text-accent-main">{step.details.target.ichorCost.toLocaleString()} Ichor</div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-text-secondary text-center py-8">
                Configure your strategy inputs and click "Generate Strategy" to see recommendations
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CombinedStrategy;
