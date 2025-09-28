import React, { useMemo, useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate, useParams } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SearchAndFilter from '../components/SearchAndFilter';
import CharacterModal from '../components/CharacterModal';
import CharacterCard from '../components/CharacterCard';
import { Character } from '../types/character';
import { getAllCharacters } from '../data/characters';

type FilterTab = 'all' | 'main' | 'regular' | 'event';
type SortKey = 'name' | 'rarity';
type SortDir = 'asc' | 'desc';

interface FilterState {
  tab: FilterTab;
  search: string;
  rarity: 'all' | 'common' | 'uncommon' | 'rare' | 'legendary' | 'twisted';
  sortKey: SortKey;
  sortDir: SortDir;
}

const defaultFilterState: FilterState = {
  tab: 'all',
  search: '',
  rarity: 'all',
  sortKey: 'name',
  sortDir: 'asc',
};

const filterByTab = (characters: Character[], tab: FilterTab) => {
  switch (tab) {
    case 'main':
      return characters.filter((character) => character.type === 'main');
    case 'regular':
      return characters.filter((character) => character.type === 'regular');
    case 'event':
      return characters.filter((character) => character.type === 'event');
    default:
      return characters;
  }
};

const filterByRarity = (characters: Character[], rarity: FilterState['rarity']) => {
  if (rarity === 'all') return characters;
  return characters.filter((character) => character.rarity === rarity);
};

const filterBySearch = (characters: Character[], query: string) => {
  if (!query.trim()) return characters;
  const lower = query.trim().toLowerCase();
  return characters.filter((character) =>
    character.name.toLowerCase().includes(lower) || character.fullName.toLowerCase().includes(lower),
  );
};

const sortCharacters = (characters: Character[], sortKey: SortKey, sortDir: SortDir) => {
  const sorted = [...characters].sort((a, b) => {
    if (sortKey === 'name') {
      return a.name.localeCompare(b.name);
    }
    return a.rarity.localeCompare(b.rarity);
  });
  return sortDir === 'asc' ? sorted : sorted.reverse();
};

const CharactersPage: React.FC = () => {
  const navigate = useNavigate();
  const { characterId } = useParams();
  const allCharacters = useMemo(() => getAllCharacters(), []);

  const [filterState, setFilterState] = useState<FilterState>(defaultFilterState);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  useEffect(() => {
    if (!characterId) {
      setSelectedCharacter(null);
      return;
    }
    const match = allCharacters.find((character) => character.id === characterId);
    setSelectedCharacter(match ?? null);
  }, [characterId, allCharacters]);

  const tabCounts = useMemo(() => ({
    all: allCharacters.length,
    main: allCharacters.filter((character) => character.type === 'main').length,
    regular: allCharacters.filter((character) => character.type === 'regular').length,
    event: allCharacters.filter((character) => character.type === 'event').length,
  }), [allCharacters]);

  const visibleCharacters = useMemo(() => {
    const byTab = filterByTab(allCharacters, filterState.tab);
    const byRarity = filterByRarity(byTab, filterState.rarity);
    const bySearch = filterBySearch(byRarity, filterState.search);
    return sortCharacters(bySearch, filterState.sortKey, filterState.sortDir);
  }, [allCharacters, filterState]);

  return (
    <>
      <Helmet>
        <title>Dandy's World Characters | Complete Character Guide & Stats</title>
        <meta
          name="description"
          content="Explore every character in Dandy's World with quick filtering by role, rarity, and unlock status."
        />
        <meta
          name="keywords"
          content="dandys world, characters, stats, abilities, unlock guide, character guide"
        />
        <meta property="og:title" content="Dandy's World Characters | Complete Character Guide & Stats" />
        <meta
          property="og:description"
          content="Browse the full roster, review stats, and open detailed guides for each character."
        />
        <link rel="canonical" href="https://www.dandysworldcharacters.com/characters" />
      </Helmet>

      <Navigation />

      <main className="bg-bg-primary min-h-screen pt-16 text-white">
        <header className="bg-gradient-to-b from-purple-900 via-gray-900 to-gray-900 border-b border-gray-800 py-14">
          <div className="max-w-6xl mx-auto px-6 text-center space-y-4">
            <h1 className="text-4xl font-extrabold">Dandy's World Character Archive</h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Filter by role, rarity, and playstyle to find the right teammate. Open a character for a full breakdown of
              stats, abilities, and unlock planning tips.
            </p>
          </div>
        </header>

        <section className="max-w-6xl mx-auto px-6 py-10">
          <SearchAndFilter
            value={filterState}
            counts={tabCounts}
            onChange={(next) => {
              const leavingRegular = filterState.tab === 'regular' && next.tab && next.tab !== 'regular';
              const nextRarity = leavingRegular ? 'all' : next.rarity ?? filterState.rarity;
              setFilterState((current) => ({
                ...current,
                ...next,
                rarity: nextRarity,
              }));
            }}
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {visibleCharacters.map((character) => (
              <CharacterCard
                key={character.id}
                character={character}
                onClick={() => navigate(`/characters/${character.id}`)}
              />
            ))}
          </div>

          {visibleCharacters.length === 0 && (
            <div className="bg-bg-secondary border border-gray-700 rounded-xl p-8 text-center text-text-secondary mt-8">
              <p>No characters match the current filters. Try adjusting the search or rarity.</p>
            </div>
          )}
        </section>
      </main>

      <Footer />

      <CharacterModal
        character={selectedCharacter}
        isOpen={Boolean(selectedCharacter)}
        onClose={() => {
          setSelectedCharacter(null);
          navigate('/characters', { replace: true });
        }}
      />
    </>
  );
};

export default CharactersPage;
