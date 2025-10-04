import React from 'react';
import { Twisted } from '../types/twisted';

interface TwistedModalProps {
  twisted: Twisted | null;
  isOpen: boolean;
  onClose: () => void;
}

const TwistedModal: React.FC<TwistedModalProps> = ({ twisted, isOpen, onClose }) => {
  if (!isOpen || !twisted) return null;

  const getDangerLevelColor = (level: string) => {
    switch (level) {
      case 'extreme': return 'text-red-500';
      case 'high': return 'text-orange-500';
      case 'medium': return 'text-yellow-500';
      case 'low': return 'text-green-500';
      default: return 'text-gray-400';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'boss': return 'text-purple-400';
      case 'hunter': return 'text-red-400';
      case 'patrol': return 'text-blue-400';
      case 'special': return 'text-yellow-400';
      default: return 'text-gray-400';
    }
  };

  const getDangerLevelIcon = (level: string) => {
    switch (level) {
      case 'extreme': return '💀';
      case 'high': return '🚨';
      case 'medium': return '⚠️';
      case 'low': return '✅';
      default: return '❓';
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-bg-card border border-gray-600 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">Translation pending<div className="p-6 border-b border-gray-600">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-6xl">{twisted.image}</div>
              <div>
                <h2 className="text-3xl font-bold text-text-primary">{twisted.name}</h2>
                <div className="flex items-center space-x-3 mt-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getTypeColor(twisted.type)} bg-bg-secondary`}>
                    {twisted.type.toUpperCase()}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getDangerLevelColor(twisted.dangerLevel)} bg-bg-secondary`}>
                    {getDangerLevelIcon(twisted.dangerLevel)} {twisted.dangerLevel.toUpperCase()}
                  </span>
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white text-2xl font-bold p-2 hover:bg-bg-secondary rounded-lg transition-colors"
            >
              ×
            </button>
          </div>
        </div>Translation pending<div className="p-6 space-y-6">Translation pending<div>
            <h3 className="text-xl font-semibold text-text-primary mb-3">Description</h3>
            <p className="text-text-secondary leading-relaxed">{twisted.description}</p>
          </div>Translation pending<div>
            <h3 className="text-xl font-semibold text-text-primary mb-3">Basic Stats</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-bg-secondary p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Speed</h4>
                <div className="flex items-center space-x-3">
                  <div className="stat-bar flex-1">
                    <div className="stat-fill" style={{ width: `${(twisted.speed / 5) * 100}%` }}></div>
                  </div>
                  <span className="text-accent-main font-bold text-lg">{twisted.speed}/5</span>
                </div>
                <p className="text-sm text-text-secondary mt-2">
                  {twisted.speed <= 2 ? 'Slow and methodical' : 
                   twisted.speed <= 3 ? 'Moderate speed' : 
                   twisted.speed <= 4 ? 'Fast and agile' : 'Extremely fast'}
                </p>
              </div>
              <div className="bg-bg-secondary p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Attention Span</h4>
                <div className="flex items-center space-x-3">
                  <div className="stat-bar flex-1">
                    <div className="stat-fill" style={{ width: `${(twisted.attentionSpan / 5) * 100}%` }}></div>
                  </div>
                  <span className="text-accent-main font-bold text-lg">{twisted.attentionSpan}/5</span>
                </div>
                <p className="text-sm text-text-secondary mt-2">
                  {twisted.attentionSpan <= 2 ? 'Easily distracted' : 
                   twisted.attentionSpan <= 3 ? 'Moderate focus' : 
                   twisted.attentionSpan <= 4 ? 'Highly focused' : 'Extremely focused'}
                </p>
              </div>
            </div>
          </div>Translation pending<div>
            <h3 className="text-xl font-semibold text-text-primary mb-3">Special Abilities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {twisted.specialAbilities.map((ability, index) => (
                <div key={index} className="bg-bg-secondary p-3 rounded-lg">
                  <span className="text-accent-main font-semibold">• {ability}</span>
                </div>
              ))}
            </div>
          </div>Translation pending<div>
            <h3 className="text-xl font-semibold text-text-primary mb-3">Appearance & Identification</h3>
            <div className="bg-bg-secondary p-4 rounded-lg">
              <h4 className="font-semibold text-text-primary mb-2">Visual Characteristics</h4>
              <div className="space-y-2 mb-4">
                {twisted.appearance.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span className="text-accent-main">👁️</span>
                    <span className="text-text-secondary">{feature}</span>
                  </div>
                ))}
              </div>
              <h4 className="font-semibold text-text-primary mb-2">Identification Tips</h4>
              <div className="space-y-2">
                {twisted.identificationTips.map((tip, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span className="text-yellow-400">💡</span>
                    <span className="text-text-secondary">{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>Translation pending<div>
            <h3 className="text-xl font-semibold text-text-primary mb-3">Survival Strategies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-bg-secondary p-4 rounded-lg">
                <h4 className="font-semibold text-green-400 mb-2">✅ Avoidance Strategies</h4>
                <div className="space-y-2">
                  {twisted.avoidanceStrategies.map((strategy, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <span className="text-green-400 text-sm">•</span>
                      <span className="text-text-secondary text-sm">{strategy}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-bg-secondary p-4 rounded-lg">
                <h4 className="font-semibold text-red-400 mb-2">⚠️ Critical Warnings</h4>
                <div className="space-y-2">
                  {twisted.warnings.map((warning, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <span className="text-red-400 text-sm">•</span>
                      <span className="text-text-secondary text-sm">{warning}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>Translation pending<div>
            <h3 className="text-xl font-semibold text-text-primary mb-3">Behavior & Locations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-bg-secondary p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Behavior Pattern</h4>
                <p className="text-text-secondary leading-relaxed">{twisted.behavior}</p>
              </div>
              <div className="bg-bg-secondary p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Spawn Locations</h4>
                <div className="space-y-2">
                  {twisted.spawnLocations.map((location, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <span className="text-accent-main">📍</span>
                      <span className="text-text-secondary">{location}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>Translation pending<div className={`border-2 rounded-lg p-4 ${getDangerLevelColor(twisted.dangerLevel)} border-current`}>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">Danger Level: {twisted.dangerLevel.toUpperCase()}</h3>
              <p className="text-sm">
                {twisted.dangerLevel === 'extreme' ? 'This entity is extremely dangerous. Avoid at all costs. Only engage with maximum preparation and backup.' :
                 twisted.dangerLevel === 'high' ? 'This entity is highly dangerous. Extreme caution required. Only engage if absolutely necessary.' :
                 twisted.dangerLevel === 'medium' ? 'This entity poses moderate danger. Caution advised. Engage only with proper preparation.' :
                 'This entity poses low danger. Basic caution sufficient. Can be handled with standard precautions.'}
              </p>
            </div>
          </div>
        </div>Translation pending<div className="p-6 border-t border-gray-600">
          <div className="flex justify-end space-x-3">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-gray-600 hover:bg-gray-500 text-white rounded-lg transition-colors"
            >
              Close
            </button>
            <button
              onClick={() =>Translation pending</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwistedModal;
