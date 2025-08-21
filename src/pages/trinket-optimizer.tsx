import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { characters } from '../data/characters';
import { 
  getIntelligentRecommendations,
  defaultEngineConfig 
} from '../data/intelligentRecommendations';
import { 
  IntelligentRecommendation,
  UserPreferences,
  RecommendationEngineConfig 
} from '../types/trinketOptimizer';
import BuildComparison from '../components/trinket-optimizer/BuildComparison';
import BuildSimulator from '../components/trinket-optimizer/BuildSimulator';
import BuildHistory from '../components/trinket-optimizer/BuildHistory';
import BuildSaveForm from '../components/trinket-optimizer/BuildSaveForm';

// Game style types
type GameStyle = 'extractor' | 'distractor' | 'support' | 'balanced';

const TrinketOptimizer: React.FC = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<string>('');
  const [selectedGameStyle, setSelectedGameStyle] = useState<GameStyle>('balanced');
  const [recommendations, setRecommendations] = useState<IntelligentRecommendation[]>([]);
  const [selectedRecommendation, setSelectedRecommendation] = useState<IntelligentRecommendation | null>(null);
  const [showAcquisitionPath, setShowAcquisitionPath] = useState(false);
  const [showAlternatives, setShowAlternatives] = useState(false);
  const [showBuildComparison, setShowBuildComparison] = useState(false);
  const [showBuildSimulator, setShowBuildSimulator] = useState(false);
  const [showBuildHistory, setShowBuildHistory] = useState(false);
  const [showBuildSaveForm, setShowBuildSaveForm] = useState(false);
  const [selectedBuildForSimulation, setSelectedBuildForSimulation] = useState<IntelligentRecommendation | null>(null);
  const [selectedBuildForSaving, setSelectedBuildForSaving] = useState<IntelligentRecommendation | null>(null);
  const [userPreferences, setUserPreferences] = useState<UserPreferences>({
    playstyle: 'balanced',
    difficulty: 'intermediate',
    budget: 'moderate',
    focus: 'balanced',
    preferredRoles: [],
    avoidRoles: [],
    metaPreference: 'balanced'
  });
  const [engineConfig, setEngineConfig] = useState<RecommendationEngineConfig>(defaultEngineConfig);

  // Generate recommendations when character or game style changes
  useEffect(() => {
    if (selectedCharacter && selectedGameStyle) {
      const character = characters.find(c => c.id === selectedCharacter);
      if (character) {
        // Update user preferences
        const updatedPreferences = {
          ...userPreferences,
          playstyle: selectedGameStyle as any,
          preferredRoles: [character.type]
        };
        setUserPreferences(updatedPreferences);
        
        // Update engine configuration
        const updatedConfig = {
          ...engineConfig,
          preferences: updatedPreferences
        };
        setEngineConfig(updatedConfig);
        
        // Generate intelligent recommendations
        const newRecommendations = getIntelligentRecommendations(character, selectedGameStyle, 4);
        setRecommendations(newRecommendations);
        setSelectedRecommendation(null);
      }
    }
  }, [selectedCharacter, selectedGameStyle]);

  // Generate recommendations
  const generateRecommendations = () => {
    if (selectedCharacter && selectedGameStyle) {
      const character = characters.find(c => c.id === selectedCharacter);
      if (character) {
        const newRecommendations = getIntelligentRecommendations(character, selectedGameStyle, 4);
        setRecommendations(newRecommendations);
        setSelectedRecommendation(null);
      }
    }
  };

  // Open build comparison
  const openBuildComparison = () => {
    if (recommendations.length >= 2) {
      setShowBuildComparison(true);
    }
  };

  // Open build simulator
  const openBuildSimulator = (build: IntelligentRecommendation) => {
    setSelectedBuildForSimulation(build);
    setShowBuildSimulator(true);
  };

  // Open build save form
  const openBuildSaveForm = (build: IntelligentRecommendation) => {
    setSelectedBuildForSaving(build);
    setShowBuildSaveForm(true);
  };

  // Open build history
  const openBuildHistory = () => {
    setShowBuildHistory(true);
  };

  // Save build
  const saveBuild = (build: IntelligentRecommendation, character: string, gameStyle: string, tags: string[], notes: string, isPublic: boolean) => {
    // Can call BuildHistory component's save method
    // or save directly to localStorage
    const savedBuild = {
      id: Date.now().toString(),
      name: build.name,
      character,
      gameStyle,
      build,
      createdAt: new Date().toISOString(),
      lastModified: new Date().toISOString(),
      tags,
      notes,
      isPublic
    };

    const existingBuilds = JSON.parse(localStorage.getItem('trinket-builds') || '[]');
    const updatedBuilds = [...existingBuilds, savedBuild];
    localStorage.setItem('trinket-builds', JSON.stringify(updatedBuilds));

    setShowBuildSaveForm(false);
    setSelectedBuildForSaving(null);
    
    // Show success message
    alert('Build saved successfully!');
  };

  // Load build
  const loadBuild = (build: IntelligentRecommendation) => {
    setSelectedBuildForSaving(build);
    setShowBuildHistory(false);
    // Can set selected build as current recommendation
    // or directly display build details
  };

  // Get rarity color
  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'text-gray-400';
      case 'uncommon': return 'text-green-400';
      case 'rare': return 'text-blue-400';
      case 'epic': return 'text-purple-400';
      case 'legendary': return 'text-yellow-400';
      default: return 'text-gray-400';
    }
  };

  // Get rarity background color
  const getRarityBgColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'bg-gray-100 dark:bg-gray-800';
      case 'uncommon': return 'bg-green-100 dark:bg-green-900';
      case 'rare': return 'bg-blue-100 dark:bg-blue-900';
      case 'epic': return 'bg-purple-100 dark:bg-purple-900';
      case 'legendary': return 'bg-yellow-100 dark:bg-yellow-900';
      default: return 'bg-gray-100 dark:bg-gray-800';
    }
  };

  // Render star rating
  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`text-lg ${
              star <= rating ? 'text-yellow-400' : 'text-gray-300'
            }`}
          >
            ★
          </span>
        ))}
        <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
          {rating}/5
        </span>
      </div>
    );
  };

  // Render acquisition path
  const renderAcquisitionPath = (recommendation: IntelligentRecommendation) => {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
        <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
          🎯 Acquisition Path
        </h3>
        
        {/* Overall information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <div className="text-sm text-blue-600 dark:text-blue-400">Total Cost</div>
            <div className="text-lg font-semibold text-blue-800 dark:text-blue-200">
              {recommendation.acquisition.estimatedCost}
            </div>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <div className="text-sm text-green-600 dark:text-green-400">Priority</div>
            <div className="text-lg font-semibold text-green-800 dark:text-green-200 capitalize">
              {recommendation.acquisition.priority}
            </div>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
            <div className="text-sm text-purple-600 dark:text-purple-400">Total Time</div>
            <div className="text-lg font-semibold text-purple-800 dark:text-purple-200">
              {recommendation.progressionPath.estimatedTime}
            </div>
          </div>
        </div>

        {/* Unlock steps */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
            Unlock Steps
          </h4>
          {recommendation.progressionPath.steps.map((step, index) => (
            <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                {step.step}
              </div>
              <div className="flex-1">
                <div className="font-medium text-gray-900 dark:text-white">
                  {step.description}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Requirement: {step.requirement}
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Estimated Time: {step.estimatedTime}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    step.priority === 'high' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' :
                    step.priority === 'medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                    'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                  }`}>
                    {step.priority} Priority
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Resource requirements */}
        <div className="mt-6">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            Resource Requirements
          </h4>
          <div className="flex flex-wrap gap-2">
            {recommendation.progressionPath.resourceRequirements.map((resource, index) => (
              <span key={index} className="px-3 py-1 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                {resource}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Render alternative builds
  const renderAlternatives = (recommendation: IntelligentRecommendation) => {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
        <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
          🔄 Alternative Builds
        </h3>
        
        <div className="space-y-4">
          {recommendation.alternatives.map((alternative, index) => (
            <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {alternative.name}
                </h4>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    alternative.difficulty === 'advanced' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' :
                    alternative.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                    'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                  }`}>
                    {alternative.difficulty}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    alternative.cost === 'expensive' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' :
                    alternative.cost === 'moderate' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                    'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                  }`}>
                    {alternative.cost}
                  </span>
                </div>
              </div>
              
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                {alternative.reasoning}
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Effectiveness:</span>
                  {renderStars(alternative.effectiveness)}
                </div>
                <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm">
                  View Details
                </button>
              </div>
              
              {alternative.tradeoffs.length > 0 && (
                <div className="mt-3">
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Tradeoffs:</div>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    {alternative.tradeoffs.map((tradeoff, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <span className="text-red-500">⚠</span>
                        <span>{tradeoff}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Render recommendation details
  const renderRecommendationDetail = (recommendation: IntelligentRecommendation) => {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {recommendation.name}
          </h3>
          <div className="flex items-center space-x-2">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
              recommendation.difficulty === 'advanced' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' :
              recommendation.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
              'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
            }`}>
              {recommendation.difficulty}
            </span>
            <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              {recommendation.metaAnalysis.tier} Tier
            </span>
          </div>
        </div>

        {/* Confidence */}
        <div className="mb-4">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Confidence:</div>
          {renderStars(recommendation.confidence)}
        </div>

        {/* Effectiveness ratings */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {recommendation.effectiveness.overall}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Overall</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-600 dark:text-red-400">
              {recommendation.effectiveness.damage}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Damage</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">
              {recommendation.effectiveness.survival}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Survival</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
              {recommendation.effectiveness.utility}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Utility</div>
          </div>
        </div>

        {/* Recommendation reasoning */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            💡 Recommendation Reasoning
          </h4>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <p className="text-blue-800 dark:text-blue-200">
              {recommendation.reasoning.primary}
            </p>
          </div>
        </div>

        {/* Stat synergy */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            📊 Stat Synergy
          </h4>
          <div className="space-y-3">
            {recommendation.reasoning.statSynergy.map((synergy, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">
                    {synergy.description}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {synergy.stats.join(', ')}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {synergy.beforeValue} → {synergy.afterValue}
                  </div>
                  <div className="text-sm font-medium text-green-600 dark:text-green-400">
                    +{synergy.improvement}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scenario applicability */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            🎯 Applicable Scenarios
          </h4>
          <div className="flex flex-wrap gap-2">
            {recommendation.scenarios.map((scenario, index) => (
              <span key={index} className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
                {scenario}
              </span>
            ))}
          </div>
        </div>

        {/* Meta analysis */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            📈 Meta Analysis
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                {recommendation.metaAnalysis.popularity}%
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Usage Rate</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-green-600 dark:text-green-400">
                {recommendation.metaAnalysis.winRate}%
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Win Rate</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-purple-600 dark:text-purple-400">
                {recommendation.metaAnalysis.tier}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Tier</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-yellow-600 dark:text-yellow-400">
                {recommendation.metaAnalysis.counterStrategies.length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Counter Strategies</div>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setShowAcquisitionPath(!showAcquisitionPath)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            {showAcquisitionPath ? 'Hide' : 'Show'} Acquisition Path
          </button>
          <button
            onClick={() => setShowAlternatives(!showAlternatives)}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
          >
            {showAlternatives ? 'Hide' : 'Show'} Alternative Builds
          </button>
          <button
            onClick={() => openBuildSimulator(recommendation)}
            className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors"
          >
            🎮 Build Simulator
          </button>
          <button
            onClick={() => openBuildSaveForm(recommendation)}
            className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors"
          >
            💾 Save Build
          </button>
        </div>

        {/* Acquisition path */}
        {showAcquisitionPath && renderAcquisitionPath(recommendation)}

        {/* Alternative builds */}
        {showAlternatives && renderAlternatives(recommendation)}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      <SEO 
        title="Trinket Optimizer - Intelligent Trinket Recommendation System"
        description="Dandy's World intelligent trinket recommendation system, providing personalized trinket combinations based on AI algorithms, including acquisition paths, build comparison, and meta analysis."
        keywords="trinket optimizer, trinket optimization, intelligent recommendations, build analysis, acquisition path, meta analysis"
      />
      
      <div className="container mx-auto px-4 py-8">
        {/* Page title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            🎯 Trinket Optimizer
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Intelligent Trinket Recommendation System - Optimal trinket combinations for every character
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <Link 
              to="/calculator" 
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              ← Back to Calculator
            </Link>
            <button
              onClick={openBuildHistory}
              className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
            >
              📚 Build History
            </button>
          </div>
        </div>

        {/* Configuration area */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            ⚙️ Configuration Settings
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Character selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Select Character
              </label>
              <select
                value={selectedCharacter}
                onChange={(e) => setSelectedCharacter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Please select a character</option>
                {characters.map((character) => (
                  <option key={character.id} value={character.id}>
                    {character.name} - {character.type}
                  </option>
                ))}
              </select>
            </div>

            {/* Game style selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Game Style
              </label>
              <div className="grid grid-cols-2 gap-2">
                {(['extractor', 'distractor', 'support', 'balanced'] as GameStyle[]).map((style) => (
                  <button
                    key={style}
                    onClick={() => setSelectedGameStyle(style)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      selectedGameStyle === style
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500'
                    }`}
                  >
                    {style === 'extractor' && '🎯 Extractor'}
                    {style === 'distractor' && '🎭 Distractor'}
                    {style === 'support' && '💫 Support'}
                    {style === 'balanced' && '⚖️ Balanced'}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Generate button */}
          <div className="mt-6 text-center">
            <button
              onClick={generateRecommendations}
              disabled={!selectedCharacter || !selectedGameStyle}
              className="px-8 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors text-lg font-medium"
            >
              🚀 Generate Intelligent Recommendations
            </button>
          </div>
        </div>

        {/* Recommendation results */}
        {recommendations.length > 0 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                🎉 Intelligent Recommendation Results
              </h2>
              
              {/* Build comparison button */}
              {recommendations.length >= 2 && (
                <button
                  onClick={openBuildComparison}
                  className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
                >
                  🔍 Build Comparison
                </button>
              )}
            </div>
            
            {/* Recommendation list */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {recommendations.map((recommendation, index) => (
                <div key={recommendation.id} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      #{index + 1} {recommendation.name}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        recommendation.difficulty === 'advanced' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' :
                        recommendation.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                        'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                      }`}>
                        {recommendation.difficulty}
                      </span>
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                        {recommendation.metaAnalysis.tier} Tier
                      </span>
                    </div>
                  </div>

                  {/* Trinket combination */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Trinket Combination:
                    </h4>
                    <div className="space-y-2">
                      {recommendation.trinkets.map((trinket, idx) => (
                        <div key={idx} className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                          <span className="text-2xl">{trinket.image}</span>
                          <div className="flex-1">
                            <div className="font-medium text-gray-900 dark:text-white">
                              {trinket.name}
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              {trinket.slot} • {trinket.type}
                            </div>
                          </div>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRarityBgColor(trinket.rarity)} ${getRarityColor(trinket.rarity)}`}>
                            {trinket.rarity}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Effectiveness rating */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Overall Effectiveness:
                      </span>
                      <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                        {recommendation.effectiveness.overall}/5
                      </span>
                    </div>
                    {renderStars(recommendation.effectiveness.overall)}
                  </div>

                  {/* Confidence */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Confidence:
                      </span>
                      <span className="text-lg font-bold text-green-600 dark:text-green-400">
                        {recommendation.confidence}/5
                      </span>
                    </div>
                    {renderStars(recommendation.confidence)}
                  </div>

                  {/* Recommendation reasoning */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Recommendation Reason:
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                      {recommendation.reasoning.primary}
                    </p>
                  </div>

                  {/* Action buttons */}
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setSelectedRecommendation(recommendation)}
                      className="flex-1 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors text-sm"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => openBuildSimulator(recommendation)}
                      className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors text-sm"
                    >
                      🎮 Simulate
                    </button>
                    <button
                      onClick={() => openBuildSaveForm(recommendation)}
                      className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors text-sm"
                    >
                      💾 Save
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Recommendation details */}
        {selectedRecommendation && (
          <div className="mt-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                📋 Recommendation Details
              </h2>
              <button
                onClick={() => setSelectedRecommendation(null)}
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
              >
                Close
              </button>
            </div>
            {renderRecommendationDetail(selectedRecommendation)}
          </div>
        )}

        {/* Empty state */}
        {!selectedCharacter && !selectedGameStyle && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Start Using Trinket Optimizer
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Select a character and game style to get personalized trinket recommendations
            </p>
          </div>
        )}
      </div>
      
      {/* Build comparison modal */}
      {showBuildComparison && (
        <BuildComparison
          builds={recommendations}
          onClose={() => setShowBuildComparison(false)}
        />
      )}

      {/* Build simulator modal */}
      {showBuildSimulator && selectedBuildForSimulation && (
        <BuildSimulator
          build={selectedBuildForSimulation}
          onClose={() => {
            setShowBuildSimulator(false);
            setSelectedBuildForSimulation(null);
          }}
        />
      )}

      {/* Build history modal */}
      {showBuildHistory && (
        <BuildHistory
          onClose={() => setShowBuildHistory(false)}
          onLoadBuild={loadBuild}
        />
      )}

      {/* Build save form modal */}
      {showBuildSaveForm && selectedBuildForSaving && (
        <BuildSaveForm
          build={selectedBuildForSaving}
          character={selectedCharacter}
          gameStyle={selectedGameStyle}
          onSave={saveBuild}
          onCancel={() => {
            setShowBuildSaveForm(false);
            setSelectedBuildForSaving(null);
          }}
        />
      )}
      
      <Footer />
    </div>
  );
};

export default TrinketOptimizer;