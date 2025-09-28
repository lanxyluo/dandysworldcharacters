// TODO: update
export interface Trinket {
  id: string;
  name: string;
  rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
  type: 'offensive' | 'defensive' | 'utility' | 'hybrid';
  slot: 'primary' | 'secondary' | 'tertiary';
  stats: TrinketStats;
  effects: TrinketEffect[];
  description: string;
  image: string; // emoji representation
  unlockCondition?: string;
  synergies: string[]; // TODO: update
  drawbacks: string[]; // TODO: update
  bestFor: string[]; // TODO: update
}

export interface TrinketStats {
  damage?: number;
  defense?: number;
  speed?: number;
  health?: number;
  stamina?: number;
  criticalChance?: number;
  criticalDamage?: number;
  dodgeChance?: number;
  blockChance?: number;
  healingBonus?: number;
  cooldownReduction?: number;
  range?: number;
  areaOfEffect?: number;
}

export interface TrinketEffect {
  name: string;
  description: string;
  trigger: 'passive' | 'onHit' | 'onKill' | 'onDamage' | 'onHeal' | 'onBlock' | 'onDodge';
  value: number;
  duration?: number; // TODO: update
  stackable: boolean; // TODO: update
  maxStacks?: number; // TODO: update
}

// TODO: update
export const trinkets: Trinket[] = [
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
      criticalDamage: 25
    },
    effects: [
      {
        name: 'Blood Rage',
        description: 'Translation pending',
        trigger: 'onKill',
        value: 10,
        duration: 15,
        stackable: true,
        maxStacks: 5
      }
    ],
    description: 'Translation pending',
    image: '🩸',
    unlockCondition: 'Translation pending',
    synergies: ['berserker-axe', 'vampire-ring'],
    drawbacks: ['Translation pending'],
    bestFor: ['warrior', 'berserker', 'assassin']
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
      criticalChance: 12
    },
    effects: [
      {
        name: 'Chain Lightning',
        description: 'Translation pending',
        trigger: 'onHit',
        value: 25,
        duration: undefined,
        stackable: false
      }
    ],
    description: 'Translation pending',
    image: '⚡',
    unlockCondition: 'Translation pending',
    synergies: ['thunder-hammer', 'storm-caller'],
    drawbacks: ['Translation pending'],
    bestFor: ['mage', 'elementalist', 'paladin']
  },
  {
    id: 'berserker-axe',
    name: 'Berserker Axe',
    rarity: 'legendary',
    type: 'offensive',
    slot: 'primary',
    stats: {
      damage: 35,
      criticalDamage: 50,
      speed: 8
    },
    effects: [
      {
        name: 'Rage Mode',
        description: 'Translation pending',
        trigger: 'passive',
        value: 100,
        duration: undefined,
        stackable: false
      }
    ],
    description: 'Translation pending',
    image: '🪓',
    unlockCondition: 'Translation pending',
    synergies: ['bloodlust-charm', 'rage-potion'],
    drawbacks: ['Translation pending'],
    bestFor: ['berserker', 'warrior', 'barbarian']
  },

  // TODO: update
  {
    id: 'guardian-shield',
    name: 'Guardian Shield',
    rarity: 'epic',
    type: 'defensive',
    slot: 'secondary',
    stats: {
      defense: 25,
      blockChance: 20,
      health: 50
    },
    effects: [
      {
        name: 'Guardian\'s Protection',
        description: 'Translation pending',
        trigger: 'passive',
        value: 15,
        duration: undefined,
        stackable: false
      }
    ],
    description: 'Translation pending',
    image: '🛡️',
    unlockCondition: 'Translation pending',
    synergies: ['paladin-armor', 'holy-aura'],
    drawbacks: ['Translation pending'],
    bestFor: ['tank', 'paladin', 'guardian']
  },
  {
    id: 'vampire-ring',
    name: 'Vampire Ring',
    rarity: 'rare',
    type: 'defensive',
    slot: 'tertiary',
    stats: {
      health: 30,
      healingBonus: 20,
      dodgeChance: 8
    },
    effects: [
      {
        name: 'Life Steal',
        description: 'Translation pending',
        trigger: 'onHit',
        value: 20,
        duration: undefined,
        stackable: false
      }
    ],
    description: 'Translation pending',
    image: '💍',
    unlockCondition: 'Translation pending',
    synergies: ['bloodlust-charm', 'life-steal-gem'],
    drawbacks: ['Translation pending'],
    bestFor: ['assassin', 'rogue', 'necromancer']
  },
  {
    id: 'dragon-scale-armor',
    name: 'Dragon Scale Armor',
    rarity: 'legendary',
    type: 'defensive',
    slot: 'secondary',
    stats: {
      defense: 40,
      health: 80,
      fireResistance: 50
    },
    effects: [
      {
        name: 'Dragon\'s Fury',
        description: 'Translation pending',
        trigger: 'onDamage',
        value: 30,
        duration: undefined,
        stackable: false
      }
    ],
    description: 'Translation pending',
    image: '🐉',
    unlockCondition: 'Translation pending',
    synergies: ['fire-sword', 'dragon-heart'],
    drawbacks: ['Translation pending'],
    bestFor: ['dragon-knight', 'warrior', 'tank']
  },

  // TODO: update
  {
    id: 'time-warp-crystal',
    name: 'Time Warp Crystal',
    rarity: 'legendary',
    type: 'utility',
    slot: 'tertiary',
    stats: {
      cooldownReduction: 25,
      speed: 15
    },
    effects: [
      {
        name: 'Time Manipulation',
        description: 'Translation pending',
        trigger: 'passive',
        value: 25,
        duration: undefined,
        stackable: false
      }
    ],
    description: 'Translation pending',
    image: '⏰',
    unlockCondition: 'Translation pending',
    synergies: ['speed-boots', 'haste-potion'],
    drawbacks: ['Translation pending'],
    bestFor: ['mage', 'assassin', 'support']
  },
  {
    id: 'healing-spring',
    name: 'Healing Spring',
    rarity: 'epic',
    type: 'utility',
    slot: 'tertiary',
    stats: {
      healingBonus: 35,
      health: 40
    },
    effects: [
      {
        name: 'Regeneration',
        description: 'Translation pending',
        trigger: 'passive',
        value: 2,
        duration: undefined,
        stackable: false
      }
    ],
    description: 'Translation pending',
    image: '💧',
    unlockCondition: 'Translation pending',
    synergies: ['holy-aura', 'life-gem'],
    drawbacks: ['Translation pending'],
    bestFor: ['healer', 'support', 'paladin']
  },
  {
    id: 'stealth-cloak',
    name: 'Stealth Cloak',
    rarity: 'rare',
    type: 'utility',
    slot: 'secondary',
    stats: {
      dodgeChance: 15,
      speed: 10
    },
    effects: [
      {
        name: 'Shadow Step',
        description: 'Translation pending',
        trigger: 'passive',
        value: 50,
        duration: 10,
        stackable: false
      }
    ],
    description: 'Translation pending',
    image: '👻',
    unlockCondition: 'Translation pending',
    synergies: ['silent-boots', 'shadow-dagger'],
    drawbacks: ['Translation pending'],
    bestFor: ['assassin', 'rogue', 'scout']
  },

  // TODO: update
  {
    id: 'elemental-harmony',
    name: 'Elemental Harmony',
    rarity: 'epic',
    type: 'hybrid',
    slot: 'primary',
    stats: {
      damage: 18,
      defense: 12,
      elementalResistance: 25
    },
    effects: [
      {
        name: 'Elemental Mastery',
        description: 'Translation pending',
        trigger: 'passive',
        value: 25,
        duration: undefined,
        stackable: false
      }
    ],
    description: 'Translation pending',
    image: '🌪️',
    unlockCondition: 'Translation pending',
    synergies: ['fire-gem', 'ice-crystal', 'lightning-core'],
    drawbacks: ['Translation pending'],
    bestFor: ['elementalist', 'druid', 'mage']
  },
  {
    id: 'phoenix-feather',
    name: 'Phoenix Feather',
    rarity: 'legendary',
    type: 'hybrid',
    slot: 'tertiary',
    stats: {
      damage: 20,
      health: 60,
      fireResistance: 40
    },
    effects: [
      {
        name: 'Rebirth',
        description: 'Translation pending',
        trigger: 'passive',
        value: 50,
        duration: undefined,
        stackable: false
      }
    ],
    description: 'Translation pending',
    image: '🔥',
    unlockCondition: 'Translation pending',
    synergies: ['fire-sword', 'immortality-potion'],
    drawbacks: ['Translation pending'],
    bestFor: ['phoenix-knight', 'immortal', 'warrior']
  }
];

// TODO: update
export const getTrinketsByType = (type: Trinket['type']) => {
  return trinkets.filter(trinket => trinket.type === type);
};

export const getTrinketsByRarity = (rarity: Trinket['rarity']) => {
  return trinkets.filter(trinket => trinket.rarity === rarity);
};

export const getTrinketsBySlot = (slot: Trinket['slot']) => {
  return trinkets.filter(trinket => trinket.slot === slot);
};

export const getTrinketsForCharacter = (characterType: string) => {
  return trinkets.filter(trinket => 
    trinket.bestFor.includes(characterType)
  );
};

export const getTrinketById = (id: string) => {
  return trinkets.find(trinket => trinket.id === id);
};

// TODO: update
export const rarityWeights = {
  common: 40,
  uncommon: 30,
  rare: 20,
  epic: 8,
  legendary: 2
};

// TODO: update
export const typeWeights = {
  offensive: 35,
  defensive: 30,
  utility: 25,
  hybrid: 10
};