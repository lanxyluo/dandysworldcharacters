import React, { useMemo, useState } from 'react';
import { twistedStrategies } from '../../data/twisted-strategies';
import { TwistedStrategyProfile, TwistedThreatLevel, TwistedRarity } from '../../types/twisted-strategies';

type ThreatFilter = '' | TwistedThreatLevel;
type RarityFilter = '' | TwistedRarity;

const formatThreatLabel = (level: TwistedThreatLevel): string => {
  switch (level) {
    case 'extreme':
      return '极危险';
    case 'high':
      return '高危险';
    case 'medium':
      return '中等';
    case 'low':
    default:
      return '低威胁';
  }
};

const threatBadgeColor = (level: TwistedThreatLevel): string => {
  switch (level) {
    case 'extreme':
      return 'bg-red-600';
    case 'high':
      return 'bg-orange-600';
    case 'medium':
      return 'bg-yellow-600';
    case 'low':
    default:
      return 'bg-green-600';
  }
};

const rarityLabel: Record<TwistedRarity, string> = {
  lethal: '致命',
  main: '主角',
  rare: '稀有',
  uncommon: '罕见',
  common: '普通',
};

const difficultyStars = (rating: number): string => {
  const stars = Math.max(1, Math.min(5, Math.round(rating / 2)));
  return '★'.repeat(stars);
};

