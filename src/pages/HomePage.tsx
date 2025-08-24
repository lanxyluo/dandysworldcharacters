import { useState, useMemo } from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import SearchAndFilter from '../components/SearchAndFilter';
import CharacterCard from '../components/CharacterCard';
import CharacterModal from '../components/CharacterModal';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { characters } from '../data/characters';
import { Character } from '../types/character';

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentFilter, setCurrentFilter] = useState('all');
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter and search characters
  const filteredCharacters = useMemo(() => {
    return characters.filter(character => {
      const matchesFilter = currentFilter === 'all' || character.type === currentFilter;
      const matchesSearch = character.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          character.fullName.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [searchTerm, currentFilter]);

  const handleCharacterClick = (character: Character) => {
    setSelectedCharacter(character);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCharacter(null);
  };

  // Schema Markup for Website
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
      <SEO 
        title="Dandys World Characters Database | Complete Character Stats & Guide"
        description="Complete Dandys World characters database with stats, abilities, unlock guides and tools. Explore all 36+ Toons including Main Characters like Astro, Sprout, Vee with detailed builds and strategies."
        keywords="dandys world, characters database, character stats, abilities, unlock guides, main characters, astro, sprout, vee, character builds"
        ogTitle="Dandys World Characters Database | Complete Guide"
        ogDescription="Complete database for all Dandys World characters with stats, guides and tools. Master all 36+ Toons including Main Characters."
        ogImage="https://dandysworldcharacters.com/images/og-homepage.png"
        ogUrl="https://dandysworldcharacters.com"
        ogType="website"
        ogSiteName="Dandys World Characters"
        twitterCard="summary_large_image"
        twitterTitle="Dandys World Characters Database"
        twitterDescription="Complete character database and tools for Dandys World game"
        twitterImage="https://dandysworldcharacters.com/images/twitter-card.png"
        twitterSite="@DandysWorldChars"
        canonical="https://dandysworldcharacters.com/"
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
              <CharacterCard
                key={character.id}
                character={character}
                onClick={() => handleCharacterClick(character)}
              />
            ))}
          </div>
        </div>
      </section>

      <CharacterModal
        character={selectedCharacter}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
      
      <Footer />
    </>
  );
}
