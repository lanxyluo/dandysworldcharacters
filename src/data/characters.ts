export interface Character {
  id: string;
  name: string;
  fullName: string;
  type: 'main' | 'regular' | 'event';
  rarity: 'legendary' | 'common';
  image: string;
  description: string;
  stats: {
    hearts: number;
    skillCheck: number;
    movementSpeed: number;
    stamina: number;
    stealth: number;
    extractionSpeed: number;
  };
  abilities: {
    active?: {
      name: string;
      description: string;
      cooldown: number;
    };
    passive?: {
      name: string;
      description: string;
    };
  };
  requirements: {
    ichor?: number;
    ornaments?: number;
    baskets?: number;  // 新增：复活节活动货币
    research?: string;
    mastery?: string;
    other?: string[];
    note?: string;
  };
}

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
    type: "event",
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
    type: "event",
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
  }
];
