import React, { useState } from 'react';
import { Twisted, SurvivalStrategy, AudioCues, DeadlyCombo, PriorityTarget } from '../types/twisted';
import { getTwistedById, getTwistedStrategies, getTwistedAudioCues, getTwistedDeadlyCombos, getTwistedPriorityTargets } from '../data/twisted';

interface TwistedSurvivalGuideProps {
  twistedId: string;
}

type TabType = 'basic' | 'strategies' | 'audio' | 'combinations';

const TwistedSurvivalGuide: React.FC<TwistedSurvivalGuideProps> = ({ twistedId }) => {
  const [activeTab, setActiveTab] = useState<TabType>('basic');
  const [expandedStrategies, setExpandedStrategies] = useState<Set<string>>(new Set());
  
  const twisted = getTwistedById(twistedId);
  const strategies = getTwistedStrategies(twistedId);
  const audioCues = getTwistedAudioCues(twistedId);
  const deadlyCombos = getTwistedDeadlyCombos(twistedId);
  const priorityTargets = getTwistedPriorityTargets(twistedId);

  if (!twisted) {
    return <div className="text-red-500">Twisted entity not found</div>;
  }

  const toggleStrategy = (strategyId: string) => {
    const newExpanded = new Set(expandedStrategies);
    if (newExpanded.has(strategyId)) {
      newExpanded.delete(strategyId);
    } else {
      newExpanded.add(strategyId);
    }
    setExpandedStrategies(newExpanded);
  };

  const getDangerColor = (danger: string) => {
    switch (danger) {
      case 'extreme': return 'text-red-600 bg-red-100 border-red-300';
      case 'lethal': return 'text-orange-600 bg-orange-100 border-orange-300';
      case 'dangerous': return 'text-yellow-600 bg-yellow-100 border-yellow-300';
      default: return 'text-gray-600 bg-gray-100 border-gray-300';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'expert': return 'text-purple-600 bg-purple-100';
      case 'hard': return 'text-red-600 bg-red-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'easy': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getEffectivenessColor = (effectiveness: string) => {
    switch (effectiveness) {
      case 'critical': return 'text-red-600 bg-red-100';
      case 'high': return 'text-green-600 bg-green-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-gray-600 bg-gray-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const renderBasicInfo = () => (
    <div className="space-y-6">Translation pending<div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center space-x-4 mb-4">
          <span className="text-4xl">{twisted.image}</span>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{twisted.name}</h2>
            <div className="flex space-x-2">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(twisted.dangerLevel)}`}>
                {twisted.dangerLevel.toUpperCase()}
              </span>
              <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-600">
                {twisted.type.toUpperCase()}
              </span>
            </div>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4">{twisted.description}</p>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <span className="text-sm font-medium text-gray-500">Speed:</span>
            <div className="flex space-x-1 mt-1">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full ${i < twisted.speed ? 'bg-red-500' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          </div>
          <div>
            <span className="text-sm font-medium text-gray-500">Attention Span:</span>
            <div className="flex space-x-1 mt-1">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full ${i < twisted.attentionSpan ? 'bg-blue-500' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div>
            <h4 className="font-medium text-gray-700 mb-2">Special Abilities</h4>
            <div className="flex flex-wrap gap-2">
              {twisted.specialAbilities.map((ability, index) => (
                <span key={index} className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-sm">
                  {ability}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-700 mb-2">Identification Tips</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
              {twisted.identificationTips.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-700 mb-2">Avoidance Strategies</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
              {twisted.avoidanceStrategies.map((strategy, index) => (
                <li key={index}>{strategy}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-700 mb-2">Warnings</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
              {twisted.warnings.map((warning, index) => (
                <li key={index} className="text-red-600 font-medium">{warning}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const renderStrategies = () => (
    <div className="space-y-4">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Survival Strategies</h3>
        <div className="space-y-4">
          {strategies.map((strategy) => (
            <div key={strategy.id} className="border border-gray-200 rounded-lg">
              <button
                onClick={() => toggleStrategy(strategy.id)}
                className="w-full p-4 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800">{strategy.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{strategy.description}</p>
                  </div>
                  <div className="flex space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(strategy.difficulty)}`}>
                      {strategy.difficulty}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getEffectivenessColor(strategy.effectiveness)}`}>
                      {strategy.effectiveness}
                    </span>
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-600">
                      {strategy.category}
                    </span>
                  </div>
                  <svg
                    className={`w-5 h-5 text-gray-500 transform transition-transform ${
                      expandedStrategies.has(strategy.id) ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              {expandedStrategies.has(strategy.id) && (
                <div className="px-4 pb-4 space-y-4">
                  <div>
                    <h5 className="font-medium text-gray-700 mb-2">Steps</h5>
                    <ol className="list-decimal list-inside space-y-1 text-sm text-gray-600">
                      {strategy.steps.map((step, index) => (
                        <li key={index}>{step}</li>
                      ))}
                    </ol>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium text-gray-700 mb-2">Requirements</h5>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                        {strategy.requirements.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-gray-700 mb-2">Risks</h5>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                        {strategy.risks.map((risk, index) => (
                          <li key={index} className="text-red-600">{risk}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-gray-700 mb-2">Tips</h5>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                      {strategy.tips.map((tip, index) => (
                        <li key={index}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-gray-700 mb-2">Counter Strategies</h5>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                      {strategy.counterStrategies.map((counter, index) => (
                        <li key={index} className="text-orange-600">{counter}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAudioCues = () => (
    <div className="space-y-4">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Audio Recognition System</h3>
        
        {audioCues && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-700 mb-3">Basic Audio Cues</h4>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm font-medium text-gray-500">Walking:</span>
                    <p className="text-sm text-gray-700 mt-1">{audioCues.walking}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500">Detection:</span>
                    <p className="text-sm text-gray-700 mt-1">{audioCues.detection}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500">Special:</span>
                    <p className="text-sm text-gray-700 mt-1">{audioCues.special}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500">Warning:</span>
                    <p className="text-sm text-gray-700 mt-1">{audioCues.warning}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500">Timing:</span>
                    <p className="text-sm text-gray-700 mt-1">{audioCues.timing}</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-700 mb-3">Detection Tips</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                  {audioCues.detectionTips.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-700 mb-3">Audio Patterns</h4>
              <div className="space-y-3">
                {audioCues.audioPatterns.map((pattern, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-3">
                    <h5 className="font-medium text-gray-800 mb-2">{pattern.name}</h5>
                    <p className="text-sm text-gray-600 mb-2">{pattern.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs">
                      <div>
                        <span className="font-medium text-gray-500">Trigger:</span>
                        <p className="text-gray-700">{pattern.trigger}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-500">Response:</span>
                        <p className="text-gray-700">{pattern.response}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-500">Duration:</span>
                        <p className="text-gray-700">{pattern.duration}s</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const renderCombinations = () => (
    <div className="space-y-4">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Lethal Combination Warnings</h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-gray-700 mb-3">Deadly Combinations</h4>
            <div className="space-y-3">
              {deadlyCombos.map((combo, index) => (
                <div key={index} className={`border rounded-lg p-4 ${getDangerColor(combo.danger)}`}>
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-semibold">⚠️ {combo.danger.toUpperCase()} COMBO: {twisted.name} + {combo.partner}</h5>
                    <span className="text-xs font-medium bg-white px-2 py-1 rounded">
                      Priority: {combo.priority}/10
                    </span>
                  </div>
                  <p className="text-sm mb-2"><strong>Reason:</strong> {combo.reason}</p>
                  <p className="text-sm mb-2"><strong>Strategy:</strong> {combo.strategy}</p>
                  <p className="text-sm"><strong>Escape Route:</strong> {combo.escapeRoute}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-700 mb-3">Priority Target System</h4>
            <div className="space-y-3">
              {priorityTargets.map((target, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-semibold text-gray-800">Focus on avoiding {target.target}</h5>
                    <span className="text-xs font-medium bg-blue-100 text-blue-600 px-2 py-1 rounded">
                      Priority: {target.priority}/10
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2"><strong>Reason:</strong> {target.reason}</p>
                  <p className="text-sm text-gray-600 mb-2"><strong>When Present:</strong> {target.whenPresent}</p>
                  <p className="text-sm text-gray-600"><strong>Avoidance Strategy:</strong> {target.avoidanceStrategy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderQuickReference = () => (
    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
      <h4 className="font-medium text-yellow-800 mb-2">🚨 Quick Reference</h4>
      <div className="space-y-2 text-sm text-yellow-700">
        <p><strong>Most Critical:</strong> {deadlyCombos.length > 0 ? `Avoid ${deadlyCombos[0].partner} + ${twisted.name} combo` : 'No lethal combinations'}</p>
        <p><strong>Best Strategy:</strong> {strategies.length > 0 ? strategies[0].title : 'No strategies available'}</p>
        <p><strong>Audio Warning:</strong> {audioCues?.warning || 'No audio warning'}</p>
        <p><strong>Priority Target:</strong> {priorityTargets.length > 0 ? `Focus on avoiding ${priorityTargets[0].target}` : 'No priority targets'}</p>
      </div>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Twisted Survival Guide</h1>
        <p className="text-gray-600">Comprehensive survival strategies and tactics for {twisted.name}</p>
      </div>Translation pending<div className="mb-6">
        {renderQuickReference()}
      </div>Translation pending<div className="border-b border-gray-200 mb-6">
        <nav className="flex space-x-8">
          {[
            { id: 'basic', label: 'Basic Info', icon: 'ℹ️' },
            { id: 'strategies', label: 'Strategies', icon: '🛡️' },
            { id: 'audio', label: 'Audio Cues', icon: '🔊' },
            { id: 'combinations', label: 'Combinations', icon: '⚠️' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabType)}
              className={`py-2 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                activeTab === tab.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </nav>
      </div>Translation pending<div className="min-h-[600px]">
        {activeTab === 'basic' && renderBasicInfo()}
        {activeTab === 'strategies' && renderStrategies()}
        {activeTab === 'audio' && renderAudioCues()}
        {activeTab === 'combinations' && renderCombinations()}
      </div>
    </div>
  );
};

export default TwistedSurvivalGuide;
