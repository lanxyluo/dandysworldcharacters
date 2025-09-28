import React, { useEffect, useMemo, useState } from 'react';
import ScrollToTopLink from '../ScrollToTopLink';
import { ProgressTracker } from '../../utils/progress-tracker';
import { ProgressStorage } from '../../utils/progress-storage';
import type { UserProgressProfile } from '../../types/progress-tracking';

type TrackerTab = 'overview' | 'research' | 'unlocks' | 'mastery';

const tracker = new ProgressTracker();
const storage = new ProgressStorage();

const DEFAULT_PROFILE: UserProgressProfile = {
  playerId: 'local-profile',
  totalPlaytime: 48,
  currentIchor: 7500,
  unlockedCharacters: ['boxten', 'poppy', 'tisha', 'brightney', 'rodger'],
  unlockedTrinkets: ['pink-bow', 'speedy-shoes', 'blue-bandana'],
  preferredGoals: ['unlock-vee', 'unlock-pebble'],
  lastActive: new Date(),
  researchProgress: [
    {
      twistedId: 'twisted-vee',
      currentProgress: 65,
      targetProgress: 100,
      encountersNeeded: 7,
      timeEstimate: '3-5 runs',
      priority: 'high',
      unlocksBenefit: 'Unlocks Vee storyline',
      lastUpdated: new Date(),
    },
    {
      twistedId: 'twisted-pebble',
      currentProgress: 30,
      targetProgress: 100,
      encountersNeeded: 14,
      timeEstimate: '5+ runs',
      priority: 'medium',
      unlocksBenefit: 'Unlocks Pebble chase specialist',
      lastUpdated: new Date(),
    },
    {
      twistedId: 'twisted-dandy',
      currentProgress: 5,
      targetProgress: 100,
      encountersNeeded: 19,
      timeEstimate: 'Complete Dandy run',
      priority: 'low',
      unlocksBenefit: 'Enables Astro unlock path',
      lastUpdated: new Date(),
    },
  ],
  masteryProgress: [
    {
      characterId: 'brightney',
      currentLevel: 85,
      maxLevel: 100,
      currentExp: 850,
      expToNext: 150,
      completedTasks: [],
      availableTasks: [],
      rewards: [],
    },
    {
      characterId: 'toodles',
      currentLevel: 45,
      maxLevel: 100,
      currentExp: 450,
      expToNext: 550,
      completedTasks: [],
      availableTasks: [],
      rewards: [],
    },
  ],
};

const ProgressTrackerDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TrackerTab>('overview');
  const [profile, setProfile] = useState<UserProgressProfile>(DEFAULT_PROFILE);
  const [selectedGoals, setSelectedGoals] = useState<string[]>(['vee', 'pebble']);

  useEffect(() => {
    const stored = storage.loadProgress();
    if (stored) {
      setProfile(stored);
      const nextGoals = stored.preferredGoals
        .map((goal) => goal.replace('unlock-', ''))
        .filter((id) => id);
      if (nextGoals.length > 0) {
        setSelectedGoals(nextGoals);
      }
    }
  }, []);

  useEffect(() => {
    storage.saveProgress(profile);
  }, [profile]);

  const unlockPaths = useMemo(() => tracker.optimizeUnlockOrder(selectedGoals, profile), [selectedGoals, profile]);

  const researchCalculations = useMemo(
    () =>
      profile.researchProgress.map((entry) => ({
        ...entry,
        calculations: tracker.calculateResearchNeeded(
          entry.twistedId,
          entry.currentProgress,
          profile.unlockedCharacters.includes('rodger'),
        ),
      })),
    [profile],
  );

  const completedResearch = profile.researchProgress.filter((entry) => entry.currentProgress >= 100).length;

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 space-y-10">
        <header className="text-center space-y-4">
          <h1 className="text-4xl font-extrabold">Progress Tracker Control Center</h1>
          <p className="text-lg text-gray-300">
            Visualise research goals, map unlock dependencies, and keep mastery milestones on track — all in one tab.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-4">
          <div className="bg-gray-800/70 border border-gray-700 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Characters unlocked</h3>
            <p className="text-3xl font-bold text-purple-400">{profile.unlockedCharacters.length}/30</p>
            <p className="text-sm text-gray-400">Roster size so far</p>
          </div>
          <div className="bg-gray-800/70 border border-gray-700 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Available Ichor</h3>
            <p className="text-3xl font-bold text-yellow-400">{profile.currentIchor.toLocaleString()}</p>
            <p className="text-sm text-gray-400">Budget for unlocks</p>
          </div>
          <div className="bg-gray-800/70 border border-gray-700 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Research completed</h3>
            <p className="text-3xl font-bold text-green-400">
              {completedResearch}/{profile.researchProgress.length}
            </p>
            <p className="text-sm text-gray-400">Twisted dossiers finished</p>
          </div>
          <div className="bg-gray-800/70 border border-gray-700 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Playtime logged</h3>
            <p className="text-3xl font-bold text-blue-400">{profile.totalPlaytime}h</p>
            <p className="text-sm text-gray-400">Across all runs</p>
          </div>
        </section>

        <nav className="bg-gray-800/60 border border-gray-700 rounded-xl overflow-hidden">
          <div className="flex divide-x divide-gray-700">
            {(
              [
                { id: 'overview', label: 'Overview', icon: '📊' },
                { id: 'research', label: 'Research Planner', icon: '🔬' },
                { id: 'unlocks', label: 'Unlock Paths', icon: '🗝️' },
                { id: 'mastery', label: 'Mastery Progress', icon: '⭐' },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 px-6 py-4 text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-purple-600/30 text-purple-200'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </nav>

        {activeTab === 'overview' && (
          <section className="space-y-8">
            <div className="bg-gray-800/70 border border-gray-700 rounded-xl p-6">
              <h2 className="text-2xl font-semibold mb-6">Priority goals</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {unlockPaths.slice(0, 2).map((path) => {
                  const progress = (path.currentStep / path.totalSteps) * 100;
                  return (
                    <article key={path.characterId} className="bg-gray-900/50 border border-gray-700 rounded-lg p-5">
                      <header className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold capitalize">{path.characterId}</h3>
                          <p className="text-sm text-gray-400">Estimated time: {path.estimatedTime}</p>
                        </div>
                        <span
                          className={`px-2 py-1 rounded text-xs font-semibold ${
                            path.priority === 'immediate'
                              ? 'bg-green-600'
                              : path.priority === 'short_term'
                              ? 'bg-yellow-600'
                              : 'bg-red-600'
                          }`}
                        >
                          {path.priority.replace('_', ' ')}
                        </span>
                      </header>
                      <div className="mb-4">
                        <div className="flex justify-between text-xs text-gray-400 mb-2">
                          <span>{path.currentStep} steps completed</span>
                          <span>{path.totalSteps - path.currentStep} remaining</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div className="bg-purple-500 h-2 rounded-full" style={{ width: `${progress}%` }} />
                        </div>
                      </div>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>Needed Ichor: {path.ichorCost.toLocaleString()}</li>
                        <li>Outstanding tasks: {path.blockedBy.length}</li>
                        {path.blockedBy.slice(0, 2).map((task) => (
                          <li key={task}>• {task}</li>
                        ))}
                      </ul>
                    </article>
                  );
                })}
              </div>
            </div>

            <div className="bg-gray-800/70 border border-gray-700 rounded-xl p-6">
              <h2 className="text-2xl font-semibold mb-6">Research close to completion</h2>
              <div className="grid gap-4 md:grid-cols-3">
                {researchCalculations
                  .filter((entry) => entry.currentProgress > 40 && entry.currentProgress < 100)
                  .map((entry) => (
                    <article key={entry.twistedId} className="bg-gray-900/50 border border-gray-700 rounded-lg p-4">
                      <h3 className="font-semibold capitalize mb-2">
                        {entry.twistedId.replace('twisted-', '')}
                      </h3>
                      <div className="text-sm space-y-2">
                        <div className="flex justify-between">
                          <span>Progress</span>
                          <span>{entry.currentProgress}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-1">
                          <div
                            className="bg-blue-500 h-1 rounded-full"
                            style={{ width: `${entry.currentProgress}%` }}
                          />
                        </div>
                        <p className="text-gray-400">
                          Encounters needed: {entry.calculations.encountersNeeded} ({entry.calculations.timeEstimate})
                        </p>
                        <p className="text-gray-400 text-xs">{entry.unlocksBenefit}</p>
                      </div>
                    </article>
                  ))}
              </div>
            </div>
          </section>
        )}

        {activeTab === 'research' && (
          <section className="space-y-8">
            <div className="bg-gray-800/70 border border-gray-700 rounded-xl p-6">
              <h2 className="text-2xl font-semibold mb-2">Research calculator</h2>
              <p className="text-sm text-gray-300 mb-6">
                Estimate how many encounters or capsules you need to finish each dossier. Numbers update automatically
                when you log progress.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left p-3">Twisted</th>
                      <th className="text-center p-3">Progress</th>
                      <th className="text-center p-3">Encounters needed</th>
                      <th className="text-center p-3">ETA</th>
                      <th className="text-center p-3">Unlock benefit</th>
                      <th className="text-center p-3">Priority</th>
                    </tr>
                  </thead>
                  <tbody>
                    {researchCalculations.map((entry) => (
                      <tr key={entry.twistedId} className="border-b border-gray-800">
                        <td className="p-3 font-medium capitalize">
                          {entry.twistedId.replace('twisted-', '')}
                        </td>
                        <td className="p-3 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <div className="w-16 bg-gray-700 rounded-full h-2">
                              <div
                                className="bg-purple-500 h-2 rounded-full"
                                style={{ width: `${entry.currentProgress}%` }}
                              />
                            </div>
                            <span>{entry.currentProgress}%</span>
                          </div>
                        </td>
                        <td className="p-3 text-center">{entry.calculations.encountersNeeded}</td>
                        <td className="p-3 text-center">{entry.calculations.timeEstimate}</td>
                        <td className="p-3 text-center text-xs text-gray-300">{entry.unlocksBenefit}</td>
                        <td className="p-3 text-center">
                          <span
                            className={`px-2 py-1 rounded text-xs font-semibold ${
                              entry.priority === 'high'
                                ? 'bg-red-600'
                                : entry.priority === 'medium'
                                ? 'bg-yellow-600'
                                : 'bg-green-600'
                            }`}
                          >
                            {entry.priority}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'unlocks' && (
          <section className="bg-gray-800/70 border border-gray-700 rounded-xl p-6 space-y-6">
            <header className="space-y-3">
              <h2 className="text-2xl font-semibold">Unlock path planner</h2>
              <p className="text-sm text-gray-300">
                Choose the characters you care about and follow the recommended order based on current progress and
                remaining requirements.
              </p>
            </header>

            <div className="grid gap-3 sm:grid-cols-3 md:grid-cols-5">
              {['vee', 'pebble', 'astro', 'shelly', 'sprout', 'cosmo', 'toodles'].map((characterId) => (
                <label key={characterId} className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    className="rounded"
                    checked={selectedGoals.includes(characterId)}
                    onChange={(event) => {
                      setSelectedGoals((prev) =>
                        event.target.checked ? [...prev, characterId] : prev.filter((id) => id !== characterId),
                      );
                    }}
                  />
                  <span className="capitalize">{characterId}</span>
                </label>
              ))}
            </div>

            <div className="space-y-4">
              {unlockPaths.map((path, index) => {
                const progress = (path.currentStep / path.totalSteps) * 100;
                return (
                  <article key={path.characterId} className="bg-gray-900/40 border border-gray-700 rounded-lg p-6">
                    <header className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <p className="text-sm text-gray-400">Priority #{index + 1}</p>
                        <h3 className="text-xl font-semibold capitalize">{path.characterId}</h3>
                        <p className="text-sm text-gray-300">Estimated time: {path.estimatedTime}</p>
                      </div>
                      <div className="text-right">
                        <span
                          className={`px-2 py-1 rounded text-xs font-semibold ${
                            path.priority === 'immediate'
                              ? 'bg-green-600'
                              : path.priority === 'short_term'
                              ? 'bg-yellow-600'
                              : 'bg-red-600'
                          }`}
                        >
                          {path.priority.replace('_', ' ')}
                        </span>
                        <p className="text-sm text-gray-300 mt-2">Ichor required: {path.ichorCost.toLocaleString()}</p>
                      </div>
                    </header>

                    <div className="mb-4">
                      <div className="w-full bg-gray-700 rounded-full h-3">
                        <div className="bg-purple-500 h-3 rounded-full" style={{ width: `${progress}%` }} />
                      </div>
                      <p className="text-xs text-gray-400 mt-2">
                        {path.currentStep} / {path.totalSteps} steps complete
                      </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <h4 className="font-semibold mb-2">Requirements</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                          {path.requirements.map((req) => (
                            <li key={req.description} className="flex items-center gap-2">
                              <span>{req.completed ? '✅' : '⏳'}</span>
                              <span>
                                {req.description}{' '}
                                {!req.completed && (
                                  <span className="text-xs text-gray-400">
                                    ({req.currentProgress}/{req.maxProgress})
                                  </span>
                                )}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Unlock benefits</h4>
                        <ul className="space-y-1 text-sm text-gray-300">
                          {path.benefits.map((benefit) => (
                            <li key={benefit}>• {benefit}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        )}

        {activeTab === 'mastery' && (
          <section className="bg-gray-800/70 border border-gray-700 rounded-xl p-6 space-y-6">
            <header className="space-y-3">
              <h2 className="text-2xl font-semibold">Mastery tracker</h2>
              <p className="text-sm text-gray-300">
                Monitor Mastery ranks for key characters. Push to 100% to unlock certain main cast members.
              </p>
            </header>

            <div className="grid gap-6 md:grid-cols-2">
              {profile.masteryProgress.map((entry) => {
                const levelRatio = entry.maxLevel === 0 ? 0 : entry.currentLevel / entry.maxLevel;
                const expRatio = entry.currentExp / (entry.currentExp + entry.expToNext || 1);
                return (
                  <article key={entry.characterId} className="bg-gray-900/40 border border-gray-700 rounded-lg p-6">
                    <header className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold capitalize">{entry.characterId}</h3>
                      <p className="text-sm text-gray-300">
                        Level {entry.currentLevel}/{entry.maxLevel}
                      </p>
                    </header>

                    <div className="mb-4">
                      <p className="text-xs text-gray-400 mb-1">Experience</p>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-yellow-400 h-2 rounded-full" style={{ width: `${expRatio * 100}%` }} />
                      </div>
                      <p className="text-xs text-gray-400 mt-2">EXP to next level: {entry.expToNext}</p>
                    </div>

                    <p className="text-sm text-gray-300">
                      Completion: {(levelRatio * 100).toFixed(0)}% —
                      {entry.characterId === 'brightney'
                        ? ' required to unlock Vee.'
                        : entry.characterId === 'toodles'
                        ? ' required to unlock Pebble.'
                        : ''}
                    </p>

                    {levelRatio >= 1 && (
                      <div className="mt-3 p-3 bg-green-600/30 border border-green-600 rounded text-sm">
                        ✅ Mastery completed! Unlock requirement satisfied.
                      </div>
                    )}
                  </article>
                );
              })}
            </div>

            <footer className="text-sm text-gray-400">
              Tip: Rotate daily tasks and multiplayer runs to accelerate Mastery XP without burning Ichor reserves.
            </footer>
          </section>
        )}

        <section className="grid gap-6 md:grid-cols-2">
          <ScrollToTopLink
            to="/trinket-builds"
            className="group bg-gray-800/70 border border-gray-700 hover:border-purple-500 transition-colors rounded-xl p-6"
          >
            <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">🛠️</div>
            <h3 className="text-xl font-semibold">Trinket Builds</h3>
            <p className="text-sm text-gray-300">
              Source AI-backed trinket loadouts that align with your upcoming unlocks.
            </p>
          </ScrollToTopLink>

          <ScrollToTopLink
            to="/character-recommender"
            className="group bg-gray-800/70 border border-gray-700 hover:border-purple-500 transition-colors rounded-xl p-6"
          >
            <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">🎭</div>
            <h3 className="text-xl font-semibold">Character Recommender</h3>
            <p className="text-sm text-gray-300">
              Compare roles and draft balanced lineups that complement your roadmap.
            </p>
          </ScrollToTopLink>
        </section>
      </div>
    </div>
  );
};

export default ProgressTrackerDashboard;
