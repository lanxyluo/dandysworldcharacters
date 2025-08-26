import { Character } from '../../types/character';

export const commonCharacters: Character[] = [
  {
    id: "boxten",
    name: "Boxten",
    fullName: "Boxten",
    type: "regular",
    rarity: "common",
    isMainCharacter: false,
    totalAttributePoints: 15,
    image: "📦",
    
    attributes: {
      health: 3,
      skillCheck: 3,
      movementSpeed: 3,
      stamina: 3,
      stealth: 2,
      extractionSpeed: 3
    },
    
    abilities: {
      active: {
        name: "Wind-Up",
        description: "Increases Extraction Speed by 50% for 10 seconds",
        cooldown: "100 seconds",
        detailedDescription: "Boxten winds up his internal mechanism to boost extraction efficiency temporarily",
        howItWorks: "Provides a significant but temporary boost to machine completion speed",
        bestUsage: "Use before starting important machines or during time-critical extractions",
        visualEffects: "Mechanical winding animation with clockwork particle effects"
      },
      passive: {
        name: "Clutch",
        description: "Slightly increases Extraction Speed when alone on a machine",
        detailedDescription: "Boxten performs better under pressure when working independently",
        howItWorks: "Provides 15% extraction speed boost when completing machines without teammate assistance",
        strategicValue: "Encourages independent machine completion and reduces team clustering"
      }
    },
    
    unlockRequirements: {
      ichorCost: 0,
      researchRequirements: [],
      taskCompletion: [],
      prerequisites: ["Starter character"]
    },
    
    features: {
      hasRainbowBorder: false,
      hasUniqueVoiceLines: false,
      voiceEffect: "Mechanical sounds",
      characterRelations: ["Poppy - Fellow starter character"],
      lightProducing: false
    },
    
    description: "A music box character serving as one of the starter options with balanced stats",
    overview: "Boxten provides reliable all-around performance with extraction speed specialization",
    gameplay: {
      strengths: ["Balanced stats", "Extraction speed bonus", "Starter accessibility", "Independent worker"],
      weaknesses: ["No outstanding specializations", "Lower stealth", "Average health"],
      bestStrategy: "Focus on solo machine completion while maintaining steady team support",
      teamRole: "All-rounder/Independent Extractor"
    }
  },

  {
    id: "poppy",
    name: "Poppy",
    fullName: "Poppy",
    type: "regular",
    rarity: "common",
    isMainCharacter: false,
    totalAttributePoints: 15,
    image: "🫧",
    
    attributes: {
      health: 3,
      skillCheck: 3,
      movementSpeed: 2,
      stamina: 3,
      stealth: 3,
      extractionSpeed: 3
    },
    
    abilities: {
      active: {
        name: "Panic Pop",
        description: "Instantly gain 50% movement speed for 6 seconds when taking damage",
        cooldown: "60 seconds",
        detailedDescription: "Poppy's survival instincts kick in when injured, providing emergency escape speed",
        howItWorks: "Automatically triggers upon taking damage, cannot be manually activated",
        bestUsage: "Provides automatic escape mechanism during dangerous encounters",
        visualEffects: "Red speed trail effects when ability activates"
      },
      passive: {
        name: "Bright",
        description: "Slightly increases visibility during blackouts",
        detailedDescription: "Poppy's bright nature provides minor illumination during dark periods",
        howItWorks: "Increases personal light radius by 20% during blackout events",
        strategicValue: "Improves navigation and safety during blackout conditions"
      }
    },
    
    unlockRequirements: {
      ichorCost: 0,
      researchRequirements: [],
      taskCompletion: [],
      prerequisites: ["Starter character"]
    },
    
    features: {
      hasRainbowBorder: false,
      hasUniqueVoiceLines: false,
      voiceEffect: "Bubble sounds",
      characterRelations: ["Boxten - Fellow starter character"],
      lightProducing: true,
      lightColor: "Soft white light"
    },
    
    description: "A cheerful bubble character offering survival and visibility benefits",
    overview: "Poppy provides emergency mobility and blackout support for new players",
    gameplay: {
      strengths: ["Emergency escape ability", "Blackout visibility", "Balanced stats", "Beginner-friendly"],
      weaknesses: ["Lower movement speed", "Reactive rather than proactive abilities"],
      bestStrategy: "Use cautiously and rely on escape ability when encounters go wrong",
      teamRole: "Survivor/Light Support"
    }
  },

  {
    id: "finn",
    name: "Finn",
    fullName: "Finn",
    type: "regular",
    rarity: "common",
    isMainCharacter: false,
    totalAttributePoints: 15,
    image: "🐟",
    
    attributes: {
      health: 3,
      skillCheck: 2,
      movementSpeed: 4,
      stamina: 3,
      stealth: 3,
      extractionSpeed: 2
    },
    
    abilities: {
      active: {
        name: "Hurry!",
        description: "Grants temporary movement speed boost to nearby teammates",
        cooldown: "75 seconds",
        detailedDescription: "Finn motivates nearby allies with a temporary speed enhancement",
        howItWorks: "Provides 25% movement speed boost to all Toons within range for 8 seconds",
        bestUsage: "Use during team relocations or when escaping dangerous areas",
        visualEffects: "Motivational aura with speed trail effects around affected Toons"
      },
      passive: {
        name: "Speedy",
        description: "Starts each floor with increased movement speed that gradually decreases",
        detailedDescription: "Finn begins each floor energetic but loses momentum over time",
        howItWorks: "Begins with +1 star movement speed, decreasing by 0.2 stars every 3 minutes",
        strategicValue: "Provides early floor mobility advantage for quick initial progress"
      }
    },
    
    unlockRequirements: {
      ichorCost: 50,
      researchRequirements: [],
      taskCompletion: [],
      prerequisites: []
    },
    
    features: {
      hasRainbowBorder: false,
      hasUniqueVoiceLines: false,
      voiceEffect: "Energetic sounds",
      characterRelations: [],
      lightProducing: false
    },
    
    description: "A fish character focused on speed and team mobility support",
    overview: "Finn specializes in team movement coordination and early-floor efficiency",
    gameplay: {
      strengths: ["High initial speed", "Team speed boost", "Early floor advantage"],
      weaknesses: ["Speed decreases over time", "Lower skill check", "Limited late-floor utility"],
      bestStrategy: "Maximize early floor efficiency and use team boosts during critical movements",
      teamRole: "Mobility Support/Early Game"
    }
  },

  {
    id: "cosmo",
    name: "Cosmo",
    fullName: "Cosmo",
    type: "regular",
    rarity: "common",
    isMainCharacter: false,
    totalAttributePoints: 15,
    image: "🌼",
    
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
        name: "Comfort",
        description: "Heals targeted Toon by 1 Heart at the cost of 50 Tapes",
        cooldown: "60 seconds",
        detailedDescription: "Cosmo provides healing support at a lower cost than other healers",
        howItWorks: "Consumes 50 tapes to restore 1 heart to target ally",
        bestUsage: "More economical healing option for regular maintenance healing",
        visualEffects: "Gentle healing aura with plant-themed particle effects"
      },
      passive: {
        name: "Calming Aura",
        description: "Slightly increases stamina regeneration for nearby teammates",
        detailedDescription: "Cosmo's peaceful nature helps allies recover stamina faster",
        howItWorks: "Provides 25% stamina regeneration boost to all Toons within range",
        strategicValue: "Supports team endurance during extended operations"
      }
    },
    
    unlockRequirements: {
      ichorCost: 100,
      researchRequirements: [],
      taskCompletion: [],
      prerequisites: []
    },
    
    features: {
      hasRainbowBorder: false,
      hasUniqueVoiceLines: false,
      voiceEffect: "Gentle plant sounds",
      characterRelations: ["Sprout - Best friend and healing partner"],
      lightProducing: false
    },
    
    description: "A flower character providing economical healing and team stamina support",
    overview: "Cosmo serves as an accessible healer with team stamina management capabilities",
    gameplay: {
      strengths: ["Cost-effective healing", "Good stealth", "Stamina support", "Low unlock cost"],
      weaknesses: ["Very low skill check", "Limited healing compared to Sprout"],
      bestStrategy: "Focus on support role with economical healing and stealth positioning",
      teamRole: "Budget Healer/Support"
    }
  },

  {
    id: "tisha",
    name: "Tisha",
    fullName: "Tisha",
    type: "regular",
    rarity: "common",
    isMainCharacter: false,
    totalAttributePoints: 15,
    image: "🧻",
    
    attributes: {
      health: 3,
      skillCheck: 2,
      movementSpeed: 4,
      stamina: 3,
      stealth: 3,
      extractionSpeed: 2
    },
    
    abilities: {
      active: {
        name: "Tidy Up!",
        description: "Increases movement speed by 25% for 8 seconds",
        cooldown: "60 seconds",
        detailedDescription: "Tisha cleans up her act and moves with increased efficiency",
        howItWorks: "Provides personal movement speed boost for quick repositioning",
        bestUsage: "Use for escaping danger or quickly reaching important objectives",
        visualEffects: "Cleaning sparkles and speed trails around Tisha"
      },
      passive: {
        name: "Cluttered",
        description: "Leaves behind items occasionally when completing machines",
        detailedDescription: "Tisha's messy nature sometimes results in finding extra items",
        howItWorks: "5% chance to spawn a random item when completing a machine",
        strategicValue: "Provides team with occasional bonus resources"
      }
    },
    
    unlockRequirements: {
      ichorCost: 120,
      researchRequirements: [],
      taskCompletion: [],
      prerequisites: []
    },
    
    features: {
      hasRainbowBorder: false,
      hasUniqueVoiceLines: false,
      voiceEffect: "Tissue box sounds",
      characterRelations: ["Shelly - Close friend through mastery connection"],
      lightProducing: false
    },
    
    description: "A tissue box character with mobility and item generation abilities",
    overview: "Tisha provides mobile support with occasional resource bonuses",
    gameplay: {
      strengths: ["Good mobility", "Speed boost ability", "Item generation chance", "Accessible cost"],
      weaknesses: ["Lower skill check", "Inconsistent passive ability"],
      bestStrategy: "Use mobility to assist team positioning while hoping for resource bonuses",
      teamRole: "Mobile Support/Resource Generator"
    }
  },

  {
    id: "rodger",
    name: "Rodger",
    fullName: "Rodger",
    type: "regular",
    rarity: "common",
    isMainCharacter: false,
    totalAttributePoints: 15,
    image: "🔎",
    
    attributes: {
      health: 3,
      skillCheck: 4,
      movementSpeed: 2,
      stamina: 2,
      stealth: 4,
      extractionSpeed: 3
    },
    
    abilities: {
      active: {
        name: "Investigate",
        description: "Reveals information about nearby Twisteds for 10 seconds",
        cooldown: "90 seconds",
        detailedDescription: "Rodger uses his detective skills to analyze enemy behavior patterns",
        howItWorks: "Shows Twisted movement patterns, detection ranges, and behavioral states",
        bestUsage: "Use to study dangerous Twisteds before attempting risky maneuvers",
        visualEffects: "Detective magnifying glass overlay with analysis indicators"
      },
      passive: {
        name: "Research",
        description: "Gains bonus research progress when observing Twisteds",
        detailedDescription: "Rodger's investigative nature accelerates research completion",
        howItWorks: "Provides 25% bonus research progress when in proximity to Twisteds",
        strategicValue: "Accelerates character unlocking and trinket acquisition"
      }
    },
    
    unlockRequirements: {
      ichorCost: 200,
      researchRequirements: [],
      taskCompletion: [],
      prerequisites: []
    },
    
    features: {
      hasRainbowBorder: false,
      hasUniqueVoiceLines: false,
      voiceEffect: "Magnifying glass sounds",
      characterRelations: ["Detective-themed character"],
      lightProducing: false
    },
    
    description: "A magnifying glass detective character specializing in enemy analysis and research",
    overview: "Rodger excels at information gathering and accelerating progression systems",
    gameplay: {
      strengths: ["Excellent enemy analysis", "Research acceleration", "Good stealth", "High skill check"],
      weaknesses: ["Low mobility", "Poor stamina", "Requires proximity to danger"],
      bestStrategy: "Use stealth to observe enemies safely while maximizing research benefits",
      teamRole: "Intelligence Specialist/Research Accelerator"
    }
  },

  {
    id: "teagan",
    name: "Teagan",
    fullName: "Teagan",
    type: "regular",
    rarity: "common",
    isMainCharacter: false,
    totalAttributePoints: 15,
    image: "☕",
    
    attributes: {
      health: 4,
      skillCheck: 2,
      movementSpeed: 3,
      stamina: 2,
      stealth: 2,
      extractionSpeed: 4
    },
    
    abilities: {
      active: {
        name: "Steaming Mad",
        description: "Increases extraction speed by 100% for 5 seconds",
        cooldown: "120 seconds",
        detailedDescription: "Teagan gets fired up and works at maximum efficiency for a brief period",
        howItWorks: "Doubles extraction speed for a very short duration",
        bestUsage: "Use to quickly finish nearly complete machines or in emergency situations",
        visualEffects: "Steam clouds and heat distortion effects around Teagan"
      },
      passive: {
        name: "Hot-Headed",
        description: "Extraction speed increases as health decreases",
        detailedDescription: "Teagan works harder when under pressure from injuries",
        howItWorks: "Gains 25% extraction speed for each heart lost",
        strategicValue: "Provides scaling performance benefits that offset injury disadvantages"
      }
    },
    
    unlockRequirements: {
      ichorCost: 150,
      researchRequirements: [],
      taskCompletion: [],
      prerequisites: []
    },
    
    features: {
      hasRainbowBorder: false,
      hasUniqueVoiceLines: false,
      voiceEffect: "Steam kettle sounds",
      characterRelations: [],
      lightProducing: false
    },
    
    description: "A teacup character with anger-fueled extraction abilities",
    overview: "Teagan specializes in high-intensity extraction with risk-reward mechanics",
    gameplay: {
      strengths: ["High health", "Extreme extraction burst", "Scales with damage taken"],
      weaknesses: ["Long cooldown", "Low stamina", "Requires injury for optimal performance"],
      bestStrategy: "Use calculated risks to trigger passive bonuses while saving active for critical moments",
      teamRole: "Burst Extractor/Risk-Reward Specialist"
    }
  },

  {
    id: "toodles",
    name: "Toodles",
    fullName: "Toodles",
    type: "regular",
    rarity: "common",
    isMainCharacter: false,
    totalAttributePoints: 15,
    image: "🧸",
    
    attributes: {
      health: 2,
      skillCheck: 3,
      movementSpeed: 4,
      stamina: 4,
      stealth: 2,
      extractionSpeed: 2
    },
    
    abilities: {
      active: {
        name: "Friendship Hug",
        description: "Restores 50% stamina to targeted teammate",
        cooldown: "45 seconds",
        detailedDescription: "Toodles provides comfort and energy restoration to a chosen ally",
        howItWorks: "Restores half stamina to target Toon through supportive interaction",
        bestUsage: "Help teammates maintain mobility during extended operations",
        visualEffects: "Heart particles and warm glow effects around both characters"
      },
      passive: {
        name: "Energetic",
        description: "Moves 15% faster when near other Toons",
        detailedDescription: "Toodles draws energy from social interaction and teamwork",
        howItWorks: "Gains movement speed bonus when within proximity of any teammate",
        strategicValue: "Encourages team coordination and group movement strategies"
      }
    },
    
    unlockRequirements: {
      ichorCost: 125,
      researchRequirements: [],
      taskCompletion: [],
      prerequisites: []
    },
    
    features: {
      hasRainbowBorder: false,
      hasUniqueVoiceLines: false,
      voiceEffect: "Childlike sounds",
      characterRelations: ["Pebble - Connected through mastery requirement"],
      lightProducing: false
    },
    
    description: "A young character focused on friendship and team stamina support",
    overview: "Toodles excels at team-based gameplay with social bonuses and stamina support",
    gameplay: {
      strengths: ["Good mobility", "Team-based bonuses", "Stamina support", "Social synergy"],
      weaknesses: ["Low health", "Dependent on teammates", "Limited solo capabilities"],
      bestStrategy: "Stay close to team for bonuses while providing stamina support as needed",
      teamRole: "Team Player/Stamina Support"
    }
  }
];
