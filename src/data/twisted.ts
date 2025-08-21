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
    
    // 详细生存策略
    survivalStrategies: [
      {
        id: 'light-mastery',
        title: '光明驱散策略',
        description: '利用光源和火焰驱散Shadow Stalker，创造安全区域',
        difficulty: 'medium',
        effectiveness: 'high',
        category: 'positioning',
        steps: [
          '收集所有可用的光源（火把、手电筒、荧光棒）',
          '在关键位置设置光源，创造安全区域',
          '保持至少两个光源同时工作',
          '定期检查光源状态，及时补充燃料',
          '在光源周围建立临时避难所'
        ],
        requirements: ['光源设备', '燃料供应', '避难所材料'],
        risks: ['光源耗尽', '燃料不足', '设备故障'],
        tips: [
          '使用多种光源类型，避免单一依赖',
          '在光源周围设置预警系统',
          '保持光源的分散分布',
          '定期轮换光源使用'
        ],
        counterStrategies: ['利用光源死角', '快速熄灭光源', '分散注意力']
      },
      {
        id: 'sound-distraction',
        title: '声波干扰策略',
        description: '利用声音干扰Shadow Stalker的感知，创造逃脱机会',
        difficulty: 'hard',
        effectiveness: 'medium',
        category: 'escape',
        steps: [
          '准备多种声音设备（收音机、哨子、铃铛）',
          '在远离自己的位置设置声音陷阱',
          '利用声音分散Shadow Stalker的注意力',
          '在声音响起时快速移动',
          '保持声音的随机性和不可预测性'
        ],
        requirements: ['声音设备', '电池或电源', '远程控制装置'],
        risks: ['声音设备故障', '电池耗尽', '声音模式被识破'],
        tips: [
          '使用不同的声音频率和模式',
          '避免重复的声音模式',
          '在关键时刻使用声音干扰',
          '保持声音设备的隐蔽性'
        ],
        counterStrategies: ['适应声音模式', '快速定位声源', '忽略干扰声音']
      },
      {
        id: 'timing-escape',
        title: '时机把握逃脱',
        description: '利用Shadow Stalker的注意力持续时间进行逃脱',
        difficulty: 'easy',
        effectiveness: 'high',
        category: 'timing',
        steps: [
          '观察Shadow Stalker的注意力持续时间（约3秒）',
          '在它注意力转移时快速移动',
          '利用8-12秒的注意力间隔进行逃脱',
          '保持移动的不可预测性',
          '避免在固定位置停留过久'
        ],
        requirements: ['时间感知', '快速移动能力', '地形熟悉度'],
        risks: ['时间判断错误', '移动噪音过大', '被重新发现'],
        tips: [
          '使用计时器或心跳来估算时间',
          '在注意力转移时立即行动',
          '保持移动的随机性',
          '利用地形掩护'
        ],
        counterStrategies: ['增强感知能力', '快速重新定位', '使用追踪技能']
      }
    ],
    
    // 音频识别系统
    audioCues: {
      walking: '几乎无声的移动，偶尔有轻微的阴影摩擦声',
      detection: '红色眼睛在黑暗中闪烁，发出低沉的呼吸声',
      special: '在阴影中移动时发出空间扭曲的声音',
      warning: '突然的寂静，周围温度急剧下降',
      timing: '注意力持续时间约3秒，每8-12秒重新搜索',
      detectionTips: [
        '注意环境温度变化',
        '观察阴影的异常移动',
        '倾听微弱的呼吸声',
        '注意突然的寂静'
      ],
      audioPatterns: [
        {
          name: '阴影移动',
          description: '在阴影中快速移动时的空间扭曲声',
          trigger: '进入阴影区域',
          response: '立即寻找光源或移动到明亮区域',
          duration: 2
        },
        {
          name: '注意力转移',
          description: '注意力持续时间结束时的轻微叹息声',
          trigger: '听到叹息声',
          response: '有3-5秒的安全移动时间',
          duration: 3
        }
      ]
    },
    
    // 危险组合警告
    deadlyCombos: [
      {
        partner: 'patrol-watcher',
        danger: 'lethal',
        reason: 'Patrol Watcher可以召唤Shadow Stalker，形成包围',
        strategy: '优先消灭Patrol Watcher，避免被召唤',
        escapeRoute: '立即寻找光源区域，利用地形掩护逃脱',
        priority: 9
      },
      {
        partner: 'void-crawler',
        danger: 'extreme',
        reason: 'Void Crawler创造黑暗区域，增强Shadow Stalker能力',
        strategy: '避免进入void区域，保持光源充足',
        escapeRoute: '远离void区域，寻找明亮的安全区域',
        priority: 10
      }
    ],
    
    // 优先级目标系统
    priorityTargets: [
      {
        target: 'patrol-watcher',
        reason: '可以召唤Shadow Stalker，增加威胁',
        whenPresent: '听到警报声或看到Patrol Watcher',
        avoidanceStrategy: '立即寻找掩护，避免被发现',
        priority: 8
      },
      {
        target: 'void-crawler',
        reason: '创造黑暗环境，增强Shadow Stalker',
        whenPresent: '看到空间扭曲或重力异常',
        avoidanceStrategy: '远离异常区域，保持光源',
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
    
    // 详细生存策略
    survivalStrategies: [
      {
        id: 'mental-defense',
        title: '心理防御策略',
        description: '建立强大的心理防线，抵抗Mind Screecher的精神攻击',
        difficulty: 'expert',
        effectiveness: 'critical',
        category: 'resource',
        steps: [
          '进行心理训练，增强意志力',
          '学习冥想和专注技巧',
          '建立心理安全词和锚点',
          '与队友建立心理联系',
          '保持积极的心理状态'
        ],
        requirements: ['心理训练', '冥想技巧', '团队支持', '心理专家指导'],
        risks: ['心理崩溃', '精神污染', '现实感知混乱'],
        tips: [
          '定期进行心理训练',
          '建立心理支持网络',
          '保持规律的作息时间',
          '避免单独面对Mind Screecher'
        ],
        counterStrategies: ['增强精神攻击', '利用心理弱点', '制造心理混乱']
      },
      {
        id: 'group-protection',
        title: '团队保护策略',
        description: '利用团队力量抵抗精神攻击，相互支持',
        difficulty: 'hard',
        effectiveness: 'high',
        category: 'teamwork',
        steps: [
          '保持团队紧密联系',
          '建立心理支持网络',
          '轮流承担精神压力',
          '使用团队心理锚点',
          '保持沟通和鼓励'
        ],
        requirements: ['团队合作', '心理支持', '沟通技巧'],
        risks: ['团队分裂', '集体心理崩溃', '相互影响'],
        tips: [
          '保持团队凝聚力',
          '建立心理安全词',
          '轮流休息和恢复',
          '保持积极氛围'
        ],
        counterStrategies: ['分裂团队', '制造内部矛盾', '集体精神攻击']
      }
    ],
    
    // 音频识别系统
    audioCues: {
      walking: '沉重的脚步声，伴随着精神污染的低语',
      detection: '精神攻击开始时的尖锐尖叫声',
      special: '现实扭曲时的空间撕裂声',
      warning: '精神攻击前的低语和幻觉',
      timing: '精神攻击持续时间约5秒，需要8-12秒恢复',
      detectionTips: [
        '注意突然的头痛',
        '观察现实是否扭曲',
        '倾听精神低语',
        '注意队友的异常行为'
      ],
      audioPatterns: [
        {
          name: '精神攻击',
          description: '尖锐的尖叫声，伴随精神污染',
          trigger: '听到尖叫声',
          response: '立即使用心理防御，寻找掩护',
          duration: 5
        },
        {
          name: '现实扭曲',
          description: '空间撕裂声，现实开始扭曲',
          trigger: '听到撕裂声',
          response: '保持冷静，使用心理锚点',
          duration: 8
        }
      ]
    },
    
    // 危险组合警告
    deadlyCombos: [
      {
        partner: 'shadow-stalker',
        danger: 'extreme',
        reason: '精神攻击造成混乱，Shadow Stalker趁机攻击',
        strategy: '优先处理Mind Screecher，避免精神混乱',
        escapeRoute: '立即寻找安全区域，恢复心理状态',
        priority: 10
      }
    ],
    
    // 优先级目标系统
    priorityTargets: [
      {
        target: 'shadow-stalker',
        reason: '在精神混乱状态下更容易被攻击',
        whenPresent: 'Mind Screecher发动精神攻击时',
        avoidanceStrategy: '立即寻找光源区域，恢复心理状态',
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
    
    // 详细生存策略
    survivalStrategies: [
      {
        id: 'environmental-advantage',
        title: '环境利用策略',
        description: '利用环境障碍和地形优势，限制Flesh Ripper的移动和攻击',
        difficulty: 'hard',
        effectiveness: 'high',
        category: 'positioning',
        steps: [
          '寻找狭窄通道和瓶颈地形',
          '设置障碍物和陷阱',
          '利用高度优势进行攻击',
          '创造多个逃生路线',
          '利用环境噪音掩盖自己的声音'
        ],
        requirements: ['地形知识', '陷阱材料', '逃生路线规划'],
        risks: ['地形限制自己的移动', '陷阱被破坏', '逃生路线被封锁'],
        tips: [
          '提前熟悉地形',
          '准备多种逃生方案',
          '利用环境噪音',
          '保持移动的灵活性'
        ],
        counterStrategies: ['破坏障碍物', '快速移动', '利用地形优势']
      },
      {
        id: 'stamina-management',
        title: '体力管理策略',
        description: '使用爆发式移动模式，避免体力耗尽',
        difficulty: 'medium',
        effectiveness: 'high',
        category: 'resource',
        steps: [
          '使用爆发式移动：跑-走-跑模式',
          '在安全区域恢复体力',
          '避免长时间连续奔跑',
          '利用地形掩护休息',
          '保持体力储备用于紧急情况'
        ],
        requirements: ['体力管理', '地形熟悉度', '时间规划'],
        risks: ['体力耗尽', '被追上', '无法逃脱'],
        tips: [
          '监控体力状态',
          '在安全区域休息',
          '使用爆发式移动',
          '保持体力储备'
        ],
        counterStrategies: ['持续追击', '切断休息区域', '增加移动速度']
      }
    ],
    
    // 音频识别系统
    audioCues: {
      walking: '沉重的脚步声，地面震动',
      detection: '发现目标时的咆哮声',
      special: '血液狂暴时的疯狂吼叫',
      warning: '接近时的低吼和脚步声',
      timing: '注意力持续时间约2秒，移动速度极快',
      detectionTips: [
        '注意地面震动',
        '倾听沉重的脚步声',
        '观察血液痕迹',
        '注意突然的咆哮声'
      ],
      audioPatterns: [
        {
          name: '追击模式',
          description: '快速移动时的连续脚步声',
          trigger: '听到快速连续的脚步声',
          response: '立即寻找掩护，准备逃脱',
          duration: 2
        },
        {
          name: '血液狂暴',
          description: '疯狂咆哮，攻击力增强',
          trigger: '听到疯狂咆哮声',
          response: '立即远离，寻找安全区域',
          duration: 10
        }
      ]
    },
    
    // 危险组合警告
    deadlyCombos: [
      {
        partner: 'patrol-watcher',
        danger: 'lethal',
        reason: 'Patrol Watcher可以召唤Flesh Ripper，形成包围',
        strategy: '优先处理Patrol Watcher，避免被召唤',
        escapeRoute: '立即寻找掩护，利用地形逃脱',
        priority: 8
      }
    ],
    
    // 优先级目标系统
    priorityTargets: [
      {
        target: 'patrol-watcher',
        reason: '可以召唤Flesh Ripper，增加威胁',
        whenPresent: '听到警报声或看到Patrol Watcher',
        avoidanceStrategy: '立即寻找掩护，避免被发现',
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
    
    // 详细生存策略
    survivalStrategies: [
      {
        id: 'stealth-avoidance',
        title: '潜行规避策略',
        description: '利用潜行技巧，避免被Patrol Watcher发现和追踪',
        difficulty: 'medium',
        effectiveness: 'high',
        category: 'escape',
        steps: [
          '观察Patrol Watcher的巡逻路线',
          '寻找巡逻间隙和盲点',
          '使用消音装备和潜行技巧',
          '避免在视野开阔区域活动',
          '利用掩护物和阴影'
        ],
        requirements: ['潜行技能', '消音装备', '地形知识', '耐心'],
        risks: ['被发现', '巡逻路线改变', '时间压力'],
        tips: [
          '保持耐心，等待合适时机',
          '使用多种潜行技巧',
          '避免不必要的移动',
          '保持对环境的敏感'
        ],
        counterStrategies: ['增强巡逻密度', '使用热成像', '设置陷阱']
      },
      {
        id: 'timing-coordination',
        title: '时机协调策略',
        description: '利用Patrol Watcher的注意力持续时间进行协调行动',
        difficulty: 'hard',
        effectiveness: 'medium',
        category: 'teamwork',
        steps: [
          '观察Patrol Watcher的注意力模式',
          '在注意力转移时进行团队行动',
          '协调多个人的移动时机',
          '利用注意力间隔完成目标',
          '保持团队同步'
        ],
        requirements: ['团队协调', '时间同步', '沟通技巧'],
        risks: ['时机判断错误', '团队不同步', '被发现'],
        tips: [
          '使用手势或信号沟通',
          '保持团队同步',
          '在关键时刻行动',
          '准备备用计划'
        ],
        counterStrategies: ['增强感知', '改变巡逻模式', '增加巡逻密度']
      }
    ],
    
    // 音频识别系统
    audioCues: {
      walking: '规律的脚步声，偶尔的观察声',
      detection: '发现目标时的警报声',
      special: '呼叫支援的通讯声',
      warning: '接近时的观察和报告声',
      timing: '注意力持续时间约4秒，巡逻间隔约8-12秒',
      detectionTips: [
        '注意规律的脚步声',
        '倾听警报声',
        '观察通讯行为',
        '注意巡逻模式'
      ],
      audioPatterns: [
        {
          name: '巡逻模式',
          description: '规律的脚步声，表示正常巡逻',
          trigger: '听到规律的脚步声',
          response: '保持隐蔽，观察巡逻路线',
          duration: 4
        },
        {
          name: '警报模式',
          description: '尖锐的警报声，表示被发现',
          trigger: '听到警报声',
          response: '立即寻找掩护，准备逃脱',
          duration: 8
        }
      ]
    },
    
    // 危险组合警告
    deadlyCombos: [
      {
        partner: 'shadow-stalker',
        danger: 'lethal',
        reason: '可以召唤Shadow Stalker，形成包围',
        strategy: '优先处理Patrol Watcher，避免被召唤',
        escapeRoute: '立即寻找光源区域，利用地形逃脱',
        priority: 8
      },
      {
        partner: 'flesh-ripper',
        danger: 'lethal',
        reason: '可以召唤Flesh Ripper，增加威胁',
        strategy: '优先处理Patrol Watcher，避免被召唤',
        escapeRoute: '立即寻找掩护，利用地形逃脱',
        priority: 7
      }
    ],
    
    // 优先级目标系统
    priorityTargets: [
      {
        target: 'shadow-stalker',
        reason: 'Patrol Watcher可以召唤，增加威胁',
        whenPresent: '听到警报声或看到Patrol Watcher',
        avoidanceStrategy: '立即寻找光源区域，避免被召唤',
        priority: 8
      },
      {
        target: 'flesh-ripper',
        reason: 'Patrol Watcher可以召唤，增加威胁',
        whenPresent: '听到警报声或看到Patrol Watcher',
        avoidanceStrategy: '立即寻找掩护，避免被召唤',
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
    
    // 详细生存策略
    survivalStrategies: [
      {
        id: 'void-avoidance',
        title: '虚空规避策略',
        description: '避免进入虚空区域，保持安全距离',
        difficulty: 'easy',
        effectiveness: 'high',
        category: 'positioning',
        steps: [
          '识别虚空区域的迹象',
          '保持安全距离',
          '避免接触虚空',
          '寻找稳定的地面',
          '准备逃生路线'
        ],
        requirements: ['虚空识别', '地形知识', '逃生路线'],
        risks: ['被虚空吸引', '地面不稳定', '逃生路线被切断'],
        tips: [
          '保持警惕',
          '避免好奇心',
          '准备多种逃生方案',
          '保持团队联系'
        ],
        counterStrategies: ['扩大虚空区域', '切断逃生路线', '增加重力异常']
      }
    ],
    
    // 音频识别系统
    audioCues: {
      walking: '空间扭曲声，重力异常',
      detection: '虚空扩张时的空间撕裂声',
      special: '重力变化时的异常声音',
      warning: '虚空接近时的空间扭曲声',
      timing: '注意力持续时间约5秒，虚空扩张缓慢',
      detectionTips: [
        '注意空间扭曲',
        '观察重力异常',
        '倾听撕裂声',
        '注意地面变化'
      ],
      audioPatterns: [
        {
          name: '虚空扩张',
          description: '空间撕裂声，虚空区域扩大',
          trigger: '听到撕裂声',
          response: '立即远离，寻找安全区域',
          duration: 5
        }
      ]
    },
    
    // 危险组合警告
    deadlyCombos: [
      {
        partner: 'shadow-stalker',
        danger: 'extreme',
        reason: '创造黑暗环境，增强Shadow Stalker能力',
        strategy: '优先处理Void Crawler，避免黑暗环境',
        escapeRoute: '立即寻找光源区域，远离虚空',
        priority: 9
      }
    ],
    
    // 优先级目标系统
    priorityTargets: [
      {
        target: 'shadow-stalker',
        reason: '创造黑暗环境，增强威胁',
        whenPresent: '看到虚空扩张或重力异常',
        avoidanceStrategy: '立即寻找光源区域，远离虚空',
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
    
    // 详细生存策略
    survivalStrategies: [
      {
        id: 'voice-verification',
        title: '声音验证策略',
        description: '验证声音的真实性，避免被模仿欺骗',
        difficulty: 'medium',
        effectiveness: 'high',
        category: 'teamwork',
        steps: [
          '建立团队暗号系统',
          '验证声音的真实性',
          '使用视觉确认',
          '保持团队联系',
          '不轻易相信声音'
        ],
        requirements: ['团队暗号', '视觉确认', '团队合作'],
        risks: ['暗号泄露', '视觉障碍', '团队分散'],
        tips: [
          '定期更换暗号',
          '使用多种验证方式',
          '保持团队紧密',
          '相信直觉'
        ],
        counterStrategies: ['学习暗号', '模仿团队声音', '制造视觉障碍']
      }
    ],
    
    // 音频识别系统
    audioCues: {
      walking: '回声脚步声，声音重复',
      detection: '模仿声音时的异常回音',
      special: '声音陷阱的重复回音',
      warning: '接近时的声音模仿',
      timing: '注意力持续时间约4秒，声音模仿需要时间',
      detectionTips: [
        '注意声音重复',
        '观察回声异常',
        '倾听声音变化',
        '注意声音来源'
      ],
      audioPatterns: [
        {
          name: '声音模仿',
          description: '模仿团队声音，制造混乱',
          trigger: '听到熟悉但异常的声音',
          response: '立即验证，使用暗号确认',
          duration: 4
        }
      ]
    },
    
    // 危险组合警告
    deadlyCombos: [
      {
        partner: 'mind-screecher',
        danger: 'dangerous',
        reason: '声音模仿配合精神攻击，增加混乱',
        strategy: '优先处理Echo Mimic，避免声音混乱',
        escapeRoute: '立即寻找安静区域，恢复听觉',
        priority: 6
      }
    ],
    
    // 优先级目标系统
    priorityTargets: [
      {
        target: 'mind-screecher',
        reason: '声音模仿配合精神攻击，增加威胁',
        whenPresent: '听到异常声音或精神攻击',
        avoidanceStrategy: '立即寻找安静区域，恢复状态',
        priority: 6
      }
    ]
  }
];

// 导出工具函数
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
