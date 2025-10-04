'use client'

import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Twisted Mechanics',
  description: "Deep dive into Dandy's World Twisted mechanics, behavior patterns, and counter strategies to survive every encounter.",
};

const TwistedMechanicsGuide: React.FC = () => {
  const twistedTypes = [
    {
      name: 'Bloodlust',
      description: 'Translation pending',
      icon: '🩸',
      behavior: 'Translation pending',
      weaknesses: [
        'Translation pending',
        'Translation pending',
        'Translation pending'
      ],
      strategies: [
        'Translation pending',
        'Translation pending',
        'Translation pending'
      ]
    },
    {
      name: 'Shadow Stalker',
      description: 'Translation pending',
      icon: '👤',
      behavior: 'Translation pending',
      weaknesses: [
        'Translation pending',
        'Translation pending',
        'Translation pending'
      ],
      strategies: [
        'Translation pending',
        'Translation pending',
        'Translation pending'
      ]
    },
    {
      name: 'Mimic',
      description: 'Translation pending',
      icon: '🎭',
      behavior: 'Translation pending',
      weaknesses: [
        'Translation pending',
        'Translation pending',
        'Translation pending'
      ],
      strategies: [
        'Translation pending',
        'Translation pending',
        'Translation pending'
      ]
    },
    {
      name: 'Phantom',
      description: 'Translation pending',
      icon: '👻',
      behavior: 'Translation pending',
      weaknesses: [
        'Translation pending',
        'Translation pending',
        'Translation pending'
      ],
      strategies: [
        'Translation pending',
        'Translation pending',
        'Translation pending'
      ]
    }
  ];

  const twistedCharacters = [
    {
      name: 'Twisted Boxten',
      description: 'Translation pending',
      type: 'Common',
      specialAbilities: [
        'Translation pending',
        'Translation pending',
        'Translation pending'
      ],
      counterStrategies: [
        'Translation pending',
        'Translation pending',
        'Translation pending'
      ]
    },
    {
      name: 'Twisted Astro',
      description: 'Translation pending',
      type: 'Main Character',
      specialAbilities: [
        'Translation pending',
        'Translation pending',
        'Translation pending'
      ],
      counterStrategies: [
        'Translation pending',
        'Translation pending',
        'Translation pending'
      ]
    },
    {
      name: 'Twisted Rodger',
      description: 'Translation pending',
      type: 'Rare',
      specialAbilities: [
        'Translation pending',
        'Translation pending',
        'Translation pending'
      ],
      counterStrategies: [
        'Translation pending',
        'Translation pending',
        'Translation pending'
      ]
    },
    {
      name: 'Twisted Vee',
      description: 'Translation pending',
      type: 'Main Character',
      specialAbilities: [
        'Translation pending',
        'Translation pending',
        'Translation pending'
      ],
      counterStrategies: [
        'Translation pending',
        'Translation pending',
        'Translation pending'
      ]
    }
  ];

  const survivalStrategies = [
    {
      title: 'Translation pending',
      content: 'Translation pending'
    },
    {
      title: 'Translation pending',
      content: 'Translation pending'
    },
    {
      title: 'Translation pending',
      content: 'Translation pending'
    },
    {
      title: 'Translation pending',
      content: 'Translation pending'
    }
  ];

  const researchMechanics = {
    description: 'Translation pending',
    process: [
      'Translation pending',
      'Translation pending',
      'Translation pending',
      'Translation pending'
    ],
    rewards: [
      'Translation pending',
      'Translation pending',
      'Translation pending',
      'Translation pending'
    ],
    tips: [
      'Translation pending',
      'Translation pending',
      'Translation pending',
      'Translation pending'
    ]
  };

  const dailyTwistedBoard = {
    description: 'Translation pending',
    mechanics: [
      'Translation pending',
      'Translation pending',
      'Translation pending',
      'Translation pending'
    ],
    strategies: [
      'Translation pending',
      'Translation pending',
      'Translation pending',
      'Translation pending'
    ]
  };

  const twistedResearch = {
    description: 'Translation pending',
    researchAreas: [
      'Translation pending',
      'Translation pending',
      'Translation pending',
      'Translation pending'
    ],
    advancedTechniques: [
      'Translation pending',
      'Translation pending',
      'Translation pending',
      'Translation pending'
    ]
  };

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-bg-primary text-white pt-20">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-text-secondary">
              <li><Link href="/guides/game-mechanics" className="hover:text-accent-main transition-colors">Game Mechanics Guide</Link></li>
              <li><span className="mx-2">/</span></li>
              <li className="text-white">Twisted Character Mechanics Guide</li>
            </ol>
          </nav>

          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              🚨 Twisted Character Mechanics Guide
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">Translation pending</p>
          </div>

          {/* Twisted Types */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Translation pending</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {twistedTypes.map((type, index) => (
                <div key={index} className="bg-bg-card rounded-lg p-6 border border-gray-600">
                  <div className="text-4xl mb-4">{type.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{type.name}</h3>
                  <p className="text-text-secondary mb-4">{type.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Translation pending</h4>
                    <p className="text-text-secondary text-sm">{type.behavior}</p>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Translation pending</h4>
                    <ul className="text-sm text-text-secondary space-y-1">
                      {type.weaknesses.map((weakness, idx) => (
                        <li key={idx}>• {weakness}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Translation pending</h4>
                    <ul className="text-sm text-text-secondary space-y-1">
                      {type.strategies.map((strategy, idx) => (
                        <li key={idx}>💡 {strategy}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Twisted Characters */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Translation pending</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {twistedCharacters.map((character, index) => (
                <div key={index} className="bg-bg-secondary rounded-lg p-6 border border-accent-main">
                  <h3 className="text-xl font-bold mb-2">{character.name}</h3>
                  <p className="text-text-secondary mb-4">{character.description}</p>
                  
                  <div className="mb-4">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      character.type === 'Main Character' ? 'bg-purple-600' :
                      character.type === 'Rare' ? 'bg-purple-600' :
                      character.type === 'Uncommon' ? 'bg-blue-600' : 'bg-gray-600'
                    }`}>
                      {character.type}
                    </span>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Translation pending</h4>
                    <ul className="text-sm text-text-secondary space-y-1">
                      {character.specialAbilities.map((ability, idx) => (
                        <li key={idx}>⚡ {ability}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Translation pending</h4>
                    <ul className="text-sm text-text-secondary space-y-1">
                      {character.counterStrategies.map((strategy, idx) => (
                        <li key={idx}>💡 {strategy}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Survival Strategies */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Translation pending</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {survivalStrategies.map((strategy, index) => (
                <div key={index} className="bg-bg-card rounded-lg p-6 border border-gray-600">
                  <h3 className="text-xl font-bold mb-3 text-accent-main">{strategy.title}</h3>
                  <p className="text-text-secondary">{strategy.content}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Research Mechanics */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Translation pending</h2>
            <div className="bg-bg-secondary rounded-lg p-6 border border-accent-main">
              <h3 className="text-xl font-bold mb-4">Translation pending</h3>
              <p className="text-text-secondary mb-6">{researchMechanics.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Translation pending</h4>
                  <ul className="text-sm text-text-secondary space-y-2">
                    {researchMechanics.process.map((step, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-accent-main mr-2">•</span>
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Translation pending</h4>
                  <ul className="text-sm text-text-secondary space-y-2">
                    {researchMechanics.rewards.map((reward, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-yellow-400 mr-2">⭐</span>
                        {reward}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold mb-3">Translation pending</h4>
                <ul className="text-sm text-text-secondary space-y-2">
                  {researchMechanics.tips.map((tip, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-accent-main mr-2">💡</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Daily Twisted Board */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Translation pending</h2>
            <div className="bg-bg-card rounded-lg p-6 border border-yellow-600">
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">Translation pending</h3>
              <p className="text-text-secondary mb-6">{dailyTwistedBoard.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Translation pending</h4>
                  <ul className="text-sm text-text-secondary space-y-2">
                    {dailyTwistedBoard.mechanics.map((mechanic, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-yellow-400 mr-2">⚡</span>
                        {mechanic}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Translation pending</h4>
                  <ul className="text-sm text-text-secondary space-y-2">
                    {dailyTwistedBoard.strategies.map((strategy, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-accent-main mr-2">💡</span>
                        {strategy}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Advanced Research */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Translation pending</h2>
            <div className="bg-bg-secondary rounded-lg p-6 border border-purple-600">
              <h3 className="text-xl font-bold mb-4 text-purple-400">Translation pending</h3>
              <p className="text-text-secondary mb-6">{twistedResearch.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Translation pending</h4>
                  <ul className="text-sm text-text-secondary space-y-2">
                    {twistedResearch.researchAreas.map((area, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-purple-400 mr-2">•</span>
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Translation pending</h4>
                  <ul className="text-sm text-text-secondary space-y-2">
                    {twistedResearch.advancedTechniques.map((technique, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-accent-main mr-2">🎯</span>
                        {technique}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Navigation Links */}
          <section className="text-center">
            <h3 className="text-2xl font-bold mb-6">Translation pending</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/guides/floor-progression"
                className="px-6 py-3 bg-accent-main text-white rounded-lg hover:bg-accent-main/80 transition-colors"
              >
                Floor Progression Guide
              </Link>
              <Link
                href="/guides/team-strategies"
                className="px-6 py-3 bg-bg-card text-white rounded-lg hover:bg-accent-main transition-colors border border-gray-600"
              >
                Team Strategies Guide
              </Link>
              <Link
                href="/guides/beginner-tips"
                className="px-6 py-3 bg-bg-card text-white rounded-lg hover:bg-accent-main transition-colors border border-gray-600"
              >
                Beginner Tips Guide
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default TwistedMechanicsGuide;
