import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';

const BeginnerTipsGuide: React.FC = () => {
  const basicTips = [
    {
      title: 'Stay Alert',
      content: 'Always keep an eye on your surroundings. Listen for audio cues and watch for visual indicators that might signal danger or opportunities.'
    },
    {
      title: 'Manage Resources',
      content: 'Stamina and health are precious. Use them wisely and know when to retreat or take a break to recover.'
    },
    {
      title: 'Learn the Maps',
      content: 'Familiarize yourself with different floor layouts. Knowing escape routes and hiding spots can save your life.'
    },
    {
      title: 'Work as a Team',
      content: 'Communication and cooperation with other players greatly increases your chances of survival.'
    }
  ];

  return (
    <>
      <Navigation />
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
              🎮 Beginner Guide
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Start your journey in Dandy's World with essential tips and strategies
            </p>
          </div>

          {/* Basic Tips */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">💡 Essential Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {basicTips.map((tip, index) => (
                <div key={index} className="bg-bg-card p-6 rounded-xl border border-gray-600">
                  <h3 className="text-xl font-semibold mb-3">{tip.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{tip.content}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Getting Started */}
          <div className="bg-bg-card p-8 rounded-xl border border-gray-600 mb-12">
            <h2 className="text-2xl font-bold mb-6">🚀 Getting Started</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-accent-main">1. Choose Your Character</h3>
                <p className="text-text-secondary">
                  Each character has unique abilities and stats. Start with a balanced character to learn the basics.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-accent-main">2. Learn the Controls</h3>
                <p className="text-text-secondary">
                  Practice movement, interaction, and inventory management in a safe environment.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-accent-main">3. Understand the Objectives</h3>
                <p className="text-text-secondary">
                  Know what you need to accomplish in each floor and prioritize your tasks.
                </p>
              </div>
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

export default BeginnerTipsGuide;