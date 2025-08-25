import { Character } from '../../types/character';

export const uncommonCharacters: Character[] = [
  {
    id: "brightney",
    name: "Brightney",
    fullName: "Brightney",
    type: "regular",
    rarity: "uncommon",
    isMainCharacter: false,
    totalAttributePoints: 15,
    
    attributes: {
      health: 3,
      skillCheck: 3,
      movementSpeed: 3,
      stamina: 4,
      stealth: 1,
      extractionSpeed: 4
    },
    
    abilities: {
      active: {
        name: "Night Light",
        description: "Creates a bright light that reveals Twisteds for 8 seconds",
        cooldown: "100 seconds",
        detailedDescription: "Brightney illuminates the area to expose hidden threats during blackouts",
        howItWorks: "Creates a large area of bright light that reveals all Twisteds within range",
        bestUsage: "Essential during blackouts to identify safe paths and enemy positions",
        visualEffects: "Intense white light emanating from Brightney with revelation effects"
      },
      passive: {
        name: "Bright Light",
        description: "Provides constant illumination that increases during blackouts",
        detailedDescription: "Brightney naturally produces light, becoming more valuable in dark conditions",
        howItWorks: "Maintains personal light radius that doubles during blackout events",
        strategicValue: "Provides consistent navigation aid and blackout safety for team"
      }
    },
    
    unlockRequirements: {
      ichorCost: 750,
      researchRequirements: ["100% Research on Twisted Brightney"],
      taskCompletion: [],
      prerequisites: []
    },
    
    features: {
      hasRainbowBorder: false,
      hasUniqueVoiceLines: false,
      voiceEffect: "Light bulb humming",
      characterRelations: ["Vee - Connected through mastery requirement"],
      lightProducing: true,
      lightColor: "Bright white light"
    },
    
    description: "A lamp character specializing in illumination and blackout support",
    overview: "Brightney is essential for blackout survival and team navigation in dark conditions",
    gameplay: {
      strengths: ["Excellent light production", "Blackout specialist", "Good extraction speed", "Enemy revelation"],
      weaknesses: ["Minimum stealth (1 star)", "High visibility to enemies", "Target priority"],
      bestStrategy: "Position safely while maximizing light coverage for team, especially during blackouts",
      teamRole: "Light Support/Blackout Specialist"
    }
  },

  {
    id: "goob",
    name: "Goob",
    fullName: "Goob",
    type: "regular",
    rarity: "uncommon",
    isMainCharacter: false,
    totalAttributePoints: 15,
    
    attributes: {
      health: 3,
      skillCheck: 2,
      movementSpeed: 2,
      stamina: 5,
      stealth: 3,
      extractionSpeed: 2
    },
    
    abilities: {
      active: {
        name: "Grab",
        description: "Pulls targeted teammate to your location instantly",
        cooldown: "60 seconds",
        detailedDescription: "Goob uses his extendable arms to rescue teammates from dangerous situations",
        howItWorks: "Instantly teleports target ally to Goob's current position",
        bestUsage: "Emergency rescue of teammates caught in dangerous positions or Twisted chases",
        visualEffects: "Stretchy arm animation with rescue portal effects"
      },
      passive: {
        name: "Stretchy",
        description: "Can complete skill checks from increased distance",
        detailedDescription: "Goob's long reach allows him to operate machines from safer positions",
        howItWorks: "Increases interaction range with machines by 50%",
        strategicValue: "Allows safer machine operation and reduces exposure to nearby Twisteds"
      }
    },
    
    unlockRequirements: {
      ichorCost: 1250,
      researchRequirements: ["100% Research on Twisted Goob"],
      taskCompletion: [],
      prerequisites: []
    },
    
    features: {
      hasRainbowBorder: false,
      hasUniqueVoiceLines: false,
      voiceEffect: "Stretchy rubber sounds",
      characterRelations: ["Scraps - Fellow craft character"],
      lightProducing: false
    },
    
    description: "A craft character with extendable arms for rescue and safe extraction",
    overview: "Goob specializes in teammate rescue and safe distance machine operation",
    gameplay: {
      strengths: ["Maximum stamina (5 stars)", "Emergency rescue ability", "Extended interaction range", "Safety specialist"],
      weaknesses: ["Low movement speed", "Poor skill check", "Limited offensive capabilities"],
      bestStrategy: "Position strategically to rescue teammates while maintaining safe machine operation distance",
      teamRole: "Rescue Specialist/Safe Extractor"
    }
  },

  {
    id: "scraps",
    name: "Scraps",
    fullName: "Scraps",
    type: "regular",
    rarity: "uncommon",
    isMainCharacter: false,
    totalAttributePoints: 15,
    
    attributes: {
      health: 2,
      skillCheck: 3,
      movementSpeed: 4,
      stamina: 5,
      stealth: 1,
      extractionSpeed: 3
    },
    
    abilities: {
      active: {
        name: "Crafty Grapple",
        description: "Can grapple to teammates or machines for quick movement",
        cooldown: "40 seconds",
        detailedDescription: "Scraps uses her crafting materials to create quick movement options",
        howItWorks: "Instantly moves to target teammate or machine location with grappling motion",
        bestUsage: "Quick repositioning for escapes or rapid objective completion",
        visualEffects: "Crafting tape trail with grappling hook animation"
      },
      passive: {
        name: "Crafty",
        description: "Has chance to not consume items when used",
        detailedDescription: "Scraps' resourcefulness occasionally preserves consumed items",
        howItWorks: "25% chance that used items remain in inventory after consumption",
        strategicValue: "Provides resource efficiency and extends team supply longevity"
      }
    },
    
    unlockRequirements: {
      ichorCost: 1000,
      researchRequirements: ["100% Research on Twisted Scraps"],
      taskCompletion: [],
      prerequisites: []
    },
    
    features: {
      hasRainbowBorder: false,
      hasUniqueVoiceLines: false,
      voiceEffect: "Paper crafting sounds",
      characterRelations: ["Goob - Fellow craft character"],
      lightProducing: false
    },
    
    description: "A paper craft character with mobility and resource conservation abilities",
    overview: "Scraps provides rapid repositioning and efficient resource management",
    gameplay: {
      strengths: ["Maximum stamina (5 stars)", "Rapid positioning", "Resource efficiency", "Good mobility"],
      weaknesses: ["Low health", "Minimum stealth", "High visibility"],
      bestStrategy: "Use mobility for quick objectives while conserving team resources through crafty passive",
      teamRole: "Mobile Support/Resource Manager"
    }
  },

  {
    id: "glisten",
    name: "Glisten",
    fullName: "Glisten",
    type: "regular",
    rarity: "uncommon",
    isMainCharacter: false,
    totalAttributePoints: 15,
    
    attributes: {
      health: 3,
      skillCheck: 3,
      movementSpeed: 3,
      stamina: 1,
      stealth: 5,
      extractionSpeed: 5
    },
    
    abilities: {
      active: {
        name: "Vanity",
        description: "Becomes invisible for 5 seconds but cannot interact",
        cooldown: "80 seconds",
        detailedDescription: "Glisten becomes completely invisible but loses interaction capabilities",
        howItWorks: "Provides complete invisibility to Twisteds but prevents all machine interactions",
        bestUsage: "Emergency escape or repositioning when caught in dangerous situations",
        visualEffects: "Mirror shimmer effect with gradual transparency animation"
      },
      passive: {
        name: "Reflective",
        description: "Gains extraction speed when other Toons are nearby",
        detailedDescription: "Glisten performs better when he has an audience to impress",
        howItWorks: "Gains 25% extraction speed for each nearby teammate (max 75%)",
        strategicValue: "Encourages group machine completion for maximum efficiency"
      }
    },
    
    unlockRequirements: {
      ichorCost: 1500,
      researchRequirements: ["100% Research on Twisted Glisten"],
      taskCompletion: [],
      prerequisites: []
    },
    
    features: {
      hasRainbowBorder: false,
      hasUniqueVoiceLines: false,
      voiceEffect: "Mirror reflection sounds",
      characterRelations: [],
      lightProducing: false
    },
    
    description: "A mirror character with invisibility and team-based extraction bonuses",
    overview: "Glisten excels at group extraction work with emergency invisibility capabilities",
    gameplay: {
      strengths: ["Maximum stealth (5 stars)", "Maximum extraction speed (5 stars)", "Invisibility ability", "Team synergy"],
      weaknesses: ["Minimum stamina (1 star)", "Dependent on teammates", "Cannot act while invisible"],
      bestStrategy: "Work in groups to maximize extraction bonuses while keeping invisibility for emergencies",
      teamRole: "Group Extractor/Stealth Specialist"
    }
  },

  {
    id: "flutter",
    name: "Flutter",
    fullName: "Flutter",
    type: "regular",
    rarity: "uncommon",
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
        name: "Flight",
        description: "Gains 100% movement speed and ignores obstacles for 4 seconds",
        cooldown: "90 seconds",
        detailedDescription: "Flutter takes flight to bypass all terrain and movement restrictions",
        howItWorks: "Doubles movement speed and allows passage through normally impassable areas",
        bestUsage: "Emergency escapes through blocked paths or rapid cross-map movement",
        visualEffects: "Wing flapping animation with aerial movement trail"
      },
      passive: {
        name: "Airborne",
        description: "Takes 20% less damage from Twisteds",
        detailedDescription: "Flutter's flight capabilities help her avoid some damage",
        howItWorks: "Reduces all incoming damage by 20% through evasive maneuvers",
        strategicValue: "Provides damage mitigation for safer close-quarters operations"
      }
    },
    
    unlockRequirements: {
      ichorCost: 1100,
      researchRequirements: ["100% Research on Twisted Flutter"],
      taskCompletion: [],
      prerequisites: []
    },
    
    features: {
      hasRainbowBorder: false,
      hasUniqueVoiceLines: false,
      voiceEffect: "Wing flapping sounds",
      characterRelations: ["Coal - Identical stats"],
      lightProducing: false
    },
    
    description: "A butterfly character with flight abilities and damage reduction",
    overview: "Flutter provides unique mobility options and defensive capabilities",
    gameplay: {
      strengths: ["Flight ability", "Damage reduction", "Good mobility", "Obstacle bypass"],
      weaknesses: ["Lower skill check", "Limited extraction capability", "Short flight duration"],
      bestStrategy: "Use flight for tactical positioning and escapes while benefiting from damage reduction",
      teamRole: "Mobile Scout/Damage Mitigator"
    }
  },

  {
    id: "looey",
    name: "Looey",
    fullName: "Looey",
    type: "regular",
    rarity: "uncommon",
    isMainCharacter: false,
    totalAttributePoints: 15,
    
    attributes: {
      health: 2,
      skillCheck: 2,
      movementSpeed: 3,
      stamina: 3,
      stealth: 5,
      extractionSpeed: 3
    },
    
    abilities: {
      active: {
        name: "Chomp",
        description: "Destroys a Twisted machine part, stunning nearby Twisteds",
        cooldown: "120 seconds",
        detailedDescription: "Looey can damage facility equipment to create tactical advantages",
        howItWorks: "Destroys part of a machine while stunning all Twisteds within range for 3 seconds",
        bestUsage: "Emergency crowd control when overwhelmed by multiple Twisteds",
        visualEffects: "Balloon popping animation with stunning shockwave effects"
      },
      passive: {
        name: "Balloon Animal",
        description: "Movement speed increases by 20% for each missing heart",
        detailedDescription: "Looey becomes more agile as he takes damage and deflates",
        howItWorks: "Gains 20% movement speed per heart lost, up to 40% at 1 heart",
        strategicValue: "Provides scaling mobility that compensates for injury vulnerability"
      }
    },
    
    unlockRequirements: {
      ichorCost: 1350,
      researchRequirements: ["100% Research on Twisted Looey"],
      taskCompletion: [],
      prerequisites: []
    },
    
    features: {
      hasRainbowBorder: false,
      hasUniqueVoiceLines: false,
      voiceEffect: "Balloon squeak sounds",
      characterRelations: [],
      lightProducing: false
    },
    
    description: "A balloon character with destructive abilities and injury-based speed scaling",
    overview: "Looey provides crowd control and high-risk high-reward mobility mechanics",
    gameplay: {
      strengths: ["Maximum stealth (5 stars)", "Crowd control ability", "Scales with damage taken", "Risk-reward gameplay"],
      weaknesses: ["Low health", "Requires damage for optimal performance", "Long cooldown"],
      bestStrategy: "Use stealth carefully while leveraging injury bonuses and saving stun for emergencies",
      teamRole: "Stealth Specialist/Crowd Controller"
    }
  },

  {
    id: "razzle_dazzle",
    name: "Razzle & Dazzle",
    fullName: "Razzle & Dazzle",
    type: "regular",
    rarity: "uncommon",
    isMainCharacter: false,
    totalAttributePoints: 15,
    
    attributes: {
      health: 3,
      skillCheck: 3,
      movementSpeed: 3, // Variable: 1 on even floors, 5 on odd floors
      stamina: 3,
      stealth: 3,
      extractionSpeed: 3 // Variable: 5 on even floors, 1 on odd floors
    },
    
    abilities: {
      active: {
        name: "Comedy/Tragedy",
        description: "Switches between Comedy and Tragedy modes with different stat bonuses",
        cooldown: "30 seconds",
        detailedDescription: "Razzle & Dazzle can switch between two distinct performance modes",
        howItWorks: "Alternates between extraction-focused (even floors) and mobility-focused (odd floors) configurations",
        bestUsage: "Adapt to floor requirements - use extraction mode for machine work, mobility mode for repositioning",
        visualEffects: "Theater mask transformation with mood lighting changes"
      },
      passive: {
        name: "Performance Art",
        description: "Stats change based on floor number",
        detailedDescription: "Performance varies based on the current floor's energy and requirements",
        howItWorks: "Even floors: High extraction (5 stars), Low movement (1 star). Odd floors: Low extraction (1 star), High movement (5 stars)",
        strategicValue: "Provides specialized capabilities that adapt to different floor challenges"
      }
    },
    
    unlockRequirements: {
      ichorCost: 1600,
      researchRequirements: ["100% Research on Twisted Razzle & Dazzle"],
      taskCompletion: [],
      prerequisites: []
    },
    
    features: {
      hasRainbowBorder: false,
      hasUniqueVoiceLines: false,
      voiceEffect: "Theater performance sounds",
      characterRelations: [],
      lightProducing: false
    },
    
    description: "A dual theater mask character with alternating stat configurations",
    overview: "Razzle & Dazzle provide adaptive gameplay with specialized capabilities for different situations",
    gameplay: {
      strengths: ["Adaptive specialization", "Maximum stats in alternating categories", "Versatile gameplay"],
      weaknesses: ["Inconsistent performance", "Requires floor planning", "Complex stat management"],
      bestStrategy: "Plan floor progression to maximize stat advantages and use mode switching strategically",
      teamRole: "Adaptive Specialist/Situational Expert"
    }
  },

  {
    id: "shrimpo",
    name: "Shrimpo",
    fullName: "Shrimpo",
    type: "regular",
    rarity: "uncommon",
    isMainCharacter: false,
    totalAttributePoints: 5, // Special case - 1 star in all stats
    
    attributes: {
      health: 1,
      skillCheck: 1,
      movementSpeed: 1,
      stamina: 1,
      stealth: 1, // Actually -99 due to passive
      extractionSpeed: 1
    },
    
    abilities: {
      active: {
        name: "Aggravation",
        description: "Attracts all Twisteds on the floor to his location",
        cooldown: "60 seconds",
        detailedDescription: "Shrimpo becomes extremely loud and draws all enemy attention",
        howItWorks: "Instantly alerts and attracts every Twisted on the current floor to Shrimpo's position",
        bestUsage: "Ultimate sacrifice play to save teammates or create massive distraction",
        visualEffects: "Loud sound waves with massive aggro radius indicators"
      },
      passive: {
        name: "Loud",
        description: "Stealth is set to -99, making him extremely visible to Twisteds",
        detailedDescription: "Shrimpo is naturally loud and attracts unwanted attention",
        howItWorks: "Permanently reduces stealth to -99, making him a priority target for all Twisteds",
        strategicValue: "Can serve as intentional distraction or challenge mode gameplay"
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
      voiceEffect: "Angry shouting",
      characterRelations: [],
      lightProducing: false
    },
    
    description: "A shrimp character with the worst stats in the game, serving as a challenge character",
    overview: "Shrimpo represents the ultimate challenge mode with intentionally poor statistics",
    gameplay: {
      strengths: ["Ultimate challenge experience", "Distraction specialist", "Low cost"],
      weaknesses: ["Worst stats in every category", "Extremely high visibility", "Ultimate difficulty"],
      bestStrategy: "Only for expert players seeking maximum challenge or sacrifice plays",
      teamRole: "Challenge Mode/Ultimate Distraction"
    }
  },

  {
    id: "gigi",
    name: "Gigi",
    fullName: "Gigi",
    type: "regular",
    rarity: "uncommon",
    isMainCharacter: false,
    totalAttributePoints: 15,
    
    attributes: {
      health: 3,
      skillCheck: 5,
      movementSpeed: 1,
      stamina: 1,
      stealth: 3,
      extractionSpeed: 4
    },
    
    abilities: {
      active: {
        name: "Encore!",
        description: "Doubles skill check window size and perfection rewards for 15 seconds",
        cooldown: "100 seconds",
        detailedDescription: "Gigi puts on a performance that enhances precision and rewards",
        howItWorks: "Doubles skill check window size and provides double progress for perfect skill checks",
        bestUsage: "Use on difficult or important machines to guarantee success and maximize progress",
        visualEffects: "Spotlight effect with musical note particles during enhanced extraction"
      },
      passive: {
        name: "Show Must Go On",
        description: "Skill check window size increases as stamina decreases",
        detailedDescription: "Gigi performs better under pressure when tired",
        howItWorks: "Skill check window grows by 25% for each quarter of stamina lost",
        strategicValue: "Provides scaling extraction improvements during extended operations"
      }
    },
    
    unlockRequirements: {
      ichorCost: 1400,
      researchRequirements: ["100% Research on Twisted Gigi"],
      taskCompletion: [],
      prerequisites: []
    },
    
    features: {
      hasRainbowBorder: false,
      hasUniqueVoiceLines: false,
      voiceEffect: "Performance sounds",
      characterRelations: [],
      lightProducing: false
    },
    
    description: "A performance character with maximum skill check and precision-based abilities",
    overview: "Gigi specializes in precision machine work with stamina-based performance scaling",
    gameplay: {
      strengths: ["Maximum skill check (5 stars)", "Enhanced precision abilities", "Scales with fatigue"],
      weaknesses: ["Minimum movement speed", "Minimum stamina", "Positioning dependent"],
      bestStrategy: "Focus on machine completion while managing stamina to optimize skill check bonuses",
      teamRole: "Precision Extractor/Machine Specialist"
    }
  }
];
