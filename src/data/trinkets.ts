// 饰品类型定义
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
  synergies: string[]; // 与其他饰品的协同效果
  drawbacks: string[]; // 负面效果
  bestFor: string[]; // 最适合的角色类型
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
  duration?: number; // 持续时间（秒），undefined表示永久
  stackable: boolean; // 是否可叠加
  maxStacks?: number; // 最大叠加层数
}

// 饰品数据
export const trinkets: Trinket[] = [
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
      criticalDamage: 25
    },
    effects: [
      {
        name: 'Blood Rage',
        description: '每次击杀敌人后，攻击力提升10%，持续15秒',
        trigger: 'onKill',
        value: 10,
        duration: 15,
        stackable: true,
        maxStacks: 5
      }
    ],
    description: '一个充满血腥气息的护身符，能够激发使用者的战斗欲望。',
    image: '🩸',
    unlockCondition: '完成Blood Moon事件',
    synergies: ['berserker-axe', 'vampire-ring'],
    drawbacks: ['增加受到的伤害5%'],
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
        description: '攻击有25%几率触发连锁闪电，对周围敌人造成额外伤害',
        trigger: 'onHit',
        value: 25,
        duration: undefined,
        stackable: false
      }
    ],
    description: '一个充满电能的晶体核心，能够释放强大的闪电攻击。',
    image: '⚡',
    unlockCondition: '击败Storm Lord',
    synergies: ['thunder-hammer', 'storm-caller'],
    drawbacks: ['在雨天受到额外伤害'],
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
        description: '生命值低于30%时，攻击力翻倍，但防御力减半',
        trigger: 'passive',
        value: 100,
        duration: undefined,
        stackable: false
      }
    ],
    description: '一把传说中的战斧，能够激发使用者内心最深处的狂暴力量。',
    image: '🪓',
    unlockCondition: '完成Berserker Trial',
    synergies: ['bloodlust-charm', 'rage-potion'],
    drawbacks: ['降低理智值，增加失控风险'],
    bestFor: ['berserker', 'warrior', 'barbarian']
  },

  // 防御型饰品
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
        description: '为附近队友提供15%的伤害减免',
        trigger: 'passive',
        value: 15,
        duration: undefined,
        stackable: false
      }
    ],
    description: '一面神圣的盾牌，能够保护使用者和队友免受伤害。',
    image: '🛡️',
    unlockCondition: '完成Guardian Quest',
    synergies: ['paladin-armor', 'holy-aura'],
    drawbacks: ['降低移动速度10%'],
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
        description: '攻击有15%几率恢复造成伤害的20%生命值',
        trigger: 'onHit',
        value: 20,
        duration: undefined,
        stackable: false
      }
    ],
    description: '一枚神秘的戒指，能够从敌人身上吸取生命力。',
    image: '💍',
    unlockCondition: '击败Vampire Lord',
    synergies: ['bloodlust-charm', 'life-steal-gem'],
    drawbacks: ['在阳光下效果减半'],
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
        description: '受到攻击时，有30%几率释放火焰反击',
        trigger: 'onDamage',
        value: 30,
        duration: undefined,
        stackable: false
      }
    ],
    description: '用远古巨龙的鳞片制成的护甲，具有强大的防护能力和反击效果。',
    image: '🐉',
    unlockCondition: '击败Ancient Dragon',
    synergies: ['fire-sword', 'dragon-heart'],
    drawbacks: ['增加冰霜伤害的易伤性'],
    bestFor: ['dragon-knight', 'warrior', 'tank']
  },

  // 实用型饰品
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
        description: '技能冷却时间减少25%，移动速度提升15%',
        trigger: 'passive',
        value: 25,
        duration: undefined,
        stackable: false
      }
    ],
    description: '一块能够扭曲时间的神秘晶体，让使用者能够更快地行动。',
    image: '⏰',
    unlockCondition: '完成Time Trial',
    synergies: ['speed-boots', 'haste-potion'],
    drawbacks: ['随机触发时间异常效果'],
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
        description: '每秒恢复最大生命值的2%',
        trigger: 'passive',
        value: 2,
        duration: undefined,
        stackable: false
      }
    ],
    description: '一个充满治愈能量的泉水，能够持续恢复使用者的生命值。',
    image: '💧',
    unlockCondition: '完成Healer\'s Path',
    synergies: ['holy-aura', 'life-gem'],
    drawbacks: ['在战斗中效果减半'],
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
        description: '进入隐身状态，持续10秒，期间移动速度提升50%',
        trigger: 'passive',
        value: 50,
        duration: 10,
        stackable: false
      }
    ],
    description: '一件能够隐藏使用者身形的斗篷，适合潜行和逃脱。',
    image: '👻',
    unlockCondition: '完成Stealth Mission',
    synergies: ['silent-boots', 'shadow-dagger'],
    drawbacks: ['在强光下效果减弱'],
    bestFor: ['assassin', 'rogue', 'scout']
  },

  // 混合型饰品
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
        description: '根据当前环境元素，获得相应的攻击和防御加成',
        trigger: 'passive',
        value: 25,
        duration: undefined,
        stackable: false
      }
    ],
    description: '一个能够与自然元素产生共鸣的饰品，提供平衡的攻防能力。',
    image: '🌪️',
    unlockCondition: '完成Elemental Trial',
    synergies: ['fire-gem', 'ice-crystal', 'lightning-core'],
    drawbacks: ['在元素混乱区域效果不稳定'],
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
        description: '死亡时有50%几率复活，恢复50%生命值',
        trigger: 'passive',
        value: 50,
        duration: undefined,
        stackable: false
      }
    ],
    description: '一根来自不死鸟的羽毛，蕴含着重生的神秘力量。',
    image: '🔥',
    unlockCondition: '击败Phoenix',
    synergies: ['fire-sword', 'immortality-potion'],
    drawbacks: ['复活后虚弱状态持续30秒'],
    bestFor: ['phoenix-knight', 'immortal', 'warrior']
  }
];

// 饰品分类函数
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

// 饰品稀有度权重（用于随机生成）
export const rarityWeights = {
  common: 40,
  uncommon: 30,
  rare: 20,
  epic: 8,
  legendary: 2
};

// 饰品类型权重
export const typeWeights = {
  offensive: 35,
  defensive: 30,
  utility: 25,
  hybrid: 10
};
