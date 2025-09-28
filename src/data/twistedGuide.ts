import { Twisted } from '../types/twisted';

// TODO: update
export interface TwistedStrategy {
  id: string;
  twistedId: string; // TODO: update
  name: string;
  type: 'survival' | 'combat' | 'stealth' | 'teamwork' | 'escape';
  difficulty: 'easy' | 'medium' | 'hard' | 'expert';
  description: string;
  steps: string[];
  requirements: string[];
  risks: string[];
  rewards: string[];
  tips: string[];
  counterStrategies: string[]; // TODO: update
}

export interface TeamComposition {
  id: string;
  name: string;
  description: string;
  roles: TeamRole[];
  strategies: string[];
  advantages: string[];
  disadvantages: string[];
  recommendedCharacters: string[];
}

export interface TeamRole {
  role: string;
  responsibilities: string[];
  requiredSkills: string[];
  recommendedCharacters: string[];
  equipment: string[];
}

export interface SurvivalKit {
  id: string;
  name: string;
  type: 'basic' | 'advanced' | 'expert';
  items: SurvivalItem[];
  description: string;
  craftingRequirements: string[];
  weight: number; // TODO: update
  durability: number; // TODO: update
}

export interface SurvivalItem {
  name: string;
  type: 'tool' | 'weapon' | 'consumable' | 'armor' | 'special';
  effect: string;
  quantity: number;
  weight: number;
  craftingMaterials: string[];
}

export interface TwistedEncounter {
  id: string;
  name: string;
  twistedIds: string[]; // TODO: update
  location: string;
  difficulty: 'low' | 'medium' | 'high' | 'extreme';
  timeOfDay: 'day' | 'night' | 'any';
  weatherConditions: string[];
  objectives: string[];
  rewards: string[];
  risks: string[];
  recommendedLevel: number;
  teamSize: {
    min: number;
    max: number;
    optimal: number;
  };
}

// TODO: update
export const twistedStrategies: TwistedStrategy[] = [
  // TODO: update
  {
    id: 'shadow-stalker-light-strategy',
    twistedId: 'shadow-stalker',
    name: 'Translation pending',
    type: 'survival',
    difficulty: 'medium',
    description: 'Translation pending',
    steps: [
      'Translation pending',
      'Translation pending',
      'Translation pending',
      'Translation pending',
      'Translation pending'
    ],
    requirements: ['Translation pending', 'Translation pending', 'Translation pending'],
    risks: ['Translation pending', 'Translation pending', 'Translation pending'],
    rewards: ['Translation pending', 'Translation pending', 'Translation pending'],
    tips: [
      'Translation pending',
      'Translation pending',
      'Translation pending',
      'Translation pending'
    ],
    counterStrategies: ['Translation pending', 'Translation pending', 'Translation pending']
  },
  {
    id: 'shadow-stalker-sound-strategy',
    twistedId: 'shadow-stalker',
    name: 'Translation pending',
    type: 'stealth',
    difficulty: 'hard',
    description: 'Translation pending',
    steps: [
      'Translation pending',
      'Translation pending',
      'Translation pending',
      'Translation pending',
      'Translation pending'
    ],
    requirements: ['Translation pending', 'Translation pending', 'Translation pending'],
    risks: ['Translation pending', 'Translation pending', 'Translation pending'],
    rewards: ['Translation pending', 'Translation pending', 'Translation pending'],
    tips: [
      'Translation pending',
      'Translation pending',
      'Translation pending',
      'Translation pending'
    ],
    counterStrategies: ['Translation pending', 'Translation pending', 'Translation pending']
  },

  // TODO: update
  {
    id: 'mind-screecher-mental-defense',
    twistedId: 'mind-screecher',
    name: 'Translation pending',
    type: 'survival',
    difficulty: 'expert',
    description: 'Translation pending',
    steps: [
      'Translation pending',
      'Translation pending',
      'Translation pending',
      'Translation pending',
      'Translation pending'
    ],
    requirements: ['Translation pending', 'Translation pending', 'Translation pending', 'Translation pending'],
    risks: ['Translation pending', 'Translation pending', 'Translation pending'],
    rewards: ['Translation pending', 'Translation pending', 'Translation pending'],
    tips: [
      'Translation pending',
      'Translation pending',
      'Translation pending',
      'Translation pending'
    ],
    counterStrategies: ['Translation pending', 'Translation pending', 'Translation pending']
  },

  // TODO: update
  {
    id: 'flesh-ripper-environmental-strategy',
    twistedId: 'flesh-ripper',
    name: 'Translation pending',
    type: 'combat',
    difficulty: 'hard',
    description: 'Translation pending',
    steps: [
      'Translation pending',
      'Translation pending',
      'Translation pending',
      'Translation pending',
      'Translation pending'
    ],
    requirements: ['Translation pending', 'Translation pending', 'Translation pending'],
    risks: ['Translation pending', 'Translation pending', 'Translation pending'],
    rewards: ['Translation pending', 'Translation pending', 'Translation pending'],
    tips: [
      'Translation pending',
      'Translation pending',
      'Translation pending',
      'Translation pending'
    ],
    counterStrategies: ['Translation pending', 'Translation pending', 'Translation pending']
  },

  // TODO: update
  {
    id: 'patrol-watcher-stealth-strategy',
    twistedId: 'patrol-watcher',
    name: 'Translation pending',
    type: 'stealth',
    difficulty: 'medium',
    description: 'Translation pending',
    steps: [
      'Translation pending',
      'Translation pending',
      'Translation pending',
      'Translation pending',
      'Translation pending'
    ],
    requirements: ['Translation pending', 'Translation pending', 'Translation pending', 'Translation pending'],
    risks: ['Translation pending', 'Translation pending', 'Translation pending'],
    rewards: ['Translation pending', 'Translation pending', 'Translation pending'],
    tips: [
      'Translation pending',
      'Translation pending',
      'Translation pending',
      'Translation pending'
    ],
    counterStrategies: ['Translation pending', 'Translation pending', 'Translation pending']
  }
];

