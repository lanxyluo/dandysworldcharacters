import { Twisted } from '../types/twisted';

// Twisted策略数据类型定义
export interface TwistedStrategy {
  id: string;
  twistedId: string; // 关联的Twisted实体ID
  name: string;
  type: 'survival' | 'combat' | 'stealth' | 'teamwork' | 'escape';
  difficulty: 'easy' | 'medium' | 'hard' | 'expert';
  description: string;
  steps: string[];
  requirements: string[];
  risks: string[];
  rewards: string[];
  tips: string[];
  counterStrategies: string[]; // 反制策略
}

export interface TeamComposition {
  id: string;
  name: string;
  description: string;
  roles: TeamRole[];
  strategies: string[];
  advantages: string[];
  disadvantages: string[];
  recommendedCharacters: string[];
}

export interface TeamRole {
  role: string;
  responsibilities: string[];
  requiredSkills: string[];
  recommendedCharacters: string[];
  equipment: string[];
}

export interface SurvivalKit {
  id: string;
  name: string;
  type: 'basic' | 'advanced' | 'expert';
  items: SurvivalItem[];
  description: string;
  craftingRequirements: string[];
  weight: number; // 重量影响移动速度
  durability: number; // 耐久度
}

export interface SurvivalItem {
  name: string;
  type: 'tool' | 'weapon' | 'consumable' | 'armor' | 'special';
  effect: string;
  quantity: number;
  weight: number;
  craftingMaterials: string[];
}

export interface TwistedEncounter {
  id: string;
  name: string;
  twistedIds: string[]; // 可能出现的Twisted实体
  location: string;
  difficulty: 'low' | 'medium' | 'high' | 'extreme';
  timeOfDay: 'day' | 'night' | 'any';
  weatherConditions: string[];
  objectives: string[];
  rewards: string[];
  risks: string[];
  recommendedLevel: number;
  teamSize: {
    min: number;
    max: number;
    optimal: number;
  };
}

