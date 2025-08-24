import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import TwistedMainPage from '../components/TwistedMainPage';

const TwistedGuidePage: React.FC = () => {
  // Schema Markup for Guide
  const guideSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Dandys World Twisted Survival Guide",
    "description": "Comprehensive survival guide for all Twisted entities in Dandys World",
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
      "@id": "https://dandysworldcharacters.com/twisted-guide"
    },
    "datePublished": "2025-01-01",
    "dateModified": "2025-01-15"
  };

  return (
    <>
      <SEO
        title="Dandys World Twisted Guide | Enemy Strategy & Tips"
        description="Comprehensive survival guide for all Twisted entities in Dandys World. Learn identification, strategies, and survival tips for every enemy type."
        keywords="dandys world, twisted guide, enemy strategy, survival tips, twisted entities, horror game, entity identification, survival guide"
        ogTitle="Dandys World Twisted Guide"
        ogDescription="Master the art of survival against twisted entities with comprehensive strategies"
        ogImage="https://dandysworldcharacters.com/images/guides/twisted-guide-og.png"
        ogUrl="https://dandysworldcharacters.com/twisted-guide"
        ogType="article"
        ogSiteName="Dandys World Characters"
        twitterCard="summary_large_image"
        twitterTitle="Dandys World Twisted Guide"
        twitterDescription="Master survival against twisted entities with expert strategies"
        twitterImage="https://dandysworldcharacters.com/images/guides/twisted-guide-twitter.png"
        twitterSite="@DandysWorldChars"
        canonical="https://dandysworldcharacters.com/twisted-guide"
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
      
      <div className="min-h-screen bg-bg-primary pt-20">
        {/* 页面标题 */}
        <div className="text-center mb-8 px-4">
          <h1 className="text-5xl font-bold text-text-primary mb-4">
            Dandys World Twisted Survival Guide
          </h1>
          <h2 className="text-2xl font-semibold text-text-secondary mb-2">
            🚨 Master Enemy Strategy & Survival Techniques 🚨
          </h2>
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
