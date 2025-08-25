import { Character } from '../../types/character';

export const rareCharacters: Character[] = [
  {
    id: "sprout",
    name: "Sprout",
    fullName: "Sprout",
    type: "regular",
    rarity: "rare",
    isMainCharacter: false,
    totalAttributePoints: 15,
    
    attributes: {
      health: 3,
      skillCheck: 2,
      movementSpeed: 2,
      stamina: 3,
      stealth: 4,
      extractionSpeed: 4
    },
    
    abilities: {
      active: {
        name: "Heal",
        description: "Heals targeted Toon by 1 Heart at the cost of 100 Tapes",
        cooldown: "60 seconds",
        detailedDescription: "Sprout provides healing support at a higher cost than Cosmo",
        howItWorks: "Consumes 100 tapes to restore 1 heart to target ally",
        bestUsage: "Primary healing option for critical health restoration",
        visualEffects: "Plant growth healing aura with green particle effects"
      },
      passive: {
        name: "Photosynthesis",
        description: "Regenerates stamina faster when near light sources",
        detailedDescription: "Sprout draws energy from light to maintain vitality",
        howItWorks: "Provides 50% stamina regeneration boost when near any light source",
        strategicValue: "Encourages positioning near light sources for optimal performance"
      }
    },
    
    unlockRequirements: {
      ichorCost: 2000,
      researchRequirements: ["100% Research on Twisted Sprout"],
      taskCompletion: [],
      prerequisites: []
    },
    
    features: {
      hasRainbowBorder: false,
      hasUniqueVoiceLines: false,
      voiceEffect: "Plant growing sounds",
      characterRelations: ["Cosmo - Best friend and healing partner"],
      lightProducing: false
    },
    
    description: "A plant character providing primary healing and stamina regeneration",
    overview: "Sprout serves as the main healer with light-based stamina bonuses",
    gameplay: {
      strengths: ["Primary healing", "Good stealth", "Light-based stamina bonus", "High extraction speed"],
      weaknesses: ["High healing cost", "Low mobility", "Dependent on light sources"],
      bestStrategy: "Position near light sources while providing healing support to team",
      teamRole: "Primary Healer/Stamina Support"
    }
  },

  {
    id: "shelly",
    name: "Shelly",
    fullName: "Shelly",
    type: "regular",
    rarity: "rare",
    isMainCharacter: false,
    totalAttributePoints: 15,
    
    attributes: {
      health: 4,
      skillCheck: 3,
      movementSpeed: 2,
      stamina: 2,
      stealth: 3,
      extractionSpeed: 4
    },
    
    abilities: {
      active: {
        name: "Shell Shield",
        description: "Creates a protective barrier that blocks one hit from Twisteds",
        cooldown: "90 seconds",
        detailedDescription: "Shelly uses her shell to create temporary protection",
        howItWorks: "Provides one-time damage immunity to the next Twisted attack",
        bestUsage: "Use before entering dangerous areas or when expecting attacks",
        visualEffects: "Shell barrier animation with protective glow effects"
      },
      passive: {
        name: "Hard Shell",
        description: "Takes 25% less damage from all sources",
        detailedDescription: "Shelly's natural armor provides consistent damage reduction",
        howItWorks: "Reduces all incoming damage by 25%",
        strategicValue: "Provides consistent survivability in all situations"
      }
    },
    
    unlockRequirements: {
      ichorCost: 2500,
      researchRequirements: ["100% Research on Twisted Shelly"],
      taskCompletion: [],
      prerequisites: []
    },
    
    features: {
      hasRainbowBorder: false,
      hasUniqueVoiceLines: false,
      voiceEffect: "Shell clinking sounds",
      characterRelations: ["Tisha - Close friend through mastery connection"],
      lightProducing: false
    },
    
    description: "A shell character with defensive abilities and damage reduction",
    overview: "Shelly provides consistent damage mitigation and emergency protection",
    gameplay: {
      strengths: ["High health", "Damage reduction", "Emergency protection", "Good extraction speed"],
      weaknesses: ["Low mobility", "Poor stamina", "Limited offensive capabilities"],
      bestStrategy: "Use defensive abilities proactively while maintaining steady extraction work",
      teamRole: "Tank/Defensive Support"
    }
  },

  {
    id: "coal",
    name: "Coal",
    fullName: "Coal",
    type: "regular",
    rarity: "rare",
    isMainCharacter: false,
    totalAttributePoints: 15,
    
    attributes: {
      health: 3,
      skillCheck: 2,
      movementSpeed: 4,
      stamina: 4,
      stealth: 2,
      extractionSpeed: 2
    },
    
    abilities: {
      active: {
        name: "Smoke Screen",
        description: "Creates a smoke cloud that reduces Twisted detection range for 6 seconds",
        cooldown: "75 seconds",
        detailedDescription: "Coal generates smoke to obscure visibility and reduce enemy awareness",
        howItWorks: "Reduces Twisted detection range by 50% for all Toons within the smoke",
        bestUsage: "Use for team escapes or to safely complete nearby machines",
        visualEffects: "Dark smoke cloud with reduced visibility effects"
      },
      passive: {
        name: "Ash Trail",
        description: "Leaves behind a trail that slightly reduces Twisted movement speed",
        detailedDescription: "Coal's ash trail creates minor obstacles for pursuing enemies",
        howItWorks: "Reduces Twisted movement speed by 15% when they cross the ash trail",
        strategicValue: "Provides tactical advantage during chases and escapes"
      }
    },
    
    unlockRequirements: {
      ichorCost: 1800,
      researchRequirements: ["100% Research on Twisted Coal"],
      taskCompletion: [],
      prerequisites: []
    },
    
    features: {
      hasRainbowBorder: false,
      hasUniqueVoiceLines: false,
      voiceEffect: "Coal burning sounds",
      characterRelations: ["Flutter - Identical stats"],
      lightProducing: false
    },
    
    description: "A coal character with smoke-based stealth and mobility abilities",
    overview: "Coal provides team stealth support and escape assistance",
    gameplay: {
      strengths: ["Good mobility", "Team stealth support", "Escape assistance", "High stamina"],
      weaknesses: ["Lower skill check", "Limited extraction capability", "Smoke duration"],
      bestStrategy: "Use mobility for positioning while providing smoke cover for team operations",
      teamRole: "Stealth Support/Mobile Scout"
    }
  },

  {
    id: "pebble",
    name: "Pebble",
    fullName: "Pebble",
    type: "regular",
    rarity: "rare",
    isMainCharacter: false,
    totalAttributePoints: 15,
    
    attributes: {
      health: 5,
      skillCheck: 1,
      movementSpeed: 1,
      stamina: 5,
      stealth: 1,
      extractionSpeed: 3
    },
    
    abilities: {
      active: {
        name: "Rock Solid",
        description: "Becomes completely immune to damage for 3 seconds but cannot move",
        cooldown: "120 seconds",
        detailedDescription: "Pebble becomes an immovable fortress for emergency protection",
        howItWorks: "Provides complete damage immunity while preventing all movement",
        bestUsage: "Emergency protection when surrounded or during critical moments",
        visualEffects: "Rock transformation with stone barrier effects"
      },
      passive: {
        name: "Sturdy",
        description: "Cannot be stunned or knocked back by Twisteds",
        detailedDescription: "Pebble's solid nature makes him immune to displacement effects",
        howItWorks: "Completely immune to stun, knockback, and other displacement abilities",
        strategicValue: "Provides reliable positioning and consistent performance under pressure"
      }
    },
    
    unlockRequirements: {
      ichorCost: 3000,
      researchRequirements: ["100% Research on Twisted Pebble"],
      taskCompletion: [],
      prerequisites: []
    },
    
    features: {
      hasRainbowBorder: false,
      hasUniqueVoiceLines: false,
      voiceEffect: "Rock grinding sounds",
      characterRelations: ["Toodles - Connected through mastery requirement"],
      lightProducing: false
    },
    
    description: "A rock character with maximum health and stamina, specializing in defense",
    overview: "Pebble represents the ultimate tank with maximum survivability",
    gameplay: {
      strengths: ["Maximum health (5 stars)", "Maximum stamina (5 stars)", "Damage immunity", "Stun immunity"],
      weaknesses: ["Minimum movement speed", "Minimum skill check", "Minimum stealth", "Immobile during active"],
      bestStrategy: "Use as an anchor point for team operations while leveraging defensive abilities",
      teamRole: "Ultimate Tank/Immovable Anchor"
    }
  },

  {
    id: "sprig",
    name: "Sprig",
    fullName: "Sprig",
    type: "regular",
    rarity: "rare",
    isMainCharacter: false,
    totalAttributePoints: 15,
    
    attributes: {
      health: 3,
      skillCheck: 4,
      movementSpeed: 3,
      stamina: 2,
      stealth: 3,
      extractionSpeed: 3
    },
    
    abilities: {
      active: {
        name: "Growth Spurt",
        description: "Increases all stats by 1 star for 10 seconds",
        cooldown: "100 seconds",
        detailedDescription: "Sprig experiences a temporary growth phase with enhanced capabilities",
        howItWorks: "Temporarily increases all attributes by 1 star for the duration",
        bestUsage: "Use during critical machine completion or dangerous situations",
        visualEffects: "Plant growth animation with stat boost indicators"
      },
      passive: {
        name: "Adaptive Growth",
        description: "Gains bonus stats based on the current floor number",
        detailedDescription: "Sprig's performance improves as he progresses through floors",
        howItWorks: "Gains +0.5 stars to all stats for every 5 floors completed",
        strategicValue: "Provides scaling performance improvements for long-term progression"
      }
    },
    
    unlockRequirements: {
      ichorCost: 2200,
      researchRequirements: ["100% Research on Twisted Sprig"],
      taskCompletion: [],
      prerequisites: []
    },
    
    features: {
      hasRainbowBorder: false,
      hasUniqueVoiceLines: false,
      voiceEffect: "Plant growing sounds",
      characterRelations: ["Spriglet - Evolution form"],
      lightProducing: false
    },
    
    description: "A growing plant character with adaptive stat bonuses and temporary enhancements",
    overview: "Sprig provides balanced performance with scaling improvements and burst capabilities",
    gameplay: {
      strengths: ["High skill check", "Balanced stats", "Temporary enhancement", "Scaling performance"],
      weaknesses: ["Low stamina", "Requires floor progression", "Limited burst duration"],
      bestStrategy: "Progress through floors to maximize passive bonuses while using active for critical moments",
      teamRole: "Adaptive Specialist/Balanced Support"
    }
  },

  {
    id: "spriglet",
    name: "Spriglet",
    fullName: "Spriglet",
    type: "regular",
    rarity: "rare",
    isMainCharacter: false,
    totalAttributePoints: 15,
    
    attributes: {
      health: 2,
      skillCheck: 5,
      movementSpeed: 4,
      stamina: 1,
      stealth: 3,
      extractionSpeed: 3
    },
    
    abilities: {
      active: {
        name: "Rapid Growth",
        description: "Increases extraction speed by 75% for 8 seconds",
        cooldown: "80 seconds",
        detailedDescription: "Spriglet accelerates growth for enhanced extraction efficiency",
        howItWorks: "Provides significant extraction speed boost for machine completion",
        bestUsage: "Use on important machines or when time is critical",
        visualEffects: "Accelerated plant growth with speed trail effects"
      },
      passive: {
        name: "Young Sprout",
        description: "Movement speed increases when health is low",
        detailedDescription: "Spriglet becomes more agile when threatened",
        howItWorks: "Gains 30% movement speed when health drops below 50%",
        strategicValue: "Provides escape mechanism when in danger"
      }
    },
    
    unlockRequirements: {
      ichorCost: 2400,
      researchRequirements: ["100% Research on Twisted Spriglet"],
      taskCompletion: [],
      prerequisites: []
    },
    
    features: {
      hasRainbowBorder: false,
      hasUniqueVoiceLines: false,
      voiceEffect: "Young plant sounds",
      characterRelations: ["Sprig - Base form"],
      lightProducing: false
    },
    
    description: "A young plant character with maximum skill check and speed-based abilities",
    overview: "Spriglet excels at precision work with enhanced mobility under pressure",
    gameplay: {
      strengths: ["Maximum skill check (5 stars)", "High mobility", "Extraction speed burst", "Danger-based speed"],
      weaknesses: ["Low health", "Minimum stamina", "Health-dependent mobility"],
      bestStrategy: "Focus on precision machine work while using mobility for positioning and escapes",
      teamRole: "Precision Specialist/Mobile Extractor"
    }
  },

  {
    id: "spriggy",
    name: "Spriggy",
    fullName: "Spriggy",
    type: "regular",
    rarity: "rare",
    isMainCharacter: false,
    totalAttributePoints: 15,
    
    attributes: {
      health: 3,
      skillCheck: 3,
      movementSpeed: 3,
      stamina: 3,
      stealth: 4,
      extractionSpeed: 3
    },
    
    abilities: {
      active: {
        name: "Camouflage",
        description: "Becomes nearly invisible to Twisteds for 6 seconds",
        cooldown: "90 seconds",
        detailedDescription: "Spriggy blends into the environment for enhanced stealth",
        howItWorks: "Reduces Twisted detection range by 80% for the duration",
        bestUsage: "Use for safe machine completion or team reconnaissance",
        visualEffects: "Environment blending effect with transparency animation"
      },
      passive: {
        name: "Natural Blend",
        description: "Stealth increases when near plants or natural elements",
        detailedDescription: "Spriggy's plant nature enhances stealth in natural environments",
        howItWorks: "Gains +1 star stealth when near any plant or natural object",
        strategicValue: "Encourages positioning in natural areas for optimal stealth"
      }
    },
    
    unlockRequirements: {
      ichorCost: 2600,
      researchRequirements: ["100% Research on Twisted Spriggy"],
      taskCompletion: [],
      prerequisites: []
    },
    
    features: {
      hasRainbowBorder: false,
      hasUniqueVoiceLines: false,
      voiceEffect: "Plant rustling sounds",
      characterRelations: ["Sprigget - Evolution form"],
      lightProducing: false
    },
    
    description: "A plant character specializing in stealth and environmental camouflage",
    overview: "Spriggy provides excellent stealth capabilities with environmental bonuses",
    gameplay: {
      strengths: ["Good stealth", "Environmental bonuses", "Camouflage ability", "Balanced stats"],
      weaknesses: ["No outstanding specializations", "Environment dependent", "Limited offensive capabilities"],
      bestStrategy: "Position in natural areas for stealth bonuses while using camouflage for critical operations",
      teamRole: "Stealth Specialist/Environmental Scout"
    }
  },

  {
    id: "sprigget",
    name: "Sprigget",
    fullName: "Sprigget",
    type: "regular",
    rarity: "rare",
    isMainCharacter: false,
    totalAttributePoints: 15,
    
    attributes: {
      health: 4,
      skillCheck: 2,
      movementSpeed: 2,
      stamina: 4,
      stealth: 3,
      extractionSpeed: 3
    },
    
    abilities: {
      active: {
        name: "Root Network",
        description: "Creates a network that reveals nearby Twisteds for 8 seconds",
        cooldown: "100 seconds",
        detailedDescription: "Sprigget extends roots to gather information about nearby threats",
        howItWorks: "Reveals all Twisteds within range and shows their movement patterns",
        bestUsage: "Use for reconnaissance before entering new areas",
        visualEffects: "Root network animation with enemy revelation effects"
      },
      passive: {
        name: "Deep Roots",
        description: "Cannot be moved by Twisted abilities",
        detailedDescription: "Sprigget's deep roots provide stability against displacement",
        howItWorks: "Immune to push, pull, and other movement-impairing effects",
        strategicValue: "Provides consistent positioning and reliable machine operation"
      }
    },
    
    unlockRequirements: {
      ichorCost: 2800,
      researchRequirements: ["100% Research on Twisted Sprigget"],
      taskCompletion: [],
      prerequisites: []
    },
    
    features: {
      hasRainbowBorder: false,
      hasUniqueVoiceLines: false,
      voiceEffect: "Root movement sounds",
      characterRelations: ["Spriggy - Base form"],
      lightProducing: false
    },
    
    description: "A mature plant character with information gathering and stability abilities",
    overview: "Sprigget provides reconnaissance capabilities with reliable positioning",
    gameplay: {
      strengths: ["Good health", "Good stamina", "Enemy revelation", "Movement immunity"],
      weaknesses: ["Low mobility", "Lower skill check", "Limited offensive capabilities"],
      bestStrategy: "Use root network for team safety while maintaining steady machine work",
      teamRole: "Reconnaissance Specialist/Stable Worker"
    }
  },

  {
    id: "spriggette",
    name: "Spriggette",
    fullName: "Spriggette",
    type: "regular",
    rarity: "rare",
    isMainCharacter: false,
    totalAttributePoints: 15,
    
    attributes: {
      health: 3,
      skillCheck: 4,
      movementSpeed: 3,
      stamina: 2,
      stealth: 3,
      extractionSpeed: 4
    },
    
    abilities: {
      active: {
        name: "Flower Power",
        description: "Increases skill check window size and extraction speed for 12 seconds",
        cooldown: "110 seconds",
        detailedDescription: "Spriggette blooms with enhanced precision and efficiency",
        howItWorks: "Doubles skill check window size and provides 50% extraction speed boost",
        bestUsage: "Use on difficult machines or when maximum efficiency is needed",
        visualEffects: "Flower blooming animation with enhanced extraction effects"
      },
      passive: {
        name: "Seasonal Bloom",
        description: "Performance varies based on in-game time or floor progression",
        detailedDescription: "Spriggette's abilities follow natural cycles",
        howItWorks: "Gains 25% bonus to all stats on even-numbered floors, 25% penalty on odd floors",
        strategicValue: "Provides strategic timing considerations for optimal performance"
      }
    },
    
    unlockRequirements: {
      ichorCost: 3200,
      researchRequirements: ["100% Research on Twisted Spriggette"],
      taskCompletion: [],
      prerequisites: []
    },
    
    features: {
      hasRainbowBorder: false,
      hasUniqueVoiceLines: false,
      voiceEffect: "Flower blooming sounds",
      characterRelations: ["Sprigget - Evolution form"],
      lightProducing: false
    },
    
    description: "A flowering plant character with precision enhancement and seasonal bonuses",
    overview: "Spriggette provides enhanced precision with cyclical performance patterns",
    gameplay: {
      strengths: ["High skill check", "Good extraction speed", "Precision enhancement", "Strategic timing"],
      weaknesses: ["Low stamina", "Cyclical performance", "Requires floor planning"],
      bestStrategy: "Plan floor progression to maximize even-floor bonuses while using flower power strategically",
      teamRole: "Precision Enhancer/Strategic Specialist"
    }
  }
];
