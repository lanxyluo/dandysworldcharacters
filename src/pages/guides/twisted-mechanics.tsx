import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const TwistedMechanicsGuide: React.FC = () => {
  const twistedTypes = [
    {
      name: 'Bloodlust',
      description: 'Aggressive hunter that tracks by sound and movement',
      icon: '🩸',
      behavior: 'Chases players relentlessly when alerted',
      weaknesses: [
        'Loud noises distract them',
        'Can be outmaneuvered in open areas',
        'Loses interest if target is lost'
      ]
    },
    {
      name: 'Shadow Stalker',
      description: 'Stealthy character that appears from darkness',
      icon: '👤',
      behavior: 'Emerges from shadows to ambush players',
      weaknesses: [
        'Avoids well-lit areas',
        'Can be detected by light sources',
        'Vulnerable during transition phases'
      ]
    },
    {
      name: 'Mimic',
      description: 'Disguises as friendly characters or objects',
      icon: '🎭',
      behavior: 'Lures players into traps through deception',
      weaknesses: [
        'Gives subtle behavioral clues',
        'Cannot maintain disguise indefinitely',
        'Vulnerable when transforming'
      ]
    },
    {
      name: 'Phantom',
      description: 'Can pass through walls and obstacles',
      icon: '👻',
      behavior: 'Appears unexpectedly and can corner players',
      weaknesses: [
        'Limited to specific areas',
        'Cannot pass through certain materials',
        'Has cooldown between phases'
      ]
    }
  ];

  const survivalStrategies = [
    {
      title: 'Detection Prevention',
      content: 'Learn to move silently and stay out of sight. Use cover effectively and avoid making unnecessary noise.'
    },
    {
      title: 'Escape Routes',
      content: 'Always identify multiple escape paths before entering new areas. Know where you can run if discovered.'
    },
    {
      title: 'Distraction Techniques',
      content: 'Use environmental objects and sounds to create diversions that allow you to escape or reposition.'
    },
    {
      title: 'Team Coordination',
      content: 'In multiplayer, coordinate movements and share information about enemy locations and behaviors.'
    }
  ];

  return (
    <div className="min-h-screen bg-bg-primary text-white pt-20">
      <Helmet>
        <title>Twisted Character Mechanics Guide - Dandy's World Game Strategy</title>
        <meta name="description" content="Deep understanding of Twisted character behavior patterns in Dandy's World. Learn their mechanics, weaknesses, and survival strategies." />
        <meta name="keywords" content="Dandy's World Twisted characters,enemy mechanics,survival strategies,game guide" />
        <meta property="og:title" content="Twisted Character Mechanics Guide - Dandy's World Game Strategy" />
        <meta property="og:description" content="Deep understanding of Twisted character behavior patterns, mechanics, and survival strategies." />
        <link rel="canonical" href="/guides/twisted-mechanics" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-text-secondary">
            <li><Link to="/guides/game-mechanics" className="hover:text-accent-main transition-colors">Game Mechanics Guide</Link></li>
            <li><span className="mx-2">/</span></li>
            <li className="text-white">Twisted Character Mechanics Guide</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            🚨 Twisted Character Mechanics Guide
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Deep understanding of Twisted behavior patterns and survival strategies
          </p>
        </div>

        {/* Table of Contents */}
        <div className="bg-bg-card p-6 rounded-xl border border-gray-600 mb-12">
          <h2 className="text-2xl font-bold mb-4">📋 Table of Contents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Twisted Types</h3>
              <ul className="space-y-1 text-text-secondary">
                <li>• Bloodlust</li>
                <li>• Shadow Stalker</li>
                <li>• Mimic</li>
                <li>• Phantom</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Survival Strategies</h3>
              <ul className="space-y-1 text-text-secondary">
                <li>• Detection Prevention</li>
                <li>• Escape Routes</li>
                <li>• Distraction Techniques</li>
                <li>• Team Coordination</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Twisted Types */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">👹 Twisted Character Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {twistedTypes.map((type, index) => (
              <div key={index} className="bg-bg-card p-6 rounded-xl border border-gray-600">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-4">{type.icon}</span>
                  <div>
                    <h3 className="text-xl font-semibold">{type.name}</h3>
                  </div>
                </div>
                <p className="text-text-secondary mb-4">{type.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">🎭 Behavior:</h4>
                  <p className="text-text-secondary text-sm">{type.behavior}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">💡 Weaknesses:</h4>
                  <ul className="space-y-1 text-sm text-text-secondary">
                    {type.weaknesses.map((weakness, weaknessIndex) => (
                      <li key={weaknessIndex}>• {weakness}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Survival Strategies */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">🛡️ Survival Strategies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {survivalStrategies.map((strategy, index) => (
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
            <Link to="/guides/stealth-system" className="group">
              <div className="bg-bg-card p-4 rounded-lg border border-gray-600 hover:border-accent-main transition-colors">
                <h3 className="font-semibold mb-2 group-hover:text-accent-main transition-colors">Stealth System Guide</h3>
                <p className="text-sm text-text-secondary">Master stealth techniques to avoid detection</p>
              </div>
            </Link>
            <Link to="/guides/stamina-management" className="group">
              <div className="bg-bg-card p-4 rounded-lg border border-gray-600 hover:border-accent-main transition-colors">
                <h3 className="font-semibold mb-2 group-hover:text-accent-main transition-colors">Stamina Management</h3>
                <p className="text-sm text-text-secondary">Manage stamina for escape situations</p>
              </div>
            </Link>
            <Link to="/guides/beginner-tips" className="group">
              <div className="bg-bg-card p-4 rounded-lg border border-gray-600 hover:border-accent-main transition-colors">
                <h3 className="font-semibold mb-2 group-hover:text-accent-main transition-colors">Beginner Guide</h3>
                <p className="text-sm text-text-secondary">Start with basic survival techniques</p>
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

export default TwistedMechanicsGuide;
