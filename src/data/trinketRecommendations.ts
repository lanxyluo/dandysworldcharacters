import { trinkets, Trinket } from './trinkets';
import { enhancedTrinkets } from './enhancedTrinkets';
import { getAllCharacters } from './characters';
import { Character } from '../types/character';

// 推荐系统类型定义
export interface TrinketRecommendation {
  trinket: Trinket;
  score: number;
  reasons: string[];
  synergies: string[];
  warnings: string[];
}

export interface BuildRecommendation {
  primary: TrinketRecommendation;
  secondary: TrinketRecommendation;
  tertiary: TrinketRecommendation;
  totalScore: number;
  buildType: 'offensive' | 'defensive' | 'balanced' | 'specialized';
  description: string;
  synergies: string[];
}

export interface CharacterBuildProfile {
  characterId: string;
  characterType: string;
  playstyle: 'aggressive' | 'defensive' | 'support' | 'hybrid';
  preferredStats: string[];
  avoidStats: string[];
  buildPreferences: {
    offensive: number; // 0-100
    defensive: number; // 0-100
    utility: number; // 0-100
  };
}

export interface EnhancedTrinketRecommendation {
  id: string;
  characterId: string;
  trinketIds: [string, string];
  trinkets: [TrinketRecommendation, TrinketRecommendation];
  strategy: 'speed' | 'extraction' | 'survival' | 'balanced';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  reasons: string[];
  warnings: string[];
  popularityScore: number;
  gameMode: 'normal' | 'dandy-run' | 'main-run';
  communityRating: number;
  usageRate: number;
}

interface RecommendationSeed {
  id: string;
  characterId: string;
  trinketIds: [string, string];
  strategy: 'speed' | 'extraction' | 'survival' | 'balanced';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  reasons: string[];
  warnings: string[];
  popularityScore: number;
  gameMode: 'normal' | 'dandy-run' | 'main-run';
}

const knownCharacterIds = new Set(getAllCharacters().map((character) => character.id));

const findTrinketById = (id: string): Trinket | undefined => {
  const base = trinkets.find((trinket) => trinket.id === id);
  if (base) {
    return base;
  }

  const enhanced = enhancedTrinkets.find((trinket) => trinket.id === id);
  if (enhanced) {
    const {
      acquisition,
      metaTags,
      difficulty,
      communityRating,
      usageRate,
      ...core
    } = enhanced;
    return core;
  }

  return undefined;
};

const toTrinketRecommendation = (
  trinketId: string,
  reasons: string[],
  warnings: string[],
  fallbackScore: number
): TrinketRecommendation | null => {
  const trinket = findTrinketById(trinketId);
  if (!trinket) {
    return null;
  }

  return {
    trinket,
    score: fallbackScore,
    reasons,
    synergies: trinket.synergies,
    warnings,
  };
};

const getAggregateMeta = (trinketIds: [string, string]) => {
  const matched = trinketIds
    .map((id) => enhancedTrinkets.find((trinket) => trinket.id === id))
    .filter((value): value is typeof enhancedTrinkets[number] => Boolean(value));

  if (matched.length === 0) {
    return { communityRating: 4, usageRate: 0.35 };
  }

  const totalRating = matched.reduce((acc, trinket) => acc + trinket.communityRating, 0);
  const totalUsage = matched.reduce((acc, trinket) => acc + trinket.usageRate, 0);

  return {
    communityRating: parseFloat((totalRating / matched.length).toFixed(2)),
    usageRate: parseFloat(((totalUsage / matched.length) / 100).toFixed(2)),
  };
};

