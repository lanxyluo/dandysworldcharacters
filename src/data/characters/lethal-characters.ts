import { Character } from '../../types/character';

export const lethalCharacters: Character[] = [
  {
    id: "dandy-lethal",
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
    },
    detailedGuide: {
      abilityMechanics: {
        active: {
          detailedDescription: "Hunt tracks and efficiently eliminates Toons. *Based on character description inference, actual effects subject to in-game performance*",
          howItWorks: "After activation, greatly increases tracking and elimination efficiency, quickly locates targets.",
          bestUsage: "Use for chasing key targets, quickly clearing areas, or creating fear.",
          visualEffects: "Tracking effects, target indicators, fear effects."
        },
        passive: {
          detailedDescription: "Creates fear aura, affects nearby Toons. *Based on character description inference, actual effects subject to in-game performance*",
          howItWorks: "Automatically creates fear effects, reduces efficiency and morale of nearby Toons.",
          strategicValue: "Continuous psychological pressure, no active activation required."
        }
      },
      strategies: {
        playingAs: {
          overview: "Ultimate hunter, excels at tracking, elimination and psychological intimidation.",
          tips: [
            "Prioritize eliminating key targets",
            "Use fear aura to create chaos",
            "Quickly switch targets to maintain pressure",
            "Coordinate actions with team"
          ],
          commonMistakes: [
            "Over-chasing single targets",
            "Ignoring team coordination",
            "Not utilizing fear effects",
            "Exposing position in dangerous locations"
          ],
          advancedTechniques: [
            "Coordinate double threat with Dyle-lethal",
            "Use fear aura to control areas",
            "Quickly eliminate targets at critical moments"
          ]
        },
        playingAgainst: {
          overview: "Dandy-lethal is the ultimate threat, requires team collaboration to counter.",
          counterStrategies: [
            "Translation pending",
            "Use high health characters to withstand attacks",
            "Quickly escape fear range"
          ],
          whatToAvoid: [
            "Facing Dandy-lethal alone",
            "Staying in fear range",
            "Ignoring their tracking ability"
          ],
          teamComposition: [
            "Use high health characters",
            "High speed characters to escape quickly",
            "Team coordination characters"
          ]
        }
      },
      interactions: {
        synergies: {
          description: "Dandy-lethal works best with other lethal characters.",
          bestPartners: [
            {
              character: "Dyle-lethal",
              reason: "Double lethal threat, creates maximum fear",
              combo: "Tracking + Fear double effects"
            }
          ]
        },
        counters: {
          description: "Dandy-lethal is the ultimate threat, almost no weaknesses.",
          strongAgainst: [
            {
              character: "All Toon characters",
              reason: "All attributes maxed, no clear weaknesses"
            }
          ],
          weakAgainst: [
            {
              character: "Team collaboration",
              reason: "Translation pending"
            }
          ]
        }
      },
      scenarios: {
        bestMaps: ["All maps", "Complex structures"],
        bestSituations: ["Chasing targets", "Creating fear"],
        challengingSituations: ["Team collaboration", "High health enemies"],
        teamRoles: ["Ultimate hunter", "Fear creation", "Area control"]
      }
    }
  },
  {
    id: "dyle-lethal",
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
  }
];
