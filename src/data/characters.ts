import { Character } from '../types/character';

export const characters: Character[] = [
  {
    id: "astro",
    name: "Astro",
    fullName: "Astro Novalite",
    type: "main",
    rarity: "legendary",
    image: "/images/astro.png",
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
    image: "/images/vee.png",
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
    image: "/images/pebble.png",
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
    id: "boxten",
    name: "Boxten",
    fullName: "Boxten",
    type: "regular",
    rarity: "common",
    image: "/images/boxten.png",
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
    image: "/images/poppy.png",
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
  }
];
