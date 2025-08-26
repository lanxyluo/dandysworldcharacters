import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import CharacterCard from '../components/CharacterCard';
import Footer from '../components/Footer';
import { getOfficialPlayableCharacters } from '../data/characters/index';
import { Character } from '../types/character';

const HomePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentFilter, setCurrentFilter] = useState('all');

  // 过滤角色
  const filteredCharacters = useMemo(() => {
    return getOfficialPlayableCharacters().filter(character => {
      const matchesSearch = character.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           character.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      if (currentFilter === 'all') return matchesSearch;
      if (currentFilter === 'main') return matchesSearch && character.type === 'main';
      if (currentFilter === 'regular') return matchesSearch && character.type === 'regular';
      if (currentFilter === 'event') return matchesSearch && character.type === 'event';
      
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
      
      <HeroSection 
        totalCharacters={getOfficialPlayableCharacters().length}
        mainCharacters={getOfficialPlayableCharacters().filter(c => c.type === 'main').length}
        eventCharacters={getOfficialPlayableCharacters().filter(c => c.type === 'event').length}
      />
      
      {/* Simple search and filter controls for homepage */}
      <section className="px-4 mb-8">
        <div className="max-w-7xl mx-auto">
          <div className="glass-effect rounded-2xl p-6">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              <div className="flex-1 relative w-full">
                <input
                  type="text"
                  placeholder="Search characters..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-bg-card text-white px-4 py-3 pl-12 rounded-lg border border-gray-600 focus:border-accent-main focus:outline-none transition-colors"
                />
                <svg className="w-5 h-5 absolute left-4 top-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  { key: 'all', label: 'All' },
                  { key: 'main', label: 'Main' },
                  { key: 'regular', label: 'Regular' },
                  { key: 'event', label: 'Event' },
                ].map((f) => (
                  <button
                    key={f.key}
                    onClick={() => setCurrentFilter(f.key)}
                    className={`filter-btn ${currentFilter === f.key ? 'active' : ''}`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
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
