import React, { useState, useEffect } from 'react';
import { UserProgress, loadUserProgress, updateUserProgress } from '../../utils/storage';

interface Character {
  id: string;
  name: string;
  ichorCost: number;
  type: 'common' | 'uncommon' | 'rare' | 'main' | 'toon' | 'regular';
  rarity: 'common' | 'uncommon' | 'rare' | 'legendary';
  abilities: string[];
  researchBonus?: number; // TODO: update
  unlockRequirements?: string[];
  priority: number; // TODO: update
}

interface StrategyInput {
  currentIchor: number;
  ownedCharacters: string[];
  researchProgress: Record<string, number>Translation pending<= currentIchor
  );
  
  if (availableCharacters.length === 0) {
    const nextCheapest = characterPriorities
      .filter(char =>Translation pending< 100)
        .sort(([,a], [,b]) =>Translation pending<= input.currentIchor)
        .sort((a, b) =>Translation pending<= input.currentIchor)
        .sort((a, b) =>Translation pending<= input.currentIchor)
        .sort((a, b) =>Translation pending< 100)
    .sort(([,a], [,b]) => a - b)
    .slice(0, 3);
  
  if (lowResearchTwisteds.length > 0) {
    strategy.push({
      step: strategy.length + 1,
      action: 'focus_research',
      description: `Focus research on: ${lowResearchTwisteds.map(([name]) => name).join(', ')}`,
      floorsNeeded: Math.ceil((100 - lowResearchTwisteds[0][1]) / (input.ownedCharacters.includes('Rodger') ? 10 : 5)),
      priority: 'medium'
    });
  }
  
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
  const [lastSaved, setLastSaved] = useState<string>Translation pending<div className="max-w-6xl mx-auto">
      <div className="bg-bg-card rounded-lg p-8 shadow-lg">
        <h2 className="text-2xl font-bold text-text-primary mb-6 text-center">
          Combined Strategy Planner
        </h2>Translation pending<div className="text-center mb-4">
            <span className="text-xs text-text-secondary">
              Last saved: {new Date(lastSaved).toLocaleString()}
            </span>
          </div>
        )}
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">Translation pending<div className="space-y-6">Translation pending<div>
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
            </div>Translation pending<div>
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
            </div>Translation pending<div>
              <h3 className="text-lg font-semibold text-text-primary mb-3">Owned Characters</h3>
              <div className="grid grid-cols-1 gap-2 max-h-48 overflow-y-auto">
                {characterPriorities.map((char) => (
                  <label key={char.name} className="flex items-center space-x-3 cursor-pointer bg-bg-secondary rounded-lg p-2 hover:bg-bg-card transition-colors">
                    <input
                      type="checkbox"
                      checked={strategyInput.ownedCharacters.includes(char.name)}
                      onChange={() => toggleCharacterOwnership(char.name)}
                      className="w-4 h-4 text-accent-main bg-bg-card border-gray-600 rounded"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-text-primary font-medium">{char.name}</span>
                        <span className="text-xs text-text-secondary">
                          {char.ichorCost === 0 ? 'Free' : `${char.ichorCost.toLocaleString()} Ichor`}
                        </span>
                      </div>
                      <div className="flex space-x-2 mt-1">
                        <span className={`px-2 py-1 rounded text-xs text-white ${
                          char.type === 'main' ? 'bg-purple-600' :
                          char.type === 'toon' ? 'bg-blue-600' :
                          char.type === 'regular' ? 'bg-gray-600' : 'bg-green-600'
                        }`}>
                          {char.type}
                        </span>
                        <span className={`px-2 py-1 rounded text-xs text-white ${
                          char.rarity === 'legendary' ? 'bg-yellow-600' :
                          char.rarity === 'rare' ? 'bg-purple-600' :
                          char.rarity === 'uncommon' ? 'bg-blue-600' : 'bg-gray-600'
                        }`}>
                          {char.rarity}
                        </span>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>Translation pending<div>
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
          </div>Translation pending<div className="bg-bg-secondary rounded-lg p-6">
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
                            {step.details.target.type && (
                              <div className="flex space-x-1 mt-1">
                                <span className={`px-1 py-0.5 rounded text-xs text-white ${
                                  step.details.target.type === 'main' ? 'bg-purple-600' :
                                  step.details.target.type === 'toon' ? 'bg-blue-600' :
                                  step.details.target.type === 'regular' ? 'bg-gray-600' : 'bg-green-600'
                                }`}>
                                  {step.details.target.type}
                                </span>
                                {step.details.target.rarity && (
                                  <span className={`px-1 py-0.5 rounded text-xs text-white ${
                                    step.details.target.rarity === 'legendary' ? 'bg-yellow-600' :
                                    step.details.target.rarity === 'rare' ? 'bg-purple-600' :
                                    step.details.target.rarity === 'uncommon' ? 'bg-blue-600' : 'bg-gray-600'
                                  }`}>
                                    {step.details.target.rarity}
                                  </span>
                                )}
                              </div>
                            )}
                            {step.details.alternatives && step.details.alternatives.length > 0 && (
                              <div className="mt-1 text-text-secondary">
                                Alternatives: {step.details.alternatives.map((alt: any) => alt.name).join(', ')}
                              </div>
                            )}
                            {step.details.totalRemaining && (
                              <div className="mt-1 text-text-secondary">
                                Total remaining: {step.details.totalRemaining} characters
                              </div>
                            )}
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