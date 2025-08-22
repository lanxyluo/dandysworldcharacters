import React, { useState } from 'react';

interface TwistedCharacter {
  name: string;
  description: string;
  unlockCondition: string;
  difficulty: 'easy' | 'medium' | 'hard' | 'extreme';
  recommendedCharacters: string[];
  strategy: string[];
  tips: string[];
  researchBonus?: string;
}

const twistedCharacters: TwistedCharacter[] = [
  {
    name: 'Twisted Alice',
    description: '经典童话角色，具有强大的近战能力和团队支持技能',
    unlockCondition: '完成Alice章节，收集3个Alice碎片',
    difficulty: 'medium',
    recommendedCharacters: ['Astro', 'Pebble', 'Shelly'],
    strategy: [
      '使用Astro的潜行能力接近Alice',
      '利用Pebble的移动速度躲避攻击',
      'Shelly的团队激励提升整体战斗力'
    ],
    tips: [
      '注意Alice的周期性狂暴状态',
      '在安全区域进行团队恢复',
      '利用环境障碍物进行战术撤退'
    ],
    researchBonus: '解锁Alice相关研究项目，获得额外Ichor奖励'
  },
  {
    name: 'Twisted Bob',
    description: '机械工程师，擅长远程攻击和陷阱设置',
    unlockCondition: '完成Bob章节，修复5台机器',
    difficulty: 'hard',
    recommendedCharacters: ['Vee', 'Rodger', 'Brightney'],
    strategy: [
      'Vee高亮显示Bob设置的陷阱',
      'Rodger快速研究机器机制',
      'Brightney提供光源，揭示隐藏区域'
    ],
    tips: [
      '仔细观察机器运转模式',
      '优先破坏Bob的陷阱装置',
      '团队协作完成复杂机械操作'
    ],
    researchBonus: '解锁机械工程研究，提升机器修复效率'
  },
  {
    name: 'Twisted Charlie',
    description: '神秘学者，具有强大的魔法攻击和召唤能力',
    unlockCondition: '完成Charlie章节，收集7本古籍',
    difficulty: 'extreme',
    recommendedCharacters: ['Sprout', 'Tisha', 'Goob'],
    strategy: [
      'Sprout的专注能力抵抗魔法干扰',
      'Tisha清理负面状态效果',
      'Goob的熊抱保护团队免受魔法伤害'
    ],
    tips: [
      '学习Charlie的魔法攻击模式',
      '在魔法阵外进行攻击',
      '利用古籍知识破解魔法谜题'
    ],
    researchBonus: '解锁魔法研究，获得特殊能力升级'
  },
  {
    name: 'Twisted Delta',
    description: '海洋生物，在水域中具有压倒性优势',
    unlockCondition: '完成Delta章节，探索水下遗迹',
    difficulty: 'hard',
    recommendedCharacters: ['Finn', 'Connie', 'Flutter'],
    strategy: [
      'Finn的水下多任务处理能力',
      'Connie的贝壳护盾防御攻击',
      'Flutter的飞行能力提供空中支援'
    ],
    tips: [
      '避免在水域中与Delta正面冲突',
      '利用地形优势进行战术撤退',
      '团队配合完成水下探索任务'
    ],
    researchBonus: '解锁海洋研究，提升水下探索效率'
  },
  {
    name: 'Twisted Echo',
    description: '声音操控者，能够制造幻觉和声波攻击',
    unlockCondition: '完成Echo章节，收集声音碎片',
    difficulty: 'medium',
    recommendedCharacters: ['Toodles', 'Gigi', 'Teagan'],
    strategy: [
      'Toodles的隐身能力避免声波探测',
      'Gigi的幸运抽奖获得有利道具',
      'Teagan的安抚能力稳定团队状态'
    ],
    tips: [
      '使用耳机或静音模式减少干扰',
      '识别真实声音和幻觉的区别',
      '在安静环境中进行关键操作'
    ],
    researchBonus: '解锁声学研究，获得声音分析能力'
  }
];

