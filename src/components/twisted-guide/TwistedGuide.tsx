import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { twistedStrategies } from '../../data/twisted-strategies';
import type {
  TwistedMechanicsSection,
  TwistedStrategyProfile,
  TwistedThreatLevel,
  TwistedRarity,
  TwistedThreatAssessment,
} from '../../types/twisted-strategies';

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

const MECHANIC_CONFIG: Array<{ key: keyof TwistedMechanicsSection; label: string; color: string }> = [
  { key: 'speed', label: 'Speed', color: 'text-yellow-300' },
  { key: 'attentionSpan', label: 'Attention Span', color: 'text-blue-300' },
  { key: 'detectionRange', label: 'Detection Range', color: 'text-purple-300' },
  { key: 'damage', label: 'Damage', color: 'text-red-300' },
];

const THREAT_STYLE: Record<
  TwistedThreatAssessment['color'],
  { card: string; badge: string; difficulty: string; label: string }
> = {
  lethal: {
    card: 'border-2 border-red-600 shadow-xl animate-pulse',
    badge: 'bg-gradient-to-r from-black via-red-700 to-red-500 text-red-100',
    difficulty: 'bg-red-700 text-red-50',
    label: 'Threat Assessment',
  },
  extreme: {
    card: 'border-2 border-red-500 shadow-xl',
    badge: 'bg-red-700/90 text-red-100',
    difficulty: 'bg-red-600/80 text-red-50',
    label: 'Threat Assessment',
  },
  high: {
    card: 'border-2 border-orange-500 shadow-lg',
    badge: 'bg-orange-500/90 text-gray-900',
    difficulty: 'bg-orange-600 text-gray-900',
    label: 'Threat Assessment',
  },
  moderateHigh: {
    card: 'border-2 border-amber-500 shadow-lg',
    badge: 'bg-amber-400 text-gray-900',
    difficulty: 'bg-amber-500 text-gray-900',
    label: 'Threat Assessment',
  },
};

const THREAT_LEGEND = [
  { rating: '⭐ 5/5', label: 'Lethal (Red/Black): Instant kill capability - maximum danger' },
  { rating: '⭐ 4.5/5', label: 'Extreme (Dark Red): Requires expert skills to survive' },
  { rating: '⭐ 4/5', label: 'High (Orange): Dangerous mechanics - advanced skill needed' },
  { rating: '⭐ 3.5/5', label: 'Moderate-High (Light Orange): Manageable with practice' },
  { rating: '⭐ 3/5', label: 'Moderate (Yellow): Standard threat level' },
  { rating: '⭐ 2/5', label: 'Low (Green): Relatively easy to avoid' },
  { rating: '⭐ 1/5', label: 'Minimal (Blue): Basic threat' },
];

const SYNERGY_WARNINGS = [
  'Pebble + Vee: Popups block vision while Pebble chases—extremely lethal.',
  'Dandy + Astro: Failed Skill Checks drain progress and alert Dandy instantly.',
  'Shelly + any fast Twisted: -25% extraction increases encounter frequency.',
  'Vee + Shelly: Slow extraction plus pop-up distraction leads to high failure rates.',
];

const COMPARISON_STORAGE_KEY = 'twistedComparisonSelection';
const MAX_COMPARISON_ENTRIES = 3;

const COMPARISON_PRESETS: Record<string, string[]> = {
  'Compare All Mains': ['twisted-pebble', 'twisted-astro', 'twisted-shelly'],
  'Fastest vs Slowest': ['twisted-pebble', 'twisted-vee', 'twisted-sprout'],
  'Lethal vs High Threat': ['twisted-dandy', 'twisted-pebble', 'twisted-astro'],
};

interface TwistedCardProps {
  profile: TwistedStrategyProfile;
  onQuickView: (name: string) => void;
  comparisonMode: boolean;
  selected: boolean;
  disabled: boolean;
  onToggleComparison: (id: string) => void;
}

