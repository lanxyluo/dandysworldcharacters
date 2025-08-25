import { Character } from '../../types/character';

export const eventCharacters: Character[] = [
  {
    id: "coal",
    name: "Coal",
    fullName: "Coal",
    type: "event",
    rarity: "uncommon",
    isMainCharacter: false,
    totalAttributePoints: 15,
    image: "🔥",
    
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
        name: "Scout",
        description: "Highlights all items on the floor for 10 seconds",
        cooldown: "75 seconds",
        detailedDescription: "Coal's scouting ability reveals all collectible items across the current floor. *Based on character description inference, actual effects subject to in-game performance*",
        howItWorks: "Reveals all items including tapes, batteries, and healing items with glowing outlines",
        bestUsage: "Use when entering new floors or when the team needs specific resources",
        visualEffects: "Dark smoke trails revealing hidden items with coal-dust sparkle effects"
      },
      passive: {
        name: "Naughty List",
        description: "Gains speed boost when Twisted are nearby",
        detailedDescription: "Coal becomes more agile when danger is present, fitting his naughty nature. *Based on character description inference, actual effects subject to in-game performance*",
        howItWorks: "Receives 15% movement speed increase when any Twisted is within detection range",
        strategicValue: "Provides escape mobility during dangerous encounters"
      }
    },
    
    unlockRequirements: {
      ichorCost: 1200,
      researchRequirements: ["Christmas Event participation"],
      taskCompletion: ["Complete Christmas Event missions"],
      prerequisites: ["Christmas 2024 Event"],
      specialCurrency: {
        type: "Ornaments",
        amount: 500
      }
    },
    
    features: {
      hasRainbowBorder: false,
      hasUniqueVoiceLines: false,
      voiceEffect: "Coal crackling sounds",
      characterRelations: ["Christmas event character", "Flutter - Identical stats"],
      lightProducing: false
    },
    
    description: "A Christmas coal character with item detection and danger-response mobility",
    overview: "Coal specializes in resource location and emergency mobility during dangerous situations",
    gameplay: {
      strengths: ["Item detection ability", "Danger-responsive speed", "Good mobility base stats", "Event exclusivity"],
      weaknesses: ["Low skill check", "Average health", "Event-limited availability"],
      bestStrategy: "Use for resource gathering while maintaining mobility advantage during Twisted encounters",
      teamRole: "Scout/Resource Gatherer"
    }
  },

  {
    id: "ginger",
    name: "Ginger",
    fullName: "Ginger",
    type: "event",
    rarity: "uncommon",
    isMainCharacter: false,
    totalAttributePoints: 15,
    image: "🍪",
    
    attributes: {
      health: 3,
      skillCheck: 1,
      movementSpeed: 3,
      stamina: 4,
      stealth: 4,
      extractionSpeed: 3
    },
    
    abilities: {
      active: {
        name: "Gingerbread Healing",
        description: "Heals targeted Toon by 1 Heart at the cost of 75 Tapes",
        cooldown: "100 seconds",
        detailedDescription: "Ginger provides sweet healing comfort with longer range than other healers. *Based on character description inference, actual effects subject to in-game performance*",
        howItWorks: "Consumes 75 tapes to restore 1 heart to target ally with extended range (150 units vs Cosmo's 60)",
        bestUsage: "More expensive than Cosmo but cheaper than Sprout, with better range for safer healing",
        visualEffects: "Gingerbread cookie healing aura with sweet particle effects"
      },
      passive: {
        name: "Sweet Aroma",
        description: "Provides stamina regeneration boost to nearby teammates",
        detailedDescription: "Ginger's sweet scent helps allies recover stamina faster. *Based on character description inference, actual effects subject to in-game performance*",
        howItWorks: "Provides 20% stamina regeneration boost to all Toons within range",
        strategicValue: "Supports team endurance during extended operations with sweet healing presence"
      }
    },
    
    unlockRequirements: {
      ichorCost: 1000,
      researchRequirements: ["Christmas Event participation"],
      taskCompletion: ["Complete Christmas Event missions"],
      prerequisites: ["Christmas 2024 Event"],
      specialCurrency: {
        type: "Ornaments",
        amount: 400
      }
    },
    
    features: {
      hasRainbowBorder: false,
      hasUniqueVoiceLines: false,
      voiceEffect: "Cookie crumbling sounds",
      characterRelations: ["Christmas event character", "Similar to Cosmo but with extended range"],
      lightProducing: false
    },
    
    description: "A gingerbread character providing healing with extended range and stamina support",
    overview: "Ginger serves as a mid-tier healer with better range than Cosmo but lower cost than Sprout",
    gameplay: {
      strengths: ["Extended healing range", "Good stealth", "Stamina support aura", "Balanced healing cost"],
      weaknesses: ["Very low skill check (1 star)", "Event-limited availability", "Moderate cooldown"],
      bestStrategy: "Use good stealth to position safely while providing ranged healing and stamina support",
      teamRole: "Ranged Healer/Stamina Support"
    }
  },

  {
    id: "cocoa",
    name: "Cocoa",
    fullName: "Cocoa",
    type: "event",
    rarity: "uncommon",
    isMainCharacter: false,
    totalAttributePoints: 15,
    image: "☕",
    
    attributes: {
      health: 3,
      skillCheck: 3,
      movementSpeed: 4,
      stamina: 2,
      stealth: 3,
      extractionSpeed: 2
    },
    
    abilities: {
      active: {
        name: "Hot Chocolate",
        description: "Restores 75% stamina to all nearby teammates",
        cooldown: "90 seconds",
        detailedDescription: "Cocoa provides warm, comforting stamina restoration to the entire team. *Based on character description inference, actual effects subject to in-game performance*",
        howItWorks: "Restores 75% of maximum stamina to all Toons within range",
        bestUsage: "Use when multiple teammates need stamina restoration for continued operations",
        visualEffects: "Warm steam clouds with chocolate aroma particles affecting nearby allies"
      },
      passive: {
        name: "Marshmallow Trail",
        description: "Leaves behind BonBons that teammates can collect for minor stamina restoration",
        detailedDescription: "Cocoa occasionally drops sweet treats that provide small stamina boosts. *Based on character description inference, actual effects subject to in-game performance*",
        howItWorks: "10% chance per machine interaction to spawn a BonBon that restores 25% stamina",
        strategicValue: "Provides ongoing stamina support through collectible treats"
      }
    },
    
    unlockRequirements: {
      ichorCost: 800,
      researchRequirements: ["Christmas Event participation"],
      taskCompletion: ["Complete Christmas Event missions"],
      prerequisites: ["Christmas 2024 Event"],
      specialCurrency: {
        type: "Ornaments",
        amount: 300
      }
    },
    
    features: {
      hasRainbowBorder: false,
      hasUniqueVoiceLines: false,
      voiceEffect: "Hot liquid pouring sounds",
      characterRelations: ["Christmas event character"],
      lightProducing: false
    },
    
    description: "A hot chocolate character focused on team stamina restoration and sweet treat generation",
    overview: "Cocoa provides area-of-effect stamina support with ongoing treat generation for team sustainability",
    gameplay: {
      strengths: ["Area stamina restoration", "Treat generation", "Good mobility", "Team support focus"],
      weaknesses: ["Low stamina herself", "Event-limited availability", "Moderate cooldown"],
      bestStrategy: "Position centrally to maximize stamina restoration coverage while generating treats for team",
      teamRole: "Area Stamina Support/Treat Provider"
    }
  },

  {
    id: "eggson",
    name: "Eggson",
    fullName: "Eggson",
    type: "event",
    rarity: "common",
    isMainCharacter: false,
    totalAttributePoints: 15,
    image: "🥚",
    
    attributes: {
      health: 3,
      skillCheck: 3,
      movementSpeed: 3,
      stamina: 3,
      stealth: 2,
      extractionSpeed: 2
    },
    
    abilities: {
      active: {
        name: "Egg Hunt",
        description: "Spawns 3 random items at random locations on the floor",
        cooldown: "120 seconds",
        detailedDescription: "Eggson creates an impromptu egg hunt by spawning useful items across the floor. *Based on character description inference, actual effects subject to in-game performance*",
        howItWorks: "Places 3 random beneficial items at random locations that teammates can collect",
        bestUsage: "Use when team needs resources or to create strategic item placement for later use",
        visualEffects: "Easter egg spawning animation with hunt-themed particle effects"
      },
      passive: {
        name: "Easter Surprise",
        description: "Has a small chance to find extra items when collecting any item",
        detailedDescription: "Eggson's Easter spirit occasionally provides bonus item discoveries. *Based on character description inference, actual effects subject to in-game performance*",
        howItWorks: "10% chance when collecting any item to spawn an additional random item nearby",
        strategicValue: "Provides ongoing resource multiplication for improved team sustainability"
      }
    },
    
    unlockRequirements: {
      ichorCost: 600,
      researchRequirements: ["Easter Event participation"],
      taskCompletion: ["Complete Easter Event missions"],
      prerequisites: ["Easter 2024 Event"],
      specialCurrency: {
        type: "Baskets",
        amount: 200
      }
    },
    
    features: {
      hasRainbowBorder: false,
      hasUniqueVoiceLines: false,
      voiceEffect: "Egg cracking sounds",
      characterRelations: ["Easter event character"],
      lightProducing: false
    },
    
    description: "An Easter egg character focused on item generation and resource multiplication",
    overview: "Eggson specializes in resource generation and team supply management through Easter-themed abilities",
    gameplay: {
      strengths: ["Item generation ability", "Resource multiplication chance", "Balanced stats", "Low cost"],
      weaknesses: ["No outstanding specializations", "Event-limited availability", "RNG-dependent passive"],
      bestStrategy: "Focus on item collection and generation while providing steady team resource support",
      teamRole: "Resource Generator/Item Specialist"
    }
  }
];
