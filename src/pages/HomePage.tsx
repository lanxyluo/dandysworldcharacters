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

  return (
    <>
      <SEO 
        title="Dandys World Characters Database | Complete Guide & Stats"
        description="Complete Dandy's World characters database with stats, abilities, and unlock guides. Find all toons, compare stats, and optimize your team builds."
        keywords="dandys world, dandy's world characters, dandys world guide, character stats, abilities, unlock guide"
        canonical="https://www.dandysworldcharacters.com/"
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
          <h2 className="text-3xl font-bold text-center mb-12">
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
