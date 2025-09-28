import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import ProgressTrackerDashboard from '../components/progress-tracker/ProgressTracker';

const ProgressTrackerPage: React.FC = () => {

  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: "Dandy's World Progress Tracker",
    description: 'Track Twisted research progress and optimize unlock planning.',
    applicationCategory: 'GameApplication',
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  };

  return (
    <>
      <SEO
        title="Dandy's World Progress Tracker"
        description="Track your Dandy's World research progress, optimize unlock sequences, and build long-term plans with a streamlined toolkit."
        keywords="dandys world, progress tracker, research calculator, unlock optimizer, twisted research"
        ogTitle="Dandy's World Progress Tracker"
        ogDescription="Stay on top of your research and unlock goals with guided planning."
        ogImage="https://dandysworldcharacters.com/images/tools/progress-tracker-og.png"
        ogUrl="https://dandysworldcharacters.com/progress-tracker"
        ogType="website"
        ogSiteName="Dandys World Characters"
        twitterCard="summary_large_image"
        twitterTitle="Dandy's World Progress Tracker"
        twitterDescription="Plan research, unlocks, and milestone goals in one place."
        twitterImage="https://dandysworldcharacters.com/images/tools/progress-tracker-twitter.png"
        twitterSite="@DandysWorldChars"
        canonical="https://dandysworldcharacters.com/progress-tracker"
        robots="index, follow"
        viewport="width=device-width, initial-scale=1.0"
        themeColor="#1a1a1a"
        mobileWebAppCapable="yes"
        appleMobileWebAppCapable="yes"
        appleMobileWebAppStatusBarStyle="black-translucent"
        appleMobileWebAppTitle="Dandy's World"
        formatDetection="telephone=no"
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />

      <Navigation />

      <main className="pt-16 bg-gray-900 text-white">
        <ProgressTrackerDashboard />
      </main>

      <Footer />
    </>
  );
};

export default ProgressTrackerPage;
