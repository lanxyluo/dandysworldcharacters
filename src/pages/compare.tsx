import React, { useState, useMemo, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { characters } from '../data/characters/index';
import { Character } from '../types/character';
import CharacterSelector from '../components/compare/CharacterSelector';
import ComparisonTable from '../components/compare/ComparisonTable';

export default function ComparePage() {
  const [selectedCharacters, setSelectedCharacters] = useState<Character[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const [showComparison, setShowComparison] = useState(false);

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-show comparison on mobile when characters are selected
  useEffect(() => {
    if (isMobile && selectedCharacters.length > 0) {
      setShowComparison(true);
    }
  }, [selectedCharacters.length, isMobile]);

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
    if (isMobile) {
      setShowComparison(false);
    }
  };

  // Character recommendations based on selected characters
  const recommendations = useMemo(() => {
    if (selectedCharacters.length === 0) return [];

    const selectedStats = {
      stealth: selectedCharacters.reduce((sum, c) => sum + c.stats.stealth, 0) / selectedCharacters.length,
      speed: selectedCharacters.reduce((sum, c) => sum + c.stats.speed, 0) / selectedCharacters.length,
      health: selectedCharacters.reduce((sum, c) => sum + c.stats.health, 0) / selectedCharacters.length,
      damage: selectedCharacters.reduce((sum, c) => sum + c.stats.damage, 0) / selectedCharacters.length,
    };

    // Find characters that complement the selected ones
    return characters
      .filter(c => !selectedCharacters.find(selected => selected.id === c.id))
      .map(character => {
        const complementScore = 
          (character.stats.stealth >= 4 && selectedStats.stealth < 3 ? 2 : 0) +
          (character.stats.speed >= 4 && selectedStats.speed < 3 ? 2 : 0) +
          (character.stats.health >= 4 && selectedStats.health < 3 ? 2 : 0) +
          (character.stats.damage >= 4 && selectedStats.damage < 3 ? 2 : 0) +
          (character.type !== selectedCharacters[0]?.type ? 1 : 0);

        return { character, complementScore };
      })
      .sort((a, b) => b.complementScore - a.complementScore)
      .slice(0, 3)
      .map(item => item.character);
  }, [selectedCharacters]);

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
      <div className="min-h-screen bg-gray-900 text-white p-4 md:p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
              Dandys World Character Comparison
            </h1>
            <h2 className="text-lg md:text-xl text-gray-300 mb-2">
              Side-by-Side Character Analysis Tool
            </h2>
            <p className="text-gray-400 text-base md:text-lg">
              Select up to 3 characters to compare their stats, abilities, and requirements
            </p>
          </div>

          {/* Mobile Navigation Tabs */}
          {isMobile && selectedCharacters.length > 0 && (
            <div className="flex mb-6 bg-gray-800 rounded-lg p-1">
              <button
                onClick={() => setShowComparison(false)}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                  !showComparison
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Select Characters ({selectedCharacters.length}/3)
              </button>
              <button
                onClick={() => setShowComparison(true)}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                  showComparison
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                View Comparison
              </button>
            </div>
          )}

          {/* Character Selector */}
          {(!isMobile || !showComparison) && (
            <div className="mb-8">
              <CharacterSelector
                characters={characters}
                selectedCharacters={selectedCharacters}
                onAddCharacter={handleAddCharacter}
                onRemoveCharacter={handleRemoveCharacter}
                onClearAll={handleClearAll}
              />
            </div>
          )}

          {/* Character Recommendations */}
          {selectedCharacters.length > 0 && selectedCharacters.length < 3 && (
            <div className="mb-8 bg-gray-800 rounded-lg border border-gray-700 p-6">
              <h3 className="text-lg font-medium mb-4 text-purple-400">
                💡 Recommended Characters
              </h3>
              <p className="text-gray-400 mb-4 text-sm">
                These characters would complement your current selection well:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {recommendations.map(character => (
                  <div
                    key={character.id}
                    className="bg-gray-700 rounded-lg p-4 border border-gray-600 hover:border-purple-500 transition-colors cursor-pointer"
                    onClick={() => handleAddCharacter(character)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">{character.image}</div>
                      <div className="flex-1">
                        <div className="font-medium">{character.name}</div>
                        <div className="text-sm text-gray-400">{character.type} • {character.rarity}</div>
                        <div className="text-xs text-gray-500 mt-1">
                          Stealth: {character.stats.stealth} • Speed: {character.stats.speed} • Health: {character.stats.health}
                        </div>
                      </div>
                      <button className="px-3 py-1 bg-purple-600 hover:bg-purple-700 rounded text-sm transition-colors">
                        Add
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Comparison Table */}
          {selectedCharacters.length > 0 && (!isMobile || showComparison) && (
            <div className="mb-8">
              <ComparisonTable characters={selectedCharacters} />
            </div>
          )}

          {/* Empty State */}
          {selectedCharacters.length === 0 && (
            <div className="text-center py-16">
              <div className="text-8xl mb-6">🔍</div>
              <h3 className="text-2xl font-semibold mb-4">Start Comparing Characters</h3>
              <p className="text-gray-400 text-lg mb-6 max-w-2xl mx-auto">
                Select up to 3 characters from the list above to begin comparing their stats, 
                abilities, and unlock requirements. This will help you make informed decisions 
                about which characters to unlock next.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                  <div className="text-4xl mb-3">📊</div>
                  <h4 className="font-medium mb-2">Stat Analysis</h4>
                  <p className="text-sm text-gray-400">
                    Compare skill checks, stealth, speed, health, and damage across characters
                  </p>
                </div>
                <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                  <div className="text-4xl mb-3">⚡</div>
                  <h4 className="font-medium mb-2">Team Synergy</h4>
                  <p className="text-sm text-gray-400">
                    Discover which characters work well together and identify potential weaknesses
                  </p>
                </div>
                <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                  <div className="text-4xl mb-3">🎯</div>
                  <h4 className="font-medium mb-2">Unlock Planning</h4>
                  <p className="text-sm text-gray-400">
                    Plan your character progression with total ichor costs and requirements
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Tips Section */}
          {selectedCharacters.length > 0 && (
            <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
              <h3 className="text-lg font-medium mb-4 text-yellow-400">
                💡 Comparison Tips
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2 text-green-400">Team Building</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Balance stealth and speed for different mission types</li>
                    <li>• Consider health and damage for combat scenarios</li>
                    <li>• Mix character types for diverse abilities</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-blue-400">Resource Planning</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Total ichor cost for your selected characters</li>
                    <li>• Research and mastery requirements</li>
                    <li>• Twisted version availability</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
