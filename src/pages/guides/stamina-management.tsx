import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';

const StaminaManagementGuide: React.FC = () => {
  const staminaTips = [
    {
      title: 'Rest Point Strategy',
      description: 'Identify and use rest points efficiently to recover stamina',
      icon: '🛋️',
      tips: [
        'Rest points are usually located in safe areas',
        'Use them when stamina is below 30%',
        'Plan your route to include rest stops'
      ]
    },
    {
      title: 'Stamina Conservation',
      description: 'Learn techniques to minimize stamina consumption',
      icon: '⚡',
      tips: [
        'Walk instead of running when possible',
        'Avoid unnecessary jumping and climbing',
        'Use stamina recovery items strategically'
      ]
    },
    {
      title: 'Recovery Items',
      description: 'Master the use of stamina recovery items',
      icon: '💊',
      tips: [
        'Carry multiple types of recovery items',
        'Use them before stamina gets too low',
        'Save powerful items for emergencies'
      ]
    },
    {
      title: 'Route Planning',
      description: 'Plan efficient routes to minimize stamina usage',
      icon: '🗺️',
      tips: [
        'Study floor layouts before exploring',
        'Avoid backtracking when possible',
        'Prioritize important objectives'
      ]
    }
  ];

  const advancedStrategies = [
    {
      title: 'Stamina Timing',
      content: 'Learn the optimal timing for stamina management. Rest when you have time, not when you\'re desperate.'
    },
    {
      title: 'Item Management',
      content: 'Organize your inventory to have stamina items easily accessible during critical moments.'
    },
    {
      title: 'Team Coordination',
      content: 'In multiplayer, coordinate rest periods with teammates to maintain group efficiency.'
    },
    {
      title: 'Risk Assessment',
      content: 'Evaluate whether using stamina for a shortcut is worth the risk of being caught without energy.'
    }
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-bg-primary text-white pt-20">
        <Helmet>
          <title>Stamina Management Guide - Dandy's World Game Strategy</title>
          <meta name="description" content="Master stamina management in Dandy's World. Learn efficient stamina usage, recovery strategies, and route planning to extend exploration time." />
          <meta name="keywords" content="Dandy's World stamina,stamina management,stamina recovery,game strategy" />
          <meta property="og:title" content="Stamina Management Guide - Dandy's World Game Strategy" />
          <meta property="og:description" content="Master stamina management in Dandy's World. Learn efficient stamina usage, recovery strategies, and route planning." />
          <link rel="canonical" href="/guides/stamina-management" />
        </Helmet>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-text-secondary">
              <li><Link to="/guides/game-mechanics" className="hover:text-accent-main transition-colors">Game Mechanics Guide</Link></li>
              <li><span className="mx-2">/</span></li>
              <li className="text-white">Stamina Management Guide</li>
            </ol>
          </nav>

          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              ⚡ Stamina Management Guide
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Master stamina management techniques to extend exploration time and improve survival chances
            </p>
          </div>

          {/* Core Concepts */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">🎯 Core Stamina Concepts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-bg-card p-6 rounded-xl border border-gray-600">
                <h3 className="text-xl font-semibold mb-4">Understanding Stamina</h3>
                <p className="text-text-secondary mb-4">
                  Stamina is your most valuable resource in Dandy's World. It determines how long you can explore, 
                  how fast you can move, and how many actions you can perform before needing to rest.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-red-500 rounded-full mr-3"></span>
                    <span className="text-sm text-text-secondary">Critical (0-20%): Very limited movement</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></span>
                    <span className="text-sm text-text-secondary">Low (20-50%): Reduced capabilities</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                    <span className="text-sm text-text-secondary">Good (50-100%): Full capabilities</span>
                  </div>
                </div>
              </div>
              <div className="bg-bg-card p-6 rounded-xl border border-gray-600">
                <h3 className="text-xl font-semibold mb-4">Stamina Drain Factors</h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>• Running and sprinting</li>
                  <li>• Climbing and jumping</li>
                  <li>• Carrying heavy items</li>
                  <li>• Performing skill checks</li>
                  <li>• Being chased by Twisted</li>
                  <li>• Environmental hazards</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Basic Strategies */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">📚 Basic Stamina Strategies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Core Strategies</h3>
                <ul className="space-y-1 text-text-secondary">
                  <li>• Rest Point Strategy</li>
                  <li>• Stamina Conservation</li>
                  <li>• Recovery Items</li>
                  <li>• Route Planning</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Advanced Techniques</h3>
                <ul className="space-y-1 text-text-secondary">
                  <li>• Stamina Timing</li>
                  <li>• Item Management</li>
                  <li>• Team Coordination</li>
                  <li>• Risk Assessment</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Stamina Tips */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">💡 Stamina Management Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {staminaTips.map((tip, index) => (
                <div key={index} className="bg-bg-card p-6 rounded-xl border border-gray-600">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-4">{tip.icon}</span>
                    <div>
                      <h3 className="text-xl font-semibold">{tip.title}</h3>
                    </div>
                  </div>
                  <p className="text-text-secondary mb-4">{tip.description}</p>
                  <div>
                    <h4 className="font-semibold mb-2">💡 Key Points:</h4>
                    <ul className="space-y-1 text-sm text-text-secondary">
                      {tip.tips.map((tipText, tipIndex) => (
                        <li key={tipIndex}>• {tipText}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Advanced Strategies */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">🚀 Advanced Stamina Strategies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {advancedStrategies.map((strategy, index) => (
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
              <Link to="/guides/skill-check-guide" className="group">
                <div className="bg-bg-card p-4 rounded-lg border border-gray-600 hover:border-accent-main transition-colors">
                  <h3 className="font-semibold mb-2 group-hover:text-accent-main transition-colors">Skill Check Guide</h3>
                  <p className="text-sm text-text-secondary">Learn how to manage stamina for skill checks</p>
                </div>
              </Link>
              <Link to="/guides/stealth-system" className="group">
                <div className="bg-bg-card p-4 rounded-lg border border-gray-600 hover:border-accent-main transition-colors">
                  <h3 className="font-semibold mb-2 group-hover:text-accent-main transition-colors">Stealth System Guide</h3>
                  <p className="text-sm text-text-secondary">Master stealth techniques to conserve stamina</p>
                </div>
              </Link>
              <Link to="/guides/beginner-tips" className="group">
                <div className="bg-bg-card p-4 rounded-lg border border-gray-600 hover:border-accent-main transition-colors">
                  <h3 className="font-semibold mb-2 group-hover:text-accent-main transition-colors">Beginner Guide</h3>
                  <p className="text-sm text-text-secondary">Start with basic stamina management</p>
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
    </>
  );
};

export default StaminaManagementGuide;