// TODO: update
export const teamCompositions: TeamComposition[] = [
  {
    id: 'balanced-team',
    name: 'Translation pending',
    description: 'Translation pending',
    roles: [
      {
        role: 'Translation pending',
        responsibilities: ['Translation pending', 'Translation pending', 'Translation pending'],
        requiredSkills: ['Translation pending', 'Translation pending', 'Translation pending'],
        recommendedCharacters: ['warrior', 'berserker', 'paladin'],
        equipment: ['Translation pending', 'Translation pending', 'Translation pending']
      },
      {
        role: 'Translation pending',
        responsibilities: ['Translation pending', 'Translation pending', 'Translation pending'],
        requiredSkills: ['Translation pending', 'Translation pending', 'Translation pending'],
        recommendedCharacters: ['healer', 'mage', 'support'],
        equipment: ['Translation pending', 'Translation pending', 'Translation pending']
      },
      {
        role: 'Translation pending',
        responsibilities: ['Translation pending', 'Translation pending', 'Translation pending'],
        requiredSkills: ['Translation pending', 'Translation pending', 'Translation pending'],
        recommendedCharacters: ['assassin', 'rogue', 'scout'],
        equipment: ['Translation pending', 'Translation pending', 'Translation pending']
      }
    ],
    strategies: [
      'Translation pending',
      'Translation pending',
      'Translation pending'
    ],
    advantages: ['Translation pending', 'Translation pending', 'Translation pending'],
    disadvantages: ['Translation pending', 'Translation pending', 'Translation pending'],
    recommendedCharacters: ['warrior', 'healer', 'assassin']
  },
  {
    id: 'offensive-team',
    name: 'Translation pending',
    description: 'Translation pending',
    roles: [
      {
        role: 'Translation pending',
        responsibilities: ['Translation pending', 'Translation pending', 'Translation pending'],
        requiredSkills: ['Translation pending', 'Translation pending', 'Translation pending'],
        recommendedCharacters: ['berserker', 'assassin', 'warrior'],
        equipment: ['Translation pending', 'Translation pending', 'Translation pending']
      },
      {
        role: 'Translation pending',
        responsibilities: ['Translation pending', 'Translation pending', 'Translation pending'],
        requiredSkills: ['Translation pending', 'Translation pending', 'Translation pending'],
        recommendedCharacters: ['mage', 'paladin', 'rogue'],
        equipment: ['Translation pending', 'Translation pending', 'Translation pending']
      }
    ],
    strategies: [
      'Translation pending',
      'Translation pending',
      'Translation pending'
    ],
    advantages: ['Translation pending', 'Translation pending', 'Translation pending'],
    disadvantages: ['Translation pending', 'Translation pending', 'Translation pending'],
    recommendedCharacters: ['berserker', 'mage', 'assassin']
  }
];

// TODO: update
export const survivalKits: SurvivalKit[] = [
  {
    id: 'basic-survival-kit',
    name: 'Translation pending',
    type: 'basic',
    items: [
      {
        name: 'Translation pending',
        type: 'consumable',
        effect: 'Translation pending',
        quantity: 3,
        weight: 1,
        craftingMaterials: ['Translation pending', 'Translation pending', 'Translation pending']
      },
      {
        name: 'Translation pending',
        type: 'tool',
        effect: 'Translation pending',
        quantity: 1,
        weight: 0.5,
        craftingMaterials: ['Translation pending', 'Translation pending', 'Translation pending']
      },
      {
        name: 'Translation pending',
        type: 'tool',
        effect: 'Translation pending',
        quantity: 1,
        weight: 0.3,
        craftingMaterials: ['Translation pending', 'Translation pending']
      }
    ],
    description: 'Translation pending',
    craftingRequirements: ['Translation pending', 'Translation pending'],
    weight: 2.5,
    durability: 80
  },
  {
    id: 'advanced-survival-kit',
    name: 'Translation pending',
    type: 'advanced',
    items: [
      {
        name: 'Translation pending',
        type: 'consumable',
        effect: 'Translation pending',
        quantity: 5,
        weight: 2,
        craftingMaterials: ['Translation pending', 'Translation pending', 'Translation pending']
      },
      {
        name: 'Translation pending',
        type: 'tool',
        effect: 'Translation pending',
        quantity: 1,
        weight: 0.8,
        craftingMaterials: ['Translation pending', 'Translation pending', 'Translation pending']
      },
      {
        name: 'Translation pending',
        type: 'tool',
        effect: 'Translation pending',
        quantity: 1,
        weight: 1.2,
        craftingMaterials: ['Translation pending', 'Translation pending', 'Translation pending']
      },
      {
        name: 'Translation pending',
        type: 'consumable',
        effect: 'Translation pending',
        quantity: 3,
        weight: 0.5,
        craftingMaterials: ['Translation pending', 'Translation pending', 'Translation pending']
      }
    ],
    description: 'Translation pending',
    craftingRequirements: ['Translation pending', 'Translation pending', 'Translation pending'],
    weight: 5.0,
    durability: 95
  }
];

