import React, { useMemo } from 'react';
import { Character } from '../../types/character';

interface ComparisonTableProps {
  characters: Character[];
}

export default function ComparisonTable({ characters }: ComparisonTableProps) {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'main': return 'bg-gradient-to-r from-purple-500 to-pink-500';
      case 'regular': return 'bg-gradient-to-r from-blue-500 to-cyan-500';
      case 'event': return 'bg-gradient-to-r from-orange-500 to-red-500';
      case 'toon': return 'bg-gradient-to-r from-indigo-500 to-purple-500';
      case 'lethal': return 'bg-gradient-to-r from-red-600 to-black';
      case 'twisted': return 'bg-gradient-to-r from-purple-800 to-black';
      default: return 'bg-gray-600';
    }
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'text-green-400';
      case 'uncommon': return 'text-green-400';
      case 'rare': return 'text-blue-400';
      case 'legendary': return 'text-yellow-400';
      case 'twisted': return 'text-purple-400';
      default: return 'text-gray-400';
    }
  };

  const getStatColor = (value: number, maxValue: number = 5) => {
    const percentage = (value / maxValue) * 100;
    if (percentage >= 80) return 'text-green-400';
    if (percentage >= 60) return 'text-yellow-400';
    if (percentage >= 40) return 'text-orange-400';
    return 'text-red-400';
  };

  const renderStatBar = (value: number, maxValue: number = 5) => {
    const percentage = (value / maxValue) * 100;
    let color = 'bg-red-500';
    if (percentage >= 80) color = 'bg-green-500';
    else if (percentage >= 60) color = 'bg-yellow-500';
    else if (percentage >= 40) color = 'bg-orange-500';

    return (
      <div className="flex items-center gap-2">
        <div className="w-16 bg-gray-700 rounded-full h-2">
          <div 
            className={`h-2 rounded-full ${color}`}
            style={{ width: `${percentage}%` }}
          />
        </div>
        <span className={`text-sm font-medium ${getStatColor(value, maxValue)}`}>
          {value}/{maxValue}
        </span>
      </div>
    );
  };

  // Enhanced stat analysis
  const statAnalysis = useMemo(() => {
    if (characters.length < 2) return null;

    const stats = ['skillCheck', 'stealth', 'speed', 'health', 'damage'];
    const analysis: Record<string, { best: string; worst: string; avg: number }> = {};

    stats.forEach(stat => {
      const values = characters.map(c => c.stats[stat as keyof typeof c.stats] as number);
      const max = Math.max(...values);
      const min = Math.min(...values);
      const avg = values.reduce((a, b) => a + b, 0) / values.length;
      
      const best = characters.find(c => c.stats[stat as keyof typeof c.stats] === max)?.name || '';
      const worst = characters.find(c => c.stats[stat as keyof typeof c.stats] === min)?.name || '';
      
      analysis[stat] = { best, worst, avg: Math.round(avg * 10) / 10 };
    });

    return analysis;
  }, [characters]);

  // Team synergy analysis
  const teamSynergy = useMemo(() => {
    if (characters.length < 2) return null;

    const synergies: string[] = [];
    const conflicts: string[] = [];

    // Check for balanced team composition
    const hasStealth = characters.some(c => c.stats.stealth >= 4);
    const hasSpeed = characters.some(c => c.stats.speed >= 4);
    const hasHealth = characters.some(c => c.stats.health >= 4);
    const hasDamage = characters.some(c => c.stats.damage >= 4);

    if (hasStealth && hasSpeed && hasHealth) {
      synergies.push("Balanced team with stealth, speed, and health coverage");
    }
    if (hasDamage && hasHealth) {
      synergies.push("Strong offensive and defensive combination");
    }
    if (characters.every(c => c.stats.skillCheck >= 3)) {
      synergies.push("High skill check team for complex objectives");
    }

    // Check for potential conflicts
    if (characters.every(c => c.stats.stealth <= 2)) {
      conflicts.push("Low stealth team - vulnerable to detection");
    }
    if (characters.every(c => c.stats.health <= 2)) {
      conflicts.push("Low health team - fragile in combat");
    }

    return { synergies, conflicts };
  }, [characters]);

  // Unlock path analysis
  const unlockAnalysis = useMemo(() => {
    if (characters.length < 2) return null;

    const analysis: {
      totalIchor: number;
      researchRequirements: string[];
      masteryRequirements: string[];
      twistedVersions: string[];
    } = {
      totalIchor: 0,
      researchRequirements: [],
      masteryRequirements: [],
      twistedVersions: []
    };

    characters.forEach(character => {
      if (character.requirements.ichor) {
        analysis.totalIchor += character.requirements.ichor;
      }
      if (character.requirements.research) {
        analysis.researchRequirements.push(character.requirements.research);
      }
      if (character.requirements.mastery) {
        analysis.masteryRequirements.push(character.requirements.mastery);
      }
      if (character.twistedVersion) {
        analysis.twistedVersions.push(character.twistedVersion);
      }
    });

    return analysis;
  }, [characters]);

  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
      {/* Table Header */}
      <div className="bg-gray-700 px-6 py-4">
        <h2 className="text-xl font-semibold">Character Comparison</h2>
        {characters.length > 1 && (
          <p className="text-sm text-gray-300 mt-1">
            Analyzing {characters.length} characters for optimal team composition
          </p>
        )}
      </div>

      {/* Basic Info Section */}
      <div className="p-6 border-b border-gray-700">
        <h3 className="text-lg font-medium mb-4">Basic Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {characters.map(character => (
            <div key={character.id} className="text-center">
              <div className="text-4xl mb-3">{character.image}</div>
              <div className="font-semibold text-lg mb-1">{character.name}</div>
              <div className="text-sm text-gray-400 mb-3">{character.fullName}</div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-sm text-gray-400">Type:</span>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${getTypeColor(character.type)}`}>
                    {character.type}
                  </span>
                </div>
                
                <div className="flex items-center justify-center gap-2">
                  <span className="text-sm text-gray-400">Rarity:</span>
                  <span className={`text-sm font-medium ${getRarityColor(character.rarity)}`}>
                    {character.rarity}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Stats Section */}
      <div className="p-6 border-b border-gray-700">
        <h3 className="text-lg font-medium mb-4">Statistics & Analysis</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-2 px-4">Stat</th>
                {characters.map(character => (
                  <th key={character.id} className="text-center py-2 px-4">
                    {character.name}
                  </th>
                ))}
                {characters.length > 1 && (
                  <th className="text-center py-2 px-4">Analysis</th>
                )}
              </tr>
            </thead>
            <tbody>
              {['skillCheck', 'stealth', 'speed', 'health', 'damage'].map(stat => (
                <tr key={stat} className="border-b border-gray-700">
                  <td className="py-3 px-4 font-medium capitalize">
                    {stat === 'skillCheck' ? 'Skill Check' : stat}
                  </td>
                  {characters.map(character => (
                    <td key={character.id} className="py-3 px-4 text-center">
                      {renderStatBar(character.stats[stat as keyof typeof character.stats] as number)}
                    </td>
                  ))}
                  {characters.length > 1 && statAnalysis && (
                    <td className="py-3 px-4 text-center text-sm">
                      <div className="space-y-1">
                        <div className="text-green-400">
                          Best: {statAnalysis[stat]?.best}
                        </div>
                        <div className="text-red-400">
                          Worst: {statAnalysis[stat]?.worst}
                        </div>
                        <div className="text-gray-400">
                          Avg: {statAnalysis[stat]?.avg}
                        </div>
                      </div>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Team Synergy Analysis */}
      {characters.length > 1 && teamSynergy && (
        <div className="p-6 border-b border-gray-700">
          <h3 className="text-lg font-medium mb-4">Team Synergy Analysis</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teamSynergy.synergies.length > 0 && (
              <div>
                <h4 className="text-md font-medium text-green-400 mb-3">✅ Synergies</h4>
                <ul className="space-y-2">
                  {teamSynergy.synergies.map((synergy, index) => (
                    <li key={index} className="text-sm text-gray-300 flex items-start gap-2">
                      <span className="text-green-400 mt-1">•</span>
                      {synergy}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {teamSynergy.conflicts.length > 0 && (
              <div>
                <h4 className="text-md font-medium text-red-400 mb-3">⚠️ Potential Issues</h4>
                <ul className="space-y-2">
                  {teamSynergy.conflicts.map((conflict, index) => (
                    <li key={index} className="text-sm text-gray-300 flex items-start gap-2">
                      <span className="text-red-400 mt-1">•</span>
                      {conflict}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Abilities Section */}
      <div className="p-6 border-b border-gray-700">
        <h3 className="text-lg font-medium mb-4">Abilities</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {characters.map(character => (
            <div key={character.id} className="space-y-4">
              <div className="text-center mb-3">
                <div className="text-2xl mb-2">{character.image}</div>
                <div className="font-medium">{character.name}</div>
              </div>
              
              <div className="space-y-3">
                <div className="bg-gray-700 rounded-lg p-3">
                  <h4 className="font-medium text-blue-400 mb-2">Active Ability</h4>
                  <div className="text-sm text-gray-300 mb-1">{character.abilities.active.name}</div>
                  <div className="text-xs text-gray-400 mb-2">{character.abilities.active.description}</div>
                  <div className="text-xs text-gray-500">Cooldown: {character.abilities.active.cooldown}s</div>
                </div>
                
                <div className="bg-gray-700 rounded-lg p-3">
                  <h4 className="font-medium text-green-400 mb-2">Passive Ability</h4>
                  <div className="text-sm text-gray-300 mb-1">{character.abilities.passive.name}</div>
                  <div className="text-xs text-gray-400">{character.abilities.passive.description}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Unlock Requirements & Path Analysis */}
      <div className="p-6 border-b border-gray-700">
        <h3 className="text-lg font-medium mb-4">Unlock Requirements</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {characters.map(character => (
            <div key={character.id} className="space-y-3">
              <div className="text-center mb-3">
                <div className="text-2xl mb-2">{character.image}</div>
                <div className="font-medium">{character.name}</div>
              </div>
              
              <div className="bg-gray-700 rounded-lg p-3 space-y-2">
                {character.requirements.ichor && (
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-300">Ichor Cost:</span>
                    <span className="text-yellow-400 font-medium">{character.requirements.ichor.toLocaleString()}</span>
                  </div>
                )}
                {character.requirements.research && (
                  <div className="text-sm text-gray-300">
                    <span className="text-blue-400">Research:</span> {character.requirements.research}
                  </div>
                )}
                {character.requirements.mastery && (
                  <div className="text-sm text-gray-300">
                    <span className="text-purple-400">Mastery:</span> {character.requirements.mastery}
                  </div>
                )}
                {character.requirements.other && character.requirements.other.length > 0 && (
                  <div className="text-sm text-gray-300">
                    <span className="text-orange-400">Other:</span> {character.requirements.other.join(', ')}
                  </div>
                )}
                {character.twistedVersion && (
                  <div className="text-sm text-gray-300">
                    <span className="text-red-400">Twisted Version:</span> {character.twistedVersion}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Unlock Path Analysis */}
      {characters.length > 1 && unlockAnalysis && (
        <div className="p-6">
          <h3 className="text-lg font-medium mb-4">Unlock Path Analysis</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="font-medium text-yellow-400 mb-3">Total Investment Required</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-300">Total Ichor:</span>
                  <span className="text-yellow-400 font-medium text-lg">
                    {unlockAnalysis.totalIchor.toLocaleString()}
                  </span>
                </div>
                {unlockAnalysis.researchRequirements.length > 0 && (
                  <div className="text-sm text-gray-300">
                    <span className="text-blue-400">Research Tasks:</span> {unlockAnalysis.researchRequirements.length}
                  </div>
                )}
                {unlockAnalysis.masteryRequirements.length > 0 && (
                  <div className="text-sm text-gray-300">
                    <span className="text-purple-400">Mastery Quests:</span> {unlockAnalysis.masteryRequirements.length}
                  </div>
                )}
              </div>
            </div>
            
            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="font-medium text-purple-400 mb-3">Twisted Versions</h4>
              {unlockAnalysis.twistedVersions.length > 0 ? (
                <div className="space-y-2">
                  {unlockAnalysis.twistedVersions.map((twisted, index) => (
                    <div key={index} className="text-sm text-gray-300">
                      <span className="text-red-400">•</span> {twisted}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-sm text-gray-400">No twisted versions available</div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
