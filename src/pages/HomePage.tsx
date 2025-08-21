import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

export default function HomePage() {
  return (
    <>
      <Navigation />
      
      <div className="min-h-screen bg-bg-primary text-white pt-20">
        <div className="max-w-4xl mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
              Dandy's World
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-green-400">
              Complete Game Guide
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Most comprehensive game mechanics analysis, from basic operations to advanced strategies, 
              helping you master survival skills and become a Dandy's World expert player
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/guides/game-mechanics" className="group">
              <div className="bg-bg-card p-6 rounded-xl border border-gray-600 hover:border-accent-main transition-all duration-300 transform hover:scale-105">
                <div className="text-3xl mb-4">🎮</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-accent-main transition-colors">
                  Game Mechanics
                </h3>
                <p className="text-text-secondary">
                  Learn core gameplay systems and mechanics
                </p>
              </div>
            </Link>

            <Link to="/compare" className="group">
              <div className="bg-bg-card p-6 rounded-xl border border-gray-600 hover:border-accent-main transition-all duration-300 transform hover:scale-105">
                <div className="text-3xl mb-4">⚖️</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-accent-main transition-colors">
                  Character Compare
                </h3>
                <p className="text-text-secondary">
                  Compare character stats and abilities
                </p>
              </div>
            </Link>

            <Link to="/trinket-guide" className="group">
              <div className="bg-bg-card p-6 rounded-xl border border-gray-600 hover:border-accent-main transition-all duration-300 transform hover:scale-105">
                <div className="text-3xl mb-4">💎</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-accent-main transition-colors">
                  Trinket Guide
                </h3>
                <p className="text-text-secondary">
                  Optimize your trinket combinations
                </p>
              </div>
            </Link>

            <Link to="/twisted-guide" className="group">
              <div className="bg-bg-card p-6 rounded-xl border border-gray-600 hover:border-accent-main transition-all duration-300 transform hover:scale-105">
                <div className="text-3xl mb-4">👹</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-accent-main transition-colors">
                  Twisted Guide
                </h3>
                <p className="text-text-secondary">
                  Master strategies against twisted characters
                </p>
              </div>
            </Link>

            <Link to="/calculator" className="group">
              <div className="bg-bg-card p-6 rounded-xl border border-gray-600 hover:border-accent-main transition-all duration-300 transform hover:scale-105">
                <div className="text-3xl mb-4">🧮</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-accent-main transition-colors">
                  Calculator
                </h3>
                <p className="text-text-secondary">
                  Calculate stats and optimize builds
                </p>
              </div>
            </Link>

            <Link to="/floor-predictor" className="group">
              <div className="bg-bg-card p-6 rounded-xl border border-gray-600 hover:border-accent-main transition-all duration-300 transform hover:scale-105">
                <div className="text-3xl mb-4">🔮</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-accent-main transition-colors">
                  Floor Predictor
                </h3>
                <p className="text-text-secondary">
                  Predict and plan your floor progression
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