// TODO: update
export const twistedEncounters: TwistedEncounter[] = [
  {
    id: 'dark-forest-encounter',
    name: 'Translation pending',
    twistedIds: ['shadow-stalker', 'patrol-watcher'],
    location: 'Translation pending',
    difficulty: 'high',
    timeOfDay: 'night',
    weatherConditions: ['Translation pending', 'Translation pending', 'Translation pending'],
    objectives: [
      'Translation pending',
      'Translation pending',
      'Translation pending',
      'Translation pending'
    ],
    rewards: [
      'Translation pending',
      'Translation pending',
      'Translation pending',
      'Translation pending'
    ],
    risks: [
      'Translation pending',
      'Translation pending',
      'Translation pending',
      'Translation pending'
    ],
    recommendedLevel: 15,
    teamSize: {
      min: 2,
      max: 4,
      optimal: 3
    }
  },
  {
    id: 'abandoned-hospital-encounter',
    twistedIds: ['mind-screecher', 'flesh-ripper'],
    name: 'Translation pending',
    location: 'Translation pending',
    difficulty: 'extreme',
    timeOfDay: 'any',
    weatherConditions: ['Translation pending', 'Translation pending', 'Translation pending'],
    objectives: [
      'Translation pending',
      'Translation pending',
      'Translation pending',
      'Translation pending'
    ],
    rewards: [
      'Translation pending',
      'Translation pending',
      'Translation pending',
      'Translation pending'
    ],
    risks: [
      'Translation pending',
      'Translation pending',
      'Translation pending',
      'Translation pending'
    ],
    recommendedLevel: 25,
    teamSize: {
      min: 3,
      max: 6,
      optimal: 4
    }
  }
];

// TODO: update
export const getStrategiesForTwisted = (twistedId: string): TwistedStrategy[] => {
  return twistedStrategies.filter(strategy => strategy.strategyId === twistedId);
};

export const getStrategiesByType = (type: TwistedStrategy['type']): TwistedStrategy[] => {
  return twistedStrategies.filter(strategy => strategy.type === type);
};

export const getStrategiesByDifficulty = (difficulty: TwistedStrategy['difficulty']): TwistedStrategy[] => {
  return twistedStrategies.filter(strategy => strategy.difficulty === difficulty);
};

export const getTeamComposition = (id: string): TeamComposition | undefined => {
  return teamCompositions.find(comp => comp.id === id);
};

export const getSurvivalKit = (id: string): SurvivalKit | undefined => {
  return survivalKits.find(kit => kit.id === id);
};

export const getEncounterById = (id: string): TwistedEncounter | undefined => {
  return twistedEncounters.find(encounter => encounter.id === id);
};

// TODO: update
export const generateCustomStrategy = (
  twisted: Twisted,
  teamSize: number,
  environment: string
): TwistedStrategy => {
  // TODO: update
  const baseStrategy = twistedStrategies.find(s => s.twistedId === twisted.id);
  
  if (baseStrategy) {
    return {
      ...baseStrategy,
      id: `custom-${twisted.id}-${Date.now()}`,
      name: `Translation pending`,
      description: `Translation pending`,
      steps: [
        ...baseStrategy.steps,
        `Translation pending`,
        `Translation pending`,
        'Translation pending'
      ]
    };
  }
  
  // TODO: update
  return {
    id: `new-${twisted.id}-${Date.now()}`,
    twistedId: twisted.id,
    name: `Translation pending`,
    type: 'survival',
    difficulty: 'medium',
    description: `Translation pending`,
    steps: [
      'Translation pending',
      'Translation pending',
      'Translation pending',
      'Translation pending',
      'Translation pending'
    ],
    requirements: ['Translation pending', 'Translation pending'],
    risks: ['Translation pending', 'Translation pending'],
    rewards: ['Translation pending', 'Translation pending'],
    tips: ['Translation pending', 'Translation pending', 'Translation pending'],
    counterStrategies: []
  };
};