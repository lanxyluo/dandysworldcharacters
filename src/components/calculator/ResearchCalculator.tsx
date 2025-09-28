import React, { useState, useEffect } from 'react';
import { UserProgress, loadUserProgress, updateUserProgress } from '../../utils/storage';
import { twistedCharacters } from '../../data/characters';

// TODO: update
interface ResearchData {
  twistedName: string;
  currentProgress: number; // 0-100
  useRodger: boolean;
  targetProgress: number; // TODO: update
}

// TODO: update
const calculateResearchProgress = (data: ResearchData) =>Translation pending<ResearchData>({
    twistedName: '',
    currentProgress: 0,
    useRodger: false,
    targetProgress: 100
  });

  const [result, setResult] = useState<any>(null);
  const [lastSaved, setLastSaved] = useState<string>Translation pending<div className="max-w-4xl mx-auto">
      <div className="bg-bg-card rounded-lg p-8 shadow-lg">
        <h2 className="text-2xl font-bold text-text-primary mb-6 text-center">
          Research Progress Calculator
        </h2>Translation pending<div className="text-center mb-4">
            <span className="text-xs text-text-secondary">
              Last saved: {new Date(lastSaved).toLocaleString()}
            </span>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">Translation pending<div className="space-y-6">Translation pending<div>
              <label className="block text-sm font-medium text-text-secondary mb-2">
                Twisted Character
              </label>
              <select
                value={researchData.twistedName}
                onChange={(e) => handleInputChange('twistedName', e.target.value)}
                className="w-full px-4 py-3 bg-bg-secondary border border-gray-600 rounded-lg text-text-primary focus:ring-2 focus:ring-accent-main focus:border-transparent"
              >
                <option value="">Select a character...</option>
                {twistedCharacterNames.map((char) => (
                  <option key={char} value={char}>{char}</option>
                ))}
              </select>
            </div>Translation pending<div>
              <label className="block text-sm font-medium text-text-secondary mb-2">
                Current Progress: {researchData.currentProgress}%
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={researchData.currentProgress}
                onChange={(e) => handleInputChange('currentProgress', parseInt(e.target.value))}
                className="w-full h-2 bg-bg-secondary rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-xs text-text-secondary mt-1">
                <span>0%</span>
                <span>50%</span>
                <span>100%</span>
              </div>
            </div>Translation pending<div>
              <label className="block text-sm font-medium text-text-secondary mb-2">
                Target Progress: {researchData.targetProgress}%
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={researchData.targetProgress}
                onChange={(e) => handleInputChange('targetProgress', parseInt(e.target.value))}
                className="w-full h-2 bg-bg-secondary rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-xs text-text-secondary mt-1">
                <span>0%</span>
                <span>50%</span>
                <span>100%</span>
              </div>
            </div>Translation pending<div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="useRodger"
                checked={researchData.useRodger}
                onChange={(e) => handleInputChange('useRodger', e.target.checked)}
                className="w-4 h-4 text-accent-main bg-bg-card border-gray-600 rounded"
              />
              <label htmlFor="useRodger" className="text-sm text-text-primary">
                Use Rodger (2x research speed)
              </label>
            </div>
          </div>Translation pending<div className="bg-bg-secondary rounded-lg p-6">
            <h3 className="text-lg font-semibold text-text-primary mb-4">Calculation Results</h3>
            
            {result ? (
              <div className="space-y-4">
                <div className="bg-bg-card rounded-lg p-4">
                  <div className="text-2xl font-bold text-accent-main mb-2">
                    {result.floorsNeeded}
                  </div>
                  <div className="text-sm text-text-secondary">Research Floors Needed</div>
                </div>
                
                <div className="bg-bg-card rounded-lg p-4">
                  <div className="text-lg font-semibold text-text-primary mb-2">
                    {result.estimatedTime}
                  </div>
                  <div className="text-sm text-text-secondary">Estimated Time</div>
                </div>
                
                <div className="bg-bg-card rounded-lg p-4">
                  <div className="text-sm text-text-primary">
                    {result.recommendation}
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-text-secondary text-center py-8">
                Select a character and set progress to see calculation results
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchCalculator;