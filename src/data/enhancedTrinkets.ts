import { EnhancedTrinket } from '../types/trinketOptimizer';

// 增强的饰品数据库
export const enhancedTrinkets: EnhancedTrinket[] = [
  // 攻击型饰品
  {
    id: 'bloodlust-charm',
    name: 'Bloodlust Charm',
    rarity: 'rare',
    type: 'offensive',
    slot: 'primary',
    stats: {
      damage: 15,
      criticalChance: 8,
      criticalDamage: 25,
      skillCheck: 5
    },
    effects: [
      {
        name: 'Blood Rage',
        description: '每次击杀敌人后，攻击力提升10%，持续15秒',
        trigger: 'onKill',
        value: 10,
        duration: 15,
        stackable: true,
        maxStacks: 5,
        condition: '击杀敌人',
        cooldown: 0
      }
    ],
    description: '一个充满血腥气息的护身符，能够激发使用者的战斗欲望。',
    image: '🩸',
    unlockCondition: '完成Blood Moon事件',
    synergies: ['berserker-axe', 'vampire-ring'],
    drawbacks: ['增加受到的伤害5%'],
    bestFor: ['warrior', 'berserker', 'assassin'],
    acquisition: {
      requirements: [
        {
          type: 'event',
          description: '完成Blood Moon事件',
          value: 'Blood Moon Event',
          completed: false
        },
        {
          type: 'achievement',
          description: '击杀100个敌人',
          value: 100,
          completed: false
        }
      ],
      estimatedCost: '150 tapes + 2 hours',
      priority: 'medium',
      alternatives: ['rage-potion', 'berserker-axe'],
      unlockPath: [
        {
          step: 1,
          description: '参与Blood Moon事件',
          requirement: '事件期间在线',
          estimatedTime: '1 hour',
          completed: false
        },
        {
          step: 2,
          description: '击杀50个敌人',
          requirement: '累计击杀数',
          estimatedTime: '30 minutes',
          completed: false
        },
        {
          step: 3,
          description: '完成事件挑战',
          requirement: '达到事件目标',
          estimatedTime: '30 minutes',
          completed: false
        }
      ],
      estimatedTime: '2 hours'
    },
    metaTags: ['damage', 'critical', 'killer', 'blood'],
    difficulty: 'intermediate',
    communityRating: 4.2,
    usageRate: 35
  },
  {
    id: 'lightning-core',
    name: 'Lightning Core',
    rarity: 'epic',
    type: 'offensive',
    slot: 'primary',
    stats: {
      damage: 20,
      speed: 12,
      criticalChance: 12,
      skillCheck: 8
    },
    effects: [
      {
        name: 'Chain Lightning',
        description: '攻击有25%几率触发连锁闪电，对周围敌人造成额外伤害',
        trigger: 'onHit',
        value: 25,
        duration: undefined,
        stackable: false,
        condition: '攻击命中',
        cooldown: 3
      }
    ],
    description: '一个充满电能的晶体核心，能够释放强大的闪电攻击。',
    image: '⚡',
    unlockCondition: '击败Storm Lord',
    synergies: ['thunder-hammer', 'storm-caller'],
    drawbacks: ['在雨天受到额外伤害'],
    bestFor: ['mage', 'elementalist', 'paladin'],
    acquisition: {
      requirements: [
        {
          type: 'boss',
          description: '击败Storm Lord',
          value: 'Storm Lord Boss',
          completed: false
        },
        {
          type: 'level',
          description: '达到15级',
          value: 15,
          completed: false
        }
      ],
      estimatedCost: '300 tapes + 5 hours',
      priority: 'high',
      alternatives: ['thunder-hammer', 'storm-caller'],
      unlockPath: [
        {
          step: 1,
          description: '达到15级',
          requirement: '角色等级',
          estimatedTime: '3 hours',
          completed: false
        },
        {
          step: 2,
          description: '找到Storm Lord位置',
          requirement: '探索地图',
          estimatedTime: '1 hour',
          completed: false
        },
        {
          step: 3,
          description: '击败Storm Lord',
          requirement: 'Boss战胜利',
          estimatedTime: '1 hour',
          completed: false
        }
      ],
      estimatedTime: '5 hours'
    },
    metaTags: ['lightning', 'chain', 'elemental', 'boss'],
    difficulty: 'advanced',
    communityRating: 4.5,
    usageRate: 28
  },
  {
    id: 'stealth-cloak',
    name: 'Stealth Cloak',
    rarity: 'rare',
    type: 'utility',
    slot: 'secondary',
    stats: {
      dodgeChance: 15,
      speed: 10,
      stealth: 25,
      skillCheck: 12
    },
    effects: [
      {
        name: 'Shadow Step',
        description: '进入隐身状态，持续10秒，期间移动速度提升50%',
        trigger: 'passive',
        value: 50,
        duration: 10,
        stackable: false,
        condition: '非战斗状态',
        cooldown: 30
      }
    ],
    description: '一件能够隐藏使用者身形的斗篷，适合潜行和逃脱。',
    image: '👻',
    unlockCondition: '完成Stealth Mission',
    synergies: ['silent-boots', 'shadow-dagger'],
    drawbacks: ['在强光下效果减弱'],
    bestFor: ['assassin', 'rogue', 'scout'],
    acquisition: {
      requirements: [
        {
          type: 'achievement',
          description: '完成Stealth Mission',
          value: 'Stealth Mission',
          completed: false
        },
        {
          type: 'research',
          description: '100% Twisted Toodles研究',
          value: '100% Research',
          completed: false
        }
      ],
      estimatedCost: '200 tapes + 3 hours',
      priority: 'medium',
      alternatives: ['silent-boots', 'shadow-dagger'],
      unlockPath: [
        {
          step: 1,
          description: '完成Twisted Toodles研究',
          requirement: '研究进度100%',
          estimatedTime: '2 hours',
          completed: false
        },
        {
          step: 2,
          description: '接受Stealth Mission',
          requirement: '与NPC对话',
          estimatedTime: '10 minutes',
          completed: false
        },
        {
          step: 3,
          description: '完成潜行任务',
          requirement: '不被发现完成任务',
          estimatedTime: '50 minutes',
          completed: false
        }
      ],
      estimatedTime: '3 hours'
    },
    metaTags: ['stealth', 'escape', 'utility', 'defensive'],
    difficulty: 'intermediate',
    communityRating: 4.3,
    usageRate: 42
  },
  {
    id: 'extraction-expert',
    name: 'Extraction Expert',
    rarity: 'epic',
    type: 'utility',
    slot: 'primary',
    stats: {
      extractionSpeed: 40,
      skillCheck: 25,
      speed: 15,
      stamina: 20
    },
    effects: [
      {
        name: 'Quick Extraction',
        description: '提取速度提升40%，技能检查成功率提升25%',
        trigger: 'passive',
        value: 40,
        duration: undefined,
        stackable: false,
        condition: '进行提取',
        cooldown: 0
      }
    ],
    description: '专门提升提取效率的饰品，适合快速完成目标的玩家。',
    image: '🚀',
    unlockCondition: '完成100次成功提取',
    synergies: ['extraction-boost', 'stamina-booster'],
    drawbacks: ['降低战斗能力'],
    bestFor: ['extractor', 'support', 'balanced'],
    acquisition: {
      requirements: [
        {
          type: 'achievement',
          description: '完成100次成功提取',
          value: 100,
          completed: false
        },
        {
          type: 'research',
          description: '50% Twisted Dandy研究',
          value: '50% Research',
          completed: false
        }
      ],
      estimatedCost: '100 tapes + 8 hours',
      priority: 'high',
      alternatives: ['extraction-boost', 'lucky-charm'],
      unlockPath: [
        {
          step: 1,
          description: '开始Twisted Dandy研究',
          requirement: '研究进度50%',
          estimatedTime: '4 hours',
          completed: false
        },
        {
          step: 2,
          description: '进行提取任务',
          requirement: '累计100次成功',
          estimatedTime: '4 hours',
          completed: false
        }
      ],
      estimatedTime: '8 hours'
    },
    metaTags: ['extraction', 'speed', 'skill', 'objective'],
    difficulty: 'beginner',
    communityRating: 4.7,
    usageRate: 65
  },
  {
    id: 'distraction-master',
    name: 'Distraction Master',
    rarity: 'epic',
    type: 'utility',
    slot: 'primary',
    stats: {
      distractionEffectiveness: 35,
      speed: 20,
      stealth: 15,
      skillCheck: 18
    },
    effects: [
      {
        name: 'Master Distraction',
        description: '干扰效果提升35%，移动速度提升20%',
        trigger: 'passive',
        value: 35,
        duration: undefined,
        stackable: false,
        condition: '进行干扰',
        cooldown: 0
      }
    ],
    description: '专家级干扰饰品，能够创建有效的干扰并快速逃脱。',
    image: '🎭',
    unlockCondition: '完成Distraction Challenge',
    synergies: ['distraction-field', 'quick-escape'],
    drawbacks: ['降低直接战斗能力'],
    bestFor: ['distractor', 'scout', 'support'],
    acquisition: {
      requirements: [
        {
          type: 'achievement',
          description: '完成Distraction Challenge',
          value: 'Distraction Challenge',
          completed: false
        },
        {
          type: 'research',
          description: '75% Twisted Bobette研究',
          value: '75% Research',
          completed: false
        }
      ],
      estimatedCost: '250 tapes + 4 hours',
      priority: 'medium',
      alternatives: ['distraction-field', 'stealth-cloak'],
      unlockPath: [
        {
          step: 1,
          description: '推进Twisted Bobette研究',
          requirement: '研究进度75%',
          estimatedTime: '2 hours',
          completed: false
        },
        {
          step: 2,
          description: '接受干扰挑战',
          requirement: '与挑战NPC对话',
          estimatedTime: '15 minutes',
          completed: false
        },
        {
          step: 3,
          description: '完成干扰挑战',
          requirement: '成功干扰10个敌人',
          estimatedTime: '1.5 hours',
          completed: false
        }
      ],
      estimatedTime: '4 hours'
    },
    metaTags: ['distraction', 'escape', 'utility', 'team'],
    difficulty: 'intermediate',
    communityRating: 4.4,
    usageRate: 38
  },
  {
    id: 'support-aura',
    name: 'Support Aura',
    rarity: 'epic',
    type: 'utility',
    slot: 'tertiary',
    stats: {
      teamSupport: 30,
      healingBonus: 25,
      stamina: 15,
      skillCheck: 10
    },
    effects: [
      {
        name: 'Support Field',
        description: '为附近队友提供30%的团队支援效果，治疗效果提升25%',
        trigger: 'passive',
        value: 30,
        duration: undefined,
        stackable: false,
        condition: '队友在范围内',
        cooldown: 0
      }
    ],
    description: '一个充满正能量的光环，能够帮助你的团队。',
    image: '💫',
    unlockCondition: '完成Support Trial',
    synergies: ['team-link', 'healing-spring'],
    drawbacks: ['降低个人战斗能力'],
    bestFor: ['support', 'healer', 'paladin'],
    acquisition: {
      requirements: [
        {
          type: 'achievement',
          description: '完成Support Trial',
          value: 'Support Trial',
          completed: false
        },
        {
          type: 'research',
          description: '100% Twisted Astro研究',
          value: '100% Research',
          completed: false
        }
      ],
      estimatedCost: '300 tapes + 5 hours',
      priority: 'high',
      alternatives: ['team-link', 'healing-spring'],
      unlockPath: [
        {
          step: 1,
          description: '完成Twisted Astro研究',
          requirement: '研究进度100%',
          estimatedTime: '3 hours',
          completed: false
        },
        {
          step: 2,
          description: '接受支援试炼',
          requirement: '与试炼NPC对话',
          estimatedTime: '15 minutes',
          completed: false
        },
        {
          step: 3,
          description: '完成支援试炼',
          requirement: '成功支援5个队友',
          estimatedTime: '1.5 hours',
          completed: false
        }
      ],
      estimatedTime: '5 hours'
    },
    metaTags: ['support', 'team', 'healing', 'utility'],
    difficulty: 'intermediate',
    communityRating: 4.6,
    usageRate: 45
  }
];

