import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const BeginnerTipsGuide: React.FC = () => {
  const basicMechanics = [
    {
      title: 'Movement Controls',
      description: 'Master basic movement and navigation',
      icon: '🚶',
      tips: [
        'Walk slowly to avoid making noise',
        'Use crouch for stealth movement',
        'Learn to jump and climb effectively',
        'Practice smooth camera control'
      ]
    },
    {
      title: 'Inventory Management',
      description: 'Organize and use your items effectively',
      icon: '🎒',
      tips: [
        'Keep important items easily accessible',
        'Organize trinkets by category',
        'Don\'t hoard unnecessary items',
        'Use items strategically'
      ]
    },
    {
      title: 'Health and Stamina',
      description: 'Monitor and manage your vital resources',
      icon: '❤️',
      tips: [
        'Watch your stamina bar carefully',
        'Rest when stamina is low',
        'Use healing items when needed',
        'Don\'t push yourself too hard'
      ]
    },
    {
      title: 'Basic Stealth',
      description: 'Learn fundamental stealth techniques',
      icon: '👻',
      tips: [
        'Stay in shadows when possible',
        'Avoid making loud noises',
        'Use cover to hide from enemies',
        'Learn enemy patrol patterns'
      ]
    }
  ];

  const essentialTips = [
    {
      title: 'Start Slow',
      content: 'Take your time to learn the game mechanics. Don\'t rush through areas - explore thoroughly and practice basic skills.'
    },
    {
      title: 'Save Often',
      content: 'Use save points whenever possible. Don\'t risk losing progress by pushing too far without saving.'
    },
    {
      title: 'Learn from Failure',
      content: 'Don\'t get discouraged by deaths or failures. Each attempt teaches you something valuable about the game.'
    },
    {
      title: 'Experiment',
      content: 'Try different approaches and strategies. The game rewards creativity and adaptability.'
    }
  ];

  return (
    <div className="min-h-screen bg-bg-primary text-white pt-20">
      <Helmet>
        <title>Beginner Guide - Dandy's World Game Strategy</title>
        <meta name="description" content="Complete game guide from scratch for Dandy's World. Learn basic mechanics, essential tips, and fundamental strategies to get started." />
        <meta name="keywords" content="Dandy's World beginner guide,how to play,game tutorial,getting started" />
        <meta property="og:title" content="Beginner Guide - Dandy's World Game Strategy" />
        <meta property="og:description" content="Complete game guide from scratch for Dandy's World. Learn basic mechanics, essential tips, and fundamental strategies." />
        <link rel="canonical" href="/guides/beginner-tips" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-text-secondary">
            <li><Link to="/guides/game-mechanics" className="hover:text-accent-main transition-colors">Game Mechanics Guide</Link></li>
            <li><span className="mx-2">/</span></li>
            <li className="text-white">Beginner Guide</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            🌟 Beginner Guide
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Complete game guide from scratch, helping you master survival skills step by step
          </p>
        </div>

        {/* Table of Contents */}
        <div className="bg-bg-card p-6 rounded-xl border border-gray-600 mb-12">
          <h2 className="text-2xl font-bold mb-4">📋 Table of Contents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Basic Mechanics</h3>
              <ul className="space-y-1 text-text-secondary">
                <li>• Movement Controls</li>
                <li>• Inventory Management</li>
                <li>• Health and Stamina</li>
                <li>• Basic Stealth</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Essential Tips</h3>
              <ul className="space-y-1 text-text-secondary">
                <li>• Start Slow</li>
                <li>• Save Often</li>
                <li>• Learn from Failure</li>
                <li>• Experiment</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Basic Mechanics */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">🔧 Basic Mechanics Guide</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {basicMechanics.map((mechanic, index) => (
              <div key={index} className="bg-bg-card p-6 rounded-xl border border-gray-600">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-4">{mechanic.icon}</span>
                  <div>
                    <h3 className="text-xl font-semibold">{mechanic.title}</h3>
                  </div>
                </div>
                <p className="text-text-secondary mb-4">{mechanic.description}</p>
                <div>
                  <h4 className="font-semibold mb-2">💡 Key Tips:</h4>
                  <ul className="space-y-1 text-sm text-text-secondary">
                    {mechanic.tips.map((tip, tipIndex) => (
                      <li key={tipIndex}>• {tip}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Essential Tips */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">📚 Essential Tips for Beginners</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {essentialTips.map((tip, index) => (
              <div key={index} className="bg-bg-card p-6 rounded-xl border border-gray-600">
                <h3 className="text-xl font-semibold mb-3">{tip.title}</h3>
                <p className="text-text-secondary leading-relaxed">{tip.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-bg-card p-8 rounded-xl border border-gray-600 mb-12">
          <h2 className="text-2xl font-bold mb-6">🚀 Next Steps</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-text-secondary">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-white">📖 Learn More</h3>
              <p>Once you\'ve mastered the basics, explore our other guides to deepen your understanding of specific game mechanics.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-white">🎯 Practice</h3>
              <p>Apply what you\'ve learned in the game. Practice makes perfect, and each playthrough will improve your skills.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-white">👥 Team Up</h3>
              <p>Try multiplayer mode once you\'re comfortable with single player. Team coordination adds a new dimension to the game.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-white">🔧 Experiment</h3>
              <p>Don\'t be afraid to try new strategies and trinket combinations. Innovation often leads to success.</p>
            </div>
          </div>
        </div>

        {/* Related Guides */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">📖 Related Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/guides/skill-check-guide" className="group">
              <div className="bg-bg-card p-4 rounded-lg border border-gray-600 hover:border-accent-main transition-colors">
                <h3 className="font-semibold mb-2 group-hover:text-accent-main transition-colors">Skill Check Guide</h3>
                <p className="text-sm text-text-secondary">Learn about skill checks and how to succeed</p>
              </div>
            </Link>
            <Link to="/guides/stamina-management" className="group">
              <div className="bg-bg-card p-4 rounded-lg border border-gray-600 hover:border-accent-main transition-colors">
                <h3 className="font-semibold mb-2 group-hover:text-accent-main transition-colors">Stamina Management</h3>
                <p className="text-sm text-text-secondary">Master stamina management for longer survival</p>
              </div>
            </Link>
            <Link to="/guides/stealth-system" className="group">
              <div className="bg-bg-card p-4 rounded-lg border border-gray-600 hover:border-accent-main transition-colors">
                <h3 className="font-semibold mb-2 group-hover:text-accent-main transition-colors">Stealth System</h3>
                <p className="text-sm text-text-secondary">Advanced stealth techniques and strategies</p>
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

export default BeginnerTipsGuide;
