import React, { useState, useEffect } from 'react';
import { 
  IntelligentRecommendation, 
  BuildSimulationResult 
} from '../../types/trinketOptimizer';

interface BuildSimulatorProps {
  build: IntelligentRecommendation;
  onClose: () => void;
}

const BuildSimulator: React.FC<BuildSimulatorProps> = ({ build, onClose }) => {
  const [simulationResult, setSimulationResult] = useState<BuildSimulationResult | null>(null);
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationSettings, setSimulationSettings] = useState({
    floorLevel: 10,
    enemyCount: 3,
    teamSize: 4,
    difficulty: 'normal' as 'easy' | 'normal' | 'hard' | 'nightmare'
  });

  // 模拟构建效果
  const simulateBuild = async () => {
    setIsSimulating(true);
    
    // 模拟计算延迟
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // 基于构建属性计算模拟结果
    const result = calculateSimulationResult();
    setSimulationResult(result);
    setIsSimulating(false);
  };

  // 计算模拟结果
  const calculateSimulationResult = (): BuildSimulationResult => {
    const { floorLevel, enemyCount, teamSize, difficulty } = simulationSettings;
    
    // 基础成功率计算
    let baseSuccessRate = 50;
    
    // 基于效果评分调整
    baseSuccessRate += build.effectiveness.overall * 8;
    baseSuccessRate += build.effectiveness.survival * 6;
    baseSuccessRate += build.effectiveness.utility * 4;
    
    // 基于楼层调整
    if (floorLevel > 15) baseSuccessRate -= 20;
    else if (floorLevel > 10) baseSuccessRate -= 10;
    
    // 基于敌人数量调整
    baseSuccessRate -= (enemyCount - 2) * 5;
    
    // 基于团队大小调整
    if (teamSize > 1) {
      baseSuccessRate += build.effectiveness.teamSupport * 3;
    }
    
    // 基于难度调整
    const difficultyMultiplier = {
      'easy': 1.2,
      'normal': 1.0,
      'hard': 0.8,
      'nightmare': 0.6
    };
    baseSuccessRate *= difficultyMultiplier[difficulty];
    
    // 确保成功率在合理范围内
    baseSuccessRate = Math.max(5, Math.min(95, baseSuccessRate));
    
    // 计算威胁等级
    let threatLevel = 'Low';
    if (baseSuccessRate < 30) threatLevel = 'Extreme';
    else if (baseSuccessRate < 50) threatLevel = 'High';
    else if (baseSuccessRate < 70) threatLevel = 'Medium';
    
    // 计算平均时间
    let averageTime = 300; // 5分钟基础时间
    if (build.effectiveness.utility > 3) averageTime -= 60;
    if (build.effectiveness.speed > 3) averageTime -= 45;
    if (enemyCount > 3) averageTime += 120;
    if (floorLevel > 15) averageTime += 180;
    
    // 生成策略建议
    const strategies = generateStrategies();
    
    // 识别弱点
    const weaknesses = identifyWeaknesses();
    
    // 生成改进建议
    const recommendations = generateRecommendations();
    
    return {
      buildId: build.id,
      threatLevel,
      successRate: Math.round(baseSuccessRate),
      averageTime: Math.round(averageTime),
      strategies,
      weaknesses,
      recommendations
    };
  };

  // 生成策略建议
  const generateStrategies = (): string[] => {
    const strategies: string[] = [];
    
    if (build.effectiveness.stealth > 3) {
      strategies.push('利用隐身能力进行潜行，避免直接冲突');
    }
    
    if (build.effectiveness.speed > 3) {
      strategies.push('利用高移动速度快速完成任务并逃脱');
    }
    
    if (build.effectiveness.teamSupport > 3) {
      strategies.push('与队友保持紧密配合，发挥团队优势');
    }
    
    if (build.effectiveness.extractionSpeed > 3) {
      strategies.push('专注于快速完成提取目标');
    }
    
    if (build.effectiveness.damage > 3) {
      strategies.push('在必要时主动出击，清除威胁');
    }
    
    if (strategies.length === 0) {
      strategies.push('采用平衡策略，根据情况灵活调整');
    }
    
    return strategies.slice(0, 4);
  };

  // 识别弱点
  const identifyWeaknesses = (): string[] => {
    const weaknesses: string[] = [];
    
    if (build.effectiveness.survival < 2.5) {
      weaknesses.push('生存能力较弱，需要避免长时间战斗');
    }
    
    if (build.effectiveness.utility < 2.5) {
      weaknesses.push('实用价值有限，在某些情况下可能表现不佳');
    }
    
    if (build.effectiveness.teamSupport < 2.5) {
      weaknesses.push('团队支援能力不足，不适合团队作战');
    }
    
    if (build.effectiveness.soloPlay < 2.5) {
      weaknesses.push('单人游戏能力有限，建议组队游戏');
    }
    
    if (weaknesses.length === 0) {
      weaknesses.push('无明显弱点，构建较为平衡');
    }
    
    return weaknesses.slice(0, 3);
  };

  // 生成改进建议
  const generateRecommendations = (): string[] => {
    const recommendations: string[] = [];
    
    if (build.effectiveness.survival < 3) {
      recommendations.push('考虑添加更多生存型饰品，提升生存能力');
    }
    
    if (build.effectiveness.utility < 3) {
      recommendations.push('可以增加一些实用型饰品，提升适应性');
    }
    
    if (build.effectiveness.teamSupport < 3 && simulationSettings.teamSize > 1) {
      recommendations.push('团队游戏中建议使用更多支援型饰品');
    }
    
    if (build.effectiveness.soloPlay < 3 && simulationSettings.teamSize === 1) {
      recommendations.push('单人游戏时建议使用更多自给自足的饰品');
    }
    
    if (recommendations.length === 0) {
      recommendations.push('当前构建已经很优秀，可以尝试更高难度的挑战');
    }
    
    return recommendations.slice(0, 3);
  };

  // 渲染威胁等级指示器
  const renderThreatLevel = (level: string) => {
    const colors = {
      'Low': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      'Medium': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
      'High': 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
      'Extreme': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
    };
    
    const icons = {
      'Low': '🟢',
      'Medium': '🟡',
      'High': '🟠',
      'Extreme': '🔴'
    };
    
    return (
      <span className={`px-3 py-1 rounded-full text-sm font-medium ${colors[level as keyof typeof colors]}`}>
        {icons[level as keyof typeof icons]} {level} 威胁
      </span>
    );
  };

  // 渲染成功率条
  const renderSuccessRateBar = (rate: number) => {
    const getColor = (rate: number) => {
      if (rate >= 80) return 'bg-green-500';
      if (rate >= 60) return 'bg-yellow-500';
      if (rate >= 40) return 'bg-orange-500';
      return 'bg-red-500';
    };
    
    return (
      <div className="w-full">
        <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
          <span>成功率</span>
          <span>{rate}%</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
          <div 
            className={`h-3 rounded-full transition-all duration-1000 ${getColor(rate)}`}
            style={{ width: `${rate}%` }}
          />
        </div>
      </div>
    );
  };

  // 渲染模拟设置
  const renderSimulationSettings = () => {
    return (
      <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          ⚙️ 模拟设置
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* 楼层等级 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              楼层等级
            </label>
            <select
              value={simulationSettings.floorLevel}
              onChange={(e) => setSimulationSettings({
                ...simulationSettings,
                floorLevel: parseInt(e.target.value)
              })}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {[5, 10, 15, 20, 25, 30].map(level => (
                <option key={level} value={level}>
                  {level} 层
                </option>
              ))}
            </select>
          </div>
          
          {/* 敌人数量 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              敌人数量
            </label>
            <select
              value={simulationSettings.enemyCount}
              onChange={(e) => setSimulationSettings({
                ...simulationSettings,
                enemyCount: parseInt(e.target.value)
              })}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {[1, 2, 3, 4, 5, 6].map(count => (
                <option key={count} value={count}>
                  {count} 个
                </option>
              ))}
            </select>
          </div>
          
          {/* 团队大小 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              团队大小
            </label>
            <select
              value={simulationSettings.teamSize}
              onChange={(e) => setSimulationSettings({
                ...simulationSettings,
                teamSize: parseInt(e.target.value)
              })}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {[1, 2, 3, 4].map(size => (
                <option key={size} value={size}>
                  {size} 人
                </option>
              ))}
            </select>
          </div>
          
          {/* 难度等级 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              难度等级
            </label>
            <select
              value={simulationSettings.difficulty}
              onChange={(e) => setSimulationSettings({
                ...simulationSettings,
                difficulty: e.target.value as any
              })}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="easy">简单</option>
              <option value="normal">普通</option>
              <option value="hard">困难</option>
              <option value="nightmare">噩梦</option>
            </select>
          </div>
        </div>
        
        <div className="mt-4 text-center">
          <button
            onClick={simulateBuild}
            disabled={isSimulating}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors font-medium"
          >
            {isSimulating ? '🔄 模拟中...' : '🚀 开始模拟'}
          </button>
        </div>
      </div>
    );
  };

  // 渲染模拟结果
  const renderSimulationResult = () => {
    if (!simulationResult) return null;
    
    return (
      <div className="space-y-6">
        {/* 主要指标 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-red-600 dark:text-red-400 mb-2">
              {renderThreatLevel(simulationResult.threatLevel)}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              威胁等级评估
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
              {simulationResult.successRate}%
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              预计成功率
            </div>
            {renderSuccessRateBar(simulationResult.successRate)}
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              {Math.round(simulationResult.averageTime / 60)} 分钟
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              预计完成时间
            </div>
          </div>
        </div>
        
        {/* 策略建议 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            🎯 推荐策略
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {simulationResult.strategies.map((strategy, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <span className="text-green-500 text-lg">💡</span>
                <span className="text-green-800 dark:text-green-200">{strategy}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* 弱点分析 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            ⚠️ 潜在弱点
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {simulationResult.weaknesses.map((weakness, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                <span className="text-red-500 text-lg">⚠</span>
                <span className="text-red-800 dark:text-red-200">{weakness}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* 改进建议 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            🔧 改进建议
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {simulationResult.recommendations.map((recommendation, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <span className="text-blue-500 text-lg">🔧</span>
                <span className="text-blue-800 dark:text-blue-200">{recommendation}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        {/* 头部 */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            🎮 构建模拟器 - {build.name}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* 内容 */}
        <div className="p-6">
          {/* 构建信息 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-200 mb-3">
              📋 构建信息
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <div className="text-sm text-blue-700 dark:text-blue-300">总体效果</div>
                <div className="text-lg font-bold text-blue-800 dark:text-blue-200">
                  {build.effectiveness.overall}/5
                </div>
              </div>
              <div>
                <div className="text-sm text-blue-700 dark:text-blue-300">置信度</div>
                <div className="text-lg font-bold text-blue-800 dark:text-blue-200">
                  {build.confidence}/5
                </div>
              </div>
              <div>
                <div className="text-sm text-blue-700 dark:text-blue-300">难度等级</div>
                <div className="text-lg font-bold text-blue-800 dark:text-blue-200 capitalize">
                  {build.difficulty}
                </div>
              </div>
            </div>
          </div>

          {/* 模拟设置 */}
          {renderSimulationSettings()}

          {/* 模拟结果 */}
          {simulationResult && renderSimulationResult()}

          {/* 操作按钮 */}
          <div className="flex justify-end space-x-3 mt-6">
            {simulationResult && (
              <button
                onClick={() => {
                  // 导出模拟结果
                  const exportData = {
                    build: build.name,
                    settings: simulationSettings,
                    result: simulationResult,
                    timestamp: new Date().toISOString()
                  };
                  
                  const blob = new Blob([JSON.stringify(exportData, null, 2)], {
                    type: 'application/json'
                  });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = 'build-simulation.json';
                  a.click();
                  URL.revokeObjectURL(url);
                }}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
              >
                📥 导出结果
              </button>
            )}
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
            >
              关闭
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildSimulator;
