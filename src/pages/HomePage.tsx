import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import SearchAndFilter from '../components/SearchAndFilter';
import CharacterCard from '../components/CharacterCard';
import Footer from '../components/Footer';
import { characters } from '../data/characters';
import { Character } from '../types/character';

const HomePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentFilter, setCurrentFilter] = useState('all');

  // 过滤角色
  const filteredCharacters = useMemo(() => {
    return characters.filter(character => {
      const matchesSearch = character.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           character.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      if (currentFilter === 'all') return matchesSearch;
      if (currentFilter === 'main') return matchesSearch && character.type === 'main';
      if (currentFilter === 'lethal') return matchesSearch && character.type === 'lethal';
      if (currentFilter === 'twisted') return matchesSearch && character.type === 'twisted';
      
      return matchesSearch;
    });
  }, [searchTerm, currentFilter]);

  // 网站结构化数据
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Dandys World Characters Database",
    "description": "Complete database and tools for Dandys World game characters",
    "url": "https://dandysworldcharacters.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://dandysworldcharacters.com/characters?search={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Dandys World Characters",
      "logo": {
        "@type": "ImageObject",
        "url": "https://dandysworldcharacters.com/logo.png"
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Dandys World Characters Database | Complete Character Stats & Guide</title>
        <meta name="description" content="Complete Dandys World characters database with stats, abilities, unlock guides and tools. Explore all 36+ Toons including Main Characters like Astro, Sprout, Vee with detailed builds and strategies." />
        <meta name="keywords" content="dandys world, characters database, character stats, abilities, unlock guides, main characters, astro, sprout, vee, character builds" />
        <meta property="og:title" content="Dandys World Characters Database | Complete Guide" />
        <meta property="og:description" content="Complete database for all Dandys World characters with stats, guides and tools. Master all 36+ Toons including Main Characters." />
        <meta property="og:image" content="https://dandysworldcharacters.com/images/og-homepage.png" />
        <meta property="og:url" content="https://dandysworldcharacters.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Dandys World Characters" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dandys World Characters Database" />
        <meta name="twitter:description" content="Complete character database and tools for Dandys World game" />
        <meta name="twitter:image" content="https://dandysworldcharacters.com/images/twitter-card.png" />
        <meta name="twitter:site" content="@DandysWorldChars" />
        <link rel="canonical" href="https://dandysworldcharacters.com/" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
        <meta name="theme-color" content="#1a1a1a" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Dandys World" />
        <meta name="format-detection" content="telephone=no" />
      </Helmet>
      
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      
      <Navigation />
      
      <HeroSection />
      
      <SearchAndFilter
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        currentFilter={currentFilter}
        onFilterChange={setCurrentFilter}
      />
      
      {/* Characters Grid */}
      <section id="characters" className="px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">
            Dandys World Characters Database
          </h1>
          
          <h2 className="text-2xl font-semibold text-center mb-4 text-gray-300">
            All Characters
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredCharacters.map((character) => (
              <Link key={character.id} to={`/characters/${character.id}`}>
                <CharacterCard
                  character={character}
                  onClick={() => {}} // 空函数，因为现在使用Link导航
                />
              </Link>
            ))}
          </div>
          
          {/* 查看更多角色按钮 */}
          <div className="text-center mt-8">
            <Link 
              to="/characters"
              className="inline-flex items-center px-6 py-3 bg-accent-main hover:bg-accent-main/80 text-white font-semibold rounded-lg transition-colors"
            >
              <span>View All Characters</span>
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
}

export default HomePage;
