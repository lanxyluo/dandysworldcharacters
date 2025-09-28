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
  
  // TODO: update
  survivalStrategies: SurvivalStrategy[];
  
  // TODO: update
  audioCues: AudioCues;
  
  // TODO: update
  deadlyCombos: DeadlyCombo[];
  
  // TODO: update
  priorityTargets: PriorityTarget[];
}

// TODO: update
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

// TODO: update
export interface AudioCues {
  walking: string;
  detection: string;
  special: string;
  warning: string;
  timing: string;
  detectionTips: string[];
  audioPatterns: AudioPattern[];
}

// TODO: update
export interface AudioPattern {
  name: string;
  description: string;
  trigger: string;
  response: string;
  duration: number; // TODO: update
}

// TODO: update
export interface DeadlyCombo {
  partner: string;
  danger: 'dangerous' | 'lethal' | 'extreme';
  reason: string;
  strategy: string;
  escapeRoute: string;
  priority: number; // TODO: update
}

// TODO: update
export interface PriorityTarget {
  target: string;
  reason: string;
  whenPresent: string;
  avoidanceStrategy: string;
  priority: number; // TODO: update
}