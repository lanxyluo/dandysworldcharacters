import { Character } from '../types/character';

export const characters: Character[] = [
  {
    id: "astro",
    name: "Astro",
    fullName: "Astro Novalite",
    type: "main",
    rarity: "legendary",
    image: "🌙",
    description: "A cosmic moon character with maximum stealth abilities",
    stats: {
      hearts: 2,
      skillCheck: 4,
      movementSpeed: 4,
      stamina: 5,
      stealth: 5,
      extractionSpeed: 4
    },
    abilities: {
      active: {
        name: "Nap Time",
        description: "Restores 100% Stamina for nearby Toons",
        cooldown: 75
      },
      passive: {
        name: "Well Rested",
        description: "Recovers Stamina 50% faster and detects Toons with 50% Stamina or less"
      }
    },
    requirements: {
      ichor: 5000,
      research: "100% Research on Twisted Astro",
      other: ["Encounter Twisted Dandy"]
    }
  },
  {
    id: "vee",
    name: "Vee",
    fullName: "Vee Version 1",
    type: "main",
    rarity: "legendary",
    image: "📺",
    description: "A TV-headed character that can highlight Twisteds",
    stats: {
      hearts: 2,
      skillCheck: 4,
      movementSpeed: 3,
      stamina: 3,
      stealth: 1,
      extractionSpeed: 4
    },
    abilities: {
      active: {
        name: "Mic Check",
        description: "Highlights all Twisteds on the Floor for 5 seconds",
        cooldown: 60
      },
      passive: {
        name: "Camera Hijack",
        description: "Marks unfinished Machines near Toons"
      }
    },
    requirements: {
      ichor: 4500,
      research: "100% Research on Twisted Vee",
      mastery: "Complete all Mastery Quests on Brightney"
    }
  },
  {
    id: "pebble",
    name: "Pebble",
    fullName: "Pebble Dancifer Jr.",
    type: "main",
    rarity: "legendary",
    image: "🐕",
    description: "Dandy's pet rock with maximum movement speed",
    stats: {
      hearts: 2,
      skillCheck: 2,
      movementSpeed: 5,
      stamina: 5,
      stealth: 2,
      extractionSpeed: 2
    },
    abilities: {
      active: {
        name: "Speak!",
        description: "Barks loudly, drastically decreasing Stealth and alerting nearby Twisteds",
        cooldown: 60
      },
      passive: {
        name: "Sniff",
        description: "Can sniff out items, causing them to be highlighted"
      }
    },
    requirements: {
      ichor: 3750,
      research: "100% Research on Twisted Pebble",
      mastery: "Complete all Mastery Quests on Toodles"
    }
  },
  {
    id: "shelly",
    name: "Shelly",
    fullName: "Shelly Fossilian",
    type: "main",
    rarity: "legendary",
    image: "🐚",
    description: "A fossilized dinosaur character with support abilities",
    stats: {
      hearts: 2,
      skillCheck: 5,
      movementSpeed: 2,
      stamina: 3,
      stealth: 4,
      extractionSpeed: 2
    },
    abilities: {
      active: {
        name: "Inspiration",
        description: "Boosts extraction speed of a selected Toon by 75% for 15 seconds",
        cooldown: 60
      },
      passive: {
        name: "Motivation",
        description: "Gains 25% movement speed boost when any machine is completed"
      }
    },
    requirements: {
      ichor: 4250,
      research: "100% Research on Twisted Shelly",
      mastery: "Complete all Mastery Quests on Tisha"
    }
  },
  {
    id: "sprout",
    name: "Sprout",
    fullName: "Sprout Seedly",
    type: "main",
    rarity: "legendary",
    image: "🌱",
    description: "A strawberry character with healing abilities",
    stats: {
      hearts: 2,
      skillCheck: 4,
      movementSpeed: 2,
      stamina: 4,
      stealth: 3,
      extractionSpeed: 3
    },
    abilities: {
      active: {
        name: "Baked Sweets",
        description: "Heals a targeted Toon by 1 Heart at the cost of 100 Tapes",
        cooldown: 100
      },
      passive: {
        name: "Attention to Detail",
        description: "Can see where all other alive Toons are and their health status"
      }
    },
    requirements: {
      ichor: 4500,
      research: "100% Research on Twisted Sprout",
      mastery: "Complete all Mastery Quests on Cosmo"
    }
  },
  {
    id: "boxten",
    name: "Boxten",
    fullName: "Boxten",
    type: "regular",
    rarity: "common",
    image: "📦",
    description: "A purple music box character, one of the starter Toons",
    stats: {
      hearts: 3,
      skillCheck: 3,
      movementSpeed: 3,
      stamina: 3,
      stealth: 3,
      extractionSpeed: 3
    },
    abilities: {
      active: {
        name: "Music Box",
        description: "Plays music that boosts extraction speed for all nearby Toons",
        cooldown: 120
      },
      passive: {
        name: "Music Box",
        description: "Grants 6% more extraction speed per Toon in the run"
      }
    },
    requirements: {
      ichor: 0,
      note: "Starter Toon option"
    }
  },
  {
    id: "poppy",
    name: "Poppy",
    fullName: "Poppy",
    type: "regular",
    rarity: "common",
    image: "🫧",
    description: "A light cyan bubble character, one of the starter Toons",
    stats: {
      hearts: 3,
      skillCheck: 3,
      movementSpeed: 3,
      stamina: 3,
      stealth: 3,
      extractionSpeed: 3
    },
    abilities: {
      active: {
        name: "Bubble Burst",
        description: "Creates a burst of bubbles that temporarily increases movement speed",
        cooldown: 90
      },
      passive: {
        name: "Poppy's Boost",
        description: "Increases movement speed when stamina is full"
      }
    },
    requirements: {
      ichor: 0,
      note: "Starter Toon option"
    }
  },
  {
    id: "bobette",
    name: "Bobette",
    fullName: "Bobette the Bauble",
    type: "main",
    rarity: "legendary",
    image: "🎄",
    description: "A Christmas bauble character with festive abilities",
    stats: {
      hearts: 2,
      skillCheck: 5,
      movementSpeed: 3,
      stamina: 5,
      stealth: 1,
      extractionSpeed: 1
    },
    abilities: {
      active: {
        name: "Precious Packaging",
        description: "Wraps herself in a gift box, becoming invisible but unable to move for 8 seconds",
        cooldown: 90
      },
      passive: {
        name: "Festive Aura",
        description: "Boosts stamina recovery speed of nearby Toons by 50%"
      }
    },
    requirements: {
      ornaments: 3000,
      ichor: 2500,
      research: "100% Research on Twisted Bobette",
      note: "Christmas Event Only"
    }
  },
  {
    id: "bassie",
    name: "Bassie",
    fullName: "Bassie Bloomington",
    type: "main",
    rarity: "legendary",
    image: "🐰",
    description: "An Easter basket character that can share items with other Toons",
    stats: {
      hearts: 2,
      skillCheck: 1,
      movementSpeed: 5,
      stamina: 4,
      stealth: 3,
      extractionSpeed: 2
    },
    abilities: {
      active: {
        name: "Springful Sharing",
        description: "Can drop items from her inventory, sharing them with other Toons",
        cooldown: 0
      },
      passive: {
        name: "Easter Spirit",
        description: "Increases item discovery rate for nearby Toons"
      }
    },
    requirements: {
      baskets: 3000,
      ichor: 2500,
      research: "100% Research on Twisted Bassie",
      note: "Easter Event Only"
    }
  },
  {
    id: "cosmo",
    name: "Cosmo",
    fullName: "Cosmo",
    type: "regular",
    rarity: "common",
    image: "🍰",
    description: "A cupcake character with healing abilities, Sprout's best friend",
    stats: {
      hearts: 3,
      skillCheck: 1,
      movementSpeed: 3,
      stamina: 4,
      stealth: 3,
      extractionSpeed: 4
    },
    abilities: {
      active: {
        name: "Sugar Rush",
        description: "Heals a targeted Toon by 1 Heart at the cost of 50 Tapes",
        cooldown: 60
      },
      passive: {
        name: "Sweet Aroma",
        description: "Increases healing effectiveness when multiple healing items are used"
      }
    },
    requirements: {
      ichor: 750,
      research: "100% Research on Twisted Cosmo"
    }
  },
  {
    id: "tisha",
    name: "Tisha",
    fullName: "Tisha",
    type: "regular",
    rarity: "common",
    image: "🧽",
    description: "A tissue box character focused on cleaning and support, Shelly's good friend",
    stats: {
      hearts: 2,
      skillCheck: 4,
      movementSpeed: 4,
      stamina: 2,
      stealth: 4,
      extractionSpeed: 3
    },
    abilities: {
      active: {
        name: "Clean Up",
        description: "Removes negative status effects from nearby Toons",
        cooldown: 45
      },
      passive: {
        name: "Tidy Up",
        description: "Automatically picks up items when walking over them"
      }
    },
    requirements: {
      ichor: 500,
      research: "100% Research on Twisted Tisha"
    }
  },
  {
    id: "brightney",
    name: "Brightney",
    fullName: "Brightney",
    type: "regular",
    rarity: "common",
    image: "💡",
    description: "A lamp character that provides light and visibility, Vee's favorite contestant",
    stats: {
      hearts: 3,
      skillCheck: 3,
      movementSpeed: 3,
      stamina: 4,
      stealth: 1,
      extractionSpeed: 4
    },
    abilities: {
      active: {
        name: "Bright Light",
        description: "Creates a large light radius that reveals nearby Twisteds for 10 seconds",
        cooldown: 75
      },
      passive: {
        name: "Illumination",
        description: "Provides constant light radius and can see in dark areas"
      }
    },
    requirements: {
      ichor: 1000,
      research: "100% Research on Twisted Brightney"
    }
  },
  {
    id: "toodles",
    name: "Toodles",
    fullName: "Toodles",
    type: "regular",
    rarity: "common",
    image: "🎀",
    description: "An 8-ball character with speed abilities, loves dogs like Pebble",
    stats: {
      hearts: 1,
      skillCheck: 3,
      movementSpeed: 4,
      stamina: 3,
      stealth: 3,
      extractionSpeed: 2
    },
    abilities: {
      active: {
        name: "Vanish",
        description: "Becomes temporarily invisible and gains speed boost for 5 seconds",
        cooldown: 70
      },
      passive: {
        name: "Childish Excitement",
        description: "Gains movement speed when other Toons are nearby"
      }
    },
    requirements: {
      ichor: 1250,
      research: "100% Research on Twisted Toodles"
    }
  },
  {
    id: "gigi",
    name: "Gigi",
    fullName: "Gigi the Gachapon",
    type: "regular",
    rarity: "common",
    image: "🎰",
    description: "A gachapon machine character that can generate random items for the team",
    stats: {
      hearts: 3,
      skillCheck: 5,
      movementSpeed: 3,
      stamina: 1,
      stealth: 2,
      extractionSpeed: 1
    },
    abilities: {
      active: {
        name: "Prize Time",
        description: "Grants herself a random item from any tier, including Dandy's Shop items",
        cooldown: 80
      },
      passive: {
        name: "Lucky Draw",
        description: "Has a chance to generate extra items when completing machines"
      }
    },
    requirements: {
      ichor: 1350,
      research: "100% Research on Twisted Gigi"
    }
  },
  {
    id: "glisten",
    name: "Glisten",
    fullName: "Glisten",
    type: "regular",
    rarity: "common",
    image: "🪞",
    description: "A mirror character with reflection-based abilities and high extraction skills",
    stats: {
      hearts: 2,
      skillCheck: 5,
      movementSpeed: 2,
      stamina: 1,
      stealth: 3,
      extractionSpeed: 4
    },
    abilities: {
      active: {
        name: "Reflect",
        description: "Creates a mirror barrier that deflects Twisted attention for 8 seconds",
        cooldown: 100
      },
      passive: {
        name: "Vanity",
        description: "Gains speed boost when other Toons are watching or nearby"
      }
    },
    requirements: {
      ichor: 2300,
      research: "100% Research on Twisted Glisten"
    }
  },
  {
    id: "scraps",
    name: "Scraps",
    fullName: "Scraps",
    type: "regular",
    rarity: "common",
    image: "🧸",
    description: "A craft-focused character that can repair and enhance team equipment",
    stats: {
      hearts: 1,
      skillCheck: 5,
      movementSpeed: 4,
      stamina: 2,
      stealth: 3,
      extractionSpeed: 0
    },
    abilities: {
      active: {
        name: "Craft",
        description: "Can craft useful items from collected materials",
        cooldown: 60
      },
      passive: {
        name: "Resourceful",
        description: "Automatically collects crafting materials when near broken items"
      }
    },
    requirements: {
      ichor: 1750,
      research: "100% Research on Twisted Scraps"
    }
  },
  {
    id: "shrimpo",
    name: "Shrimpo",
    fullName: "Shrimpo",
    type: "regular",
    rarity: "common",
    image: "🦐",
    description: "An angry shrimp character with challenging stats but unique mechanics",
    stats: {
      hearts: 3,
      skillCheck: 1,
      movementSpeed: 2,
      stamina: 3,
      stealth: 1,
      extractionSpeed: 5
    },
    abilities: {
      active: {
        name: "Tantrum",
        description: "Enters rage mode, gaining speed but attracting all nearby Twisteds",
        cooldown: 45
      },
      passive: {
        name: "Hatred",
        description: "All stats are reduced, but gains massive extraction speed when alone"
      }
    },
    requirements: {
      ichor: 50,
      research: "100% Research on Twisted Shrimpo"
    }
  },
  {
    id: "goob",
    name: "Goob",
    fullName: "Goob",
    type: "regular",
    rarity: "common",
    image: "🤗",
    description: "A friendly hugging character focused on team support and protection",
    stats: {
      hearts: 4,
      skillCheck: 2,
      movementSpeed: 3,
      stamina: 2,
      stealth: 3,
      extractionSpeed: 1
    },
    abilities: {
      active: {
        name: "Bear Hug",
        description: "Grabs and protects a teammate, sharing damage for 10 seconds",
        cooldown: 70
      },
      passive: {
        name: "Friendship",
        description: "Nearby Toons regenerate stamina faster and gain slight damage reduction"
      }
    },
    requirements: {
      ichor: 800,
      research: "100% Research on Twisted Goob"
    }
  },
  {
    id: "finn",
    name: "Finn",
    fullName: "Finn",
    type: "regular",
    rarity: "common",
    image: "🐙",
    description: "An octopus character with multi-tasking abilities and crowd control",
    stats: {
      hearts: 3,
      skillCheck: 2,
      movementSpeed: 3,
      stamina: 3,
      stealth: 2,
      extractionSpeed: 2
    },
    abilities: {
      active: {
        name: "Reel In",
        description: "Pulls distant items or slows nearby Twisteds with tentacles",
        cooldown: 50
      },
      passive: {
        name: "Multi-Task",
        description: "Can work on multiple machines simultaneously at reduced efficiency"
      }
    },
    requirements: {
      ichor: 900,
      research: "100% Research on Twisted Finn"
    }
  },
  {
    id: "rodger",
    name: "Rodger",
    fullName: "Rodger",
    type: "regular",
    rarity: "common",
    image: "🔍",
    description: "A detective magnifying glass character with investigation abilities",
    stats: {
      hearts: 3,
      skillCheck: 4,
      movementSpeed: 3,
      stamina: 3,
      stealth: 2,
      extractionSpeed: 0
    },
    abilities: {
      active: {
        name: "Investigate",
        description: "Reveals hidden items and Twisted locations within a large radius",
        cooldown: 55
      },
      passive: {
        name: "Detective Work",
        description: "Can see item quality and Twisted movement patterns"
      }
    },
    requirements: {
      ichor: 1200,
      research: "100% Research on Twisted Rodger"
    }
  },
  {
    id: "teagan",
    name: "Teagan",
    fullName: "Teagan",
    type: "regular",
    rarity: "common",
    image: "🍵",
    description: "A teapot character that provides support and healing to the team",
    stats: {
      hearts: 4,
      skillCheck: 3,
      movementSpeed: 3,
      stamina: 3,
      stealth: 2,
      extractionSpeed: 0
    },
    abilities: {
      active: {
        name: "Tea Time",
        description: "Heals all nearby Toons and provides temporary stamina boost",
        cooldown: 90
      },
      passive: {
        name: "Soothing Presence",
        description: "Nearby Toons have reduced stress and slower stamina drain"
      }
    },
    requirements: {
      ichor: 1100,
      research: "100% Research on Twisted Teagan"
    }
  },
  {
    id: "razzle-dazzle",
    name: "Razzle & Dazzle",
    fullName: "Razzle & Dazzle",
    type: "regular",
    rarity: "common",
    image: "🎭",
    description: "Twin mask characters that can switch between different stat configurations",
    stats: {
      hearts: 2,
      skillCheck: 4,
      movementSpeed: 3,
      stamina: 3,
      stealth: 3,
      extractionSpeed: 0
    },
    abilities: {
      active: {
        name: "Switch Places",
        description: "Swaps stat distribution between offensive and defensive configurations",
        cooldown: 65
      },
      passive: {
        name: "Dual Nature",
        description: "Stats change randomly every 60 seconds during gameplay"
      }
    },
    requirements: {
      ichor: 1600,
      research: "100% Research on Twisted Razzle & Dazzle"
    }
  },
  {
    id: "connie",
    name: "Connie",
    fullName: "Connie",
    type: "regular",
    rarity: "common",
    image: "🐚",
    description: "A nautilus shell character with defensive and slowing abilities",
    stats: {
      hearts: 2,
      skillCheck: 2,
      movementSpeed: 1,
      stamina: 5,
      stealth: 5,
      extractionSpeed: 0
    },
    abilities: {
      active: {
        name: "Shell Shield",
        description: "Creates a protective barrier that blocks Twisted attacks for the team",
        cooldown: 80
      },
      passive: {
        name: "Spiral Defense",
        description: "Takes reduced damage and can slow nearby Twisteds"
      }
    },
    requirements: {
      ichor: 1400,
      research: "100% Research on Twisted Connie"
    }
  },
  {
    id: "flutter",
    name: "Flutter",
    fullName: "Flutter",
    type: "regular",
    rarity: "common",
    image: "🦋",
    description: "A butterfly character focused on speed and evasion abilities",
    stats: {
      hearts: 1,
      skillCheck: 2,
      movementSpeed: 4,
      stamina: 4,
      stealth: 4,
      extractionSpeed: 0
    },
    abilities: {
      active: {
        name: "Flutter Away",
        description: "Gains massive speed boost and becomes untargetable for 3 seconds",
        cooldown: 40
      },
      passive: {
        name: "Graceful Flight",
        description: "Moves faster when low on health and can hover over obstacles"
      }
    },
    requirements: {
      ichor: 600,
      research: "100% Research on Twisted Flutter"
    }
  },
  {
    id: "looey",
    name: "Looey",
    fullName: "Looey",
    type: "regular",
    rarity: "common",
    image: "🎈",
    description: "A balloon character that gains power as health decreases",
    stats: {
      hearts: 4,
      skillCheck: 3,
      movementSpeed: 3,
      stamina: 3,
      stealth: 2,
      extractionSpeed: 0
    },
    abilities: {
      active: {
        name: "Pop!",
        description: "Sacrifices 1 heart to gain massive speed and abilities for 15 seconds",
        cooldown: 70
      },
      passive: {
        name: "Deflating",
        description: "Gains 20% movement speed for each missing heart"
      }
    },
    requirements: {
      ichor: 900,
      research: "100% Research on Twisted Looey"
    }
  },
  {
    id: "coal",
    name: "Coal",
    fullName: "Coal",
    type: "event",
    rarity: "common",
    image: "⚫",
    description: "A coal character with fire-based abilities from Christmas events",
    stats: {
      hearts: 3,
      skillCheck: 2,
      movementSpeed: 4,
      stamina: 4,
      stealth: 2,
      extractionSpeed: 0
    },
    abilities: {
      active: {
        name: "Ignite",
        description: "Creates a fire area that damages Twisteds but also attracts them",
        cooldown: 60
      },
      passive: {
        name: "Burning Bright",
        description: "Provides light and warmth, slowly regenerating team stamina"
      }
    },
    requirements: {
      ornaments: 1500,
      ichor: 500,
      research: "100% Research on Twisted Coal",
      note: "Christmas Event Only"
    }
  },
  {
    id: "cocoa",
    name: "Cocoa",
    fullName: "Cocoa",
    type: "event",
    rarity: "common",
    image: "☕",
    description: "A hot cocoa character that provides comfort and healing during Christmas",
    stats: {
      hearts: 3,
      skillCheck: 3,
      movementSpeed: 4,
      stamina: 2,
      stealth: 3,
      extractionSpeed: 0
    },
    abilities: {
      active: {
        name: "Warm Cup",
        description: "Heals and provides warmth buff to all nearby Toons",
        cooldown: 75
      },
      passive: {
        name: "Cozy Aura",
        description: "Nearby Toons recover stamina faster and resist cold effects"
      }
    },
    requirements: {
      ornaments: 1200,
      ichor: 400,
      research: "100% Research on Twisted Cocoa",
      note: "Christmas Event Only"
    }
  },
  {
    id: "eggson",
    name: "Eggson",
    fullName: "Eggson",
    type: "event",
    rarity: "common",
    image: "🥚",
    description: "An egg character with surprise abilities from Easter events",
    stats: {
      hearts: 3,
      skillCheck: 3,
      movementSpeed: 3,
      stamina: 3,
      stealth: 3,
      extractionSpeed: 0
    },
    abilities: {
      active: {
        name: "Hatch",
        description: "Breaks open to reveal a random powerful temporary ability",
        cooldown: 120
      },
      passive: {
        name: "Fragile Shell",
        description: "Takes extra damage but has chance to avoid attacks entirely"
      }
    },
    requirements: {
      baskets: 1800,
      ichor: 600,
      research: "100% Research on Twisted Eggson",
      note: "Easter Event Only"
    }
  },
  {
    id: "rudie",
    name: "Rudie",
    fullName: "Rudie",
    type: "event",
    rarity: "common",
    image: "🦌",
    description: "A reindeer character with sleigh-pulling abilities from Christmas events",
    stats: {
      hearts: 4,
      skillCheck: 2,
      movementSpeed: 4,
      stamina: 4,
      stealth: 1,
      extractionSpeed: 0
    },
    abilities: {
      active: {
        name: "Sleigh Ride",
        description: "Carries a teammate quickly across the map to safety",
        cooldown: 85
      },
      passive: {
        name: "Flying Reindeer",
        description: "Can move faster and jump over obstacles"
      }
    },
    requirements: {
      ornaments: 2000,
      ichor: 750,
      research: "100% Research on Twisted Rudie",
      note: "Christmas Event Only"
    }
  },
  {
    id: "flyte",
    name: "Flyte",
    fullName: "Flyte",
    type: "regular",
    rarity: "common",
    image: "✈️",
    description: "A paper airplane character with aerial reconnaissance abilities",
    stats: {
      hearts: 2,
      skillCheck: 4,
      movementSpeed: 4,
      stamina: 2,
      stealth: 3,
      extractionSpeed: 0
    },
    abilities: {
      active: {
        name: "Scout Flight",
        description: "Flies above the map to reveal entire floor layout and Twisted positions",
        cooldown: 50
      },
      passive: {
        name: "Paper Trail",
        description: "Leaves markers that help teammates navigate and avoid Twisteds"
      }
    },
    requirements: {
      ichor: 800,
      research: "100% Research on Twisted Flyte"
    }
  },
  {
    id: "ginger",
    name: "Ginger",
    fullName: "Ginger",
    type: "regular",
    rarity: "common",
    image: "🍪",
    description: "A gingerbread character with sweet support abilities",
    stats: {
      hearts: 3,
      skillCheck: 3,
      movementSpeed: 4,
      stamina: 3,
      stealth: 2,
      extractionSpeed: 0
    },
    abilities: {
      active: {
        name: "Sweet Treat",
        description: "Drops a healing cookie that restores health over time",
        cooldown: 65
      },
      passive: {
        name: "Sugar Rush",
        description: "Gives nearby Toons slight speed boost and energy"
      }
    },
    requirements: {
      ichor: 800,
      research: "100% Research on Twisted Ginger"
    }
  },
  {
    id: "blot",
    name: "Blot",
    fullName: "Blot",
    type: "regular",
    rarity: "common",
    image: "🖤",
    description: "An ink blot character with stealth and marking abilities",
    stats: {
      hearts: 2,
      skillCheck: 5,
      movementSpeed: 4,
      stamina: 5,
      stealth: 2,
      extractionSpeed: 0
    },
    abilities: {
      active: {
        name: "Ink Cloud",
        description: "Creates a dark cloud that hides teammates and confuses Twisteds",
        cooldown: 55
      },
      passive: {
        name: "Staining",
        description: "Marks Twisteds that attack, making them visible to all teammates"
      }
    },
    requirements: {
      ichor: 1300,
      research: "100% Research on Twisted Blot"
    }
  },
  {
    id: "brusha",
    name: "Brusha",
    fullName: "Brusha",
    type: "regular",
    rarity: "common",
    image: "🖌️",
    description: "A paintbrush character with creative and artistic abilities",
    stats: {
      hearts: 2,
      skillCheck: 4,
      movementSpeed: 2,
      stamina: 4,
      stealth: 3,
      extractionSpeed: 0
    },
    abilities: {
      active: {
        name: "Paint Wall",
        description: "Creates a temporary barrier that blocks Twisted movement",
        cooldown: 80
      },
      passive: {
        name: "Artistic Inspiration",
        description: "Boosts skill check accuracy for nearby teammates"
      }
    },
    requirements: {
      ichor: 950,
      research: "100% Research on Twisted Brusha"
    }
  },
  {
    id: "yatta",
    name: "Yatta",
    fullName: "Yatta",
    type: "regular",
    rarity: "common",
    image: "📢",
    description: "A megaphone character with communication and rallying abilities",
    stats: {
      hearts: 3,
      skillCheck: 5,
      movementSpeed: 1,
      stamina: 3,
      stealth: 3,
      extractionSpeed: 0
    },
    abilities: {
      active: {
        name: "Rally Cry",
        description: "Boosts all teammate stats and provides temporary invincibility",
        cooldown: 90
      },
      passive: {
        name: "Loud Voice",
        description: "Can communicate with distant teammates and coordinate actions"
      }
    },
    requirements: {
      ichor: 1450,
      research: "100% Research on Twisted Yatta"
    }
  }
];
