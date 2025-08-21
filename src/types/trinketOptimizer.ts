// Trinket Optimizer 智能推荐系统类型定义

// 基础饰品接口扩展
export interface EnhancedTrinket {
  id: string;
  name: string;
  rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
  type: 'offensive' | 'defensive' | 'utility' | 'hybrid';
  slot: 'primary' | 'secondary' | 'tertiary';
  stats: TrinketStats;
  effects: TrinketEffect[];
  description: string;
  image: string;
  unlockCondition?: string;
  synergies: string[];
  drawbacks: string[];
  bestFor: string[];
  
  // 新增字段
  acquisition: TrinketAcquisition;
  metaTags: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  communityRating: number; // 1-5
  usageRate: number; // 0-100
}

// 饰品获取信息
export interface TrinketAcquisition {
  requirements: AcquisitionRequirement[];
  estimatedCost: string;
  priority: 'low' | 'medium' | 'high' | 'critical';
  alternatives: string[]; // 替代饰品ID
  unlockPath: UnlockStep[];
  estimatedTime: string;
}

// 获取要求
export interface AcquisitionRequirement {
  type: 'research' | 'currency' | 'achievement' | 'boss' | 'event' | 'level';
  description: string;
  value?: string | number;
  completed: boolean;
}

// 解锁步骤
export interface UnlockStep {
  step: number;
  description: string;
  requirement: string;
  estimatedTime: string;
  completed: boolean;
}

// 饰品统计
export interface TrinketStats {
  damage?: number;
  defense?: number;
  speed?: number;
  health?: number;
  stamina?: number;
  criticalChance?: number;
  criticalDamage?: number;
  dodgeChance?: number;
  blockChance?: number;
  healingBonus?: number;
  cooldownReduction?: number;
  range?: number;
  areaOfEffect?: number;
  // 新增统计
  skillCheck?: number;
  extractionSpeed?: number;
  stealth?: number;
  teamSupport?: number;
  distractionEffectiveness?: number;
}

// 饰品效果
export interface TrinketEffect {
  name: string;
  description: string;
  trigger: 'passive' | 'onHit' | 'onKill' | 'onDamage' | 'onHeal' | 'onBlock' | 'onDodge';
  value: number;
  duration?: number;
  stackable: boolean;
  maxStacks?: number;
  // 新增字段
  condition?: string; // 触发条件
  cooldown?: number; // 冷却时间
}

// 智能推荐接口
export interface IntelligentRecommendation {
  id: string;
  name: string;
  trinkets: EnhancedTrinket[];
  reasoning: RecommendationReasoning;
  effectiveness: RecommendationEffectiveness;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  scenarios: string[];
  metaTags: string[];
  confidence: number; // 1-5星
  alternatives: AlternativeBuild[];
  acquisition: BuildAcquisition;
  teamCompatibility: TeamCompatibility;
  metaAnalysis: MetaAnalysis;
  progressionPath: ProgressionPath;
}

// 推荐推理
export interface RecommendationReasoning {
  primary: string; // 主要推理
  statSynergy: StatSynergy[];
  scenarioExplanation: string;
  numericalBenefits: NumericalBenefit[];
  tradeoffs: string[];
}

// 统计协同
export interface StatSynergy {
  stats: string[];
  description: string;
  beforeValue: number;
  afterValue: number;
  improvement: string;
}

// 数值收益
export interface NumericalBenefit {
  stat: string;
  from: number;
  to: number;
  improvement: string;
  description: string;
}

// 推荐效果
export interface RecommendationEffectiveness {
  overall: number; // 1-5星
  damage: number;
  survival: number;
  utility: number;
  teamSupport: number;
  soloPlay: number;
  highFloor: number; // 高楼层表现
}

// 替代构建
export interface AlternativeBuild {
  name: string;
  trinkets: EnhancedTrinket[];
  reasoning: string;
  tradeoffs: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  cost: 'budget' | 'moderate' | 'expensive';
  effectiveness: number; // 1-5星
}

// 构建获取
export interface BuildAcquisition {
  requirements: AcquisitionRequirement[];
  estimatedCost: string;
  priority: 'low' | 'medium' | 'high' | 'critical';
  alternatives: string[]; // 替代构建ID
  unlockSequence: string[]; // 解锁顺序
}

// 团队兼容性
export interface TeamCompatibility {
  worksWellWith: string[]; // 角色ID
  conflictsWith: string[]; // 角色ID
  teamRoles: string[]; // 适合的团队角色
  compositionNotes: string;
}

// 元数据分析
export interface MetaAnalysis {
  popularity: number; // 0-100
  winRate: number; // 0-100
  tier: 'S' | 'A' | 'B' | 'C' | 'D';
  metaPosition: string;
  counterStrategies: string[];
  strengths: string[];
  weaknesses: string[];
}

// 升级路径
export interface ProgressionPath {
  current: string;
  next: string;
  final: string;
  steps: ProgressionStep[];
  estimatedTime: string;
  resourceRequirements: string[];
}

// 升级步骤
export interface ProgressionStep {
  step: number;
  description: string;
  requirement: string;
  estimatedTime: string;
  priority: 'low' | 'medium' | 'high';
}

// 构建比较
export interface BuildComparison {
  builds: IntelligentRecommendation[];
  comparisonMetrics: ComparisonMetric[];
  winner: string; // 获胜构建ID
  analysis: string;
}

// 比较指标
export interface ComparisonMetric {
  name: string;
  values: { [buildId: string]: number };
  unit: string;
  weight: number; // 权重
}

// 用户偏好
export interface UserPreferences {
  playstyle: 'aggressive' | 'defensive' | 'support' | 'hybrid' | 'balanced';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  budget: 'budget' | 'moderate' | 'expensive';
  focus: 'damage' | 'survival' | 'utility' | 'teamSupport' | 'balanced';
  preferredRoles: string[];
  avoidRoles: string[];
  metaPreference: 'meta' | 'offMeta' | 'balanced';
}

// 构建模拟器结果
export interface BuildSimulationResult {
  buildId: string;
  threatLevel: string;
  successRate: number;
  averageTime: number;
  strategies: string[];
  weaknesses: string[];
  recommendations: string[];
}

// 保存的构建
export interface SavedBuild {
  id: string;
  name: string;
  description: string;
  recommendation: IntelligentRecommendation;
  createdAt: Date;
  updatedAt: Date;
  tags: string[];
  notes: string;
  rating: number; // 用户评分
}

// 构建代码
export interface BuildCode {
  code: string;
  version: string;
  build: IntelligentRecommendation;
  metadata: {
    creator: string;
    createdAt: Date;
    gameVersion: string;
    description: string;
  };
}

// 搜索和过滤选项
export interface SearchFilters {
  query: string;
  rarity: string[];
  type: string[];
  difficulty: string[];
  cost: string[];
  effectiveness: number[];
  metaTags: string[];
  playstyle: string[];
  teamCompatibility: string[];
}

// 推荐引擎配置
export interface RecommendationEngineConfig {
  weights: {
    statSynergy: number;
    metaPopularity: number;
    communityRating: number;
    acquisitionDifficulty: number;
    teamCompatibility: number;
  };
  thresholds: {
    minimumEffectiveness: number;
    maximumDifficulty: number;
    minimumConfidence: number;
  };
  preferences: UserPreferences;
}
