import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const FloorProgressionGuide: React.FC = () => {
  const floorTypes = [
    {
      name: 'Ground Floor',
      description: 'Starting area with basic mechanics and tutorials',
      icon: '🏠',
      difficulty: 'Easy',
      objectives: [
        'Learn basic controls and movement',
        'Complete tutorial objectives',
        'Find first trinkets and items',
        'Understand basic game mechanics'
      ],
      tips: [
        'Take your time to explore thoroughly',
        'Practice stealth mechanics',
        'Collect all available resources',
        'Learn enemy patrol patterns'
      ]
    },
    {
      name: 'Office Floors',
      description: 'Mid-game areas with increased complexity',
      icon: '🏢',
      difficulty: 'Medium',
      objectives: [
        'Navigate complex office layouts',
        'Solve environmental puzzles',
        'Avoid multiple enemy types',
        'Find hidden areas and secrets'
      ],
      tips: [
        'Use office furniture for cover',
        'Monitor multiple enemy patrols',
        'Plan routes through cubicles',
        'Check desks for useful items'
      ]
    },
    {
      name: 'Industrial Areas',
      description: 'High-risk zones with advanced challenges',
      icon: '🏭',
      difficulty: 'Hard',
      objectives: [
        'Navigate hazardous environments',
        'Deal with aggressive enemies',
        'Complete complex objectives',
        'Survive environmental threats'
      ],
      tips: [
        'Watch for environmental hazards',
        'Use machinery for cover',
        'Conserve resources carefully',
        'Have escape routes planned'
      ]
    },
    {
      name: 'Special Floors',
      description: 'Unique areas with special mechanics',
      icon: '🌟',
      difficulty: 'Very Hard',
      objectives: [
        'Master special game mechanics',
        'Face unique enemy types',
        'Complete special objectives',
        'Unlock rare rewards'
      ],
      tips: [
        'Study unique mechanics thoroughly',
        'Adapt strategies to special conditions',
        'Use specialized trinkets',
        'Coordinate with team members'
      ]
    }
  ];

  const progressionStrategies = [
    {
      title: 'Preparation Phase',
      content: 'Before entering a new floor, ensure you have the right equipment, trinkets, and understanding of what to expect.'
    },
    {
      title: 'Exploration Strategy',
      content: 'Systematically explore each area, marking important locations and identifying safe zones and escape routes.'
    },
    {
      title: 'Resource Management',
      content: 'Conserve resources and use them strategically. Don\'t waste valuable items on minor encounters.'
    },
    {
      title: 'Adaptation',
      content: 'Be prepared to change your strategy based on what you encounter. Flexibility is key to survival.'
    }
  ];

  return (
    <div className="min-h-screen bg-bg-primary text-white pt-20">
      <Helmet>
        <title>Floor Progression Strategy Guide - Dandy's World Game Strategy</title>
        <meta name="description" content="Master floor progression in Dandy's World. Learn efficient strategies for clearing each floor, from basic to advanced areas." />
        <meta name="keywords" content="Dandy's World floor progression,game strategy,level progression,game guide" />
        <meta property="og:title" content="Floor Progression Strategy Guide - Dandy's World Game Strategy" />
        <meta property="og:description" content="Master floor progression in Dandy's World. Learn efficient strategies for clearing each floor." />
        <link rel="canonical" href="/guides/floor-progression" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-text-secondary">
            <li><Link to="/guides/game-mechanics" className="hover:text-accent-main transition-colors">Game Mechanics Guide</Link></li>
            <li><span className="mx-2">/</span></li>
            <li className="text-white">Floor Progression Strategy Guide</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            🏢 Floor Progression Strategy Guide
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Efficient strategies for clearing each floor and progressing through the game
          </p>
        </div>

        {/* Table of Contents */}
        <div className="bg-bg-card p-6 rounded-xl border border-gray-600 mb-12">
          <h2 className="text-2xl font-bold mb-4">📋 Table of Contents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Floor Types</h3>
              <ul className="space-y-1 text-text-secondary">
                <li>• Ground Floor</li>
                <li>• Office Floors</li>
                <li>• Industrial Areas</li>
                <li>• Special Floors</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Progression Strategies</h3>
              <ul className="space-y-1 text-text-secondary">
                <li>• Preparation Phase</li>
                <li>• Exploration Strategy</li>
                <li>• Resource Management</li>
                <li>• Adaptation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Floor Types */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">🔍 Floor Types Guide</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {floorTypes.map((floor, index) => (
              <div key={index} className="bg-bg-card p-6 rounded-xl border border-gray-600">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-4">{floor.icon}</span>
                  <div>
                    <h3 className="text-xl font-semibold">{floor.name}</h3>
                    <span className={`px-2 py-1 rounded text-xs ${
                      floor.difficulty === 'Easy' ? 'bg-green-500/20 text-green-400' :
                      floor.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                      floor.difficulty === 'Hard' ? 'bg-red-500/20 text-red-400' :
                      'bg-purple-500/20 text-purple-400'
                    }`}>
                      {floor.difficulty}
                    </span>
                  </div>
                </div>
                <p className="text-text-secondary mb-4">{floor.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">🎯 Objectives:</h4>
                  <ul className="space-y-1 text-sm text-text-secondary">
                    {floor.objectives.map((objective, objectiveIndex) => (
                      <li key={objectiveIndex}>• {objective}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">💡 Tips:</h4>
                  <ul className="space-y-1 text-sm text-text-secondary">
                    {floor.tips.map((tip, tipIndex) => (
                      <li key={tipIndex}>• {tip}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progression Strategies */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">📚 Progression Strategy Guide</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {progressionStrategies.map((strategy, index) => (
              <div key={index} className="bg-bg-card p-6 rounded-xl border border-gray-600">
                <h3 className="text-xl font-semibold mb-3">{strategy.title}</h3>
                <p className="text-text-secondary leading-relaxed">{strategy.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Guides */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">📖 Related Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/guides/stamina-management" className="group">
              <div className="bg-bg-card p-4 rounded-lg border border-gray-600 hover:border-accent-main transition-colors">
                <h3 className="font-semibold mb-2 group-hover:text-accent-main transition-colors">Stamina Management</h3>
                <p className="text-sm text-text-secondary">Manage stamina for long floor explorations</p>
              </div>
            </Link>
            <Link to="/guides/trinket-combinations" className="group">
              <div className="bg-bg-card p-4 rounded-lg border border-gray-600 hover:border-accent-main transition-colors">
                <h3 className="font-semibold mb-2 group-hover:text-accent-main transition-colors">Trinket Combinations</h3>
                <p className="text-sm text-text-secondary">Optimize trinkets for different floor types</p>
              </div>
            </Link>
            <Link to="/guides/team-strategies" className="group">
              <div className="bg-bg-card p-4 rounded-lg border border-gray-600 hover:border-accent-main transition-colors">
                <h3 className="font-semibold mb-2 group-hover:text-accent-main transition-colors">Team Strategies</h3>
                <p className="text-sm text-text-secondary">Coordinate with teammates for floor progression</p>
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

export default FloorProgressionGuide;
