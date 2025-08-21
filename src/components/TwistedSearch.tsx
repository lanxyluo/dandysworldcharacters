import React, { useState, useMemo } from 'react';
import { Twisted, SurvivalStrategy } from '../types/twisted';
import { twisted, getTwistedStrategies } from '../data/twisted';

interface TwistedSearchProps {
  onSelectTwisted?: (twistedId: string) => void;
}

const TwistedSearch: React.FC<TwistedSearchProps> = ({ onSelectTwisted }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');

  const categories = ['all', 'positioning', 'timing', 'teamwork', 'resource', 'escape'];
  const difficulties = ['all', 'easy', 'medium', 'hard', 'expert'];
  const types = ['all', 'hunter', 'patrol', 'special', 'boss'];

  const filteredTwisted = useMemo(() => {
    return twisted.filter(entity => {
      const matchesSearch = entity.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           entity.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           entity.specialAbilities.some(ability => 
                             ability.toLowerCase().includes(searchQuery.toLowerCase())
                           );
      
      const matchesCategory = selectedCategory === 'all' || 
                             entity.survivalStrategies.some(strategy => 
                               strategy.category === selectedCategory
                             );
      
      const matchesDifficulty = selectedDifficulty === 'all' || 
                               entity.survivalStrategies.some(strategy => 
                                 strategy.difficulty === selectedDifficulty
                               );
      
      const matchesType = selectedType === 'all' || entity.type === selectedType;
      
      return matchesSearch && matchesCategory && matchesDifficulty && matchesType;
    });
  }, [searchQuery, selectedCategory, selectedDifficulty, selectedType]);

  const searchStrategies = useMemo(() => {
    if (!searchQuery) return [];
    
    const results: Array<{
      twisted: Twisted;
      strategy: SurvivalStrategy;
      matchType: 'title' | 'description' | 'steps' | 'tips';
      matchText: string;
    }> = [];
    
    twisted.forEach(entity => {
      entity.survivalStrategies.forEach(strategy => {
        // 搜索策略标题
        if (strategy.title.toLowerCase().includes(searchQuery.toLowerCase())) {
          results.push({
            twisted: entity,
            strategy,
            matchType: 'title',
            matchText: strategy.title
          });
        }
        
        // 搜索策略描述
        if (strategy.description.toLowerCase().includes(searchQuery.toLowerCase())) {
          results.push({
            twisted: entity,
            strategy,
            matchType: 'description',
            matchText: strategy.description
          });
        }
        
        // 搜索策略步骤
        strategy.steps.forEach(step => {
          if (step.toLowerCase().includes(searchQuery.toLowerCase())) {
            results.push({
              twisted: entity,
              strategy,
              matchType: 'steps',
              matchText: step
            });
          }
        });
        
        // 搜索策略提示
        strategy.tips.forEach(tip => {
          if (tip.toLowerCase().includes(searchQuery.toLowerCase())) {
            results.push({
              twisted: entity,
              strategy,
              matchType: 'tips',
              matchText: tip
            });
          }
        });
      });
    });
    
    return results;
  }, [searchQuery]);

  const highlightMatch = (text: string, query: string) => {
    if (!query) return text;
    
    const regex = new RegExp(`(${query})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => 
      regex.test(part) ? (
        <mark key={index} className="bg-yellow-200 px-1 rounded">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-800 rounded-lg border border-gray-600">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">Twisted Strategy Search</h2>
        <p className="text-gray-300">Search for specific survival strategies and scenarios</p>
      </div>

      {/* 搜索栏 */}
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for strategies, scenarios, or specific tactics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-400 text-white placeholder-gray-400"
          />
          <div className="absolute right-3 top-3">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

      {/* 过滤器 */}
      <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Strategy Category</label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-400 text-white hover:bg-gray-600 transition-colors"
          >
            {categories.map(category => (
              <option key={category} value={category} className="bg-gray-700 text-white">
                {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Difficulty Level</label>
          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-400 text-white hover:bg-gray-600 transition-colors"
          >
            {difficulties.map(difficulty => (
              <option key={difficulty} value={difficulty} className="bg-gray-700 text-white">
                {difficulty === 'all' ? 'All Difficulties' : difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Entity Type</label>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-400 text-white hover:bg-gray-600 transition-colors"
          >
            {types.map(type => (
              <option key={type} value={type} className="bg-gray-700 text-white">
                {type === 'all' ? 'All Types' : type.charAt(0).toUpperCase() + type.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* 搜索结果 */}
      {searchQuery && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-white mb-4">
            Strategy Search Results ({searchStrategies.length})
          </h3>
          <div className="space-y-4">
            {searchStrategies.map((result, index) => (
              <div key={index} className="bg-gray-700 border border-gray-600 rounded-lg p-4 hover:bg-gray-600 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{result.twisted.image}</span>
                    <div>
                      <h4 className="font-semibold text-white">{result.twisted.name}</h4>
                      <p className="text-sm text-gray-300">{result.strategy.title}</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      result.strategy.difficulty === 'expert' ? 'bg-purple-600 text-white' :
                      result.strategy.difficulty === 'hard' ? 'bg-red-600 text-white' :
                      result.strategy.difficulty === 'medium' ? 'bg-yellow-600 text-white' :
                      'bg-green-600 text-white'
                    }`}>
                      {result.strategy.difficulty}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      result.strategy.effectiveness === 'critical' ? 'bg-red-600 text-white' :
                      result.strategy.effectiveness === 'high' ? 'bg-green-600 text-white' :
                      result.strategy.effectiveness === 'medium' ? 'bg-yellow-600 text-white' :
                      'bg-gray-600 text-white'
                    }`}>
                      {result.strategy.effectiveness}
                    </span>
                  </div>
                </div>
                
                <div className="mb-3">
                  <span className="text-xs font-medium text-gray-300 bg-gray-600 px-2 py-1 rounded">
                    Match in: {result.matchType}
                  </span>
                </div>
                
                <p className="text-sm text-gray-300 mb-3">
                  {highlightMatch(result.matchText, searchQuery)}
                </p>
                
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-400">
                    Category: {result.strategy.category}
                  </span>
                  {onSelectTwisted && (
                    <button
                      onClick={() => onSelectTwisted(result.twisted.id)}
                      className="px-3 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700 transition-colors"
                    >
                      View Guide
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 过滤后的实体列表 */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-4">
          Available Entities ({filteredTwisted.length})
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTwisted.map(entity => (
            <div key={entity.id} className="bg-gray-700 border border-gray-600 rounded-lg p-4 hover:bg-gray-600 transition-colors cursor-pointer">
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-3xl">{entity.image}</span>
                <div>
                  <h4 className="font-semibold text-white">{entity.name}</h4>
                  <div className="flex space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      entity.dangerLevel === 'extreme' ? 'bg-red-600 text-white' :
                      entity.dangerLevel === 'high' ? 'bg-orange-600 text-white' :
                      entity.dangerLevel === 'medium' ? 'bg-yellow-600 text-white' :
                      'bg-green-600 text-white'
                    }`}>
                      {entity.dangerLevel}
                    </span>
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-600 text-white">
                      {entity.type}
                    </span>
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-gray-300 mb-3 line-clamp-2">{entity.description}</p>
              
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-400">
                  {entity.survivalStrategies.length} strategies available
                </span>
                {onSelectTwisted && (
                  <button
                    onClick={() => onSelectTwisted(entity.id)}
                    className="px-3 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700 transition-colors"
                  >
                    View Guide
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TwistedSearch;
