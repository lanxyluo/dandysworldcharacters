import { Trinket } from './trinkets';
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
