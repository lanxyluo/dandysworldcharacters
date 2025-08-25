import { Character } from '../../types/character';

export const mainCharacters: Character[] = [
  {
    id: "astro",
    name: "Astro",
    fullName: "Astro Novalite",
    image: "🌙",
    type: "main",
    rarity: "legendary",
    description: "A light aqua crescent moon with cosmic abilities, wrapped in a cornflower blanket",
    stats: {
      skillCheck: 4,
      stealth: 5,
      speed: 4,
      health: 2,
      damage: 3
    },
    abilities: {
      active: {
        name: "Nap Time",
        description: "Creates a pulse that fully restores the Stamina of nearby Toons",
        cooldown: 75
      },
      passive: {
        name: "Well Rested",
        description: "Regenerates Stamina 50% faster and detects low-stamina Toons"
      }
    },
    requirements: {
      ichor: 5000,
      research: "100% Research on Twisted Astro",
      note: "Must have encountered Twisted Dandy"
    }
  },

  {
    id: "bassie",
    name: "Bassie",
    fullName: "Bassie Bloomington",
    image: "🐰",
    type: "main",
    rarity: "legendary",
    description: "A cheerful Easter bunny character with spring-themed abilities",
    stats: {
      skillCheck: 1,
      stealth: 4,
      speed: 5,
      health: 2,
      damage: 2
    },
    abilities: {
      active: {
        name: "Springful Sharing",
        description: "Drops items from inventory to share with other Toons",
        cooldown: 0
      },
      passive: {
        name: "Spring Collection",
        description: "Enhanced item finding and collection abilities"
      }
    },
    requirements: {
      ichor: 3000,
      note: "Easter event character"
    }
  },

  {
    id: "dandy",
    name: "Dandy",
    fullName: "Dandy",
    image: "🎭",
    type: "main",
    rarity: "legendary",
    description: "The main protagonist with balanced abilities",
    stats: {
      skillCheck: 3,
      stealth: 3,
      speed: 3,
      health: 3,
      damage: 3
    },
    abilities: {
      active: {
        name: "Main Character Power",
        description: "Special ability unique to main characters",
        cooldown: 60
      },
      passive: {
        name: "Protagonist's Luck",
        description: "Slightly increased chance of success in various situations"
      }
    },
    requirements: {
      ichor: 0,
      note: "Starting main character"
    }
  },

  {
    id: "dyle",
    name: "Dyle",
    fullName: "Dyle",
    image: "🌟",
    type: "main",
    rarity: "legendary",
    description: "A star-themed character with unique abilities",
    stats: {
      skillCheck: 4,
      stealth: 2,
      speed: 4,
      health: 3,
      damage: 3
    },
    abilities: {
      active: {
        name: "Stellar Burst",
        description: "Releases a burst of stellar energy",
        cooldown: 90
      },
      passive: {
        name: "Starlight Guidance",
        description: "Provides subtle guidance in dark areas"
      }
    },
    requirements: {
      ichor: 2000,
      note: "Main character unlock"
    }
  },

  {
    id: "vee",
    name: "Vee",
    fullName: "Vee",
    image: "💫",
    type: "main",
    rarity: "legendary",
    description: "A mysterious character with powerful abilities",
    stats: {
      skillCheck: 5,
      stealth: 4,
      speed: 2,
      health: 2,
      damage: 4
    },
    abilities: {
      active: {
        name: "Void Manipulation",
        description: "Manipulates the void for various effects",
        cooldown: 120
      },
      passive: {
        name: "Void Sense",
        description: "Can sense hidden dangers and opportunities"
      }
    },
    requirements: {
      ichor: 4000,
      note: "Advanced main character"
    },
    detailedGuide: {
      abilityMechanics: {
        active: {
          detailedDescription: "Vee操控虚空能量，创造多种战术效果。*基于角色描述推断，具体效果以游戏实际表现为准*",
          howItWorks: "消耗虚空能量，在目标区域创造虚空场",
          bestUsage: "在关键位置设置虚空陷阱或保护区域",
          visualEffects: "深紫色虚空漩涡，带有星尘粒子效果"
        },
        passive: {
          detailedDescription: "Vee对虚空能量异常敏感",
          howItWorks: "自动检测附近的隐藏威胁和机会",
          strategicValue: "提供战术情报，避免危险并发现优势"
        }
      },
      strategies: {
        playingAs: {
          overview: "利用高技能检查和虚空能力进行战术控制",
          tips: ["优先提升技能检查", "战略性使用虚空能力"],
          commonMistakes: ["忽视低生命值", "过度依赖主动技能"],
          advancedTechniques: ["预判敌人移动，设置虚空陷阱"]
        },
        playingAgainst: {
          overview: "Vee是一个高技能但脆弱的角色",
          counterStrategies: ["利用低生命值", "避免进入虚空场"],
          whatToAvoid: ["在狭窄空间与她对抗"],
          teamComposition: ["分散注意力，避免聚集"]
        }
      },
      interactions: {
        synergies: {
          description: "与需要保护的角色配合良好",
          bestPartners: [
            {
              character: "Astro",
              reason: "Vee提供保护，Astro提供治疗",
              combo: "虚空保护配合耐力恢复"
            }
          ]
        },
        counters: {
          description: "在战术控制方面有优势",
          strongAgainst: ["需要精确操作的任务"],
          weakAgainst: ["高伤害敌人", "需要高移动速度的任务"]
        }
      },
      scenarios: {
        bestMaps: ["需要战术控制的地图"],
        bestSituations: ["防守任务", "需要精确操作"],
        challengingSituations: ["高伤害环境", "需要快速移动"],
        teamRoles: ["战术控制", "技能专家"]
      }
    }
  }
];
