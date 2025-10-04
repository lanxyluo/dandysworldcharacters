'use client'

import React from 'react';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CharacterRecommender from '@/components/character-recommender/CharacterRecommender';

export const metadata: Metadata = {
  title: 'Character Recommender',
  description: 'Find the best Dandy's World characters for your playstyle and team composition',
};

const CharacterRecommenderPage: React.FC = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: "Dandy's World Character Recommender",
    description:
      "Generate tailored character lineups, compare stats, and plan unlock priorities for Dandy's World.",
    applicationCategory: 'GameUtility',
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  } as const;

  return (
    <>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <Navigation />
      <main className="pt-16 bg-gray-900 text-white">
        <CharacterRecommender />
      </main>
      <Footer />
    </>
  );
};

export default CharacterRecommenderPage;
