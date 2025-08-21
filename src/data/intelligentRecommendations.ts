import { 
  IntelligentRecommendation, 
  EnhancedTrinket, 
  RecommendationReasoning,
  RecommendationEffectiveness,
  AlternativeBuild,
  BuildAcquisition,
  TeamCompatibility,
  MetaAnalysis,
  ProgressionPath,
  StatSynergy,
  NumericalBenefit,
  UserPreferences,
  RecommendationEngineConfig
} from '../types/trinketOptimizer';
import { Character } from '../types/character';
import { enhancedTrinkets, getEnhancedTrinketById } from './enhancedTrinkets';

// 智能推荐引擎配置
export const defaultEngineConfig: RecommendationEngineConfig = {
  weights: {
    statSynergy: 0.25,
    metaPopularity: 0.20,
    communityRating: 0.15,
    acquisitionDifficulty: 0.15,
    teamCompatibility: 0.25
  },
  thresholds: {
    minimumEffectiveness: 3.0,
    maximumDifficulty: 4.0,
    minimumConfidence: 3.0
  },
  preferences: {
    playstyle: 'balanced',
    difficulty: 'intermediate',
    budget: 'moderate',
    focus: 'balanced',
    preferredRoles: [],
    avoidRoles: [],
    metaPreference: 'balanced'
  }
};

// 生成智能推荐的核心函数
export const generateIntelligentRecommendation = (
  character: Character,
  playstyle: string,
  config: RecommendationEngineConfig = defaultEngineConfig
): IntelligentRecommendation[] => {
  const recommendations: IntelligentRecommendation[] = [];
  
  // 根据游戏风格生成不同类型的推荐
  const buildTypes = getBuildTypesForPlaystyle(playstyle);
  
  buildTypes.forEach(buildType => {
    const recommendation = createRecommendation(character, playstyle, buildType, config);
    if (recommendation) {
      recommendations.push(recommendation);
    }
  });
  
  // 按置信度排序
  return recommendations.sort((a, b) => b.confidence - a.confidence);
};

// 根据游戏风格获取构建类型
const getBuildTypesForPlaystyle = (playstyle: string): string[] => {
  switch (playstyle) {
    case 'extractor':
      return ['extraction-focused', 'speed-focused', 'skill-focused'];
    case 'distractor':
      return ['stealth-focused', 'mobility-focused', 'utility-focused'];
    case 'support':
      return ['team-support', 'healing-focused', 'utility-focused'];
    case 'balanced':
      return ['balanced', 'versatile', 'adaptive'];
    default:
      return ['balanced', 'versatile'];
  }
};

// 创建单个推荐
const createRecommendation = (
  character: Character,
  playstyle: string,
  buildType: string,
  config: RecommendationEngineConfig
): IntelligentRecommendation | null => {
  // 根据构建类型选择饰品
  const trinkets = selectTrinketsForBuildType(buildType, character);
  if (trinkets.length === 0) return null;
  
  // 生成推荐推理
  const reasoning = generateRecommendationReasoning(trinkets, character, playstyle);
  
  // 计算效果评分
  const effectiveness = calculateEffectiveness(trinkets, character, playstyle);
  
  // 生成替代构建
  const alternatives = generateAlternativeBuilds(trinkets, character, playstyle);
  
  // 分析获取路径
  const acquisition = analyzeBuildAcquisition(trinkets);
  
  // 分析团队兼容性
  const teamCompatibility = analyzeTeamCompatibility(trinkets, character);
  
  // 元数据分析
  const metaAnalysis = analyzeMetaData(trinkets, buildType);
  
  // 升级路径
  const progressionPath = generateProgressionPath(trinkets, character);
  
  // 计算置信度
  const confidence = calculateConfidence(trinkets, effectiveness, metaAnalysis, config);
  
  return {
    id: `${character.id}-${buildType}-${Date.now()}`,
    name: `${buildType.charAt(0).toUpperCase() + buildType.slice(1)} ${playstyle} Build`,
    trinkets,
    reasoning,
    effectiveness,
    difficulty: determineDifficulty(trinkets),
    scenarios: generateScenarios(playstyle, buildType),
    metaTags: generateMetaTags(trinkets, playstyle),
    confidence,
    alternatives,
    acquisition,
    teamCompatibility,
    metaAnalysis,
    progressionPath
  };
};

