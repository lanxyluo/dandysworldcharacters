import React, { useState, useEffect } from 'react';
import { 
  getCharacterStats, 
  getRarityDistribution, 
  getDifficultyCategories, 
  getAbilityCategories,
  getCharactersByRarity
} from '../data/index';
import { Character, Rarity } from '../types/character';

const RarityDemo: React.FC = () => {
  const [stats, setStats] = useState<any>(null);
  const [selectedRarity, setSelectedRarity] = useState<Rarity>('common');
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const characterStats = getCharacterStats();
    setStats(characterStats);
    setCharacters(getCharactersByRarity('common'));
  }, []);

  const handleRarityChange = (rarity: Rarity) => {
    setSelectedRarity(rarity);
    setCharacters(getCharactersByRarity(rarity));
  };

  if (!stats) return <div>Loading...</div>;

  const rarityDistribution = getRarityDistribution();
  const difficultyCategories = getDifficultyCategories();
  const abilityCategories = getAbilityCategories();

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">稀有度系统演示</h1>
      
      {/* 总体统计 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-blue-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-800">总角色数</h3>
          <p className="text-3xl font-bold text-blue-600">{stats.total}</p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-green-800">正常角色</h3>
          <p className="text-3xl font-bold text-green-600">{stats.normal}</p>
        </div>
        <div className="bg-red-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-red-800">扭曲角色</h3>
          <p className="text-3xl font-bold text-red-600">{stats.twisted}</p>
        </div>
      </div>

      {/* 稀有度分布 */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">稀有度分布</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {Object.entries(rarityDistribution).map(([rarity, data]) => (
            <div 
              key={rarity}
              className={`p-4 rounded-lg cursor-pointer transition-all ${
                selectedRarity === rarity 
                  ? 'ring-2 ring-blue-500 bg-blue-50' 
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
              onClick={() => handleRarityChange(rarity as Rarity)}
            >
              <h3 className="text-lg font-semibold capitalize">{rarity}</h3>
              <p className="text-2xl font-bold">{data.count}</p>
              <p className="text-sm text-gray-600">{data.percentage}%</p>
            </div>
          ))}
        </div>
      </div>

      {/* 角色类型分布 */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">角色类型分布</h2>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {Object.entries(stats.byType).map(([type, count]) => (
            <div key={type} className="bg-gray-100 p-4 rounded-lg">
              <h3 className="text-lg font-semibold capitalize">{type}</h3>
              <p className="text-2xl font-bold">{count}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 获取难度分析 */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">获取难度分析</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {Object.entries(difficultyCategories).map(([category, data]) => (
            <div key={category} className="bg-gray-100 p-4 rounded-lg">
              <h3 className="text-lg font-semibold capitalize">{category}</h3>
              <p className="text-2xl font-bold">{data.count}</p>
              <p className="text-sm text-gray-600">{data.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 能力分类 */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">能力分类</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {Object.entries(abilityCategories).map(([category, data]) => (
            <div key={category} className="bg-gray-100 p-4 rounded-lg">
              <h3 className="text-lg font-semibold capitalize">{category}</h3>
              <p className="text-2xl font-bold">{data.count}</p>
              <p className="text-sm text-gray-600">{data.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 角色列表 */}
      <div>
        <h2 className="text-2xl font-bold mb-4">
          {selectedRarity.charAt(0).toUpperCase() + selectedRarity.slice(1)} 角色 
          ({characters.length})
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {characters.map((char) => (
            <div key={char.id} className="bg-white border rounded-lg p-4 shadow-sm">
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-3">{char.image}</span>
                <div>
                  <h3 className="font-semibold">{char.name}</h3>
                  <p className="text-sm text-gray-600">{char.fullName}</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 mb-3">{char.description}</p>
              <div className="flex justify-between text-xs text-gray-500">
                <span>Type: {char.type}</span>
                <span>Rarity: {char.rarity}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RarityDemo;
