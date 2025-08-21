import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const TrinketCombinationsGuide: React.FC = () => {
  const trinketCategories = [
    {
      name: 'Offensive Trinkets',
      description: 'Enhance combat abilities and damage output',
      icon: '⚔️',
      examples: [
        'Weapon Enhancement Crystals',
        'Damage Amplifiers',
        'Critical Hit Boosters',
        'Elemental Infusers'
      ],
      synergies: [
        'Combine with defensive trinkets for balanced builds',
        'Pair with utility trinkets for versatile combat',
        'Stack multiple offensive effects for maximum damage'
      ]
    },
    {
      name: 'Defensive Trinkets',
      description: 'Provide protection and damage reduction',
      icon: '🛡️',
      examples: [
        'Shield Generators',
        'Armor Reinforcers',
        'Health Regenerators',
        'Status Effect Resisters'
      ],
      synergies: [
        'Combine with healing trinkets for sustainability',
        'Pair with mobility trinkets for evasion builds',
        'Stack for maximum survivability'
      ]
    },
    {
      name: 'Utility Trinkets',
      description: 'Offer various helpful effects and abilities',
      icon: '🔧',
      examples: [
        'Inventory Expanders',
        'Skill Check Boosters',
        'Movement Enhancers',
        'Detection Aids'
      ],
      synergies: [
        'Combine with any category for enhanced functionality',
        'Pair with specialized trinkets for focused builds',
        'Use as foundation for hybrid strategies'
      ]
    },
    {
      name: 'Specialized Trinkets',
      description: 'Provide unique and powerful effects',
      icon: '💎',
      examples: [
        'Stealth Enhancers',
        'Stamina Optimizers',
        'Social Interaction Boosters',
        'Environmental Manipulators'
      ],
      synergies: [
        'Combine with complementary specialized trinkets',
        'Pair with utility trinkets for maximum effect',
        'Use in specific situations for optimal results'
      ]
    }
  ];

  const combinationStrategies = [
    {
      title: 'Balanced Build',
      content: 'Combine offensive, defensive, and utility trinkets for a well-rounded character that can handle various situations.',
      trinkets: ['Offensive + Defensive + Utility']
    },
    {
      title: 'Specialized Build',
      content: 'Focus on a specific playstyle by combining multiple trinkets of the same category for maximum effectiveness.',
      trinkets: ['Multiple Offensive', 'Multiple Defensive', 'Multiple Utility']
    },
    {
      title: 'Hybrid Build',
      content: 'Create unique combinations that synergize well together, often combining specialized trinkets with utility items.',
      trinkets: ['Specialized + Utility + Complementary']
    },
    {
      title: 'Situational Build',
      content: 'Adapt your trinket loadout based on the current mission, floor, or enemy types you expect to encounter.',
      trinkets: ['Mission-Specific + Adaptive + Backup']
    }
  ];

  return (
    <div className="min-h-screen bg-bg-primary text-white pt-20">
      <Helmet>
        <title>Trinket Combination Guide - Dandy's World Game Strategy</title>
        <meta name="description" content="Master trinket combinations in Dandy's World. Learn best synergies, build strategies, and optimization techniques for maximum effectiveness." />
        <meta name="keywords" content="Dandy's World trinkets,trinket combinations,game strategy,build optimization" />
        <meta property="og:title" content="Trinket Combination Guide - Dandy's World Game Strategy" />
        <meta property="og:description" content="Master trinket combinations in Dandy's World. Learn best synergies, build strategies, and optimization techniques." />
        <link rel="canonical" href="/guides/trinket-combinations" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-text-secondary">
            <li><Link to="/guides/game-mechanics" className="hover:text-accent-main transition-colors">Game Mechanics Guide</Link></li>
            <li><span className="mx-2">/</span></li>
            <li className="text-white">Trinket Combination Guide</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            💎 Trinket Combination Guide
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Best trinket synergies and combinations for maximum effectiveness
          </p>
        </div>

        {/* Table of Contents */}
        <div className="bg-bg-card p-6 rounded-xl border border-gray-600 mb-12">
          <h2 className="text-2xl font-bold mb-4">📋 Table of Contents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Trinket Categories</h3>
              <ul className="space-y-1 text-text-secondary">
                <li>• Offensive Trinkets</li>
                <li>• Defensive Trinkets</li>
                <li>• Utility Trinkets</li>
                <li>• Specialized Trinkets</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Build Strategies</h3>
              <ul className="space-y-1 text-text-secondary">
                <li>• Balanced Build</li>
                <li>• Specialized Build</li>
                <li>• Hybrid Build</li>
                <li>• Situational Build</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Trinket Categories */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">🔍 Trinket Categories Guide</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trinketCategories.map((category, index) => (
              <div key={index} className="bg-bg-card p-6 rounded-xl border border-gray-600">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-4">{category.icon}</span>
                  <div>
                    <h3 className="text-xl font-semibold">{category.name}</h3>
                  </div>
                </div>
                <p className="text-text-secondary mb-4">{category.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">💡 Examples:</h4>
                  <ul className="space-y-1 text-sm text-text-secondary">
                    {category.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex}>• {example}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">🔗 Synergies:</h4>
                  <ul className="space-y-1 text-sm text-text-secondary">
                    {category.synergies.map((synergy, synergyIndex) => (
                      <li key={synergyIndex}>• {synergy}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Combination Strategies */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">📚 Build Strategy Guide</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {combinationStrategies.map((strategy, index) => (
              <div key={index} className="bg-bg-card p-6 rounded-xl border border-gray-600">
                <h3 className="text-xl font-semibold mb-3">{strategy.title}</h3>
                <p className="text-text-secondary leading-relaxed mb-4">{strategy.content}</p>
                <div>
                  <h4 className="font-semibold mb-2">🎯 Recommended:</h4>
                  <p className="text-sm text-text-secondary">{strategy.trinkets.join(', ')}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Related Guides */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">📖 Related Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/guides/skill-check-guide" className="group">
              <div className="bg-bg-card p-4 rounded-lg border border-gray-600 hover:border-accent-main transition-colors">
                <h3 className="font-semibold mb-2 group-hover:text-accent-main transition-colors">Skill Check Guide</h3>
                <p className="text-sm text-text-secondary">Learn how trinkets affect skill checks</p>
              </div>
            </Link>
            <Link to="/guides/stealth-system" className="group">
              <div className="bg-bg-card p-4 rounded-lg border border-gray-600 hover:border-accent-main transition-colors">
                <h3 className="font-semibold mb-2 group-hover:text-accent-main transition-colors">Stealth System Guide</h3>
                <p className="text-sm text-text-secondary">Optimize trinkets for stealth builds</p>
              </div>
            </Link>
            <Link to="/guides/beginner-tips" className="group">
              <div className="bg-bg-card p-4 rounded-lg border border-gray-600 hover:border-accent-main transition-colors">
                <h3 className="font-semibold mb-2 group-hover:text-accent-main transition-colors">Beginner Guide</h3>
                <p className="text-sm text-text-secondary">Start with basic trinket combinations</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Back to Main Guide */}
        <div className="text-center">
          <Link 
            to="/guides/game-mechanics"
            className="inline-flex items-center px-6 py-3 bg-accent-main text-white rounded-lg hover:bg-accent-main/80 transition-colors"
          >
            ← Back to Game Mechanics Guide
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrinketCombinationsGuide;