const TwistedCard: React.FC<TwistedCardProps> = ({
  profile,
  onQuickView,
  comparisonMode,
  selected,
  disabled,
  onToggleComparison,
}) => {
  const threatTheme = THREAT_STYLE[profile.threatAssessment.color] ?? THREAT_STYLE.high;

  return (
    <div
      className={`bg-gray-800 rounded-lg p-6 ${threatTheme.card} ${
        selected ? 'ring-2 ring-purple-400 shadow-purple-500/40' : ''
      } ${comparisonMode && disabled ? 'opacity-60' : ''}`}
    >
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <h3 className="text-2xl font-bold text-white">{profile.name}</h3>
        <span className={`px-2 py-1 rounded text-xs font-semibold ${THREAT_BADGE[profile.threat_level]}`}>
          {THREAT_LABEL[profile.threat_level]}
        </span>
        <span className="px-2 py-1 rounded text-xs font-semibold bg-gray-700 text-gray-200">
          {RARITY_LABEL[profile.rarity]}
        </span>
        <span className={`px-2 py-1 rounded text-xs font-semibold ${threatTheme.badge}`}>
          {profile.threatAssessment.stars}
        </span>
        <span className={`px-2 py-1 rounded text-xs font-semibold ${threatTheme.difficulty}`}>
          {profile.threatAssessment.difficulty}
        </span>
        {comparisonMode && (
          <label
            className={`ml-auto flex items-center gap-2 text-xs font-semibold ${
              selected ? 'text-purple-200' : 'text-gray-300'
            } ${disabled && !selected ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <input
              type="checkbox"
              checked={selected}
              disabled={disabled && !selected}
              onChange={() => onToggleComparison(profile.twistedId)}
              className={`h-4 w-4 rounded border-0 bg-gray-700 accent-purple-500 shadow-inner ${
                selected ? 'ring-2 ring-purple-300' : ''
              }`}
            />
            <span>{selected ? 'Selected' : 'Compare'}</span>
          </label>
        )}
      </div>

      <p className="text-sm text-gray-300 mb-3">
        <span className="font-semibold text-gray-100">Threat Assessment:</span> {profile.threatAssessment.reason}
      </p>

      {profile.threatAssessment.warning && (
        <div className="mb-4 rounded border border-red-500 bg-red-800/80 px-3 py-2 text-center text-sm font-semibold text-red-100">
          {profile.threatAssessment.warning}
        </div>
      )}

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="space-y-3">
          <div className="space-y-3">
            <div>
              <h4 className="text-sm font-semibold text-purple-300 mb-2">Identification cues</h4>
              <div className="text-sm text-gray-300 space-y-1">
              <div>
                <strong className="text-gray-200">Visual:</strong> {profile.identification.visual_cues.join(', ')}
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-lg">🔊</span>
              <h4 className="text-sm font-semibold text-indigo-300">Audio Cues</h4>
              <span className="text-sm font-semibold text-gray-200">{profile.audioProfile.intensityIcon}</span>
              <span className="text-xs uppercase tracking-wide text-gray-400">{profile.audioProfile.intensityLabel}</span>
            </div>
            <ul className="text-sm text-gray-300 space-y-1 list-disc list-inside">
              {profile.audioProfile.cues.map((cue) => (
                <li key={cue}>{cue}</li>
              ))}
            </ul>
          </div>

          <div className="text-sm text-gray-300">
            <strong className="text-gray-200">Spawn:</strong> {profile.identification.spawn_conditions.join(', ')}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-cyan-300 mb-2">Stats &amp; Mechanics</h4>
          <ul className="text-sm text-gray-300 space-y-2">
            {MECHANIC_CONFIG.map(({ key, label, color }) => {
              const detail = profile.mechanics[key];
              if (!detail) return null;
              const highlight = key === 'damage' && detail.emphasis === 'danger';
              const descriptionClass = highlight
                ? 'bg-red-800/70 border border-red-500 text-red-100 font-semibold px-2 py-1 rounded'
                : 'text-gray-200';

              return (
                <li key={key} className="flex flex-col gap-1 sm:flex-row sm:items-start sm:gap-3">
                  <span className="font-semibold text-gray-200 sm:w-40">{label}:</span>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`font-semibold ${color}`}>{detail.icon}</span>
                    <span className={descriptionClass}>{detail.description}</span>
                  </div>
                </li>
              );
            })}
          </ul>
          {profile.mechanics.special && (
            <p className="mt-2 rounded border border-dashed border-gray-600 bg-gray-900/60 p-2 text-xs text-gray-300">
              <span className="font-semibold text-gray-200">Special:</span> {profile.mechanics.special}
            </p>
          )}
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

        {(profile.common_mistakes.length > 0 || profile.corrective_actions.length > 0) && (
          <div>
            <h4 className="text-sm font-semibold text-red-400 mb-2">Common mistakes</h4>
            <div className="space-y-2">
              {profile.common_mistakes.length > 0 && (
                <ul className="text-sm text-red-200 space-y-1">
                  {profile.common_mistakes.map((mistake) => (
                    <li key={mistake}>✗ {mistake}</li>
                  ))}
                </ul>
              )}
              {profile.corrective_actions.length > 0 && (
                <ul className="text-sm text-green-300 space-y-1">
                  {profile.corrective_actions.map((action) => (
                    <li key={action}>✓ {action}</li>
                  ))}
                </ul>
              )}
            </div>
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
};

const TwistedGuide: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedThreatLevel, setSelectedThreatLevel] = useState<ThreatFilter>('');
  const [selectedRarity, setSelectedRarity] = useState<RarityFilter>('');
  const [comparisonMode, setComparisonMode] = useState(false);
  const [selectedComparisons, setSelectedComparisons] = useState<string[]>([]);
  const [comparisonLoading, setComparisonLoading] = useState(false);
  const [shareLink, setShareLink] = useState('');
  const [shareStatus, setShareStatus] = useState<'idle' | 'copied' | 'error'>('idle');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const params = new URLSearchParams(window.location.search);
    const fromQuery = params.get('compare');
    let initial: string[] = [];

    if (fromQuery) {
      initial = fromQuery
        .split(',')
        .map((entry) => entry.trim())
        .filter((entry) => entry.length > 0);
    } else {
      const stored = window.localStorage.getItem(COMPARISON_STORAGE_KEY);
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed)) {
            initial = parsed;
          }
        } catch (error) {
          // ignore malformed storage
        }
      }
    }

    if (initial.length > 0) {
      const unique = Array.from(new Set(initial)).slice(0, MAX_COMPARISON_ENTRIES);
      setSelectedComparisons(unique);
      setComparisonMode(true);
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem(COMPARISON_STORAGE_KEY, JSON.stringify(selectedComparisons));
  }, [selectedComparisons]);

  useEffect(() => {
    if (!comparisonMode || selectedComparisons.length === 0) {
      setComparisonLoading(false);
      return;
    }

    setComparisonLoading(true);
    const timer = window.setTimeout(() => setComparisonLoading(false), 450);
    return () => window.clearTimeout(timer);
  }, [comparisonMode, selectedComparisons]);

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

  type ComparisonRow = {
    key: string;
    label: string;
    tooltip?: string;
    formatter: (profile: TwistedStrategyProfile) => string;
    score?: (profile: TwistedStrategyProfile) => number;
    invertDanger?: boolean;
  };

  const selectedProfiles = useMemo(
    () =>
      selectedComparisons
        .map((id) => twistedStrategies.find((entry) => entry.twistedId === id))
        .filter((entry): entry is TwistedStrategyProfile => Boolean(entry)),
    [selectedComparisons],
  );

  const comparisonRows = useMemo<ComparisonRow[]>(
    () => [
      {
        key: 'rarity',
        label: 'Rarity',
        tooltip: 'Base classification and unlock type.',
        formatter: (profile) => RARITY_LABEL[profile.rarity],
      },
      {
        key: 'threat',
        label: 'Threat Level',
        tooltip: 'Overall threat score based on encounters.',
        formatter: (profile) => profile.threatAssessment.stars,
        score: (profile) => profile.threatAssessment.rating,
      },
      {
        key: 'chaseSpeed',
        label: 'Speed (Chase)',
        tooltip: 'Base chase speed without panic modifiers.',
        formatter: (profile) => profile.comparisonMetrics.chaseSpeed.toString(),
        score: (profile) => profile.comparisonMetrics.chaseSpeed,
      },
      {
        key: 'panicSpeed',
        label: 'Speed (Panic)',
        tooltip: 'Chase speed once panic modifiers apply.',
        formatter: (profile) => profile.comparisonMetrics.panicSpeed.toString(),
        score: (profile) => profile.comparisonMetrics.panicSpeed,
      },
      {
        key: 'attentionSpanSeconds',
        label: 'Attention Span',
        tooltip: 'How long the Twisted pursues before losing interest.',
        formatter: (profile) => `${profile.comparisonMetrics.attentionSpanSeconds}s`,
        score: (profile) => profile.comparisonMetrics.attentionSpanSeconds,
      },
      {
        key: 'detectionRange',
        label: 'Detection Range',
        tooltip: 'Relative detection reach and precision.',
        formatter: (profile) => profile.comparisonMetrics.detectionDescriptor,
        score: (profile) => profile.comparisonMetrics.detectionScore,
      },
      {
        key: 'damageType',
        label: 'Damage Type',
        tooltip: 'Damage inflicted upon contact.',
        formatter: (profile) => profile.comparisonMetrics.damageType,
      },
      {
        key: 'specialAbility',
        label: 'Special Ability',
        tooltip: 'Signature mechanic or pressure tool.',
        formatter: (profile) => profile.comparisonMetrics.specialHighlight,
      },
      {
        key: 'spawnFloor',
        label: 'Spawn Floor',
        tooltip: 'Earliest floor the Twisted can appear.',
        formatter: (profile) => profile.comparisonMetrics.spawnFloor,
        score: (profile) => profile.comparisonMetrics.spawnFloorValue,
        invertDanger: true,
      },
      {
        key: 'audioVolume',
        label: 'Audio Volume',
        tooltip: 'Relative loudness of movement cues.',
        formatter: (profile) => profile.comparisonMetrics.audioVolume,
        score: (profile) => profile.comparisonMetrics.audioIntensityScore,
        invertDanger: true,
      },
      {
        key: 'difficulty',
        label: 'Difficulty',
        tooltip: 'Recommended skill level required to handle encounters.',
        formatter: (profile) => profile.comparisonMetrics.difficultyLabel,
        score: (profile) => profile.threatAssessment.rating,
      },
    ],
    [],
  );

  const handleToggleComparisonSelection = useCallback(
    (twistedId: string) => {
      setSelectedComparisons((current) => {
        if (current.includes(twistedId)) {
          return current.filter((entry) => entry !== twistedId);
        }

        if (current.length >= MAX_COMPARISON_ENTRIES) {
          return current;
        }

        return [...current, twistedId];
      });
      setShareStatus('idle');
    },
    [],
  );

  const handleCompareToggle = useCallback(() => {
    setComparisonMode((prev) => !prev);
  }, []);

  const handlePresetSelection = useCallback((ids: string[]) => {
    const unique = Array.from(new Set(ids)).slice(0, MAX_COMPARISON_ENTRIES);
    setSelectedComparisons(unique);
    setComparisonMode(true);
    setShareStatus('idle');
  }, []);

  const handleClearComparison = useCallback(() => {
    setSelectedComparisons([]);
    setShareLink('');
    setShareStatus('idle');
  }, []);

  const handleShareComparison = useCallback(() => {
    if (typeof window === 'undefined' || selectedComparisons.length === 0) return;

    const baseUrl = `${window.location.origin}${window.location.pathname}`;
    const link = `${baseUrl}?compare=${selectedComparisons.join(',')}`;
    setShareLink(link);

    if (navigator?.clipboard?.writeText) {
      navigator.clipboard
        .writeText(link)
        .then(() => setShareStatus('copied'))
        .catch(() => setShareStatus('error'));
    } else {
      setShareStatus('ready');
    }
  }, [selectedComparisons]);

  const handleQuickSelect = (name: string) => {
    setSearchQuery(name);
  };

  const keyDifferences = useMemo(() => {
    if (selectedProfiles.length === 0) return [] as string[];

    const speedOrder = [...selectedProfiles]
      .sort((a, b) => b.comparisonMetrics.chaseSpeed - a.comparisonMetrics.chaseSpeed)
      .map((profile) => `${profile.name} (${profile.comparisonMetrics.chaseSpeed})`);

    const lethals = selectedProfiles
      .filter((profile) => profile.comparisonMetrics.damageType.toLowerCase().includes('instant'))
      .map((profile) => profile.name);

    const detectionOrder = [...selectedProfiles]
      .sort((a, b) => b.comparisonMetrics.detectionScore - a.comparisonMetrics.detectionScore)
      .map((profile) => `${profile.name}`);

    const hardestRating = Math.max(...selectedProfiles.map((profile) => profile.threatAssessment.rating));
    const hardest = selectedProfiles
      .filter((profile) => profile.threatAssessment.rating === hardestRating)
      .map((profile) => `${profile.name} (${profile.comparisonMetrics.difficultyLabel})`);

    const audioOrder = [...selectedProfiles]
      .sort((a, b) => a.comparisonMetrics.audioIntensityScore - b.comparisonMetrics.audioIntensityScore)
      .map((profile) => `${profile.name}`);

    return [
      `Speed: ${speedOrder.join(' > ')}`,
      lethals.length > 0
        ? `Lethality: ${lethals.join(', ')} can one-shot.`
        : 'Lethality: None of the selected Twisteds have instant-kill attacks.',
      `Detection: ${detectionOrder[0]} has the strongest detection reach.`,
      `Difficulty: ${hardest.join(', ')} demand the most skill.`,
      `Audio Stealth: ${audioOrder[0]} is the quietest threat—hardest to hear early.`,
    ];
  }, [selectedProfiles]);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-10 space-y-10">
        <header className="text-center space-y-4">
          <h1 className="text-4xl font-extrabold">⚔️ Twisted Counter Guide</h1>
          <p className="text-lg text-gray-300">
            Search threat intel, filter by danger level, and review rapid-response tactics for every Twisted entity.
          </p>
        </header>

        <section className="bg-blue-900/40 border border-blue-700 rounded-lg p-5 text-sm text-blue-100 space-y-2">
          <div className="flex items-start gap-3">
            <span className="text-lg">💡</span>
            <div>
              <p className="font-semibold text-blue-50">Audio Detection Tip</p>
              <p>
                Sound is one of your best tools for detecting Twisteds early. Play with headphones and adjust audio settings to hear footsteps clearly. Each Main Twisted has unique audio signatures—learning these can save your life!
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gray-800 border border-gray-700 rounded-lg p-6 space-y-3">
          <h2 className="text-xl font-semibold text-white flex items-center gap-2">
            <span>🎯</span> Threat Level Guide
          </h2>
          <ul className="text-sm text-gray-300 space-y-1">
            {THREAT_LEGEND.map((entry) => (
              <li key={entry.rating}>
                <span className="font-semibold text-gray-100 mr-2">{entry.rating}</span>
                {entry.label}
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-red-900/30 border border-red-700 rounded-lg p-6 space-y-3">
          <h2 className="text-xl font-semibold text-red-100 flex items-center gap-2">
            <span>⚠️</span> Dangerous Combinations
          </h2>
          <ul className="text-sm text-red-200 space-y-1 list-disc list-inside">
            {SYNERGY_WARNINGS.map((warning) => (
              <li key={warning}>{warning}</li>
            ))}
          </ul>
        </section>

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
                <div className="text-sm text-red-200 mt-2">{profile.audioProfile.cues[0]}</div>
                <div className="text-xs text-red-300 mt-3">Tap to load the full strategy card</div>
              </button>
            ))}
          </div>
        </section>

        <section className="bg-gray-800 rounded-lg p-6 space-y-4">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-gray-400">
              💡 Toggle comparison mode to evaluate up to three Twisteds side-by-side.
            </p>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={handleCompareToggle}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  comparisonMode
                    ? 'bg-purple-700 text-white hover:bg-purple-600'
                    : 'bg-gray-700 text-purple-200 hover:bg-purple-600/60'
                }`}
              >
                {comparisonMode ? 'Hide Comparison' : 'Compare Twisteds'}
              </button>
              {comparisonMode && (
                <button
                  type="button"
                  onClick={handleClearComparison}
                  className="px-4 py-2 rounded-lg text-sm font-semibold bg-gray-700 text-gray-200 hover:bg-gray-600 transition-colors disabled:opacity-40"
                  disabled={selectedComparisons.length === 0}
                >
                  Clear Comparison
                </button>
              )}
            </div>
          </div>

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

        {comparisonMode && (
          <section className="bg-gray-900/60 border border-purple-700/40 rounded-lg p-6 space-y-5">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-white">Twisted Comparison</h3>
                <p className="text-sm text-gray-300">
                  💡 Use comparison to understand relative threats and plan your strategy. Knowing which Twisteds
                  are faster or more dangerous helps with escape routing and trinket selection.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {Object.entries(COMPARISON_PRESETS).map(([label, ids]) => (
                  <button
                    key={label}
                    type="button"
                    onClick={() => handlePresetSelection(ids)}
                    className="px-3 py-2 rounded-lg text-xs font-semibold bg-purple-700 text-white hover:bg-purple-600 transition-colors"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-200">
              <span className="font-semibold">Selected:</span>
              {selectedComparisons.length === 0 && <span className="text-gray-400">Pick up to three Twisteds.</span>}
              {selectedProfiles.map((profile) => (
                <span
                  key={profile.twistedId}
                  className="px-3 py-1 rounded-full bg-purple-700/40 border border-purple-500 text-purple-100 text-xs font-semibold"
                >
                  {profile.name}
                </span>
              ))}
              {selectedComparisons.length >= MAX_COMPARISON_ENTRIES && (
                <span className="text-xs text-amber-300">Maximum of {MAX_COMPARISON_ENTRIES} Twisteds selected.</span>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={handleShareComparison}
                className="px-4 py-2 rounded-lg text-sm font-semibold bg-purple-600 text-white hover:bg-purple-500 transition-colors disabled:opacity-40"
                disabled={selectedComparisons.length === 0}
                title="Generate a sharable link with the selected Twisteds"
              >
                📤 Share Comparison
              </button>
              <span className="text-xs text-gray-300">
                {shareStatus === 'copied'
                  ? 'Link copied to clipboard!'
                  : shareStatus === 'error'
                  ? 'Unable to copy automatically. Use the link below.'
                  : shareStatus === 'ready'
                  ? 'Copy the link below manually.'
                  : ''}
              </span>
            </div>

            {shareLink && (
              <div className="bg-gray-800/80 border border-gray-700 rounded-lg p-3 text-xs text-gray-200 break-all">
                {shareLink}
              </div>
            )}

            {comparisonLoading ? (
              <div className="flex items-center gap-3 text-purple-200 text-sm">
                <span className="h-4 w-4 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
                Generating comparison…
              </div>
            ) : selectedProfiles.length < 2 ? (
              <p className="text-sm text-gray-300">
                Select at least two Twisteds to unlock the full comparison table.
              </p>
            ) : (
              <div className="space-y-5">
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse text-sm">
                    <thead>
                      <tr>
                        <th className="sticky left-0 bg-gray-900/80 px-3 py-2 text-left font-semibold text-gray-200" />
                        {selectedProfiles.map((profile) => (
                          <th key={profile.twistedId} className="px-3 py-2 text-left font-semibold text-purple-200">
                            {profile.name}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonRows.map((row) => {
                        const values = selectedProfiles.map((profile) => row.formatter(profile));
                        const difference = new Set(values).size > 1;
                        const scores = row.score ? selectedProfiles.map((profile) => row.score!(profile)) : [];
                        const maxScore = scores.length > 0 ? Math.max(...scores) : undefined;
                        const minScore = scores.length > 0 ? Math.min(...scores) : undefined;

                        return (
                          <tr key={row.key} className="border-t border-gray-800">
                            <th
                              className="sticky left-0 bg-gray-900/80 px-3 py-2 text-left font-semibold text-gray-200"
                              title={row.tooltip}
                            >
                              {row.label}
                            </th>
                            {selectedProfiles.map((profile, columnIndex) => {
                              const value = values[columnIndex];
                              let cellClass = 'px-3 py-2 text-sm border border-gray-800 bg-gray-900/60';

                              if (row.key === 'damageType' && value.toLowerCase().includes('instant')) {
                                cellClass += ' bg-red-700/40 text-red-100 font-semibold';
                              } else if (scores.length > 0 && maxScore !== undefined && minScore !== undefined) {
                                const score = scores[columnIndex];
                                const isHigh = score === maxScore;
                                const isLow = score === minScore;
                                const highlightDanger = row.invertDanger ? isLow : isHigh;
                                const safer = row.invertDanger ? isHigh : isLow;

                                if (scores.length > 1 && highlightDanger) {
                                  cellClass += ' bg-red-600/30 text-red-100 font-semibold';
                                } else if (scores.length > 1 && safer) {
                                  cellClass += ' bg-green-600/20 text-green-100';
                                } else {
                                  cellClass += ' bg-yellow-500/10 text-yellow-100';
                                }
                              }

                              if (difference) {
                                cellClass += ' ring-1 ring-amber-400/20';
                              }

                              return (
                                <td key={profile.twistedId + row.key} className={cellClass}>
                                  {value}
                                </td>
                              );
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-purple-200 mb-2">Key Differences</h4>
                  <ul className="text-sm text-gray-200 space-y-1">
                    {keyDifferences.map((entry) => (
                      <li key={entry}>• {entry}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </section>
        )}

        <section className="space-y-6">
          {filteredTwisteds.length === 0 ? (
            <div className="bg-gray-800 rounded-lg p-8 text-center text-gray-400">
              No Twisted entries match the current filters.
            </div>
          ) : (
            filteredTwisteds.map((profile) => (
              <TwistedCard
                key={profile.twistedId}
                profile={profile}
                onQuickView={handleQuickSelect}
                comparisonMode={comparisonMode}
                selected={selectedComparisons.includes(profile.twistedId)}
                disabled={!selectedComparisons.includes(profile.twistedId) && selectedComparisons.length >= MAX_COMPARISON_ENTRIES}
                onToggleComparison={handleToggleComparisonSelection}
              />
            ))
          )}
        </section>
      </div>
    </div>
  );
};

export default TwistedGuide;
