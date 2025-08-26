import { Character } from '../../types/character';
import { mainCharacters } from './main-characters';
import { commonCharacters } from './common-characters';
import { uncommonCharacters } from './uncommon-characters';
import { rareCharacters } from './rare-characters';
import { eventCharacters } from './event-characters';
import { lethalCharacters } from './lethal-characters';
import { twistedCharacters } from './twisted-characters';

// Export all character data
export { mainCharacters } from './main-characters';
export { commonCharacters } from './common-characters';
export { uncommonCharacters } from './uncommon-characters';
export { rareCharacters } from './rare-characters';
export { eventCharacters } from './event-characters';
export { lethalCharacters } from './lethal-characters';
export { twistedCharacters } from './twisted-characters';

// Export types
export type { Character } from '../../types/character';

// Utility functions - 修复重复角色问题
export const getAllCharacters = (): Character[] => {
  // 使用Map来确保每个角色ID只出现一次
  const characterMap = new Map<string, Character>();
  
  // 按优先级添加角色（主角 > 稀有 > 罕见 > 普通 > 活动 > 致命 > 扭曲）
  const allCharacterArrays = [
    mainCharacters,
    rareCharacters,
    uncommonCharacters,
    commonCharacters,
    eventCharacters,
    lethalCharacters,
    twistedCharacters
  ];
  
  allCharacterArrays.forEach(characters => {
    characters.forEach(character => {
      if (!characterMap.has(character.id)) {
        characterMap.set(character.id, character);
      }
    });
  });
  
  return Array.from(characterMap.values());
};

export const getCharacterById = (id: string): Character | undefined => {
  return getAllCharacters().find(character => character.id === id);
};

export const getCharactersByType = (type: Character['type']): Character[] => {
  return getAllCharacters().filter(character => character.type === type);
};

export const getCharactersByRarity = (rarity: Character['rarity']): Character[] => {
  return getAllCharacters().filter(character => character.rarity === rarity);
};

export const getMainCharacters = (): Character[] => mainCharacters;

export const getPlayableCharacters = (): Character[] => {
  return getAllCharacters().filter(character => 
    character.type !== "lethal" && character.type !== 'twisted'
  );
};

// Official playable set (excludes lethal/twisted) used for homepage counts and listings
export const getOfficialPlayableCharacters = (): Character[] => {
  return getPlayableCharacters();
};

export const getRegularCharacters = (): Character[] => {
  return getAllCharacters().filter(character => 
    character.type === 'regular'
  );
};

// Character statistics
export const characterStats = {
  total: getAllCharacters().length,
  playable: getPlayableCharacters().length,
  mainCharacters: mainCharacters.length,
  regular: {
    total: getRegularCharacters().length,
    common: commonCharacters.length,
    uncommon: uncommonCharacters.length,
    rare: rareCharacters.length,
  },
  attributeSystem: {
    totalPoints: {
      mainCharacters: 16,
      regularCharacters: 15,
    },
    attributes: [
      "Health (Hearts)", 
      "Skill Check", 
      "Movement Speed", 
      "Stamina", 
      "Stealth", 
      "Extraction Speed"
    ]
  }
};

// Additional statistics and analysis functions for compatibility
export const getCharacterStats = () => {
  const total = getAllCharacters().length;
  const normal = getAllCharacters().filter(c => c.type !== 'twisted').length;
  const twisted = twistedCharacters.length;
  
  const byType = {
    toon: getAllCharacters().filter(c => c.type === 'toon').length,
    main: mainCharacters.length,
    regular: getRegularCharacters().length,
    event: eventCharacters.length,
    lethal: lethalCharacters.length,
    twisted: twisted
  };
  
  const byRarity = {
    common: commonCharacters.length,
    uncommon: uncommonCharacters.length,
    rare: rareCharacters.length,
    legendary: getAllCharacters().filter(c => c.rarity === 'legendary').length,
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
    starter: getAllCharacters().filter(c => c.requirements?.ichor === 0).length,
    easy: getAllCharacters().filter(c => c.requirements?.ichor && c.requirements.ichor <= 1000).length,
    medium: getAllCharacters().filter(c => c.requirements?.ichor && c.requirements.ichor > 1000 && c.requirements.ichor <= 3000).length,
    hard: getAllCharacters().filter(c => c.requirements?.ichor && c.requirements.ichor > 3000).length,
    eventOnly: getAllCharacters().filter(c => c.requirements?.ornaments || c.requirements?.baskets).length,
    researchRequired: getAllCharacters().filter(c => c.requirements?.research).length,
    masteryRequired: getAllCharacters().filter(c => c.requirements?.mastery).length
  };
  
  // 角色能力分析
  const abilityAnalysis = {
    healers: getAllCharacters().filter(c => 
      c.abilities?.active?.description?.toLowerCase().includes('heal') ||
      c.abilities?.passive?.description?.toLowerCase().includes('heal')
    ).length,
    support: getAllCharacters().filter(c => 
      c.abilities?.active?.description?.toLowerCase().includes('boost') ||
      c.abilities?.passive?.description?.toLowerCase().includes('boost') ||
      c.abilities?.active?.description?.toLowerCase().includes('speed') ||
      c.abilities?.passive?.description?.toLowerCase().includes('speed')
    ).length,
    stealth: getAllCharacters().filter(c => (c.attributes?.stealth || 0) >= 4).length,
    highDamage: getAllCharacters().filter(c => (c.attributes?.skillCheck || 0) >= 4).length,
    highHealth: getAllCharacters().filter(c => (c.attributes?.health || 0) >= 4).length
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

export const getCharactersByRaritySorted = (rarity: Character['rarity']): Character[] => {
  return getCharactersByRarity(rarity).sort((a, b) => a.name.localeCompare(b.name));
};

export const getNormalCharacters = (): Character[] => {
  return getAllCharacters().filter(char => char.type !== 'twisted');
};

export const getTwistedCharacters = (): Character[] => {
  return twistedCharacters;
};

export const searchCharacters = (query: string): Character[] => {
  const lowerQuery = query.toLowerCase();
  return getAllCharacters().filter(char => 
    char.name.toLowerCase().includes(lowerQuery) ||
    (char.fullName && char.fullName.toLowerCase().includes(lowerQuery)) ||
    char.description.toLowerCase().includes(lowerQuery) ||
    char.type.toLowerCase().includes(lowerQuery) ||
    char.rarity.toLowerCase().includes(lowerQuery)
  );
};

// Default export
export default {
  // Character arrays
  mainCharacters,
  commonCharacters,
  uncommonCharacters,
  rareCharacters,
  eventCharacters,
  lethalCharacters,
  twistedCharacters,
  allCharacters: getAllCharacters(),
  
  // Utility functions
  getAllCharacters,
  getCharacterById,
  getCharactersByType,
  getCharactersByRarity,
  getMainCharacters,
  getPlayableCharacters,
  getRegularCharacters,
  
  // Statistics
  characterStats,
  getCharacterStats,
  getRarityDistribution,
  getDifficultyCategories,
  getAbilityCategories,
  getCharactersByRaritySorted,
  getNormalCharacters,
  getTwistedCharacters,
  searchCharacters
};
