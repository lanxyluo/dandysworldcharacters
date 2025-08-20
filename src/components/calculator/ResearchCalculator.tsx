import React, { useState, useEffect } from 'react';

// 组件数据结构
interface ResearchData {
  twistedName: string;
  currentProgress: number; // 0-100
  useRodger: boolean;
  targetProgress: number; // 默认100
}

// 计算逻辑
const calculateResearchProgress = (data: ResearchData) => {
  const progressNeeded = data.targetProgress - data.currentProgress;
  const baseResearchPerChase = 5; // 普通角色被追击获得5%
  const rodgerMultiplier = 2; // Rodger获得10% (5% * 2)
  const researchPerCapsule = data.useRodger ? 2 : 1; // 研究胶囊
  
  const researchPerFloor = data.useRodger ? 
    baseResearchPerChase * rodgerMultiplier : baseResearchPerChase;
  
  const floorsNeeded = Math.ceil(progressNeeded / researchPerFloor);
  
  return {
    floorsNeeded,
    estimatedTime: `${Math.round(floorsNeeded * 5)} minutes`, // 假设每局5分钟
    recommendation: floorsNeeded > 10 ? 'Consider using Rodger for faster progress' : 'Continue with current strategy'
  };
};

const ResearchCalculator: React.FC = () => {
  const [researchData, setResearchData] = useState<ResearchData>({
    twistedName: '',
    currentProgress: 0,
    useRodger: false,
    targetProgress: 100
  });

  const [result, setResult] = useState<any>(null);

  // 模拟角色数据 - 实际应该从数据库获取
  const twistedCharacters = [
    'Twisted Alice',
    'Twisted Bob',
    'Twisted Charlie',
    'Twisted Diana',
    'Twisted Edward'
  ];

  useEffect(() => {
    if (researchData.twistedName && researchData.currentProgress >= 0) {
      const calculation = calculateResearchProgress(researchData);
      setResult(calculation);
    }
  }, [researchData]);

  const handleInputChange = (field: keyof ResearchData, value: any) => {
    setResearchData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-bg-card rounded-lg p-8 shadow-lg">
        <h2 className="text-2xl font-bold text-text-primary mb-6 text-center">
          Research Progress Calculator
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 左侧表单 */}
          <div className="space-y-6">
            {/* Twisted角色选择 */}
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">
                Twisted Character
              </label>
              <select
                value={researchData.twistedName}
                onChange={(e) => handleInputChange('twistedName', e.target.value)}
                className="w-full px-4 py-3 bg-bg-secondary border border-gray-600 rounded-lg text-text-primary focus:ring-2 focus:ring-accent-main focus:border-transparent"
              >
                <option value="">Select a character...</option>
                {twistedCharacters.map((char) => (
                  <option key={char} value={char}>{char}</option>
                ))}
              </select>
            </div>

            {/* 当前研究进度 */}
            <div>
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
            </div>

            {/* 是否使用Rodger */}
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="useRodger"
                checked={researchData.useRodger}
                onChange={(e) => handleInputChange('useRodger', e.target.checked)}
                className="w-4 h-4 text-accent-main bg-bg-secondary border-gray-600 rounded focus:ring-accent-main focus:ring-2"
              />
              <label htmlFor="useRodger" className="text-sm font-medium text-text-primary">
                Use Rodger (2x research progress)
              </label>
            </div>

            {/* 目标进度 */}
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">
                Target Progress (%)
              </label>
              <input
                type="number"
                min="0"
                max="100"
                value={researchData.targetProgress}
                onChange={(e) => handleInputChange('targetProgress', parseInt(e.target.value))}
                className="w-full px-4 py-3 bg-bg-secondary border border-gray-600 rounded-lg text-text-primary focus:ring-2 focus:ring-accent-main focus:border-transparent"
              />
            </div>
          </div>

          {/* 右侧结果显示 */}
          <div className="bg-bg-secondary rounded-lg p-6">
            <h3 className="text-lg font-semibold text-text-primary mb-4">Calculation Results</h3>
            
            {result ? (
              <div className="space-y-4">
                <div className="bg-bg-card rounded-lg p-4">
                  <div className="text-2xl font-bold text-accent-main mb-2">
                    {result.floorsNeeded}
                  </div>
                  <div className="text-sm text-text-secondary">Floors Needed</div>
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
                Fill in the form to see calculation results
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchCalculator;
