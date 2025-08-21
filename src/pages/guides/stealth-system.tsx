import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const StealthSystemGuide: React.FC = () => {
  const stealthMechanics = [
    {
      title: 'Sound Management',
      description: 'Control noise levels to avoid detection by Twisted characters',
      icon: '🔇',
      tips: [
        'Walk slowly to minimize footsteps',
        'Avoid breaking objects or glass',
        'Use sound-dampening trinkets',
        'Stay away from noisy machinery'
      ]
    },
    {
      title: 'Line of Sight',
      description: 'Master the art of staying out of enemy vision',
      icon: '👁️',
      tips: [
        'Use cover and shadows effectively',
        'Stay behind walls and obstacles',
        'Monitor enemy patrol patterns',
        'Time your movements carefully'
      ]
    },
    {
      title: 'Hiding Spots',
      description: 'Find and utilize effective hiding locations',
      icon: '🕳️',
      tips: [
        'Look for closets and cabinets',
        'Use under-bed spaces',
        'Hide behind large furniture',
        'Find ventilation ducts'
      ]
    },
    {
      title: 'Distraction Techniques',
      description: 'Create diversions to safely navigate areas',
      icon: '🎭',
      tips: [
        'Throw objects to create noise',
        'Use environmental hazards',
        'Trigger alarms strategically',
        'Coordinate with teammates'
      ]
    }
  ];

  const advancedTechniques = [
    {
      title: 'Patrol Pattern Analysis',
      content: 'Study enemy movement patterns to predict their routes and find safe passage windows.'
    },
    {
      title: 'Environmental Awareness',
      content: 'Use the environment to your advantage - shadows, sounds, and terrain can all aid stealth.'
    },
    {
      title: 'Team Stealth Coordination',
      content: 'In multiplayer, coordinate stealth movements to avoid alerting enemies to your presence.'
    },
    {
      title: 'Emergency Escape Routes',
      content: 'Always identify multiple escape routes before attempting stealth operations.'
    }
  ];

  return (
    <div className="min-h-screen bg-bg-primary text-white pt-20">
      <Helmet>
        <title>Stealth System Guide - Dandy's World Game Strategy</title>
        <meta name="description" content="Master the stealth system in Dandy's World. Learn hiding techniques, sound management, and evasion strategies to survive encounters with Twisted characters." />
        <meta name="keywords" content="Dandy's World stealth,stealth system,hiding techniques,evasion strategies" />
        <meta property="og:title" content="Stealth System Guide - Dandy's World Game Strategy" />
        <meta property="og:description" content="Master the stealth system in Dandy's World. Learn hiding techniques, sound management, and evasion strategies." />
        <link rel="canonical" href="/guides/stealth-system" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-text-secondary">
            <li><Link to="/guides/game-mechanics" className="hover:text-accent-main transition-colors">Game Mechanics Guide</Link></li>
            <li><span className="mx-2">/</span></li>
            <li className="text-white">Stealth System Guide</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            👻 Stealth System Guide
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Master hiding and evasion techniques to survive encounters with Twisted characters
          </p>
        </div>

        {/* Table of Contents */}
        <div className="bg-bg-card p-6 rounded-xl border border-gray-600 mb-12">
          <h2 className="text-2xl font-bold mb-4">📋 Table of Contents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Core Mechanics</h3>
              <ul className="space-y-1 text-text-secondary">
                <li>• Sound Management</li>
                <li>• Line of Sight</li>
                <li>• Hiding Spots</li>
                <li>• Distraction Techniques</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Advanced Techniques</h3>
              <ul className="space-y-1 text-text-secondary">
                <li>• Patrol Pattern Analysis</li>
                <li>• Environmental Awareness</li>
                <li>• Team Coordination</li>
                <li>• Escape Routes</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Stealth Mechanics */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">🔍 Stealth Mechanics Guide</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {stealthMechanics.map((mechanic, index) => (
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

        {/* Advanced Techniques */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">🚀 Advanced Stealth Techniques</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advancedTechniques.map((technique, index) => (
              <div key={index} className="bg-bg-card p-6 rounded-xl border border-gray-600">
                <h3 className="text-xl font-semibold mb-3">{technique.title}</h3>
                <p className="text-text-secondary leading-relaxed">{technique.content}</p>
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
                <p className="text-sm text-text-secondary">Learn stealth-related skill checks</p>
              </div>
            </Link>
            <Link to="/guides/stamina-management" className="group">
              <div className="bg-bg-card p-4 rounded-lg border border-gray-600 hover:border-accent-main transition-colors">
                <h3 className="font-semibold mb-2 group-hover:text-accent-main transition-colors">Stamina Management</h3>
                <p className="text-sm text-text-secondary">Manage stamina for stealth operations</p>
              </div>
            </Link>
            <Link to="/guides/twisted-mechanics" className="group">
              <div className="bg-bg-card p-4 rounded-lg border border-gray-600 hover:border-accent-main transition-colors">
                <h3 className="font-semibold mb-2 group-hover:text-accent-main transition-colors">Twisted Mechanics</h3>
                <p className="text-sm text-text-secondary">Understand enemy behavior patterns</p>
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

export default StealthSystemGuide;
