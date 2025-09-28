// TODO: update

// TODO: update
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
  
  // TODO: update
  acquisition: TrinketAcquisition;
  metaTags: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  communityRating: number; // 1-5
  usageRate: number; // 0-100
}

// TODO: update
export interface TrinketAcquisition {
  requirements: AcquisitionRequirement[];
  estimatedCost: string;
  priority: 'low' | 'medium' | 'high' | 'critical';
  alternatives: string[]; // TODO: update
  unlockPath: UnlockStep[];
  estimatedTime: string;
}

// TODO: update
export interface AcquisitionRequirement {
  type: 'research' | 'currency' | 'achievement' | 'boss' | 'event' | 'level';
  description: string;
  value?: string | number;
  completed: boolean;
}

// TODO: update
export interface UnlockStep {
  step: number;
  description: string;
  requirement: string;
  estimatedTime: string;
  completed: boolean;
}

// TODO: update
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
  // TODO: update
  skillCheck?: number;
  extractionSpeed?: number;
  stealth?: number;
  teamSupport?: number;
  distractionEffectiveness?: number;
}

// TODO: update
export interface TrinketEffect {
  name: string;
  description: string;
  trigger: 'passive' | 'onHit' | 'onKill' | 'onDamage' | 'onHeal' | 'onBlock' | 'onDodge';
  value: number;
  duration?: number;
  stackable: boolean;
  maxStacks?: number;
  // TODO: update
  condition?: string; // TODO: update
  cooldown?: number; // TODO: update
}

// TODO: update
export interface IntelligentRecommendation {
  id: string;
  name: string;
  trinkets: EnhancedTrinket[];
  reasoning: RecommendationReasoning;
  effectiveness: RecommendationEffectiveness;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  scenarios: string[];
  metaTags: string[];
  confidence: number; // TODO: update
  alternatives: AlternativeBuild[];
  acquisition: BuildAcquisition;
  teamCompatibility: TeamCompatibility;
  metaAnalysis: MetaAnalysis;
  progressionPath: ProgressionPath;
}

// TODO: update
export interface RecommendationReasoning {
  primary: string; // TODO: update
  statSynergy: StatSynergy[];
  scenarioExplanation: string;
  numericalBenefits: NumericalBenefit[];
  tradeoffs: string[];
}

// TODO: update
export interface StatSynergy {
  stats: string[];
  description: string;
  beforeValue: number;
  afterValue: number;
  improvement: string;
}

// TODO: update
export interface NumericalBenefit {
  stat: string;
  from: number;
  to: number;
  improvement: string;
  description: string;
}

// TODO: update
export interface RecommendationEffectiveness {
  overall: number; // TODO: update
  damage: number;
  survival: number;
  utility: number;
  teamSupport: number;
  soloPlay: number;
  highFloor: number; // TODO: update
}

// TODO: update
export interface AlternativeBuild {
  name: string;
  trinkets: EnhancedTrinket[];
  reasoning: string;
  tradeoffs: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  cost: 'budget' | 'moderate' | 'expensive';
  effectiveness: number; // TODO: update
}

// TODO: update
export interface BuildAcquisition {
  requirements: AcquisitionRequirement[];
  estimatedCost: string;
  priority: 'low' | 'medium' | 'high' | 'critical';
  alternatives: string[]; // TODO: update
  unlockSequence: string[]; // TODO: update
}

// TODO: update
export interface TeamCompatibility {
  worksWellWith: string[]; // TODO: update
  conflictsWith: string[]; // TODO: update
  teamRoles: string[]; // TODO: update
  compositionNotes: string;
}

// TODO: update
export interface MetaAnalysis {
  popularity: number; // 0-100
  winRate: number; // 0-100
  tier: 'S' | 'A' | 'B' | 'C' | 'D';
  metaPosition: string;
  counterStrategies: string[];
  strengths: string[];
  weaknesses: string[];
}

// TODO: update
export interface ProgressionPath {
  current: string;
  next: string;
  final: string;
  steps: ProgressionStep[];
  estimatedTime: string;
  resourceRequirements: string[];
}

// TODO: update
export interface ProgressionStep {
  step: number;
  description: string;
  requirement: string;
  estimatedTime: string;
  priority: 'low' | 'medium' | 'high';
}

// TODO: update
export interface BuildComparison {
  builds: IntelligentRecommendation[];
  comparisonMetrics: ComparisonMetric[];
  winner: string; // TODO: update
  analysis: string;
}

// TODO: update
export interface ComparisonMetric {
  name: string;
  values: { [buildId: string]: number };
  unit: string;
  weight: number; // TODO: update
}

// TODO: update
export interface UserPreferences {
  playstyle: 'aggressive' | 'defensive' | 'support' | 'hybrid' | 'balanced';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  budget: 'budget' | 'moderate' | 'expensive';
  focus: 'damage' | 'survival' | 'utility' | 'teamSupport' | 'balanced';
  preferredRoles: string[];
  avoidRoles: string[];
  metaPreference: 'meta' | 'offMeta' | 'balanced';
}

// TODO: update
export interface BuildSimulationResult {
  buildId: string;
  threatLevel: string;
  successRate: number;
  averageTime: number;
  strategies: string[];
  weaknesses: string[];
  recommendations: string[];
}

// TODO: update
export interface SavedBuild {
  id: string;
  name: string;
  description: string;
  recommendation: IntelligentRecommendation;
  createdAt: Date;
  updatedAt: Date;
  tags: string[];
  notes: string;
  rating: number; // TODO: update
}

// TODO: update
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

// TODO: update
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

// TODO: update
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