// 根据构建类型选择饰品
const selectTrinketsForBuildType = (buildType: string, character: Character): EnhancedTrinket[] => {
  const selectedTrinkets: EnhancedTrinket[] = [];
  
  switch (buildType) {
    case 'extraction-focused':
      selectedTrinkets.push(
        ...enhancedTrinkets.filter(t => 
          t.slot === 'primary' && 
          (t.stats.extractionSpeed || t.stats.skillCheck)
        ).slice(0, 1)
      );
      selectedTrinkets.push(
        ...enhancedTrinkets.filter(t => 
          t.slot === 'secondary' && 
          (t.stats.speed || t.stats.stamina)
        ).slice(0, 1)
      );
      break;
      
    case 'stealth-focused':
      selectedTrinkets.push(
        ...enhancedTrinkets.filter(t => 
          t.slot === 'primary' && 
          (t.stats.stealth || t.stats.dodgeChance)
        ).slice(0, 1)
      );
      selectedTrinkets.push(
        ...enhancedTrinkets.filter(t => 
          t.slot === 'secondary' && 
          (t.stats.speed || t.stats.stealth)
        ).slice(0, 1)
      );
      break;
      
    case 'team-support':
      selectedTrinkets.push(
        ...enhancedTrinkets.filter(t => 
          t.slot === 'primary' && 
          (t.stats.teamSupport || t.stats.healingBonus)
        ).slice(0, 1)
      );
      selectedTrinkets.push(
        ...enhancedTrinkets.filter(t => 
          t.slot === 'tertiary' && 
          (t.stats.teamSupport || t.stats.healingBonus)
        ).slice(0, 1)
      );
      break;
      
    default:
      // 平衡构建
      selectedTrinkets.push(
        ...enhancedTrinkets.filter(t => t.slot === 'primary').slice(0, 1),
        ...enhancedTrinkets.filter(t => t.slot === 'secondary').slice(0, 1)
      );
  }
  
  return selectedTrinkets;
};

// 生成推荐推理
const generateRecommendationReasoning = (
  trinkets: EnhancedTrinket[],
  character: Character,
  playstyle: string
): RecommendationReasoning => {
  const statSynergies: StatSynergy[] = [];
  const numericalBenefits: NumericalBenefit[] = [];
  const tradeoffs: string[] = [];
  
  // 分析统计协同
  trinkets.forEach(trinket => {
    Object.entries(trinket.stats).forEach(([stat, value]) => {
      if (value && value > 0) {
        const baseValue = getCharacterBaseStat(character, stat);
        const newValue = baseValue + value;
        
        statSynergies.push({
          stats: [stat],
          description: `${trinket.name}提升${stat}属性`,
          beforeValue: baseValue,
          afterValue: newValue,
          improvement: `${((value / baseValue) * 100).toFixed(1)}%`
        });
        
        numericalBenefits.push({
          stat,
          from: baseValue,
          to: newValue,
          improvement: `${value}点`,
          description: `从${baseValue}★提升到${newValue.toFixed(1)}★`
        });
      }
    });
  });
  
  // 分析协同效果
  const synergyDescription = analyzeTrinketSynergies(trinkets);
  
  // 分析负面效果
  trinkets.forEach(trinket => {
    tradeoffs.push(...trinket.drawbacks);
  });
  
  return {
    primary: `${trinkets.map(t => t.name).join(' + ')} = ${synergyDescription}`,
    statSynergy: statSynergies,
    scenarioExplanation: generateScenarioExplanation(playstyle, trinkets),
    numericalBenefits,
    tradeoffs
  };
};

// 获取角色基础属性
const getCharacterBaseStat = (character: Character, stat: string): number => {
  const statMap: { [key: string]: number } = {
    skillCheck: character.stats.skillCheck,
    movementSpeed: character.stats.movementSpeed,
    stamina: character.stats.stamina,
    stealth: character.stats.stealth,
    extractionSpeed: character.stats.extractionSpeed
  };
  
  return statMap[stat] || 0;
};

