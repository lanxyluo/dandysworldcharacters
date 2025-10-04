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
      stealth: 3,
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
      ichorCost: 250,
      researchRequirements: [],
      taskCompletion: [],
      prerequisites: ["Starter selection (free if chosen during tutorial)"]
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
      movementSpeed: 3,
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
      ichorCost: 250,
      researchRequirements: [],
      taskCompletion: [],
      prerequisites: ["Starter selection (free if chosen during tutorial)"]
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
      skillCheck: 3,
      movementSpeed: 4,
      stamina: 2,
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
      ichorCost: 500,
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
    rarity: "uncommon",
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
      ichorCost: 1000,
      researchRequirements: ["Complete 100% research on Twisted Cosmo"],
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
    
    description: "A devoted caretaker who trades tapes for reliable mid-run healing",
    overview: "Cosmo specializes in affordable burst healing and stamina regeneration for coordinated squads",
    gameplay: {
      strengths: ["Cost-efficient healing", "High stealth", "Stamina regeneration aura"],
      weaknesses: ["Very low skill check", "Requires tape management"],
      bestStrategy: "Focus on support role, budgeting tapes for critical heals while staying hidden",
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
      skillCheck: 3,
      movementSpeed: 4,
      stamina: 2,
      stealth: 3,
      extractionSpeed: 2
    },
    
    abilities: {
      active: {
        name: "Tidy Up!",
        description: "Grants nearby Toons 25% movement speed for 5 seconds",
        cooldown: "50 seconds",
        detailedDescription: "Tisha rallies teammates with a burst of movement speed to reposition quickly.",
        howItWorks: "All allies within range gain +25% movement speed for 5 seconds.",
        bestUsage: "Trigger during rescues, final machine pushes, or emergency retreats.",
        visualEffects: "Sparkling dust and sweeping animations surrounding affected teammates"
      },
      passive: {
        name: "Cluttered",
        description: "Occasionally drops useful supplies after objectives",
        detailedDescription: "Tisha's stash of items spills out during machine completion, offering bonus resources.",
        howItWorks: "Small chance to spawn a random support item when finishing machines.",
        strategicValue: "Provides opportunistic item economy for the squad"
      }
    },
    
    unlockRequirements: {
      ichorCost: 500,
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
    rarity: "uncommon",
    isMainCharacter: false,
    totalAttributePoints: 15,
    image: "🔎",
    
    attributes: {
      health: 3,
      skillCheck: 4,
      movementSpeed: 2,
      stamina: 3,
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
      ichorCost: 1000,
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
    rarity: "uncommon",
    isMainCharacter: false,
    totalAttributePoints: 15,
    image: "☕",
    
    attributes: {
      health: 3,
      skillCheck: 2,
      movementSpeed: 3,
      stamina: 4,
      stealth: 2,
      extractionSpeed: 3
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
      ichorCost: 1250,
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
      strengths: ["High health", "Powerful extraction burst", "Scales with damage taken"],
      weaknesses: ["Long cooldown", "Needs careful health management", "Limited stealth"],
      bestStrategy: "Use calculated risks to trigger passive bonuses while saving the active for crucial machines",
      teamRole: "Burst Extractor/Risk-Reward Specialist"
    }
  },

  {
    id: "toodles",
    name: "Toodles",
    fullName: "Toodles",
    type: "regular",
    rarity: "uncommon",
    isMainCharacter: false,
    totalAttributePoints: 15,
    image: "🧸",
    
    attributes: {
      health: 3,
      skillCheck: 3,
      movementSpeed: 3,
      stamina: 3,
      stealth: 4,
      extractionSpeed: 2
    },
    
    abilities: {
      active: {
        name: "Care Package",
        description: "Grants a random +15% buff to one core stat for 25 seconds",
        cooldown: "25 seconds",
        detailedDescription: "Toodles hands out a surprise gift that boosts a teammate's movement, stamina, stealth, or extraction.",
        howItWorks: "Applies one random +15% stat buff to the targeted Toon for 25 seconds.",
        bestUsage: "Trigger before risky objectives or when rotating between major encounters.",
        visualEffects: "Gift ribbon particles and playful sparkles around the target"
      },
      passive: {
        name: "Playful Spirit",
        description: "Gains 10% movement speed when staying close to teammates",
        detailedDescription: "Toodles feels safest with friends nearby and naturally moves faster in groups.",
        howItWorks: "While within a short radius of allies, Toodles gains a 10% movement speed bonus.",
        strategicValue: "Rewards coordinated team movement and reduces chase pressure when grouped"
      }
    },
    
    unlockRequirements: {
      ichorCost: 350,
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
    
    description: "A playful support specialist who hands out random performance boosts",
    overview: "Toodles excels at party-wide mobility and surprise stat buffs that keep the squad adaptable",
    gameplay: {
      strengths: ["Randomized buff utility", "Group speed bonuses", "High stealth"],
      weaknesses: ["Average base stats", "Supports best when grouped", "Buff outcomes are RNG"],
      bestStrategy: "Stay close to teammates to trigger the passive bonus and time Care Package before objectives",
      teamRole: "Support/Distraction Runner"
    }
  }
];
