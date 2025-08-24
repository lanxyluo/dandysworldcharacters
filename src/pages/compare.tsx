import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { characters } from '../data/characters';
import { Character } from '../types/character';
import CharacterSelector from '../components/compare/CharacterSelector';
import ComparisonTable from '../components/compare/ComparisonTable';

export default function ComparePage() {
  const [selectedCharacters, setSelectedCharacters] = useState<Character[]>([]);

  const handleAddCharacter = (character: Character) => {
    if (selectedCharacters.length < 3 && !selectedCharacters.find(c => c.id === character.id)) {
      setSelectedCharacters([...selectedCharacters, character]);
    }
  };

  const handleRemoveCharacter = (characterId: string) => {
    setSelectedCharacters(selectedCharacters.filter(c => c.id !== characterId));
  };

  const handleClearAll = () => {
    setSelectedCharacters([]);
  };

  // Schema Markup for Tool
  const toolSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Dandys World Character Comparison Tool",
    "description": "Compare characters side-by-side to analyze stats and abilities",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <>
      <SEO 
        title="Dandys World Character Comparison | Compare Toon Stats"
        description="Compare Dandys World characters side-by-side. Analyze stats, abilities and build potential to choose the perfect Toon for your playstyle and team composition."
        keywords="dandys world, character comparison, compare stats, toon comparison, team composition, character analysis, character stats"
        ogTitle="Dandys World Character Comparison Tool"
        ogDescription="Compare characters side-by-side to analyze stats and abilities"
        ogImage="https://dandysworldcharacters.com/images/tools/character-comparison-og.png"
        ogUrl="https://dandysworldcharacters.com/compare"
        ogType="website"
        ogSiteName="Dandys World Characters"
        twitterCard="summary_large_image"
        twitterTitle="Dandys World Character Comparison"
        twitterDescription="Compare characters side-by-side to analyze stats and abilities"
        twitterImage="https://dandysworldcharacters.com/images/tools/character-comparison-twitter.png"
        twitterSite="@DandysWorldChars"
        canonical="https://dandysworldcharacters.com/compare"
        robots="index, follow, max-snippet:160, max-image-preview:standard"
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }}
      />
      
      <Navigation />
      <div className="min-h-screen bg-gray-900 text-white p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
              Dandys World Character Comparison
            </h1>
            <h2 className="text-xl text-gray-300 mb-2">
              Side-by-Side Character Analysis Tool
            </h2>
            <p className="text-gray-400 text-lg">
              Select up to 3 characters to compare their stats, abilities, and requirements
            </p>
          </div>

          {/* Character Selector */}
          <div className="mb-8">
            <CharacterSelector
              characters={characters}
              selectedCharacters={selectedCharacters}
              onAddCharacter={handleAddCharacter}
              onRemoveCharacter={handleRemoveCharacter}
              onClearAll={handleClearAll}
            />
          </div>

          {/* Comparison Table */}
          {selectedCharacters.length > 0 && (
            <div className="mb-8">
              <ComparisonTable characters={selectedCharacters} />
            </div>
          )}

          {/* Instructions */}
          {selectedCharacters.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold mb-2">No Characters Selected</h3>
              <p className="text-gray-400">
                Use the character selector above to choose characters for comparison
              </p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