// 分析饰品协同
const analyzeTrinketSynergies = (trinkets: EnhancedTrinket[]): string => {
  if (trinkets.length < 2) return '单一饰品效果';
  
  const primary = trinkets[0];
  const secondary = trinkets[1];
  
  if (primary.stats.speed && secondary.stats.speed) {
    return 'Can outwalk most twisteds';
  }
  
  if (primary.stats.stealth && secondary.stats.speed) {
    return 'Maximum stealth and mobility';
  }
  
  if (primary.stats.extractionSpeed && secondary.stats.skillCheck) {
    return 'Optimal extraction efficiency';
  }
  
  return 'Good synergy combination';
};

// 生成场景说明
const generateScenarioExplanation = (playstyle: string, trinkets: EnhancedTrinket[]): string => {
  switch (playstyle) {
    case 'extractor':
      return 'Ideal for objective completion on floors 5-15';
    case 'distractor':
      return 'Perfect for distraction role on floors 10+';
    case 'support':
      return 'Excellent for team coordination in group play';
    default:
      return 'Versatile for various scenarios';
  }
};

// 计算效果评分
const calculateEffectiveness = (
  trinkets: EnhancedTrinket[],
  character: Character,
  playstyle: string
): RecommendationEffectiveness => {
  let damage = 0, survival = 0, utility = 0, teamSupport = 0, soloPlay = 0, highFloor = 0;
  
  trinkets.forEach(trinket => {
    // 伤害评分
    if (trinket.stats.damage) damage += trinket.stats.damage / 10;
    if (trinket.stats.criticalChance) damage += trinket.stats.criticalChance / 5;
    
    // 生存评分
    if (trinket.stats.health) survival += trinket.stats.health / 20;
    if (trinket.stats.defense) survival += trinket.stats.defense / 10;
    if (trinket.stats.dodgeChance) survival += trinket.stats.dodgeChance / 5;
    
    // 实用评分
    if (trinket.stats.speed) utility += trinket.stats.speed / 10;
    if (trinket.stats.skillCheck) utility += trinket.stats.skillCheck / 10;
    if (trinket.stats.extractionSpeed) utility += trinket.stats.extractionSpeed / 20;
    
    // 团队支援
    if (trinket.stats.teamSupport) teamSupport += trinket.stats.teamSupport / 15;
    if (trinket.stats.healingBonus) teamSupport += trinket.stats.healingBonus / 15;
  });
  
  // 计算总体评分
  const overall = Math.min(5, (damage + survival + utility + teamSupport) / 4);
  
  // 高楼层表现（基于生存和实用）
  highFloor = Math.min(5, (survival + utility) / 2);
  
  // 单人游戏表现（基于伤害和生存）
  soloPlay = Math.min(5, (damage + survival) / 2);
  
  return {
    overall: Math.round(overall * 10) / 10,
    damage: Math.round(damage * 10) / 10,
    survival: Math.round(survival * 10) / 10,
    utility: Math.round(utility * 10) / 10,
    teamSupport: Math.round(teamSupport * 10) / 10,
    soloPlay: Math.round(soloPlay * 10) / 10,
    highFloor: Math.round(highFloor * 10) / 10
  };
};

