import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import SEO from '../../components/SEO';

const GameMechanicsGuide: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const guideCategories = [
    {
      id: 'skill-check',
      title: 'Skill Check Mechanics',
      description: 'Master various skill check triggers and strategies',
      icon: '🎯',
      href: '/guides/skill-check-guide',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'stamina',
      title: 'Stamina Management',
      description: 'Optimize stamina usage and extend exploration time',
      icon: '⚡',
      href: '/guides/stamina-management',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 'stealth',
      title: 'Stealth System Guide',
      description: 'Learn hiding and evading Twisted characters',
      icon: '👻',
      href: '/guides/stealth-system',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'twisted',
      title: 'Twisted Character Mechanics',
      description: 'Deep understanding of Twisted behavior patterns',
      icon: '🚨',
      href: '/guides/twisted-mechanics',
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 'trinkets',
      title: 'Trinket Combination Guide',
      description: 'Best trinket synergies and combinations',
      icon: '💎',
      href: '/guides/trinket-combinations',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'floors',
      title: 'Floor Progression Strategy',
      description: 'Efficient strategies for clearing each floor',
      icon: '🏢',
      href: '/guides/floor-progression',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'teams',
      title: 'Team Strategies',
      description: 'Best coordination methods for multiplayer',
      icon: '👥',
      href: '/guides/team-strategies',
      color: 'from-teal-500 to-blue-500'
    },
    {
      id: 'beginner',
      title: 'Beginner Guide',
      description: 'Complete game guide from scratch',
      icon: '🌟',
      href: '/guides/beginner-tips',
      color: 'from-amber-500 to-yellow-500'
    }
  ];

  const filteredCategories = guideCategories.filter(category =>
    category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const quickTips = [
    'Twisted characters track by sound, staying quiet is crucial',
    'Find rest points when stamina is low, don\'t take risks',
    'Trinket combinations are stronger than individual trinkets',
    'Don\'t panic if skill checks fail, there are alternatives',
    'Assign roles efficiently for better team coordination'
  ];

  return (
    <>
      <SEO
        title="Dandys World Game Mechanics Guide | Character Tips & Strategy Tutorials"
        description="Most comprehensive Dandy's World game mechanics analysis, including character abilities, Twisted character countermeasures, trinket combinations and more. Master game techniques to become a survival expert!"
        keywords="dandys world, game mechanics guide, character tips, strategy tutorials, twisted survival, survival tips, game strategy"
        ogTitle="Dandys World Game Mechanics Guide"
        ogDescription="Most comprehensive Dandy's World game mechanics analysis, including character abilities, Twisted character countermeasures, trinket combinations"
        canonical="/guides/game-mechanics"
      />
      <Navigation />
      <div className="min-h-screen bg-bg-primary text-white pt-20">
        {/* 页面标题 */}
        <div className="text-center mb-12 px-4">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-green-500 to-blue-500 mb-4">
            Dandy's World Complete Game Mechanics Guide
          </h1>
          <p className="text-xl text-text-secondary max-w-4xl mx-auto">
            Most comprehensive game mechanics analysis, from basic operations to advanced strategies, helping you master survival skills and become a Dandy's World expert player.
          </p>
        </div>

        {/* 搜索栏 */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search game mechanics, tips, or strategies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 bg-bg-card text-text-primary rounded-lg border border-border-primary focus:outline-none focus:ring-2 focus:ring-accent-main focus:border-transparent"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-secondary">
              🔍
            </div>
          </div>
        </div>

        {/* 快速提示 */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex items-center justify-center mb-6">
            <span className="text-2xl mr-2">💡</span>
            <h2 className="text-2xl font-bold text-text-primary">Quick Tips</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {quickTips.map((tip, index) => (
              <div key={index} className="bg-bg-card p-4 rounded-lg border border-border-primary">
                <p className="text-text-secondary text-sm">{tip}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 指南分类网格 */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCategories.map((category) => (
              <Link
                key={category.id}
                to={category.href}
                className="group block bg-bg-card rounded-lg p-6 border border-border-primary hover:border-accent-main transition-all duration-300 hover:shadow-lg hover:shadow-accent-main/20"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-accent-main transition-colors">
                  {category.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {category.description}
                </p>
                <div className="mt-4 flex items-center text-accent-main text-sm font-medium group-hover:text-accent-light transition-colors">
                  Learn More →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default GameMechanicsGuide;
