import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import ResearchCalculator from '../components/calculator/ResearchCalculator';
import UnlockOptimizer from '../components/calculator/UnlockOptimizer';
import CombinedStrategy from '../components/calculator/CombinedStrategy';
import FeedbackButton from '../components/FeedbackButton';

const CalculatorPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'research' | 'unlock' | 'strategy'>('research');

  // Schema Markup for Software Application
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Dandys World Character Planner",
    "description": "Plan your character progression and optimize unlocks",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <>
      <SEO
        title="Dandys World Character Planner | Research & Unlock Optimizer"
        description="Plan your Dandys World character progression with research calculator, unlock optimizer and strategy tools. Track your Twisted research and optimize your character unlocks efficiently."
        keywords="dandys world, character planner, research calculator, unlock optimizer, twisted research, ichor calculator, character progression"
        ogTitle="Dandys World Character Planner"
        ogDescription="Plan your character progression and optimize unlocks efficiently"
        ogImage="https://dandysworldcharacters.com/images/tools/character-planner-og.png"
        ogUrl="https://dandysworldcharacters.com/calculator"
        ogType="website"
        ogSiteName="Dandys World Characters"
        twitterCard="summary_large_image"
        twitterTitle="Dandys World Character Planner"
        twitterDescription="Plan your character progression and optimize unlocks"
        twitterImage="https://dandysworldcharacters.com/images/tools/character-planner-twitter.png"
        twitterSite="@DandysWorldChars"
        canonical="https://dandysworldcharacters.com/calculator"
        robots="index, follow, max-snippet:160, max-image-preview:standard"
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      
      <Navigation />
      <div className="min-h-screen bg-bg-primary pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* 页面标题 */}
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-text-primary mb-4">
              Dandys World Character Planner
            </h1>
            <h2 className="text-xl text-text-secondary mb-2">
              Research Calculator & Unlock Optimizer
            </h2>
            <p className="text-lg text-text-secondary">
              Optimize your character unlocks and research progress
            </p>
          </header>
          
          {/* 计算器选项卡 */}
          <div className="flex justify-center mb-8">
            <div className="bg-bg-card rounded-lg p-1 flex space-x-1">
              <button 
                onClick={() => setActiveTab('research')} 
                className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                  activeTab === 'research' 
                    ? 'bg-accent-main text-white shadow-lg' 
                    : 'text-text-secondary hover:text-text-primary hover:bg-bg-secondary'
                }`}
              >
                Research Calculator
              </button>
              <button 
                onClick={() => setActiveTab('unlock')} 
                className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                  activeTab === 'unlock' 
                    ? 'bg-accent-main text-white shadow-lg' 
                    : 'text-text-secondary hover:text-text-primary hover:bg-bg-secondary'
                }`}
              >
                Unlock Optimizer
              </button>
              <button 
                onClick={() => setActiveTab('strategy')} 
                className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                  activeTab === 'strategy' 
                    ? 'bg-accent-main text-white shadow-lg' 
                    : 'text-text-secondary hover:text-text-primary hover:bg-bg-secondary'
                }`}
              >
                Combined Strategy
              </button>
            </div>
          </div>

          {/* 计算器内容区域 */}
          <div className="calculator-content">
            {activeTab === 'research' && <ResearchCalculator />}
            {activeTab === 'unlock' && <UnlockOptimizer />}
            {activeTab === 'strategy' && <CombinedStrategy />}
          </div>
          
          {/* 相关工具和指南推荐 - 内链建设 */}
          <div className="mt-16 pt-8 border-t border-border-primary">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-text-primary mb-4">Explore More Tools & Resources</h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                After planning your strategy, use these tools to implement your character progression plan effectively.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link 
                to="/compare" 
                className="group bg-bg-card hover:bg-accent-main hover:bg-opacity-20 rounded-lg p-6 text-center transition-all duration-300 border border-border-primary hover:border-accent-main hover:shadow-lg hover:shadow-accent-main/20"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">⚖️</div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Character Compare</h3>
                <p className="text-sm text-text-secondary">Compare stats to choose the best characters</p>
              </Link>
              
              <Link 
                to="/guides/game-mechanics" 
                className="group bg-bg-card hover:bg-accent-main hover:bg-opacity-20 rounded-lg p-6 text-center transition-all duration-300 border border-border-primary hover:border-accent-main hover:shadow-lg hover:shadow-accent-main/20"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">📚</div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Game Strategies</h3>
                <p className="text-sm text-text-secondary">Learn advanced gameplay techniques</p>
              </Link>
              
              <Link 
                to="/trinket-optimizer" 
                className="group bg-bg-card hover:bg-accent-main hover:bg-opacity-20 rounded-lg p-6 text-center transition-all duration-300 border border-border-primary hover:border-accent-main hover:shadow-lg hover:shadow-accent-main/20"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">⚡</div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Trinket Optimizer</h3>
                <p className="text-sm text-text-secondary">Optimize your trinket combinations</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* 用户反馈按钮 */}
      <FeedbackButton currentTab={activeTab} />
      
      <Footer />
    </>
  );
};

export default CalculatorPage;
