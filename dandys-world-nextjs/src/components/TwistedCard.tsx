import React from 'react';
import { Twisted } from '../types/twisted';

interface TwistedCardProps {
  twisted: Twisted;
  onClick: () => void;
}

const TwistedCard: React.FC<TwistedCardProps> = ({ twisted, onClick }) => {
  const getDangerLevelColor = (level: string) => {
    switch (level) {
      case 'extreme': return 'text-red-500';
      case 'high': return 'text-orange-500';
      case 'medium': return 'text-yellow-500';
      case 'low': return 'text-green-500';
      default: return 'text-gray-400';
    }
  };

  const getDangerLevelBg = (level: string) => {
    switch (level) {
      case 'extreme': return 'bg-red-900/20 border-red-500/30';
      case 'high': return 'bg-orange-900/20 border-orange-500/30';
      case 'medium': return 'bg-yellow-900/20 border-yellow-500/30';
      case 'low': return 'bg-green-900/20 border-green-500/30';
      default: return 'bg-gray-900/20 border-gray-500/30';
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

  const formatStatName = (stat: string) => {
    return stat.replace(/([A-Z])/g, ' $1').trim();
  };

  return (
    <div 
      className={`bg-bg-card border border-gray-600 rounded-xl card-hover cursor-pointer overflow-hidden ${getDangerLevelBg(twisted.dangerLevel)}`}
      onClick={onClick}
    >
      <div className="p-6">
        <div className="text-center mb-4">
          <div className="text-6xl mb-3 animate-float">{twisted.image}</div>
          <h3 className="text-xl font-bold mb-2 text-text-primary">{twisted.name}</h3>
          <div className="flex items-center justify-center space-x-3 mb-3">
            <span className={`text-sm capitalize ${getTypeColor(twisted.type)}`}>
              {twisted.type}
            </span>
            <span className="text-gray-400">•</span>
            <span className={`text-sm font-semibold ${getDangerLevelColor(twisted.dangerLevel)}`}>
              {twisted.dangerLevel.toUpperCase()}
            </span>
          </div>
        </div>Translation pending<div className="space-y-3 mb-4">
          <div className="flex items-center justify-between text-sm">
            <span className="capitalize text-text-secondary">Speed</span>
            <div className="flex items-center space-x-2">
              <div className="stat-bar w-16">
                <div className="stat-fill" style={{ width: `${(twisted.speed / 5) * 100}%` }}></div>
              </div>
              <span className="text-accent-main font-semibold w-6">{twisted.speed}</span>
            </div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="capitalize text-text-secondary">Attention</span>
            <div className="flex items-center space-x-2">
              <div className="stat-bar w-16">
                <div className="stat-fill" style={{ width: `${(twisted.attentionSpan / 5) * 100}%` }}></div>
              </div>
              <span className="text-accent-main font-semibold w-6">{twisted.attentionSpan}</span>
            </div>
          </div>
        </div>Translation pending<div className="mb-4">
          <h4 className="text-sm font-semibold text-text-primary mb-2">Special Abilities</h4>
          <div className="flex flex-wrap gap-1">
            {twisted.specialAbilities.slice(0, 2).map((ability, index) => (
              <span 
                key={index} 
                className="text-xs bg-accent-main/20 text-accent-main px-2 py-1 rounded-full"
              >
                {ability}
              </span>
            ))}
            {twisted.specialAbilities.length > 2 && (
              <span className="text-xs text-text-secondary px-2 py-1">
                +{twisted.specialAbilities.length - 2} more
              </span>
            )}
          </div>
        </div>Translation pending<div className={`text-center py-2 rounded-lg border ${getDangerLevelBg(twisted.dangerLevel)}`}>
          <span className={`text-sm font-bold ${getDangerLevelColor(twisted.dangerLevel)}`}>
            {twisted.dangerLevel === 'extreme' ? '⚠️ EXTREME DANGER ⚠️' : 
             twisted.dangerLevel === 'high' ? '🚨 HIGH RISK 🚨' :
             twisted.dangerLevel === 'medium' ? '⚠️ MEDIUM RISK ⚠️' : '✅ LOW RISK ✅'}
          </span>
        </div>
        
        <button className="w-full bg-accent-main hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors mt-4">
          View Survival Guide
        </button>
      </div>
    </div>
  );
};

export default TwistedCard;
