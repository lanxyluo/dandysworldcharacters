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

  return (
    <>
      <SEO
        title="Dandy's World Calculator - Character Unlock & Research Optimizer"
        description="Optimize your Dandy's World character unlocks and research progress. Calculate the most efficient path to unlock characters and complete research."
        keywords="Dandy's World, calculator, character unlock, research optimizer, Ichor calculator, Rodger, twisted research"
        ogTitle="Dandy's World Calculator"
        ogDescription="The ultimate tool for optimizing your Dandy's World progression"
        canonical="/calculator"
      />
      <Navigation />
      <div className="min-h-screen bg-bg-primary pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* 页面标题 */}
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-text-primary mb-4">
              Dandy's World Calculator
            </h1>
            <p className="text-xl text-text-secondary">
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

          {/* 额外工具链接 */}
          <div className="text-center mb-8">
            <Link 
              to="/trinket-optimizer" 
              className="inline-flex items-center space-x-2 bg-bg-card hover:bg-bg-secondary text-text-primary px-6 py-3 rounded-lg transition-all duration-200 hover:scale-105 shadow-lg"
            >
              <span>🎯</span>
              <span>Trinket Optimizer</span>
              <span>→</span>
            </Link>
          </div>
          
          {/* 计算器内容区域 */}
          <div className="calculator-content">
            {activeTab === 'research' && <ResearchCalculator />}
            {activeTab === 'unlock' && <UnlockOptimizer />}
            {activeTab === 'strategy' && <CombinedStrategy />}
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
