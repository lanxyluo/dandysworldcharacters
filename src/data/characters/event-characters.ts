import { Character } from '../../types/character';

export const eventCharacters: Character[] = [
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
    },
    detailedGuide: {
      abilityMechanics: {
        active: {
          detailedDescription: "Ignite creates flame areas, damages Twisteds but also attracts them. *Based on character description inference, actual effects subject to in-game performance*",
          howItWorks: "After activation, creates persistent flame areas that damage enemies but attract attention.",
          bestUsage: "Use for area control, attracting enemy attention, or team coordination.",
          visualEffects: "Flame effects, range indicator displayed, attraction effect prompts."
        },
        passive: {
          detailedDescription: "Provides light and warmth, slowly recovers team stamina. *Based on character description inference, actual effects subject to in-game performance*",
          howItWorks: "Automatically provides lighting and warmth effects, nearby teammates slowly recover stamina.",
          strategicValue: "Continuous support ability, no active activation required."
        }
      },
      strategies: {
        playingAs: {
          overview: "Area control and support expert, excels at team coordination and area management.",
          tips: [
            "Use Ignite at strategic locations",
            "Coordinate flame areas with team",
            "Utilize passive ability for continuous support",
            "Note that flame areas attract enemies"
          ],
          commonMistakes: [
            "Using flames in unsuitable locations",
            "Ignoring that flames attract enemies",
            "Not coordinating with team tactics",
            "Overusing flame areas"
          ],
          advancedTechniques: [
            "Coordinate with team to create traps",
            "Use flame areas to control enemy movement",
            "Provide lighting support at critical moments"
          ]
        },
        playingAgainst: {
          overview: "Coal is an area control expert, need to avoid being limited by flame areas.",
          counterStrategies: [
            "Avoid entering flame areas",
            "Disperse actions to reduce control",
            "Quickly pass through flame areas"
          ],
          whatToAvoid: [
            "Staying in flame areas",
            "Concentrating actions and being controlled by flames",
            "Ignoring flame area threats"
          ],
          teamComposition: [
            "Use high speed characters to pass quickly",
            "High health characters to withstand flame damage",
            "Disperse actions to reduce control effects"
          ]
        }
      },
      interactions: {
        synergies: {
          description: "Coal has good coordination with team coordination characters.",
          bestPartners: [
            {
              character: "Vee",
              reason: "Vee provides intelligence, Coal controls areas",
              combo: "Intelligence + Area control"
            },
            {
              character: "Dyle",
              reason: "Dyle provides fast movement, Coal controls areas",
              combo: "Quick support + Area control"
            }
          ]
        },
        counters: {
          description: "Coal excels at area control but is easily targeted.",
          strongAgainst: [
            {
              character: "Slow characters",
              reason: "Uses flame areas to limit movement"
            }
          ],
          weakAgainst: [
            {
              character: "High speed characters",
              reason: "Easily pass through flame areas quickly"
            }
          ]
        }
      },
      scenarios: {
        bestMaps: ["Medium maps", "Narrow passages"],
        bestSituations: ["Team coordination", "Need area control"],
        challengingSituations: ["Open terrain", "High speed enemies"],
        teamRoles: ["Area control", "Team support", "Tactical coordination"]
      }
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
    },
    detailedGuide: {
      abilityMechanics: {
        active: {
          detailedDescription: "Warm Cup heals and provides warmth buff to all nearby Toons. *Based on character description inference, actual effects subject to in-game performance*",
          howItWorks: "After activation, all nearby Toons receive healing and warmth buffs that provide additional benefits.",
          bestUsage: "Use when team is injured or cold, before entering dangerous areas, or for emergency support.",
          visualEffects: "Warmth effects, healing light, buff indicators displayed."
        },
        passive: {
          detailedDescription: "Nearby Toons recover stamina faster and resist cold effects. *Based on character description inference, actual effects subject to in-game performance*",
          howItWorks: "Automatically provides stamina recovery boost and cold resistance to nearby teammates.",
          strategicValue: "Continuous support ability, especially effective in cold environments."
        }
      },
      strategies: {
        playingAs: {
          overview: "Comfort and healing specialist, excels at team support and cold resistance.",
          tips: [
            "Stay near teammates for passive benefits",
            "Use Warm Cup in strategic locations",
            "Coordinate with team for maximum effectiveness",
            "Prioritize support over combat"
          ],
          commonMistakes: [
            "Using abilities away from team",
            "Ignoring passive support benefits",
            "Over-exposing position",
            "Not coordinating with team"
          ],
          advancedTechniques: [
            "Coordinate with Astro for double stamina support",
            "Use warmth buffs for cold area exploration",
            "Provide comfort support at critical moments"
          ]
        },
        playingAgainst: {
          overview: "Cocoa is a support specialist, need to limit their team benefits.",
          counterStrategies: [
            "Separate Cocoa from team",
            "Use cold effects to counter warmth",
            "Prioritize eliminating Cocoa"
          ],
          whatToAvoid: [
            "Letting Cocoa freely support team",
            "Ignoring their comfort abilities",
            "Concentrating actions near Cocoa"
          ],
          teamComposition: [
            "Use cold-based characters",
            "High damage characters for quick kills",
            "Disperse actions to reduce support effects"
          ]
        }
      },
      interactions: {
        synergies: {
          description: "Cocoa works best with support and stamina characters.",
          bestPartners: [
            {
              character: "Astro",
              reason: "Astro provides stamina, Cocoa provides warmth",
              combo: "Double stamina support"
            },
            {
              character: "Cosmo",
              reason: "Cosmo provides healing, Cocoa provides comfort",
              combo: "Healing + Comfort support"
            }
          ]
        },
        counters: {
          description: "Cocoa excels at support but is easily eliminated.",
          strongAgainst: [
            {
              character: "Cold-based characters",
              reason: "Provides warmth and cold resistance"
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
        bestMaps: ["Cold maps", "Team coordination areas"],
        bestSituations: ["Need comfort", "Cold resistance"],
        challengingSituations: ["Solo action", "High damage enemies"],
        teamRoles: ["Comfort support", "Cold resistance", "Team healing"]
      }
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
    },
    detailedGuide: {
      abilityMechanics: {
        active: {
          detailedDescription: "Hatch breaks open to reveal a random powerful temporary ability. *Based on character description inference, actual effects subject to in-game performance*",
          howItWorks: "After activation, randomly gains a powerful temporary ability that can change the course of battle.",
          bestUsage: "Use in desperate situations, when team needs support, or for high-risk high-reward tactics.",
          visualEffects: "Egg breaking effects, random ability indicators, temporary power display."
        },
        passive: {
          detailedDescription: "Takes extra damage but has chance to avoid attacks entirely. *Based on character description inference, actual effects subject to in-game performance*",
          howItWorks: "Automatically has increased vulnerability but occasionally completely avoids incoming damage.",
          strategicValue: "High-risk high-reward passive, unpredictable survival mechanism."
        }
      },
      strategies: {
        playingAs: {
          overview: "High-risk high-reward character, excels at unpredictable tactics and surprise abilities.",
          tips: [
            "Accept the random nature of abilities",
            "Use Hatch in critical moments",
            "Rely on passive dodge for survival",
            "Coordinate with team for maximum impact"
          ],
          commonMistakes: [
            "Over-relying on random abilities",
            "Using Hatch in unfavorable situations",
            "Ignoring team coordination",
            "Not utilizing dodge advantages"
          ],
          advancedTechniques: [
            "Coordinate Hatch use with team",
            "Use random abilities for tactical adjustments",
            "Create surprise moments at critical times"
          ]
        },
        playingAgainst: {
          overview: "Eggson is unpredictable, need to maintain stable response.",
          counterStrategies: [
            "Maintain team stability and coordination",
            "Use consistent damage to overcome dodge",
            "Quick kills to reduce random ability opportunities"
          ],
          whatToAvoid: [
            "Being surprised by random abilities",
            "Ignoring dodge mechanics",
            "Letting them freely use Hatch"
          ],
          teamComposition: [
            "Use stable characters",
            "High damage characters to overcome dodge",
            "Quick kill characters"
          ]
        }
      },
      interactions: {
        synergies: {
          description: "Eggson works best with team coordination characters.",
          bestPartners: [
            {
              character: "Clown",
              reason: "Clown creates chaos, Eggson provides surprise",
              combo: "Chaos + Surprise tactics"
            },
            {
              character: "Vee",
              reason: "Vee provides intelligence, Eggson provides execution",
              combo: "Intelligence + Random execution"
            }
          ]
        },
        counters: {
          description: "Eggson excels at unpredictability but is fragile.",
          strongAgainst: [
            {
              character: "Predictable characters",
              reason: "Uses randomness to break predictability"
            }
          ],
          weakAgainst: [
            {
              character: "High damage characters",
              reason: "Fragile shell, easily broken despite dodge"
            }
          ]
        }
      },
      scenarios: {
        bestMaps: ["Complex maps", "Multi-path terrain"],
        bestSituations: ["Need surprise", "High-risk tactics"],
        challengingSituations: ["Solo action", "Need stability"],
        teamRoles: ["Surprise tactics", "Random support", "High-risk execution"]
      }
    }
  },
  {
    id: "rudie",
    name: "Rudie",
    fullName: "Rudie",
    type: "event",
    rarity: "common",
    image: "🎅",
    description: "A Santa character with gift-giving abilities from Christmas events",
    stats: {
      skillCheck: 4,
      stealth: 1,
      speed: 2,
      health: 4,
      damage: 0
    },
    abilities: {
      active: {
        name: "Gift Box",
        description: "Creates a gift box that contains random useful items",
        cooldown: 90
      },
      passive: {
        name: "Christmas Spirit",
        description: "Nearby Toons receive small buffs and have increased luck"
      }
    },
    requirements: {
      ornaments: 2000,
      ichor: 800,
      research: "100% Research on Twisted Rudie",
      note: "Christmas Event Only"
    },
    detailedGuide: {
      abilityMechanics: {
        active: {
          detailedDescription: "Gift Box creates a gift box that contains random useful items. *Based on character description inference, actual effects subject to in-game performance*",
          howItWorks: "After activation, creates a gift box that provides random useful items to the team.",
          bestUsage: "Use when team needs resources, before entering dangerous areas, or for emergency support.",
          visualEffects: "Gift box effects, item indicators, Christmas-themed animations."
        },
        passive: {
          detailedDescription: "Nearby Toons receive small buffs and have increased luck. *Based on character description inference, actual effects subject to in-game performance*",
          howItWorks: "Automatically provides small buffs and luck increase to nearby teammates.",
          strategicValue: "Continuous support ability, improves team overall performance."
        }
      },
      strategies: {
        playingAs: {
          overview: "Gift-giving specialist, excels at team support and resource provision.",
          tips: [
            "Stay near teammates for passive benefits",
            "Use Gift Box in strategic locations",
            "Coordinate with team for maximum effectiveness",
            "Prioritize support over combat"
          ],
          commonMistakes: [
            "Using abilities away from team",
            "Ignoring passive support benefits",
            "Over-exposing position",
            "Not coordinating with team"
          ],
          advancedTechniques: [
            "Coordinate with Cosmo for double support",
            "Use luck buffs for resource gathering",
            "Provide gift support at critical moments"
          ]
        },
        playingAgainst: {
          overview: "Rudie is a support specialist, need to limit their team benefits.",
          counterStrategies: [
            "Separate Rudie from team",
            "Use resource consumption to counter gifts",
            "Prioritize eliminating Rudie"
          ],
          whatToAvoid: [
            "Letting Rudie freely support team",
            "Ignoring their gift abilities",
            "Concentrating actions near Rudie"
          ],
          teamComposition: [
            "Use resource-consuming characters",
            "High damage characters for quick kills",
            "Disperse actions to reduce support effects"
          ]
        }
      },
      interactions: {
        synergies: {
          description: "Rudie works best with support and resource characters.",
          bestPartners: [
            {
              character: "Cosmo",
              reason: "Cosmo provides healing, Rudie provides resources",
              combo: "Healing + Resource support"
            },
            {
              character: "Tisha",
              reason: "Tisha provides cleanup, Rudie provides gifts",
              combo: "Status management + Resource support"
            }
          ]
        },
        counters: {
          description: "Rudie excels at support but is easily eliminated.",
          strongAgainst: [
            {
              character: "Resource-consuming characters",
              reason: "Provides gift resources and luck buffs"
            }
          ],
          weakAgainst: [
            {
              character: "High damage characters",
              reason: "Low speed, easily chased and eliminated"
            }
          ]
        }
      },
      scenarios: {
        bestMaps: ["Resource-scarce maps", "Team coordination areas"],
        bestSituations: ["Need resources", "Team support"],
        challengingSituations: ["Solo action", "High damage enemies"],
        teamRoles: ["Resource support", "Luck enhancement", "Team coordination"]
      }
    }
  }
];
