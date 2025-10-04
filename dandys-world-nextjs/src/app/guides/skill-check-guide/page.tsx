'use client'

import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Skill Check Guide',
  description: "Master Dandy's World skill check mechanics. Learn skill check types, success strategies, and optimization techniques for better performance.",
};

const SkillCheckGuide: React.FC = () => {
  const skillCheckTypes = [
    {
      name: 'Perception Check',
      description: 'Discover hidden items and secret passages',
      icon: '👁️',
      difficulty: 'Medium',
      tips: [
        'Use flashlight in dark areas to increase success rate',
        'Pay attention to subtle environmental changes',
        'Certain trinkets can enhance perception abilities'
      ]
    },
    {
      name: 'Technical Check',
      description: 'Crack passwords, repair equipment',
      icon: '🔧',
      difficulty: 'Hard',
      tips: [
        'Carry technical-related trinkets',
        'Try in safe areas',
        'Find alternatives after failure'
      ]
    },
    {
      name: 'Physical Check',
      description: 'Climbing, jumping, carrying heavy objects',
      icon: '💪',
      difficulty: 'Easy',
      tips: [
        'Ensure sufficient stamina',
        'Use stamina recovery items',
        'Find safer paths'
      ]
    },
    {
      name: 'Social Check',
      description: 'Talk to NPCs, gather information',
      icon: '💬',
      difficulty: 'Medium',
      tips: [
        'Choose appropriate dialogue options',
        'Pay attention to NPC emotional states',
        'Certain characters have social bonuses'
      ]
    }
  ];

  const strategies = [
    {
      title: 'Preparation Phase',
      content: 'Before performing skill checks, ensure your character is in good condition, carry relevant trinkets, and choose appropriate timing and environment.'
    },
    {
      title: 'Execution Phase',
      content: 'Focus on operations and avoid distractions. Some checks require consecutive successes, so staying calm is crucial.'
    },
    {
      title: 'Failure Handling',
      content: 'Don\'t be discouraged by skill check failures. Find alternatives or wait for status recovery before retrying.'
    },
    {
      title: 'Success Rewards',
      content: 'Successfully completing skill checks usually rewards rare items, hidden information, or unlocks new areas.'
    }
  ];

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
              <li className="text-white">Skill Check Mechanics Guide</li>
            </ol>
          </nav>

          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              🎯 Skill Check Mechanics Guide
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Master the skill check system to unlock hidden content and progress efficiently
            </p>
          </div>

          {/* Introduction */}
          <div className="mb-12">
            <div className="bg-bg-card p-6 rounded-xl border border-gray-600">
              <h2 className="text-2xl font-bold mb-4">🎯 Understanding Skill Checks</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Skill checks in Dandy's World are crucial mechanics that test your character's abilities 
                in various situations. Successfully completing these checks can unlock hidden areas, 
                reveal secrets, and provide valuable rewards.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl mb-2">🎲</div>
                  <h3 className="font-semibold mb-1">Random Elements</h3>
                  <p className="text-sm text-text-secondary">Success rates vary</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">💎</div>
                  <h3 className="font-semibold mb-1">Trinket Influence</h3>
                  <p className="text-sm text-text-secondary">Equipment matters</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">⏰</div>
                  <h3 className="font-semibold mb-1">Timing Critical</h3>
                  <p className="text-sm text-text-secondary">Choose moments wisely</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">🔄</div>
                  <h3 className="font-semibold mb-1">Retry Options</h3>
                  <p className="text-sm text-text-secondary">Failure isn't final</p>
                </div>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-bg-card p-6 rounded-xl border border-gray-600 mb-12">
            <h2 className="text-2xl font-bold mb-4">📋 Table of Contents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2">Skill Check Types</h3>
                <ul className="space-y-1 text-text-secondary">
                  <li>• Perception Check</li>
                  <li>• Technical Check</li>
                  <li>• Physical Check</li>
                  <li>• Social Check</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Strategies</h3>
                <ul className="space-y-1 text-text-secondary">
                  <li>• Preparation Phase</li>
                  <li>• Execution Phase</li>
                  <li>• Failure Handling</li>
                  <li>• Success Rewards</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Skill Check Types */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">🎭 Skill Check Types Guide</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillCheckTypes.map((type, index) => (
                <div key={index} className="bg-bg-card p-6 rounded-xl border border-gray-600">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-4">{type.icon}</span>
                    <div>
                      <h3 className="text-xl font-semibold">{type.name}</h3>
                      <span className="text-sm text-accent-main">Difficulty: {type.difficulty}</span>
                    </div>
                  </div>
                  <p className="text-text-secondary mb-4">{type.description}</p>
                  <div>
                    <h4 className="font-semibold mb-2">💡 Tips:</h4>
                    <ul className="space-y-1 text-sm text-text-secondary">
                      {type.tips.map((tip, tipIndex) => (
                        <li key={tipIndex}>• {tip}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Strategies */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">📚 Skill Check Strategy Guide</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {strategies.map((strategy, index) => (
                <div key={index} className="bg-bg-card p-6 rounded-xl border border-gray-600">
                  <h3 className="text-xl font-semibold mb-3">{strategy.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{strategy.content}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Advanced Tips */}
          <div className="bg-bg-card p-8 rounded-xl border border-gray-600 mb-12">
            <h2 className="text-2xl font-bold mb-6">🚀 Advanced Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-accent-main">Trinket Synergy</h3>
                <p className="text-text-secondary">
                  Certain trinket combinations can significantly improve success rates for specific skill checks. For example, technical trinkets combined with perception trinkets can unlock hidden technical check options.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-accent-main">Environment Utilization</h3>
                <p className="text-text-secondary">
                  Pay attention to environmental factors affecting skill checks. Perform perception checks in well-lit areas, technical checks in quiet environments.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-accent-main">Character Selection</h3>
                <p className="text-text-secondary">
                  Different characters have natural advantages in specific skill checks. Choose appropriate characters based on mission requirements to improve success rates.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-accent-main">Timing Mastery</h3>
                <p className="text-text-secondary">
                  Some skill checks need to be performed at specific times. Observe game rhythm and choose the best timing for attempts.
                </p>
              </div>
            </div>
          </div>

          {/* Related Guides */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">📖 Related Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/guides/stamina-management" className="group">
                <div className="bg-bg-card p-4 rounded-lg border border-gray-600 hover:border-accent-main transition-colors">
                  <h3 className="font-semibold mb-2 group-hover:text-accent-main transition-colors">Stamina Management Tips</h3>
                  <p className="text-sm text-text-secondary">Learn how to effectively manage stamina and prepare for skill checks</p>
                </div>
              </Link>
              <Link href="/guides/stealth-system" className="group">
                <div className="bg-bg-card p-4 rounded-lg border border-gray-600 hover:border-accent-main transition-colors">
                  <h3 className="font-semibold mb-2 group-hover:text-accent-main transition-colors">Stealth System Guide</h3>
                  <p className="text-sm text-text-secondary">Master stealth techniques to perform skill checks in safe environments</p>
                </div>
              </Link>
              <Link href="/guides/beginner-tips" className="group">
                <div className="bg-bg-card p-4 rounded-lg border border-gray-600 hover:border-accent-main transition-colors">
                  <h3 className="font-semibold mb-2 group-hover:text-accent-main transition-colors">Beginner Guide</h3>
                  <p className="text-sm text-text-secondary">Start from basics and gradually master various game mechanics</p>
                </div>
              </Link>
            </div>
          </div>

          {/* Back to Main Guide */}
          <div className="text-center">
            <Link 
              href="/guides/game-mechanics"
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

export default SkillCheckGuide;
