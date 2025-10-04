import { Character } from '../../types/character';

export const regularCharacters: Character[] = [
  {
    id: "cosmo",
    name: "Cosmo",
    fullName: "Cosmo",
    type: "regular",
    rarity: "uncommon",
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
    },
    detailedGuide: {
      abilityMechanics: {
        active: {
          detailedDescription: "Sugar Rush restores 1 Heart to target Toon at the cost of 50 Tapes. *Based on character description inference, actual effects subject to in-game performance*",
          howItWorks: "Specified target immediately recovers health, requires consuming tape resources.",
          bestUsage: "Use when key teammates are injured, before entering dangerous areas, or for emergency rescue.",
          visualEffects: "Healing light effects, target indicator displayed."
        },
        passive: {
          detailedDescription: "Increases healing effectiveness when multiple healing items are used. *Based on character description inference, actual effects subject to in-game performance*",
          howItWorks: "Detects nearby healing item usage, provides additional healing effects.",
          strategicValue: "Encourages team coordination in using healing items."
        }
      },
      strategies: {
        playingAs: {
          overview: "Healing expert, excels at team healing and resource management.",
          tips: [
            "Reasonably manage tape resources",
            "Prioritize healing key teammates",
            "Coordinate with team in using healing items",
            "Maintain appropriate distance to avoid attacks"
          ],
          commonMistakes: [
            "Over-consuming tape resources",
            "Ignoring own safety",
            "Not coordinating team healing",
            "Poor timing for healing"
          ],
          advancedTechniques: [
            "Coordinate double healing with Brightney",
            "Maximize healing effects using passive ability",
            "Provide emergency healing at critical moments"
          ]
        },
        playingAgainst: {
          overview: "Cosmo is the team's healing core, need to prioritize limiting.",
          counterStrategies: [
            "Prioritize killing Cosmo to reduce team recovery",
            "Consume their tape resources",
            "Disperse actions to avoid group healing"
          ],
          whatToAvoid: [
            "Letting Cosmo freely heal the team",
            "Ignoring their healing ability",
            "Concentrating actions near Cosmo"
          ],
          teamComposition: [
            "Use high damage characters for quick kills",
            "Resource-consuming characters",
            "Disperse actions to reduce healing effects"
          ]
        }
      },
      interactions: {
        synergies: {
          description: "Cosmo works best with healing and support characters.",
          bestPartners: [
            {
              character: "Brightney",
              reason: "Double healing secures team survival",
              combo: "Health + Stamina double recovery"
            },
            {
              character: "Astro",
              reason: "Astro provides stamina, Cosmo provides health",
              combo: "Double support security"
            }
          ]
        },
        counters: {
          description: "Cosmo excels at healing but has limited resources.",
          strongAgainst: [
            {
              character: "Health-consuming characters",
              reason: "Provides emergency health recovery"
            }
          ],
          weakAgainst: [
            {
              character: "Resource-consuming characters",
              reason: "Tape resources limited, easily consumed"
            }
          ]
        }
      },
      scenarios: {
        bestMaps: ["Medium maps", "Resource-rich areas"],
        bestSituations: ["Team coordination", "Need healing"],
        challengingSituations: ["Resource scarcity", "Solo action"],
        teamRoles: ["Emergency healing", "Resource management", "Team support"]
      }
    }
  },
  {
    id: "tisha",
    name: "Tisha",
    fullName: "Tisha",
    type: "regular",
    rarity: "uncommon",
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
    },
    detailedGuide: {
      abilityMechanics: {
        active: {
          detailedDescription: "Clean Up removes negative status effects from nearby Toons. *Based on character description inference, actual effects subject to in-game performance*",
          howItWorks: "After activation, all Toons within range clear negative status effects.",
          bestUsage: "Use when team is affected by negative status, before entering dangerous areas, or for emergency cleanup.",
          visualEffects: "Cleaning light effects, range indicator displayed."
        },
        passive: {
          detailedDescription: "Automatically picks up items when walking over them. *Based on character description inference, actual effects subject to in-game performance*",
          howItWorks: "Automatically collects items on the path while moving, no manual operation needed.",
          strategicValue: "Improves resource collection efficiency, maintains movement fluidity."
        }
      },
      strategies: {
        playingAs: {
          overview: "Support and cleanup expert, excels at team status management and resource collection.",
          tips: [
            "Maintain movement status to collect resources",
            "Timely clean team negative status",
            "Utilize high stealth ability for reconnaissance",
            "Maintain appropriate distance from team"
          ],
          commonMistakes: [
            "Stopping movement and losing resource collection",
            "Ignoring team status management",
            "Over-exposing position",
            "Not utilizing stealth advantages"
          ],
          advancedTechniques: [
            "Coordinate reconnaissance and cleanup with Vee",
            "Maximize resource collection using passive ability",
            "Provide status cleanup at critical moments"
          ]
        },
        playingAgainst: {
          overview: "Tisha is the team's status management core, need to prioritize limiting.",
          counterStrategies: [
            "Prioritize killing Tisha to reduce team cleanup",
            "Use their low health to quickly eliminate them",
            "Disperse actions to avoid group cleanup"
          ],
          whatToAvoid: [
            "Letting Tisha freely clean team status",
            "Ignoring their cleanup ability",
            "Concentrating actions near Tisha"
          ],
          teamComposition: [
            "Use high damage characters for quick kills",
            "High stealth characters to track Tisha",
            "Disperse actions to reduce cleanup effects"
          ]
        }
      },
      interactions: {
        synergies: {
          description: "Tisha works best with intelligence and support characters.",
          bestPartners: [
            {
              character: "Vee",
              reason: "Vee provides intelligence, Tisha provides cleanup",
              combo: "Intelligence + Status management"
            },
            {
              character: "Astro",
              reason: "Astro provides stamina, Tisha provides cleanup",
              combo: "Stamina support + Status management"
            }
          ]
        },
        counters: {
          description: "Tisha excels at cleanup but is easily eliminated.",
          strongAgainst: [
            {
              character: "Negative status characters",
              reason: "Provides status cleanup ability"
            }
          ],
          weakAgainst: [
            {
              character: "High damage characters",
              reason: "Low health, easily eliminated quickly"
            }
          ]
        }
      },
      scenarios: {
        bestMaps: ["Medium maps", "Complex structures"],
        bestSituations: ["Team coordination", "Need cleanup"],
        challengingSituations: ["Solo action", "High damage enemies"],
        teamRoles: ["Status cleanup", "Resource collection", "Team support"]
      }
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
      stealth: 2,
      speed: 4,
      health: 2,
      damage: 3
    },
    abilities: {
      active: {
        name: "Quick Step",
        description: "Increases movement speed for a short duration",
        cooldown: 30
      },
      passive: {
        name: "Agile",
        description: "Moves faster on smooth surfaces"
      }
    },
    requirements: {
      ichor: 250,
      research: "100% Research on Twisted Toodles"
    },
    detailedGuide: {
      abilityMechanics: {
        active: {
          detailedDescription: "Quick Step increases movement speed for a short duration. *Based on character description inference, actual effects subject to in-game performance*",
          howItWorks: "After activation, movement speed significantly increases for a brief period.",
          bestUsage: "Use for quick escapes, chasing enemies, or repositioning during combat.",
          visualEffects: "Speed trail effects, movement animation acceleration."
        },
        passive: {
          detailedDescription: "Moves faster on smooth surfaces. *Based on character description inference, actual effects subject to in-game performance*",
          howItWorks: "Automatically gains speed bonus when moving on smooth terrain.",
          strategicValue: "Terrain-based speed advantage, encourages strategic positioning."
        }
      },
      strategies: {
        playingAs: {
          overview: "Speed specialist, excels at mobility and quick tactical movements.",
          tips: [
            "Utilize smooth surfaces for speed advantage",
            "Use Quick Step for tactical repositioning",
            "Maintain high mobility to avoid attacks",
            "Coordinate with team for quick support"
          ],
          commonMistakes: [
            "Staying on rough terrain",
            "Overusing Quick Step",
            "Ignoring terrain advantages",
            "Not utilizing speed for support"
          ],
          advancedTechniques: [
            "Coordinate quick support with Dyle",
            "Use terrain advantages for tactical positioning",
            "Provide rapid assistance at critical moments"
          ]
        },
        playingAgainst: {
          overview: "Toodles is a speed specialist, need to limit their mobility advantages.",
          counterStrategies: [
            "Force them onto rough terrain",
            "Use area control to limit movement",
            "Predict movement routes"
          ],
          whatToAvoid: [
            "Letting them move freely on smooth surfaces",
            "Ignoring speed advantages",
            "Dispersed pursuit"
          ],
          teamComposition: [
            "Use area control characters",
            "High health characters to withstand quick assaults",
            "Predictive characters"
          ]
        }
      },
      interactions: {
        synergies: {
          description: "Toodles works best with support and coordination characters.",
          bestPartners: [
            {
              character: "Dyle",
              reason: "Dyle provides high speed, Toodles provides terrain advantage",
              combo: "Double speed coordination"
            },
            {
              character: "Vee",
              reason: "Vee provides intelligence, Toodles provides quick execution",
              combo: "Intelligence + Quick support"
            }
          ]
        },
        counters: {
          description: "Toodles excels at mobility but has low health.",
          strongAgainst: [
            {
              character: "Slow characters",
              reason: "Uses speed advantages for tactical positioning"
            }
          ],
          weakAgainst: [
            {
              character: "Area control characters",
              reason: "Low health, easily eliminated when movement is restricted"
            }
          ]
        }
      },
      scenarios: {
        bestMaps: ["Smooth terrain maps", "Open areas"],
        bestSituations: ["Need mobility", "Quick support"],
        challengingSituations: ["Rough terrain", "Area control enemies"],
        teamRoles: ["Quick support", "Mobility assistance", "Tactical positioning"]
      }
    }
  }
];
