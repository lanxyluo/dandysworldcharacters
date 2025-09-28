import React, { useMemo, useState } from 'react';
import { twistedStrategies } from '../../data/twisted-strategies';
import type { TwistedStrategyProfile, TwistedThreatLevel, TwistedRarity } from '../../types/twisted-strategies';

type ThreatFilter = '' | TwistedThreatLevel;
type RarityFilter = '' | TwistedRarity;

const THREAT_LABEL: Record<TwistedThreatLevel, string> = {
  extreme: 'Extreme',
  high: 'High',
  medium: 'Moderate',
  low: 'Low',
};

const THREAT_BADGE: Record<TwistedThreatLevel, string> = {
  extreme: 'bg-red-600',
  high: 'bg-orange-500',
  medium: 'bg-yellow-500',
  low: 'bg-green-600',
};

const RARITY_LABEL: Record<TwistedRarity, string> = {
  lethal: 'Lethal',
  main: 'Main',
  rare: 'Rare',
  uncommon: 'Uncommon',
  common: 'Common',
};

const difficultyStars = (rating: number): string => {
  const stars = Math.max(1, Math.min(5, Math.round(rating / 2)));
  return '★'.repeat(stars);
};

const TwistedCard: React.FC<{ profile: TwistedStrategyProfile; onQuickView: (name: string) => void }> = ({
  profile,
  onQuickView,
}) => (
  <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700">
    <div className="flex flex-wrap items-center gap-3 mb-4">
      <h3 className="text-2xl font-bold text-white">{profile.name}</h3>
      <span className={`px-2 py-1 rounded text-xs font-semibold ${THREAT_BADGE[profile.threat_level]}`}>
        {THREAT_LABEL[profile.threat_level]}
      </span>
      <span className="px-2 py-1 rounded text-xs font-semibold bg-gray-700 text-gray-200">
        {RARITY_LABEL[profile.rarity]}
      </span>
      <span className="text-yellow-400 text-sm">{difficultyStars(profile.difficulty_rating)}</span>
    </div>

    <div className="grid gap-4 lg:grid-cols-3">
      <div className="space-y-3">
        <div>
          <h4 className="text-sm font-semibold text-purple-300 mb-2">Identification cues</h4>
          <div className="text-sm text-gray-300 space-y-1">
            <div>
              <strong className="text-gray-200">Visual:</strong> {profile.identification.visual_cues.join(', ')}
            </div>
            <div>
              <strong className="text-gray-200">Audio:</strong> {profile.identification.audio_cues.join(', ')}
            </div>
            <div>
              <strong className="text-gray-200">Spawn:</strong> {profile.identification.spawn_conditions.join(', ')}
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-red-300 mb-2">Special abilities</h4>
          <ul className="text-sm text-gray-300 space-y-1">
            {profile.special_abilities.map((ability) => (
              <li key={ability}>• {ability}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="space-y-3">
        <div>
          <h4 className="text-sm font-semibold text-green-300 mb-2">Avoidance tips</h4>
          <ul className="text-sm text-gray-300 space-y-1">
            {profile.strategies.avoidance.map((tip) => (
              <li key={tip}>• {tip}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-yellow-300 mb-2">If spotted</h4>
          <ul className="text-sm text-gray-300 space-y-1">
            {profile.strategies.if_spotted.map((tip) => (
              <li key={tip}>• {tip}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="space-y-3">
        <div>
          <h4 className="text-sm font-semibold text-blue-300 mb-2">Team coordination</h4>
          <ul className="text-sm text-gray-300 space-y-1">
            {profile.strategies.team_coordination.map((tip) => (
              <li key={tip}>• {tip}</li>
            ))}
          </ul>
        </div>

        {profile.common_mistakes.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-red-400 mb-2">Common mistakes</h4>
            <ul className="text-sm text-red-200 space-y-1">
              {profile.common_mistakes.map((mistake) => (
                <li key={mistake}>✖ {mistake}</li>
              ))}
            </ul>
          </div>
        )}

        {profile.counters.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-green-400 mb-2">Counter play</h4>
            <ul className="text-sm text-gray-300 space-y-1">
              {profile.counters.map((counter) => (
                <li key={counter}>✔ {counter}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>

    <button
      className="mt-4 inline-flex items-center gap-2 text-sm text-purple-300 hover:text-purple-200"
      onClick={() => onQuickView(profile.name)}
    >
      Quick-search {profile.name} in the lookup ↑
    </button>
  </div>
);

const TwistedGuide: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedThreatLevel, setSelectedThreatLevel] = useState<ThreatFilter>('');
  const [selectedRarity, setSelectedRarity] = useState<RarityFilter>('');

  const emergencyTwisteds = useMemo(() => {
    return twistedStrategies
      .filter((profile) => profile.threat_level === 'extreme')
      .sort((a, b) => b.difficulty_rating - a.difficulty_rating)
      .slice(0, 3);
  }, []);

  const filteredTwisteds = useMemo(() => {
    const lowerQuery = searchQuery.trim().toLowerCase();

    return twistedStrategies.filter((profile) => {
      const matchesQuery =
        lowerQuery.length === 0 ||
        profile.name.toLowerCase().includes(lowerQuery) ||
        profile.special_abilities.some((ability) => ability.toLowerCase().includes(lowerQuery));

      const matchesThreat = !selectedThreatLevel || profile.threat_level === selectedThreatLevel;
      const matchesRarity = !selectedRarity || profile.rarity === selectedRarity;

      return matchesQuery && matchesThreat && matchesRarity;
    });
  }, [searchQuery, selectedThreatLevel, selectedRarity]);

  const handleQuickSelect = (name: string) => {
    setSearchQuery(name);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-10 space-y-10">
        <header className="text-center space-y-4">
          <h1 className="text-4xl font-extrabold">⚔️ Twisted Counter Guide</h1>
          <p className="text-lg text-gray-300">
            Search threat intel, filter by danger level, and review rapid-response tactics for every Twisted entity.
          </p>
        </header>

        <section className="bg-red-900/40 border border-red-700 rounded-lg p-6 space-y-4">
          <h2 className="text-xl font-semibold text-red-100">🚨 Emergency lookup</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {emergencyTwisteds.map((profile) => (
              <button
                key={profile.twistedId}
                className="bg-red-800/70 hover:bg-red-700/80 transition-colors p-4 rounded-lg text-left"
                onClick={() => handleQuickSelect(profile.name)}
              >
                <div className="font-semibold text-white">{profile.name}</div>
                <div className="text-sm text-red-200 mt-2">{profile.identification.audio_cues[0]}</div>
                <div className="text-xs text-red-300 mt-3">Tap to load the full strategy card</div>
              </button>
            ))}
          </div>
        </section>

        <section className="bg-gray-800 rounded-lg p-6 space-y-4">
          <div className="grid gap-4 md:grid-cols-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-2 text-gray-300">Quick search</label>
              <input
                type="text"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search by Twisted name or ability keyword..."
                className="w-full p-3 bg-gray-700 rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">Threat level</label>
              <select
                value={selectedThreatLevel}
                onChange={(event) => setSelectedThreatLevel(event.target.value as ThreatFilter)}
                className="w-full p-3 bg-gray-700 rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none"
              >
                <option value="">All levels</option>
                <option value="extreme">Extreme</option>
                <option value="high">High</option>
                <option value="medium">Moderate</option>
                <option value="low">Low</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">Rarity</label>
              <select
                value={selectedRarity}
                onChange={(event) => setSelectedRarity(event.target.value as RarityFilter)}
                className="w-full p-3 bg-gray-700 rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none"
              >
                <option value="">All rarities</option>
                <option value="lethal">Lethal</option>
                <option value="main">Main</option>
                <option value="rare">Rare</option>
                <option value="uncommon">Uncommon</option>
                <option value="common">Common</option>
              </select>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          {filteredTwisteds.length === 0 ? (
            <div className="bg-gray-800 rounded-lg p-8 text-center text-gray-400">
              No Twisted entries match the current filters.
            </div>
          ) : (
            filteredTwisteds.map((profile) => (
              <TwistedCard key={profile.twistedId} profile={profile} onQuickView={handleQuickSelect} />
            ))
          )}
        </section>
      </div>
    </div>
  );
};

export default TwistedGuide;
