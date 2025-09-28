import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import ResearchCalculator from '../components/calculator/ResearchCalculator';
import UnlockOptimizer from '../components/calculator/UnlockOptimizer';
import CombinedStrategy from '../components/calculator/CombinedStrategy';
import ScrollToTopLink from '../components/ScrollToTopLink';

type TrackerTab = 'research' | 'unlock' | 'plan';

const ProgressTrackerPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TrackerTab>('research');

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
        description="Track your Dandy's World research progress, optimize unlock sequences, and create combined plans with a streamlined toolkit."
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

      <main className="pt-16 bg-gray-900 min-h-screen text-white">
        <section className="bg-gradient-to-b from-purple-900/60 to-gray-900 py-16 border-b border-gray-800">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h1 className="text-4xl font-extrabold mb-4">📊 Dandy's World Progress Tracker</h1>
            <p className="text-lg text-gray-300 mb-6">
              管理你的 Twisted Research、角色解锁和长期目标。选择合适的工具，保持进度领先。
            </p>
            <div className="bg-gray-900/60 border border-purple-500/40 inline-flex rounded-lg p-1">
              {(
                [
                  { key: 'research', label: 'Research 进度' },
                  { key: 'unlock', label: '解锁规划' },
                  { key: 'plan', label: '综合策略' },
                ] as Array<{ key: TrackerTab; label: string }>
              ).map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-5 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeTab === tab.key ? 'bg-purple-600 text-white shadow-lg' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 py-10">
          <div className="bg-gray-800/80 border border-gray-700 rounded-xl p-6 shadow-xl">
            {activeTab === 'research' && <ResearchCalculator />}
            {activeTab === 'unlock' && <UnlockOptimizer />}
            {activeTab === 'plan' && <CombinedStrategy />}
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold text-white text-center mb-8">接下来探索这些核心工具</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <ScrollToTopLink
                to="/trinket-builds"
                className="group bg-gray-800/70 border border-gray-700 hover:border-purple-500 transition-colors rounded-xl p-6"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">🛠️</div>
                <h3 className="text-xl font-semibold text-white mb-2">Trinket 配装优化</h3>
                <p className="text-sm text-gray-300">使用智能推荐引擎获取适配角色的最佳 Trinket 组合。</p>
              </ScrollToTopLink>

              <ScrollToTopLink
                to="/character-recommender"
                className="group bg-gray-800/70 border border-gray-700 hover:border-purple-500 transition-colors rounded-xl p-6"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">🎭</div>
                <h3 className="text-xl font-semibold text-white mb-2">角色推荐中心</h3>
                <p className="text-sm text-gray-300">对比角色数据、筛选能力属性，为团队快速选角。</p>
              </ScrollToTopLink>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ProgressTrackerPage;
