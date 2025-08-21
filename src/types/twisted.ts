export interface Twisted {
  id: string;
  name: string;
  type: 'hunter' | 'patrol' | 'special' | 'boss';
  dangerLevel: 'low' | 'medium' | 'high' | 'extreme';
  speed: number; // 1-5 scale
  attentionSpan: number; // 1-5 scale
  specialAbilities: string[];
  appearance: string[];
  identificationTips: string[];
  avoidanceStrategies: string[];
  warnings: string[];
  image: string; // emoji representation
  description: string;
  spawnLocations: string[];
  behavior: string;
  
  // 新增字段：详细生存策略
  survivalStrategies: SurvivalStrategy[];
  
  // 新增字段：音频识别系统
  audioCues: AudioCues;
  
  // 新增字段：危险组合警告
  deadlyCombos: DeadlyCombo[];
  
  // 新增字段：优先级目标系统
  priorityTargets: PriorityTarget[];
}

// 生存策略接口
export interface SurvivalStrategy {
  id: string;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard' | 'expert';
  effectiveness: 'low' | 'medium' | 'high' | 'critical';
  category: 'positioning' | 'timing' | 'teamwork' | 'resource' | 'escape';
  steps: string[];
  requirements: string[];
  risks: string[];
  tips: string[];
  counterStrategies: string[];
}

// 音频提示接口
export interface AudioCues {
  walking: string;
  detection: string;
  special: string;
  warning: string;
  timing: string;
  detectionTips: string[];
  audioPatterns: AudioPattern[];
}

// 音频模式接口
export interface AudioPattern {
  name: string;
  description: string;
  trigger: string;
  response: string;
  duration: number; // 秒
}

// 危险组合接口
export interface DeadlyCombo {
  partner: string;
  danger: 'dangerous' | 'lethal' | 'extreme';
  reason: string;
  strategy: string;
  escapeRoute: string;
  priority: number; // 1-10, 10为最高优先级
}

// 优先级目标接口
export interface PriorityTarget {
  target: string;
  reason: string;
  whenPresent: string;
  avoidanceStrategy: string;
  priority: number; // 1-10, 10为最高优先级
}
