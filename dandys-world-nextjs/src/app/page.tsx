'use client'

import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { mainNavigation } from '@/config/navigation'

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: "Dandy's World Strategy Hub",
  description:
    "Optimize trinket builds, survive Twisted encounters, and track unlock progress with one toolkit.",
  url: 'https://dandysworldcharacters.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://dandysworldcharacters.com/trinket-builds?query={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
  publisher: {
    '@type': 'Organization',
    name: "Dandy's World Characters",
    logo: {
      '@type': 'ImageObject',
      url: 'https://dandysworldcharacters.com/logo.png',
    },
  },
} as const

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />

      <Navigation />

      <main className="bg-gray-900 text-white">
        <section className="bg-gradient-to-b from-purple-900 via-gray-900 to-gray-900 py-20 border-b border-purple-700/30">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-5xl font-extrabold mb-6">Dandy's World Strategy Hub</h1>
            <p className="text-xl text-gray-200 mb-8">
              Smarter builds, faster Twisted responses, and clearer progression planning—all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/trinket-builds"
                className="px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold text-lg transition-colors"
              >
                🛠️ Start optimizing trinkets
              </Link>
              <Link
                href="/twisted-guide"
                className="px-8 py-4 bg-red-600 hover:bg-red-700 rounded-lg font-semibold text-lg transition-colors"
              >
                ⚔️ Open the Twisted guide
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Core tools</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {mainNavigation.map((item) => (
                <Link
                  key={item.id}
                  href={item.path}
                  className="bg-gray-800/70 border border-gray-700 hover:border-purple-500 transition-colors rounded-xl p-6 flex flex-col"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                  <p className="text-sm text-gray-300 flex-1">{item.description}</p>
                  <span className="mt-4 inline-flex items-center text-sm text-purple-300">Learn more →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 border-t border-gray-800 bg-gray-950">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-gray-900/80 border border-gray-800 rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-3">🔥 Latest highlights</h3>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li>• Twisted Counter Guide now supports threat-level and rarity filters.</li>
                  <li>• Trinket Optimizer delivers AI-backed loadouts with usage trends.</li>
                  <li>• Progress Tracker unifies Research Calculator, Unlock Optimizer, and planning boards.</li>
                </ul>
              </div>

              <div className="bg-gray-900/80 border border-gray-800 rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-3">📆 Roadmap</h3>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li>• Phase 3: Character Recommender integrates comparison and team advice.</li>
                  <li>• Phase 4: Progress Tracker expands into unlock reminders and history logs.</li>
                  <li>• Phase 5: Team strategy simulator and floor-specific coaching.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
