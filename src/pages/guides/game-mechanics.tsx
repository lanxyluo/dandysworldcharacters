import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollToTopLink from '../../components/ScrollToTopLink';
import Navigation from '../../components/Navigation';
import SEO from '../../components/SEO';

const GameMechanicsGuide: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Schema Markup for Guide
  const guideSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Dandys World Complete Game Mechanics Guide",
    "description": "Master all aspects of Dandys World game mechanics with comprehensive tutorials",
    "author": {
      "@type": "Organization",
      "name": "Dandys World Characters"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Dandys World Characters",
      "logo": {
        "@type": "ImageObject",
        "url": "https://dandysworldcharacters.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://dandysworldcharacters.com/guides/game-mechanics"
    },
    "datePublished": "2025-01-01",
    "dateModified": "2025-01-15"
  };

  const guideCategories = [
    {
      id: 'skill-check',
      title: 'Skill Check Mechanics',
      description: 'Master various skill check triggers and strategies',
      icon: '🎯',
      href: '/guides/skill-check-guide',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'stamina',
      title: 'Stamina Management',
      description: 'Optimize stamina usage and extend exploration time',
      icon: '⚡',
      href: '/guides/stamina-management',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 'stealth',
      title: 'Stealth System Guide',
      description: 'Learn hiding and evading Twisted characters',
      icon: '👻',
      href: '/guides/stealth-system',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'twisted',
      title: 'Twisted Character Mechanics',
      description: 'Deep understanding of Twisted behavior patterns',
      icon: '🚨',
      href: '/guides/twisted-mechanics',
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 'trinkets',
      title: 'Trinket Combination Guide',
      description: 'Best trinket synergies and combinations',
      icon: '💎',
      href: '/guides/trinket-combinations',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'floors',
      title: 'Floor Progression Strategy',
      description: 'Efficient strategies for clearing each floor',
      icon: '🏢',
      href: '/guides/floor-progression',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'teams',
      title: 'Team Strategies',
      description: 'Best coordination methods for multiplayer',
      icon: '👥',
      href: '/guides/team-strategies',
      color: 'from-teal-500 to-blue-500'
    },
    {
      id: 'beginner',
      title: 'Beginner Guide',
      description: 'Complete game guide from scratch',
      icon: '🌟',
      href: '/guides/beginner-tips',
      color: 'from-amber-500 to-yellow-500'
    }
  ];

  const filteredCategories = guideCategories.filter(category =>
    category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const quickTips = [
    'Twisted characters track by sound, staying quiet is crucial',
    'Find rest points when stamina is low, don\'t take risks',
    'Trinket combinations are stronger than individual trinkets',
    'Don\'t panic if skill checks fail, there are alternatives',
    'Assign roles efficiently for better team coordination'
  ];

  return (
    <>
      <SEO
        title="Dandys World Complete Game Mechanics Guide | Master Survival Skills"
        description="Master Dandys World game mechanics with comprehensive tutorials covering character abilities, Twisted survival, trinket combinations and advanced strategies. Become a survival expert!"
        keywords="dandys world, game mechanics guide, character tips, strategy tutorials, twisted survival, survival tips, game strategy, survival skills"
        ogTitle="Dandys World Complete Game Mechanics Guide"
        ogDescription="Master all aspects of Dandys World game mechanics with comprehensive tutorials"
        ogImage="https://dandysworldcharacters.com/images/guides/game-mechanics-og.png"
        ogUrl="https://dandysworldcharacters.com/guides/game-mechanics"
        ogType="article"
        ogSiteName="Dandys World Characters"
        twitterCard="summary_large_image"
        twitterTitle="Dandys World Game Mechanics Guide"
        twitterDescription="Master all aspects of game mechanics with comprehensive tutorials"
        twitterImage="https://dandysworldcharacters.com/images/guides/game-mechanics-twitter.png"
        twitterSite="@DandysWorldChars"
        canonical="https://dandysworldcharacters.com/guides/game-mechanics"
        robots="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        viewport="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes"
        themeColor="#1a1a1a"
        mobileWebAppCapable="yes"
        appleMobileWebAppCapable="yes"
        appleMobileWebAppStatusBarStyle="black-translucent"
        appleMobileWebAppTitle="Dandys World"
        formatDetection="telephone=no"
      />
      
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(guideSchema) }}
      />
      
      <Navigation />
      <div className="min-h-screen bg-bg-primary text-white pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-400 mb-8">
            <Link to="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/guides" className="hover:text-white">Guides</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Game Mechanics</span>
          </nav>

          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              Dandys World Complete Game Mechanics Guide
            </h1>
            <h2 className="text-2xl font-semibold text-gray-300 mb-4">
              Master Survival Skills & Game Techniques
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Comprehensive tutorials covering all aspects of Dandys World gameplay, from basic mechanics to advanced survival strategies.
            </p>
          </div>

          {/* 搜索栏 */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Search game mechanics, tips, or strategies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 bg-bg-card text-text-primary rounded-lg border border-border-primary focus:outline-none focus:ring-2 focus:ring-accent-main focus:border-transparent"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-secondary">
                🔍
              </div>
            </div>
          </div>

          {/* 快速提示 */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex items-center justify-center mb-6">
              <span className="text-2xl mr-2">💡</span>
              <h2 className="text-2xl font-bold text-text-primary">Quick Tips</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {quickTips.map((tip, index) => (
                <div key={index} className="bg-bg-card p-4 rounded-lg border border-border-primary">
                  <p className="text-text-secondary text-sm">{tip}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 指南分类网格 */}
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCategories.map((category) => (
                <ScrollToTopLink
                  key={category.id}
                  to={category.href}
                  className="group block bg-bg-card rounded-lg p-6 border border-border-primary hover:border-accent-main transition-all duration-300 hover:shadow-lg hover:shadow-accent-main/20"
                >
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-accent-main transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {category.description}
                  </p>
                  <div className="mt-4 flex items-center text-accent-main text-sm font-medium group-hover:text-accent-light transition-colors">
                    Learn More →
                  </div>
                </ScrollToTopLink>
              ))}
            </div>
          </div>
          
          {/* 相关工具推荐区域 - 内链建设 */}
          <div className="mt-16 pt-8 border-t border-border-primary">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-text-primary mb-4">Put Knowledge Into Practice</h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Now that you've learned the mechanics, use these tools to optimize your gameplay and character progression.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ScrollToTopLink 
                to="/calculator" 
                className="group bg-bg-card hover:bg-accent-main hover:bg-opacity-20 rounded-lg p-6 text-center transition-all duration-300 border border-border-primary hover:border-accent-main hover:shadow-lg hover:shadow-accent-main/20"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">🧮</div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Research Calculator</h3>
                <p className="text-sm text-text-secondary">Calculate Ichor costs and plan your unlocks</p>
              </ScrollToTopLink>
              
              <ScrollToTopLink 
                to="/compare" 
                className="group bg-bg-card hover:bg-accent-main hover:bg-opacity-20 rounded-lg p-6 text-center transition-all duration-300 border border-border-primary hover:border-accent-main hover:shadow-lg hover:shadow-accent-main/20"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">⚖️</div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Character Compare</h3>
                <p className="text-sm text-text-secondary">Compare stats and build optimal teams</p>
              </ScrollToTopLink>
              
              <ScrollToTopLink 
                to="/trinket-optimizer" 
                className="group bg-bg-card hover:bg-accent-main hover:bg-opacity-20 rounded-lg p-6 text-center transition-all duration-300 border border-border-primary hover:border-accent-main hover:shadow-lg hover:shadow-accent-main/20"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">⚡</div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Trinket Optimizer</h3>
                <p className="text-sm text-text-secondary">Find the best trinket combinations</p>
              </ScrollToTopLink>
              
              <ScrollToTopLink 
                to="/floor-predictor" 
                className="group bg-bg-card hover:bg-accent-main hover:bg-opacity-20 rounded-lg p-6 text-center transition-all duration-300 border border-border-primary hover:border-accent-main hover:shadow-lg hover:shadow-accent-main/20"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">🏢</div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Floor Predictor</h3>
                <p className="text-sm text-text-secondary">Plan your floor progression strategy</p>
              </ScrollToTopLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GameMechanicsGuide;
