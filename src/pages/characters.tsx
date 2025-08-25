import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Character } from '../types/character';
import { characters } from '../data/characters';
import ScrollToTopLink from '../components/ScrollToTopLink';
import CharacterModal from '../components/CharacterModal';
import { useNavigate, useParams } from 'react-router-dom';

const CharactersPage: React.FC = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedRarity, setSelectedRarity] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  
  const navigate = useNavigate();
  const { characterId } = useParams();

  // 当URL参数变化时，自动打开对应的角色详情
  useEffect(() => {
    if (characterId) {
      const character = characters.find(c => c.id === characterId);
      if (character) {
        setSelectedCharacter(character);
        setIsModalOpen(true);
      }
    }
  }, [characterId]);

  // 处理角色选择
  const handleCharacterSelect = (character: Character) => {
    setSelectedCharacter(character);
    setIsModalOpen(true);
    // 更新URL，但不替换历史记录
    navigate(`/characters/${character.id}`, { replace: false });
  };

  // 处理弹窗关闭
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCharacter(null);
    // 返回角色列表页面
    navigate('/characters');
  };

  // 过滤和排序角色
  const filteredAndSortedCharacters = characters
    .filter(character => {
      const matchesSearch = character.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           character.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = selectedType === 'all' || character.type === selectedType;
      const matchesRarity = selectedRarity === 'all' || character.rarity === selectedRarity;
      return matchesSearch && matchesType && matchesRarity;
    })
    .sort((a, b) => {
      let comparison = 0;
      switch (sortBy) {
        case 'name':
          comparison = a.name.localeCompare(b.name);
          break;
        case 'type':
          comparison = a.type.localeCompare(b.type);
          break;
        case 'rarity':
          comparison = a.rarity.localeCompare(b.rarity);
          break;
        case 'skillCheck':
          comparison = a.stats.skillCheck - b.stats.skillCheck;
          break;
        case 'stealth':
          comparison = a.stats.stealth - b.stats.stealth;
          break;
        case 'speed':
          comparison = a.stats.speed - b.stats.speed;
          break;
        case 'health':
          comparison = a.stats.health - b.stats.health;
          break;
        case 'damage':
          comparison = a.stats.damage - b.stats.damage;
          break;
        default:
          comparison = 0;
      }
      return sortOrder === 'asc' ? comparison : -comparison;
    });

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'main':
        return 'text-rainbow-3';
      case 'lethal':
        return 'text-red-400';
      default:
        return 'text-text-secondary';
    }
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common':
        return 'text-gray-400';
      case 'uncommon':
        return 'text-green-400';
      case 'rare':
        return 'text-blue-400';
      case 'legendary':
        return 'text-purple-400';
      case 'twisted':
        return 'text-red-500';
      default:
        return 'text-text-secondary';
    }
  };

  return (
    <>
      <Helmet>
        <title>Dandys World Characters | Complete Character Guide & Stats</title>
        <meta name="description" content="Explore all characters in Dandy's World. View stats, abilities, requirements, and unlock strategies for every character type." />
        <meta name="keywords" content="dandys world, characters, stats, abilities, unlock guide, character guide" />
        <meta property="og:title" content="Dandys World Characters | Complete Character Guide & Stats" />
        <meta property="og:description" content="Explore all characters in Dandy's World. View stats, abilities, requirements, and unlock strategies for every character type." />
        <link rel="canonical" href="https://www.dandysworldcharacters.com/characters" />
      </Helmet>

      <div className="min-h-screen bg-bg-primary">
        <div className="container mx-auto px-4 py-8">
          {/* 页面标题 */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Dandy's World Characters</h1>
            <p className="text-xl text-text-secondary">
              Explore all characters, their abilities, and unlock requirements
            </p>
          </div>

          {/* 搜索和筛选区域 */}
          <div className="bg-bg-card border border-gray-600 rounded-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              {/* 搜索框 */}
              <div>
                <label className="block text-sm font-medium mb-2">Search Characters</label>
                <input
                  type="text"
                  placeholder="Search by name or description..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-3 py-2 bg-bg-secondary border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-main"
                />
              </div>

              {/* 类型筛选 */}
              <div>
                <label className="block text-sm font-medium mb-2">Character Type</label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-3 py-2 bg-bg-secondary border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-accent-main"
                >
                  <option value="all">All Types</option>
                  <option value="toon">Toon</option>
                  <option value="main">Main</option>
                  <option value="regular">Regular</option>
                  <option value="event">Event</option>
                  <option value="lethal">Lethal</option>
                  <option value="twisted">Twisted</option>
                </select>
              </div>

              {/* 稀有度筛选 */}
              <div>
                <label className="block text-sm font-medium mb-2">Rarity</label>
                <select
                  value={selectedRarity}
                  onChange={(e) => setSelectedRarity(e.target.value)}
                  className="w-full px-3 py-2 bg-bg-secondary border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-accent-main"
                >
                  <option value="all">All Rarities</option>
                  <option value="common">Common</option>
                  <option value="uncommon">Uncommon</option>
                  <option value="rare">Rare</option>
                  <option value="legendary">Legendary</option>
                  <option value="twisted">Twisted</option>
                </select>
              </div>

              {/* 排序 */}
              <div>
                <label className="block text-sm font-medium mb-2">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 bg-bg-secondary border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-accent-main"
                >
                  <option value="name">Name</option>
                  <option value="type">Type</option>
                  <option value="rarity">Rarity</option>
                  <option value="skillCheck">Skill Check</option>
                  <option value="stealth">Stealth</option>
                  <option value="speed">Speed</option>
                  <option value="health">Health</option>
                  <option value="damage">Damage</option>
                </select>
              </div>
            </div>

            {/* 排序方向切换 */}
            <div className="flex justify-center">
              <button
                onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                className="px-4 py-2 bg-accent-main hover:bg-accent-main/80 text-white rounded-md transition-colors flex items-center space-x-2"
              >
                <span>{sortOrder === 'asc' ? '↑' : '↓'}</span>
                <span>{sortOrder === 'asc' ? 'Ascending' : 'Descending'}</span>
              </button>
            </div>
          </div>

          {/* 角色网格 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAndSortedCharacters.map((character) => (
              <div
                key={character.id}
                onClick={() => handleCharacterSelect(character)}
                className="bg-bg-card border border-gray-600 rounded-lg p-6 cursor-pointer hover:border-accent-main hover:shadow-lg hover:shadow-accent-main/20 transition-all duration-300 group"
              >
                <div className="text-center mb-4">
                  <div className="text-6xl mb-3 group-hover:scale-110 transition-transform">
                    {character.image}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{character.name}</h3>
                  <div className="flex justify-center space-x-2 text-sm">
                    <span className={`${getTypeColor(character.type)} capitalize`}>
                      {character.type}
                    </span>
                    <span className="text-gray-400">•</span>
                    <span className={`${getRarityColor(character.rarity)} capitalize`}>
                      {character.rarity}
                    </span>
                  </div>
                </div>

                <p className="text-text-secondary text-sm mb-4 text-center">
                  {character.description}
                </p>

                {/* 统计概览 */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Skill:</span>
                    <span className="font-semibold text-accent-main">{character.stats.skillCheck}/5</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Stealth:</span>
                    <span className="font-semibold text-accent-main">{character.stats.stealth}/5</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Speed:</span>
                    <span className="font-semibold text-accent-main">{character.stats.speed}/5</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Health:</span>
                    <span className="font-semibold text-accent-main">{character.stats.health}/5</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Damage:</span>
                    <span className="font-semibold text-accent-main">{character.stats.damage}/5</span>
                  </div>
                </div>

                {/* 能力预览 */}
                <div className="mt-4 pt-4 border-t border-gray-600">
                  <div className="text-sm">
                    <p className="font-semibold text-accent-main mb-1">
                      {character.abilities.active.name}
                    </p>
                    <p className="text-text-secondary text-xs">
                      {character.abilities.active.description}
                    </p>
                  </div>
                </div>

                {/* 点击提示 */}
                <div className="mt-4 text-center">
                  <span className="text-xs text-accent-main opacity-0 group-hover:opacity-100 transition-opacity">
                    Click to view details →
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* 结果统计 */}
          <div className="mt-8 text-center text-text-secondary">
            Showing {filteredAndSortedCharacters.length} of {characters.length} characters
          </div>
        </div>

        {/* 角色详情弹窗 */}
        <CharacterModal
          character={selectedCharacter}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </>
  );
};

export default CharactersPage;
