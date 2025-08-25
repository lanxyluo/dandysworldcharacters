import { Character } from '../../types/character';

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
    },
    detailedGuide: {
      abilityMechanics: {
        active: {
          detailedDescription: "Shadow Hunt makes Twisted Astro invisible and provides massive speed boost for 10 seconds. *Based on character description inference, actual effects subject to in-game performance*",
          howItWorks: "After activation, becomes completely invisible and gains significant speed increase for a limited time.",
          bestUsage: "Use for surprise attacks, quick repositioning, or escaping from dangerous situations.",
          visualEffects: "Invisibility effects, speed trail animations, shadow distortion."
        },
        passive: {
          detailedDescription: "Dark Presence automatically detects nearby Toons and reduces their stealth. *Based on character description inference, actual effects subject to in-game performance*",
          howItWorks: "Continuously reveals nearby Toons and weakens their stealth abilities.",
          strategicValue: "Constant surveillance ability, makes it harder for Toons to hide."
        }
      },
      strategies: {
        playingAs: {
          overview: "Stealth hunter specialist, excels at surprise attacks and tracking Toons.",
          tips: [
            "Use Shadow Hunt for surprise attacks",
            "Utilize passive detection to track Toons",
            "Maintain high mobility with speed advantage",
            "Coordinate with other Twisteds for maximum effectiveness"
          ],
          commonMistakes: [
            "Wasting Shadow Hunt on non-critical situations",
            "Ignoring passive detection benefits",
            "Over-exposing position after ability ends",
            "Not coordinating with team"
          ],
          advancedTechniques: [
            "Coordinate surprise attacks with other Twisteds",
            "Use speed boost for tactical repositioning",
            "Create fear through constant surveillance"
          ]
        },
        playingAgainst: {
          overview: "Twisted Astro is a stealth hunter, need to maintain awareness and avoid surprise attacks.",
          counterStrategies: [
            "Stay in well-lit areas",
            "Use sound to detect invisible enemies",
            "Maintain team coordination",
            "Avoid isolated positions"
          ],
          whatToAvoid: [
            "Being alone in dark areas",
            "Ignoring stealth warnings",
            "Concentrating in predictable locations",
            "Not using detection abilities"
          ],
          teamComposition: [
            "Use characters with detection abilities",
            "High stealth characters to counter tracking",
            "Team coordination characters"
          ]
        }
      },
      interactions: {
        synergies: {
          description: "Twisted Astro works best with other stealth and hunting Twisteds.",
          bestPartners: [
            {
              character: "Twisted Vee",
              reason: "Vee reveals Toons, Astro hunts them",
              combo: "Detection + Hunting coordination"
            },
            {
              character: "Twisted Pebble",
              reason: "Pebble tracks, Astro attacks",
              combo: "Tracking + Stealth attack"
            }
          ]
        },
        counters: {
          description: "Twisted Astro excels at stealth but is vulnerable when visible.",
          strongAgainst: [
            {
              character: "Low stealth characters",
              reason: "Uses stealth advantage for surprise attacks"
            }
          ],
          weakAgainst: [
            {
              character: "Detection characters",
              reason: "Stealth abilities become ineffective"
            }
          ]
        }
      },
      scenarios: {
        bestMaps: ["Dark maps", "Complex structures"],
        bestSituations: ["Surprise attacks", "Tracking Toons"],
        challengingSituations: ["Well-lit areas", "Team coordination"],
        teamRoles: ["Stealth hunting", "Surveillance", "Surprise attacks"]
      }
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
    },
    detailedGuide: {
      abilityMechanics: {
        active: {
          detailedDescription: "Broadcast Terror reveals all Toons on the floor and marks them for 8 seconds. *Based on character description inference, actual effects subject to in-game performance*",
          howItWorks: "After activation, all Toons become visible and marked, making them easy targets for other Twisteds.",
          bestUsage: "Use when Toons are scattered, before coordinated attacks, or to create panic.",
          visualEffects: "Broadcast effects, Toon highlighting, marking indicators."
        },
        passive: {
          detailedDescription: "Surveillance allows seeing through walls and detecting Toon movements. *Based on character description inference, actual effects subject to in-game performance*",
          howItWorks: "Continuously monitors Toon movements through obstacles and provides intelligence.",
          strategicValue: "Constant intelligence gathering, helps coordinate team attacks."
        }
      },
      strategies: {
        playingAs: {
          overview: "Intelligence specialist, excels at revealing Toons and coordinating attacks.",
          tips: [
            "Use Broadcast Terror to coordinate team attacks",
            "Utilize surveillance for strategic positioning",
            "Communicate Toon locations to team",
            "Maintain awareness of all Toon movements"
          ],
          commonMistakes: [
            "Using Broadcast Terror without team coordination",
            "Ignoring surveillance information",
            "Over-exposing position",
            "Not communicating with team"
          ],
          advancedTechniques: [
            "Coordinate reveals with other Twisteds",
            "Use surveillance for tactical positioning",
            "Create fear through constant monitoring"
          ]
        },
        playingAgainst: {
          overview: "Twisted Vee is an intelligence gatherer, need to limit information gathering and coordinate movements.",
          counterStrategies: [
            "Stay in groups to reduce individual targeting",
            "Use stealth abilities to counter surveillance",
            "Coordinate movements to minimize exposure",
            "Quickly change positions after being revealed"
          ],
          whatToAvoid: [
            "Staying in predictable locations",
            "Ignoring reveal warnings",
            "Solo actions after being marked",
            "Not using stealth abilities"
          ],
          teamComposition: [
            "Use high stealth characters",
            "Team coordination characters",
            "Quick movement characters"
          ]
        }
      },
      interactions: {
        synergies: {
          description: "Twisted Vee works best with other hunting and attack Twisteds.",
          bestPartners: [
            {
              character: "Twisted Astro",
              reason: "Vee reveals, Astro hunts",
              combo: "Intelligence + Hunting coordination"
            },
            {
              character: "Twisted Pebble",
              reason: "Vee provides intel, Pebble tracks",
              combo: "Surveillance + Tracking"
            }
          ]
        },
        counters: {
          description: "Twisted Vee excels at intelligence but is vulnerable in direct combat.",
          strongAgainst: [
            {
              character: "Low stealth characters",
              reason: "Uses surveillance to track and reveal"
            }
          ],
          weakAgainst: [
            {
              character: "High stealth characters",
              reason: "Surveillance abilities become less effective"
            }
          ]
        }
      },
      scenarios: {
        bestMaps: ["Complex maps", "Multi-floor structures"],
        bestSituations: ["Team coordination", "Intelligence gathering"],
        challengingSituations: ["Open terrain", "High stealth enemies"],
        teamRoles: ["Intelligence gathering", "Team coordination", "Target marking"]
      }
    }
  }
];