const rawGameRecommendations: RecommendationSeed[] = [
  {
    id: 'vee-extraction-velocity',
    characterId: 'vee',
    trinketIds: ['extraction-expert', 'lightning-core'],
    strategy: 'extraction',
    difficulty: 'advanced',
    description: '高阶提取组合，兼顾技能检查与移动效率',
    reasons: ['提取速度显著提升', '技能检查成功率强化', '适合高压节奏'],
    warnings: ['需要熟练掌握高阶技能检查', '对战斗支援较少'],
    popularityScore: 95,
    gameMode: 'normal',
  },
  {
    id: 'vee-extraction-stealth',
    characterId: 'vee',
    trinketIds: ['extraction-expert', 'stealth-cloak'],
    strategy: 'balanced',
    difficulty: 'intermediate',
    description: '兼顾提取效率与安全机动的综合配装',
    reasons: ['快速完成机器', '潜行能力提升', '适合多楼层推进'],
    warnings: ['需要保持潜行节奏', '团队战斗收益有限'],
    popularityScore: 90,
    gameMode: 'normal',
  },
  {
    id: 'pebble-distractor-core',
    characterId: 'pebble',
    trinketIds: ['distraction-master', 'stealth-cloak'],
    strategy: 'speed',
    difficulty: 'beginner',
    description: '高移动与干扰效率的入门分散组合',
    reasons: ['移动速度提升', '干扰效果稳定', '适合带新队友'],
    warnings: ['缺乏直接输出能力', '需要掌握路线规划'],
    popularityScore: 88,
    gameMode: 'normal',
  },
  {
    id: 'astro-support-conductor',
    characterId: 'astro',
    trinketIds: ['support-aura', 'stealth-cloak'],
    strategy: 'survival',
    difficulty: 'intermediate',
    description: '团队增益与安全撤离兼顾的支援组合',
    reasons: ['团队支援能力显著提升', '提供额外隐蔽与速度', '适合高层支援'],
    warnings: ['个人输出有限', '需要队伍配合位置'],
    popularityScore: 86,
    gameMode: 'normal',
  },
  {
    id: 'boxten-extraction-anchor',
    characterId: 'boxten',
    trinketIds: ['extraction-expert', 'support-aura'],
    strategy: 'balanced',
    difficulty: 'beginner',
    description: '稳健的机器专注组合，适合团队推进',
    reasons: ['强化提取效率', '为队友提供支援光环', '易于上手'],
    warnings: ['需要团队配合收集资源', '战斗对抗力一般'],
    popularityScore: 82,
    gameMode: 'normal',
  },
];

export const gameSpecificRecommendations: EnhancedTrinketRecommendation[] = rawGameRecommendations
  .map((seed) => {
    if (!knownCharacterIds.has(seed.characterId)) {
      return null;
    }

    const [firstId, secondId] = seed.trinketIds;
    const first = toTrinketRecommendation(firstId, seed.reasons, seed.warnings, seed.popularityScore);
    const second = toTrinketRecommendation(secondId, seed.reasons, seed.warnings, seed.popularityScore - 2);

    if (!first || !second) {
      return null;
    }

    const meta = getAggregateMeta(seed.trinketIds);

    return {
      ...seed,
      trinkets: [first, second],
      communityRating: meta.communityRating,
      usageRate: meta.usageRate,
    };
  })
  .filter((value): value is EnhancedTrinketRecommendation => Boolean(value));

// 角色构建配置文件
export const characterBuildProfiles: Record<string, CharacterBuildProfile> = {
  'warrior': {
    characterId: 'warrior',
    characterType: 'warrior',
    playstyle: 'aggressive',
    preferredStats: ['damage', 'health', 'defense', 'criticalChance'],
    avoidStats: ['magicResistance', 'healingBonus'],
    buildPreferences: {
      offensive: 70,
      defensive: 25,
      utility: 5
    }
  },
  'mage': {
    characterId: 'mage',
    characterType: 'mage',
    playstyle: 'hybrid',
    preferredStats: ['damage', 'cooldownReduction', 'mana', 'criticalChance'],
    avoidStats: ['physicalDefense', 'blockChance'],
    buildPreferences: {
      offensive: 60,
      defensive: 15,
      utility: 25
    }
  },
  'assassin': {
    characterId: 'assassin',
    characterType: 'assassin',
    playstyle: 'aggressive',
    preferredStats: ['damage', 'speed', 'criticalChance', 'criticalDamage', 'dodgeChance'],
    avoidStats: ['defense', 'health'],
    buildPreferences: {
      offensive: 80,
      defensive: 10,
      utility: 10
    }
  },
  'tank': {
    characterId: 'tank',
    characterType: 'tank',
    playstyle: 'defensive',
    preferredStats: ['defense', 'health', 'blockChance', 'taunt'],
    avoidStats: ['damage', 'criticalChance'],
    buildPreferences: {
      offensive: 10,
      defensive: 80,
      utility: 10
    }
  },
  'healer': {
    characterId: 'healer',
    characterType: 'healer',
    playstyle: 'support',
    preferredStats: ['healingBonus', 'mana', 'cooldownReduction', 'health'],
    avoidStats: ['damage', 'criticalChance'],
    buildPreferences: {
      offensive: 5,
      defensive: 20,
      utility: 75
    }
  },
  'paladin': {
    characterId: 'paladin',
    characterType: 'paladin',
    playstyle: 'hybrid',
    preferredStats: ['damage', 'defense', 'healingBonus', 'holyPower'],
    avoidStats: ['darkMagic', 'stealth'],
    buildPreferences: {
      offensive: 40,
      defensive: 40,
      utility: 20
    }
  },
  'berserker': {
    characterId: 'berserker',
    characterType: 'berserker',
    playstyle: 'aggressive',
    preferredStats: ['damage', 'criticalDamage', 'speed', 'rage'],
    avoidStats: ['defense', 'healingBonus'],
    buildPreferences: {
      offensive: 90,
      defensive: 5,
      utility: 5
    }
  },
  'rogue': {
    characterId: 'rogue',
    characterType: 'rogue',
    playstyle: 'hybrid',
    preferredStats: ['damage', 'speed', 'stealth', 'criticalChance'],
    avoidStats: ['defense', 'heavyArmor'],
    buildPreferences: {
      offensive: 60,
      defensive: 15,
      utility: 25
    }
  }
};

