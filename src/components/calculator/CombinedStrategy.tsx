import React, { useState } from 'react';

interface StrategyData {
  researchGoals: string[];
  unlockGoals: string[];
  timeAvailable: number; // hours per day
  priority: 'research' | 'unlock' | 'balanced';
}

interface StrategyRecommendation {
  dailyPlan: string[];
  weeklyGoals: string[];
  estimatedCompletion: string;
  tips: string[];
}

const CombinedStrategy: React.FC = () => {
  const [strategyData, setStrategyData] = useState<StrategyData>({
    researchGoals: ['Twisted Alice', 'Twisted Bob'],
    unlockGoals: ['Character A', 'Character B'],
    timeAvailable: 2,
    priority: 'balanced'
  });

  const [recommendation, setRecommendation] = useState<StrategyRecommendation | null>(null);

  const generateStrategy = () => {
    const { researchGoals, unlockGoals, timeAvailable, priority } = strategyData;
    
    let dailyPlan: string[] = [];
    let weeklyGoals: string[] = [];
    let estimatedCompletion = '';
    let tips: string[] = [];

    if (priority === 'research') {
      dailyPlan = [
        `Focus on research progress for ${researchGoals[0] || 'selected character'}`,
        `Complete 3-5 research floors daily`,
        'Use Rodger when available for 2x progress',
        'Save unlock resources for later'
      ];
      weeklyGoals = [
        `Complete research for ${researchGoals[0] || 'primary character'}`,
        'Achieve 25-30% weekly research progress',
        'Plan next research target'
      ];
      estimatedCompletion = '2-3 weeks for primary research goal';
      tips = [
        'Prioritize characters with highest research progress',
        'Use research capsules strategically',
        'Focus on one character at a time for efficiency'
      ];
    } else if (priority === 'unlock') {
      dailyPlan = [
        `Save resources for ${unlockGoals[0] || 'target character'}`,
        'Complete daily missions for extra resources',
        'Focus on resource farming activities',
        'Minimize research activities temporarily'
      ];
      weeklyGoals = [
        `Unlock ${unlockGoals[0] || 'primary character'}`,
        'Achieve 80% of unlock cost',
        'Plan resource allocation strategy'
      ];
      estimatedCompletion = '1-2 weeks for primary unlock goal';
      tips = [
        'Focus on high-priority characters first',
        'Use resource boosters when available',
        'Complete all daily missions for maximum resources'
      ];
    } else {
      // balanced strategy
      dailyPlan = [
        `Split time: 60% research, 40% unlock preparation`,
        `Research progress for ${researchGoals[0] || 'primary character'}`,
        `Save resources for ${unlockGoals[0] || 'target character'}`,
        'Complete daily missions and research floors'
      ];
      weeklyGoals = [
        `Achieve 15-20% research progress`,
        'Save 40-50% of weekly unlock cost',
        'Maintain balanced progression'
      ];
      estimatedCompletion = '3-4 weeks for balanced goals';
      tips = [
        'Alternate between research and unlock focus days',
        'Use weekends for intensive research sessions',
        'Plan resource spending carefully to maintain balance'
      ];
    }

    // Adjust based on time available
    if (timeAvailable < 1) {
      dailyPlan = dailyPlan.map(plan => plan + ' (reduced scope)');
      tips.push('Consider focusing on one goal due to limited time');
    } else if (timeAvailable > 4) {
      dailyPlan.push('Use extra time for additional progress');
      tips.push('Take advantage of extra time for faster completion');
    }

    setRecommendation({
      dailyPlan,
      weeklyGoals,
      estimatedCompletion,
      tips
    });
  };

  const addGoal = (type: 'research' | 'unlock') => {
    const newGoal = `New ${type === 'research' ? 'Research' : 'Unlock'} Goal`;
    if (type === 'research') {
      setStrategyData(prev => ({
        ...prev,
        researchGoals: [...prev.researchGoals, newGoal]
      }));
    } else {
      setStrategyData(prev => ({
        ...prev,
        unlockGoals: [...prev.unlockGoals, newGoal]
      }));
    }
  };

  const removeGoal = (type: 'research' | 'unlock', index: number) => {
    if (type === 'research') {
      setStrategyData(prev => ({
        ...prev,
        researchGoals: prev.researchGoals.filter((_, i) => i !== index)
      }));
    } else {
      setStrategyData(prev => ({
        ...prev,
        unlockGoals: prev.unlockGoals.filter((_, i) => i !== index)
      }));
    }
  };

  const updateGoal = (type: 'research' | 'unlock', index: number, value: string) => {
    if (type === 'research') {
      const newGoals = [...strategyData.researchGoals];
      newGoals[index] = value;
      setStrategyData(prev => ({ ...prev, researchGoals: newGoals }));
    } else {
      const newGoals = [...strategyData.unlockGoals];
      newGoals[index] = value;
      setStrategyData(prev => ({ ...prev, unlockGoals: newGoals }));
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-bg-card rounded-lg p-8 shadow-lg">
        <h2 className="text-2xl font-bold text-text-primary mb-6 text-center">
          Combined Strategy Planner
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 左侧：策略配置 */}
          <div className="space-y-6">
            {/* 优先级选择 */}
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">
                Strategy Priority
              </label>
              <select
                value={strategyData.priority}
                onChange={(e) => setStrategyData(prev => ({ ...prev, priority: e.target.value as any }))}
                className="w-full px-4 py-3 bg-bg-secondary border border-gray-600 rounded-lg text-text-primary focus:ring-2 focus:ring-accent-main focus:border-transparent"
              >
                <option value="balanced">Balanced Approach</option>
                <option value="research">Research Focus</option>
                <option value="unlock">Unlock Focus</option>
              </select>
            </div>

            {/* 每日可用时间 */}
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">
                Daily Time Available: {strategyData.timeAvailable} hours
              </label>
              <input
                type="range"
                min="0.5"
                max="8"
                step="0.5"
                value={strategyData.timeAvailable}
                onChange={(e) => setStrategyData(prev => ({ ...prev, timeAvailable: parseFloat(e.target.value) }))}
                className="w-full h-2 bg-bg-secondary rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-xs text-text-secondary mt-1">
                <span>0.5h</span>
                <span>4h</span>
                <span>8h</span>
              </div>
            </div>

            {/* 研究目标 */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-text-primary">Research Goals</h3>
                <button
                  onClick={() => addGoal('research')}
                  className="px-3 py-1 bg-accent-main text-white rounded text-sm hover:bg-accent-main/80 transition-colors"
                >
                  Add Goal
                </button>
              </div>
              <div className="space-y-2">
                {strategyData.researchGoals.map((goal, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <input
                      type="text"
                      value={goal}
                      onChange={(e) => updateGoal('research', index, e.target.value)}
                      className="flex-1 px-3 py-2 bg-bg-secondary border border-gray-600 rounded text-text-primary"
                    />
                    <button
                      onClick={() => removeGoal('research', index)}
                      className="px-2 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700 transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* 解锁目标 */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-text-primary">Unlock Goals</h3>
                <button
                  onClick={() => addGoal('unlock')}
                  className="px-3 py-1 bg-accent-main text-white rounded text-sm hover:bg-accent-main/80 transition-colors"
                >
                  Add Goal
                </button>
              </div>
              <div className="space-y-2">
                {strategyData.unlockGoals.map((goal, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <input
                      type="text"
                      value={goal}
                      onChange={(e) => updateGoal('unlock', index, e.target.value)}
                      className="flex-1 px-3 py-2 bg-bg-secondary border border-gray-600 rounded text-text-primary"
                    />
                    <button
                      onClick={() => removeGoal('unlock', index)}
                      className="px-2 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700 transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={generateStrategy}
              className="w-full px-6 py-3 bg-accent-main text-white rounded-lg hover:bg-accent-main/80 transition-colors font-medium"
            >
              Generate Strategy
            </button>
          </div>

          {/* 右侧：策略建议 */}
          <div className="bg-bg-secondary rounded-lg p-6">
            <h3 className="text-lg font-semibold text-text-primary mb-4">Strategy Recommendations</h3>
            
            {recommendation ? (
              <div className="space-y-6">
                {/* 每日计划 */}
                <div>
                  <h4 className="font-medium text-text-primary mb-3">Daily Plan:</h4>
                  <div className="space-y-2">
                    {recommendation.dailyPlan.map((plan, index) => (
                      <div key={index} className="flex items-start space-x-3 bg-bg-card rounded-lg p-3">
                        <span className="w-5 h-5 bg-accent-main text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                          {index + 1}
                        </span>
                        <span className="text-sm text-text-primary">{plan}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 每周目标 */}
                <div>
                  <h4 className="font-medium text-text-primary mb-3">Weekly Goals:</h4>
                  <div className="space-y-2">
                    {recommendation.weeklyGoals.map((goal, index) => (
                      <div key={index} className="flex items-start space-x-3 bg-bg-card rounded-lg p-3">
                        <span className="w-5 h-5 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                          {index + 1}
                        </span>
                        <span className="text-sm text-text-primary">{goal}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 预计完成时间 */}
                <div className="bg-bg-card rounded-lg p-4">
                  <div className="text-lg font-semibold text-accent-main mb-2">
                    {recommendation.estimatedCompletion}
                  </div>
                  <div className="text-sm text-text-secondary">Estimated Completion</div>
                </div>

                {/* 提示和建议 */}
                <div>
                  <h4 className="font-medium text-text-primary mb-3">Tips & Recommendations:</h4>
                  <div className="space-y-2">
                    {recommendation.tips.map((tip, index) => (
                      <div key={index} className="flex items-start space-x-3 bg-bg-card rounded-lg p-3">
                        <span className="w-5 h-5 bg-yellow-600 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                          💡
                        </span>
                        <span className="text-sm text-text-primary">{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-text-secondary text-center py-8">
                Configure your strategy and click "Generate Strategy" to see recommendations
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CombinedStrategy;
