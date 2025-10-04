'use client'

import React, { useState } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollToTopLink from '@/components/ScrollToTopLink';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Game Mechanics',
  description: "Master Dandys World game mechanics with comprehensive tutorials covering character abilities, Twisted survival, trinket combinations and advanced strategies.",
};

const GameMechanicsGuide: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const guideSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Dandys World Complete Game Mechanics Guide',
    description: 'Master all aspects of Dandys World game mechanics with comprehensive tutorials',
    author: {
      '@type': 'Organization',
      name: "Dandys World Characters",
    },
    publisher: {
      '@type': 'Organization',
      name: "Dandys World Characters",
      logo: {
        '@type': 'ImageObject',
        url: 'https://dandysworldcharacters.com/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://dandysworldcharacters.com/guides/game-mechanics',
    },
    datePublished: '2025-01-01',
    dateModified: '2025-01-15',
  } as const;

  const guideCategories = [
    {
      id: 'skill-check',
      title: 'Skill Check Mechanics',
      description: 'Master various skill check triggers and strategies',
      icon: '🎯',
      href: '/guides/skill-check-guide',
    },
    {
      id: 'stamina',
      title: 'Stamina Management',
      description: 'Optimize stamina usage and extend exploration time',
      icon: '⚡',
      href: '/guides/stamina-management',
    },
    {
      id: 'stealth',
      title: 'Stealth System Guide',
      description: 'Learn hiding and evading Twisted characters',
      icon: '👻',
      href: '/guides/stealth-system',
    },
    {
      id: 'twisted',
      title: 'Twisted Character Mechanics',
      description: 'Deep understanding of Twisted behavior patterns',
      icon: '🚨',
      href: '/guides/twisted-mechanics',
    },
    {
      id: 'trinkets',
      title: 'Trinket Combination Guide',
      description: 'Best trinket synergies and combinations',
      icon: '💎',
      href: '/guides/trinket-combinations',
    },
    {
      id: 'floors',
      title: 'Floor Progression Strategy',
      description: 'Efficient strategies for clearing each floor',
      icon: '🏢',
      href: '/guides/floor-progression',
    },
    {
      id: 'teams',
      title: 'Team Strategies',
      description: 'Best coordination methods for multiplayer',
      icon: '👥',
      href: '/guides/team-strategies',
    },
    {
      id: 'beginner',
      title: 'Beginner Guide',
      description: 'Complete game guide from scratch',
      icon: '🌟',
      href: '/guides/beginner-tips',
    },
  ] as const;

  const filteredCategories = guideCategories.filter((category) =>
    [category.title, category.description].some((field) =>
      field.toLowerCase().includes(searchTerm.toLowerCase()),
    ),
  );

  const quickTips = [
    'Twisted characters track by sound, staying quiet is crucial',
    "Find rest points when stamina is low, don't take risks",
    'Trinket combinations are stronger than individual trinkets',
    "Don't panic if skill checks fail, there are alternatives",
    'Assign roles efficiently for better team coordination',
  ];

  return (
    <>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(guideSchema) }}
      />

      <Navigation />

      <div className="min-h-screen bg-gray-900 text-white pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <nav className="text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/guides" className="hover:text-white">
              Guides
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">Game Mechanics</span>
          </nav>

          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Dandys World Complete Game Mechanics Guide</h1>
            <h2 className="text-2xl font-semibold text-gray-300 mb-4">
              Master Survival Skills &amp; Game Techniques
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Comprehensive tutorials covering all aspects of Dandys World gameplay, from basic mechanics to advanced survival strategies.
            </p>
          </div>

          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Search game mechanics, tips, or strategies..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex items-center justify-center mb-6">
              <span className="text-2xl mr-2">💡</span>
              <h2 className="text-2xl font-bold text-white">Quick Tips</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {quickTips.map((tip) => (
                <div key={tip} className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                  <p className="text-gray-300 text-sm">{tip}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {filteredCategories.map((category) => (
              <ScrollToTopLink
                key={category.id}
                to={category.href}
                className="group block bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">{category.description}</p>
                <div className="mt-4 flex items-center text-purple-300 text-sm font-medium group-hover:text-purple-200 transition-colors">
                  Learn More →
                </div>
              </ScrollToTopLink>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-gray-800">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Put Knowledge Into Practice</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Now that you've learned the mechanics, use these tools to optimize your gameplay and character progression.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ScrollToTopLink
                to="/progress-tracker"
                className="group bg-gray-800 hover:bg-purple-500/20 rounded-lg p-6 text-center transition-all duration-300 border border-gray-700 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">🧮</div>
                <h3 className="text-lg font-semibold text-white mb-2">Progress Tracker</h3>
                <p className="text-sm text-gray-300">Plan research, unlocks, and combined strategies in one hub.</p>
              </ScrollToTopLink>

              <ScrollToTopLink
                to="/character-recommender"
                className="group bg-gray-800 hover:bg-purple-500/20 rounded-lg p-6 text-center transition-all duration-300 border border-gray-700 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">🎭</div>
                <h3 className="text-lg font-semibold text-white mb-2">Character Recommender</h3>
                <p className="text-sm text-gray-300">Compare roles and build optimal teams for every run.</p>
              </ScrollToTopLink>

              <ScrollToTopLink
                to="/trinket-builds"
                className="group bg-gray-800 hover:bg-purple-500/20 rounded-lg p-6 text-center transition-all duration-300 border border-gray-700 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">⚡</div>
                <h3 className="text-lg font-semibold text-white mb-2">Trinket Builds</h3>
                <p className="text-sm text-gray-300">Unlock the best trinket combinations powered by AI insights.</p>
              </ScrollToTopLink>

              <ScrollToTopLink
                to="/floor-predictor"
                className="group bg-gray-800 hover:bg-purple-500/20 rounded-lg p-6 text-center transition-all duration-300 border border-gray-700 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">🏢</div>
                <h3 className="text-lg font-semibold text-white mb-2">Floor Predictor</h3>
                <p className="text-sm text-gray-300">Plan floor objectives and anticipate Twisted encounters.</p>
              </ScrollToTopLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GameMechanicsGuide;
