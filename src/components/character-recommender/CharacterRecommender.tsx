import React, { useMemo, useState } from 'react';
import { CharacterRecommender, STAT_KEYS, getCharacterStat } from '../../utils/character-recommender';
import type { CharacterRecommendation, UserPreferences } from '../../types/character-recommendations';
import type { Character } from '../../types/character';
import { getAllCharacters } from '../../data/characters';
import ScrollToTopLink from '../ScrollToTopLink';
import { QuickStartCard } from './QuickStartCard';

const recommender = new CharacterRecommender();

const DEFAULT_PREFERENCES: UserPreferences = {
  experience: 'new',
  preferred_playstyle: 'flexible',
  team_size: 4,
  available_ichor: 800,
  unlocked_characters: ['boxten', 'poppy', 'tisha'],
  preferred_floors: 'early',
  current_team: [],
};

const CharacterRecommenderComponent: React.FC = () => {
  const [preferences, setPreferences] = useState<UserPreferences>(DEFAULT_PREFERENCES);
  const [showComparison, setShowComparison] = useState(false);
  const [selectedForComparison, setSelectedForComparison] = useState<string[]>([]);

  const allCharacters = useMemo<Character[]>(() => {
    return getAllCharacters().slice().sort((a, b) => a.name.localeCompare(b.name));
  }, []);

  const { available: availableRecommendations, future: futureRecommendations } = useMemo(() => {
    return recommender.getRecommendations(preferences);
  }, [preferences]);

  const teamAnalysis = useMemo(() => {
    if (preferences.current_team && preferences.current_team.length > 0) {
      return recommender.analyzeTeam(preferences.current_team);
    }
    return null;
  }, [preferences.current_team]);

  const currentTeam = preferences.current_team ?? [];

  const handleUnlockedChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const values = Array.from(event.target.selectedOptions).map((option) => option.value);
    setPreferences((prev) => ({
      ...prev,
      unlocked_characters: values,
    }));
  };

  const handleTeamChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const values = Array.from(event.target.selectedOptions)
      .map((option) => option.value)
      .slice(0, preferences.team_size);

    setPreferences((prev) => ({
      ...prev,
      current_team: values,
    }));
  };

  const toggleComparison = (characterId: string) => {
    setSelectedForComparison((prev) => {
      if (prev.includes(characterId)) {
        return prev.filter((id) => id !== characterId);
      }
      if (prev.length >= 3) {
        return prev;
      }
      return [...prev, characterId];
    });
  };

  const comparisonCharacters = selectedForComparison
    .map((id) => allCharacters.find((character) => character.id === id))
    .filter((character): character is Character => Boolean(character));

  const renderRecommendationCard = (
    recommendation: CharacterRecommendation,
    index: number,
    variant: 'available' | 'future',
  ) => {
    const character = allCharacters.find((item) => item.id === recommendation.characterId);
    if (!character) {
      return null;
    }

    const isSelected = selectedForComparison.includes(character.id);
    const ichorCost = recommendation.ichorCost ?? character.unlockRequirements?.ichorCost ?? null;
    const availabilityLabel =
      recommendation.availability === 'available'
        ? variant === 'future'
          ? { text: 'Advanced difficulty', className: 'bg-blue-500/20 text-blue-200' }
          : { text: 'Purchasable now', className: 'bg-green-500/20 text-green-300' }
        : recommendation.availability === 'needs_ichor'
        ? {
            text: `Need ${recommendation.ichorShortfall} Ichor`,
            className: 'bg-amber-500/20 text-amber-300',
          }
        : { text: 'Unlock requirements pending', className: 'bg-red-500/20 text-red-200' };

    const unlocks = character.unlockRequirements ?? {
      researchRequirements: [],
      taskCompletion: [],
      prerequisites: [],
    };

    const informationalRequirements: string[] = [];
    const requirementSet = new Set<string>();

    if (Array.isArray(unlocks.researchRequirements)) {
      unlocks.researchRequirements.forEach((req) => requirementSet.add(`Research: ${req}`));
    }
    if (Array.isArray(unlocks.taskCompletion)) {
      unlocks.taskCompletion.forEach((task) => requirementSet.add(`Task: ${task}`));
    }
    if (Array.isArray(unlocks.prerequisites)) {
      unlocks.prerequisites.forEach((prereq) => {
        if (prereq.toLowerCase().includes('starter selection')) {
          informationalRequirements.push(prereq);
        } else {
          requirementSet.add(`Prerequisite: ${prereq}`);
        }
      });
    }

    const unmetSet = new Set(recommendation.unmetRequirements);
    const satisfiedRequirements = Array.from(requirementSet).filter((item) => !unmetSet.has(item));

    const rankLabel = variant === 'available' ? `Rank #${index + 1}` : `Goal #${index + 1}`;
    const articleBorder = variant === 'future' ? 'border-amber-500/40' : 'border-gray-700';

    return (
      <article
        key={character.id}
        className={`bg-gray-800/60 border ${articleBorder} rounded-xl p-6 flex flex-col gap-4`}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-wide text-gray-400">{rankLabel}</p>
            <h3 className="text-xl font-semibold">{character.name}</h3>
            <div className="flex flex-wrap items-center gap-2 text-xs mt-2">
              <span
                className={`px-2 py-1 rounded-full font-semibold ${
                  recommendation.role === 'extractor'
                    ? 'bg-green-500/20 text-green-300'
                    : recommendation.role === 'distractor'
                    ? 'bg-blue-500/20 text-blue-300'
                    : recommendation.role === 'support'
                    ? 'bg-purple-500/20 text-purple-300'
                    : 'bg-gray-500/20 text-gray-200'
                }`}
              >
                {recommendation.role === 'extractor'
                  ? 'Machine specialist'
                  : recommendation.role === 'distractor'
                  ? 'Distraction'
                  : recommendation.role === 'support'
                  ? 'Support'
                  : 'Hybrid'}
              </span>
              <span className="px-2 py-1 rounded-full bg-yellow-500/20 text-yellow-300 font-semibold">
                {recommendation.recommendationScore}/100 score
              </span>
              <span className="px-2 py-1 rounded-full bg-gray-500/20 text-gray-200 font-semibold">
                {recommendation.difficulty.charAt(0).toUpperCase() + recommendation.difficulty.slice(1)}
              </span>
              <span className={`px-2 py-1 rounded-full font-semibold ${availabilityLabel.className}`}>
                {availabilityLabel.text}
              </span>
            </div>
          </div>
          {showComparison && (
            <button
              onClick={() => toggleComparison(character.id)}
              disabled={!isSelected && selectedForComparison.length >= 3}
              className={`px-3 py-2 rounded-lg text-xs font-semibold border transition-colors ${
                isSelected
                  ? 'bg-purple-700/20 border-purple-500 text-purple-200'
                  : 'bg-gray-900 border-gray-700 text-gray-200 hover:bg-gray-800'
              } ${!isSelected && selectedForComparison.length >= 3 ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isSelected ? 'Remove' : 'Compare'}
            </button>
          )}
        </div>

        <div className="grid grid-cols-2 gap-3 text-sm">
          <div>Health: {'❤️'.repeat(getCharacterStat(character, 'health'))}</div>
          <div>Speed: {'⭐'.repeat(getCharacterStat(character, 'movementSpeed'))}</div>
          <div>Extraction: {'⭐'.repeat(getCharacterStat(character, 'extractionSpeed'))}</div>
          <div>Stealth: {'⭐'.repeat(getCharacterStat(character, 'stealth'))}</div>
        </div>

        <div className="rounded-lg bg-gray-900/60 border border-gray-700 p-3 text-sm text-gray-200 space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-gray-300">Ichor cost</span>
            <span>
              {ichorCost == null ? 'Unknown' : ichorCost === 0 ? 'Free' : `${ichorCost} Ichor`}
            </span>
          </div>
          {recommendation.availability === 'needs_ichor' && recommendation.ichorShortfall > 0 && (
            <p className="text-xs text-amber-300">
              Save {recommendation.ichorShortfall} more Ichor to unlock this character.
            </p>
          )}
          {recommendation.unmetRequirements.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-red-200 uppercase tracking-wide">Unlock requirements</p>
              <ul className="mt-1 space-y-1 text-xs text-gray-200">
                {recommendation.unmetRequirements.map((req) => (
                  <li key={req}>• {req}</li>
                ))}
              </ul>
            </div>
          )}
          {informationalRequirements.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-gray-300 uppercase tracking-wide">Notes</p>
              <ul className="mt-1 space-y-1 text-xs text-gray-300">
                {informationalRequirements.map((note) => (
                  <li key={note}>• {note}</li>
                ))}
              </ul>
            </div>
          )}
          {satisfiedRequirements.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-gray-300 uppercase tracking-wide">Requirements</p>
              <ul className="mt-1 space-y-1 text-xs text-gray-300">
                {satisfiedRequirements.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {recommendation.teamFit.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-purple-300 mb-2">Ideal roles</h4>
            <ul className="text-sm text-gray-200 space-y-1">
              {recommendation.teamFit.map((fit, fitIndex) => (
                <li key={fitIndex}>• {fit}</li>
              ))}
            </ul>
          </div>
        )}

        {recommendation.reasons.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-green-300 mb-2">Why it works</h4>
            <ul className="text-sm text-gray-200 space-y-1">
              {recommendation.reasons.map((reason, reasonIndex) => (
                <li key={reasonIndex}>✅ {reason}</li>
              ))}
            </ul>
          </div>
        )}

        {recommendation.warnings.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-yellow-300 mb-2">Keep in mind</h4>
            <ul className="text-sm text-gray-200 space-y-1">
              {recommendation.warnings.map((warning, warningIndex) => (
                <li key={warningIndex}>⚠️ {warning}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-auto pt-4 border-t border-gray-700 flex items-center justify-between text-sm text-gray-300">
          <span>
            Unlock priority:{' '}
            {recommendation.unlockPriority === 'immediate'
              ? 'Ready now'
              : recommendation.unlockPriority === 'short_term'
              ? 'Short-term goal'
              : 'Long-term plan'}
          </span>
          <ScrollToTopLink to={`/characters/${character.id}`} className="text-blue-300 hover:text-blue-200 font-medium">
            View character guide →
          </ScrollToTopLink>
        </div>
      </article>
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid gap-6 lg:grid-cols-[2fr,1fr] items-start">
          <div>
            <h1 className="text-4xl font-extrabold mb-4">Character Recommender Hub</h1>
            <p className="text-lg text-gray-300">
              Tailor your next run with smart character picks, comparison tools, and team planning insights.
            </p>
          </div>
          <QuickStartCard />
        </div>

        <section className="bg-gray-800/60 border border-gray-700 rounded-xl p-6 shadow-lg shadow-purple-500/10">
          <h2 className="text-2xl font-semibold mb-6">Player Profile</h2>
          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Experience level</label>
              <select
                value={preferences.experience}
                onChange={(event) =>
                  setPreferences((prev) => ({
                    ...prev,
                    experience: event.target.value as UserPreferences['experience'],
                  }))
                }
                className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="new">New player (0-10 hours)</option>
                <option value="some_experience">Moderate experience (10-50 hours)</option>
                <option value="experienced">Veteran (50+ hours)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Preferred playstyle</label>
              <select
                value={preferences.preferred_playstyle}
                onChange={(event) =>
                  setPreferences((prev) => ({
                    ...prev,
                    preferred_playstyle: event.target.value as UserPreferences['preferred_playstyle'],
                  }))
                }
                className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="flexible">Adaptive — I switch roles as needed</option>
                <option value="aggressive">Aggressive — I chase objectives fast</option>
                <option value="cautious">Cautious — I prefer safe, stealthy runs</option>
                <option value="support">Support — I focus on helping teammates</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Available Ichor</label>
              <input
                type="number"
                min={0}
                step={100}
                value={preferences.available_ichor}
                onChange={(event) =>
                  setPreferences((prev) => ({
                    ...prev,
                    available_ichor: Number(event.target.value) || 0,
                  }))
                }
                className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Target floor range</label>
              <select
                value={preferences.preferred_floors}
                onChange={(event) =>
                  setPreferences((prev) => ({
                    ...prev,
                    preferred_floors: event.target.value as UserPreferences['preferred_floors'],
                  }))
                }
                className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="early">Early floors (1-10)</option>
                <option value="mid">Mid floors (11-20)</option>
                <option value="late">Late floors (21+)</option>
                <option value="all">All stages</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Team size goal</label>
              <input
                type="number"
                min={1}
                max={6}
                value={preferences.team_size}
                onChange={(event) =>
                  setPreferences((prev) => ({
                    ...prev,
                    team_size: Math.max(1, Math.min(6, Number(event.target.value) || 1)),
                  }))
                }
                className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Unlocked characters</label>
              <select
                multiple
                size={6}
                value={preferences.unlocked_characters}
                onChange={handleUnlockedChange}
                className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {allCharacters.map((character) => (
                  <option key={character.id} value={character.id}>
                    {character.name}
                  </option>
                ))}
              </select>
              <p className="text-xs text-gray-400 mt-2">Hold Ctrl/Cmd to select multiple characters.</p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Current team (optional)</h3>
            <div className="grid gap-6 md:grid-cols-[1fr,2fr]">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Select up to {preferences.team_size} characters</label>
                <select
                  multiple
                  size={6}
                  value={currentTeam}
                  onChange={handleTeamChange}
                  className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  {allCharacters.map((character) => (
                    <option key={character.id} value={character.id}>
                      {character.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="bg-gray-900/70 border border-gray-700 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Selected roster</h4>
                {currentTeam.length === 0 ? (
                  <p className="text-sm text-gray-400">Pick teammates to unlock tailored team analysis.</p>
                ) : (
                  <ul className="flex flex-wrap gap-2">
                    {currentTeam.map((id) => {
                      const character = allCharacters.find((c) => c.id === id);
                      return (
                        <li key={id} className="px-3 py-1 bg-purple-600/20 border border-purple-500/40 rounded-full text-sm">
                          {character?.name ?? id}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </section>

        {teamAnalysis && (
          <section className="bg-gray-800/60 border border-gray-700 rounded-xl p-6 shadow-lg shadow-purple-500/10">
            <h2 className="text-2xl font-semibold mb-6">Team Analysis</h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <div>
                <h3 className="font-semibold text-green-400 mb-3">Strengths</h3>
                <ul className="space-y-2 text-sm text-gray-200">
                  {teamAnalysis.strengths.length === 0 ? (
                    <li>No standout strengths detected yet.</li>
                  ) : (
                    teamAnalysis.strengths.map((item, index) => <li key={index}>✅ {item}</li>)
                  )}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-yellow-400 mb-3">Weak spots</h3>
                <ul className="space-y-2 text-sm text-gray-200">
                  {teamAnalysis.weaknesses.length === 0 ? (
                    <li>No obvious weaknesses.</li>
                  ) : (
                    teamAnalysis.weaknesses.map((item, index) => <li key={index}>⚠️ {item}</li>)
                  )}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-blue-400 mb-3">Suggestions</h3>
                <ul className="space-y-2 text-sm text-gray-200">
                  {teamAnalysis.recommendations.length === 0 ? (
                    <li>Team balance looks solid.</li>
                  ) : (
                    teamAnalysis.recommendations.map((item, index) => <li key={index}>💡 {item}</li>)
                  )}
                </ul>
              </div>
            </div>

            {(teamAnalysis.synergies.length > 0 || teamAnalysis.conflicts.length > 0) && (
              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                {teamAnalysis.synergies.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-purple-300 mb-3">Synergies</h3>
                    <ul className="space-y-2 text-sm text-gray-200">
                      {teamAnalysis.synergies.map((item, index) => (
                        <li key={index}>✨ {item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {teamAnalysis.conflicts.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-red-300 mb-3">Potential conflicts</h3>
                    <ul className="space-y-2 text-sm text-gray-200">
                      {teamAnalysis.conflicts.map((item, index) => (
                        <li key={index}>❗ {item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </section>
        )}

        <section className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold">Recommended characters</h2>
              <p className="text-sm text-gray-400">
                Ranked suggestions based on your profile, budget, and team context.
              </p>
            </div>
            <button
              onClick={() => setShowComparison((prev) => !prev)}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition-colors rounded-lg font-medium"
            >
              {showComparison ? 'Hide comparison' : 'Open comparison tray'}
            </button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {availableRecommendations.map((recommendation, index) =>
              renderRecommendationCard(recommendation, index, 'available'),
            )}
          </div>
        </section>

        {futureRecommendations.length > 0 && (
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-amber-200">Future unlock goals</h2>
              <p className="text-sm text-gray-400">
                Save additional Ichor or complete the listed requirements before picking up these characters.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {futureRecommendations.map((recommendation, index) =>
                renderRecommendationCard(recommendation, index, 'future'),
              )}
            </div>
          </section>
        )}

        {showComparison && comparisonCharacters.length > 0 && (
          <section className="bg-gray-800/60 border border-gray-700 rounded-xl p-6 shadow-lg shadow-purple-500/10 space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <h2 className="text-2xl font-semibold">Character comparison</h2>
              <button
                onClick={() => setSelectedForComparison([])}
                className="px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Clear selection
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-3 pr-4 text-gray-400 font-medium">Attribute</th>
                    {comparisonCharacters.map((character) => (
                      <th key={character.id} className="px-4 py-3 text-center font-semibold text-white">
                        {character.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {STAT_KEYS.map((key) => (
                    <tr key={key} className="border-b border-gray-800">
                      <td className="py-3 pr-4 font-medium text-gray-300">
                        {key === 'health'
                          ? 'Health'
                          : key === 'movementSpeed'
                          ? 'Movement speed'
                          : key === 'extractionSpeed'
                          ? 'Extraction speed'
                          : key === 'stealth'
                          ? 'Stealth'
                          : key === 'stamina'
                          ? 'Stamina'
                          : 'Skill check'}
                      </td>
                      {comparisonCharacters.map((character) => {
                        const value = getCharacterStat(character, key);
                        const display = key === 'health' ? '❤️'.repeat(value) : '⭐'.repeat(value);
                        return (
                          <td key={character.id} className="px-4 py-3 text-center text-gray-200">
                            {display || '—'}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default CharacterRecommenderComponent;