const TwistedCard: React.FC<{ profile: TwistedStrategyProfile; onQuickView: (name: string) => void }> = ({
  profile,
  onQuickView,
}) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700">
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <h3 className="text-2xl font-bold text-white">{profile.name}</h3>
        <span className={`px-2 py-1 rounded text-xs font-semibold ${threatBadgeColor(profile.threat_level)}`}>
          {formatThreatLabel(profile.threat_level)}
        </span>
        <span className="px-2 py-1 rounded text-xs font-semibold bg-gray-700 text-gray-200">
          {rarityLabel[profile.rarity]}
        </span>
        <span className="text-yellow-400 text-sm">{difficultyStars(profile.difficulty_rating)}</span>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="space-y-3">
          <div>
            <h4 className="text-sm font-semibold text-purple-300 mb-2">识别特征</h4>
            <div className="text-sm text-gray-300 space-y-1">
              <div>
                <strong className="text-gray-200">视觉:</strong> {profile.identification.visual_cues.join('、')}
              </div>
              <div>
                <strong className="text-gray-200">音频:</strong> {profile.identification.audio_cues.join('、')}
              </div>
              <div>
                <strong className="text-gray-200">触发:</strong> {profile.identification.spawn_conditions.join('、')}
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-red-300 mb-2">特殊能力</h4>
            <ul className="text-sm text-gray-300 space-y-1">
              {profile.special_abilities.map((ability) => (
                <li key={ability}>• {ability}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-3">
          <div>
            <h4 className="text-sm font-semibold text-green-300 mb-2">避免遭遇</h4>
            <ul className="text-sm text-gray-300 space-y-1">
              {profile.strategies.avoidance.map((tip) => (
                <li key={tip}>• {tip}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-yellow-300 mb-2">被发现时</h4>
            <ul className="text-sm text-gray-300 space-y-1">
              {profile.strategies.if_spotted.map((tip) => (
                <li key={tip}>• {tip}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-3">
          <div>
            <h4 className="text-sm font-semibold text-blue-300 mb-2">团队协调</h4>
            <ul className="text-sm text-gray-300 space-y-1">
              {profile.strategies.team_coordination.map((tip) => (
                <li key={tip}>• {tip}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-red-400 mb-2">常见错误</h4>
            <ul className="text-sm text-red-200 space-y-1">
              {profile.common_mistakes.map((mistake) => (
                <li key={mistake}>❌ {mistake}</li>
              ))}
            </ul>
          </div>

          {profile.counters.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-green-300 mb-2">应对方法</h4>
              <ul className="text-sm text-gray-200 space-y-1">
                {profile.counters.map((counter) => (
                  <li key={counter}>✅ {counter}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <button
        className="mt-6 inline-flex items-center text-sm text-purple-300 hover:text-purple-200 transition-colors"
        onClick={() => onQuickView(profile.name)}
      >
        快速查看 {profile.name} 的详细策略
      </button>
    </div>
  );
};

export const TwistedGuide: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedThreatLevel, setSelectedThreatLevel] = useState<ThreatFilter>('');
  const [selectedRarity, setSelectedRarity] = useState<RarityFilter>('');

  const emergencyTwisteds = useMemo(
    () =>
      [...twistedStrategies]
        .filter((profile) => profile.threat_level === 'extreme')
        .sort((a, b) => b.difficulty_rating - a.difficulty_rating)
        .slice(0, 3),
    []
  );

  const filteredTwisteds = useMemo(() => {
    const lowerQuery = searchQuery.trim().toLowerCase();

    return twistedStrategies.filter((profile) => {
      const matchesSearch =
        lowerQuery.length === 0 ||
        profile.name.toLowerCase().includes(lowerQuery) ||
        profile.special_abilities.some((ability) => ability.toLowerCase().includes(lowerQuery));

      const matchesThreat = !selectedThreatLevel || profile.threat_level === selectedThreatLevel;
      const matchesRarity = !selectedRarity || profile.rarity === selectedRarity;

      return matchesSearch && matchesThreat && matchesRarity;
    });
  }, [searchQuery, selectedThreatLevel, selectedRarity]);

  const handleQuickSelect = (name: string) => {
    setSearchQuery(name);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold mb-4">⚔️ Twisted 对抗手册</h1>
          <p className="text-lg text-gray-300">
            快速查询 Twisted 应对策略，关键时刻救命指南
          </p>
        </div>

        <div className="bg-red-900/40 border border-red-700 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-red-100 mb-4">🚨 紧急对抗指南</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {emergencyTwisteds.map((profile) => (
              <button
                key={profile.twistedId}
                className="bg-red-800/60 hover:bg-red-700/80 transition-colors p-4 rounded-lg text-left"
                onClick={() => handleQuickSelect(profile.name)}
              >
                <div className="font-semibold text-white">{profile.name}</div>
                <div className="text-sm text-red-200 mt-2">{profile.identification.audio_cues[0]}</div>
                <div className="text-xs text-red-300 mt-3">点击查看完整策略</div>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <div className="grid gap-4 md:grid-cols-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-2 text-gray-300">快速搜索</label>
              <input
                type="text"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="输入 Twisted 名称或能力..."
                className="w-full p-3 bg-gray-700 rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">威胁等级</label>
              <select
                value={selectedThreatLevel}
                onChange={(event) => setSelectedThreatLevel(event.target.value as ThreatFilter)}
                className="w-full p-3 bg-gray-700 rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none"
              >
                <option value="">全部</option>
                <option value="extreme">极危险</option>
                <option value="high">高危险</option>
                <option value="medium">中等</option>
                <option value="low">低威胁</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">稀有度</label>
              <select
                value={selectedRarity}
                onChange={(event) => setSelectedRarity(event.target.value as RarityFilter)}
                className="w-full p-3 bg-gray-700 rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none"
              >
                <option value="">全部</option>
                <option value="lethal">致命</option>
                <option value="main">主角</option>
                <option value="rare">稀有</option>
                <option value="uncommon">罕见</option>
                <option value="common">普通</option>
              </select>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {filteredTwisteds.length === 0 ? (
            <div className="bg-gray-800 rounded-lg p-8 text-center text-gray-400">
              未找到符合条件的 Twisted
            </div>
          ) : (
            filteredTwisteds.map((profile) => (
              <TwistedCard key={profile.twistedId} profile={profile} onQuickView={handleQuickSelect} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default TwistedGuide;
