import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import TwistedMainPage from '../components/TwistedMainPage';

const TwistedGuidePage: React.FC = () => {
  return (
    <>
      <SEO
        title="Twisted Survival Guide - Dandy's World Calculator"
        description="Comprehensive survival guide for all Twisted entities in Dandy's World. Learn identification, strategies, and survival tips."
        keywords="Dandy's World, twisted entities, survival guide, horror game, entity identification, survival strategies"
        ogTitle="Twisted Survival Guide"
        ogDescription="Master the art of survival against twisted entities"
        canonical="/twisted-guide"
      />
      <Navigation />
      
      <div className="min-h-screen bg-bg-primary pt-20">
        {/* 页面标题 */}
        <div className="text-center mb-8 px-4">
          <h1 className="text-5xl font-bold text-text-primary mb-4">
            🚨 Twisted Survival Guide 🚨
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Master the art of survival against the twisted entities that lurk in the shadows. 
            Learn to identify, avoid, and survive encounters with these dangerous beings.
          </p>
        </div>

        {/* 增强版Twisted生存指南 */}
        <div className="bg-white">
          <TwistedMainPage />
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default TwistedGuidePage;