// 生成替代构建
const generateAlternativeBuilds = (
  trinkets: EnhancedTrinket[],
  character: Character,
  playstyle: string
): AlternativeBuild[] => {
  const alternatives: AlternativeBuild[] = [];
  
  // 预算构建
  const budgetTrinkets = trinkets.map(t => {
    const alternatives = enhancedTrinkets.filter(alt => 
      alt.slot === t.slot && 
      alt.rarity === 'common' || alt.rarity === 'uncommon'
    );
    return alternatives[0] || t;
  });
  
  alternatives.push({
    name: 'Budget Build',
    trinkets: budgetTrinkets,
    reasoning: 'Easier to obtain, still effective',
    tradeoffs: ['Less powerful but more accessible'],
    difficulty: 'beginner',
    cost: 'budget',
    effectiveness: Math.max(1, calculateEffectiveness(budgetTrinkets, character, playstyle).overall - 1)
  });
  
  // 高级构建
  const advancedTrinkets = trinkets.map(t => {
    const alternatives = enhancedTrinkets.filter(alt => 
      alt.slot === t.slot && 
      alt.rarity === 'legendary' || alt.rarity === 'epic'
    );
    return alternatives[0] || t;
  });
  
  alternatives.push({
    name: 'Advanced Build',
    trinkets: advancedTrinkets,
    reasoning: 'Maximum power for experienced players',
    tradeoffs: ['Harder to obtain, requires skill'],
    difficulty: 'advanced',
    cost: 'expensive',
    effectiveness: Math.min(5, calculateEffectiveness(advancedTrinkets, character, playstyle).overall + 0.5)
  });
  
  return alternatives;
};

// 分析构建获取
const analyzeBuildAcquisition = (trinkets: EnhancedTrinket[]): BuildAcquisition => {
  const requirements: any[] = [];
  let totalCost = 0;
  let totalTime = 0;
  let maxPriority: 'low' | 'medium' | 'high' | 'critical' = 'low';
  
  trinkets.forEach(trinket => {
    requirements.push(...trinket.acquisition.requirements);
    totalCost += parseFloat(trinket.acquisition.estimatedCost.split(' ')[0]);
    totalTime += parseFloat(trinket.acquisition.estimatedTime.split(' ')[0]);
    
    if (trinket.acquisition.priority === 'critical') maxPriority = 'critical';
    else if (trinket.acquisition.priority === 'high' && maxPriority !== 'critical') maxPriority = 'high';
    else if (trinket.acquisition.priority === 'medium' && maxPriority === 'low') maxPriority = 'medium';
  });
  
  return {
    requirements,
    estimatedCost: `${totalCost} tapes + ${totalTime} hours`,
    priority: maxPriority,
    alternatives: [],
    unlockSequence: trinkets.map(t => t.id)
  };
};

// 分析团队兼容性
const analyzeTeamCompatibility = (
  trinkets: EnhancedTrinket[],
  character: Character
): TeamCompatibility => {
  const worksWellWith: string[] = [];
  const conflictsWith: string[] = [];
  const teamRoles: string[] = [];
  
  // 基于饰品类型判断团队角色
  trinkets.forEach(trinket => {
    if (trinket.stats.teamSupport || trinket.stats.healingBonus) {
      teamRoles.push('Support', 'Healer');
    }
    if (trinket.stats.damage || trinket.stats.criticalChance) {
      teamRoles.push('Damage Dealer');
    }
    if (trinket.stats.defense || trinket.stats.health) {
      teamRoles.push('Tank');
    }
  });
  
  return {
    worksWellWith: worksWellWith,
    conflictsWith: conflictsWith,
    teamRoles: [...new Set(teamRoles)],
    compositionNotes: `This build works well with ${teamRoles.join(' + ')} roles`
  };
};

// 元数据分析
const analyzeMetaData = (trinkets: EnhancedTrinket[], buildType: string): MetaAnalysis => {
  let totalPopularity = 0, totalRating = 0, totalUsage = 0;
  
  trinkets.forEach(trinket => {
    totalPopularity += trinket.usageRate;
    totalRating += trinket.communityRating;
    totalUsage += trinket.usageRate;
  });
  
  const avgPopularity = totalPopularity / trinkets.length;
  const avgRating = totalRating / trinkets.length;
  const avgUsage = totalUsage / trinkets.length;
  
  // 确定等级
  let tier: 'S' | 'A' | 'B' | 'C' | 'D' = 'B';
  if (avgRating >= 4.5 && avgUsage >= 60) tier = 'S';
  else if (avgRating >= 4.0 && avgUsage >= 40) tier = 'A';
  else if (avgRating >= 3.5 && avgUsage >= 25) tier = 'B';
  else if (avgRating >= 3.0 && avgUsage >= 15) tier = 'C';
  else tier = 'D';
  
  return {
    popularity: Math.round(avgPopularity),
    winRate: Math.round(avgRating * 20), // 转换为百分比
    tier,
    metaPosition: `${tier} Tier - ${buildType} build`,
    counterStrategies: ['High mobility enemies', 'Stealth detection'],
    strengths: ['Good synergy', 'Balanced stats'],
    weaknesses: ['Requires coordination', 'Situational effectiveness']
  };
};

