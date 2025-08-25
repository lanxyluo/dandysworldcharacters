import { Character } from '../../types/character';

export const mainCharacters: Character[] = [
  {
    id: "astro",
    name: "Astro",
    fullName: "Astro Novalite",
    type: "main",
    rarity: "legendary",
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
    twistedVersion: "twisted-astro",
    detailedGuide: {
      abilityMechanics: {
        active: {
          detailedDescription: "Nap Time restores 100% Stamina for nearby Toons. *Based on character description inference, actual effects subject to in-game performance*",
          howItWorks: "After activation, all Toons within range immediately recover full stamina.",
          bestUsage: "Use when team stamina is low, before entering new areas, or for emergency recovery.",
          visualEffects: "Moon glow effect, range indicator displayed."
        },
        passive: {
          detailedDescription: "Stamina recovery speed increased by 50%, detects low stamina Toons. *Based on character description inference, actual effects subject to in-game performance*",
          howItWorks: "Automatically accelerates stamina recovery, displays locations of low stamina teammates.",
          strategicValue: "Continuous support ability, no active activation required."
        }
      },
      strategies: {
        playingAs: {
          overview: "Support and stealth expert, provides stamina security for the team.",
          tips: [
            "Maintain stealth status, avoid being detected",
            "Use Nap Time in safe locations",
            "Utilize passive ability to monitor teammate status",
            "Prioritize protecting yourself and key teammates"
          ],
          commonMistakes: [
            "Using abilities in dangerous locations",
            "Ignoring stealth advantages",
            "Over-exposing position",
            "Not paying attention to teammate stamina status"
          ],
          advancedTechniques: [
            "Coordinate reconnaissance with Vee",
            "Use stealth for tactical retreats",
            "Provide stamina support at critical moments"
          ]
        },
        playingAgainst: {
          overview: "Astro is the team's core support, prioritize limiting their activities.",
          counterStrategies: [
            "Prioritize killing Astro to reduce team recovery",
            "Use their low health to quickly eliminate them",
            "Disperse actions to avoid group recovery"
          ],
          whatToAvoid: [
            "Letting Astro freely recover the team",
            "Ignoring their stealth abilities",
            "Concentrating actions near Astro"
          ],
          teamComposition: [
            "Use high damage characters for quick kills",
            "High stealth characters to track Astro",
            "Disperse actions to reduce recovery effects"
          ]
        }
      },
      interactions: {
        synergies: {
          description: "Astro has good synergy with all characters.",
          bestPartners: [
            {
              character: "Vee",
              reason: "Vee provides intelligence, Astro provides recovery",
              combo: "Vee reconnaissance + Astro support"
            },
            {
              character: "Dyle",
              reason: "Dyle provides fast movement, Astro provides stamina",
              combo: "Dyle assault + Astro recovery"
            }
          ]
        },
        counters: {
          description: "Astro excels at support but is easily eliminated.",
          strongAgainst: [
            {
              character: "Stamina-consuming characters",
              reason: "Provides continuous stamina recovery"
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
        bestMaps: ["Large maps", "Complex structures"],
        bestSituations: ["Team coordination", "Long-term combat"],
        challengingSituations: ["Solo action", "High damage enemies"],
        teamRoles: ["Stamina support", "Stealth reconnaissance", "Team security"]
      }
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
    },
    detailedGuide: {
      abilityMechanics: {
        active: {
          detailedDescription: "Mic Check reveals all Twisted enemies on the floor for 5 seconds. *Based on character description inference, actual effects subject to in-game performance*",
          howItWorks: "After activation, all Twisted enemies display red outlines, visible through walls.",
          bestUsage: "Use for initial reconnaissance, before entering new areas, or when suspecting enemies.",
          visualEffects: "Twisted enemies display red outlines and pulse effects."
        },
        passive: {
          detailedDescription: "Automatically marks unfinished machines near Toons. *Based on character description inference, actual effects subject to in-game performance*",
          howItWorks: "Automatically marks machines when Toons approach, visible to the team.",
          strategicValue: "No manual reconnaissance needed, helps team quickly locate objectives."
        }
      },
      strategies: {
        playingAs: {
          overview: "Support and reconnaissance character, provides intelligence to help the team.",
          tips: [
            "Communicate with team before using Mic Check",
            "Use passive ability to help teammates find objectives",
            "Stay in team rear, avoid solo actions",
            "Prioritize survival, intelligence is more important than kills"
          ],
          commonMistakes: [
            "Overusing Mic Check",
            "Separating from team",
            "Directly engaging enemies",
            "Not communicating information to teammates"
          ],
          advancedTechniques: [
            "Coordinate with other team abilities",
            "Plan routes using the 5-second window",
            "Coordinate reconnaissance with stealth characters"
          ]
        },
        playingAgainst: {
          overview: "Vee is the intelligence core, prioritize killing or limiting their activities.",
          counterStrategies: [
            "Prioritize killing Vee to reduce team vision",
            "Disperse actions to avoid being discovered at once",
            "Use Vee's low stealth to track them"
          ],
          whatToAvoid: [
            "Concentrating actions when Vee uses Mic Check",
            "Ignoring Vee's passive marking ability",
            "Letting Vee freely provide intelligence"
          ],
          teamComposition: [
            "Use high stealth characters to counter",
            "Quick kill characters to prioritize Vee",
            "Disperse actions to reduce reconnaissance impact"
          ]
        }
      },
      interactions: {
        synergies: {
          description: "Vee works best with stealth and fast characters.",
          bestPartners: [
            {
              character: "Astro",
              reason: "High stealth coordinates with Vee's reconnaissance",
              combo: "Astro stealth reconnaissance + Vee target marking"
            },
            {
              character: "Dyle",
              reason: "Fast movement coordinates with Vee's intelligence",
              combo: "Vee provides location + Dyle quick assault"
            }
          ]
        },
        counters: {
          description: "Vee excels at discovering enemies but is easily eliminated.",
          strongAgainst: [
            {
              character: "Twisted characters",
              reason: "Mic Check completely exposes their location"
            }
          ],
          weakAgainst: [
            {
              character: "High stealth characters",
              reason: "Easily ambushed, low survival ability"
            }
          ]
        }
      },
      scenarios: {
        bestMaps: ["Large maps", "Complex structures"],
        bestSituations: ["Team coordination", "Need reconnaissance"],
        challengingSituations: ["Solo action", "High stealth enemies"],
        teamRoles: ["Intelligence support", "Target marking", "Team coordination"]
      }
    }
  },
  {
    id: "dandy",
    name: "Dandy",
    fullName: "Dandy",
    type: "main",
    rarity: "legendary",
    image: "🎭",
    description: "A versatile character with balanced abilities",
    stats: {
      skillCheck: 3,
      stealth: 3,
      speed: 3,
      health: 3,
      damage: 3
    },
    abilities: {
      active: {
        name: "Disguise",
        description: "Takes on the appearance of a random character",
        cooldown: 90
      },
      passive: {
        name: "Adaptable",
        description: "Gains small bonuses based on nearby characters"
      }
    },
    requirements: {
      ichor: 4000,
      research: "100% Research on Twisted Dandy"
    },
    twistedVersion: "twisted-dandy",
    detailedGuide: {
      abilityMechanics: {
        active: {
          detailedDescription: "Disguise randomly disguises as other character appearances. *Based on character description inference, actual effects subject to in-game performance*",
          howItWorks: "After activation, randomly selects character appearance, lasting for a period of time.",
          bestUsage: "Use to confuse enemies, infiltrate enemy groups, or for tactical retreats.",
          visualEffects: "Character appearance changes, may have disguise indicators."
        },
        passive: {
          detailedDescription: "Gains small bonuses based on nearby characters. *Based on character description inference, actual effects subject to in-game performance*",
          howItWorks: "Automatically detects nearby character types, gaining corresponding attribute boosts.",
          strategicValue: "Flexibly adapts to different team compositions."
        }
      },
      strategies: {
        playingAs: {
          overview: "Versatile character with strong adaptability, suitable for various tactics.",
          tips: [
            "Use disguise ability to confuse enemies",
            "Adjust tactical style based on team",
            "Maintain balanced attribute development",
            "Flexibly use disguise and bonuses"
          ],
          commonMistakes: [
            "Over-relying on single ability",
            "Ignoring team coordination",
            "Poor timing for disguise",
            "Not utilizing passive bonuses"
          ],
          advancedTechniques: [
            "Quickly switch tactics after disguise",
            "Coordinate with different characters to maximize advantages",
            "Use disguise for intelligence gathering"
          ]
        },
        playingAgainst: {
          overview: "Dandy is a versatile character, requires targeted countermeasures.",
          counterStrategies: [
            "Identify true identity after disguise",
            "Use their balanced attributes with no outstanding advantages",
            "Disperse actions to reduce bonus effects"
          ],
          whatToAvoid: [
            "Being confused by disguise",
            "Ignoring their adaptability",
            "Letting them freely develop"
          ],
          teamComposition: [
            "Use specialized counter characters",
            "High damage characters for quick kills",
            "Disperse actions to reduce coordination"
          ]
        }
      },
      interactions: {
        synergies: {
          description: "Dandy can coordinate well with all characters.",
          bestPartners: [
            {
              character: "Astro",
              reason: "Astro provides support, Dandy provides balance",
              combo: "Support + Balanced development"
            },
            {
              character: "Vee",
              reason: "Vee provides intelligence, Dandy provides execution",
              combo: "Intelligence + Execution ability"
            }
          ]
        },
        counters: {
          description: "Dandy has strong adaptability but no outstanding advantages.",
          strongAgainst: [
            {
              character: "Single-type characters",
              reason: "Can adapt and counter"
            }
          ],
          weakAgainst: [
            {
              character: "Specialized counter characters",
              reason: "No outstanding advantages, easily targeted"
            }
          ]
        }
      },
      scenarios: {
        bestMaps: ["Medium maps", "Balanced terrain"],
        bestSituations: ["Team coordination", "Need adaptability"],
        challengingSituations: ["Specialized counters", "Extreme environments"],
        teamRoles: ["Tactical execution", "Team coordination", "Flexible support"]
      }
    }
  },
  {
    id: "dyle",
    name: "Dyle",
    fullName: "Dyle",
    type: "main",
    rarity: "legendary",
    image: "⚡",
    description: "A fast and agile character with high mobility",
    stats: {
      skillCheck: 2,
      stealth: 2,
      speed: 5,
      health: 2,
      damage: 3
    },
    abilities: {
      active: {
        name: "Sprint",
        description: "Increases movement speed significantly for a short time",
        cooldown: 45
      },
      passive: {
        name: "Momentum",
        description: "Builds up speed bonus while moving"
      }
    },
    requirements: {
      ichor: 4000,
      research: "100% Research on Twisted Dyle"
    },
    twistedVersion: "twisted-dyle",
    detailedGuide: {
      abilityMechanics: {
        active: {
          detailedDescription: "Sprint significantly increases movement speed for a short time. *Based on character description inference, actual effects subject to in-game performance*",
          howItWorks: "After activation, movement speed greatly increases, suitable for quick assaults or retreats.",
          bestUsage: "Use for quick assaults, emergency retreats, or chasing enemies.",
          visualEffects: "Lightning effects, movement trail display."
        },
        passive: {
          detailedDescription: "Builds up speed bonus while moving. *Based on character description inference, actual effects subject to in-game performance*",
          howItWorks: "Gains speed boost while continuously moving, gradually disappears after stopping.",
          strategicValue: "Encourages continuous movement, suitable for guerrilla tactics."
        }
      },
      strategies: {
        playingAs: {
          overview: "High-speed movement expert, excels at assault and guerrilla tactics.",
          tips: [
            "Maintain movement status to accumulate speed",
            "Use Sprint for quick assaults",
            "Avoid direct combat with enemies",
            "Use speed advantages for guerrilla warfare"
          ],
          commonMistakes: [
            "Stopping movement and losing speed bonus",
            "Directly fighting enemies head-on",
            "Overusing Sprint",
            "Not utilizing speed advantages"
          ],
          advancedTechniques: [
            "Coordinate quick assaults with Vee",
            "Use speed for tactical retreats",
            "Quickly switch targets to create chaos"
          ]
        },
        playingAgainst: {
          overview: "Dyle is a high-speed threat, need to limit their movement space.",
          counterStrategies: [
            "Limit movement space",
            "Use slow effects",
            "Predict movement routes"
          ],
          whatToAvoid: [
            "Letting them move freely",
            "Ignoring speed threats",
            "Dispersed pursuit"
          ],
          teamComposition: [
            "Use slow characters",
            "High health characters to withstand assaults",
            "Predictive characters"
          ]
        }
      },
      interactions: {
        synergies: {
          description: "Dyle works best with intelligence and support characters.",
          bestPartners: [
            {
              character: "Vee",
              reason: "Vee provides intelligence, Dyle executes quickly",
              combo: "Intelligence + Quick assault"
            },
            {
              character: "Astro",
              reason: "Astro provides stamina, Dyle maintains movement",
              combo: "Stamina support + Continuous movement"
            }
          ]
        },
        counters: {
          description: "Dyle excels at assault but has low health.",
          strongAgainst: [
            {
              character: "Slow characters",
              reason: "Uses speed advantages for assault"
            }
          ],
          weakAgainst: [
            {
              character: "High health characters",
              reason: "Low health, easily counter-killed"
            }
          ]
        }
      },
      scenarios: {
        bestMaps: ["Large maps", "Open terrain"],
        bestSituations: ["Guerrilla tactics", "Quick assault"],
        challengingSituations: ["Narrow spaces", "Slow effects"],
        teamRoles: ["Quick assault", "Guerrilla tactics", "Mobile support"]
      }
    }
  },
  {
    id: "brightney",
    name: "Brightney",
    fullName: "Brightney",
    type: "main",
    rarity: "legendary",
    image: "🌟",
    description: "A character with healing and support abilities",
    stats: {
      skillCheck: 4,
      stealth: 2,
      speed: 2,
      health: 4,
      damage: 2
    },
    abilities: {
      active: {
        name: "Heal",
        description: "Restores health to nearby allies",
        cooldown: 60
      },
      passive: {
        name: "Regeneration",
        description: "Slowly regenerates health over time"
      }
    },
    requirements: {
      ichor: 4500,
      research: "100% Research on Twisted Brightney"
    },
    twistedVersion: "twisted-brightney",
    detailedGuide: {
      abilityMechanics: {
        active: {
          detailedDescription: "Heal restores health to nearby allies. *Based on character description inference, actual effects subject to in-game performance*",
          howItWorks: "After activation, all allies within range recover health.",
          bestUsage: "Use when team is injured, before entering new areas, or for emergency rescue.",
          visualEffects: "Healing light effects, range indicator displayed."
        },
        passive: {
          detailedDescription: "Slowly regenerates health over time. *Based on character description inference, actual effects subject to in-game performance*",
          howItWorks: "Automatically continuously recovers health, no activation needed.",
          strategicValue: "Provides continuous survival ability."
        }
      },
      strategies: {
        playingAs: {
          overview: "Healing and support expert, provides life security for the team.",
          tips: [
            "Prioritize protecting yourself and key teammates",
            "Use Heal in safe locations",
            "Utilize passive ability to maintain survival",
            "Maintain appropriate distance from team"
          ],
          commonMistakes: [
            "Using abilities in dangerous locations",
            "Ignoring own survival",
            "Over-exposing position",
            "Not paying attention to teammate health status"
          ],
          advancedTechniques: [
            "Coordinate double support with Astro",
            "Use passive ability for prolonged combat",
            "Provide healing at critical moments"
          ]
        },
        playingAgainst: {
          overview: "Brightney is the team's core healer, prioritize killing.",
          counterStrategies: [
            "Prioritize killing Brightney to reduce team recovery",
            "Use their low speed to chase them",
            "Disperse actions to avoid group healing"
          ],
          whatToAvoid: [
            "Letting Brightney freely heal the team",
            "Ignoring their healing ability",
            "Concentrating actions near Brightney"
          ],
          teamComposition: [
            "Use high damage characters for quick kills",
            "High speed characters to chase Brightney",
            "Disperse actions to reduce healing effects"
          ]
        }
      },
      interactions: {
        synergies: {
          description: "Brightney has good synergy with all characters.",
          bestPartners: [
            {
              character: "Astro",
              reason: "Astro provides stamina, Brightney provides health",
              combo: "Double support security"
            },
            {
              character: "Dyle",
              reason: "Dyle provides fast movement, Brightney provides healing",
              combo: "Quick support + Healing"
            }
          ]
        },
        counters: {
          description: "Brightney excels at healing but is easily eliminated.",
          strongAgainst: [
            {
              character: "Health-consuming characters",
              reason: "Provides continuous health recovery"
            }
          ],
          weakAgainst: [
            {
              character: "High damage characters",
              reason: "Low speed, easily chased"
            }
          ]
        }
      },
      scenarios: {
        bestMaps: ["Medium maps", "Safe areas"],
        bestSituations: ["Team coordination", "Need healing"],
        challengingSituations: ["Solo action", "High damage enemies"],
        teamRoles: ["Health healing", "Team support", "Survival security"]
      }
    }
  },
  {
    id: "clown",
    name: "Clown",
    fullName: "Clown",
    type: "main",
    rarity: "legendary",
    image: "🤡",
    description: "A chaotic character with unpredictable abilities",
    stats: {
      skillCheck: 1,
      stealth: 1,
      speed: 4,
      health: 3,
      damage: 5
    },
    abilities: {
      active: {
        name: "Chaos",
        description: "Randomly affects all characters on the map",
        cooldown: 120
      },
      passive: {
        name: "Unpredictable",
        description: "Abilities have random additional effects"
      }
    },
    requirements: {
      ichor: 5000,
      research: "100% Research on Twisted Clown"
    },
    twistedVersion: "twisted-clown",
    detailedGuide: {
      abilityMechanics: {
        active: {
          detailedDescription: "Chaos randomly affects all characters on the map. *Based on character description inference, actual effects subject to in-game performance*",
          howItWorks: "After activation, randomly produces various effects, affecting all characters including self.",
          bestUsage: "Use to create chaos, break deadlocks, or for high-risk high-reward situations.",
          visualEffects: "Chaos effects, random effect indicators."
        },
        passive: {
          detailedDescription: "Abilities have random additional effects. *Based on character description inference, actual effects subject to in-game performance*",
          howItWorks: "Each ability use may produce random additional effects.",
          strategicValue: "Unpredictability, suitable for high-risk tactics."
        }
      },
      strategies: {
        playingAs: {
          overview: "Chaos creator, high-risk high-reward unpredictable character.",
          tips: [
            "Accept randomness, use chaos advantages",
            "Use Chaos when coordinating with team",
            "Maintain high mobility to avoid being targeted",
            "Use random effects to create opportunities"
          ],
          commonMistakes: [
            "Over-relying on random effects",
            "Using Chaos in unfavorable situations",
            "Ignoring team coordination",
            "Not utilizing random advantages"
          ],
          advancedTechniques: [
            "Coordinate Chaos use with team",
            "Use random effects for tactical adjustments",
            "Create chaos at critical moments"
          ]
        },
        playingAgainst: {
          overview: "Clown is a chaos creator, need to maintain stable response.",
          counterStrategies: [
            "Maintain team stability and coordination",
            "Disperse actions to reduce Chaos impact",
            "Quick kills to reduce chaos opportunities"
          ],
          whatToAvoid: [
            "Concentrating actions near Clown",
            "Ignoring random effect threats",
            "Letting them freely create chaos"
          ],
          teamComposition: [
            "Use stable characters",
            "High health characters to withstand random damage",
            "Quick kill characters"
          ]
        }
      },
      interactions: {
        synergies: {
          description: "Clown has good synergy with team coordination characters.",
          bestPartners: [
            {
              character: "Vee",
              reason: "Vee provides intelligence, Clown creates chaos",
              combo: "Intelligence + Chaos tactics"
            },
            {
              character: "Dyle",
              reason: "Dyle provides fast movement, Clown creates chaos",
              combo: "Quick support + Chaos"
            }
          ]
        },
        counters: {
          description: "Clown excels at creating chaos but is easily targeted.",
          strongAgainst: [
            {
              character: "Stable characters",
              reason: "Uses randomness to break stability"
            }
          ],
          weakAgainst: [
            {
              character: "Specialized counter characters",
              reason: "Low health, easily eliminated quickly"
            }
          ]
        }
      },
      scenarios: {
        bestMaps: ["Complex maps", "Multi-path terrain"],
        bestSituations: ["Need to break deadlocks", "Team coordination"],
        challengingSituations: ["Solo action", "Need stability"],
        teamRoles: ["Chaos creation", "Tactical breakthrough", "High-risk support"]
      }
    }
  }
];
