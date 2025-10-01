export interface TrinketEffect {
  name: string;
  description: string;
  trigger: 'passive' | 'active' | 'on-floor' | 'on-hit' | 'on-pickup';
  value?: number;
  duration?: number;
  stackable?: boolean;
}

export interface Trinket {
  id: string;
  name: string;
  rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
  type: 'skill-check' | 'movement' | 'stamina' | 'stealth' | 'extraction' | 'other';
  slot: 'primary' | 'secondary';
  stats: {
    damage?: number;
    survival?: number;
    utility?: number;
    teamSupport?: number;
    [extraStat: string]: number | undefined;
  };
  effects: TrinketEffect[];
  description: string;
  image: string;
  unlockCondition?: string;
  acquisition: {
    difficulty: 'easy' | 'moderate' | 'hard';
    estimatedCost: string;
    sources: string[];
    timeToFarm?: string;
  };
  synergies: string[];
  drawbacks: string[];
  bestFor: string[];
}

export const trinkets: Trinket[] = [
  {
    id: 'dog-plush',
    name: 'Dog Plush',
    rarity: 'common',
    type: 'movement',
    slot: 'primary',
    stats: { utility: 8, teamSupport: 2 },
    effects: [
      {
        name: 'Walk Speed Boost',
        description: '提升10%步行速度',
        trigger: 'passive',
        value: 10,
        stackable: true,
      },
    ],
    description: 'Increases walking speed, ideal for distraction plays and quick repositioning.',
    image: '🐕',
    acquisition: {
      difficulty: 'easy',
      estimatedCost: '400 Ichor',
      sources: ['Dandy Shop'],
      timeToFarm: '2-3 runs',
    },
    synergies: ['pink-bow', 'speedy-shoes'],
    drawbacks: ['Only affects walking speed; sprint speed is unchanged.'],
    bestFor: ['distractor', 'support', 'balanced'],
  },
  {
    id: 'pink-bow',
    name: 'Pink Bow',
    rarity: 'common',
    type: 'movement',
    slot: 'secondary',
    stats: { utility: 6, teamSupport: 1 },
    effects: [
      {
        name: 'Run Speed Boost',
        description: '提升7.5%跑步速度',
        trigger: 'passive',
        value: 7.5,
        stackable: true,
      },
    ],
    description: 'Boosts sprint speed to aid escapes and mobility plays.',
    image: '🎀',
    acquisition: {
      difficulty: 'easy',
      estimatedCost: '325 Ichor',
      sources: ['Dandy Shop'],
      timeToFarm: '2-3 runs',
    },
    synergies: ['dog-plush', 'speedy-shoes'],
    drawbacks: ['Provides no benefit while walking.'],
    bestFor: ['distractor', 'extractor', 'balanced'],
  },
  {
    id: 'speedy-shoes',
    name: 'Speedy Shoes',
    rarity: 'uncommon',
    type: 'movement',
    slot: 'primary',
    stats: { utility: 10, survival: 3 },
    effects: [
      {
        name: 'Universal Speed Boost',
        description: '提升5%步行和跑步速度',
        trigger: 'passive',
        value: 5,
        stackable: true,
      },
    ],
    description: 'Modest but universal speed boost for balanced playstyles.',
    image: '👟',
    acquisition: {
      difficulty: 'moderate',
      estimatedCost: '1250 Ichor',
      sources: ['Dandy Shop'],
      timeToFarm: '5-6 runs',
    },
    synergies: ['dog-plush', 'pink-bow'],
    drawbacks: ['Lower ceiling compared with specialized trinkets.'],
    bestFor: ['balanced', 'distractor'],
  },
  {
    id: 'vees-remote',
    name: "Vee's Remote",
    rarity: 'rare',
    type: 'extraction',
    slot: 'primary',
    stats: { utility: 15, teamSupport: 5 },
    effects: [
      {
        name: 'Instant Complete',
        description: '每层可以瞬间完成一台机器',
        trigger: 'active',
        value: 100,
        duration: 0,
        stackable: false,
      },
    ],
    description: 'Powerful extraction tool that instantly completes a single machine per floor.',
    image: '📱',
    acquisition: {
      difficulty: 'hard',
      estimatedCost: '2750 Ichor + 100% Twisted Goob research + 100% Twisted Scraps research',
      sources: ['Dandy Shop'],
      timeToFarm: '10-15 runs',
    },
    synergies: ['magnifying-glass', 'participation-award'],
    drawbacks: ['Limited to one use per floor and extremely expensive.'],
    bestFor: ['extractor', 'support'],
  },
  {
    id: 'wrench',
    name: 'Wrench',
    rarity: 'uncommon',
    type: 'extraction',
    slot: 'secondary',
    stats: { utility: 8, survival: 2 },
    effects: [
      {
        name: 'Extraction Boost',
        description: '如果机器完成度低于50%，提升25%提取速度',
        trigger: 'passive',
        value: 25,
        stackable: false,
      },
    ],
    description: 'Provides a burst of extraction speed while machines are below 50% progress.',
    image: '🔧',
    acquisition: {
      difficulty: 'moderate',
      estimatedCost: '350 Ichor',
      sources: ['Dandy Shop'],
      timeToFarm: '3-4 runs',
    },
    synergies: ['vees-remote', 'machine-manual'],
    drawbacks: ['Effect fades once the machine passes the halfway mark.'],
    bestFor: ['extractor', 'balanced'],
  },
  {
    id: 'magnifying-glass',
    name: 'Magnifying Glass',
    rarity: 'common',
    type: 'skill-check',
    slot: 'primary',
    stats: { utility: 12, survival: 1 },
    effects: [
      {
        name: 'Skill Check Bonus',
        description: '增加技能检查频率和成功奖励，但缩小检查窗口',
        trigger: 'passive',
        value: 20,
        stackable: true,
      },
    ],
    description: 'Improves skill-check rewards at the cost of tighter timing windows.',
    image: '🔍',
    acquisition: {
      difficulty: 'easy',
      estimatedCost: '750 Ichor',
      sources: ['Dandy Shop'],
      timeToFarm: '3-4 runs',
    },
    synergies: ['participation-award', 'thinking-cap'],
    drawbacks: ['Shrinks the skill-check window significantly.'],
    bestFor: ['extractor', 'skill-focused'],
  },
  {
    id: 'participation-award',
    name: 'Participation Award',
    rarity: 'uncommon',
    type: 'skill-check',
    slot: 'secondary',
    stats: { utility: 10, teamSupport: 3 },
    effects: [
      {
        name: 'Skill Check Enhancement',
        description: '成功技能检查提供20%额外完成度',
        trigger: 'passive',
        value: 20,
        stackable: true,
      },
    ],
    description: 'Boosts completion granted by each successful skill check.',
    image: '🏆',
    acquisition: {
      difficulty: 'moderate',
      estimatedCost: '1250 Ichor + 100% research on any Twisted',
      sources: ['Dandy Shop'],
      timeToFarm: '6-8 runs',
    },
    synergies: ['magnifying-glass', 'vees-remote'],
    drawbacks: ['Requires consistent skill-check success to shine.'],
    bestFor: ['extractor', 'high-skill-characters'],
  },
  {
    id: 'thinking-cap',
    name: 'Thinking Cap',
    rarity: 'common',
    type: 'skill-check',
    slot: 'primary',
    stats: { utility: 6, survival: 4 },
    effects: [
      {
        name: 'Larger Skill Check',
        description: '增大技能检查窗口40单位',
        trigger: 'passive',
        value: 40,
        stackable: false,
      },
    ],
    description: 'Widens the skill-check window, perfect for newer players.',
    image: '🎓',
    acquisition: {
      difficulty: 'easy',
      estimatedCost: '450 Ichor',
      sources: ['Dandy Shop'],
      timeToFarm: '2-3 runs',
    },
    synergies: ['blue-bandana', 'mime-makeup'],
    drawbacks: ['Does not increase skill-check frequency or reward.'],
    bestFor: ['beginner', 'low-skill-characters'],
  },
  {
    id: 'star-pillow',
    name: 'Star Pillow',
    rarity: 'rare',
    type: 'stamina',
    slot: 'primary',
    stats: { survival: 15, utility: 5 },
    effects: [
      {
        name: 'Stamina Regeneration',
        description: '提升100%体力恢复速度',
        trigger: 'passive',
        value: 100,
        stackable: true,
      },
    ],
    description: 'Dramatically improves stamina regeneration for extended activity.',
    image: '🌟',
    acquisition: {
      difficulty: 'hard',
      estimatedCost: '2250 Ichor + collect 30 rare items',
      sources: ['Dandy Shop'],
      timeToFarm: '8-12 runs',
    },
    synergies: ['cooler', 'thermos'],
    drawbacks: ['Does not increase max stamina.'],
    bestFor: ['high-stamina-characters', 'support'],
  },
  {
    id: 'thermos',
    name: 'Thermos',
    rarity: 'uncommon',
    type: 'stamina',
    slot: 'secondary',
    stats: { survival: 10, utility: 3 },
    effects: [
      {
        name: 'Stamina Boost',
        description: '增加15体力上限，15%恢复速度',
        trigger: 'passive',
        value: 15,
        stackable: true,
      },
    ],
    description: 'Adds a small amount of max stamina and improves recovery.',
    image: '🍵',
    acquisition: {
      difficulty: 'moderate',
      estimatedCost: '1500 Ichor + reach floor 20',
      sources: ['Dandy Shop'],
      timeToFarm: '5-7 runs',
    },
    synergies: ['star-pillow', 'speedometer'],
    drawbacks: ['Moderate bonus compared with rarer options.'],
    bestFor: ['balanced', 'survival'],
  },
  {
    id: 'diary',
    name: 'Diary',
    rarity: 'uncommon',
    type: 'stealth',
    slot: 'primary',
    stats: { survival: 12, utility: 3 },
    effects: [
      {
        name: 'Stealth Boost',
        description: '提升25%隐身值',
        trigger: 'passive',
        value: 25,
        stackable: true,
      },
    ],
    description: 'Raises stealth rating to cut down on detection risk.',
    image: '📔',
    acquisition: {
      difficulty: 'moderate',
      estimatedCost: '1850 Ichor + evade 100 Twisted encounters',
      sources: ['Dandy Shop'],
      timeToFarm: '6-8 runs',
    },
    synergies: ['coal-trinket', 'scrapbook'],
    drawbacks: ['Reduces performance for characters with negative stealth mechanics.'],
    bestFor: ['stealth-characters', 'survival'],
  },
  {
    id: 'dandy-plush',
    name: 'Dandy Plush',
    rarity: 'rare',
    type: 'other',
    slot: 'primary',
    stats: { utility: 8, teamSupport: 12 },
    effects: [
      {
        name: 'Shop Discount',
        description: 'Dandy商店物品半价',
        trigger: 'passive',
        value: 50,
        stackable: false,
      },
    ],
    description: 'Cuts Dandy Shop costs in half, great for resource-focused teams.',
    image: '🌻',
    acquisition: {
      difficulty: 'hard',
      estimatedCost: '1850 Ichor + reach floor 20',
      sources: ['Dandy Shop'],
      timeToFarm: '8-10 runs',
    },
    synergies: ['coin-purse', 'fancy-purse'],
    drawbacks: ['Provides no direct combat power.'],
    bestFor: ['support', 'team-utility'],
  },
  {
    id: 'research-map',
    name: 'Research Map',
    rarity: 'common',
    type: 'other',
    slot: 'secondary',
    stats: { utility: 5, teamSupport: 3 },
    effects: [
      {
        name: 'Research Boost',
        description: '每10秒生成研究胶囊',
        trigger: 'passive',
        value: 1,
        stackable: false,
      },
    ],
    description: 'Generates research capsules over time to accelerate unlocks.',
    image: '🗺️',
    acquisition: {
      difficulty: 'easy',
      estimatedCost: '200 Ichor',
      sources: ['Dandy Shop'],
      timeToFarm: '1-2 runs',
    },
    synergies: [],
    drawbacks: ['Capsule generation is slow.'],
    bestFor: ['research-focused', 'long-runs'],
  },
  {
    id: 'machine-manual',
    name: 'Machine Manual',
    rarity: 'common',
    type: 'extraction',
    slot: 'secondary',
    stats: { utility: 7, survival: 1 },
    effects: [
      {
        name: 'Machine Completion',
        description: '每层自动完成5%的机器进度',
        trigger: 'on-floor',
        value: 5,
        stackable: false,
      },
    ],
    description: 'Grants a small amount of machine progress each floor.',
    image: '📖',
    acquisition: {
      difficulty: 'easy',
      estimatedCost: '200 Ichor',
      sources: ['Dandy Shop'],
      timeToFarm: '1-2 runs',
    },
    synergies: ['wrench', 'vees-remote'],
    drawbacks: ['Effect is modest compared with other extraction tools.'],
    bestFor: ['beginner', 'utility'],
  },
];
