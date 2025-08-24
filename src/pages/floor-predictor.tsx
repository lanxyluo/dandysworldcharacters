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
}

interface FloorProgress {
  floor: number;
  completed: boolean;
  completionDate: string;
  bestTime?: number;
  teamSize: number;
  difficulty: 'Normal' | 'Hard';
  notes?: string;
}

interface StrategyNote {
  id: string;
  floor: number;
  title: string;
  content: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

type TabType = 'prediction' | 'progress' | 'collection';

const FloorPredictor: React.FC = () => {
  const [currentFloor, setCurrentFloor] = useState<number>(1);
  const [targetFloor, setTargetFloor] = useState<number | null>(null);
  const [difficultyMode, setDifficultyMode] = useState<'Normal' | 'Hard'>('Normal');
  const [activeTab, setActiveTab] = useState<TabType>('prediction');
  
  // Progress tracking state
  const [floorProgress, setFloorProgress] = useState<FloorProgress[]>([]);
  const [showProgressForm, setShowProgressForm] = useState(false);
  const [progressForm, setProgressForm] = useState<Partial<FloorProgress>>({});
  
  // Strategy collection state
  const [strategyNotes, setStrategyNotes] = useState<StrategyNote[]>([]);
  const [showNoteForm, setShowNoteForm] = useState(false);
  const [noteForm, setNoteForm] = useState<Partial<StrategyNote>>({});

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedProgress = localStorage.getItem('floorProgress');
    const savedNotes = localStorage.getItem('strategyNotes');
    
    if (savedProgress) {
      setFloorProgress(JSON.parse(savedProgress));
    }
    if (savedNotes) {
      setStrategyNotes(JSON.parse(savedNotes));
    }
  }, []);

  // Save data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('floorProgress', JSON.stringify(floorProgress));
  }, [floorProgress]);

  useEffect(() => {
    localStorage.setItem('strategyNotes', JSON.stringify(strategyNotes));
  }, [strategyNotes]);

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

  // Generate predictions
  const predictions = useMemo(() => {
    console.log('Recalculating predictions:', { currentFloor, targetFloor, difficultyMode });
    
    const floors = targetFloor ? 
      Array.from({length: targetFloor - currentFloor + 1}, (_, i) => currentFloor + i) :
      [currentFloor];

    console.log('Calculating for floors:', floors);

    return floors.map(floor => {
      const machines = calculateMachines(floor);
      const twistedCount = calculateTwisted(floor);
      const mainTwistedChance = calculateMainTwistedChance(floor);
      const blackoutChance = calculateBlackoutChance(floor);
      const dangerLevel = calculateDangerLevel(floor);
      const estimatedTime = calculateEstimatedTime(machines, difficultyMode);
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
        estimatedTime,
        teamSize,
        roomTypes,
        warnings
      };
    });
  }, [currentFloor, targetFloor, difficultyMode]);

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

  // Progress tracking functions
  const addFloorProgress = (progress: FloorProgress) => {
    const existingIndex = floorProgress.findIndex(p => p.floor === progress.floor);
    if (existingIndex >= 0) {
      const updated = [...floorProgress];
      updated[existingIndex] = progress;
      setFloorProgress(updated);
    } else {
      setFloorProgress([...floorProgress, progress]);
    }
    setShowProgressForm(false);
    setProgressForm({});
  };

  const removeFloorProgress = (floor: number) => {
    setFloorProgress(floorProgress.filter(p => p.floor !== floor));
  };

  // Strategy note functions
  const addStrategyNote = (note: Omit<StrategyNote, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newNote: StrategyNote = {
      ...note,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    setStrategyNotes([...strategyNotes, newNote]);
    setShowNoteForm(false);
    setNoteForm({});
  };

  const updateStrategyNote = (id: string, updates: Partial<StrategyNote>) => {
    const updated = strategyNotes.map(note => 
      note.id === id ? { ...note, ...updates, updatedAt: new Date().toISOString() } : note
    );
    setStrategyNotes(updated);
  };

  const deleteStrategyNote = (id: string) => {
    setStrategyNotes(strategyNotes.filter(note => note.id !== id));
  };

  // Render tab content based on activeTab
  const renderTabContent = () => {
    switch (activeTab) {
      case 'prediction':
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

            {/* Results Section */}
            <div className="space-y-6">
              {predictions.map((prediction) => (
                <div key={prediction.floor} className="bg-white/10 backdrop-blur-md rounded-lg p-6">
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

      case 'progress':
        return (
          <div className="space-y-6">
            {/* Progress Summary */}
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">📊 Progress Summary</h3>
                <button
                  onClick={() => setShowProgressForm(true)}
                  className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
                >
                  + Add Progress
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="text-2xl font-bold text-green-400">{floorProgress.filter(p => p.completed).length}</div>
                  <div className="text-blue-200 text-sm">Floors Completed</div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-400">{floorProgress.length}</div>
                  <div className="text-blue-200 text-sm">Total Records</div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="text-2xl font-bold text-purple-400">
                    {floorProgress.length > 0 ? Math.max(...floorProgress.map(p => p.floor)) : 0}
                  </div>
                  <div className="text-blue-200 text-sm">Highest Floor</div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="text-2xl font-bold text-orange-400">
                    {floorProgress.filter(p => p.difficulty === 'Hard').length}
                  </div>
                  <div className="text-blue-200 text-sm">Hard Mode Wins</div>
                </div>
              </div>
            </div>

            {/* Progress Form */}
            {showProgressForm && (
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
                <h3 className="text-lg font-bold text-white mb-4">📝 Add Floor Progress</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-semibold mb-2">Floor Number</label>
                    <input
                      type="number"
                      min="1"
                      max="50"
                      value={progressForm.floor || ''}
                      onChange={(e) => setProgressForm({...progressForm, floor: parseInt(e.target.value)})}
                      className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Team Size</label>
                    <input
                      type="number"
                      min="1"
                      max="8"
                      value={progressForm.teamSize || ''}
                      onChange={(e) => setProgressForm({...progressForm, teamSize: parseInt(e.target.value)})}
                      className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Difficulty</label>
                    <select
                      value={progressForm.difficulty || 'Normal'}
                      onChange={(e) => setProgressForm({...progressForm, difficulty: e.target.value as 'Normal' | 'Hard'})}
                      className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white"
                    >
                      <option value="Normal">Normal</option>
                      <option value="Hard">Hard</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Best Time (minutes)</label>
                    <input
                      type="number"
                      min="1"
                      value={progressForm.bestTime || ''}
                      onChange={(e) => setProgressForm({...progressForm, bestTime: parseInt(e.target.value)})}
                      className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-white font-semibold mb-2">Notes</label>
                    <textarea
                      value={progressForm.notes || ''}
                      onChange={(e) => setProgressForm({...progressForm, notes: e.target.value})}
                      className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white h-20"
                      placeholder="Add any notes about this floor completion..."
                    />
                  </div>
                </div>
                <div className="flex gap-2 mt-4">
                  <button
                    onClick={() => addFloorProgress({
                      ...progressForm,
                      completed: true,
                      completionDate: new Date().toISOString()
                    } as FloorProgress)}
                    className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
                  >
                    Save Progress
                  </button>
                  <button
                    onClick={() => setShowProgressForm(false)}
                    className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}

            {/* Progress List */}
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
              <h3 className="text-lg font-bold text-white mb-4">📋 Progress Records</h3>
              {floorProgress.length === 0 ? (
                <p className="text-blue-200 text-center py-8">No progress records yet. Start by adding your first floor completion!</p>
              ) : (
                <div className="space-y-3">
                  {floorProgress
                    .sort((a, b) => b.floor - a.floor)
                    .map((progress) => (
                      <div key={progress.floor} className="bg-white/5 rounded-lg p-4 flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3">
                            <span className="text-xl">🏢</span>
                            <div>
                              <h4 className="font-semibold text-white">Floor {progress.floor}</h4>
                              <p className="text-blue-200 text-sm">
                                Completed on {new Date(progress.completionDate).toLocaleDateString()} • 
                                Team: {progress.teamSize} • 
                                Difficulty: {progress.difficulty}
                                {progress.bestTime && ` • Best Time: ${progress.bestTime}min`}
                              </p>
                              {progress.notes && (
                                <p className="text-green-200 text-sm mt-1">💭 {progress.notes}</p>
                              )}
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={() => removeFloorProgress(progress.floor)}
                          className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded text-sm transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>
        );

      case 'collection':
        return (
          <div className="space-y-6">
            {/* Strategy Collection Header */}
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">📚 Strategy Collection</h3>
                <button
                  onClick={() => setShowNoteForm(true)}
                  className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
                >
                  + Add Strategy
                </button>
              </div>
              <p className="text-blue-200">
                Collect and organize your floor strategies, tips, and personal notes for future reference.
              </p>
            </div>

            {/* Strategy Note Form */}
            {showNoteForm && (
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
                <h3 className="text-lg font-bold text-white mb-4">📝 Add Strategy Note</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-white font-semibold mb-2">Title</label>
                    <input
                      type="text"
                      value={noteForm.title || ''}
                      onChange={(e) => setNoteForm({...noteForm, title: e.target.value})}
                      className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white"
                      placeholder="Enter strategy title..."
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Floor Number</label>
                    <input
                      type="number"
                      min="1"
                      max="50"
                      value={noteForm.floor || ''}
                      onChange={(e) => setNoteForm({...noteForm, floor: parseInt(e.target.value)})}
                      className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Content</label>
                    <textarea
                      value={noteForm.content || ''}
                      onChange={(e) => setNoteForm({...noteForm, content: e.target.value})}
                      className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white h-32"
                      placeholder="Write your strategy notes here..."
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Tags (comma-separated)</label>
                    <input
                      type="text"
                      value={noteForm.tags?.join(', ') || ''}
                      onChange={(e) => setNoteForm({...noteForm, tags: e.target.value.split(',').map(t => t.trim()).filter(t => t)})}
                      className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white"
                      placeholder="e.g., strategy, tips, equipment, team"
                    />
                  </div>
                </div>
                <div className="flex gap-2 mt-4">
                  <button
                    onClick={() => addStrategyNote(noteForm as Omit<StrategyNote, 'id' | 'createdAt' | 'updatedAt'>)}
                    className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
                  >
                    Save Strategy
                  </button>
                  <button
                    onClick={() => setShowNoteForm(false)}
                    className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}

            {/* Strategy Notes List */}
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
              <h3 className="text-lg font-bold text-white mb-4">📖 Your Strategies</h3>
              {strategyNotes.length === 0 ? (
                <p className="text-blue-200 text-center py-8">No strategy notes yet. Start building your collection!</p>
              ) : (
                <div className="space-y-4">
                  {strategyNotes
                    .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
                    .map((note) => (
                      <div key={note.id} className="bg-white/5 rounded-lg p-4">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h4 className="font-semibold text-white">{note.title}</h4>
                              <span className="px-2 py-1 bg-blue-500/30 text-blue-200 rounded-full text-xs">
                                Floor {note.floor}
                              </span>
                            </div>
                            <p className="text-blue-200 text-sm mb-2">
                              Created: {new Date(note.createdAt).toLocaleDateString()} • 
                              Updated: {new Date(note.updatedAt).toLocaleDateString()}
                            </p>
                            {note.tags.length > 0 && (
                              <div className="flex flex-wrap gap-1 mb-2">
                                {note.tags.map((tag, index) => (
                                  <span key={index} className="px-2 py-1 bg-purple-500/30 text-purple-200 rounded-full text-xs">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            )}
                            <p className="text-white whitespace-pre-wrap">{note.content}</p>
                          </div>
                          <div className="flex gap-2 ml-4">
                            <button
                              onClick={() => deleteStrategyNote(note.id)}
                              className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded text-sm transition-colors"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <SEO 
        title="Dandys World Floor Predictor | Survival Strategy Planner"
        description="Essential Dandys World tools including Floor Predictor, Trinket Optimizer and Twisted Guide. Strategic planning tools to improve your survival rate and game strategy."
        keywords="dandys world, floor predictor, survival strategy, machine prediction, twisted character prediction, game planning, survival guide, floor strategy"
        ogTitle="Dandys World Floor Predictor"
        ogDescription="Strategic floor planning tool for survival strategy optimization"
        ogImage="https://dandysworldcharacters.com/images/tools/floor-predictor-og.png"
        ogUrl="https://dandysworldcharacters.com/tools/floor-predictor"
        ogType="website"
        ogSiteName="Dandys World Characters"
        twitterCard="summary_large_image"
        twitterTitle="Dandys World Floor Predictor"
        twitterDescription="Strategic floor planning tool for survival strategy"
        twitterImage="https://dandysworldcharacters.com/images/tools/floor-predictor-twitter.png"
        twitterSite="@DandysWorldChars"
        canonical="https://dandysworldcharacters.com/tools/floor-predictor"
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
          "name": "Dandys World Floor Predictor",
          "description": "Strategic floor planning tool for survival strategy optimization",
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
              Dandys World Floor Predictor
            </h1>
            <h2 className="text-2xl font-semibold text-blue-200 mb-2 drop-shadow-lg">
              🏢 Strategic Survival Planning Tool
            </h2>
            <p className="text-xl text-blue-100 mb-4 drop-shadow-lg">
              Plan Your Survival Strategy with Advanced Floor Prediction
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-2 mb-8">
            <div className="flex space-x-2">
              <button
                onClick={() => setActiveTab('prediction')}
                className={`flex-1 px-4 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === 'prediction'
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                🎯 Floor Prediction
              </button>
              <button
                onClick={() => setActiveTab('progress')}
                className={`flex-1 px-4 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === 'progress'
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                📈 Progress Tracker
              </button>
              <button
                onClick={() => setActiveTab('collection')}
                className={`flex-1 px-4 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === 'collection'
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                📚 Strategy Collection
              </button>
            </div>
          </div>

          {/* Tab Content */}
          {renderTabContent()}
        </div>
        
        <Footer />
      </div>
    </>
  );
};

export default FloorPredictor;
