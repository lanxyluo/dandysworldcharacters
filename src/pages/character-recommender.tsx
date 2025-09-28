import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import CharacterRecommender from '../components/character-recommender/CharacterRecommender';

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
      <SEO
        title="Dandy's World Character Recommender | Build the Perfect Team"
        description="Discover the best Dandy's World characters for your playstyle, compare stats, and map out unlock priorities with the integrated character recommender."
        keywords="dandys world, character recommender, team builder, character comparison, ichor planning"
        ogTitle="Dandy's World Character Recommender"
        ogDescription="Smart suggestions, comparisons, and team insights for every Dandy's World player."
        ogImage="https://dandysworldcharacters.com/images/tools/character-recommender-og.png"
        ogUrl="https://dandysworldcharacters.com/character-recommender"
        ogType="website"
        ogSiteName="Dandys World Characters"
        twitterCard="summary_large_image"
        twitterTitle="Dandy's World Character Recommender"
        twitterDescription="Find your next main, compare stats, and plan unlocks."
        twitterImage="https://dandysworldcharacters.com/images/tools/character-recommender-twitter.png"
        twitterSite="@DandysWorldChars"
        canonical="https://dandysworldcharacters.com/character-recommender"
        robots="index, follow"
        viewport="width=device-width, initial-scale=1.0"
        themeColor="#1a1a1a"
        mobileWebAppCapable="yes"
        appleMobileWebAppCapable="yes"
        appleMobileWebAppStatusBarStyle="black-translucent"
        appleMobileWebAppTitle="Dandy's World"
        formatDetection="telephone=no"
      />

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
