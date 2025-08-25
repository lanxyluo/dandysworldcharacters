import { Character } from './types/character';

export const commonCharacters: Character[] = [
  {
    id: "boxten",
    name: "Boxten",
    fullName: "Boxten",
    type: "regular",
    rarity: "common",
    isMainCharacter: false,
    totalAttributePoints: 15,
    
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
  }
];
