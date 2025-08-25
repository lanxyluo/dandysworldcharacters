import { Character } from '../../types/character';

export const rareCharacters: Character[] = [
  {
    id: "connie",
    name: "Connie",
    fullName: "Connie",
    type: "regular",
    rarity: "rare",
    isMainCharacter: false,
    totalAttributePoints: 15,
    image: "📷",
    
    attributes: {
      health: 3,
      skillCheck: 2,
      movementSpeed: 1,
      stamina: 3,
      stealth: 5,
      extractionSpeed: 4
    },
    
    abilities: {
      active: {
        name: "Spotlight",
        description: "Creates a focused light beam that stuns Twisteds for 3 seconds",
        cooldown: "75 seconds",
        detailedDescription: "Connie uses her camera flash to temporarily disable nearby threats. *Based on character description inference, actual effects subject to in-game performance*",
        howItWorks: "Creates a directed light beam that stuns all Twisteds in a cone for 3 seconds",
        bestUsage: "Emergency crowd control or creating safe windows for team movement",
        visualEffects: "Camera flash with stunning light beam and dazed enemy indicators"
      },
      passive: {
        name: "Focus",
        description: "Stealth increases when standing still, but decreases when moving",
        detailedDescription: "Connie is most effective when positioned carefully and remaining stationary. *Based on character description inference, actual effects subject to in-game performance*",
        howItWorks: "Gains +2 stealth stars when stationary for 5+ seconds, loses -1 stealth star while moving",
        strategicValue: "Encourages strategic positioning and patience for maximum stealth benefit"
      }
    },
    
    unlockRequirements: {
      ichorCost: 2250,
      researchRequirements: ["100% Research on Twisted Connie"],
      taskCompletion: [],
      prerequisites: []
    },
    
    features: {
      hasRainbowBorder: false,
      hasUniqueVoiceLines: false,
      voiceEffect: "Camera sounds",
      characterRelations: [],
      lightProducing: true,
      lightColor: "Cyan camera light"
    },
    
    description: "A camera character with positioning-based stealth and stunning abilities",
    overview: "Connie specializes in stealth positioning and tactical crowd control",
    gameplay: {
      strengths: ["Maximum stealth (5 stars when positioned)", "Crowd control ability", "Good extraction speed", "Light production"],
      weaknesses: ["Minimum movement speed", "Positioning dependent", "Stealth penalty while moving"],
      bestStrategy: "Find optimal positions for machine work and use stunning ability for team protection",
      teamRole: "Stealth Sniper/Crowd Controller"
    }
  },

  {
    id: "yatta",
    name: "Yatta",
    fullName: "Yatta",
    type: "regular",
    rarity: "rare",
    isMainCharacter: false,
    totalAttributePoints: 15,
    image: "🎉",
    
    attributes: {
      health: 3,
      skillCheck: 4,
      movementSpeed: 3,
      stamina: 1,
      stealth: 2,
      extractionSpeed: 5
    },
    
    abilities: {
      active: {
        name: "Celebration",
        description: "Boosts all nearby teammates' extraction speed by 50% for 12 seconds",
        cooldown: "90 seconds",
        detailedDescription: "Yatta's enthusiasm spreads to nearby allies, enhancing their work efficiency. *Based on character description inference, actual effects subject to in-game performance*",
        howItWorks: "Provides significant extraction speed boost to all Toons within range",
        bestUsage: "Use during group machine completion sessions for maximum team efficiency",
        visualEffects: "Confetti and celebration effects with productivity boost indicators"
      },
      passive: {
        name: "Party Time",
        description: "Extraction speed increases for each nearby teammate",
        detailedDescription: "Yatta works better when surrounded by friends and teammates. *Based on character description inference, actual effects subject to in-game performance*",
        howItWorks: "Gains 15% extraction speed for each teammate within proximity (max 45%)",
        strategicValue: "Encourages group extraction work for optimal performance"
      }
    },
    
    unlockRequirements: {
      ichorCost: 2000,
      researchRequirements: ["100% Research on Twisted Yatta"],
      taskCompletion: [],
      prerequisites: []
    },
    
    features: {
      hasRainbowBorder: false,
      hasUniqueVoiceLines: false,
      voiceEffect: "Celebration sounds",
      characterRelations: [],
      lightProducing: false
    },
    
    description: "A party-themed character focused on team extraction bonuses and group work",
    overview: "Yatta maximizes team extraction efficiency through group bonuses and celebration abilities",
    gameplay: {
      strengths: ["Maximum extraction speed (5 stars)", "Team extraction bonuses", "Group synergy", "High skill check"],
      weaknesses: ["Minimum stamina (1 star)", "Dependent on teammates", "Limited solo capability"],
      bestStrategy: "Focus on group machine completion to maximize extraction bonuses for entire team",
      teamRole: "Team Extractor/Group Enhancer"
    }
  },

  {
    id: "blot",
    name: "Blot",
    fullName: "Blot",
    type: "regular",
    rarity: "rare",
    isMainCharacter: false,
    totalAttributePoints: 15,
    image: "🖋️",
    
    attributes: {
      health: 3,
      skillCheck: 1,
      movementSpeed: 4,
      stamina: 5,
      stealth: 2,
      extractionSpeed: 2
    },
    
    abilities: {
      active: {
        name: "Ink Spill",
        description: "Creates a trail of ink that slows Twisteds by 50% for 10 seconds",
        cooldown: "60 seconds",
        detailedDescription: "Blot spills ink to create tactical movement restrictions for enemies. *Based on character description inference, actual effects subject to in-game performance*",
        howItWorks: "Places a trail of ink that significantly slows any Twisted that walks through it",
        bestUsage: "Create escape routes, protect teammates, or control enemy movement patterns",
        visualEffects: "Black ink trail with slowing particle effects on affected Twisteds"
      },
      passive: {
        name: "Artistic Vision",
        description: "Can see Twisted movement trails and recent paths",
        detailedDescription: "Blot's artistic eye allows him to track enemy movement patterns. *Based on character description inference, actual effects subject to in-game performance*",
        howItWorks: "Displays fading trails showing where Twisteds have moved in the last 30 seconds",
        strategicValue: "Provides intelligence on enemy patrol patterns and recent activity"
      }
    },
    
    unlockRequirements: {
      ichorCost: 1800,
      researchRequirements: ["100% Research on Twisted Blot"],
      taskCompletion: [],
      prerequisites: []
    },
    
    features: {
      hasRainbowBorder: false,
      hasUniqueVoiceLines: false,
      voiceEffect: "Ink splatting sounds",
      characterRelations: [],
      lightProducing: false
    },
    
    description: "An ink bottle character with area denial and enemy tracking capabilities",
    overview: "Blot provides tactical crowd control and intelligence gathering through enemy tracking",
    gameplay: {
      strengths: ["Maximum stamina (5 stars)", "Area denial ability", "Enemy tracking", "Good mobility"],
      weaknesses: ["Minimum skill check (1 star)", "Poor extraction capability", "Limited direct combat utility"],
      bestStrategy: "Use mobility to track enemies and create strategic ink barriers for team protection",
      teamRole: "Tactical Controller/Intelligence Gatherer"
    }
  },

  {
    id: "brusha",
    name: "Brusha",
    fullName: "Brusha",
    type: "regular",
    rarity: "rare",
    isMainCharacter: false,
    totalAttributePoints: 15,
    image: "🖌️",
    
    attributes: {
      health: 3,
      skillCheck: 4,
      movementSpeed: 3,
      stamina: 3,
      stealth: 2,
      extractionSpeed: 3
    },
    
    abilities: {
      active: {
        name: "Artistic Inspiration",
        description: "Boosts all nearby teammates' skill check by 100% for 8 seconds",
        cooldown: "80 seconds",
        detailedDescription: "Brusha inspires nearby allies to perform with artistic precision. *Based on character description inference, actual effects subject to in-game performance*",
        howItWorks: "Doubles skill check window size for all teammates within range",
        bestUsage: "Use during difficult machine sections to ensure team success",
        visualEffects: "Paint brush strokes with inspiration aura and precision enhancement indicators"
      },
      passive: {
        name: "Paint Trail",
        description: "Leaves behind paint marks that boost movement speed for teammates",
        detailedDescription: "Brusha's artistic movement creates beneficial trails for the team. *Based on character description inference, actual effects subject to in-game performance*",
        howItWorks: "Creates temporary speed boost zones where Brusha has walked",
        strategicValue: "Provides team mobility enhancement through strategic movement"
      }
    },
    
    unlockRequirements: {
      ichorCost: 2100,
      researchRequirements: ["100% Research on Twisted Brusha"],
      taskCompletion: [],
      prerequisites: []
    },
    
    features: {
      hasRainbowBorder: false,
      hasUniqueVoiceLines: false,
      voiceEffect: "Paint brush sounds",
      characterRelations: [],
      lightProducing: false
    },
    
    description: "A paint brush character focused on team skill enhancement and mobility support",
    overview: "Brusha provides team precision bonuses and movement speed support through artistic abilities",
    gameplay: {
      strengths: ["Excellent skill check support", "Team precision enhancement", "Movement trail bonuses", "Balanced stats"],
      weaknesses: ["No outstanding individual stats", "Team-dependent abilities", "Moderate cooldown"],
      bestStrategy: "Position to maximize team skill check bonuses while creating beneficial movement trails",
      teamRole: "Team Enhancer/Support Artist"
    }
  },

  {
    id: "flyte",
    name: "Flyte",
    fullName: "Flyte",
    type: "regular",
    rarity: "rare",
    isMainCharacter: false,
    totalAttributePoints: 15,
    image: "✈️",
    
    attributes: {
      health: 3,
      skillCheck: 3,
      movementSpeed: 5,
      stamina: 2,
      stealth: 2,
      extractionSpeed: 3
    },
    
    abilities: {
      active: {
        name: "Gust",
        description: "Creates wind barriers that block Twisted movement for 6 seconds",
        cooldown: "75 seconds",
        detailedDescription: "Flyte generates powerful wind currents that create temporary barriers. *Based on character description inference, actual effects subject to in-game performance*",
        howItWorks: "Places wind barrier walls that completely block Twisted movement but allow Toon passage",
        bestUsage: "Create safe zones, block chokepoints, or protect teammates during extractions",
        visualEffects: "Wind particle effects with visible air barrier walls"
      },
      passive: {
        name: "Aerodynamic",
        description: "Movement speed increases by 25% when stamina is below 50%",
        detailedDescription: "Flyte becomes more aerodynamic when tired and catches wind currents. *Based on character description inference, actual effects subject to in-game performance*",
        howItWorks: "Gains significant speed boost when stamina falls below half capacity",
        strategicValue: "Provides emergency mobility when stamina management becomes critical"
      }
    },
    
    unlockRequirements: {
      ichorCost: 2300,
      researchRequirements: ["100% Research on Twisted Flyte"],
      taskCompletion: [],
      prerequisites: []
    },
    
    features: {
      hasRainbowBorder: false,
      hasUniqueVoiceLines: false,
      voiceEffect: "Wind gust sounds",
      characterRelations: [],
      lightProducing: false
    },
    
    description: "A paper airplane character with barrier creation and high-speed mobility",
    overview: "Flyte specializes in area control and emergency high-speed movement",
    gameplay: {
      strengths: ["Maximum movement speed (5 stars)", "Barrier creation ability", "Emergency speed boost", "Area control"],
      weaknesses: ["Low stamina", "Stamina-dependent passive", "Limited duration barriers"],
      bestStrategy: "Use speed for positioning and create strategic barriers to control enemy movement",
      teamRole: "Area Controller/High-Speed Scout"
    }
  },

  {
    id: "rudie",
    name: "Rudie",
    fullName: "Rudie",
    type: "regular",
    rarity: "rare",
    isMainCharacter: false,
    totalAttributePoints: 15,
    image: "🍭",
    
    attributes: {
      health: 3,
      skillCheck: 2,
      movementSpeed: 4,
      stamina: 3,
      stealth: 1,
      extractionSpeed: 4
    },
    
    abilities: {
      active: {
        name: "Candy Cane Hook",
        description: "Pulls a targeted Twisted towards you and stuns them for 2 seconds",
        cooldown: "100 seconds",
        detailedDescription: "Rudie uses his candy cane to manipulate enemy positioning. *Based on character description inference, actual effects subject to in-game performance*",
        howItWorks: "Forces a selected Twisted to move to Rudie's location and become briefly stunned",
        bestUsage: "Separate dangerous Twisteds from groups or create tactical positioning advantages",
        visualEffects: "Candy cane hook animation with pulling force and stun effects"
      },
      passive: {
        name: "Sweet Scent",
        description: "Twisteds are 25% more likely to target Rudie over other Toons",
        detailedDescription: "Rudie's sweet nature makes him more appealing to hostile entities. *Based on character description inference, actual effects subject to in-game performance*",
        howItWorks: "Increases Twisted targeting priority, making him more likely to be chased",
        strategicValue: "Can serve as intentional distraction for tactical team positioning"
      }
    },
    
    unlockRequirements: {
      ichorCost: 1200,
      researchRequirements: ["Christmas Event participation"],
      taskCompletion: [],
      prerequisites: ["Christmas Event"],
      specialCurrency: {
        type: "Ornaments",
        amount: 800
      }
    },
    
    features: {
      hasRainbowBorder: false,
      hasUniqueVoiceLines: false,
      voiceEffect: "Candy wrapper sounds",
      characterRelations: ["Christmas event character"],
      lightProducing: true,
      lightColor: "Red candy cane light"
    },
    
    description: "A Christmas candy cane character with enemy manipulation and distraction abilities",
    overview: "Rudie provides tactical enemy positioning control with built-in distraction capabilities",
    gameplay: {
      strengths: ["Enemy manipulation ability", "Good mobility", "Light production", "Tactical control"],
      weaknesses: ["Increased targeting priority", "Low stealth", "Event-limited availability"],
      bestStrategy: "Use enemy manipulation tactically while accepting increased attention as strategic distraction",
      teamRole: "Tactical Controller/Intentional Distraction"
    }
  },

  {
    id: "rnd",
    name: "R&D",
    fullName: "R&D",
    type: "regular",
    rarity: "rare",
    isMainCharacter: false,
    totalAttributePoints: 15,
    image: "🔬",
    
    attributes: {
      health: 4,
      skillCheck: 3,
      movementSpeed: 2,
      stamina: 2,
      stealth: 4,
      extractionSpeed: 3
    },
    
    abilities: {
      active: {
        name: "Analysis",
        description: "Reveals weak points on machines, doubling extraction progress for 10 seconds",
        cooldown: "90 seconds",
        detailedDescription: "R&D uses scientific analysis to optimize machine interaction efficiency. *Based on character description inference, actual effects subject to in-game performance*",
        howItWorks: "Doubles extraction progress rate for both self and nearby teammates on current machine",
        bestUsage: "Use on nearly complete machines or during critical extraction phases",
        visualEffects: "Scientific scanning overlay with efficiency boost indicators"
      },
      passive: {
        name: "Research Data",
        description: "Gains 50% more research progress from all interactions with Twisteds",
        detailedDescription: "R&D's scientific nature accelerates learning from enemy encounters. *Based on character description inference, actual effects subject to in-game performance*",
        howItWorks: "All research progress from Twisted encounters is increased by 50%",
        strategicValue: "Significantly accelerates character unlocking and progression systems"
      }
    },
    
    unlockRequirements: {
      ichorCost: 2400,
      researchRequirements: ["100% Research on Twisted R&D"],
      taskCompletion: [],
      prerequisites: []
    },
    
    features: {
      hasRainbowBorder: false,
      hasUniqueVoiceLines: false,
      voiceEffect: "Scientific equipment sounds",
      characterRelations: [],
      lightProducing: false
    },
    
    description: "A research character focused on efficiency optimization and progression acceleration",
    overview: "R&D provides scientific advantages in extraction efficiency and research progression",
    gameplay: {
      strengths: ["Good health", "Research acceleration", "Extraction efficiency boost", "Scientific precision"],
      weaknesses: ["Low mobility", "Poor stamina", "High investment cost"],
      bestStrategy: "Focus on machine optimization while leveraging research bonuses for long-term progression",
      teamRole: "Scientific Support/Progression Accelerator"
    }
  },

  {
    id: "blot_jr",
    name: "Blot Jr.",
    fullName: "Blot Jr.",
    type: "regular",
    rarity: "rare",
    isMainCharacter: false,
    totalAttributePoints: 15,
    image: "🖋️",
    
    attributes: {
      health: 2,
      skillCheck: 2,
      movementSpeed: 3,
      stamina: 3,
      stealth: -200, // Special case: lowest stealth in game
      extractionSpeed: 5
    },
    
    abilities: {
      active: {
        name: "Ink Splash",
        description: "Creates a large ink area that blinds all Twisteds for 5 seconds",
        cooldown: "120 seconds",
        detailedDescription: "Blot Jr. creates a massive ink explosion that disorients all nearby enemies. *Based on character description inference, actual effects subject to in-game performance*",
        howItWorks: "Creates large ink cloud that prevents all Twisteds in area from seeing or chasing",
        bestUsage: "Emergency area denial when team is overwhelmed or needs safe extraction time",
        visualEffects: "Massive black ink explosion with blinding cloud effects"
      },
      passive: {
        name: "Invisible Ink",
        description: "Despite having terrible stealth, occasionally becomes completely invisible",
        detailedDescription: "Blot Jr.'s unpredictable ink occasionally provides perfect concealment. *Based on character description inference, actual effects subject to in-game performance*",
        howItWorks: "5% chance per second to become completely invisible for 3 seconds",
        strategicValue: "Provides unpredictable but powerful stealth moments despite poor base stealth"
      }
    },
    
    unlockRequirements: {
      ichorCost: 2800,
      researchRequirements: ["100% Research on Twisted Blot Jr."],
      taskCompletion: ["Complete all Mastery Quests on Blot"],
      prerequisites: ["100% Mastery on Blot"]
    },
    
    features: {
      hasRainbowBorder: false,
      hasUniqueVoiceLines: false,
      voiceEffect: "Small ink splashing",
      characterRelations: ["Blot - Parent character through mastery requirement"],
      lightProducing: false
    },
    
    description: "A small ink bottle with the worst stealth but powerful area denial abilities",
    overview: "Blot Jr. represents extreme risk-reward gameplay with terrible stealth but game-changing abilities",
    gameplay: {
      strengths: ["Maximum extraction speed (5 stars)", "Powerful area denial", "Unpredictable invisibility", "Game-changing active"],
      weaknesses: ["Worst stealth in game (-200)", "High visibility", "Low health", "Extreme challenge"],
      bestStrategy: "Only for expert players who can leverage invisibility luck and area denial timing",
      teamRole: "High-Risk Area Controller/Challenge Character"
    }
  }
];
