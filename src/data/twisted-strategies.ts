import { TwistedStrategyProfile } from '../types/twisted-strategies';

export const twistedStrategies: TwistedStrategyProfile[] = [
  {
    twistedId: 'twisted-pebble',
    name: 'Twisted Pebble',
    rarity: 'main',
    threat_level: 'extreme',
    speed: 'very_fast',
    special_abilities: ['Bark detection', 'Enhanced vision', 'Aggressive pursuit'],
    identification: {
      visual_cues: ['巨大的狗形体', '通体漆黑', '发光的红色眼睛'],
      audio_cues: ['尖锐的犬吠声', '沉重的脚步声'],
      spawn_conditions: ['5层及以上', '基础 4% 概率，每 5 层 +4%'],
    },
    strategies: {
      avoidance: [
        '保持高障碍覆盖，避免开阔地带',
        '听到犬吠时立即寻找掩体',
        '使用地图边缘路线减少遭遇',
        '优先保持团队分散，避免一次被发现多人',
      ],
      if_spotted: [
        '立即冲刺至最近障碍物后',
        '不要尝试与其竞速，专注绕障碍',
        '利用狭窄通道降低追击效率',
        '等待其失去注意力后再移动',
      ],
      team_coordination: [
        '指定移动速度 4 星以上的分散注意力角色',
        '其余队员暂停所有机器活动',
        '避免救援正被追击的队友，等待安全窗口',
        '使用语音或标记保持实时位置通报',
      ],
    },
    common_mistakes: [
      '尝试直线逃跑导致被超越',
      '在开阔区域停留过久',
      '队友无计划地尝试救援',
    ],
    counters: ['Dog Plush + Pink Bow 可提供有限速度优势（特定角色）'],
    difficulty_rating: 10,
  },
  {
    twistedId: 'twisted-dandy',
    name: 'Twisted Dandy',
    rarity: 'lethal',
    threat_level: 'extreme',
    speed: 'very_slow',
    special_abilities: ['一击必杀', '机器完成感知', '全局听觉侦测'],
    identification: {
      visual_cues: ['彩虹花瓣头部', '慢速前倾步态', '巨大的伞状轮廓'],
      audio_cues: ['Clair de Lune 音乐盒', '沉重脚步声', '完成机器后脚步加速'],
      spawn_conditions: ['连续三次未购买 Dandy 商品', '最早可在 6 层出现'],
    },
    strategies: {
      avoidance: [
        '完成机器后立刻转移位置',
        '保持购物轮值，避免连续忽视 Dandy',
        '听到音乐时使用掩体减速',
        '优先选择带有速度技能的角色',
      ],
      if_spotted: [
        '使用最近障碍物绕圈拖延 5 秒注意力',
        '不要使用烟雾弹（效果甚微）',
        'Pebble 的 Speak 可短暂吸引仇恨',
        '保持冷静，等待其注意力衰减',
      ],
      team_coordination: [
        'Dandy Run 队伍需分配采购顺序',
        '共享听觉情报，提醒音乐触发',
        '保留速度增益道具应对突发追击',
        'Sprout、Teagan 等自保角色优先执行高风险任务',
      ],
    },
    common_mistakes: [
      '完成机器后停留原地',
      '恐慌中无序奔跑导致折返',
      '全队忽视购物导致愤怒值堆叠',
    ],
    counters: ['购买任意 Dandy 商品可立即重置愤怒值'],
    difficulty_rating: 10,
  },
  {
    twistedId: 'twisted-vee',
    name: 'Twisted Vee',
    rarity: 'main',
    threat_level: 'high',
    speed: 'normal',
    special_abilities: ['弹出广告干扰', '技能检查失败锁定', 'Slow II 降速'],
    identification: {
      visual_cues: ['电视机头部', '机械外骨骼', 'Ichor 足迹'],
      audio_cues: ['电子噪声', '错误提示声', '金属脚步声'],
      spawn_conditions: ['5 层及以上随机出现', '失败技能检查后被吸引'],
    },
    strategies: {
      avoidance: [
        '第一时间关闭弹出广告',
        '保持技能检查成功率，减少被锁定概率',
        '团队分散提取，降低失败连锁',
        '携带提高技能窗口的饰品',
      ],
      if_spotted: [
        'Slow II 持续期间优先寻找掩体并等待',
        '利用障碍物延长追击路径',
        '避免直线逃跑导致被命中',
        '等待减速效果结束再脱离',
      ],
      team_coordination: [
        '高技能角色优先执行关键机器',
        '失败时即时通报队友准备支援',
        'Astro 可提供额外分散与回复',
        '预先规划广告出现时的掩体位置',
      ],
    },
    common_mistakes: [
      '忽视广告导致持续减益',
      '技能检查失败后停留原地',
      '减速状态强行冲刺导致被命中',
    ],
    counters: ['Participation Award 提升技能检查窗口', 'Magnifying Glass 增加成功率'],
    difficulty_rating: 7,
  },
];