// 推荐算法核心函数
export const calculateTrinketScore = (
  trinket: Trinket,
  character: Character,
  buildProfile: CharacterBuildProfile
): number => {
  let score = 0;
  
  // 基础分数（稀有度）
  const rarityScores = {
    common: 10,
    uncommon: 20,
    rare: 35,
    epic: 55,
    legendary: 80
  };
  score += rarityScores[trinket.rarity];
  
  // 角色类型匹配度
  if (trinket.bestFor.includes(character.type)) {
    score += 30;
  } else if (trinket.bestFor.includes(character.role)) {
    score += 20;
  }
  
  // 统计属性匹配度
  Object.entries(trinket.stats).forEach(([stat, value]) => {
    if (buildProfile.preferredStats.includes(stat)) {
      score += value * 2; // 偏好属性权重加倍
    } else if (buildProfile.avoidStats.includes(stat)) {
      score -= value * 1.5; // 避免属性权重减分
    } else if (value > 0) {
      score += value; // 中性属性正常加分
    }
  });
  
  // 构建偏好匹配度
  const typeScores = {
    offensive: buildProfile.buildPreferences.offensive,
    defensive: buildProfile.buildPreferences.defensive,
    utility: buildProfile.buildPreferences.utility
  };
  score += typeScores[trinket.type] * 0.5;
  
  // 协同效果加分
  score += trinket.synergies.length * 5;
  
  // 负面效果减分
  score -= trinket.drawbacks.length * 8;
  
  return Math.max(0, Math.round(score));
};

// 生成单个饰品推荐
export const generateTrinketRecommendation = (
  trinket: Trinket,
  character: Character,
  buildProfile: CharacterBuildProfile
): TrinketRecommendation => {
  const score = calculateTrinketScore(trinket, character, buildProfile);
  const reasons: string[] = [];
  const synergies: string[] = [];
  const warnings: string[] = [];
  
  // 生成推荐理由
  if (trinket.bestFor.includes(character.type)) {
    reasons.push(`完美匹配${character.type}角色类型`);
  }
  
  Object.entries(trinket.stats).forEach(([stat, value]) => {
    if (buildProfile.preferredStats.includes(stat)) {
      reasons.push(`提供${stat}属性，符合构建偏好`);
    }
  });
  
  if (trinket.synergies.length > 0) {
    reasons.push(`具有${trinket.synergies.length}个协同效果`);
    synergies.push(...trinket.synergies);
  }
  
  // 生成警告信息
  if (trinket.drawbacks.length > 0) {
    warnings.push(`具有${trinket.drawbacks.length}个负面效果`);
  }
  
  Object.entries(trinket.stats).forEach(([stat, value]) => {
    if (buildProfile.avoidStats.includes(stat)) {
      warnings.push(`${stat}属性不符合构建偏好`);
    }
  });
  
  return {
    trinket,
    score,
    reasons,
    synergies,
    warnings
  };
};

