'use client'

import React, { useMemo, useRef, useState } from 'react';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { twistedStrategies } from '@/data/twisted-strategies';

export const metadata: Metadata = {
  title: 'Guides',
  description: "Complete guides and tutorials for Dandy's World mechanics, strategies, and tips",
};


type ExperienceLevel = 'beginner' | 'intermediate' | 'expert';
type PainPointId = 'dying' | 'teammates' | 'stuck' | 'character' | 'trinket' | 'mechanics';

interface LearningStep {
  title: string;
  status: 'completed' | 'current' | 'locked';
  recommendation?: string;
  time?: string;
}

interface LearningPathConfig {
  title: string;
  steps: LearningStep[];
}

interface CharacterSuggestion {
  name: string;
  role: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  strengths: string[];
  guide: string;
}

const PAIN_POINTS: {
  id: PainPointId;
  icon: string;
  label: string;
  highlight: string;
}[] = [
  { id: 'dying', icon: '🛡️', label: 'Keep dying to Twisteds', highlight: 'Master Survival' },
  { id: 'teammates', icon: '🤝', label: 'Team coordination keeps failing', highlight: 'Pro Team Play' },
  { id: 'stuck', icon: '🎯', label: 'Stuck on Floor 15', highlight: 'Floor Strategies' },
  { id: 'character', icon: '🎭', label: 'Not sure which character fits me', highlight: 'Character Picker' },
  { id: 'trinket', icon: '💎', label: 'Confused about trinket builds', highlight: 'Trinket Builder' },
  { id: 'mechanics', icon: '📚', label: 'Core mechanics are overwhelming', highlight: 'Getting Started' },
];

const LEARNING_PATHS: Record<ExperienceLevel, LearningPathConfig> = {
  beginner: {
    title: 'Beginner Path · 0-10 hours',
    steps: [
      { title: 'Choose your first main character', status: 'completed', recommendation: 'Recommended: Poppy or Boxten' },
      { title: 'Learn stealth fundamentals and sound control', status: 'current', time: '15 minutes' },
      { title: 'Master skill checks and recovery windows', status: 'locked', time: '20 minutes' },
    ],
  },
  intermediate: {
    title: 'Survival Path · 10-50 hours',
    steps: [
      { title: 'Advanced kiting: use cover and floor layout', status: 'completed', recommendation: 'Practice with Pebble or Goob' },
      { title: 'Optimize trinket rotations and resource flow', status: 'current', time: '25 minutes' },
      { title: 'Specialize roles for the team', status: 'locked', time: '30 minutes' },
    ],
  },
  expert: {
    title: 'Pro Team Path · 50+ hours',
    steps: [
      { title: 'Memorize every Twisted counter pattern', status: 'current', recommendation: 'Log notable events after each run' },
      { title: 'Run analysis and route optimization', status: 'locked', time: '45 minutes' },
      { title: 'Lead squads and teach advanced tactics', status: 'locked', time: '60 minutes' },
    ],
  },
};

const CHARACTER_SUGGESTIONS: CharacterSuggestion[] = [
  {
    name: 'Poppy',
    role: 'Support / Sustain',
    difficulty: 'Easy',
    strengths: [
      'Regeneration aura keeps the squad healthy',
      'High forgiveness for new players',
      'Skill check assistance reduces failures',
    ],
    guide: '/guides/beginner-tips',
  },
  {
    name: 'Boxten',
    role: 'Extractor',
    difficulty: 'Easy',
    strengths: [
      'Solo distractions ease pressure on the team',
      'Steady machine progress without big risks',
      'Comfortable pace for cautious runners',
    ],
    guide: '/guides/game-mechanics',
  },
  {
    name: 'Pebble',
    role: 'Distractor',
    difficulty: 'Medium',
    strengths: [
      'Top-speed chase management',
      'Bark ability reveals threats for teammates',
      'Core pick for mid-game tempo control',
    ],
    guide: '/guides/stamina-management',
  },
  {
    name: 'Goob',
    role: 'Rescue / Crowd Control',
    difficulty: 'Hard',
    strengths: [
      'Grapple saves teammates from danger',
      'Enables aggressive clutch plays',
      'Demands precise timing and positioning',
    ],
    guide: '/guides/team-strategies',
  },
];

