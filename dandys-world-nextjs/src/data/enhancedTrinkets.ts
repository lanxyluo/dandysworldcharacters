import { EnhancedTrinket } from '../types/trinketOptimizer';

// TODO: update
export const enhancedTrinkets: EnhancedTrinket[] = [
  // TODO: update
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
        description: 'Translation pending',
        trigger: 'onKill',
        value: 10,
        duration: 15,
        stackable: true,
        maxStacks: 5,
        condition: 'Translation pending',
        cooldown: 0
      }
    ],
    description: 'Translation pending',
    image: '🩸',
    unlockCondition: 'Translation pending',
    synergies: ['berserker-axe', 'vampire-ring'],
    drawbacks: ['Translation pending'],
    bestFor: ['warrior', 'berserker', 'assassin'],
    acquisition: {
      requirements: [
        {
          type: 'event',
          description: 'Translation pending',
          value: 'Blood Moon Event',
          completed: false
        },
        {
          type: 'achievement',
          description: 'Translation pending',
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
          description: 'Translation pending',
          requirement: 'Translation pending',
          estimatedTime: '1 hour',
          completed: false
        },
        {
          step: 2,
          description: 'Translation pending',
          requirement: 'Translation pending',
          estimatedTime: '30 minutes',
          completed: false
        },
        {
          step: 3,
          description: 'Translation pending',
          requirement: 'Translation pending',
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
        description: 'Translation pending',
        trigger: 'onHit',
        value: 25,
        duration: undefined,
        stackable: false,
        condition: 'Translation pending',
        cooldown: 3
      }
    ],
    description: 'Translation pending',
    image: '⚡',
    unlockCondition: 'Translation pending',
    synergies: ['thunder-hammer', 'storm-caller'],
    drawbacks: ['Translation pending'],
    bestFor: ['mage', 'elementalist', 'paladin'],
    acquisition: {
      requirements: [
        {
          type: 'boss',
          description: 'Translation pending',
          value: 'Storm Lord Boss',
          completed: false
        },
        {
          type: 'level',
          description: 'Translation pending',
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
          description: 'Translation pending',
          requirement: 'Translation pending',
          estimatedTime: '3 hours',
          completed: false
        },
        {
          step: 2,
          description: 'Translation pending',
          requirement: 'Translation pending',
          estimatedTime: '1 hour',
          completed: false
        },
        {
          step: 3,
          description: 'Translation pending',
          requirement: 'Translation pending',
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
        description: 'Translation pending',
        trigger: 'passive',
        value: 50,
        duration: 10,
        stackable: false,
        condition: 'Translation pending',
        cooldown: 30
      }
    ],
    description: 'Translation pending',
    image: '👻',
    unlockCondition: 'Translation pending',
    synergies: ['silent-boots', 'shadow-dagger'],
    drawbacks: ['Translation pending'],
    bestFor: ['assassin', 'rogue', 'scout'],
    acquisition: {
      requirements: [
        {
          type: 'achievement',
          description: 'Translation pending',
          value: 'Stealth Mission',
          completed: false
        },
        {
          type: 'research',
          description: 'Translation pending',
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
          description: 'Translation pending',
          requirement: 'Translation pending',
          estimatedTime: '2 hours',
          completed: false
        },
        {
          step: 2,
          description: 'Translation pending',
          requirement: 'Translation pending',
          estimatedTime: '10 minutes',
          completed: false
        },
        {
          step: 3,
          description: 'Translation pending',
          requirement: 'Translation pending',
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
        description: 'Translation pending',
        trigger: 'passive',
        value: 40,
        duration: undefined,
        stackable: false,
        condition: 'Translation pending',
        cooldown: 0
      }
    ],
    description: 'Translation pending',
    image: '🚀',
    unlockCondition: 'Translation pending',
    synergies: ['extraction-boost', 'stamina-booster'],
    drawbacks: ['Translation pending'],
    bestFor: ['extractor', 'support', 'balanced'],
    acquisition: {
      requirements: [
        {
          type: 'achievement',
          description: 'Translation pending',
          value: 100,
          completed: false
        },
        {
          type: 'research',
          description: 'Translation pending',
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
          description: 'Translation pending',
          requirement: 'Translation pending',
          estimatedTime: '4 hours',
          completed: false
        },
        {
          step: 2,
          description: 'Translation pending',
          requirement: 'Translation pending',
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
        description: 'Translation pending',
        trigger: 'passive',
        value: 35,
        duration: undefined,
        stackable: false,
        condition: 'Translation pending',
        cooldown: 0
      }
    ],
    description: 'Translation pending',
    image: '🎭',
    unlockCondition: 'Translation pending',
    synergies: ['distraction-field', 'quick-escape'],
    drawbacks: ['Translation pending'],
    bestFor: ['distractor', 'scout', 'support'],
    acquisition: {
      requirements: [
        {
          type: 'achievement',
          description: 'Translation pending',
          value: 'Distraction Challenge',
          completed: false
        },
        {
          type: 'research',
          description: 'Translation pending',
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
          description: 'Translation pending',
          requirement: 'Translation pending',
          estimatedTime: '2 hours',
          completed: false
        },
        {
          step: 2,
          description: 'Translation pending',
          requirement: 'Translation pending',
          estimatedTime: '15 minutes',
          completed: false
        },
        {
          step: 3,
          description: 'Translation pending',
          requirement: 'Translation pending',
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
        description: 'Translation pending',
        trigger: 'passive',
        value: 30,
        duration: undefined,
        stackable: false,
        condition: 'Translation pending',
        cooldown: 0
      }
    ],
    description: 'Translation pending',
    image: '💫',
    unlockCondition: 'Translation pending',
    synergies: ['team-link', 'healing-spring'],
    drawbacks: ['Translation pending'],
    bestFor: ['support', 'healer', 'paladin'],
    acquisition: {
      requirements: [
        {
          type: 'achievement',
          description: 'Translation pending',
          value: 'Support Trial',
          completed: false
        },
        {
          type: 'research',
          description: 'Translation pending',
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
          description: 'Translation pending',
          requirement: 'Translation pending',
          estimatedTime: '3 hours',
          completed: false
        },
        {
          step: 2,
          description: 'Translation pending',
          requirement: 'Translation pending',
          estimatedTime: '15 minutes',
          completed: false
        },
        {
          step: 3,
          description: 'Translation pending',
          requirement: 'Translation pending',
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

// TODO: update
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