// 生成完整构建推荐
export const generateBuildRecommendation = (
  character: Character,
  availableTrinkets: Trinket[],
  buildType: 'offensive' | 'defensive' | 'balanced' | 'specialized' = 'balanced'
): BuildRecommendation => {
  const buildProfile = characterBuildProfiles[character.type] || characterBuildProfiles['warrior'];
  
  // 根据构建类型调整偏好
  let adjustedProfile = { ...buildProfile };
  if (buildType === 'offensive') {
    adjustedProfile.buildPreferences.offensive = 90;
    adjustedProfile.buildPreferences.defensive = 5;
    adjustedProfile.buildPreferences.utility = 5;
  } else if (buildType === 'defensive') {
    adjustedProfile.buildPreferences.offensive = 10;
    adjustedProfile.buildPreferences.defensive = 85;
    adjustedProfile.buildPreferences.utility = 5;
  } else if (buildType === 'specialized') {
    // 根据角色类型特殊化
    if (character.type === 'healer') {
      adjustedProfile.buildPreferences.utility = 90;
      adjustedProfile.buildPreferences.offensive = 5;
      adjustedProfile.buildPreferences.defensive = 5;
    }
  }
  
  // 为每个槽位生成推荐
  const primaryRecommendations = availableTrinkets
    .filter(t => t.slot === 'primary')
    .map(t => generateTrinketRecommendation(t, character, adjustedProfile))
    .sort((a, b) => b.score - a.score);
  
  const secondaryRecommendations = availableTrinkets
    .filter(t => t.slot === 'secondary')
    .map(t => generateTrinketRecommendation(t, character, adjustedProfile))
    .sort((a, b) => b.score - a.score);
  
  const tertiaryRecommendations = availableTrinkets
    .filter(t => t.slot === 'tertiary')
    .map(t => generateTrinketRecommendation(t, character, adjustedProfile))
    .sort((a, b) => b.score - a.score);
  
  const primary = primaryRecommendations[0];
  const secondary = secondaryRecommendations[0];
  const tertiary = tertiaryRecommendations[0];
  
  const totalScore = (primary?.score || 0) + (secondary?.score || 0) + (tertiary?.score || 0);
  
  // 生成构建描述
  let description = '';
  if (buildType === 'offensive') {
    description = `专注于最大化${character.name}的攻击能力，适合快速击杀敌人的战斗风格。`;
  } else if (buildType === 'defensive') {
    description = `强化${character.name}的生存能力，适合持久战和团队保护。`;
  } else if (buildType === 'specialized') {
    if (character.type === 'healer') {
      description = `优化${character.name}的治疗和支援能力，最大化团队价值。`;
    } else {
      description = `根据${character.name}的特殊能力进行优化，发挥独特优势。`;
    }
  } else {
    description = `为${character.name}提供平衡的攻防能力，适合各种战斗情况。`;
  }
  
  // 收集协同效果
  const allSynergies = [
    ...(primary?.synergies || []),
    ...(secondary?.synergies || []),
    ...(tertiary?.synergies || [])
  ];
  const uniqueSynergies = [...new Set(allSynergies)];
  
  return {
    primary: primary || { trinket: availableTrinkets[0], score: 0, reasons: [], synergies: [], warnings: [] },
    secondary: secondary || { trinket: availableTrinkets[0], score: 0, reasons: [], synergies: [], warnings: [] },
    tertiary: tertiary || { trinket: availableTrinkets[0], score: 0, reasons: [], synergies: [], warnings: [] },
    totalScore,
    buildType,
    description,
    synergies: uniqueSynergies
  };
};

// 生成多个构建选项
export const generateMultipleBuilds = (
  character: Character,
  availableTrinkets: Trinket[],
  count: number = 3
): BuildRecommendation[] => {
  const buildTypes: Array<'offensive' | 'defensive' | 'balanced' | 'specialized'> = [
    'offensive',
    'defensive',
    'balanced',
    'specialized'
  ];
  
  return buildTypes
    .slice(0, count)
    .map(buildType => generateBuildRecommendation(character, availableTrinkets, buildType))
    .sort((a, b) => b.totalScore - a.totalScore);
};

// 饰品协同分析
export const analyzeTrinketSynergies = (trinkets: Trinket[]): {
  synergies: string[];
  conflicts: string[];
  recommendations: string[];
} => {
  const synergies: string[] = [];
  const conflicts: string[] = [];
  const recommendations: string[] = [];
  
  // 检查协同效果
  trinkets.forEach(trinket => {
    trinket.synergies.forEach(synergyId => {
      const synergyTrinket = trinkets.find(t => t.id === synergyId);
      if (synergyTrinket) {
        synergies.push(`${trinket.name} + ${synergyTrinket.name}: 协同效果激活`);
      }
    });
  });
  
  // 检查冲突
  const statConflicts = new Map<string, string[]>();
  trinkets.forEach(trinket => {
    Object.entries(trinket.stats).forEach(([stat, value]) => {
      if (!statConflicts.has(stat)) {
        statConflicts.set(stat, []);
      }
      statConflicts.get(stat)!.push(trinket.name);
    });
  });
  
  statConflicts.forEach((trinketNames, stat) => {
    if (trinketNames.length > 1) {
      conflicts.push(`${stat}属性重复: ${trinketNames.join(', ')}`);
    }
  });
  
  // 生成建议
  if (synergies.length > 0) {
    recommendations.push('充分利用协同效果，考虑同时装备相关饰品');
  }
  
  if (conflicts.length > 0) {
    recommendations.push('避免属性重复，考虑替换冲突的饰品');
  }
  
  if (trinkets.length < 3) {
    recommendations.push('考虑添加更多饰品以增强整体能力');
  }
  
  return { synergies, conflicts, recommendations };
};

// 导出工具函数
export const getBuildProfile = (characterType: string): CharacterBuildProfile => {
  return characterBuildProfiles[characterType] || characterBuildProfiles['warrior'];
};

export const getRecommendedTrinkets = (
  character: Character,
  count: number = 5
): Trinket[] => {
  const buildProfile = getBuildProfile(character.type);
  const allTrinkets = require('./trinkets').trinkets;
  
  return allTrinkets
    .map(trinket => generateTrinketRecommendation(trinket, character, buildProfile))
    .sort((a, b) => b.score - a.score)
    .slice(0, count)
    .map(rec => rec.trinket);
};