// Twisted生存策略数据
export const twistedStrategies: TwistedStrategy[] = [
  // Shadow Stalker策略
  {
    id: 'shadow-stalker-light-strategy',
    twistedId: 'shadow-stalker',
    name: '光明驱散策略',
    type: 'survival',
    difficulty: 'medium',
    description: '利用光源和火焰驱散Shadow Stalker，创造安全区域。',
    steps: [
      '收集所有可用的光源（火把、手电筒、荧光棒）',
      '在关键位置设置光源，创造安全区域',
      '保持至少两个光源同时工作',
      '定期检查光源状态，及时补充燃料',
      '在光源周围建立临时避难所'
    ],
    requirements: ['光源设备', '燃料供应', '避难所材料'],
    risks: ['光源耗尽', '燃料不足', '设备故障'],
    rewards: ['安全的活动空间', '稳定的避难所', '心理安全感'],
    tips: [
      '使用多种光源类型，避免单一依赖',
      '在光源周围设置预警系统',
      '保持光源的分散分布',
      '定期轮换光源使用'
    ],
    counterStrategies: ['利用光源死角', '快速熄灭光源', '分散注意力']
  },
  {
    id: 'shadow-stalker-sound-strategy',
    twistedId: 'shadow-stalker',
    name: '声波干扰策略',
    type: 'stealth',
    difficulty: 'hard',
    description: '利用声音干扰Shadow Stalker的感知，创造逃脱机会。',
    steps: [
      '准备多种声音设备（收音机、哨子、铃铛）',
      '在远离自己的位置设置声音陷阱',
      '利用声音分散Shadow Stalker的注意力',
      '在声音响起时快速移动',
      '保持声音的随机性和不可预测性'
    ],
    requirements: ['声音设备', '电池或电源', '远程控制装置'],
    risks: ['声音设备故障', '电池耗尽', '声音模式被识破'],
    rewards: ['有效的逃脱机会', '战术优势', '时间缓冲'],
    tips: [
      '使用不同的声音频率和模式',
      '避免重复的声音模式',
      '在关键时刻使用声音干扰',
      '保持声音设备的隐蔽性'
    ],
    counterStrategies: ['适应声音模式', '快速定位声源', '忽略干扰声音']
  },

  // Mind Screecher策略
  {
    id: 'mind-screecher-mental-defense',
    twistedId: 'mind-screecher',
    name: '心理防御策略',
    type: 'survival',
    difficulty: 'expert',
    description: '建立强大的心理防线，抵抗Mind Screecher的精神攻击。',
    steps: [
      '进行心理训练，增强意志力',
      '学习冥想和专注技巧',
      '建立心理安全词和锚点',
      '与队友建立心理联系',
      '保持积极的心理状态'
    ],
    requirements: ['心理训练', '冥想技巧', '团队支持', '心理专家指导'],
    risks: ['心理崩溃', '精神污染', '现实感知混乱'],
    rewards: ['强大的心理抵抗力', '团队凝聚力', '个人成长'],
    tips: [
      '定期进行心理训练',
      '建立心理支持网络',
      '保持规律的作息时间',
      '避免单独面对Mind Screecher'
    ],
    counterStrategies: ['增强精神攻击', '利用心理弱点', '制造心理混乱']
  },

  // Flesh Ripper策略
  {
    id: 'flesh-ripper-environmental-strategy',
    twistedId: 'flesh-ripper',
    name: '环境利用策略',
    type: 'combat',
    difficulty: 'hard',
    description: '利用环境障碍和地形优势，限制Flesh Ripper的移动和攻击。',
    steps: [
      '寻找狭窄通道和瓶颈地形',
      '设置障碍物和陷阱',
      '利用高度优势进行攻击',
      '创造多个逃生路线',
      '利用环境噪音掩盖自己的声音'
    ],
    requirements: ['地形知识', '陷阱材料', '逃生路线规划'],
    risks: ['地形限制自己的移动', '陷阱被破坏', '逃生路线被封锁'],
    rewards: ['战术优势', '攻击机会', '安全撤退'],
    tips: [
      '提前熟悉地形',
      '准备多种逃生方案',
      '利用环境噪音',
      '保持移动的灵活性'
    ],
    counterStrategies: ['破坏障碍物', '快速移动', '利用地形优势']
  },

  // Patrol Watcher策略
  {
    id: 'patrol-watcher-stealth-strategy',
    twistedId: 'patrol-watcher',
    name: '潜行规避策略',
    type: 'stealth',
    difficulty: 'medium',
    description: '利用潜行技巧，避免被Patrol Watcher发现和追踪。',
    steps: [
      '观察Patrol Watcher的巡逻路线',
      '寻找巡逻间隙和盲点',
      '使用消音装备和潜行技巧',
      '避免在视野开阔区域活动',
      '利用掩护物和阴影'
    ],
    requirements: ['潜行技能', '消音装备', '地形知识', '耐心'],
    risks: ['被发现', '巡逻路线改变', '时间压力'],
    rewards: ['避免战斗', '节省资源', '保持隐蔽'],
    tips: [
      '保持耐心，等待合适时机',
      '使用多种潜行技巧',
      '避免不必要的移动',
      '保持对环境的敏感'
    ],
    counterStrategies: ['增强巡逻密度', '使用热成像', '设置陷阱']
  }
];

