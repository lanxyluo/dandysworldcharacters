import React from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import ScrollToTopLink from '../../components/ScrollToTopLink';

const guideLinks = [
  {
    path: '/guides/game-mechanics',
    label: 'Game Mechanics',
    icon: '🎮',
    description: 'Understand core systems, currencies, and victory conditions for every run.',
  },
  {
    path: '/guides/skill-check-guide',
    label: 'Skill Check Guide',
    icon: '🎯',
    description: 'Tighten timing, master difficulty windows, and recover failed checks.',
  },
  {
    path: '/guides/stealth-system',
    label: 'Stealth System',
    icon: '🕵️',
    description: 'Stay unseen with smart pathing, sound control, and safe hide spots.',
  },
  {
    path: '/guides/stamina-management',
    label: 'Stamina Management',
    icon: '⚡',
    description: 'Manage stamina so you can sprint, kite, and clutch objectives without burning out.',
  },
  {
    path: '/guides/floor-progression',
    label: 'Floor Progression',
    icon: '🏢',
    description: 'Plan floor objectives, route efficiently, and keep unlock timelines on track.',
  },
  {
    path: '/guides/team-strategies',
    label: 'Team Strategies',
    icon: '🤝',
    description: 'Coordinate roles, comms, and trade-offs so every teammate survives the run.',
  },
  {
    path: '/guides/trinket-combinations',
    label: 'Trinket Combinations',
    icon: '💎',
    description: 'Stack trinkets that amplify each other and unlock high-impact bonuses.',
  },
  {
    path: '/guides/beginner-tips',
    label: 'Beginner Tips',
    icon: '🌱',
    description: 'Start strong with essentials every new Dandy’s World runner should know.',
  },
  {
    path: '/guides/twisted-mechanics',
    label: 'Twisted Mechanics',
    icon: '⚔️',
    description: 'Study Twisted behaviour patterns and learn how to counter each threat.',
  },
];

const GuidesHubPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Dandy's World Guide Hub"
        description="Browse every Dandy's World strategy breakdown, from core mechanics to advanced team tactics."
        keywords="dandys world, guides, strategy, mechanics, twisted counter"
        ogTitle="Dandy's World Guide Hub"
        ogDescription="Centralise your learning with curated guides for every skill level."
        ogImage="https://dandysworldcharacters.com/images/guides/guides-hub-og.png"
        ogUrl="https://dandysworldcharacters.com/guides"
        ogType="website"
        ogSiteName="Dandys World Characters"
        twitterCard="summary_large_image"
        twitterTitle="Dandy's World Guide Hub"
        twitterDescription="Level up your runs with detailed how-tos and advanced tactics."
        twitterImage="https://dandysworldcharacters.com/images/guides/guides-hub-twitter.png"
        twitterSite="@DandysWorldChars"
        canonical="https://dandysworldcharacters.com/guides"
        robots="index, follow"
      />

      <Navigation />

      <main className="pt-16 bg-gray-900 min-h-screen text-white">
        <section className="bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950 py-16 border-b border-gray-800">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h1 className="text-4xl font-extrabold mb-4">📘 Dandy's World Guide Hub</h1>
            <p className="text-lg text-gray-300">
              Catch up on fundamentals, explore advanced tactics, and pick the next lesson that keeps your squad ahead.
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
                  View details →
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
