import React from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import ScrollToTopLink from '../../components/ScrollToTopLink';

const guideLinks = [
  { path: '/guides/game-mechanics', label: '游戏机制解析', icon: '🧠', description: '深入理解核心系统与玩法基础。' },
  { path: '/guides/skill-check-guide', label: '技能检查指南', icon: '🎯', description: '掌握技能检查节奏与提升技巧。' },
  { path: '/guides/stealth-system', label: '潜行系统', icon: '🕵️‍♀️', description: '学习如何保持隐蔽与规避威胁。' },
  { path: '/guides/stamina-management', label: '体力管理', icon: '⚡', description: '优化体力使用，在追击中存活。' },
  { path: '/guides/floor-progression', label: '楼层推进', icon: '🏢', description: '规划楼层节奏与高效探索路线。' },
  { path: '/guides/team-strategies', label: '团队策略', icon: '🤝', description: '协调团队定位与优势互补。' },
  { path: '/guides/trinket-combinations', label: '饰品组合策略', icon: '💎', description: '探索组合搭配带来的额外收益。' },
  { path: '/guides/beginner-tips', label: '新手提示', icon: '🌱', description: '快速上手 Dandy’s World 的必备技巧。' },
  { path: '/guides/twisted-mechanics', label: 'Twisted 机制', icon: '⚠️', description: '了解 Twisted 行为与对抗方式。' },
];

const GuidesHubPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Dandy's World 指南中心"
        description="浏览所有 Dandy's World 指南，从核心机制到进阶策略，快速定位你需要的帮助。"
        keywords="dandys world, guides, 新手指南, twisted 对抗"
        ogTitle="Dandy's World 指南中心"
        ogDescription="全部指南集中在一处，帮助你更快掌握游戏要点。"
        ogImage="https://dandysworldcharacters.com/images/guides/guides-hub-og.png"
        ogUrl="https://dandysworldcharacters.com/guides"
        ogType="website"
        ogSiteName="Dandys World Characters"
        twitterCard="summary_large_image"
        twitterTitle="Dandy's World 指南中心"
        twitterDescription="探索从入门到进阶的完整指南。"
        twitterImage="https://dandysworldcharacters.com/images/guides/guides-hub-twitter.png"
        twitterSite="@DandysWorldChars"
        canonical="https://dandysworldcharacters.com/guides"
        robots="index, follow"
      />

      <Navigation />

      <main className="pt-16 bg-gray-900 min-h-screen text-white">
        <section className="bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950 py-16 border-b border-gray-800">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h1 className="text-4xl font-extrabold mb-4">📖 Dandy's World 指南中心</h1>
            <p className="text-lg text-gray-300">
              汇总新手、进阶与团队策略指南，快速找到你的下一步学习目标。
            </p>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {guideLinks.map((guide) => (
              <ScrollToTopLink
                key={guide.path}
                to={guide.path}
                className="group bg-gray-800/70 border border-gray-700 hover:border-purple-500 transition-colors rounded-xl p-6 h-full flex flex-col"
              >
                <div className="text-4xl mb-4 group-hover:scale-105 transition-transform">{guide.icon}</div>
                <h2 className="text-xl font-semibold text-white mb-2">{guide.label}</h2>
                <p className="text-sm text-gray-300 flex-1">{guide.description}</p>
                <span className="mt-4 inline-flex items-center text-sm text-purple-300 group-hover:text-purple-200">
                  查看详情 →
                </span>
              </ScrollToTopLink>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default GuidesHubPage;
