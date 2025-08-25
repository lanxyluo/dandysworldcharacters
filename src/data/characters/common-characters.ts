import { Character } from '../../types/character';

export const commonCharacters: Character[] = [
  {
    id: "boxten",
    name: "Boxten",
    fullName: "Boxten",
    image: "🎵",
    type: "regular",
    rarity: "common",
    description: "A music box character serving as one of the starter options with balanced stats",
    stats: {
      skillCheck: 3,
      stealth: 2,
      speed: 3,
      health: 3,
      damage: 3
    },
    abilities: {
      active: {
        name: "Wind-Up",
        description: "Increases Extraction Speed by 50% for 10 seconds",
        cooldown: 100
      },
      passive: {
        name: "Clutch",
        description: "Slightly increases Extraction Speed when alone on a machine"
      }
    },
    requirements: {
      ichor: 0,
      note: "Starter character"
    },
    detailedGuide: {
      abilityMechanics: {
        active: {
          detailedDescription: "Boxten winds up his internal mechanism to boost extraction efficiency temporarily. *基于角色描述推断，具体效果以游戏实际表现为准*",
          howItWorks: "提供显著但临时的机器完成速度提升",
          bestUsage: "在开始重要机器或时间关键提取前使用",
          visualEffects: "机械上发条动画，带有发条粒子效果"
        },
        passive: {
          detailedDescription: "Boxten在独立工作时表现更好",
          howItWorks: "在没有队友协助完成机器时提供15%提取速度提升",
          strategicValue: "鼓励独立机器完成，减少团队聚集"
        }
      },
      strategies: {
        playingAs: {
          overview: "专注于独立机器完成，同时保持稳定的团队支持",
          tips: ["利用主动技能在关键时刻提升效率", "独立工作时发挥被动技能优势"],
          commonMistakes: ["过度依赖团队协助", "忽视独立工作的优势"],
          advancedTechniques: ["计算技能冷却时间以最大化效率"]
        },
        playingAgainst: {
          overview: "Boxten是一个平衡的角色，没有明显的弱点",
          counterStrategies: ["在机器完成时分散注意力"],
          whatToAvoid: ["让他独立完成机器"],
          teamComposition: ["避免与他聚集在同一机器上"]
        }
      },
      interactions: {
        synergies: {
          description: "与需要提取速度支持的角色配合良好",
          bestPartners: [
            {
              character: "Poppy",
              reason: "同为起始角色，配合默契",
              combo: "Boxten提供速度，Poppy提供生存能力"
            }
          ]
        },
        counters: {
          description: "没有明显的克制关系",
          strongAgainst: [],
          weakAgainst: []
        }
      },
      scenarios: {
        bestMaps: ["需要快速机器完成的地图"],
        bestSituations: ["独立工作场景", "时间关键任务"],
        challengingSituations: ["需要高隐蔽性的任务"],
        teamRoles: ["全能手/独立提取者"]
      }
    }
  },

  {
    id: "poppy",
    name: "Poppy",
    fullName: "Poppy",
    image: "🫧",
    type: "regular",
    rarity: "common",
    description: "A cheerful bubble character offering survival and visibility benefits",
    stats: {
      skillCheck: 3,
      stealth: 3,
      speed: 2,
      health: 3,
      damage: 3
    },
    abilities: {
      active: {
        name: "Panic Pop",
        description: "Instantly gain 50% movement speed for 6 seconds when taking damage",
        cooldown: 60
      },
      passive: {
        name: "Bright",
        description: "Slightly increases visibility during blackouts"
      }
    },
    requirements: {
      ichor: 0,
      note: "Starter character"
    },
    detailedGuide: {
      abilityMechanics: {
        active: {
          detailedDescription: "Poppy的生存本能在她受伤时启动，提供紧急逃生速度。*基于角色描述推断，具体效果以游戏实际表现为准*",
          howItWorks: "受伤时自动触发，无法手动激活",
          bestUsage: "在危险遭遇中提供自动逃生机制",
          visualEffects: "能力激活时出现红色速度轨迹效果"
        },
        passive: {
          detailedDescription: "Poppy的明亮天性在黑暗期间提供轻微照明",
          howItWorks: "在停电事件期间增加个人光半径20%",
          strategicValue: "在停电条件下改善导航和安全性"
        }
      },
      strategies: {
        playingAs: {
          overview: "谨慎使用，在遭遇出错时依赖逃生能力",
          tips: ["保持谨慎的游戏风格", "利用被动技能在停电时导航"],
          commonMistakes: ["过于激进的游戏风格", "忽视被动技能的优势"],
          advancedTechniques: ["在停电期间主动寻找队友"]
        },
        playingAgainst: {
          overview: "Poppy是一个生存导向的角色",
          counterStrategies: ["避免让她受伤触发速度提升"],
          whatToAvoid: ["在停电期间与她对抗"],
          teamComposition: ["利用她的照明能力"]
        }
      },
      interactions: {
        synergies: {
          description: "与需要生存支持的角色配合良好",
          bestPartners: [
            {
              character: "Boxten",
              reason: "同为起始角色，配合默契",
              combo: "Poppy提供生存能力，Boxten提供效率"
            }
          ]
        },
        counters: {
          description: "在停电期间有优势",
          strongAgainst: ["黑暗环境"],
          weakAgainst: ["高伤害敌人"]
        }
      },
      scenarios: {
        bestMaps: ["有停电机制的地图"],
        bestSituations: ["生存场景", "黑暗环境"],
        challengingSituations: ["需要高速度的任务"],
        teamRoles: ["生存者/照明支持"]
      }
    }
  },

  {
    id: "finn",
    name: "Finn",
    fullName: "Finn",
    image: "🐟",
    type: "regular",
    rarity: "common",
    description: "A fish character focused on speed and team mobility support",
    stats: {
      skillCheck: 2,
      stealth: 3,
      speed: 4,
      health: 3,
      damage: 3
    },
    abilities: {
      active: {
        name: "Hurry!",
        description: "Grants temporary movement speed boost to nearby teammates",
        cooldown: 75
      },
      passive: {
        name: "Speedy",
        description: "Starts each floor with increased movement speed that gradually decreases"
      }
    },
    requirements: {
      ichor: 50
    },
    detailedGuide: {
      abilityMechanics: {
        active: {
          detailedDescription: "Finn激励附近盟友，提供临时速度增强。*基于角色描述推断，具体效果以游戏实际表现为准*",
          howItWorks: "为范围内所有Toon提供25%移动速度提升，持续8秒",
          bestUsage: "在团队重新定位或逃离危险区域时使用",
          visualEffects: "激励光环，受影响Toon周围有速度轨迹效果"
        },
        passive: {
          detailedDescription: "Finn每层开始时精力充沛，但随时间失去动力",
          howItWorks: "开始时+1星移动速度，每3分钟减少0.2星",
          strategicValue: "为快速初始进展提供早期楼层移动优势"
        }
      },
      strategies: {
        playingAs: {
          overview: "最大化早期楼层效率，在关键移动时使用团队提升",
          tips: ["利用早期速度优势", "在团队移动时使用主动技能"],
          commonMistakes: ["忽视速度随时间减少", "在后期楼层过度依赖速度"],
          advancedTechniques: ["计算速度减少时间以优化移动"]
        },
        playingAgainst: {
          overview: "Finn在早期楼层有优势",
          counterStrategies: ["在后期楼层与她对抗"],
          whatToAvoid: ["在早期楼层与她竞争"],
          teamComposition: ["利用她的团队速度提升"]
        }
      },
      interactions: {
        synergies: {
          description: "与需要移动支持的角色配合良好",
          bestPartners: [
            {
              character: "任何角色",
              reason: "提供团队速度提升",
              combo: "Finn提供速度，队友提供其他能力"
            }
          ]
        },
        counters: {
          description: "在早期楼层有优势",
          strongAgainst: ["早期楼层"],
          weakAgainst: ["后期楼层", "需要高技能检查的任务"]
        }
      },
      scenarios: {
        bestMaps: ["需要快速移动的地图"],
        bestSituations: ["早期楼层", "团队重新定位"],
        challengingSituations: ["后期楼层", "需要高技能检查的任务"],
        teamRoles: ["移动支持/早期游戏"]
      }
    }
  },

  {
    id: "cosmo",
    name: "Cosmo",
    fullName: "Cosmo",
    image: "🌸",
    type: "regular",
    rarity: "common",
    description: "A flower character providing economical healing and team stamina support",
    stats: {
      skillCheck: 1,
      stealth: 4,
      speed: 3,
      health: 3,
      damage: 3
    },
    abilities: {
      active: {
        name: "Comfort",
        description: "Heals targeted Toon by 1 Heart at the cost of 50 Tapes",
        cooldown: 60
      },
      passive: {
        name: "Calming Aura",
        description: "Slightly increases stamina regeneration for nearby teammates"
      }
    },
    requirements: {
      ichor: 100
    },
    detailedGuide: {
      abilityMechanics: {
        active: {
          detailedDescription: "Cosmo以比Sprout更低的成本提供治疗支持。*基于角色描述推断，具体效果以游戏实际表现为准*",
          howItWorks: "消耗50个磁带为目标盟友恢复1颗心",
          bestUsage: "常规维护治疗的更经济选择",
          visualEffects: "温和的治疗光环，带有植物主题粒子效果"
        },
        passive: {
          detailedDescription: "Cosmo的平和天性帮助盟友更快恢复耐力",
          howItWorks: "为范围内所有Toon提供25%耐力再生提升",
          strategicValue: "在延长操作期间支持团队耐力"
        }
      },
      strategies: {
        playingAs: {
          overview: "专注于支持角色，经济治疗和隐蔽定位",
          tips: ["利用高隐蔽性", "经济使用治疗能力"],
          commonMistakes: ["过度使用治疗", "忽视隐蔽优势"],
          advancedTechniques: ["计算磁带成本以优化治疗"]
        },
        playingAgainst: {
          overview: "Cosmo是一个支持角色",
          counterStrategies: ["在隐蔽任务中与她对抗"],
          whatToAvoid: ["让她保持隐蔽"],
          teamComposition: ["利用她的治疗和耐力支持"]
        }
      },
      interactions: {
        synergies: {
          description: "与需要治疗支持的角色配合良好",
          bestPartners: [
            {
              character: "Sprout",
              reason: "最好的朋友和治疗伙伴",
              combo: "Cosmo提供经济治疗，Sprout提供高级治疗"
            }
          ]
        },
        counters: {
          description: "在隐蔽任务中有优势",
          strongAgainst: ["隐蔽任务"],
          weakAgainst: ["需要高技能检查的任务"]
        }
      },
      scenarios: {
        bestMaps: ["需要隐蔽的地图"],
        bestSituations: ["支持场景", "隐蔽任务"],
        challengingSituations: ["需要高技能检查的任务"],
        team角色: ["预算治疗师/支持"]
      }
    }
  }
];
