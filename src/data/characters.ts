import { Character } from '../types/character';

export const characters: Character[] = [
  {
    id: "astro",
    name: "Astro",
    fullName: "Astro Novalite",
    type: "main",
    rarity: "main",
    image: "🌙",
    description: "A cosmic moon character with maximum stealth abilities",
    stats: {
      skillCheck: 4,
      stealth: 5,
      speed: 4,
      health: 2,
      damage: 4
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
    },
    twistedVersion: "twisted-astro"
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
      skillCheck: 4,
      stealth: 1,
      speed: 3,
      health: 2,
      damage: 4
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
      skillCheck: 2,
      stealth: 2,
      speed: 5,
      health: 2,
      damage: 2
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
      skillCheck: 5,
      stealth: 4,
      speed: 2,
      health: 2,
      damage: 2
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
      skillCheck: 4,
      stealth: 3,
      speed: 2,
      health: 2,
      damage: 3
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
    type: "toon",
    rarity: "common",
    image: "📦",
    description: "A purple music box character, one of the starter Toons",
    stats: {
      skillCheck: 3,
      stealth: 3,
      speed: 3,
      health: 3,
      damage: 3
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
    type: "toon",
    rarity: "common",
    image: "🫧",
    description: "A light cyan bubble character, one of the starter Toons",
    stats: {
      skillCheck: 3,
      stealth: 3,
      speed: 3,
      health: 3,
      damage: 3
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
      skillCheck: 5,
      stealth: 1,
      speed: 3,
      health: 2,
      damage: 1
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
      skillCheck: 1,
      stealth: 3,
      speed: 5,
      health: 2,
      damage: 2
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
      skillCheck: 1,
      stealth: 3,
      speed: 3,
      health: 3,
      damage: 4
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
      skillCheck: 4,
      stealth: 4,
      speed: 4,
      health: 2,
      damage: 3
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
      skillCheck: 3,
      stealth: 1,
      speed: 3,
      health: 3,
      damage: 4
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
      skillCheck: 3,
      stealth: 3,
      speed: 4,
      health: 1,
      damage: 2
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
      skillCheck: 5,
      stealth: 2,
      speed: 3,
      health: 3,
      damage: 1
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
      skillCheck: 5,
      stealth: 3,
      speed: 2,
      health: 2,
      damage: 4
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
      skillCheck: 5,
      stealth: 3,
      speed: 4,
      health: 1,
      damage: 0
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
      skillCheck: 1,
      stealth: 1,
      speed: 2,
      health: 3,
      damage: 5
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
      skillCheck: 2,
      stealth: 3,
      speed: 3,
      health: 4,
      damage: 1
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
      skillCheck: 2,
      stealth: 2,
      speed: 3,
      health: 3,
      damage: 2
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
      skillCheck: 4,
      stealth: 2,
      speed: 3,
      health: 3,
      damage: 0
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
      skillCheck: 3,
      stealth: 2,
      speed: 3,
      health: 4,
      damage: 0
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
      skillCheck: 4,
      stealth: 3,
      speed: 3,
      health: 2,
      damage: 0
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
      skillCheck: 2,
      stealth: 5,
      speed: 1,
      health: 2,
      damage: 0
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
      skillCheck: 2,
      stealth: 4,
      speed: 4,
      health: 1,
      damage: 0
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
      skillCheck: 3,
      stealth: 2,
      speed: 3,
      health: 4,
      damage: 0
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
      skillCheck: 2,
      stealth: 2,
      speed: 4,
      health: 3,
      damage: 0
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
      skillCheck: 3,
      stealth: 3,
      speed: 4,
      health: 3,
      damage: 0
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
      skillCheck: 3,
      stealth: 3,
      speed: 3,
      health: 3,
      damage: 0
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
      skillCheck: 2,
      stealth: 1,
      speed: 4,
      health: 4,
      damage: 0
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
      skillCheck: 4,
      stealth: 3,
      speed: 4,
      health: 2,
      damage: 0
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
      skillCheck: 3,
      stealth: 2,
      speed: 4,
      health: 3,
      damage: 0
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
      skillCheck: 5,
      stealth: 2,
      speed: 4,
      health: 2,
      damage: 0
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
      skillCheck: 4,
      stealth: 3,
      speed: 2,
      health: 2,
      damage: 0
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
      skillCheck: 5,
      stealth: 3,
      speed: 1,
      health: 3,
      damage: 0
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
  },
  {
    id: "dandy",
    name: "Dandy",
    fullName: "Dandy",
    type: "lethal",
    rarity: "legendary",
    image: "🎭",
    description: "The main antagonist of Dandy's World, a deadly and powerful character",
    stats: {
      skillCheck: 5,
      stealth: 5,
      speed: 5,
      health: 5,
      damage: 5
    },
    abilities: {
      active: {
        name: "Hunt",
        description: "Tracks down and eliminates Toons with increased efficiency",
        cooldown: 30
      },
      passive: {
        name: "Fear Aura",
        description: "Creates an aura of fear that affects nearby Toons"
      }
    },
    requirements: {
      note: "Unlocked through special game events or achievements"
    }
  },
  {
    id: "dyle",
    name: "Dyle",
    fullName: "Dyle",
    type: "lethal",
    rarity: "legendary",
    image: "👹",
    description: "A powerful and dangerous character in Dandy's World",
    stats: {
      skillCheck: 4,
      stealth: 4,
      speed: 4,
      health: 4,
      damage: 4
    },
    abilities: {
      active: {
        name: "Terrorize",
        description: "Instills fear in nearby Toons, reducing their effectiveness",
        cooldown: 45
      },
      passive: {
        name: "Dark Presence",
        description: "Makes the environment more dangerous for Toons"
      }
    },
    requirements: {
      note: "Unlocked through special game events or achievements"
    }
  },
  {
    id: "twisted-astro",
    name: "Twisted Astro",
    fullName: "Twisted Astro Novalite",
    type: "twisted",
    rarity: "twisted",
    image: "🌙",
    description: "A corrupted version of Astro with enhanced stealth and hunting abilities",
    stats: {
      skillCheck: 5,
      stealth: 5,
      speed: 5,
      health: 3,
      damage: 5
    },
    abilities: {
      active: {
        name: "Shadow Hunt",
        description: "Becomes invisible and gains massive speed boost for 10 seconds",
        cooldown: 45
      },
      passive: {
        name: "Dark Presence",
        description: "Automatically detects nearby Toons and reduces their stealth"
      }
    },
    requirements: {
      note: "Unlocked by completing 100% Research on Astro"
    }
  },
  {
    id: "twisted-vee",
    name: "Twisted Vee",
    fullName: "Twisted Vee Version 1",
    type: "twisted",
    rarity: "twisted",
    image: "📺",
    description: "A corrupted TV-headed character that can track and reveal Toons",
    stats: {
      skillCheck: 5,
      stealth: 2,
      speed: 4,
      health: 3,
      damage: 5
    },
    abilities: {
      active: {
        name: "Broadcast Terror",
        description: "Reveals all Toons on the floor and marks them for 8 seconds",
        cooldown: 40
      },
      passive: {
        name: "Surveillance",
        description: "Can see through walls and detect Toon movements"
      }
    },
    requirements: {
      note: "Unlocked by completing 100% Research on Vee"
    }
  },
  {
    id: "twisted-pebble",
    name: "Twisted Pebble",
    fullName: "Twisted Pebble Dancifer Jr.",
    type: "twisted",
    rarity: "twisted",
    image: "🐕",
    description: "A corrupted version of Pebble with enhanced speed and tracking",
    stats: {
      skillCheck: 3,
      stealth: 3,
      speed: 5,
      health: 3,
      damage: 3
    },
    abilities: {
      active: {
        name: "Pack Hunt",
        description: "Summons other Twisteds to assist in hunting nearby Toons",
        cooldown: 60
      },
      passive: {
        name: "Bloodhound",
        description: "Can track Toons by following their scent trail"
      }
    },
    requirements: {
      note: "Unlocked by completing 100% Research on Pebble"
    }
  },
  {
    id: "twisted-shelly",
    name: "Twisted Shelly",
    fullName: "Twisted Shelly Fossilian",
    type: "twisted",
    rarity: "twisted",
    image: "🐚",
    description: "A corrupted fossil character that can slow and weaken Toons",
    stats: {
      skillCheck: 5,
      stealth: 5,
      speed: 3,
      health: 3,
      damage: 3
    },
    abilities: {
      active: {
        name: "Fossilize",
        description: "Temporarily freezes nearby Toons, making them unable to move",
        cooldown: 70
      },
      passive: {
        name: "Ancient Curse",
        description: "Reduces extraction speed of nearby Toons by 50%"
      }
    },
    requirements: {
      note: "Unlocked by completing 100% Research on Shelly"
    }
  },
  {
    id: "twisted-sprout",
    name: "Twisted Sprout",
    fullName: "Twisted Sprout Seedly",
    type: "twisted",
    rarity: "twisted",
    image: "🌱",
    description: "A corrupted strawberry that can poison and weaken Toons",
    stats: {
      skillCheck: 5,
      stealth: 4,
      speed: 3,
      health: 3,
      damage: 4
    },
    abilities: {
      active: {
        name: "Poison Spores",
        description: "Releases toxic spores that damage and slow nearby Toons",
        cooldown: 55
      },
      passive: {
        name: "Corruption",
        description: "Nearby Toons lose health over time and have reduced healing"
      }
    },
    requirements: {
      note: "Unlocked by completing 100% Research on Sprout"
    }
  },
  {
    id: "twisted-cosmo",
    name: "Twisted Cosmo",
    fullName: "Twisted Cosmo",
    type: "twisted",
    rarity: "twisted",
    image: "🍰",
    description: "A corrupted cupcake that can drain stamina and health",
    stats: {
      skillCheck: 2,
      stealth: 4,
      speed: 4,
      health: 4,
      damage: 5
    },
    abilities: {
      active: {
        name: "Sugar Drain",
        description: "Drains stamina and health from nearby Toons over 15 seconds",
        cooldown: 50
      },
      passive: {
        name: "Sweet Corruption",
        description: "Toons near Twisted Cosmo lose stamina faster"
      }
    },
    requirements: {
      note: "Unlocked by completing 100% Research on Cosmo"
    }
  },
  {
    id: "twisted-tisha",
    name: "Twisted Tisha",
    fullName: "Twisted Tisha",
    type: "twisted",
    rarity: "twisted",
    image: "🧽",
    description: "A corrupted tissue box that can spread disease and weakness",
    stats: {
      skillCheck: 5,
      stealth: 5,
      speed: 5,
      health: 3,
      damage: 4
    },
    abilities: {
      active: {
        name: "Disease Spread",
        description: "Infects nearby Toons with a disease that reduces all stats",
        cooldown: 65
      },
      passive: {
        name: "Contamination",
        description: "Items near Twisted Tisha become corrupted and harmful"
      }
    },
    requirements: {
      note: "Unlocked by completing 100% Research on Tisha"
    }
  },
  {
    id: "twisted-brightney",
    name: "Twisted Brightney",
    fullName: "Twisted Brightney",
    type: "twisted",
    rarity: "twisted",
    image: "💡",
    description: "A corrupted lamp that can blind and disorient Toons",
    stats: {
      skillCheck: 4,
      stealth: 2,
      speed: 4,
      health: 4,
      damage: 5
    },
    abilities: {
      active: {
        name: "Blinding Light",
        description: "Creates an intense flash that blinds nearby Toons for 10 seconds",
        cooldown: 45
      },
      passive: {
        name: "Dark Illumination",
        description: "Creates false light sources that attract and confuse Toons"
      }
    },
    requirements: {
      note: "Unlocked by completing 100% Research on Brightney"
    }
  },
  {
    id: "twisted-toodles",
    name: "Twisted Toodles",
    fullName: "Twisted Toodles",
    type: "twisted",
    rarity: "twisted",
    image: "🎀",
    description: "A corrupted 8-ball that can trap and slow Toons",
    stats: {
      skillCheck: 4,
      stealth: 4,
      speed: 5,
      health: 2,
      damage: 3
    },
    abilities: {
      active: {
        name: "Trap Master",
        description: "Creates invisible traps that slow and damage Toons",
        cooldown: 60
      },
      passive: {
        name: "Childish Cruelty",
        description: "Gains speed when chasing Toons and can predict their movements"
      }
    },
    requirements: {
      note: "Unlocked by completing 100% Research on Toodles"
    }
  },
  {
    id: "twisted-gigi",
    name: "Twisted Gigi",
    fullName: "Twisted Gigi the Gachapon",
    type: "twisted",
    rarity: "twisted",
    image: "🎰",
    description: "A corrupted gachapon that can curse and weaken Toons",
    stats: {
      skillCheck: 5,
      stealth: 3,
      speed: 4,
      health: 4,
      damage: 2
    },
    abilities: {
      active: {
        name: "Curse Machine",
        description: "Curses a targeted Toon with random negative effects",
        cooldown: 75
      },
      passive: {
        name: "Unlucky Aura",
        description: "Nearby Toons have reduced luck and item quality"
      }
    },
    requirements: {
      note: "Unlocked by completing 100% Research on Gigi"
    }
  },
  {
    id: "twisted-glisten",
    name: "Twisted Glisten",
    fullName: "Twisted Glisten",
    type: "twisted",
    rarity: "twisted",
    image: "🪞",
    description: "A corrupted mirror that can reflect damage and confuse Toons",
    stats: {
      skillCheck: 5,
      stealth: 4,
      speed: 3,
      health: 3,
      damage: 5
    },
    abilities: {
      active: {
        name: "Mirror Trap",
        description: "Creates a mirror maze that confuses and traps Toons",
        cooldown: 80
      },
      passive: {
        name: "Reflection",
        description: "Can reflect damage back at Toons and create false images"
      }
    },
    requirements: {
      note: "Unlocked by completing 100% Research on Glisten"
    }
  },
  {
    id: "twisted-scraps",
    name: "Twisted Scraps",
    fullName: "Twisted Scraps",
    type: "twisted",
    rarity: "twisted",
    image: "🧸",
    description: "A corrupted craft character that can sabotage and break equipment",
    stats: {
      skillCheck: 5,
      stealth: 4,
      speed: 5,
      health: 2,
      damage: 1
    },
    abilities: {
      active: {
        name: "Sabotage",
        description: "Breaks nearby machines and equipment, making them unusable",
        cooldown: 70
      },
      passive: {
        name: "Destruction",
        description: "Automatically damages machines and items in the area"
      }
    },
    requirements: {
      note: "Unlocked by completing 100% Research on Scraps"
    }
  },
  {
    id: "twisted-shrimpo",
    name: "Twisted Shrimpo",
    fullName: "Twisted Shrimpo",
    type: "twisted",
    rarity: "twisted",
    image: "🦐",
    description: "A corrupted shrimp with enhanced rage and destructive abilities",
    stats: {
      skillCheck: 2,
      stealth: 2,
      speed: 3,
      health: 4,
      damage: 5
    },
    abilities: {
      active: {
        name: "Rage Burst",
        description: "Enters a berserker state with massive damage and speed boost",
        cooldown: 35
      },
      passive: {
        name: "Pure Hatred",
        description: "Gains power from nearby Toons and becomes stronger in groups"
      }
    },
    requirements: {
      note: "Unlocked by completing 100% Research on Shrimpo"
    }
  },
  {
    id: "twisted-goob",
    name: "Twisted Goob",
    fullName: "Twisted Goob",
    type: "twisted",
    rarity: "twisted",
    image: "🤗",
    description: "A corrupted hugging character that can trap and suffocate Toons",
    stats: {
      skillCheck: 3,
      stealth: 4,
      speed: 4,
      health: 5,
      damage: 2
    },
    abilities: {
      active: {
        name: "Death Hug",
        description: "Grabs and suffocates a Toon, dealing massive damage over time",
        cooldown: 60
      },
      passive: {
        name: "False Friendship",
        description: "Appears friendly to lure Toons into dangerous situations"
      }
    },
    requirements: {
      note: "Unlocked by completing 100% Research on Goob"
    }
  },
  {
    id: "twisted-finn",
    name: "Twisted Finn",
    fullName: "Twisted Finn",
    type: "twisted",
    rarity: "twisted",
    image: "🐙",
    description: "A corrupted octopus that can ensnare and control multiple Toons",
    stats: {
      skillCheck: 3,
      stealth: 3,
      speed: 4,
      health: 4,
      damage: 3
    },
    abilities: {
      active: {
        name: "Tentacle Trap",
        description: "Uses tentacles to grab and immobilize multiple Toons",
        cooldown: 55
      },
      passive: {
        name: "Multi-Hunt",
        description: "Can chase and attack multiple Toons simultaneously"
      }
    },
    requirements: {
      note: "Unlocked by completing 100% Research on Finn"
    }
  },
  {
    id: "twisted-rodger",
    name: "Twisted Rodger",
    fullName: "Twisted Rodger",
    type: "twisted",
    rarity: "twisted",
    image: "🔍",
    description: "A corrupted detective that can track and predict Toon movements",
    stats: {
      skillCheck: 5,
      stealth: 3,
      speed: 4,
      health: 4,
      damage: 1
    },
    abilities: {
      active: {
        name: "Investigation",
        description: "Reveals all Toon locations and predicts their next moves",
        cooldown: 50
      },
      passive: {
        name: "Detective Instinct",
        description: "Can see through Toon strategies and counter their plans"
      }
    },
    requirements: {
      note: "Unlocked by completing 100% Research on Rodger"
    }
  },
  {
    id: "twisted-teagan",
    name: "Twisted Teagan",
    fullName: "Twisted Teagan",
    type: "twisted",
    rarity: "twisted",
    image: "🍵",
    description: "A corrupted teapot that can poison and weaken Toons",
    stats: {
      skillCheck: 4,
      stealth: 3,
      speed: 4,
      health: 5,
      damage: 1
    },
    abilities: {
      active: {
        name: "Poison Tea",
        description: "Serves poisoned tea that damages and slows nearby Toons",
        cooldown: 65
      },
      passive: {
        name: "Toxic Aura",
        description: "Creates a poisonous environment that damages Toons over time"
      }
    },
    requirements: {
      note: "Unlocked by completing 100% Research on Teagan"
    }
  },
  {
    id: "twisted-razzle-dazzle",
    name: "Twisted Razzle & Dazzle",
    fullName: "Twisted Razzle & Dazzle",
    type: "twisted",
    rarity: "twisted",
    image: "🎭",
    description: "Corrupted twin masks that can switch between different attack patterns",
    stats: {
      skillCheck: 5,
      stealth: 4,
      speed: 4,
      health: 3,
      damage: 1
    },
    abilities: {
      active: {
        name: "Mask Switch",
        description: "Switches between offensive and defensive modes with different abilities",
        cooldown: 55
      },
      passive: {
        name: "Dual Corruption",
        description: "Stats and abilities change randomly, making them unpredictable"
      }
    },
    requirements: {
      note: "Unlocked by completing 100% Research on Razzle & Dazzle"
    }
  },
  {
    id: "twisted-connie",
    name: "Twisted Connie",
    fullName: "Twisted Connie",
    type: "twisted",
    rarity: "twisted",
    image: "🐚",
    description: "A corrupted nautilus that can create deadly barriers and traps",
    stats: {
      skillCheck: 3,
      stealth: 5,
      speed: 2,
      health: 3,
      damage: 1
    },
    abilities: {
      active: {
        name: "Shell Prison",
        description: "Creates an impenetrable barrier that traps Toons inside",
        cooldown: 85
      },
      passive: {
        name: "Spiral Death",
        description: "Creates a maze-like structure that confuses and traps Toons"
      }
    },
    requirements: {
      note: "Unlocked by completing 100% Research on Connie"
    }
  },
  {
    id: "twisted-flutter",
    name: "Twisted Flutter",
    fullName: "Twisted Flutter",
    type: "twisted",
    rarity: "twisted",
    image: "🦋",
    description: "A corrupted butterfly that can create deadly wind currents",
    stats: {
      skillCheck: 3,
      stealth: 5,
      speed: 5,
      health: 2,
      damage: 1
    },
    abilities: {
      active: {
        name: "Wind Storm",
        description: "Creates powerful wind currents that push Toons into danger",
        cooldown: 45
      },
      passive: {
        name: "Graceful Death",
        description: "Moves unpredictably and can hover over obstacles to ambush Toons"
      }
    },
    requirements: {
      note: "Unlocked by completing 100% Research on Flutter"
    }
  },
  {
    id: "twisted-looey",
    name: "Twisted Looey",
    fullName: "Twisted Looey",
    type: "twisted",
    rarity: "twisted",
    image: "🎈",
    description: "A corrupted balloon that can explode and damage nearby Toons",
    stats: {
      skillCheck: 4,
      stealth: 3,
      speed: 4,
      health: 5,
      damage: 1
    },
    abilities: {
      active: {
        name: "Explosive Pop",
        description: "Sacrifices health to create a massive explosion that damages all nearby Toons",
        cooldown: 65
      },
      passive: {
        name: "Inflating Threat",
        description: "Gains power as health decreases and becomes more dangerous"
      }
    },
    requirements: {
      note: "Unlocked by completing 100% Research on Looey"
    }
  },
  {
    id: "twisted-coal",
    name: "Twisted Coal",
    fullName: "Twisted Coal",
    type: "twisted",
    rarity: "twisted",
    image: "⚫",
    description: "A corrupted coal character that can create deadly fire zones",
    stats: {
      skillCheck: 3,
      stealth: 3,
      speed: 5,
      health: 4,
      damage: 1
    },
    abilities: {
      active: {
        name: "Inferno",
        description: "Creates a massive fire zone that damages and traps Toons",
        cooldown: 55
      },
      passive: {
        name: "Burning Darkness",
        description: "Creates smoke that reduces visibility and damages Toons over time"
      }
    },
    requirements: {
      note: "Unlocked by completing 100% Research on Coal"
    }
  },
  {
    id: "twisted-cocoa",
    name: "Twisted Cocoa",
    fullName: "Twisted Cocoa",
    type: "twisted",
    rarity: "twisted",
    image: "☕",
    description: "A corrupted hot cocoa that can burn and poison Toons",
    stats: {
      skillCheck: 4,
      stealth: 4,
      speed: 5,
      health: 4,
      damage: 1
    },
    abilities: {
      active: {
        name: "Scalding Spray",
        description: "Sprays boiling hot liquid that burns and damages nearby Toons",
        cooldown: 60
      },
      passive: {
        name: "Burning Comfort",
        description: "Creates a false sense of warmth that lures Toons into danger"
      }
    },
    requirements: {
      note: "Unlocked by completing 100% Research on Cocoa"
    }
  },
  {
    id: "twisted-eggson",
    name: "Twisted Eggson",
    fullName: "Twisted Eggson",
    type: "twisted",
    rarity: "twisted",
    image: "🥚",
    description: "A corrupted egg that can hatch deadly surprises",
    stats: {
      skillCheck: 4,
      stealth: 4,
      speed: 4,
      health: 4,
      damage: 1
    },
    abilities: {
      active: {
        name: "Hatch Horror",
        description: "Hatches to reveal a random deadly creature or trap",
        cooldown: 110
      },
      passive: {
        name: "Fragile Threat",
        description: "Takes extra damage but has chance to avoid attacks and counter-attack"
      }
    },
    requirements: {
      note: "Unlocked by completing 100% Research on Eggson"
    }
  },
  {
    id: "twisted-rudie",
    name: "Twisted Rudie",
    fullName: "Twisted Rudie",
    type: "twisted",
    rarity: "twisted",
    image: "🦌",
    description: "A corrupted reindeer that can trample and crush Toons",
    stats: {
      skillCheck: 3,
      stealth: 2,
      speed: 5,
      health: 5,
      damage: 1
    },
    abilities: {
      active: {
        name: "Stampede",
        description: "Charges forward at high speed, trampling and damaging any Toons in the way",
        cooldown: 70
      },
      passive: {
        name: "Flying Terror",
        description: "Can jump over obstacles and land on Toons for massive damage"
      }
    },
    requirements: {
      note: "Unlocked by completing 100% Research on Rudie"
    }
  },
  {
    id: "twisted-flyte",
    name: "Twisted Flyte",
    fullName: "Twisted Flyte",
    type: "twisted",
    rarity: "twisted",
    image: "✈️",
    description: "A corrupted paper airplane that can create deadly aerial attacks",
    stats: {
      skillCheck: 5,
      stealth: 4,
      speed: 5,
      health: 3,
      damage: 1
    },
    abilities: {
      active: {
        name: "Aerial Assault",
        description: "Flies above the map and drops deadly projectiles on Toons",
        cooldown: 45
      },
      passive: {
        name: "Paper Cuts",
        description: "Leaves sharp paper trails that damage Toons who touch them"
      }
    },
    requirements: {
      note: "Unlocked by completing 100% Research on Flyte"
    }
  },
  {
    id: "twisted-ginger",
    name: "Twisted Ginger",
    fullName: "Twisted Ginger",
    type: "twisted",
    rarity: "twisted",
    image: "🍪",
    description: "A corrupted gingerbread that can poison and weaken Toons",
    stats: {
      skillCheck: 4,
      stealth: 3,
      speed: 5,
      health: 4,
      damage: 1
    },
    abilities: {
      active: {
        name: "Poison Cookie",
        description: "Drops poisoned cookies that damage and slow Toons who eat them",
        cooldown: 60
      },
      passive: {
        name: "Sweet Death",
        description: "Creates false healing items that actually harm Toons"
      }
    },
    requirements: {
      note: "Unlocked by completing 100% Research on Ginger"
    }
  },
  {
    id: "twisted-blot",
    name: "Twisted Blot",
    fullName: "Twisted Blot",
    type: "twisted",
    rarity: "twisted",
    image: "🖤",
    description: "A corrupted ink blot that can create deadly dark zones",
    stats: {
      skillCheck: 5,
      stealth: 3,
      speed: 5,
      health: 3,
      damage: 1
    },
    abilities: {
      active: {
        name: "Dark Pool",
        description: "Creates a pool of darkness that damages and slows Toons",
        cooldown: 50
      },
      passive: {
        name: "Ink Stains",
        description: "Marks Toons with ink that makes them visible to all Twisteds"
      }
    },
    requirements: {
      note: "Unlocked by completing 100% Research on Blot"
    }
  },
  {
    id: "twisted-brusha",
    name: "Twisted Brusha",
    fullName: "Twisted Brusha",
    type: "twisted",
    rarity: "twisted",
    image: "🖌️",
    description: "A corrupted paintbrush that can create deadly barriers and traps",
    stats: {
      skillCheck: 5,
      stealth: 4,
      speed: 3,
      health: 3,
      damage: 1
    },
    abilities: {
      active: {
        name: "Paint Trap",
        description: "Creates a wall of toxic paint that damages and poisons Toons",
        cooldown: 75
      },
      passive: {
        name: "Artistic Destruction",
        description: "Can paint over safe areas, making them dangerous for Toons"
      }
    },
    requirements: {
      note: "Unlocked by completing 100% Research on Brusha"
    }
  },
  {
    id: "twisted-yatta",
    name: "Twisted Yatta",
    fullName: "Twisted Yatta",
    type: "twisted",
    rarity: "twisted",
    image: "📢",
    description: "A corrupted megaphone that can disorient and confuse Toons",
    stats: {
      skillCheck: 5,
      stealth: 4,
      speed: 2,
      health: 4,
      damage: 1
    },
    abilities: {
      active: {
        name: "Sonic Boom",
        description: "Creates a powerful sound wave that stuns and damages nearby Toons",
        cooldown: 80
      },
      passive: {
        name: "Voice of Terror",
        description: "Can communicate with other Twisteds and coordinate attacks"
      }
    },
    requirements: {
      note: "Unlocked by completing 100% Research on Yatta"
    }
  }
];