// 团队配合策略
export const teamCompositions: TeamComposition[] = [
  {
    id: 'balanced-team',
    name: '平衡团队',
    description: '包含攻击、防御、支援的平衡团队配置，适合各种情况。',
    roles: [
      {
        role: '前锋',
        responsibilities: ['吸引敌人注意', '进行主要攻击', '保护队友'],
        requiredSkills: ['高攻击力', '良好防御', '团队意识'],
        recommendedCharacters: ['warrior', 'berserker', 'paladin'],
        equipment: ['重型武器', '护甲', '治疗药水']
      },
      {
        role: '支援',
        responsibilities: ['治疗队友', '提供增益', '远程攻击'],
        requiredSkills: ['治疗能力', '增益魔法', '远程攻击'],
        recommendedCharacters: ['healer', 'mage', 'support'],
        equipment: ['法杖', '治疗道具', '增益卷轴']
      },
      {
        role: '侦察',
        responsibilities: ['探索环境', '收集信息', '设置陷阱'],
        requiredSkills: ['潜行', '感知', '陷阱设置'],
        recommendedCharacters: ['assassin', 'rogue', 'scout'],
        equipment: ['轻武器', '潜行装备', '陷阱材料']
      }
    ],
    strategies: [
      '前锋吸引敌人，支援提供治疗，侦察收集信息',
      '利用地形优势，设置包围圈',
      '保持团队阵型，避免分散'
    ],
    advantages: ['适应性强', '平衡性好', '团队协作'],
    disadvantages: ['缺乏专精', '需要协调', '资源分散'],
    recommendedCharacters: ['warrior', 'healer', 'assassin']
  },
  {
    id: 'offensive-team',
    name: '攻击团队',
    description: '专注于快速击杀敌人的高攻击团队，适合速战速决。',
    roles: [
      {
        role: '主攻手',
        responsibilities: ['造成主要伤害', '快速击杀敌人', '突破防线'],
        requiredSkills: ['极高攻击力', '暴击能力', '快速移动'],
        recommendedCharacters: ['berserker', 'assassin', 'warrior'],
        equipment: ['高伤害武器', '暴击装备', '速度道具']
      },
      {
        role: '辅助攻击',
        responsibilities: ['配合主攻手', '控制敌人', '提供增益'],
        requiredSkills: ['控制技能', '增益魔法', '团队配合'],
        recommendedCharacters: ['mage', 'paladin', 'rogue'],
        equipment: ['控制法杖', '增益道具', '团队装备']
      }
    ],
    strategies: [
      '快速突袭，集中火力',
      '利用控制技能限制敌人',
      '保持高机动性'
    ],
    advantages: ['高伤害输出', '快速战斗', '战术灵活'],
    disadvantages: ['防御薄弱', '资源消耗大', '需要精确配合'],
    recommendedCharacters: ['berserker', 'mage', 'assassin']
  }
];

// 生存装备包
export const survivalKits: SurvivalKit[] = [
  {
    id: 'basic-survival-kit',
    name: '基础生存包',
    type: 'basic',
    items: [
      {
        name: '急救包',
        type: 'consumable',
        effect: '恢复生命值，治疗轻伤',
        quantity: 3,
        weight: 1,
        craftingMaterials: ['绷带', '药草', '酒精']
      },
      {
        name: '手电筒',
        type: 'tool',
        effect: '提供光源，驱散黑暗',
        quantity: 1,
        weight: 0.5,
        craftingMaterials: ['电池', 'LED灯', '外壳']
      },
      {
        name: '小刀',
        type: 'tool',
        effect: '切割、自卫、制作工具',
        quantity: 1,
        weight: 0.3,
        craftingMaterials: ['钢材', '手柄材料']
      }
    ],
    description: '包含基本生存必需品的装备包，适合新手使用。',
    craftingRequirements: ['基础制作技能', '常见材料'],
    weight: 2.5,
    durability: 80
  },
  {
    id: 'advanced-survival-kit',
    name: '高级生存包',
    type: 'advanced',
    items: [
      {
        name: '高级医疗包',
        type: 'consumable',
        effect: '快速恢复生命值，治疗重伤',
        quantity: 5,
        weight: 2,
        craftingMaterials: ['高级绷带', '稀有药草', '医疗酒精']
      },
      {
        name: '战术手电筒',
        type: 'tool',
        effect: '强光源，可调节亮度，防水',
        quantity: 1,
        weight: 0.8,
        craftingMaterials: ['锂电池', '高亮LED', '防水外壳']
      },
      {
        name: '多功能工具',
        type: 'tool',
        effect: '多种工具功能，节省空间',
        quantity: 1,
        weight: 1.2,
        craftingMaterials: ['高级钢材', '精密零件', '手柄材料']
      },
      {
        name: '信号弹',
        type: 'consumable',
        effect: '发出强光信号，驱散黑暗生物',
        quantity: 3,
        weight: 0.5,
        craftingMaterials: ['火药', '镁粉', '引信']
      }
    ],
    description: '包含高级生存装备的专业装备包，适合有经验的生存者。',
    craftingRequirements: ['高级制作技能', '稀有材料', '制作工具'],
    weight: 5.0,
    durability: 95
  }
];

