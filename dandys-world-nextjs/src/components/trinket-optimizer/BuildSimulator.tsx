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

  // Simulate build effectiveness
  const simulateBuild = async () => {
    setIsSimulating(true);
    
    // Simulate calculation delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Calculate simulation results based on build properties
    const result = calculateSimulationResult();
    setSimulationResult(result);
    setIsSimulating(false);
  };

  // Calculate simulation results
  const calculateSimulationResult = (): BuildSimulationResult => {
    const { floorLevel, enemyCount, teamSize, difficulty } = simulationSettings;
    
    // Base success rate calculation
    let baseSuccessRate = 50;
    
    // Adjust based on effectiveness ratings
    baseSuccessRate += build.effectiveness.overall * 8;
    baseSuccessRate += build.effectiveness.survival * 6;
    baseSuccessRate += build.effectiveness.utility * 4;
    
    // Adjust based on floor level
    if (floorLevel > 15) baseSuccessRate -= 20;
    else if (floorLevel > 10) baseSuccessRate -= 10;
    
    // Adjust based on enemy count
    if (enemyCount > 4) baseSuccessRate -= 15;
    else if (enemyCount > 2) baseSuccessRate -= 5;
    
    // Adjust based on team size
    if (teamSize === 1) {
      baseSuccessRate += build.effectiveness.soloPlay * 5;
      baseSuccessRate -= 10; // Solo penalty
    } else {
      baseSuccessRate += build.effectiveness.teamSupport * 3;
    }
    
    // Adjust based on difficulty
    const difficultyMultipliers = {
      easy: 1.2,
      normal: 1.0,
      hard: 0.8,
      nightmare: 0.6
    };
    baseSuccessRate *= difficultyMultipliers[difficulty];
    
    // Clamp success rate
    const successRate = Math.max(5, Math.min(95, baseSuccessRate));
    
    // Calculate threat level
    let threatLevel = 'low' as 'low' | 'medium' | 'high' | 'extreme';
    if (successRate < 30) threatLevel = 'extreme';
    else if (successRate < 50) threatLevel = 'high';
    else if (successRate < 70) threatLevel = 'medium';
    
    // Calculate estimated completion time
    let baseTime = 15; // minutes
    baseTime += floorLevel * 0.8;
    baseTime += enemyCount * 2;
    baseTime /= (teamSize * 0.25 + 0.75);
    baseTime *= (2 - successRate / 100); // Lower success rate = longer time
    
    const estimatedTime = Math.round(baseTime);
    
    // Generate strategy recommendations
    const strategies: string[] = [];
    
    if (build.effectiveness.damage >= 4) {
      strategies.push('Aggressive playstyle - focus on quick eliminations');
    }
    if (build.effectiveness.survival >= 4) {
      strategies.push('Defensive approach - prioritize survival over speed');
    }
    if (build.effectiveness.utility >= 4) {
      strategies.push('Support role - assist teammates and manage resources');
    }
    if (build.effectiveness.teamSupport >= 4 && teamSize > 1) {
      strategies.push('Team coordination - communicate and support allies');
    }
    if (build.effectiveness.soloPlay >= 4 && teamSize === 1) {
      strategies.push('Solo tactics - be self-sufficient and cautious');
    }
    if (floorLevel > 15) {
      strategies.push('High floor strategy - expect tougher enemies');
    }
    if (enemyCount > 3) {
      strategies.push('Multi-enemy handling - use area effects and positioning');
    }
    
    // Add default strategies if none specific
    if (strategies.length === 0) {
      strategies.push('Balanced approach - adapt to situation');
      strategies.push('Monitor resources carefully');
    }
    
    // Identify potential weaknesses
    const weaknesses: string[] = [];
    
    if (build.effectiveness.damage < 3) {
      weaknesses.push('Low damage output - may struggle with tough enemies');
    }
    if (build.effectiveness.survival < 3) {
      weaknesses.push('Poor survivability - avoid risky situations');
    }
    if (build.effectiveness.utility < 3) {
      weaknesses.push('Limited utility - fewer tactical options available');
    }
    if (floorLevel > 15 && build.effectiveness.highFloor < 3) {
      weaknesses.push('Not optimized for high floors - consider alternative builds');
    }
    if (teamSize === 1 && build.effectiveness.soloPlay < 3) {
      weaknesses.push('Not ideal for solo play - team support recommended');
    }
    
    return {
      successRate: Math.round(successRate),
      threatLevel,
      estimatedTime,
      strategies,
      weaknesses,
      scenarioAnalysis: {
        bestCase: Math.min(95, successRate + 15),
        worstCase: Math.max(5, successRate - 15),
        averageCase: successRate
      }
    };
  };

  // Get threat level color
  const getThreatColor = (level: string) => {
    switch (level) {
      case 'low': return 'text-green-600 dark:text-green-400';
      case 'medium': return 'text-yellow-600 dark:text-yellow-400';
      case 'high': return 'text-orange-600 dark:text-orange-400';
      case 'extreme': return 'text-red-600 dark:text-red-400';
      default: return 'text-gray-600 dark:text-gray-400';
    }
  };

  // Get threat level background
  const getThreatBg = (level: string) => {
    switch (level) {
      case 'low': return 'bg-green-100 dark:bg-green-900';
      case 'medium': return 'bg-yellow-100 dark:bg-yellow-900';
      case 'high': return 'bg-orange-100 dark:bg-orange-900';
      case 'extreme': return 'bg-red-100 dark:bg-red-900';
      default: return 'bg-gray-100 dark:bg-gray-900';
    }
  };

  // Render simulation settings
  const renderSettings = () => {
    return (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Simulation Parameters
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Floor level */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Floor Level: {simulationSettings.floorLevel}
            </label>
            <input
              type="range"
              min="1"
              max="20"
              value={simulationSettings.floorLevel}
              onChange={(e) => setSimulationSettings({
                ...simulationSettings,
                floorLevel: parseInt(e.target.value)
              })}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
            <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
              <span>Easy (1-5)</span>
              <span>Normal (6-10)</span>
              <span>Hard (11-15)</span>
              <span>Extreme (16-20)</span>
            </div>
          </div>

          {/* Enemy count */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Enemy Count: {simulationSettings.enemyCount}
            </label>
            <input
              type="range"
              min="1"
              max="6"
              value={simulationSettings.enemyCount}
              onChange={(e) => setSimulationSettings({
                ...simulationSettings,
                enemyCount: parseInt(e.target.value)
              })}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
            <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
              <span>1</span>
              <span>3</span>
              <span>6</span>
            </div>
          </div>

          {/* Team size */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Team Size: {simulationSettings.teamSize}
            </label>
            <input
              type="range"
              min="1"
              max="8"
              value={simulationSettings.teamSize}
              onChange={(e) => setSimulationSettings({
                ...simulationSettings,
                teamSize: parseInt(e.target.value)
              })}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
            <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
              <span>Solo</span>
              <span>Small (2-4)</span>
              <span>Large (5-8)</span>
            </div>
          </div>

          {/* Difficulty */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Difficulty
            </label>
            <select
              value={simulationSettings.difficulty}
              onChange={(e) => setSimulationSettings({
                ...simulationSettings,
                difficulty: e.target.value as any
              })}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="easy">Easy</option>
              <option value="normal">Normal</option>
              <option value="hard">Hard</option>
              <option value="nightmare">Nightmare</option>
            </select>
          </div>
        </div>
      </div>
    );
  };

  // Render simulation results
  const renderResults = () => {
    if (!simulationResult) return null;

    return (
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Simulation Results
        </h3>

        {/* Overall metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <div className="text-sm text-blue-600 dark:text-blue-400">Success Rate</div>
            <div className="text-2xl font-bold text-blue-800 dark:text-blue-200">
              {simulationResult.successRate}%
            </div>
          </div>
          
          <div className={`p-4 rounded-lg ${getThreatBg(simulationResult.threatLevel)}`}>
            <div className="text-sm text-gray-600 dark:text-gray-400">Threat Level</div>
            <div className={`text-2xl font-bold capitalize ${getThreatColor(simulationResult.threatLevel)}`}>
              {simulationResult.threatLevel}
            </div>
          </div>
          
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
            <div className="text-sm text-purple-600 dark:text-purple-400">Est. Completion Time</div>
            <div className="text-2xl font-bold text-purple-800 dark:text-purple-200">
              {simulationResult.estimatedTime}m
            </div>
          </div>
        </div>

        {/* Scenario analysis */}
        <div>
          <h4 className="text-md font-semibold text-gray-900 dark:text-white mb-3">
            Scenario Analysis
          </h4>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <div className="text-sm text-green-600 dark:text-green-400">Best Case</div>
              <div className="text-lg font-bold text-green-800 dark:text-green-200">
                {simulationResult.scenarioAnalysis.bestCase}%
              </div>
            </div>
            <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="text-sm text-gray-600 dark:text-gray-400">Average</div>
              <div className="text-lg font-bold text-gray-800 dark:text-gray-200">
                {simulationResult.scenarioAnalysis.averageCase}%
              </div>
            </div>
            <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
              <div className="text-sm text-red-600 dark:text-red-400">Worst Case</div>
              <div className="text-lg font-bold text-red-800 dark:text-red-200">
                {simulationResult.scenarioAnalysis.worstCase}%
              </div>
            </div>
          </div>
        </div>

        {/* Strategy recommendations */}
        <div>
          <h4 className="text-md font-semibold text-gray-900 dark:text-white mb-3">
            📋 Strategy Recommendations
          </h4>
          <div className="space-y-2">
            {simulationResult.strategies.map((strategy, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <span className="text-blue-500">✓</span>
                <span className="text-blue-800 dark:text-blue-200 text-sm">
                  {strategy}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Potential weaknesses */}
        {simulationResult.weaknesses.length > 0 && (
          <div>
            <h4 className="text-md font-semibold text-gray-900 dark:text-white mb-3">
              ⚠️ Potential Weaknesses
            </h4>
            <div className="space-y-2">
              {simulationResult.weaknesses.map((weakness, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <span className="text-yellow-500">⚠</span>
                  <span className="text-yellow-800 dark:text-yellow-200 text-sm">
                    {weakness}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            🎮 Build Simulator
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

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Build info */}
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Testing Build: {build.name}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Overall</div>
                <div className="text-lg font-bold text-gray-900 dark:text-white">
                  {build.effectiveness.overall}/5
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Damage</div>
                <div className="text-lg font-bold text-gray-900 dark:text-white">
                  {build.effectiveness.damage}/5
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Survival</div>
                <div className="text-lg font-bold text-gray-900 dark:text-white">
                  {build.effectiveness.survival}/5
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Utility</div>
                <div className="text-lg font-bold text-gray-900 dark:text-white">
                  {build.effectiveness.utility}/5
                </div>
              </div>
            </div>
          </div>

          {/* Simulation settings */}
          {renderSettings()}

          {/* Simulation button */}
          <div className="text-center">
            <button
              onClick={simulateBuild}
              disabled={isSimulating}
              className="px-8 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors text-lg font-medium"
            >
              {isSimulating ? '🔄 Running Simulation...' : '🚀 Start Simulation'}
            </button>
          </div>

          {/* Loading indicator */}
          {isSimulating && (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Analyzing build performance...
              </p>
            </div>
          )}

          {/* Results */}
          {simulationResult && !isSimulating && renderResults()}
        </div>
      </div>
    </div>
  );
};

export default BuildSimulator;