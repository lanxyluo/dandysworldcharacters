import { Character } from '../../types/character';

export const mainCharacters: Character[] = [
  {
    id: "astro",
    name: "Astro",
    fullName: "Astro Novalite",
    type: "main",
    rarity: "legendary",
    isMainCharacter: true,
    image: "🌙",
    totalAttributePoints: 16,
    
    attributes: {
      health: 2,
      skillCheck: 4,
      movementSpeed: 4,
      stamina: 3,
      stealth: 5,
      extractionSpeed: 3
    },
    
    abilities: {
      active: {
        name: "Nap Time",
        description: "Creates a pulse that fully restores the Stamina of nearby Toons",
        cooldown: "75 seconds",
        detailedDescription: "Astro creates a cosmic energy pulse that instantly restores 100% stamina to all nearby teammates within range.",
        howItWorks: "When activated, generates a blue energy wave that spreads outward from Astro, affecting all Toons in proximity",
        bestUsage: "Use when team stamina is critically low or before challenging sections with high mobility requirements",
        visualEffects: "Blue cosmic energy waves emanate from Astro with starlight particle effects"
      },
      passive: {
        name: "Well Rested",
        description: "Regenerates Stamina 50% faster and detects low-stamina Toons",
        detailedDescription: "Astro's cosmic nature allows enhanced stamina regeneration and awareness of teammate conditions",
        howItWorks: "Automatically regenerates stamina at 1.5x normal rate and highlights Toons below 50% stamina on the minimap",
        strategicValue: "Provides sustained mobility advantage and team support awareness for strategic positioning"
      }
    },
    
    unlockRequirements: {
      ichorCost: 5000,
      researchRequirements: ["100% Research on Twisted Astro"],
      taskCompletion: ["Encounter Twisted Dandy at least once"],
      prerequisites: ["Must have encountered Twisted Dandy"]
    },
    
    features: {
      hasRainbowBorder: true,
      hasUniqueVoiceLines: true,
      voiceEffect: "Cosmic whoosh sound effect",
      characterRelations: ["Dandy - Childhood friend", "Pebble - Close companion"],
      lightProducing: true,
      lightColor: "Blue cosmic light"
    },
    
    description: "A light aqua crescent moon with cosmic abilities, wrapped in a cornflower blanket",
    overview: "Astro excels in stealth operations and team stamina support, ideal for strategic players who prioritize team coordination",
    gameplay: {
      strengths: ["Maximum stealth (5 stars)", "Excellent team support", "Enhanced stamina management", "Light production during blackouts"],
      weaknesses: ["Low health (2 hearts)", "Average extraction speed", "Dependent on team positioning"],
      bestStrategy: "Focus on stealth-based machine completion and strategic stamina support during critical moments",
      teamRole: "Support/Stealth Specialist"
    }
  },

  {
    id: "bassie",
    name: "Bassie",
    fullName: "Bassie Bloomington",
    type: "main",
    rarity: "uncommon",
    isMainCharacter: true,
    image: "🐰",
    totalAttributePoints: 15,
    
    attributes: {
      health: 2,
      skillCheck: 1,
      movementSpeed: 5,
      stamina: 4,
      stealth: 4,
      extractionSpeed: 2
    },
    
    abilities: {
      active: {
        name: "Springful Sharing",
        description: "Drops items from inventory to share with other Toons",
        cooldown: "No cooldown",
        detailedDescription: "Bassie can drop items from her inventory for teammates to collect, enabling strategic item distribution",
        howItWorks: "Instantly drops selected items on the ground for other players to pick up",
        bestUsage: "Share healing items, tools, or stamina boosters with teammates who need them most",
        visualEffects: "Easter-themed sparkle effects when dropping items"
      },
      passive: {
        name: "Spring Collection",
        description: "Enhanced item finding and collection abilities",
        detailedDescription: "Bassie has improved chances of finding useful items throughout floors",
        howItWorks: "Automatically increases spawn rate and quality of items found during exploration",
        strategicValue: "Provides team with better resource availability and tactical options"
      }
    },
    
    unlockRequirements: {
      ichorCost: 2500,
      researchRequirements: ["100% Research on Twisted Bassie"],
      taskCompletion: [],
      prerequisites: [],
      specialCurrency: {
        type: "Baskets",
        amount: 3000
      }
    },
    
    features: {
      hasRainbowBorder: true,
      hasUniqueVoiceLines: true,
      voiceEffect: "Twinkle sound effect",
      characterRelations: ["Easter event character"],
      lightProducing: false
    },
    
    description: "An Easter-themed character focused on mobility and item sharing",
    overview: "Bassie excels in mobility and team resource management through item sharing capabilities",
    gameplay: {
      strengths: ["Maximum movement speed (5 stars)", "Item sharing support", "Good stealth capabilities", "No cooldown on active ability"],
      weaknesses: ["Very low skill check (1 star)", "Low health (2 hearts)", "Poor extraction capabilities"],
      bestStrategy: "Focus on item collection and strategic distribution while using high mobility for map control",
      teamRole: "Support/Item Manager"
    }
  },

  {
    id: "bobette",
    name: "Bobette",
    fullName: "Bobette the Bauble",
    type: "main",
    rarity: "uncommon",
    isMainCharacter: true,
    image: "🎁",
    totalAttributePoints: 15,
    
    attributes: {
      health: 2,
      skillCheck: 4,
      movementSpeed: 3,
      stamina: 5,
      stealth: 2,
      extractionSpeed: 2
    },
    
    abilities: {
      active: {
        name: "Precious Packaging",
        description: "Wraps in a gift box for 8 seconds, becoming invisible but immobile",
        cooldown: "90 seconds",
        detailedDescription: "Bobette encases herself in a festive gift box, becoming invisible and unable to move for the duration",
        howItWorks: "Instantly transforms into a gift box state, providing invisibility while preventing movement for 8 seconds",
        bestUsage: "Emergency escape from dangerous situations or when caught by multiple Twisteds",
        visualEffects: "Christmas-themed gift wrapping animation with festive sparkles and ribbon effects"
      },
      passive: {
        name: "Festive Aura",
        description: "Boosts nearby Toons' stamina recovery speed by 50%",
        detailedDescription: "Bobette's festive energy enhances the stamina regeneration of all nearby teammates",
        howItWorks: "Continuously provides 1.5x stamina regeneration boost to all Toons within proximity range",
        strategicValue: "Significantly improves team mobility and endurance during extended operations"
      }
    },
    
    unlockRequirements: {
      ichorCost: 2500,
      researchRequirements: ["100% Research on Twisted Bobette"],
      taskCompletion: [],
      prerequisites: [],
      specialCurrency: {
        type: "Ornaments",
        amount: 3000
      }
    },
    
    features: {
      hasRainbowBorder: true,
      hasUniqueVoiceLines: true,
      voiceEffect: "Jingle bell sound effect",
      characterRelations: ["Christmas event character"],
      lightProducing: false
    },
    
    description: "A Christmas bauble character with invincibility and team stamina support abilities",
    overview: "Bobette provides emergency invincibility and team stamina management, ideal for survival-focused gameplay",
    gameplay: {
      strengths: ["Maximum stamina (5 stars)", "Invincibility ability", "Team stamina support", "Good skill check"],
      weaknesses: ["Low health (2 hearts)", "Low stealth", "Immobile during active ability", "Low extraction speed"],
      bestStrategy: "Position strategically to maximize festive aura coverage while saving invincibility for emergency escapes",
      teamRole: "Support/Tank"
    }
  },

  {
    id: "pebble",
    name: "Pebble",
    fullName: "Pebble Dancifer Jr.",
    type: "main",
    rarity: "legendary",
    isMainCharacter: true,
    image: "🪨",
    totalAttributePoints: 16,
    
    attributes: {
      health: 5,
      skillCheck: 2,
      movementSpeed: 2,
      stamina: 3,
      stealth: 1,
      extractionSpeed: 1
    },
    
    abilities: {
      active: {
        name: "Speak!",
        description: "Barks loudly, drastically decreasing Stealth and alerting nearby Twisteds",
        cooldown: "60 seconds",
        detailedDescription: "Pebble barks loudly to attract all nearby Twisted attention, sacrificing stealth for tactical distraction",
        howItWorks: "Drastically reduces stealth stat and creates noise that alerts all Twisteds in the area to Pebble's location",
        bestUsage: "Strategic distraction to draw Twisteds away from teammates or create escape opportunities",
        visualEffects: "Bark sound waves with attention-grabbing visual indicators"
      },
      passive: {
        name: "Good Boy",
        description: "Can sniff out items, causing them to be highlighted in vicinity",
        detailedDescription: "Pebble's canine instincts allow him to detect and highlight nearby items for the team",
        howItWorks: "Automatically highlights all items within detection range with glowing outlines",
        strategicValue: "Provides enhanced resource gathering and ensures no valuable items are missed"
      }
    },
    
    unlockRequirements: {
      ichorCost: 3750,
      researchRequirements: ["100% Research on Twisted Pebble"],
      taskCompletion: ["Complete all Mastery Quests on Toodles"],
      prerequisites: ["100% Mastery on Toodles"]
    },
    
    features: {
      hasRainbowBorder: true,
      hasUniqueVoiceLines: true,
      voiceEffect: "Barking sounds",
      characterRelations: ["Dandy - Owner/Friend", "Toodles - Related through mastery requirement"],
      lightProducing: false
    },
    
    description: "Dandy's pet rock dog with maximum health and item detection abilities",
    overview: "Pebble serves as a tank character with tactical distraction capabilities and item detection support",
    gameplay: {
      strengths: ["Maximum health (5 hearts)", "Item detection passive", "Tactical distraction ability", "High survivability"],
      weaknesses: ["Minimum stealth (1 star)", "Low skill check", "Poor extraction speed", "Slow movement"],
      bestStrategy: "Use as primary tank for dangerous situations while leveraging item detection for team resource gathering",
      teamRole: "Tank/Utility"
    }
  },

  {
    id: "shelly",
    name: "Shelly",
    fullName: "Shelly Fossilian",
    type: "main",
    rarity: "legendary",
    isMainCharacter: true,
    image: "🪨",
    totalAttributePoints: 16,
    
    attributes: {
      health: 2,
      skillCheck: 5,
      movementSpeed: 4,
      stamina: 3,
      stealth: 4,
      extractionSpeed: 4
    },
    
    abilities: {
      active: {
        name: "Inspiration",
        description: "Boosts targeted Toon's Extraction Speed by 75% for 15 seconds",
        cooldown: "60 seconds",
        detailedDescription: "Shelly provides powerful extraction speed enhancement to a selected teammate",
        howItWorks: "Targets a specific Toon and applies a massive extraction speed multiplier for the duration",
        bestUsage: "Use on high skill check teammates during machine completion for maximum efficiency",
        visualEffects: "Electric spark effects emanating from Shelly's head with inspiring light beams"
      },
      passive: {
        name: "Acceleration",
        description: "Gains 25% Movement Speed boost for 10 seconds when any Machine is completed",
        detailedDescription: "Shelly becomes energized whenever progress is made, gaining temporary speed boosts",
        howItWorks: "Automatically triggers speed enhancement whenever any machine on the floor is completed",
        strategicValue: "Provides dynamic mobility improvements that scale with team productivity"
      }
    },
    
    unlockRequirements: {
      ichorCost: 4250,
      researchRequirements: ["100% Research on Twisted Shelly"],
      taskCompletion: ["Complete all Mastery Quests on Tisha"],
      prerequisites: ["100% Mastery on Tisha"]
    },
    
    features: {
      hasRainbowBorder: true,
      hasUniqueVoiceLines: true,
      voiceEffect: "Rock/mineral sound effects",
      characterRelations: ["Tisha - Close friend through mastery requirement"],
      lightProducing: true,
      lightColor: "Electric sparks"
    },
    
    description: "A fossil-themed character with maximum skill check and team extraction support",
    overview: "Shelly excels in machine completion and provides powerful team extraction support",
    gameplay: {
      strengths: ["Maximum skill check (5 stars)", "Excellent extraction support", "Good mobility", "Strong all-around stats"],
      weaknesses: ["Low health (2 hearts)", "Dependent on team machine completion", "Active ability requires targeting"],
      bestStrategy: "Focus on machine completion while strategically boosting teammates during critical extractions",
      teamRole: "Extractor/Support"
    }
  },

  {
    id: "sprout",
    name: "Sprout",
    fullName: "Sprout Seedly",
    type: "main",
    rarity: "legendary",
    isMainCharacter: true,
    image: "🌱",
    totalAttributePoints: 16,
    
    attributes: {
      health: 2,
      skillCheck: 2,
      movementSpeed: 3,
      stamina: 5,
      stealth: 4,
      extractionSpeed: 4
    },
    
    abilities: {
      active: {
        name: "Baked Sweets",
        description: "Heals targeted Toon by 1 Heart at the cost of 100 Tapes",
        cooldown: "100 seconds (increases with multiple Sprouts)",
        detailedDescription: "Sprout provides crucial healing support by spending tape resources to restore teammate health",
        howItWorks: "Consumes 100 tapes to restore 1 heart to target ally; cost increases by 50 tapes and cooldown by 30s for each additional Sprout",
        bestUsage: "Emergency healing during critical situations when medical items are unavailable",
        visualEffects: "Healing energy with sweet confectionery particle effects"
      },
      passive: {
        name: "Overprotective",
        description: "Can see all alive Toons and their current Health status on the map",
        detailedDescription: "Sprout's caring nature allows constant monitoring of all teammate conditions and locations",
        howItWorks: "Displays real-time health status and positions of all living teammates on the minimap",
        strategicValue: "Provides crucial situational awareness for targeted healing and rescue operations"
      }
    },
    
    unlockRequirements: {
      ichorCost: 4500,
      researchRequirements: ["100% Research on Twisted Sprout"],
      taskCompletion: ["Complete all Mastery Quests on Cosmo"],
      prerequisites: ["100% Mastery on Cosmo"]
    },
    
    features: {
      hasRainbowBorder: true,
      hasUniqueVoiceLines: true,
      voiceEffect: "Bubble pop sound effects",
      characterRelations: ["Cosmo - Best friend", "Matching caramel skins and trinkets"],
      lightProducing: false
    },
    
    description: "A plant-based healer character with team health monitoring and healing abilities",
    overview: "Sprout serves as the primary healer with comprehensive team health awareness",
    gameplay: {
      strengths: ["Maximum stamina (5 stars)", "Active healing ability", "Team health monitoring", "Good stealth and extraction"],
      weaknesses: ["Low health (2 hearts)", "Healing costs tapes", "Low skill check", "Cooldown scales with multiple Sprouts"],
      bestStrategy: "Maintain strategic positioning to monitor team health while conserving tapes for critical healing moments",
      teamRole: "Healer/Support"
    }
  },

  {
    id: "vee",
    name: "Vee",
    fullName: "Vee Version 1",
    type: "main",
    rarity: "legendary",
    isMainCharacter: true,
    image: "📺",
    totalAttributePoints: 16,
    
    attributes: {
      health: 2,
      skillCheck: 4,
      movementSpeed: 3,
      stamina: 3,
      stealth: 1,
      extractionSpeed: 5
    },
    
    abilities: {
      active: {
        name: "Mic Check",
        description: "Highlights all Twisteds on the Floor for 5 seconds",
        cooldown: "60 seconds",
        detailedDescription: "Vee uses her broadcasting equipment to reveal all enemy positions across the entire floor",
        howItWorks: "Instantly reveals the exact location and status of every Twisted on the current floor through walls and obstacles",
        bestUsage: "Critical for navigation planning and avoiding dangerous encounters, especially during blackouts",
        visualEffects: "Arcade-style scanning effects with highlighted enemy outlines and radar pings"
      },
      passive: {
        name: "Camera Hijack",
        description: "Highlights the nearest uncompleted Machine for navigation",
        detailedDescription: "Vee's technical expertise allows her to interface with facility systems to locate objectives",
        howItWorks: "Automatically highlights the closest unfinished machine with a bright outline visible through walls",
        strategicValue: "Eliminates navigation confusion and ensures optimal objective completion routing"
      }
    },
    
    unlockRequirements: {
      ichorCost: 4500,
      researchRequirements: ["100% Research on Twisted Vee"],
      taskCompletion: ["Complete all Mastery Quests on Brightney"],
      prerequisites: ["100% Mastery on Brightney"]
    },
    
    features: {
      hasRainbowBorder: true,
      hasUniqueVoiceLines: true,
      voiceEffect: "Arcade boing sound effects",
      characterRelations: ["Brightney - Best contestant/competitor"],
      lightProducing: true,
      lightColor: "Green arcade light"
    },
    
    description: "A retro TV/arcade character with maximum extraction speed and enemy detection abilities",
    overview: "Vee excels as the primary extractor with unparalleled enemy awareness and objective location",
    gameplay: {
      strengths: ["Maximum extraction speed (5 stars)", "Enemy detection ability", "Machine location assistance", "Excellent skill check"],
      weaknesses: ["Low health (2 hearts)", "Minimum stealth (1 star)", "High target priority for Twisteds"],
      bestStrategy: "Focus on rapid machine completion while using enemy detection to coordinate team movements safely",
      teamRole: "Primary Extractor/Intel"
    }
  }
];