// 生成升级路径
const generateProgressionPath = (
  trinkets: EnhancedTrinket[],
  character: Character
): ProgressionPath => {
  const steps = trinkets.map((trinket, index) => ({
    step: index + 1,
    description: `Obtain ${trinket.name}`,
    requirement: trinket.unlockCondition || 'Complete requirements',
    estimatedTime: trinket.acquisition.estimatedTime,
    priority: trinket.acquisition.priority
  }));
  
  return {
    current: 'No trinkets',
    next: trinkets[0]?.name || 'Unknown',
    final: trinkets.map(t => t.name).join(' + '),
    steps,
    estimatedTime: trinkets.reduce((total, t) => {
      const time = parseFloat(t.acquisition.estimatedTime.split(' ')[0]);
      return total + time;
    }, 0) + ' hours',
    resourceRequirements: trinkets.map(t => t.acquisition.estimatedCost)
  };
};

// 确定难度
const determineDifficulty = (trinkets: EnhancedTrinket[]): 'beginner' | 'intermediate' | 'advanced' => {
  const difficulties = trinkets.map(t => t.difficulty);
  if (difficulties.includes('advanced')) return 'advanced';
  if (difficulties.includes('intermediate')) return 'intermediate';
  return 'beginner';
};

// 生成场景
const generateScenarios = (playstyle: string, buildType: string): string[] => {
  const scenarios: string[] = [];
  
  switch (playstyle) {
    case 'extractor':
      scenarios.push('Floors 5-15', 'Quick objective completion', 'Solo play');
      break;
    case 'distractor':
      scenarios.push('Floors 10+', 'Team distraction', 'Multiple twisted handling');
      break;
    case 'support':
      scenarios.push('Group play', 'Team coordination', 'High floor support');
      break;
    default:
      scenarios.push('Various scenarios', 'Adaptive gameplay', 'Mixed situations');
  }
  
  return scenarios;
};

// 生成元标签
const generateMetaTags = (trinkets: EnhancedTrinket[], playstyle: string): string[] => {
  const tags = new Set<string>();
  
  trinkets.forEach(trinket => {
    tags.add(...trinket.metaTags);
  });
  
  tags.add(playstyle);
  
  return Array.from(tags);
};

// 计算置信度
const calculateConfidence = (
  trinkets: EnhancedTrinket[],
  effectiveness: RecommendationEffectiveness,
  metaAnalysis: MetaAnalysis,
  config: RecommendationEngineConfig
): number => {
  let confidence = 3; // 基础置信度
  
  // 基于效果评分
  if (effectiveness.overall >= 4.0) confidence += 1;
  else if (effectiveness.overall <= 2.0) confidence -= 1;
  
  // 基于元数据
  if (metaAnalysis.tier === 'S' || metaAnalysis.tier === 'A') confidence += 1;
  else if (metaAnalysis.tier === 'D') confidence -= 1;
  
  // 基于社区评分
  const avgRating = trinkets.reduce((sum, t) => sum + t.communityRating, 0) / trinkets.length;
  if (avgRating >= 4.5) confidence += 1;
  else if (avgRating <= 3.0) confidence -= 1;
  
  return Math.max(1, Math.min(5, confidence));
};

// 导出主要函数
export const getIntelligentRecommendations = (
  character: Character,
  playstyle: string,
  count: number = 4
): IntelligentRecommendation[] => {
  return generateIntelligentRecommendation(character, playstyle).slice(0, count);
};

export const getRecommendationById = (id: string): IntelligentRecommendation | undefined => {
  // 这里应该从存储中获取，暂时返回null
  return undefined;
};