// Twisted遭遇战数据
export const twistedEncounters: TwistedEncounter[] = [
  {
    id: 'dark-forest-encounter',
    name: '黑暗森林遭遇战',
    twistedIds: ['shadow-stalker', 'patrol-watcher'],
    location: '黑暗森林深处',
    difficulty: 'high',
    timeOfDay: 'night',
    weatherConditions: ['浓雾', '无月光', '潮湿'],
    objectives: [
      '穿越黑暗森林',
      '避免被Twisted发现',
      '收集森林资源',
      '到达安全区域'
    ],
    rewards: [
      '稀有材料',
      '经验值',
      '解锁新区域',
      '获得特殊装备'
    ],
    risks: [
      '被多个Twisted围攻',
      '迷失方向',
      '资源耗尽',
      '心理压力'
    ],
    recommendedLevel: 15,
    teamSize: {
      min: 2,
      max: 4,
      optimal: 3
    }
  },
  {
    id: 'abandoned-hospital-encounter',
    twistedIds: ['mind-screecher', 'flesh-ripper'],
    name: '废弃医院遭遇战',
    location: '废弃精神病院',
    difficulty: 'extreme',
    timeOfDay: 'any',
    weatherConditions: ['阴森', '回声', '压抑'],
    objectives: [
      '探索医院内部',
      '收集医疗物资',
      '避免精神污染',
      '逃离医院'
    ],
    rewards: [
      '高级医疗装备',
      '稀有材料',
      '解锁剧情',
      '获得特殊能力'
    ],
    risks: [
      '精神崩溃',
      '被多个Twisted围攻',
      '环境危险',
      '永久心理创伤'
    ],
    recommendedLevel: 25,
    teamSize: {
      min: 3,
      max: 6,
      optimal: 4
    }
  }
];

// 策略查找函数
export const getStrategiesForTwisted = (twistedId: string): TwistedStrategy[] => {
  return twistedStrategies.filter(strategy => strategy.strategyId === twistedId);
};

export const getStrategiesByType = (type: TwistedStrategy['type']): TwistedStrategy[] => {
  return twistedStrategies.filter(strategy => strategy.type === type);
};

export const getStrategiesByDifficulty = (difficulty: TwistedStrategy['difficulty']): TwistedStrategy[] => {
  return twistedStrategies.filter(strategy => strategy.difficulty === difficulty);
};

export const getTeamComposition = (id: string): TeamComposition | undefined => {
  return teamCompositions.find(comp => comp.id === id);
};

export const getSurvivalKit = (id: string): SurvivalKit | undefined => {
  return survivalKits.find(kit => kit.id === id);
};

export const getEncounterById = (id: string): TwistedEncounter | undefined => {
  return twistedEncounters.find(encounter => encounter.id === id);
};

// 高级策略生成函数
export const generateCustomStrategy = (
  twisted: Twisted,
  teamSize: number,
  environment: string
): TwistedStrategy => {
  // 根据具体情况生成定制策略
  const baseStrategy = twistedStrategies.find(s => s.twistedId === twisted.id);
  
  if (baseStrategy) {
    return {
      ...baseStrategy,
      id: `custom-${twisted.id}-${Date.now()}`,
      name: `${twisted.name}定制策略`,
      description: `针对${environment}环境的${twisted.name}应对策略，适合${teamSize}人团队。`,
      steps: [
        ...baseStrategy.steps,
        `根据${environment}环境调整战术`,
        `利用团队人数优势`,
        '制定应急撤退计划'
      ]
    };
  }
  
  // 如果没有基础策略，创建新的
  return {
    id: `new-${twisted.id}-${Date.now()}`,
    twistedId: twisted.id,
    name: `${twisted.name}应对策略`,
    type: 'survival',
    difficulty: 'medium',
    description: `针对${twisted.name}的基础应对策略。`,
    steps: [
      '观察Twisted的行为模式',
      '寻找其弱点',
      '制定应对计划',
      '执行策略',
      '评估效果并调整'
    ],
    requirements: ['基础生存技能', '团队配合'],
    risks: ['策略失败', '团队伤亡'],
    rewards: ['生存经验', '团队默契'],
    tips: ['保持冷静', '团队协作', '灵活应变'],
    counterStrategies: []
  };
};
