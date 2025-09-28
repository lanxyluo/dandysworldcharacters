import React, { useMemo, useState } from 'react';
import TrinketRecommendationEngine, {
  PlayerExperience,
  SupportedGameMode,
} from '../../utils/trinketRecommendationEngine';

interface SmartRecommendationsProps {
  selectedCharacter: string;
  ownedTrinkets: string[];
  onTrinketSelect: (trinketIds: [string, string]) => void;
}

const experienceLabels: Record<PlayerExperience, string> = {
  beginner: 'Translation pending',
  intermediate: 'Translation pending',
  advanced: 'Translation pending',
};

const gameModeLabels: Record<SupportedGameMode, string> = {
  normal: 'Translation pending',
  'dandy-run': 'Dandy Run',
  'main-run': 'Translation pending',
};

export const SmartRecommendations: React.FC<SmartRecommendationsProps> = ({
  selectedCharacter,
  ownedTrinkets,
  onTrinketSelect,
}) => {
  const [experience, setExperience] = useState<PlayerExperience>('beginner');
  const [gameMode, setGameMode] = useState<SupportedGameMode>('normal');
  const engine = useMemo(() => new TrinketRecommendationEngine(), []);

  const recommendations = useMemo(() => {
    if (!selectedCharacter) {
      return [];
    }

    return engine.getRecommendations({
      characterId: selectedCharacter,
      userExperience: experience,
      ownedTrinkets,
      gameMode,
    });
  }, [engine, selectedCharacter, experience, ownedTrinkets, gameMode]);

  const popularCombinations = useMemo(() => {
    if (!selectedCharacter) {
      return [];
    }
    return engine.getPopularCombinations(selectedCharacter).slice(0, 3);
  }, [engine, selectedCharacter]);

  if (!selectedCharacter) {
    return (
      <div className="bg-gray-800 rounded-lg p-6 text-gray-300">
        <h3 className="text-xl font-semibold text-white mb-3">Translation pending</h3>
        <p>Translation pending</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-xl font-semibold text-white mb-4">Translation pending</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Translation pending</label>
            <div className="flex bg-gray-900 border border-gray-700 rounded-lg overflow-hidden">
              {(['beginner', 'intermediate', 'advanced'] as PlayerExperience[]).map((level) => (
                <button
                  key={level}
                  onClick={() => setExperience(level)}
                  className={`flex-1 px-4 py-2 text-sm font-medium transition-colors ${
                    experience === level ? 'bg-purple-600 text-white' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {experienceLabels[level]}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Translation pending</label>
            <div className="flex bg-gray-900 border border-gray-700 rounded-lg overflow-hidden">
              {(['normal', 'dandy-run', 'main-run'] as SupportedGameMode[]).map((mode) => (
                <button
                  key={mode}
                  onClick={() => setGameMode(mode)}
                  className={`flex-1 px-4 py-2 text-sm font-medium transition-colors ${
                    gameMode === mode ? 'bg-purple-600 text-white' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {gameModeLabels[mode]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-xl font-semibold text-white mb-4">Translation pending</h3>
        <div className="space-y-4">
          {recommendations.length === 0 ? (
            <div className="text-gray-400">Translation pending</div>
          ) : (
            recommendations.map((recommendation, index) => {
              const [firstId, secondId] = recommendation.trinketIds;
              const first = engine.getTrinketDetails(firstId);
              const second = engine.getTrinketDetails(secondId);

              return (
                <div key={recommendation.id} className="bg-gray-900 rounded-lg p-5 border border-gray-700">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Translation pending</div>
                      <h4 className="text-lg font-semibold text-white">{recommendation.description}</h4>
                    </div>
                    <button
                      onClick={() =>Translation pending</button>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span
                      className={`px-2 py-1 text-xs font-semibold rounded ${
                        recommendation.strategy === 'extraction'
                          ? 'bg-green-600'
                          : recommendation.strategy === 'speed'
                          ? 'bg-blue-600'
                          : recommendation.strategy === 'survival'
                          ? 'bg-red-600'
                          : 'bg-purple-600'
                      }`}
                    >
                      {recommendation.strategy}
                    </span>
                    <span className="text-xs text-gray-300">Translation pending</span>
                    <span className="text-xs text-yellow-300">Translation pending</span>
                    <span className="text-xs text-blue-300">Translation pending</span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    {[first, second].map((trinket, idx) => (
                      <div key={idx} className="bg-gray-800 rounded-md p-4 border border-gray-700">
                        <div className="text-sm font-semibold text-white">{trinket?.name ?? recommendation.trinketIds[idx]}</div>
                        <div className="text-xs text-gray-400 mt-1">
                          {trinket ? `${trinket.rarity} · ${trinket.type}` : 'Translation pending'}
                        </div>
                        {trinket && <p className="text-xs text-gray-300 mt-2">{trinket.description}</p>}
                      </div>
                    ))}
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h5 className="text-green-400 font-semibold mb-2">Translation pending</h5>
                      <ul className="space-y-1 text-gray-300">
                        {recommendation.reasons.map((reason) => (
                          <li key={reason}>• {reason}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-red-400 font-semibold mb-2">Translation pending</h5>
                      <ul className="space-y-1 text-gray-300">
                        {recommendation.warnings.map((warning) => (
                          <li key={warning}>• {warning}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {popularCombinations.length > 0 && (
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-xl font-semibold text-white mb-4">Translation pending</h3>
          <div className="space-y-3">
            {popularCombinations.map((combo, index) => (
              <div key={`${combo.trinkets.join('-')}-${index}`} className="bg-gray-900 rounded-lg p-4 border border-gray-700">
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2 text-sm text-gray-200">
                    {combo.trinkets.map((trinketId) => {
                      const trinket = engine.getTrinketDetails(trinketId);
                      return (
                        <span key={trinketId} className="bg-gray-800 px-2 py-1 rounded">
                          {trinket?.name ?? trinketId}
                        </span>
                      );
                    })}
                  </div>
                  <div className="text-xs text-blue-300">Translation pending</div>
                </div>
                <div className="text-xs text-gray-400 mt-2">{combo.synergy}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SmartRecommendations;
