import React from 'react';
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
      default: return 'bg-gray-600';
    }
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'text-green-400';
      case 'legendary': return 'text-yellow-400';
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

  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
      {/* Table Header */}
      <div className="bg-gray-700 px-6 py-4">
        <h2 className="text-xl font-semibold">Character Comparison</h2>
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

      {/* Stats Section */}
      <div className="p-6 border-b border-gray-700">
        <h3 className="text-lg font-medium mb-4">Statistics</h3>
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
              </tr>
            </thead>
            <tbody>
              {['hearts', 'skillCheck', 'movementSpeed', 'stamina', 'stealth', 'extractionSpeed'].map(stat => (
                <tr key={stat} className="border-b border-gray-700">
                  <td className="py-3 px-4 font-medium capitalize">
                    {stat === 'skillCheck' ? 'Skill Check' : 
                     stat === 'movementSpeed' ? 'Movement Speed' : 
                     stat === 'extractionSpeed' ? 'Extraction Speed' : stat}
                  </td>
                  {characters.map(character => (
                    <td key={character.id} className="py-3 px-4 text-center">
                      {renderStatBar(character.stats[stat as keyof typeof character.stats] as number)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

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
              
              {/* Active Ability */}
              <div className="bg-gray-700 rounded-lg p-4">
                <h4 className="font-medium mb-2 text-blue-400">Active Ability</h4>
                <div className="text-sm mb-2 font-medium">{character.abilities.active.name}</div>
                <div className="text-sm text-gray-300 mb-2">{character.abilities.active.description}</div>
                <div className="text-xs text-gray-400">Cooldown: {character.abilities.active.cooldown}s</div>
              </div>
              
              {/* Passive Ability */}
              <div className="bg-gray-700 rounded-lg p-4">
                <h4 className="font-medium mb-2 text-green-400">Passive Ability</h4>
                <div className="text-sm mb-2 font-medium">{character.abilities.passive.name}</div>
                <div className="text-sm text-gray-300">{character.abilities.passive.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Requirements Section */}
      <div className="p-6">
        <h3 className="text-lg font-medium mb-4">Unlock Requirements</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-2 px-4">Requirement</th>
                {characters.map(character => (
                  <th key={character.id} className="text-center py-2 px-4">
                    {character.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700">
                <td className="py-3 px-4 font-medium">Ornaments</td>
                {characters.map(character => (
                  <td key={character.id} className="py-3 px-4 text-center">
                    {character.requirements.ornaments || 'N/A'}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-3 px-4 font-medium">Baskets</td>
                {characters.map(character => (
                  <td key={character.id} className="py-3 px-4 text-center">
                    {character.requirements.baskets || 'N/A'}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-3 px-4 font-medium">Ichor</td>
                {characters.map(character => (
                  <td key={character.id} className="py-3 px-4 text-center">
                    {character.requirements.ichor || 'N/A'}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-3 px-4 font-medium">Research</td>
                {characters.map(character => (
                  <td key={character.id} className="py-3 px-4 text-center">
                    <div className="text-sm">{character.requirements.research || 'N/A'}</div>
                  </td>
                ))}
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Note</td>
                {characters.map(character => (
                  <td key={character.id} className="py-3 px-4 text-center">
                    <div className="text-sm text-gray-400">{character.requirements.note || 'N/A'}</div>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
