import { Character } from '../types/character';

export const twistedCharacters: Character[] = [
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
