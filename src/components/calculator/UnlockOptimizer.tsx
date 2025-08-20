import React, { useState } from 'react';

interface UnlockData {
  characterName: string;
  unlockCost: number;
  priority: 'high' | 'medium' | 'low';
  isUnlocked: boolean;
}

const UnlockOptimizer: React.FC = () => {
  const [unlockData, setUnlockData] = useState<UnlockData[]>([
    { characterName: 'Character A', unlockCost: 1000, priority: 'high', isUnlocked: false },
    { characterName: 'Character B', unlockCost: 800, priority: 'medium', isUnlocked: false },
    { characterName: 'Character C', unlockCost: 1200, priority: 'low', isUnlocked: false },
    { characterName: 'Character D', unlockCost: 600, priority: 'high', isUnlocked: false },
  ]);

  const [totalCost, setTotalCost] = useState(0);
  const [recommendedOrder, setRecommendedOrder] = useState<UnlockData[]>([]);

  const calculateOptimization = () => {
    const sortedByPriority = [...unlockData]
      .filter(char => !char.isUnlocked)
      .sort((a, b) => {
        const priorityOrder = { high: 3, medium: 2, low: 1 };
        if (priorityOrder[a.priority] !== priorityOrder[b.priority]) {
          return priorityOrder[b.priority] - priorityOrder[a.priority];
        }
        return a.unlockCost - b.unlockCost;
      });

    setRecommendedOrder(sortedByPriority);
    setTotalCost(sortedByPriority.reduce((sum, char) => sum + char.unlockCost, 0));
  };

  const handleCharacterChange = (index: number, field: keyof UnlockData, value: any) => {
    const newData = [...unlockData];
    newData[index] = { ...newData[index], [field]: value };
    setUnlockData(newData);
  };

  const addCharacter = () => {
    setUnlockData([...unlockData, {
      characterName: `Character ${unlockData.length + 1}`,
      unlockCost: 0,
      priority: 'medium',
      isUnlocked: false
    }]);
  };

  const removeCharacter = (index: number) => {
    setUnlockData(unlockData.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-bg-card rounded-lg p-8 shadow-lg">
        <h2 className="text-2xl font-bold text-text-primary mb-6 text-center">
          Unlock Optimizer
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 左侧：角色管理 */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-text-primary">Character Management</h3>
              <button
                onClick={addCharacter}
                className="px-4 py-2 bg-accent-main text-white rounded-lg hover:bg-accent-main/80 transition-colors"
              >
                Add Character
              </button>
            </div>
            
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {unlockData.map((character, index) => (
                <div key={index} className="bg-bg-secondary rounded-lg p-4">
                  <div className="grid grid-cols-2 gap-4 mb-3">
                    <input
                      type="text"
                      value={character.characterName}
                      onChange={(e) => handleCharacterChange(index, 'characterName', e.target.value)}
                      className="px-3 py-2 bg-bg-card border border-gray-600 rounded text-text-primary"
                      placeholder="Character name"
                    />
                    <input
                      type="number"
                      value={character.unlockCost}
                      onChange={(e) => handleCharacterChange(index, 'unlockCost', parseInt(e.target.value) || 0)}
                      className="px-3 py-2 bg-bg-card border border-gray-600 rounded text-text-primary"
                      placeholder="Cost"
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <select
                      value={character.priority}
                      onChange={(e) => handleCharacterChange(index, 'priority', e.target.value as 'high' | 'medium' | 'low')}
                      className="px-3 py-2 bg-bg-card border border-gray-600 rounded text-text-primary"
                    >
                      <option value="high">High Priority</option>
                      <option value="medium">Medium Priority</option>
                      <option value="low">Low Priority</option>
                    </select>
                    
                    <div className="flex items-center space-x-3">
                      <label className="flex items-center space-x-2 text-text-primary">
                        <input
                          type="checkbox"
                          checked={character.isUnlocked}
                          onChange={(e) => handleCharacterChange(index, 'isUnlocked', e.target.checked)}
                          className="w-4 h-4 text-accent-main bg-bg-card border-gray-600 rounded"
                        />
                        <span className="text-sm">Unlocked</span>
                      </label>
                      
                      <button
                        onClick={() => removeCharacter(index)}
                        className="px-2 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700 transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <button
              onClick={calculateOptimization}
              className="w-full mt-6 px-6 py-3 bg-accent-main text-white rounded-lg hover:bg-accent-main/80 transition-colors font-medium"
            >
              Calculate Optimal Unlock Order
            </button>
          </div>

          {/* 右侧：优化结果 */}
          <div className="bg-bg-secondary rounded-lg p-6">
            <h3 className="text-lg font-semibold text-text-primary mb-4">Optimization Results</h3>
            
            {recommendedOrder.length > 0 ? (
              <div className="space-y-4">
                <div className="bg-bg-card rounded-lg p-4">
                  <div className="text-2xl font-bold text-accent-main mb-2">
                    {totalCost.toLocaleString()}
                  </div>
                  <div className="text-sm text-text-secondary">Total Cost</div>
                </div>
                
                <div>
                  <h4 className="font-medium text-text-primary mb-3">Recommended Unlock Order:</h4>
                  <div className="space-y-2">
                    {recommendedOrder.map((character, index) => (
                      <div key={index} className="flex justify-between items-center bg-bg-card rounded-lg p-3">
                        <div className="flex items-center space-x-3">
                          <span className="w-6 h-6 bg-accent-main text-white rounded-full flex items-center justify-center text-sm font-bold">
                            {index + 1}
                          </span>
                          <span className="text-text-primary">{character.characterName}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            character.priority === 'high' ? 'bg-red-600 text-white' :
                            character.priority === 'medium' ? 'bg-yellow-600 text-white' :
                            'bg-green-600 text-white'
                          }`}>
                            {character.priority}
                          </span>
                          <span className="text-text-secondary">{character.unlockCost.toLocaleString()}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-text-secondary text-center py-8">
                Click "Calculate Optimal Unlock Order" to see results
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnlockOptimizer;