const TWISTED_SUMMARIES = twistedStrategies.map((entry) => ({
  id: entry.twistedId,
  name: entry.name,
  threat: entry.threatAssessment?.label ?? entry.threat_level ?? 'Unknown threat',
  specialty:
    entry.mechanics?.special ?? entry.threatAssessment?.reason ?? 'Behavior unknown. Stay mobile and break line of sight quickly.',
  avoidance: entry.strategies?.avoidance ?? [],
  counter: entry.strategies?.if_spotted ?? [],
  team: entry.strategies?.team_coordination ?? [],
}));

const QUICK_TOOLS = [
  { icon: '🎯', title: 'Character Picker', description: 'Find the main that matches your role preference', link: '/character-recommender', related: 'Getting Started' },
  { icon: '💎', title: 'Trinket Builder', description: 'Assemble the strongest trinket synergy', link: '/trinket-optimizer', related: 'Pro Team Play' },
  { icon: '🗺️', title: 'Floor Planner', description: 'Lay out an efficient path before you spawn', link: '/floor-predictor', related: 'Master Survival' },
  { icon: '📊', title: 'Run Analyzer', description: 'Review a run and get improvement cues', link: '/progress-tracker', related: 'All Modules' },
];

const GuidesHubPage: React.FC = () => {
  const [selectedPainPoint, setSelectedPainPoint] = useState<PainPointId | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<ExperienceLevel | null>(null);
  const [showCharacterPicker, setShowCharacterPicker] = useState(false);
  const [twistedQuery, setTwistedQuery] = useState('');
  const [activeTwistedId, setActiveTwistedId] = useState<string | null>(TWISTED_SUMMARIES[0]?.id ?? null);
  const solutionRef = useRef<HTMLDivElement | null>(null);

  const filteredTwisteds = useMemo(() => {
    if (!twistedQuery.trim()) {
      return TWISTED_SUMMARIES;
    }
    const normalized = twistedQuery.toLowerCase();
    return TWISTED_SUMMARIES.filter((entry) =>
      entry.name.toLowerCase().includes(normalized) || entry.id.toLowerCase().includes(normalized),
    );
  }, [twistedQuery]);

  const activeTwisted = useMemo(() => {
    if (activeTwistedId) {
      const match = TWISTED_SUMMARIES.find((entry) => entry.id === activeTwistedId);
      if (match) {
        return match;
      }
    }
    return filteredTwisteds[0] ?? null;
  }, [activeTwistedId, filteredTwisteds]);

  const handlePainPointSelect = (id: PainPointId) => {
    setSelectedPainPoint(id);
    setShowCharacterPicker(id === 'character');
    window.requestAnimationFrame(() => {
      if (solutionRef.current) {
        solutionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  };

  return (
    <>

      <Navigation />

      <main className="min-h-screen bg-gray-950 pt-16 text-white">
        <header className="border-b border-purple-900/40 bg-gradient-to-br from-gray-950 via-purple-950 to-gray-900 py-16">
          <div className="mx-auto max-w-6xl space-y-4 px-6 text-center">
            <p className="inline-flex items-center gap-2 rounded-full border border-purple-500/40 bg-purple-500/10 px-4 py-1 text-sm text-purple-200">
              <span role="img" aria-label="coach">
                🧠
              </span>
              Your AI-powered run coach
            </p>
            <h1 className="text-4xl font-extrabold md:text-5xl">Dandy's World Guide Hub</h1>
            <p className="text-gray-300 md:text-lg">Pick your pain point → get instant tactics → follow the learning path and keep your squad alive.</p>
          </div>
        </header>

        <section className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="mb-6 text-center text-2xl font-semibold text-purple-200">What's blocking your run?</h2>
          <p className="mb-8 text-center text-sm text-gray-400">Select the problem you face right now. We respond instantly. Nothing is stored once you refresh.</p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {PAIN_POINTS.map((point) => {
              const isActive = point.id === selectedPainPoint;
              return (
                <button
                  key={point.id}
                  type="button"
                  onClick={() => handlePainPointSelect(point.id)}
                  className={`rounded-2xl border-2 p-6 text-left transition-all duration-300 ${
                    isActive
                      ? 'border-purple-400 bg-purple-600/40 shadow-xl shadow-purple-500/30 scale-[1.02]'
                      : 'border-gray-800 bg-gray-900 hover:border-purple-500/60 hover:bg-purple-900/20'
                  }`}
                >
                  <div className="mb-3 text-3xl">{point.icon}</div>
                  <div className="mb-2 text-lg font-semibold">{point.label}</div>
                  <p className="text-sm text-purple-200">Suggested focus: {point.highlight}</p>
                </button>
              );
            })}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-12">
          <div className="rounded-3xl border border-purple-500/40 bg-gradient-to-br from-purple-950 via-gray-950 to-black p-8 md:p-10">
            <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-semibold">Choose your learning stage</h2>
                <p className="text-sm text-gray-400">No profile required. Pick a path and unlock tailored lessons.</p>
              </div>
              {selectedLevel && (
                <button
                  type="button"
                  onClick={() => setSelectedLevel(null)}
                  className="rounded-full border border-purple-400/60 px-4 py-2 text-xs tracking-wide text-purple-200 hover:bg-purple-500/10"
                >
                  Switch path
                </button>
              )}
            </div>

            {!selectedLevel && (
              <div className="grid gap-4 md:grid-cols-3">
                <button
                  type="button"
                  onClick={() => setSelectedLevel('beginner')}
                  className="rounded-2xl bg-gradient-to-br from-emerald-600/80 to-green-700/80 px-6 py-7 text-left shadow-lg shadow-emerald-500/30 transition-transform hover:-translate-y-1"
                >
                  <div className="mb-3 text-3xl">🌱</div>
                  <div className="mb-1 text-lg font-semibold">Getting Started</div>
                  <p className="text-sm text-emerald-100">0-10 hours played · build foundations</p>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedLevel('intermediate')}
                  className="rounded-2xl bg-gradient-to-br from-blue-600/80 to-cyan-600/70 px-6 py-7 text-left shadow-lg shadow-cyan-500/30 transition-transform hover:-translate-y-1"
                >
                  <div className="mb-3 text-3xl">⚔️</div>
                  <div className="mb-1 text-lg font-semibold">Master Survival</div>
                  <p className="text-sm text-blue-100">10-50 hours · sharpen execution</p>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedLevel('expert')}
                  className="rounded-2xl bg-gradient-to-br from-fuchsia-600/80 to-purple-600/80 px-6 py-7 text-left shadow-lg shadow-fuchsia-500/30 transition-transform hover:-translate-y-1"
                >
                  <div className="mb-3 text-3xl">👑</div>
                  <div className="mb-1 text-lg font-semibold">Pro Team Play</div>
                  <p className="text-sm text-fuchsia-100">50+ hours · chase perfection</p>
                </button>
              </div>
            )}

            {selectedLevel && (
              <div className="space-y-4">
                {LEARNING_PATHS[selectedLevel].steps.map((step, index) => (
                  <div
                    key={step.title}
                    className={`rounded-2xl border p-5 transition-colors ${
                      step.status === 'completed'
                        ? 'border-emerald-500/40 bg-emerald-900/30'
                        : step.status === 'current'
                        ? 'border-amber-400/60 bg-amber-900/30 ring-2 ring-amber-400/40'
                        : 'border-gray-800 bg-gray-900'
                    }`}
                  >
                    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-wider text-gray-400">Step {index + 1}</p>
                        <h3 className="text-lg font-semibold">{step.title}</h3>
                        {step.recommendation && <p className="text-sm text-purple-200">💡 {step.recommendation}</p>}
                      </div>
                      <div className="text-sm text-gray-300">
                        {step.status === 'completed' && '✅ Completed'}
                        {step.status === 'current' && '🎯 In progress'}
                        {step.status === 'locked' && '🔒 Locked'}
                        {step.time && <p className="text-xs text-gray-400">Estimated {step.time}</p>}
                      </div>
                    </div>
                    {step.status === 'current' && (
                      <div className="mt-4 flex flex-wrap gap-3">
                        <a
                          className="rounded-lg bg-amber-400 px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-amber-300"
                          href="#solution-section"
                        >
                          Start learning →
                        </a>
                        <span className="rounded-lg border border-amber-400/60 px-3 py-1 text-xs text-amber-200">
                          Progress {Math.round(((index + 0.5) / LEARNING_PATHS[selectedLevel].steps.length) * 100)}%
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        <section ref={solutionRef} id="solution-section" className="mx-auto max-w-6xl space-y-12 px-6 pb-16">
          <div className="rounded-3xl border border-purple-600/40 bg-gray-950/80 p-8">
            <h2 className="text-2xl font-semibold mb-2">Personalized solutions</h2>
            <p className="mb-6 text-sm text-gray-400">Tactic cards adapt to the pain point you selected. Everything resets when you leave the page.</p>

            {!selectedPainPoint && <p className="text-gray-500">Choose a pain point above and we will queue up targeted guidance.</p>}

            {selectedPainPoint === 'character' && (
              <div className="space-y-5">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <h3 className="text-xl font-semibold">Character Picker recommendations</h3>
                  <button
                    type="button"
                    onClick={() => setShowCharacterPicker((prev) => !prev)}
                    className="rounded-full border border-purple-400/60 px-4 py-1 text-sm text-purple-200 hover:bg-purple-600/20"
                  >
                    {showCharacterPicker ? 'Hide suggestions' : 'Show suggestions'}
                  </button>
                </div>

                {showCharacterPicker && (
                  <div className="grid gap-4 md:grid-cols-2">
                    {CHARACTER_SUGGESTIONS.map((character) => (
                      <a
                        key={character.name}
                        href={character.guide}
                        className="flex h-full flex-col rounded-2xl border border-purple-500/30 bg-gray-900/80 p-5 transition-transform hover:-translate-y-1 hover:border-purple-400"
                      >
                        <div className="mb-3 flex items-start justify-between">
                          <div>
                            <h4 className="text-lg font-semibold">{character.name}</h4>
                            <p className="text-sm text-purple-200">{character.role}</p>
                          </div>
                          <span
                            className={`rounded-full px-3 py-1 text-xs font-semibold ${
                              character.difficulty === 'Easy'
                                ? 'bg-emerald-600/70'
                                : character.difficulty === 'Medium'
                                ? 'bg-amber-600/70'
                                : 'bg-rose-600/70'
                            }`}
                          >
                            {character.difficulty}
                          </span>
                        </div>
                        <ul className="space-y-2 text-sm text-gray-300">
                          {character.strengths.map((strength) => (
                            <li key={strength} className="flex items-start gap-2">
                              <span role="img" aria-label="check">
                                ✅
                              </span>
                              <span>{strength}</span>
                            </li>
                          ))}
                        </ul>
                        <span className="mt-4 inline-flex items-center gap-1 text-sm text-purple-200">
                          View detailed guide →
                        </span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            )}

            {selectedPainPoint === 'dying' && (
              <div className="space-y-6">
                <div>
                  <h3 className="mb-3 text-xl font-semibold">Three survival pillars</h3>
                  <ul className="space-y-3 text-sm text-gray-200">
                    <li>
                      <strong className="text-purple-300">1. Vision control:</strong> break line of sight the moment a Twisted locks on.
                    </li>
                    <li>
                      <strong className="text-purple-300">2. Stamina rhythm:</strong> alternate sprinting and walking; use the stamina calculator to check if you can reach the next safe spot.
                    </li>
                    <li>
                      <strong className="text-purple-300">3. Pattern recognition:</strong> study common patrol routes so you always know the next kiting loop.
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-purple-500/30 bg-gray-900/60 p-6">
                  <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                    <h4 className="text-lg font-semibold">Twisted Counter mini tool</h4>
                    <input
                      value={twistedQuery}
                      onChange={(event) => {
                        const value = event.target.value;
                        setTwistedQuery(value);
                        const topMatch = TWISTED_SUMMARIES.find((entry) =>
                          entry.name.toLowerCase().includes(value.toLowerCase()),
                        );
                        if (topMatch) {
                          setActiveTwistedId(topMatch.id);
                        }
                      }}
                      placeholder="Search a Twisted name..."
                      className="w-full rounded-lg border border-purple-400/40 bg-gray-950 px-3 py-2 text-sm outline-none focus:border-purple-300 md:w-72"
                    />
                  </div>
                  <div className="grid gap-4 md:grid-cols-[200px,1fr]">
                    <div className="space-y-2">
                      {filteredTwisteds.slice(0, 8).map((entry) => (
                        <button
                          key={entry.id}
                          type="button"
                          onClick={() => setActiveTwistedId(entry.id)}
                          className={`w-full rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                            entry.id === activeTwisted?.id
                              ? 'bg-purple-600/40 text-purple-100'
                              : 'bg-gray-900/60 text-gray-300 hover:bg-purple-700/20'
                          }`}
                        >
                          {entry.name}
                        </button>
                      ))}
                      {filteredTwisteds.length === 0 && (
                        <p className="text-xs text-gray-500">No matches found. Try another keyword.</p>
                      )}
                    </div>

                    {activeTwisted && (
                      <div className="space-y-4 rounded-2xl border border-purple-500/20 bg-gray-950/90 p-5 text-sm text-gray-200">
                        <header>
                          <p className="text-xs uppercase tracking-wider text-purple-300">Threat profile</p>
                          <h5 className="text-xl font-semibold">{activeTwisted.name}</h5>
                          <p className="text-xs text-gray-400">{activeTwisted.threat}</p>
                        </header>
                        <div>
                          <p className="mb-1 text-xs uppercase tracking-wider text-gray-400">Quick read</p>
                          <p>{activeTwisted.specialty}</p>
                        </div>
                        {activeTwisted.avoidance.length > 0 && (
                          <div>
                            <p className="mb-1 text-xs uppercase tracking-wider text-gray-400">Avoidance tips</p>
                            <ul className="space-y-1">
                              {activeTwisted.avoidance.slice(0, 3).map((tip) => (
                                <li key={tip}>• {tip}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {activeTwisted.counter.length > 0 && (
                          <div>
                            <p className="mb-1 text-xs uppercase tracking-wider text-gray-400">If you get spotted</p>
                            <ul className="space-y-1">
                              {activeTwisted.counter.slice(0, 3).map((tip) => (
                                <li key={tip}>• {tip}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {activeTwisted.team.length > 0 && (
                          <div>
                            <p className="mb-1 text-xs uppercase tracking-wider text-gray-400">Team coordination</p>
                            <ul className="space-y-1">
                              {activeTwisted.team.slice(0, 2).map((tip) => (
                                <li key={tip}>• {tip}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        <a
                          href="/guides/twisted-mechanics"
                          className="inline-flex items-center gap-2 rounded-lg bg-purple-500/20 px-3 py-2 text-xs text-purple-200 hover:bg-purple-500/30"
                        >
                          View the full Twisted playbook →
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {selectedPainPoint === 'stuck' && (
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-blue-500/40 bg-blue-900/20 p-6">
                  <h3 className="mb-3 text-lg font-semibold">Fastest path to floor clears</h3>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-gray-200">
                    <li>Scout the layout in the Floor Planner and mark must-finish machines.</li>
                    <li>Prioritize objectives closest to spawn to reduce backtracking risk.</li>
                    <li>Split roles: extractor pushes machines, support scouts ahead, distractor drags aggro away.</li>
                    <li>For floor 15+, bring double speed trinkets such as Speedy Shoes and Dog Plush.</li>
                  </ol>
                </div>
                <div className="rounded-2xl border border-purple-400/40 bg-purple-900/20 p-6">
                  <h3 className="mb-3 text-lg font-semibold">Pre-run checklist</h3>
                  <ul className="space-y-2 text-sm text-gray-200">
                    <li>☑ At least one teammate knows the current floor layout.</li>
                    <li>☑ Everyone carries an emergency trinket (speed, escape, or sustain).</li>
                    <li>☑ Escape routes and blackout triggers are confirmed.</li>
                    <li>☑ Voice comm cues are agreed for kite, machine, and rescue calls.</li>
                  </ul>
                </div>
              </div>
            )}

            {selectedPainPoint === 'teammates' && (
              <div className="rounded-2xl border border-teal-500/40 bg-teal-900/20 p-6 space-y-4 text-sm text-gray-200">
                <h3 className="text-lg font-semibold">Team coordination checklist</h3>
                <p>Assign lightweight cards so everyone knows their job before the run starts.</p>
                <ul className="space-y-2">
                  <li>• Distractor: pull Twisted attention, keep callouts flowing, and create safe windows.</li>
                  <li>• Extractor: lock in high-efficiency mains (Vee or Cosmo) and commit to machine rotation.</li>
                  <li>• Support: manage rescues, items, and heals so the squad never loses momentum.</li>
                </ul>
                <p className="text-xs text-gray-400">Deep dive → <a className="text-teal-200 underline" href="/guides/team-strategies">Team Strategies guide</a></p>
              </div>
            )}

            {selectedPainPoint === 'trinket' && (
              <div className="rounded-2xl border border-pink-500/40 bg-pink-900/20 p-6 space-y-4 text-sm text-gray-200">
                <h3 className="text-lg font-semibold">Trinket build logic</h3>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Identify the gap: does the squad need more speed, sustain, or safety?</li>
                  <li>Stack complementary buffs (for example, Speedy Shoes plus Dog Plush).</li>
                  <li>Reserve at least one emergency button such as Eject Button or Smoke Bomb.</li>
                </ol>
                <a
                  href="/trinket-optimizer"
                  className="inline-flex items-center gap-2 rounded-lg bg-pink-500/20 px-3 py-2 text-xs text-pink-100 hover:bg-pink-500/30"
                >
                  Launch the Trinket Builder →
                </a>
              </div>
            )}

            {selectedPainPoint === 'mechanics' && (
              <div className="rounded-2xl border border-indigo-400/40 bg-indigo-900/20 p-6 space-y-4 text-sm text-gray-200">
                <h3 className="text-lg font-semibold">Core mechanics starter pack</h3>
                <p>Tackle these three guides (about 30 minutes total) and you will understand every lobby callout.</p>
                <ul className="space-y-2">
                  <li>1. <a className="text-indigo-200 underline" href="/guides/game-mechanics">Game Mechanics</a> – currencies, objectives, and victory conditions.</li>
                  <li>2. <a className="text-indigo-200 underline" href="/guides/stealth-system">Stealth System</a> – sound, sightlines, and hiding spots.</li>
                  <li>3. <a className="text-indigo-200 underline" href="/guides/skill-check-guide">Skill Check Guide</a> – timing windows and fail-safe recovery.</li>
                </ul>
              </div>
            )}
          </div>
        </section>

        <section className="border-t border-purple-900/30 bg-gradient-to-r from-gray-950 via-purple-950 to-gray-950">
          <div className="mx-auto max-w-6xl space-y-6 px-6 py-12">
            <div className="flex items-center gap-3">
              <span className="text-2xl" role="img" aria-label="lightning">
                ⚡
              </span>
              <h2 className="text-2xl font-semibold">Quick Tools dock</h2>
            </div>
            <p className="text-sm text-gray-400">Tap a tool to jump straight into action. No login, no data saved.</p>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {QUICK_TOOLS.map((tool) => (
                <a
                  key={tool.title}
                  href={tool.link}
                  className="flex h-full flex-col justify-between rounded-2xl border border-purple-500/30 bg-gray-900/80 p-5 transition-transform hover:-translate-y-1 hover:border-purple-400"
                >
                  <div>
                    <div className="mb-3 text-3xl">{tool.icon}</div>
                    <h3 className="mb-1 text-lg font-semibold">{tool.title}</h3>
                    <p className="text-sm text-gray-300">{tool.description}</p>
                  </div>
                  <div className="mt-4 text-xs text-purple-200">⟷ {tool.related}</div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default GuidesHubPage;