// 获取饰品数据的工具函数
export const getEnhancedTrinketById = (id: string): EnhancedTrinket | undefined => {
  return enhancedTrinkets.find(trinket => trinket.id === id);
};

export const getEnhancedTrinketsBySlot = (slot: 'primary' | 'secondary' | 'tertiary'): EnhancedTrinket[] => {
  return enhancedTrinkets.filter(trinket => trinket.slot === slot);
};

export const getEnhancedTrinketsByRarity = (rarity: string): EnhancedTrinket[] => {
  return enhancedTrinkets.filter(trinket => trinket.rarity === rarity);
};

export const getEnhancedTrinketsByType = (type: string): EnhancedTrinket[] => {
  return enhancedTrinkets.filter(trinket => trinket.type === type);
};

export const getEnhancedTrinketsByDifficulty = (difficulty: string): EnhancedTrinket[] => {
  return enhancedTrinkets.filter(trinket => trinket.difficulty === difficulty);
};

export const getEnhancedTrinketsByMetaTag = (tag: string): EnhancedTrinket[] => {
  return enhancedTrinkets.filter(trinket => trinket.metaTags.includes(tag));
};

export const getEnhancedTrinketsForCharacter = (characterType: string): EnhancedTrinket[] => {
  return enhancedTrinkets.filter(trinket => trinket.bestFor.includes(characterType));
};

export const searchEnhancedTrinkets = (query: string): EnhancedTrinket[] => {
  const lowerQuery = query.toLowerCase();
  return enhancedTrinkets.filter(trinket => 
    trinket.name.toLowerCase().includes(lowerQuery) ||
    trinket.description.toLowerCase().includes(lowerQuery) ||
    trinket.metaTags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
};