const TwistedsGuide: React.FC = () => {
  const [selectedTwisted, setSelectedTwisted] = useState<TwistedCharacter | null>(null);
  const [filterDifficulty, setFilterDifficulty] = useState<string>('all');

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-600';
      case 'medium': return 'bg-yellow-600';
      case 'hard': return 'bg-orange-600';
      case 'extreme': return 'bg-red-600';
      default: return 'bg-gray-600';
    }
  };

  const getDifficultyIcon = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return '🟢';
      case 'medium': return '🟡';
      case 'hard': return '🟠';
      case 'extreme': return '🔴';
      default: return '⚪';
    }
  };

  const filteredTwisteds = filterDifficulty === 'all' 
    ? twistedCharacters 
    : twistedCharacters.filter(t => t.difficulty === filterDifficulty);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-bg-card rounded-lg p-8 shadow-lg">
        <h2 className="text-3xl font-bold text-text-primary mb-6 text-center">
          🎭 Twisteds 解锁指南
        </h2>
        
        <div className="text-center mb-8">
          <p className="text-text-secondary text-lg">
            掌握解锁Twisted角色的完整攻略，了解解锁条件、推荐策略和实用技巧
          </p>
        </div>

        {/* 难度筛选器 */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => setFilterDifficulty('all')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              filterDifficulty === 'all'
                ? 'bg-accent-main text-white'
                : 'bg-bg-secondary text-text-secondary hover:bg-bg-card'
            }`}
          >
            全部难度
          </button>
          {['easy', 'medium', 'hard', 'extreme'].map(difficulty => (
            <button
              key={difficulty}
              onClick={() => setFilterDifficulty(difficulty)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filterDifficulty === difficulty
                  ? 'bg-accent-main text-white'
                  : 'bg-bg-secondary text-text-secondary hover:bg-bg-card'
              }`}
            >
              {difficulty === 'easy' ? '简单' :
               difficulty === 'medium' ? '中等' :
               difficulty === 'hard' ? '困难' : '极难'}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 左侧：Twisted列表 */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-text-primary mb-4">
              可解锁的Twisted角色
            </h3>
            
            {filteredTwisteds.map((twisted) => (
              <div
                key={twisted.name}
                onClick={() => setSelectedTwisted(twisted)}
                className={`bg-bg-secondary rounded-lg p-4 cursor-pointer transition-all hover:bg-bg-card border-2 ${
                  selectedTwisted?.name === twisted.name
                    ? 'border-accent-main bg-bg-card'
                    : 'border-transparent'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-lg font-semibold text-text-primary">
                    {twisted.name}
                  </h4>
                  <span className={`px-2 py-1 rounded text-xs text-white font-medium ${getDifficultyColor(twisted.difficulty)}`}>
                    {getDifficultyIcon(twisted.difficulty)} {twisted.difficulty.toUpperCase()}
                  </span>
                </div>
                
                <p className="text-text-secondary text-sm mb-3">
                  {twisted.description}
                </p>
                
                <div className="text-xs text-accent-main font-medium">
                  {twisted.unlockCondition}
                </div>
              </div>
            ))}
          </div>

          {/* 右侧：详细信息 */}
          <div className="bg-bg-secondary rounded-lg p-6">
            {selectedTwisted ? (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-text-primary">
                    {selectedTwisted.name}
                  </h3>
                  <span className={`px-3 py-1 rounded text-sm text-white font-medium ${getDifficultyColor(selectedTwisted.difficulty)}`}>
                    {getDifficultyIcon(selectedTwisted.difficulty)} {selectedTwisted.difficulty.toUpperCase()}
                  </span>
                </div>

                <div className="space-y-6">
                  {/* 解锁条件 */}
                  <div>
                    <h4 className="text-lg font-medium text-text-primary mb-2">🔓 解锁条件</h4>
                    <p className="text-text-secondary bg-bg-card p-3 rounded-lg">
                      {selectedTwisted.unlockCondition}
                    </p>
                  </div>

                  {/* 推荐角色 */}
                  <div>
                    <h4 className="text-lg font-medium text-text-primary mb-2">⭐ 推荐角色</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedTwisted.recommendedCharacters.map(char => (
                        <span key={char} className="px-3 py-1 bg-accent-main text-white rounded-full text-sm">
                          {char}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 策略指南 */}
                  <div>
                    <h4 className="text-lg font-medium text-text-primary mb-2">🎯 策略指南</h4>
                    <ul className="space-y-2">
                      {selectedTwisted.strategy.map((strategy, index) => (
                        <li key={index} className="text-text-secondary bg-bg-card p-3 rounded-lg">
                          <span className="text-accent-main mr-2">•</span>
                          {strategy}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 实用技巧 */}
                  <div>
                    <h4 className="text-lg font-medium text-text-primary mb-2">💡 实用技巧</h4>
                    <ul className="space-y-2">
                      {selectedTwisted.tips.map((tip, index) => (
                        <li key={index} className="text-text-secondary bg-bg-card p-3 rounded-lg">
                          <span className="text-accent-main mr-2">💡</span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 研究奖励 */}
                  {selectedTwisted.researchBonus && (
                    <div>
                      <h4 className="text-lg font-medium text-text-primary mb-2">🔬 研究奖励</h4>
                      <p className="text-text-secondary bg-bg-card p-3 rounded-lg">
                        {selectedTwisted.researchBonus}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🎭</div>
                <h3 className="text-lg font-medium text-text-primary mb-2">
                  选择Twisted角色
                </h3>
                <p className="text-text-secondary">
                  点击左侧的角色卡片查看详细的解锁攻略和策略指南
                </p>
              </div>
            )}
          </div>
        </div>

        {/* 通用解锁建议 */}
        <div className="mt-12 bg-bg-secondary rounded-lg p-6">
          <h3 className="text-xl font-semibold text-text-primary mb-4">
            🌟 通用解锁建议
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-medium text-text-primary mb-3">📋 解锁前准备</h4>
              <ul className="space-y-2 text-text-secondary">
                <li>• 确保团队角色等级达到要求</li>
                <li>• 收集必要的解锁材料</li>
                <li>• 研究相关章节的攻略</li>
                <li>• 准备足够的恢复道具</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-medium text-text-primary mb-3">⚡ 解锁技巧</h4>
              <ul className="space-y-2 text-text-secondary">
                <li>• 团队协作比单独行动更有效</li>
                <li>• 利用环境优势进行战斗</li>
                <li>• 保持耐心，不要急于求成</li>
                <li>• 记录成功策略供下次使用</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwistedsGuide;
