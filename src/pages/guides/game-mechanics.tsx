import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

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
    <div className="min-h-screen bg-bg-primary text-white pt-20">
              <Helmet>
          <title>Dandy's World Complete Game Mechanics Guide - Most Comprehensive Strategy Analysis</title>
          <meta name="description" content="Most comprehensive Dandy's World game mechanics analysis, including character abilities, Twisted character countermeasures, trinket combinations and more. Master game techniques to become a survival expert!" />
          <meta name="keywords" content="Dandy's World guide,Dandy's World how to play,how to avoid Twisted characters,Dandy's World guide,Twisted survival,game mechanics,survival tips" />
          <meta property="og:title" content="Dandy's World Complete Game Mechanics Guide" />
          <meta property="og:description" content="Most comprehensive Dandy's World game mechanics analysis, including character abilities, Twisted character countermeasures, trinket combinations" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="/guides/game-mechanics" />
        </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-rainbow-1 via-rainbow-3 to-rainbow-5 bg-clip-text text-transparent">
            Dandy's World Complete Game Mechanics Guide
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Most comprehensive game mechanics analysis, from basic operations to advanced strategies, helping you master survival skills and become a Dandy's World expert player
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search game mechanics, tips, or strategies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 bg-bg-card border border-gray-600 rounded-xl text-white placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent-main focus:border-transparent"
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-text-secondary">
              🔍
            </div>
          </div>
        </div>

        {/* Quick Tips */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">💡 Quick Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {quickTips.map((tip, index) => (
              <div key={index} className="bg-bg-card p-4 rounded-lg border border-gray-600 hover:border-accent-main transition-colors">
                <p className="text-text-secondary">{tip}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Guide Categories */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">📚 Complete Guide Directory</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCategories.map((category) => (
              <Link
                key={category.id}
                to={category.href}
                className="group block"
              >
                <div className="bg-bg-card p-6 rounded-xl border border-gray-600 hover:border-accent-main transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-center group-hover:text-accent-main transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-sm text-text-secondary text-center leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Related Tools */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">🛠️ Useful Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/trinket-optimizer" className="group">
              <div className="bg-bg-card p-6 rounded-xl border border-gray-600 hover:border-accent-main transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-2xl">
                  ⚡
                </div>
                <h3 className="text-lg font-semibold mb-2 text-center group-hover:text-accent-main transition-colors">
                  Trinket Optimizer
                </h3>
                <p className="text-sm text-text-secondary text-center">
                  Find the best trinket combinations for you
                </p>
              </div>
            </Link>
            
            <Link to="/twisted-guide" className="group">
              <div className="bg-bg-card p-6 rounded-xl border border-gray-600 hover:border-accent-main transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center text-2xl">
                  🚨
                </div>
                <h3 className="text-lg font-semibold mb-2 text-center group-hover:text-accent-main transition-colors">
                  Twisted Character Guide
                </h3>
                <p className="text-sm text-text-secondary text-center">
                  Learn about each Twisted character
                </p>
              </div>
            </Link>
            
            <Link to="/floor-predictor" className="group">
              <div className="bg-bg-card p-6 rounded-xl border border-gray-600 hover:border-accent-main transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-2xl">
                  🏢
                </div>
                <h3 className="text-lg font-semibold mb-2 text-center group-hover:text-accent-main transition-colors">
                  Floor Predictor
                </h3>
                <p className="text-sm text-text-secondary text-center">
                  Predict floor layouts and difficulty
                </p>
              </div>
            </Link>
          </div>
        </div>

        {/* SEO Content */}
        <div className="bg-bg-card p-8 rounded-xl border border-gray-600">
          <h2 className="text-2xl font-bold mb-6">🎮 Why Choose Our Game Mechanics Guide?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-text-secondary">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-white">📖 Comprehensive</h3>
              <p>Covers everything from basic operations to advanced strategies, suitable for players of all levels</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-white">🔬 Accurate</h3>
              <p>Based on extensive game testing and community feedback, ensuring accuracy and practicality</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-white">⚡ Practical</h3>
              <p>Every tip is verified and can be directly applied to improve game performance</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-white">🔄 Updated</h3>
              <p>Continuously optimized content with game updates to maintain timeliness</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameMechanicsGuide;
