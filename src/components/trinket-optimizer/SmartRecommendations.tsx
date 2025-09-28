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
  beginner: '新手',
  intermediate: '进阶',
  advanced: '专家',
};

const gameModeLabels: Record<SupportedGameMode, string> = {
  normal: '标准模式',
  'dandy-run': 'Dandy Run',
  'main-run': '主角挑战',
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
        <h3 className="text-xl font-semibold text-white mb-3">智能推荐</h3>
        <p>请选择角色以获取专属 Trinket 配装建议。</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-xl font-semibold text-white mb-4">偏好设置</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">经验水平</label>
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
            <label className="block text-sm font-medium text-gray-300 mb-2">游戏模式</label>
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
        <h3 className="text-xl font-semibold text-white mb-4">推荐配装</h3>
        <div className="space-y-4">
          {recommendations.length === 0 ? (
            <div className="text-gray-400">暂无符合条件的推荐，请尝试调整过滤条件。</div>
          ) : (
            recommendations.map((recommendation, index) => {
              const [firstId, secondId] = recommendation.trinketIds;
              const first = engine.getTrinketDetails(firstId);
              const second = engine.getTrinketDetails(secondId);

              return (
                <div key={recommendation.id} className="bg-gray-900 rounded-lg p-5 border border-gray-700">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="text-sm text-gray-400 mb-1">推荐 #{index + 1}</div>
                      <h4 className="text-lg font-semibold text-white">{recommendation.description}</h4>
                    </div>
                    <button
                      onClick={() => onTrinketSelect(recommendation.trinketIds)}
                      className="px-3 py-1.5 bg-purple-600 hover:bg-purple-700 text-sm font-medium rounded-md text-white"
                    >
                      使用此配装
                    </button>
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
                    <span className="text-xs text-gray-300">
                      难度：{recommendation.difficulty}
                    </span>
                    <span className="text-xs text-yellow-300">
                      社区评分：{recommendation.communityRating}/5
                    </span>
                    <span className="text-xs text-blue-300">
                      使用率：{Math.round(recommendation.usageRate * 100)}%
                    </span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    {[first, second].map((trinket, idx) => (
                      <div key={idx} className="bg-gray-800 rounded-md p-4 border border-gray-700">
                        <div className="text-sm font-semibold text-white">{trinket?.name ?? recommendation.trinketIds[idx]}</div>
                        <div className="text-xs text-gray-400 mt-1">
                          {trinket ? `${trinket.rarity} · ${trinket.type}` : '未收录饰品'}
                        </div>
                        {trinket && <p className="text-xs text-gray-300 mt-2">{trinket.description}</p>}
                      </div>
                    ))}
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h5 className="text-green-400 font-semibold mb-2">优势</h5>
                      <ul className="space-y-1 text-gray-300">
                        {recommendation.reasons.map((reason) => (
                          <li key={reason}>• {reason}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-red-400 font-semibold mb-2">注意事项</h5>
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
          <h3 className="text-xl font-semibold text-white mb-4">社区流行组合</h3>
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
                  <div className="text-xs text-blue-300">
                    使用率：{Math.round(combo.usageRate * 100)}%
                  </div>
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
