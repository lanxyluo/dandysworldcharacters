import React, { useState, useMemo, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

interface FloorPrediction {
  floor: number;
  machines: number;
  twistedCount: number;
  mainTwistedChance: number;
  blackoutChance: number;
  dangerLevel: 'Low' | 'Medium' | 'High' | 'Extreme';
  estimatedTime: number;
  teamSize: number;
  roomTypes: string[];
  warnings: string[];
  cumulativeTime: number; // 新增：累计用时
}

interface ChallengeSummary {
  totalTime: string;
  totalFloors: number;
  averageTimePerFloor: string;
  overallRiskLevel: 'Low' | 'Medium' | 'High' | 'Extreme';
  timeWarning?: string;
}

const teamSizeMultipliers = {
  '2': 1.4,    // +40% 时间
  '4': 1.0,    // 标准时间  
  '6': 0.8,    // -20% 时间
  '8': 0.7     // -30% 时间
};

const FloorCalculator: React.FC = () => {
  const [currentFloor, setCurrentFloor] = useState<number>(1);
  const [targetFloor, setTargetFloor] = useState<number | null>(null);
  const [difficultyMode, setDifficultyMode] = useState<'Normal' | 'Hard'>('Normal');
  const [selectedTeamSize, setSelectedTeamSize] = useState<keyof typeof teamSizeMultipliers>('4');

  // Floor prediction calculation logic
  const calculateMachines = (floor: number): number => {
    if (floor <= 8) return Math.min(6, 3 + floor);
    return Math.min(20, 6 + Math.floor((floor - 8) / 2));
  };

  const calculateTwisted = (floor: number): number => {
    const machines = calculateMachines(floor);
    if (machines < 6) return 3;
    if (machines <= 8) return 4;
    return Math.min(10, 3 + Math.floor(machines / 2));
  };

  const calculateMainTwistedChance = (floor: number): number => {
    if (floor < 5) return 0;
    return Math.min(90, 15 + (floor - 5) * 5);
  };

  const calculateBlackoutChance = (floor: number): number => {
    return Math.min(40, floor * 2);
  };

  const calculateDangerLevel = (floor: number): 'Low' | 'Medium' | 'High' | 'Extreme' => {
    if (floor <= 5) return 'Low';
    if (floor <= 10) return 'Medium';
    if (floor <= 20) return 'High';
    return 'Extreme';
  };

  const calculateEstimatedTime = (machines: number, difficulty: 'Normal' | 'Hard'): number => {
    const baseTime = machines * 3; // 3 minutes per machine base
    return difficulty === 'Hard' ? Math.floor(baseTime * 1.5) : baseTime;
  };

  const calculateTeamSize = (machines: number, dangerLevel: string): number => {
    if (dangerLevel === 'Extreme') return Math.max(4, Math.ceil(machines / 3));
    if (dangerLevel === 'High') return Math.max(3, Math.ceil(machines / 4));
    if (dangerLevel === 'Medium') return Math.max(2, Math.ceil(machines / 5));
    return Math.max(1, Math.ceil(machines / 6));
  };

  const getRoomTypes = (floor: number): string[] => {
    const types = [];
    if (floor >= 5) types.push('Forest Room');
    if (floor >= 10) types.push('Warehouse');
    if (floor >= 15) types.push('Main Room');
    if (floor >= 20) types.push('Advanced Room');
    if (floor >= 30) types.push('Elite Room');
    return types;
  };

  const getWarnings = (floor: number, dangerLevel: string): string[] => {
    const warnings = [];
    if (floor >= 25) warnings.push('Extreme difficulty - experienced team recommended');
    if (floor >= 20) warnings.push('High twisted character density');
    if (floor >= 15) warnings.push('Multiple room types possible');
    if (floor >= 10) warnings.push('Blackout events more frequent');
    if (dangerLevel === 'Extreme') warnings.push('Consider bringing backup equipment');
    return warnings;
  };

  // Generate predictions with team size adjustment and cumulative time
  const predictions = useMemo(() => {
    console.log('Recalculating predictions:', { currentFloor, targetFloor, difficultyMode, selectedTeamSize });
    
    const floors = targetFloor ? 
      Array.from({length: targetFloor - currentFloor + 1}, (_, i) => currentFloor + i) :
      [currentFloor];

    console.log('Calculating for floors:', floors);

    let cumulativeTime = 0;
    return floors.map(floor => {
      const machines = calculateMachines(floor);
      const twistedCount = calculateTwisted(floor);
      const mainTwistedChance = calculateMainTwistedChance(floor);
      const blackoutChance = calculateBlackoutChance(floor);
      const dangerLevel = calculateDangerLevel(floor);
      const baseTime = calculateEstimatedTime(machines, difficultyMode);
      const adjustedTime = Math.round(baseTime * teamSizeMultipliers[selectedTeamSize]);
      cumulativeTime += adjustedTime;
      const teamSize = calculateTeamSize(machines, dangerLevel);
      const roomTypes = getRoomTypes(floor);
      const warnings = getWarnings(floor, dangerLevel);

      return {
        floor,
        machines,
        twistedCount,
        mainTwistedChance,
        blackoutChance,
        dangerLevel,
        estimatedTime: adjustedTime,
        teamSize,
        roomTypes,
        warnings,
        cumulativeTime
      };
    });
  }, [currentFloor, targetFloor, difficultyMode, selectedTeamSize]);

  const getDangerLevelColor = (level: string) => {
    switch (level) {
      case 'Low': return 'text-green-400';
      case 'Medium': return 'text-yellow-400';
      case 'High': return 'text-orange-400';
      case 'Extreme': return 'text-red-400';
      default: return 'text-white';
    }
  };

  const getDangerLevelBg = (level: string) => {
    switch (level) {
      case 'Low': return 'bg-green-900/30';
      case 'Medium': return 'bg-yellow-900/30';
      case 'High': return 'bg-orange-900/30';
      case 'Extreme': return 'bg-red-900/30';
      default: return 'bg-gray-900/30';
    }
  };

  const quickFloorButtons = [5, 10, 15, 20, 25, 30];

  // Challenge Summary Calculation
  const calculateChallengeSummary = (): ChallengeSummary => {
    const totalFloors = targetFloor ? targetFloor - currentFloor + 1 : 1;
    const totalTimeMinutes = predictions.reduce((sum, p) => sum + p.estimatedTime, 0);
    const totalTime = `${Math.floor(totalTimeMinutes / 60)}h ${totalTimeMinutes % 60}m`;
    const averageTimePerFloor = totalFloors > 0 ? `${Math.round(totalTimeMinutes / totalFloors)}m` : '0m';

    // Calculate overall risk level based on predictions
    const riskLevels = predictions.map(p => p.dangerLevel);
    let overallRiskLevel: 'Low' | 'Medium' | 'High' | 'Extreme' = 'Low';
    
    if (riskLevels.includes('Extreme')) {
      overallRiskLevel = 'Extreme';
    } else if (riskLevels.includes('High')) {
      overallRiskLevel = 'High';
    } else if (riskLevels.includes('Medium')) {
      overallRiskLevel = 'Medium';
    }

    // Time warnings
    let timeWarning: string | undefined;
    if (totalTimeMinutes > 480) { // 8 hours
      timeWarning = 'Extreme challenge duration - consider splitting into multiple sessions';
    } else if (totalTimeMinutes > 300) { // 5 hours
      timeWarning = 'Long challenge duration - ensure adequate preparation';
    } else if (totalTimeMinutes > 180) { // 3 hours
      timeWarning = 'Moderate challenge duration - plan your breaks';
    }

    return {
      totalTime,
      totalFloors,
      averageTimePerFloor,
      overallRiskLevel,
      timeWarning
    };
  };

  const challengeSummary = calculateChallengeSummary();

  // Quick navigation function
  const scrollToFloor = (floor: number) => {
    const element = document.getElementById(`floor-${floor}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Render main content
  const renderMainContent = () => {
    return (
      <>
        {/* Input Section */}
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Current Floor */}
            <div>
              <label className="block text-white font-semibold mb-2">
                Current Floor
              </label>
              <input
                type="number"
                min="1"
                max="50"
                value={currentFloor}
                onChange={(e) => {
                  const newFloor = Math.max(1, parseInt(e.target.value) || 1);
                  console.log('Setting currentFloor to:', newFloor);
                  setCurrentFloor(newFloor);
                }}
                className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter floor (1-50)"
              />
            </div>

            {/* Target Floor */}
            <div>
              <label className="block text-white font-semibold mb-2">
                Target Floor (Optional)
              </label>
              <input
                type="number"
                min={currentFloor}
                max="50"
                value={targetFloor || ''}
                onChange={(e) => {
                  const newTargetFloor = e.target.value ? parseInt(e.target.value) : null;
                  console.log('Setting targetFloor to:', newTargetFloor);
                  setTargetFloor(newTargetFloor);
                }}
                className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter target floor"
              />
            </div>

            {/* Difficulty Mode */}
            <div>
              <label className="block text-white font-semibold mb-2">
                Difficulty Mode
              </label>
              <select
                value={difficultyMode}
                onChange={(e) => {
                  const newDifficulty = e.target.value as 'Normal' | 'Hard';
                  console.log('Setting difficultyMode to:', newDifficulty);
                  setDifficultyMode(newDifficulty);
                }}
                className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="Normal">Normal</option>
                <option value="Hard">Hard</option>
              </select>
            </div>
          </div>

          {/* Quick Floor Buttons */}
          <div className="mt-6">
            <label className="block text-white font-semibold mb-3">
              Quick Floor Selection
            </label>
            <div className="flex flex-wrap gap-2">
              {quickFloorButtons.map(floor => (
                <button
                  key={floor}
                  onClick={() => {
                    console.log('Quick floor button clicked:', floor);
                    setCurrentFloor(floor);
                  }}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    currentFloor === floor 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  Floor {floor}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Challenge Summary Panel */}
        <div className="mb-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-md rounded-lg p-6 border border-blue-400/30">
          <h3 className="text-2xl font-bold text-white mb-4">🏆 Challenge Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-300">{challengeSummary.totalFloors}</div>
              <div className="text-blue-200 text-sm">Total Floors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-300">{challengeSummary.totalTime}</div>
              <div className="text-green-200 text-sm">Total Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-300">{challengeSummary.averageTimePerFloor}</div>
              <div className="text-purple-200 text-sm">Avg/Floor</div>
            </div>
            <div className="text-center">
              <div className={`text-3xl font-bold ${getDangerLevelColor(challengeSummary.overallRiskLevel)}`}>
                {challengeSummary.overallRiskLevel}
              </div>
              <div className="text-gray-300 text-sm">Risk Level</div>
            </div>
          </div>
          {challengeSummary.timeWarning && (
            <div className="mt-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg">
              <div className="text-red-300 text-sm">⚠️ {challengeSummary.timeWarning}</div>
            </div>
          )}
        </div>

        {/* Team Size Selector */}
        <div className="mb-8 bg-white/10 backdrop-blur-md rounded-lg p-6">
          <h3 className="text-xl font-bold text-white mb-4">👥 Team Size Adjustment</h3>
          <p className="text-blue-200 text-sm mb-4">Select your team size to adjust time calculations</p>
          <div className="flex flex-wrap gap-4">
            {Object.entries(teamSizeMultipliers).map(([size, multiplier]) => (
              <button
                key={size}
                onClick={() => setSelectedTeamSize(size as keyof typeof teamSizeMultipliers)}
                className={`px-6 py-3 rounded-lg transition-all ${
                  selectedTeamSize === size
                    ? 'bg-blue-500 text-white shadow-lg scale-105'
                    : 'bg-white/20 text-white hover:bg-white/30 hover:scale-102'
                }`}
              >
                <div className="text-lg font-semibold">{size} Players</div>
                <div className="text-sm opacity-80">x{multiplier.toFixed(1)} time</div>
              </button>
            ))}
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="mb-8 bg-white/10 backdrop-blur-md rounded-lg p-6">
          <h3 className="text-xl font-bold text-white mb-4">🚀 Quick Navigation</h3>
          <div className="flex flex-wrap gap-3">
            {[5, 10, 15, 20, 25, 30].map(floor => (
              <button
                key={floor}
                onClick={() => scrollToFloor(floor)}
                className="px-4 py-2 bg-blue-500/30 hover:bg-blue-500/50 text-blue-200 rounded-lg transition-all hover:scale-105"
              >
                Floor {floor}
              </button>
            ))}
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          {predictions.map((prediction) => (
            <div key={prediction.floor} id={`floor-${prediction.floor}`} className="bg-white/10 backdrop-blur-md rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-white">
                  🏢 Floor {prediction.floor}
                </h2>
                <div className={`px-4 py-2 rounded-lg ${getDangerLevelBg(prediction.dangerLevel)}`}>
                  <span className={`font-bold ${getDangerLevelColor(prediction.dangerLevel)}`}>
                    {prediction.dangerLevel} Risk
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Machine Information */}
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-white mb-3">🤖 Machine Information</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-blue-200">Machine Count:</span>
                      <span className="text-white font-semibold">{prediction.machines} machines</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-200">Estimated Time:</span>
                      <span className="text-white font-semibold">{prediction.estimatedTime} minutes</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-200">Recommended Team:</span>
                      <span className="text-white font-semibold">{prediction.teamSize} players</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-200">Cumulative Time:</span>
                      <span className="text-white font-semibold">{prediction.cumulativeTime} minutes</span>
                    </div>
                  </div>
                </div>

                {/* Twisted Character Information */}
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-white mb-3">👻 Twisted Characters</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-purple-200">Total Count:</span>
                      <span className="text-white font-semibold">{prediction.twistedCount} twisted</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-purple-200">Main Character Chance:</span>
                      <span className="text-white font-semibold">{prediction.mainTwistedChance}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-purple-200">Danger Level:</span>
                      <span className={`font-semibold ${getDangerLevelColor(prediction.dangerLevel)}`}>
                        {prediction.dangerLevel}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Special Events */}
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-white mb-3">🎭 Special Events</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-orange-200">Blackout Chance:</span>
                      <span className="text-white font-semibold">{prediction.blackoutChance}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-orange-200">Room Types:</span>
                      <span className="text-white font-semibold">{prediction.roomTypes.length}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Room Types */}
              {prediction.roomTypes.length > 0 && (
                <div className="mt-4 bg-white/5 rounded-lg p-4">
                  <h4 className="text-md font-semibold text-white mb-2">🏠 Possible Room Types</h4>
                  <div className="flex flex-wrap gap-2">
                    {prediction.roomTypes.map((roomType, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-500/30 text-blue-200 rounded-full text-sm">
                        {roomType}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Warnings */}
              {prediction.warnings.length > 0 && (
                <div className="mt-4 bg-red-500/20 border border-red-500/30 rounded-lg p-4">
                  <h4 className="text-md font-semibold text-red-300 mb-2">⚠️ Important Warnings</h4>
                  <ul className="space-y-1">
                    {prediction.warnings.map((warning, index) => (
                      <li key={index} className="text-red-200 text-sm">• {warning}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Strategy Recommendations */}
              <div className="mt-4 bg-green-500/20 border border-green-500/30 rounded-lg p-4">
                <h4 className="text-md font-semibold text-green-300 mb-2">💡 Strategy Recommendations</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-green-200 mb-2">Team Composition</h5>
                    <ul className="text-green-100 text-sm space-y-1">
                      <li>• Minimum {prediction.teamSize} players recommended</li>
                      <li>• Include support characters for higher floors</li>
                      <li>• Balance between damage and utility</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-green-200 mb-2">Survival Tips</h5>
                    <ul className="text-green-100 text-sm space-y-1">
                      <li>• Bring backup equipment for floor {prediction.floor}</li>
                      <li>• Coordinate machine completion timing</li>
                      <li>• Watch for blackout events ({prediction.blackoutChance}% chance)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Information Panel */}
        <div className="mt-8 bg-white/10 backdrop-blur-md rounded-lg p-6">
          <h3 className="text-xl font-bold text-white mb-4">📚 How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-blue-100">
            <div>
              <h4 className="font-semibold text-white mb-2">Machine Calculation</h4>
              <ul className="space-y-1">
                <li>• Floors 1-8: 3-6 machines, 3 twisted characters</li>
                <li>• 6 machines: 3 twisted characters</li>
                <li>• 8 machines: 4 twisted characters</li>
                <li>• Maximum 20 machines: 10 twisted characters</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">Special Events</h4>
              <ul className="space-y-1">
                <li>• Main twisted characters appear from floor 5+</li>
                <li>• Blackout chance increases by 2% per floor</li>
                <li>• Forest rooms unlock at floor 5</li>
                <li>• Warehouse rooms unlock at floor 10</li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <SEO 
        title="Dandys World Floor Calculator | Strategic Survival Planning Tool"
        description="Advanced floor calculation tool for Dandys World. Plan your survival strategy with detailed machine predictions, team size adjustments, and comprehensive risk assessment."
        keywords="dandys world, floor calculator, survival strategy, machine prediction, twisted character prediction, game planning, survival guide, floor strategy, team optimization"
        ogTitle="Dandys World Floor Calculator"
        ogDescription="Advanced strategic floor planning tool for survival strategy optimization"
        ogImage="https://dandysworldcharacters.com/images/tools/floor-calculator-og.png"
        ogUrl="https://dandysworldcharacters.com/floor-calculator"
        ogType="website"
        ogSiteName="Dandys World Characters"
        twitterCard="summary_large_image"
        twitterTitle="Dandys World Floor Calculator"
        twitterDescription="Advanced strategic floor planning tool for survival strategy"
        twitterImage="https://dandysworldcharacters.com/images/tools/floor-calculator-twitter.png"
        twitterSite="@DandysWorldChars"
        canonical="https://dandysworldcharacters.com/floor-calculator"
        robots="index, follow, max-snippet:160, max-image-preview:standard"
        viewport="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes"
        themeColor="#1a1a1a"
        mobileWebAppCapable="yes"
        appleMobileWebAppCapable="yes"
        appleMobileWebAppStatusBarStyle="black-translucent"
        appleMobileWebAppTitle="Dandys World"
        formatDetection="telephone=no"
      />
      
      {/* Schema Markup for Tool */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Dandys World Floor Calculator",
          "description": "Advanced strategic floor planning tool for survival strategy optimization",
          "applicationCategory": "GameApplication",
          "operatingSystem": "Web Browser",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          }
        })}}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <Navigation />
        
        <div className="container mx-auto px-4 py-8 pt-20">
          {/* Header */}
          <div className="text-center mb-8 relative z-10">
            <h1 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">
              Dandys World Floor Calculator
            </h1>
            <h2 className="text-2xl font-semibold text-blue-200 mb-2 drop-shadow-lg">
              🏢 Advanced Strategic Survival Planning Tool
            </h2>
            <p className="text-xl text-blue-100 mb-4 drop-shadow-lg">
              Plan Your Survival Strategy with Advanced Floor Prediction & Team Optimization
            </p>
          </div>

          {/* Main Content */}
          {renderMainContent()}
        </div>
        
        <Footer />
      </div>
    </>
  );
};

export default FloorCalculator;
