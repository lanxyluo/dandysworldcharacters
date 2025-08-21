import React, { useState } from 'react';
import { 
  IntelligentRecommendation, 
  BuildComparison as BuildComparisonType,
  ComparisonMetric 
} from '../../types/trinketOptimizer';

interface BuildComparisonProps {
  builds: IntelligentRecommendation[];
  onClose: () => void;
}

const BuildComparison: React.FC<BuildComparisonProps> = ({ builds, onClose }) => {
  const [selectedMetrics, setSelectedMetrics] = useState<string[]>([
    'overall', 'damage', 'survival', 'utility', 'teamSupport', 'soloPlay', 'highFloor'
  ]);
  const [sortBy, setSortBy] = useState<string>('overall');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  // 生成比较指标
  const generateComparisonMetrics = (): ComparisonMetric[] => {
    const metrics: ComparisonMetric[] = [];
    
    // 基础效果指标
    const effectMetrics = [
      { name: 'overall', label: '总体效果', unit: '★', weight: 1.0 },
      { name: 'damage', label: '伤害能力', unit: '★', weight: 0.8 },
      { name: 'survival', label: '生存能力', unit: '★', weight: 0.9 },
      { name: 'utility', label: '实用价值', unit: '★', weight: 0.7 },
      { name: 'teamSupport', label: '团队支援', unit: '★', weight: 0.6 },
      { name: 'soloPlay', label: '单人游戏', unit: '★', weight: 0.8 },
      { name: 'highFloor', label: '高楼层表现', unit: '★', weight: 0.9 }
    ];

    effectMetrics.forEach(metric => {
      if (selectedMetrics.includes(metric.name)) {
        const values: { [buildId: string]: number } = {};
        builds.forEach(build => {
          values[build.id] = build.effectiveness[metric.name as keyof typeof build.effectiveness] as number;
        });
        
        metrics.push({
          name: metric.name,
          label: metric.label,
          unit: metric.unit,
          weight: metric.weight,
          values
        });
      }
    });

    // 元数据指标
    if (selectedMetrics.includes('meta')) {
      metrics.push({
        name: 'meta',
        label: '元数据评分',
        unit: '★',
        weight: 0.7,
        values: builds.reduce((acc, build) => {
          const metaScore = (build.metaAnalysis.popularity + build.metaAnalysis.winRate) / 20;
          acc[build.id] = Math.min(5, metaScore);
          return acc;
        }, {} as { [buildId: string]: number })
      });
    }

    // 获取难度指标
    if (selectedMetrics.includes('acquisition')) {
      metrics.push({
        name: 'acquisition',
        label: '获取难度',
        unit: '★',
        weight: 0.5,
        values: builds.reduce((acc, build) => {
          const difficultyMap = { 'beginner': 5, 'intermediate': 3, 'advanced': 1 };
          acc[build.id] = difficultyMap[build.difficulty];
          return acc;
        }, {} as { [buildId: string]: number })
      });
    }

    return metrics;
  };

  // 计算加权总分
  const calculateWeightedScore = (build: IntelligentRecommendation): number => {
    const metrics = generateComparisonMetrics();
    let totalScore = 0;
    let totalWeight = 0;

    metrics.forEach(metric => {
      const value = metric.values[build.id] || 0;
      totalScore += value * metric.weight;
      totalWeight += metric.weight;
    });

    return totalWeight > 0 ? totalScore / totalWeight : 0;
  };

  // 排序构建
  const sortedBuilds = [...builds].sort((a, b) => {
    const aScore = calculateWeightedScore(a);
    const bScore = calculateWeightedScore(b);
    
    if (sortOrder === 'asc') {
      return aScore - bScore;
    } else {
      return bScore - aScore;
    }
  });

  // 确定获胜构建
  const winner = sortedBuilds[0];

  // 生成分析报告
  const generateAnalysis = (): string => {
    if (builds.length < 2) return '需要至少两个构建进行比较';
    
    const topBuild = sortedBuilds[0];
    const secondBuild = sortedBuilds[1];
    const topScore = calculateWeightedScore(topBuild);
    const secondScore = calculateWeightedScore(secondBuild);
    
    let analysis = `${topBuild.name} 以 ${topScore.toFixed(2)} 分获得最高评分。`;
    
    if (topScore - secondScore > 1) {
      analysis += ` 相比第二名 ${secondBuild.name} (${secondScore.toFixed(2)}分) 有显著优势。`;
    } else if (topScore - secondScore > 0.5) {
      analysis += ` 相比第二名 ${secondBuild.name} (${secondScore.toFixed(2)}分) 有轻微优势。`;
    } else {
      analysis += ` 与第二名 ${secondBuild.name} (${secondScore.toFixed(2)}分) 表现相近。`;
    }

    // 分析各构建的优缺点
    analysis += `\n\n${topBuild.name} 的优势：`;
    const topStrengths = topBuild.metaAnalysis.strengths.slice(0, 3);
    analysis += topStrengths.join('、');

    if (topBuild.metaAnalysis.weaknesses.length > 0) {
      analysis += `\n\n需要注意的弱点：${topBuild.metaAnalysis.weaknesses.slice(0, 2).join('、')}`;
    }

    return analysis;
  };

  // 渲染指标选择器
  const renderMetricSelector = () => {
    const allMetrics = [
      { name: 'overall', label: '总体效果' },
      { name: 'damage', label: '伤害能力' },
      { name: 'survival', label: '生存能力' },
      { name: 'utility', label: '实用价值' },
      { name: 'teamSupport', label: '团队支援' },
      { name: 'soloPlay', label: '单人游戏' },
      { name: 'highFloor', label: '高楼层表现' },
      { name: 'meta', label: '元数据评分' },
      { name: 'acquisition', label: '获取难度' }
    ];

    return (
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
          📊 选择比较指标
        </h3>
        <div className="flex flex-wrap gap-2">
          {allMetrics.map(metric => (
            <label key={metric.name} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedMetrics.includes(metric.name)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedMetrics([...selectedMetrics, metric.name]);
                  } else {
                    setSelectedMetrics(selectedMetrics.filter(m => m !== metric.name));
                  }
                }}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">
                {metric.label}
              </span>
            </label>
          ))}
        </div>
      </div>
    );
  };

  // 渲染排序控制
  const renderSortControls = () => {
    const sortOptions = [
      { value: 'overall', label: '总体效果' },
      { value: 'damage', label: '伤害能力' },
      { value: 'survival', label: '生存能力' },
      { value: 'utility', label: '实用价值' },
      { value: 'weighted', label: '加权总分' }
    ];

    return (
      <div className="mb-6 flex flex-wrap items-center gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            排序依据
          </label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {sortOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            排序顺序
          </label>
          <div className="flex">
            <button
              onClick={() => setSortOrder('desc')}
              className={`px-3 py-2 text-sm font-medium rounded-l-md border ${
                sortOrder === 'desc'
                  ? 'bg-blue-500 text-white border-blue-500'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600'
              }`}
            >
              降序
            </button>
            <button
              onClick={() => setSortOrder('asc')}
              className={`px-3 py-2 text-sm font-medium rounded-r-md border-t border-r border-b ${
                sortOrder === 'asc'
                  ? 'bg-blue-500 text-white border-blue-500'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600'
              }`}
            >
              升序
            </button>
          </div>
        </div>
      </div>
    );
  };

  // 渲染比较表格
  const renderComparisonTable = () => {
    const metrics = generateComparisonMetrics();

    return (
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                构建
              </th>
              {metrics.map(metric => (
                <th key={metric.name} className="px-4 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  {metric.label}
                  <div className="text-xs text-gray-400">权重: {metric.weight}</div>
                </th>
              ))}
              <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                加权总分
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {sortedBuilds.map((build, index) => (
              <tr key={build.id} className={`${index === 0 ? 'bg-yellow-50 dark:bg-yellow-900/20' : ''}`}>
                <td className="px-4 py-4">
                  <div className="flex items-center space-x-3">
                    {index === 0 && (
                      <span className="text-yellow-500 text-lg">🥇</span>
                    )}
                    <div>
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        {build.name}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {build.difficulty} • {build.metaAnalysis.tier} Tier
                      </div>
                    </div>
                  </div>
                </td>
                
                {metrics.map(metric => (
                  <td key={metric.name} className="px-4 py-4 text-center">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      {metric.values[build.id]?.toFixed(1) || '0.0'}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {metric.unit}
                    </div>
                  </td>
                ))}
                
                <td className="px-4 py-4 text-center">
                  <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                    {calculateWeightedScore(build).toFixed(2)}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  // 渲染获胜构建详情
  const renderWinnerDetails = () => {
    if (!winner) return null;

    return (
      <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 mb-6">
        <div className="flex items-center space-x-3 mb-4">
          <span className="text-4xl">🏆</span>
          <div>
            <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200">
              获胜构建: {winner.name}
            </h3>
            <p className="text-yellow-700 dark:text-yellow-300">
              加权总分: {calculateWeightedScore(winner).toFixed(2)}
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {winner.effectiveness.overall}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">总体效果</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">
              {winner.confidence}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">置信度</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
              {winner.metaAnalysis.tier}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">元数据等级</div>
          </div>
        </div>
      </div>
    );
  };

  // 渲染分析报告
  const renderAnalysis = () => {
    return (
      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-6">
        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-200 mb-3">
          📋 分析报告
        </h3>
        <div className="text-blue-800 dark:text-blue-200 whitespace-pre-line">
          {generateAnalysis()}
        </div>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-7xl w-full max-h-[90vh] overflow-y-auto">
        {/* 头部 */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            🔍 构建比较分析
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
          {/* 指标选择器 */}
          {renderMetricSelector()}

          {/* 排序控制 */}
          {renderSortControls()}

          {/* 获胜构建详情 */}
          {renderWinnerDetails()}

          {/* 分析报告 */}
          {renderAnalysis()}

          {/* 比较表格 */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              📊 详细对比
            </h3>
            {renderComparisonTable()}
          </div>

          {/* 操作按钮 */}
          <div className="flex justify-end space-x-3">
            <button
              onClick={() => {
                // 导出比较结果
                const comparisonData = {
                  builds: sortedBuilds.map(build => ({
                    name: build.name,
                    score: calculateWeightedScore(build),
                    effectiveness: build.effectiveness,
                    metaAnalysis: build.metaAnalysis
                  })),
                  winner: winner?.name,
                  analysis: generateAnalysis(),
                  timestamp: new Date().toISOString()
                };
                
                const blob = new Blob([JSON.stringify(comparisonData, null, 2)], {
                  type: 'application/json'
                });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'build-comparison.json';
                a.click();
                URL.revokeObjectURL(url);
              }}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
            >
              📥 导出结果
            </button>
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

export default BuildComparison;
