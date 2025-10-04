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

  // Generate comparison metrics
  const generateComparisonMetrics = (): ComparisonMetric[] => {
    const metrics: ComparisonMetric[] = [];
    
    // Basic effectiveness metrics
    const effectMetrics = [
      { name: 'overall', label: 'Overall Effect', unit: '★', weight: 1.0 },
      { name: 'damage', label: 'Damage', unit: '★', weight: 0.8 },
      { name: 'survival', label: 'Survival', unit: '★', weight: 0.9 },
      { name: 'utility', label: 'Utility', unit: '★', weight: 0.7 },
      { name: 'teamSupport', label: 'Team Support', unit: '★', weight: 0.6 },
      { name: 'soloPlay', label: 'Solo Play', unit: '★', weight: 0.8 },
      { name: 'highFloor', label: 'High Floor', unit: '★', weight: 0.9 }
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

    // Additional metrics
    if (selectedMetrics.includes('confidence')) {
      const values: { [buildId: string]: number } = {};
      builds.forEach(build => {
        values[build.id] = build.confidence;
      });
      metrics.push({
        name: 'confidence',
        label: 'Confidence',
        unit: '★',
        weight: 0.5,
        values
      });
    }

    if (selectedMetrics.includes('metaTier')) {
      const values: { [buildId: string]: number } = {};
      builds.forEach(build => {
        const tierScore = build.metaAnalysis.tier === 'S' ? 5 : 
                         build.metaAnalysis.tier === 'A' ? 4 : 
                         build.metaAnalysis.tier === 'B' ? 3 : 
                         build.metaAnalysis.tier === 'C' ? 2 : 1;
        values[build.id] = tierScore;
      });
      metrics.push({
        name: 'metaTier',
        label: 'Meta Tier',
        unit: '',
        weight: 0.6,
        values
      });
    }

    return metrics;
  };

  // Calculate weighted score
  const calculateWeightedScore = (build: IntelligentRecommendation, metrics: ComparisonMetric[]): number => {
    let totalScore = 0;
    let totalWeight = 0;

    metrics.forEach(metric => {
      const value = metric.values[build.id] || 0;
      totalScore += value * metric.weight;
      totalWeight += metric.weight;
    });

    return totalWeight > 0 ? totalScore / totalWeight : 0;
  };

  // Perform build comparison
  const performComparison = (): BuildComparisonType => {
    const metrics = generateComparisonMetrics();
    
    // Calculate scores for each build
    const scores = builds.map(build => ({
      buildId: build.id,
      buildName: build.name,
      overallScore: calculateWeightedScore(build, metrics),
      metricScores: metrics.reduce((acc, metric) => {
        acc[metric.name] = metric.values[build.id] || 0;
        return acc;
      }, {} as { [key: string]: number })
    }));

    // Sort builds by selected metric
    const sortedScores = [...scores].sort((a, b) => {
      const aValue = sortBy === 'overall' ? a.overallScore : a.metricScores[sortBy] || 0;
      const bValue = sortBy === 'overall' ? b.overallScore : b.metricScores[sortBy] || 0;
      return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
    });

    // Find winner
    const winner = sortedScores[0];

    // Generate insights
    const insights = [];
    
    // Winner insight
    insights.push(`${winner.buildName} ranks highest with an overall score of ${winner.overallScore.toFixed(2)}/5`);
    
    // Performance gaps
    if (sortedScores.length > 1) {
      const gap = winner.overallScore - sortedScores[1].overallScore;
      if (gap > 0.5) {
        insights.push(`Significant performance gap of ${gap.toFixed(2)} points between top builds`);
      } else if (gap < 0.2) {
        insights.push(`Very close competition with only ${gap.toFixed(2)} points difference`);
      }
    }

    // Metric analysis
    metrics.forEach(metric => {
      const maxValue = Math.max(...Object.values(metric.values));
      const bestBuilds = builds.filter(build => metric.values[build.id] === maxValue);
      if (bestBuilds.length === 1) {
        insights.push(`${bestBuilds[0].name} excels in ${metric.label} (${maxValue}/${metric.unit})`);
      }
    });

    return {
      buildScores: scores,
      winner: winner.buildId,
      sortedBuilds: sortedScores.map(s => s.buildId),
      insights,
      comparisonMatrix: metrics
    };
  };

  const comparison = performComparison();
  const winnerBuild = builds.find(b => b.id === comparison.winner);

  // Export comparison results
  const exportComparison = () => {
    const exportData = {
      timestamp: new Date().toISOString(),
      builds: builds.map(build => ({
        id: build.id,
        name: build.name,
        effectiveness: build.effectiveness,
        confidence: build.confidence,
        metaAnalysis: build.metaAnalysis
      })),
      comparison,
      selectedMetrics,
      sortBy,
      sortOrder
    };

    const blob = new Blob([JSON.stringify(exportData, null, 2)], {
      type: 'application/json'
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `build-comparison-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Render metric selector
  const renderMetricSelector = () => {
    const allMetrics = [
      { name: 'overall', label: 'Overall Effect' },
      { name: 'damage', label: 'Damage' },
      { name: 'survival', label: 'Survival' },
      { name: 'utility', label: 'Utility' },
      { name: 'teamSupport', label: 'Team Support' },
      { name: 'soloPlay', label: 'Solo Play' },
      { name: 'highFloor', label: 'High Floor' },
      { name: 'confidence', label: 'Confidence' },
      { name: 'metaTier', label: 'Meta Tier' }
    ];

    return (
      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
          Select Comparison Metrics
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
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

  // Render comparison table
  const renderComparisonTable = () => {
    const metrics = generateComparisonMetrics();

    return (
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-700">
              <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-gray-900 dark:text-white">
                Build
              </th>
              {metrics.map(metric => (
                <th key={metric.name} className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-900 dark:text-white">
                  {metric.label}
                  <br />
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    Weight: {metric.weight}
                  </span>
                </th>
              ))}
              <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center text-gray-900 dark:text-white">
                Overall Score
              </th>
            </tr>
          </thead>
          <tbody>
            {comparison.buildScores
              .sort((a, b) => b.overallScore - a.overallScore)
              .map((score, index) => {
                const build = builds.find(b => b.id === score.buildId)!;
                const isWinner = score.buildId === comparison.winner;
                
                return (
                  <tr key={score.buildId} className={`${
                    isWinner ? 'bg-green-50 dark:bg-green-900/20' : 'bg-white dark:bg-gray-800'
                  } ${index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-700' : ''}`}>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                      <div className="flex items-center space-x-2">
                        {isWinner && <span className="text-yellow-500">👑</span>}
                        <div>
                          <div className="font-semibold text-gray-900 dark:text-white">
                            {build.name}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            Rank #{index + 1}
                          </div>
                        </div>
                      </div>
                    </td>
                    {metrics.map(metric => {
                      const value = metric.values[score.buildId] || 0;
                      const maxValue = Math.max(...Object.values(metric.values));
                      const isHighest = value === maxValue;
                      
                      return (
                        <td key={metric.name} className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">
                          <span className={`font-medium ${
                            isHighest ? 'text-green-600 dark:text-green-400' : 'text-gray-900 dark:text-white'
                          }`}>
                            {value.toFixed(1)}{metric.unit}
                          </span>
                          {isHighest && <span className="ml-1 text-green-500">⭐</span>}
                        </td>
                      );
                    })}
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-center">
                      <span className={`text-lg font-bold ${
                        isWinner ? 'text-green-600 dark:text-green-400' : 'text-gray-900 dark:text-white'
                      }`}>
                        {score.overallScore.toFixed(2)}
                      </span>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    );
  };

  // Render analysis insights
  const renderInsights = () => {
    return (
      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
          Analysis Insights
        </h4>
        <div className="space-y-3">
          {comparison.insights.map((insight, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <span className="text-blue-500 text-lg">💡</span>
              <p className="text-blue-800 dark:text-blue-200 text-sm">
                {insight}
              </p>
            </div>
          ))}
        </div>

        {winnerBuild && (
          <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <h5 className="text-lg font-semibold text-green-900 dark:text-green-200 mb-3 flex items-center">
              <span className="mr-2">👑</span>
              Winner: {winnerBuild.name}
            </h5>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <div className="text-sm text-green-700 dark:text-green-300">Overall</div>
                <div className="text-lg font-bold text-green-800 dark:text-green-200">
                  {winnerBuild.effectiveness.overall}/5
                </div>
              </div>
              <div>
                <div className="text-sm text-green-700 dark:text-green-300">Confidence</div>
                <div className="text-lg font-bold text-green-800 dark:text-green-200">
                  {winnerBuild.confidence}/5
                </div>
              </div>
              <div>
                <div className="text-sm text-green-700 dark:text-green-300">Meta Tier</div>
                <div className="text-lg font-bold text-green-800 dark:text-green-200">
                  {winnerBuild.metaAnalysis.tier}
                </div>
              </div>
              <div>
                <div className="text-sm text-green-700 dark:text-green-300">Difficulty</div>
                <div className="text-lg font-bold text-green-800 dark:text-green-200 capitalize">
                  {winnerBuild.difficulty}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-7xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            🔍 Build Comparison Analysis
          </h2>
          <div className="flex items-center space-x-3">
            <button
              onClick={exportComparison}
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
            >
              📊 Export Results
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
            >
              Close
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Configuration */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Metric selector */}
            <div>
              {renderMetricSelector()}
            </div>

            {/* Sort options */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                Sorting Options
              </h4>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Sort by:
                  </label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="overall">Overall Score</option>
                    <option value="damage">Damage</option>
                    <option value="survival">Survival</option>
                    <option value="utility">Utility</option>
                    <option value="teamSupport">Team Support</option>
                    <option value="soloPlay">Solo Play</option>
                    <option value="highFloor">High Floor</option>
                    <option value="confidence">Confidence</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Order:
                  </label>
                  <div className="flex space-x-4">
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="sortOrder"
                        value="desc"
                        checked={sortOrder === 'desc'}
                        onChange={(e) => setSortOrder(e.target.value as 'desc')}
                        className="text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Highest First
                      </span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="sortOrder"
                        value="asc"
                        checked={sortOrder === 'asc'}
                        onChange={(e) => setSortOrder(e.target.value as 'asc')}
                        className="text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Lowest First
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Comparison table */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              📊 Detailed Comparison
            </h3>
            {renderComparisonTable()}
          </div>

          {/* Analysis insights */}
          {renderInsights()}
        </div>
      </div>
    </div>
  );
};

export default BuildComparison;