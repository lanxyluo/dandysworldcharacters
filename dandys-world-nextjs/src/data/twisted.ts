import { Twisted } from '../types/twisted';

export const twisted: Twisted[] = [
  {
    id: 'shadow-stalker',
    name: 'Shadow Stalker',
    type: 'hunter',
    dangerLevel: 'high',
    speed: 4,
    attentionSpan: 3,
    specialAbilities: ['Teleportation', 'Shadow Cloak', 'Silent Movement'],
    appearance: ['Dark, shadowy figure', 'Red glowing eyes', 'Floating movement'],
    identificationTips: ['Look for red eyes in darkness', 'Shadows move unnaturally', 'Cold air around it'],
    avoidanceStrategies: ['Stay in well-lit areas', 'Use sound to distract', 'Keep moving'],
    warnings: ['Can appear suddenly behind you', 'Extremely fast in shadows', 'Avoid dark corners'],
    image: '👻',
    description: 'A terrifying entity that hunts in darkness, using shadows to move undetected.',
    spawnLocations: ['Dark corners', 'Shadowy areas', 'Abandoned buildings'],
    behavior: 'Aggressively hunts players in dark areas, using teleportation to close distance quickly.',
    
    // TODO: update
    survivalStrategies: [
      {
        id: 'light-mastery',
        title: 'Translation pending',
        description: 'Translation pending',
        difficulty: 'medium',
        effectiveness: 'high',
        category: 'positioning',
        steps: [
          'Translation pending',
          'Translation pending',
          'Translation pending',
          'Translation pending',
          'Translation pending'
        ],
        requirements: ['Translation pending', 'Translation pending', 'Translation pending'],
        risks: ['Translation pending', 'Translation pending', 'Translation pending'],
        tips: [
          'Translation pending',
          'Translation pending',
          'Translation pending',
          'Translation pending'
        ],
        counterStrategies: ['Translation pending', 'Translation pending', 'Translation pending']
      },
      {
        id: 'sound-distraction',
        title: 'Translation pending',
        description: 'Translation pending',
        difficulty: 'hard',
        effectiveness: 'medium',
        category: 'escape',
        steps: [
          'Translation pending',
          'Translation pending',
          'Translation pending',
          'Translation pending',
          'Translation pending'
        ],
        requirements: ['Translation pending', 'Translation pending', 'Translation pending'],
        risks: ['Translation pending', 'Translation pending', 'Translation pending'],
        tips: [
          'Translation pending',
          'Translation pending',
          'Translation pending',
          'Translation pending'
        ],
        counterStrategies: ['Translation pending', 'Translation pending', 'Translation pending']
      },
      {
        id: 'timing-escape',
        title: 'Translation pending',
        description: 'Translation pending',
        difficulty: 'easy',
        effectiveness: 'high',
        category: 'timing',
        steps: [
          'Translation pending',
          'Translation pending',
          'Translation pending',
          'Translation pending',
          'Translation pending'
        ],
        requirements: ['Translation pending', 'Translation pending', 'Translation pending'],
        risks: ['Translation pending', 'Translation pending', 'Translation pending'],
        tips: [
          'Translation pending',
          'Translation pending',
          'Translation pending',
          'Translation pending'
        ],
        counterStrategies: ['Translation pending', 'Translation pending', 'Translation pending']
      }
    ],
    
    // TODO: update
    audioCues: {
      walking: 'Translation pending',
      detection: 'Translation pending',
      special: 'Translation pending',
      warning: 'Translation pending',
      timing: 'Translation pending',
      detectionTips: [
        'Translation pending',
        'Translation pending',
        'Translation pending',
        'Translation pending'
      ],
      audioPatterns: [
        {
          name: 'Translation pending',
          description: 'Translation pending',
          trigger: 'Translation pending',
          response: 'Translation pending',
          duration: 2
        },
        {
          name: 'Translation pending',
          description: 'Translation pending',
          trigger: 'Translation pending',
          response: 'Translation pending',
          duration: 3
        }
      ]
    },
    
    // TODO: update
    deadlyCombos: [
      {
        partner: 'patrol-watcher',
        danger: 'lethal',
        reason: 'Translation pending',
        strategy: 'Translation pending',
        escapeRoute: 'Translation pending',
        priority: 9
      },
      {
        partner: 'void-crawler',
        danger: 'extreme',
        reason: 'Translation pending',
        strategy: 'Translation pending',
        escapeRoute: 'Translation pending',
        priority: 10
      }
    ],
    
    // TODO: update
    priorityTargets: [
      {
        target: 'patrol-watcher',
        reason: 'Translation pending',
        whenPresent: 'Translation pending',
        avoidanceStrategy: 'Translation pending',
        priority: 8
      },
      {
        target: 'void-crawler',
        reason: 'Translation pending',
        whenPresent: 'Translation pending',
        avoidanceStrategy: 'Translation pending',
        priority: 9
      }
    ]
  },
  {
    id: 'mind-screecher',
    name: 'Mind Screecher',
    type: 'special',
    dangerLevel: 'extreme',
    speed: 2,
    attentionSpan: 5,
    specialAbilities: ['Mental Scream', 'Mind Control', 'Reality Distortion'],
    appearance: ['Humanoid with distorted features', 'Pulsing brain-like head', 'Tentacle-like appendages'],
    identificationTips: ['Hear mental whispers first', 'Reality seems to warp', 'Headaches when nearby'],
    avoidanceStrategies: ['Wear mental protection', 'Stay in groups', 'Use noise-canceling'],
    warnings: ['Can control your mind', 'Reality distortion is permanent', 'Extremely dangerous in groups'],
    image: '🧠',
    description: 'A twisted being that attacks the mind, causing permanent psychological damage.',
    spawnLocations: ['Mental institutions', 'Abandoned labs', 'Psychic hotspots'],
    behavior: 'Slow but methodical, uses mental attacks to disorient and control victims.',
    
    // TODO: update
    survivalStrategies: [
      {
        id: 'mental-defense',
        title: 'Translation pending',
        description: 'Translation pending',
        difficulty: 'expert',
        effectiveness: 'critical',
        category: 'resource',
        steps: [
          'Translation pending',
          'Translation pending',
          'Translation pending',
          'Translation pending',
          'Translation pending'
        ],
        requirements: ['Translation pending', 'Translation pending', 'Translation pending', 'Translation pending'],
        risks: ['Translation pending', 'Translation pending', 'Translation pending'],
        tips: [
          'Translation pending',
          'Translation pending',
          'Translation pending',
          'Translation pending'
        ],
        counterStrategies: ['Translation pending', 'Translation pending', 'Translation pending']
      },
      {
        id: 'group-protection',
        title: 'Translation pending',
        description: 'Translation pending',
        difficulty: 'hard',
        effectiveness: 'high',
        category: 'teamwork',
        steps: [
          'Translation pending',
          'Translation pending',
          'Translation pending',
          'Translation pending',
          'Translation pending'
        ],
        requirements: ['Translation pending', 'Translation pending', 'Translation pending'],
        risks: ['Translation pending', 'Translation pending', 'Translation pending'],
        tips: [
          'Translation pending',
          'Translation pending',
          'Translation pending',
          'Translation pending'
        ],
        counterStrategies: ['Translation pending', 'Translation pending', 'Translation pending']
      }
    ],
    
    // TODO: update
    audioCues: {
      walking: 'Translation pending',
      detection: 'Translation pending',
      special: 'Translation pending',
      warning: 'Translation pending',
      timing: 'Translation pending',
      detectionTips: [
        'Translation pending',
        'Translation pending',
        'Translation pending',
        'Translation pending'
      ],
      audioPatterns: [
        {
          name: 'Translation pending',
          description: 'Translation pending',
          trigger: 'Translation pending',
          response: 'Translation pending',
          duration: 5
        },
        {
          name: 'Translation pending',
          description: 'Translation pending',
          trigger: 'Translation pending',
          response: 'Translation pending',
          duration: 8
        }
      ]
    },
    
    // TODO: update
    deadlyCombos: [
      {
        partner: 'shadow-stalker',
        danger: 'extreme',
        reason: 'Translation pending',
        strategy: 'Translation pending',
        escapeRoute: 'Translation pending',
        priority: 10
      }
    ],
    
    // TODO: update
    priorityTargets: [
      {
        target: 'shadow-stalker',
        reason: 'Translation pending',
        whenPresent: 'Translation pending',
        avoidanceStrategy: 'Translation pending',
        priority: 9
      }
    ]
  },
  {
    id: 'flesh-ripper',
    name: 'Flesh Ripper',
    type: 'hunter',
    dangerLevel: 'high',
    speed: 5,
    attentionSpan: 2,
    specialAbilities: ['Superhuman Strength', 'Claw Attacks', 'Blood Frenzy'],
    appearance: ['Muscular humanoid', 'Sharp claws', 'Blood-stained body'],
    identificationTips: ['Hear heavy footsteps', 'See blood trails', 'Feel ground vibrations'],
    avoidanceStrategies: ['Stay quiet', 'Use obstacles', 'Run in zigzag patterns'],
    warnings: ['Extremely fast', 'Can break through walls', 'Blood attracts more'],
    image: '💀',
    description: 'A brutal hunter that tears through flesh with incredible speed and strength.',
    spawnLocations: ['Bloody areas', 'Corpse piles', 'Dark alleys'],
    behavior: 'Aggressive and fast, hunts by sound and smell, can be distracted by blood.',
    
    // TODO: update
    survivalStrategies: [
      {
        id: 'environmental-advantage',
        title: 'Translation pending',
        description: 'Translation pending',
        difficulty: 'hard',
        effectiveness: 'high',
        category: 'positioning',
        steps: [
          'Translation pending',
          'Translation pending',
          'Translation pending',
          'Translation pending',
          'Translation pending'
        ],
        requirements: ['Translation pending', 'Translation pending', 'Translation pending'],
        risks: ['Translation pending', 'Translation pending', 'Translation pending'],
        tips: [
          'Translation pending',
          'Translation pending',
          'Translation pending',
          'Translation pending'
        ],
        counterStrategies: ['Translation pending', 'Translation pending', 'Translation pending']
      },
      {
        id: 'stamina-management',
        title: 'Translation pending',
        description: 'Translation pending',
        difficulty: 'medium',
        effectiveness: 'high',
        category: 'resource',
        steps: [
          'Translation pending',
          'Translation pending',
          'Translation pending',
          'Translation pending',
          'Translation pending'
        ],
        requirements: ['Translation pending', 'Translation pending', 'Translation pending'],
        risks: ['Translation pending', 'Translation pending', 'Translation pending'],
        tips: [
          'Translation pending',
          'Translation pending',
          'Translation pending',
          'Translation pending'
        ],
        counterStrategies: ['Translation pending', 'Translation pending', 'Translation pending']
      }
    ],
    
    // TODO: update
    audioCues: {
      walking: 'Translation pending',
      detection: 'Translation pending',
      special: 'Translation pending',
      warning: 'Translation pending',
      timing: 'Translation pending',
      detectionTips: [
        'Translation pending',
        'Translation pending',
        'Translation pending',
        'Translation pending'
      ],
      audioPatterns: [
        {
          name: 'Translation pending',
          description: 'Translation pending',
          trigger: 'Translation pending',
          response: 'Translation pending',
          duration: 2
        },
        {
          name: 'Translation pending',
          description: 'Translation pending',
          trigger: 'Translation pending',
          response: 'Translation pending',
          duration: 10
        }
      ]
    },
    
    // TODO: update
    deadlyCombos: [
      {
        partner: 'patrol-watcher',
        danger: 'lethal',
        reason: 'Translation pending',
        strategy: 'Translation pending',
        escapeRoute: 'Translation pending',
        priority: 8
      }
    ],
    
    // TODO: update
    priorityTargets: [
      {
        target: 'patrol-watcher',
        reason: 'Translation pending',
        whenPresent: 'Translation pending',
        avoidanceStrategy: 'Translation pending',
        priority: 7
      }
    ]
  },
  {
    id: 'patrol-watcher',
    name: 'Patrol Watcher',
    type: 'patrol',
    dangerLevel: 'medium',
    speed: 3,
    attentionSpan: 4,
    specialAbilities: ['Enhanced Vision', 'Alert System', 'Group Coordination'],
    appearance: ['Tall, thin figure', 'Large eyes', 'Uniform-like clothing'],
    identificationTips: ['Sees you from far away', 'Makes alert sounds', 'Calls for backup'],
    avoidanceStrategies: ['Stay out of sight', 'Move slowly', 'Use cover'],
    warnings: ['Can alert others', 'Has backup nearby', 'Don\'t engage directly'],
    image: '👁️',
    description: 'A patrol unit that watches and reports, coordinating with other twisted entities.',
    spawnLocations: ['High vantage points', 'Patrol routes', 'Security posts'],
    behavior: 'Observant and communicative, will call for help rather than attack directly.',
    
    // TODO: update
    survivalStrategies: [
      {
        id: 'stealth-avoidance',
        title: 'Translation pending',
        description: 'Translation pending',
        difficulty: 'medium',
        effectiveness: 'high',
        category: 'escape',
        steps: [
          'Translation pending',
          'Translation pending',
          'Translation pending',
          'Translation pending',
          'Translation pending'
        ],
        requirements: ['Translation pending', 'Translation pending', 'Translation pending', 'Translation pending'],
        risks: ['Translation pending', 'Translation pending', 'Translation pending'],
        tips: [
          'Translation pending',
          'Translation pending',
          'Translation pending',
          'Translation pending'
        ],
        counterStrategies: ['Translation pending', 'Translation pending', 'Translation pending']
      },
      {
        id: 'timing-coordination',
        title: 'Translation pending',
        description: 'Translation pending',
        difficulty: 'hard',
        effectiveness: 'medium',
        category: 'teamwork',
        steps: [
          'Translation pending',
          'Translation pending',
          'Translation pending',
          'Translation pending',
          'Translation pending'
        ],
        requirements: ['Translation pending', 'Translation pending', 'Translation pending'],
        risks: ['Translation pending', 'Translation pending', 'Translation pending'],
        tips: [
          'Translation pending',
          'Translation pending',
          'Translation pending',
          'Translation pending'
        ],
        counterStrategies: ['Translation pending', 'Translation pending', 'Translation pending']
      }
    ],
    
    // TODO: update
    audioCues: {
      walking: 'Translation pending',
      detection: 'Translation pending',
      special: 'Translation pending',
      warning: 'Translation pending',
      timing: 'Translation pending',
      detectionTips: [
        'Translation pending',
        'Translation pending',
        'Translation pending',
        'Translation pending'
      ],
      audioPatterns: [
        {
          name: 'Translation pending',
          description: 'Translation pending',
          trigger: 'Translation pending',
          response: 'Translation pending',
          duration: 4
        },
        {
          name: 'Translation pending',
          description: 'Translation pending',
          trigger: 'Translation pending',
          response: 'Translation pending',
          duration: 8
        }
      ]
    },
    
    // TODO: update
    deadlyCombos: [
      {
        partner: 'shadow-stalker',
        danger: 'lethal',
        reason: 'Translation pending',
        strategy: 'Translation pending',
        escapeRoute: 'Translation pending',
        priority: 8
      },
      {
        partner: 'flesh-ripper',
        danger: 'lethal',
        reason: 'Translation pending',
        strategy: 'Translation pending',
        escapeRoute: 'Translation pending',
        priority: 7
      }
    ],
    
    // TODO: update
    priorityTargets: [
      {
        target: 'shadow-stalker',
        reason: 'Translation pending',
        whenPresent: 'Translation pending',
        avoidanceStrategy: 'Translation pending',
        priority: 8
      },
      {
        target: 'flesh-ripper',
        reason: 'Translation pending',
        whenPresent: 'Translation pending',
        avoidanceStrategy: 'Translation pending',
        priority: 7
      }
    ]
  },
  {
    id: 'void-crawler',
    name: 'Void Crawler',
    type: 'special',
    dangerLevel: 'high',
    speed: 1,
    attentionSpan: 5,
    specialAbilities: ['Void Creation', 'Dimensional Rifts', 'Gravity Manipulation'],
    appearance: ['Black, void-like body', 'Floating in air', 'Space distortion around it'],
    identificationTips: ['Space seems to bend', 'Gravity feels wrong', 'Black void spots'],
    avoidanceStrategies: ['Stay away from rifts', 'Don\'t touch void areas', 'Keep stable footing'],
    warnings: ['Can trap you in void', 'Gravity changes are dangerous', 'Rifts are permanent'],
    image: '🌀',
    description: 'A being that creates and manipulates void spaces, trapping victims in dimensional rifts.',
    spawnLocations: ['Void rifts', 'Dimensional weak points', 'Abandoned portals'],
    behavior: 'Creates void areas to trap victims, slow but extremely dangerous in confined spaces.',
    
    // TODO: update
    survivalStrategies: [
      {
        id: 'void-avoidance',
        title: 'Translation pending',
        description: 'Translation pending',
        difficulty: 'easy',
        effectiveness: 'high',
        category: 'positioning',
        steps: [
          'Translation pending',
          'Translation pending',
          'Translation pending',
          'Translation pending',
          'Translation pending'
        ],
        requirements: ['Translation pending', 'Translation pending', 'Translation pending'],
        risks: ['Translation pending', 'Translation pending', 'Translation pending'],
        tips: [
          'Translation pending',
          'Translation pending',
          'Translation pending',
          'Translation pending'
        ],
        counterStrategies: ['Translation pending', 'Translation pending', 'Translation pending']
      }
    ],
    
    // TODO: update
    audioCues: {
      walking: 'Translation pending',
      detection: 'Translation pending',
      special: 'Translation pending',
      warning: 'Translation pending',
      timing: 'Translation pending',
      detectionTips: [
        'Translation pending',
        'Translation pending',
        'Translation pending',
        'Translation pending'
      ],
      audioPatterns: [
        {
          name: 'Translation pending',
          description: 'Translation pending',
          trigger: 'Translation pending',
          response: 'Translation pending',
          duration: 5
        }
      ]
    },
    
    // TODO: update
    deadlyCombos: [
      {
        partner: 'shadow-stalker',
        danger: 'extreme',
        reason: 'Translation pending',
        strategy: 'Translation pending',
        escapeRoute: 'Translation pending',
        priority: 9
      }
    ],
    
    // TODO: update
    priorityTargets: [
      {
        target: 'shadow-stalker',
        reason: 'Translation pending',
        whenPresent: 'Translation pending',
        avoidanceStrategy: 'Translation pending',
        priority: 9
      }
    ]
  },
  {
    id: 'echo-mimic',
    name: 'Echo Mimic',
    type: 'special',
    dangerLevel: 'medium',
    speed: 2,
    attentionSpan: 4,
    specialAbilities: ['Sound Mimicry', 'Voice Replication', 'Echo Location'],
    appearance: ['Shapeshifting form', 'Sound waves visible', 'Echoing movement'],
    identificationTips: ['Hear familiar voices', 'Sounds echo strangely', 'Voice seems off'],
    avoidanceStrategies: ['Don\'t respond to calls', 'Use visual identification', 'Trust your instincts'],
    warnings: ['Can mimic friends', 'Don\'t follow voices', 'Echoes are traps'],
    image: '🎭',
    description: 'A shapeshifting entity that mimics sounds and voices to lure victims.',
    spawnLocations: ['Echo chambers', 'Sound-rich areas', 'Communication hubs'],
    behavior: 'Uses sound mimicry to confuse and trap victims, prefers ambush tactics.',
    
    // TODO: update
    survivalStrategies: [
      {
        id: 'voice-verification',
        title: 'Translation pending',
        description: 'Translation pending',
        difficulty: 'medium',
        effectiveness: 'high',
        category: 'teamwork',
        steps: [
          'Translation pending',
          'Translation pending',
          'Translation pending',
          'Translation pending',
          'Translation pending'
        ],
        requirements: ['Translation pending', 'Translation pending', 'Translation pending'],
        risks: ['Translation pending', 'Translation pending', 'Translation pending'],
        tips: [
          'Translation pending',
          'Translation pending',
          'Translation pending',
          'Translation pending'
        ],
        counterStrategies: ['Translation pending', 'Translation pending', 'Translation pending']
      }
    ],
    
    // TODO: update
    audioCues: {
      walking: 'Translation pending',
      detection: 'Translation pending',
      special: 'Translation pending',
      warning: 'Translation pending',
      timing: 'Translation pending',
      detectionTips: [
        'Translation pending',
        'Translation pending',
        'Translation pending',
        'Translation pending'
      ],
      audioPatterns: [
        {
          name: 'Translation pending',
          description: 'Translation pending',
          trigger: 'Translation pending',
          response: 'Translation pending',
          duration: 4
        }
      ]
    },
    
    // TODO: update
    deadlyCombos: [
      {
        partner: 'mind-screecher',
        danger: 'dangerous',
        reason: 'Translation pending',
        strategy: 'Translation pending',
        escapeRoute: 'Translation pending',
        priority: 6
      }
    ],
    
    // TODO: update
    priorityTargets: [
      {
        target: 'mind-screecher',
        reason: 'Translation pending',
        whenPresent: 'Translation pending',
        avoidanceStrategy: 'Translation pending',
        priority: 6
      }
    ]
  }
];

// TODO: update
export const getTwistedById = (id: string) => {
  return twisted.find(entity => entity.id === id);
};

export const getTwistedByType = (type: Twisted['type']) => {
  return twisted.filter(entity => entity.type === type);
};

export const getTwistedByDangerLevel = (dangerLevel: Twisted['dangerLevel']) => {
  return twisted.filter(entity => entity.dangerLevel === dangerLevel);
};

export const getTwistedStrategies = (twistedId: string) => {
  const entity = getTwistedById(twistedId);
  return entity?.survivalStrategies || [];
};

export const getTwistedAudioCues = (twistedId: string) => {
  const entity = getTwistedById(twistedId);
  return entity?.audioCues;
};

export const getTwistedDeadlyCombos = (twistedId: string) => {
  const entity = getTwistedById(twistedId);
  return entity?.deadlyCombos || [];
};

export const getTwistedPriorityTargets = (twistedId: string) => {
  const entity = getTwistedById(twistedId);
  return entity?.priorityTargets || [];
};