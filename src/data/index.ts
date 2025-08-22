import { characters } from './characters';
import { twistedCharacters } from './twisted-characters';
import { Character, CharacterType, Rarity } from '../types/character';

// 导出所有角色数据
export { characters, twistedCharacters };

// 组合所有角色（用于"All"过滤器）
export const allCharacters: Character[] = [...characters, ...twistedCharacters];

// 按类型分组的便捷函数
export const getCharactersByType = (type: CharacterType): Character[] => {
  return allCharacters.filter(char => char.type === type);
};

// 按稀有度分组的便捷函数
export const getCharactersByRarity = (rarity: Rarity): Character[] => {
  return allCharacters.filter(char => char.rarity === rarity);
};

// 获取所有正常角色（非扭曲）
export const getNormalCharacters = (): Character[] => {
  return allCharacters.filter(char => char.type !== 'twisted');
};

// 获取所有扭曲角色
export const getTwistedCharacters = (): Character[] => {
  return twistedCharacters;
};

// 获取指定稀有度的角色（按稀有度排序）
export const getCharactersByRaritySorted = (rarity: Rarity): Character[] => {
  return getCharactersByRarity(rarity).sort((a, b) => a.name.localeCompare(b.name));
};

// 获取所有稀有度分布
export const getRarityDistribution = () => {
  const stats = getCharacterStats();
  return {
    common: {
      count: stats.byRarity.common,
      percentage: Math.round((stats.byRarity.common / stats.total) * 100)
    },
    uncommon: {
      count: stats.byRarity.uncommon,
      percentage: Math.round((stats.byRarity.uncommon / stats.total) * 100)
    },
    rare: {
      count: stats.byRarity.rare,
      percentage: Math.round((stats.byRarity.rare / stats.total) * 100)
    },
    legendary: {
      count: stats.byRarity.legendary,
      percentage: Math.round((stats.byRarity.legendary / stats.total) * 100)
    },
    twisted: {
      count: stats.byRarity.twisted,
      percentage: Math.round((stats.byRarity.twisted / stats.total) * 100)
    }
  };
};

// 获取角色获取难度分类
export const getDifficultyCategories = () => {
  const stats = getCharacterStats();
  return {
    starter: {
      count: stats.difficultyAnalysis.starter,
      description: "入门角色，无需任何资源"
    },
    easy: {
      count: stats.difficultyAnalysis.easy,
      description: "简单获取，需要少量资源"
    },
    medium: {
      count: stats.difficultyAnalysis.medium,
      description: "中等难度，需要较多资源"
    },
    hard: {
      count: stats.difficultyAnalysis.hard,
      description: "困难获取，需要大量资源"
    },
    eventOnly: {
      count: stats.difficultyAnalysis.eventOnly,
      description: "限时活动角色"
    },
    researchRequired: {
      count: stats.difficultyAnalysis.researchRequired,
      description: "需要完成研究任务"
    },
    masteryRequired: {
      count: stats.difficultyAnalysis.masteryRequired,
      description: "需要完成精通任务"
    }
  };
};

// 获取角色能力分类
export const getAbilityCategories = () => {
  const stats = getCharacterStats();
  return {
    healers: {
      count: stats.abilityAnalysis.healers,
      description: "具有治疗能力的角色"
    },
    support: {
      count: stats.abilityAnalysis.support,
      description: "具有支援能力的角色"
    },
    stealth: {
      count: stats.abilityAnalysis.stealth,
      description: "高潜行能力的角色"
    },
    highDamage: {
      count: stats.abilityAnalysis.highDamage,
      description: "高伤害输出的角色"
    },
    highHealth: {
      count: stats.abilityAnalysis.highHealth,
      description: "高生命值的角色"
    }
  };
};

// 搜索角色（按名称、描述等）
export const searchCharacters = (query: string): Character[] => {
  const lowerQuery = query.toLowerCase();
  return allCharacters.filter(char => 
    char.name.toLowerCase().includes(lowerQuery) ||
    (char.fullName && char.fullName.toLowerCase().includes(lowerQuery)) ||
    char.description.toLowerCase().includes(lowerQuery) ||
    char.type.toLowerCase().includes(lowerQuery) ||
    char.rarity.toLowerCase().includes(lowerQuery)
  );
};

// 获取角色统计信息
export const getCharacterStats = () => {
  const total = allCharacters.length;
  const normal = characters.length;
  const twisted = twistedCharacters.length;
  
  const byType = {
    toon: allCharacters.filter(c => c.type === 'toon').length,
    main: allCharacters.filter(c => c.type === 'main').length,
    regular: allCharacters.filter(c => c.type === 'regular').length,
    event: allCharacters.filter(c => c.type === 'event').length,
    lethal: allCharacters.filter(c => c.type === 'lethal').length,
    twisted: twisted
  };
  
  const byRarity = {
    common: allCharacters.filter(c => c.rarity === 'common').length,
    uncommon: allCharacters.filter(c => c.rarity === 'uncommon').length,
    rare: allCharacters.filter(c => c.rarity === 'rare').length,
    legendary: allCharacters.filter(c => c.rarity === 'legendary').length,
    twisted: twisted
  };
  
  // 按稀有度分组的角色列表
  const charactersByRarity = {
    common: getCharactersByRarity('common'),
    uncommon: getCharactersByRarity('uncommon'),
    rare: getCharactersByRarity('rare'),
    legendary: getCharactersByRarity('legendary'),
    twisted: getCharactersByRarity('twisted')
  };
  
  // 角色获取难度分析
  const difficultyAnalysis = {
    starter: characters.filter(c => c.requirements.ichor === 0).length,
    easy: characters.filter(c => c.requirements.ichor && c.requirements.ichor <= 1000).length,
    medium: characters.filter(c => c.requirements.ichor && c.requirements.ichor > 1000 && c.requirements.ichor <= 3000).length,
    hard: characters.filter(c => c.requirements.ichor && c.requirements.ichor > 3000).length,
    eventOnly: characters.filter(c => c.requirements.ornaments || c.requirements.baskets).length,
    researchRequired: characters.filter(c => c.requirements.research).length,
    masteryRequired: characters.filter(c => c.requirements.mastery).length
  };
  
  // 角色能力分析
  const abilityAnalysis = {
    healers: allCharacters.filter(c => 
      c.abilities.active.description.toLowerCase().includes('heal') ||
      c.abilities.passive.description.toLowerCase().includes('heal')
    ).length,
    support: allCharacters.filter(c => 
      c.abilities.active.description.toLowerCase().includes('boost') ||
      c.abilities.passive.description.toLowerCase().includes('boost') ||
      c.abilities.active.description.toLowerCase().includes('speed') ||
      c.abilities.passive.description.toLowerCase().includes('speed')
    ).length,
    stealth: allCharacters.filter(c => c.stats.stealth >= 4).length,
    highDamage: allCharacters.filter(c => c.stats.damage >= 4).length,
    highHealth: allCharacters.filter(c => c.stats.health >= 4).length
  };
  
  return {
    total,
    normal,
    twisted,
    byType,
    byRarity,
    charactersByRarity,
    difficultyAnalysis,
    abilityAnalysis
  };
};
