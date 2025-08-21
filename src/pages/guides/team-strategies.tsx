import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';

const TeamStrategiesGuide: React.FC = () => {
  const teamRoles = [
    {
      name: 'Scout',
      description: 'Reconnaissance and information gathering',
      icon: '👁️',
      responsibilities: [
        'Explore areas ahead of the team',
        'Report enemy positions and movements',
        'Identify safe routes and hiding spots',
        'Mark important locations and resources'
      ],
      recommendedTrinkets: [
        'Stealth enhancers',
        'Detection aids',
        'Movement speed boosters',
        'Communication devices'
      ]
    },
    {
      name: 'Support',
      description: 'Healing, buffing, and team assistance',
      icon: '💊',
      responsibilities: [
        'Heal injured team members',
        'Provide stamina and health buffs',
        'Carry extra supplies and items',
        'Support during skill checks'
      ],
      recommendedTrinkets: [
        'Healing amplifiers',
        'Stamina boosters',
        'Inventory expanders',
        'Skill check enhancers'
      ]
    },
    {
      name: 'Tank',
      description: 'Drawing attention and protecting teammates',
      icon: '🛡️',
      responsibilities: [
        'Distract enemies from teammates',
        'Protect vulnerable team members',
        'Create diversions for escapes',
        'Handle direct confrontations'
      ],
      recommendedTrinkets: [
        'Defensive boosters',
        'Health regenerators',
        'Noise generators',
        'Armor enhancers'
      ]
    },
    {
      name: 'Specialist',
      description: 'Handling specific challenges and objectives',
      icon: '🔧',
      responsibilities: [
        'Solve technical puzzles',
        'Handle specialized skill checks',
        'Manage environmental hazards',
        'Provide technical expertise'
      ],
      recommendedTrinkets: [
        'Technical enhancers',
        'Puzzle solving aids',
        'Environmental manipulators',
        'Specialized tools'
      ]
    }
  ];

  const coordinationStrategies = [
    {
      title: 'Communication Protocols',
      content: 'Establish clear communication methods and protocols. Use voice chat, text chat, or in-game signals to coordinate effectively.'
    },
    {
      title: 'Role Assignment',
      content: 'Assign roles based on player strengths and preferences. Ensure each team member understands their responsibilities and how they complement others.'
    },
    {
      title: 'Formation Tactics',
      content: 'Use different formations for different situations. Diamond formation for exploration, line formation for narrow passages, and defensive circle for threats.'
    },
    {
      title: 'Emergency Procedures',
      content: 'Have clear procedures for emergencies. Know when to scatter, when to regroup, and how to signal for help.'
    }
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-bg-primary text-white pt-20">
        <Helmet>
          <title>Team Strategies Guide - Dandy's World Game Strategy</title>
          <meta name="description" content="Master team coordination and strategies in Dandy's World. Learn about team roles, coordination tactics, and effective teamwork." />
          <meta name="keywords" content="Dandy's World team strategies,team coordination,team roles,multiplayer tactics" />
          <meta property="og:title" content="Team Strategies Guide - Dandy's World Game Strategy" />
          <meta property="og:description" content="Master team coordination and strategies in Dandy's World." />
          <link rel="canonical" href="/guides/team-strategies" />
        </Helmet>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-text-secondary">
              <li><Link to="/guides/game-mechanics" className="hover:text-accent-main transition-colors">Game Mechanics Guide</Link></li>
              <li><span className="mx-2">/</span></li>
              <li className="text-white">Team Strategies Guide</li>
            </ol>
          </nav>

          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              👥 Team Strategies Guide
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Master the art of teamwork and coordination in Dandy's World
            </p>
          </div>

          {/* Introduction */}
          <div className="mb-12">
            <div className="bg-bg-card p-6 rounded-xl border border-gray-600">
              <h2 className="text-2xl font-bold mb-4">🎯 Understanding Team Play</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Team strategies in Dandy's World are essential for tackling challenging content and maximizing 
                efficiency. Effective coordination, role assignment, and communication can turn a group of 
                individual players into a well-oiled machine.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl mb-2">🤝</div>
                  <h3 className="font-semibold mb-1">Coordination</h3>
                  <p className="text-sm text-text-secondary">Work together seamlessly</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">🎭</div>
                  <h3 className="font-semibold mb-1">Role Specialization</h3>
                  <p className="text-sm text-text-secondary">Each player has a purpose</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">📢</div>
                  <h3 className="font-semibold mb-1">Communication</h3>
                  <p className="text-sm text-text-secondary">Clear and effective messaging</p>
                </div>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-bg-card p-6 rounded-xl border border-gray-600 mb-12">
            <h2 className="text-2xl font-bold mb-4">📋 Table of Contents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2">Team Roles</h3>
                <ul className="space-y-1 text-text-secondary">
                  <li>• Scout</li>
                  <li>• Support</li>
                  <li>• Tank</li>
                  <li>• Specialist</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Coordination Strategies</h3>
                <ul className="space-y-1 text-text-secondary">
                  <li>• Communication Protocols</li>
                  <li>• Role Assignment</li>
                  <li>• Formation Tactics</li>
                  <li>• Emergency Procedures</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Team Roles */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">🎭 Team Role Guide</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {teamRoles.map((role, index) => (
                <div key={index} className="bg-bg-card p-6 rounded-xl border border-gray-600">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-4">{role.icon}</span>
                    <div>
                      <h3 className="text-xl font-semibold">{role.name}</h3>
                    </div>
                  </div>
                  <p className="text-text-secondary mb-4">{role.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">🎯 Responsibilities:</h4>
                    <ul className="space-y-1 text-sm text-text-secondary">
                      {role.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex}>• {responsibility}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">💎 Recommended Trinkets:</h4>
                    <ul className="space-y-1 text-sm text-text-secondary">
                      {role.recommendedTrinkets.map((trinket, trinketIndex) => (
                        <li key={trinketIndex}>• {trinket}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Coordination Strategies */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">📚 Coordination Strategy Guide</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {coordinationStrategies.map((strategy, index) => (
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
              <Link to="/guides/floor-progression" className="group">
                <div className="bg-bg-card p-4 rounded-lg border border-gray-600 hover:border-accent-main transition-colors">
                  <h3 className="font-semibold mb-2 group-hover:text-accent-main transition-colors">Floor Progression</h3>
                  <p className="text-sm text-text-secondary">Coordinate team movements through floors</p>
                </div>
              </Link>
              <Link to="/guides/stealth-system" className="group">
                <div className="bg-bg-card p-4 rounded-lg border border-gray-600 hover:border-accent-main transition-colors">
                  <h3 className="font-semibold mb-2 group-hover:text-accent-main transition-colors">Stealth System</h3>
                  <p className="text-sm text-text-secondary">Coordinate stealth operations as a team</p>
                </div>
              </Link>
              <Link to="/guides/trinket-combinations" className="group">
                <div className="bg-bg-card p-4 rounded-lg border border-gray-600 hover:border-accent-main transition-colors">
                  <h3 className="font-semibold mb-2 group-hover:text-accent-main transition-colors">Trinket Combinations</h3>
                  <p className="text-sm text-text-secondary">Optimize trinkets for team roles</p>
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

export default TeamStrategiesGuide;
