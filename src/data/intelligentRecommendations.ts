import { Character } from '../types/character';
import {
  IntelligentRecommendation,
  RecommendationEngineConfig,
  EnhancedTrinket,
  StatSynergy,
  AlternativeBuild,
} from '../types/trinketOptimizer';
import { enhancedTrinkets } from './enhancedTrinkets';
import { getAllCharacters } from './characters';

const clampRating = (value: number): number => {
  const clamped = Math.max(1, Math.min(5, value));
  return Math.round(clamped * 100) / 100;
};

const formatLabel = (value: string): string => {
  return value
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(' ');
};

const rotateTrinkets = (seed: number, count = 3): EnhancedTrinket[] => {
  if (enhancedTrinkets.length === 0) {
    return [];
  }

  const selection: EnhancedTrinket[] = [];
  for (let i = 0; i < Math.min(count, enhancedTrinkets.length); i += 1) {
    const index = (seed * count + i) % enhancedTrinkets.length;
    selection.push(enhancedTrinkets[index]);
  }
  return selection;
};

const buildStatSynergy = (
  trinkets: EnhancedTrinket[],
  playstyleLabel: string,
): StatSynergy[] => {
  if (trinkets.length === 0) {
    return [
      {
        stats: ['versatility'],
        description: `Baseline synergy for ${playstyleLabel} rotations while detailed data is finalized.`,
        beforeValue: 60,
        afterValue: 70,
        improvement: '+10%',
      },
    ];
  }

  return trinkets.slice(0, 2).map((trinket, index) => ({
    stats: Object.keys(trinket.stats).length ? Object.keys(trinket.stats) : ['versatility'],
    description: `${trinket.name} keeps ${playstyleLabel.toLowerCase()} routines stable while localization completes.`,
    beforeValue: 60 + index * 5,
    afterValue: 70 + index * 5,
    improvement: '+10%',
  }));
};

const buildAlternatives = (
  baseTrinkets: EnhancedTrinket[],
  playstyleLabel: string,
  variantIndex: number,
  baseOverall: number,
): AlternativeBuild[] => {
  const starterTrinkets = baseTrinkets.slice(0, 2);
  const experimentalTrinkets = rotateTrinkets(variantIndex + 1);

  const alternatives: AlternativeBuild[] = [];

  alternatives.push({
    name: `${playstyleLabel} Starter`,
    trinkets: starterTrinkets,
    reasoning: 'Use this variant while gathering the remaining materials for the featured build.',
    tradeoffs: ['Slightly lower ceiling but budget-friendly to assemble.'],
    difficulty: 'beginner',
    cost: 'budget',
    effectiveness: clampRating(baseOverall - 0.4),
  });

  alternatives.push({
    name: `${playstyleLabel} Experimental`,
    trinkets: experimentalTrinkets,
    reasoning: 'Explores alternative synergies until full regional data is available.',
    tradeoffs: ['Requires more micro-management and higher resource investment.'],
    difficulty: 'advanced',
    cost: 'expensive',
    effectiveness: clampRating(baseOverall + 0.3),
  });

  return alternatives;
};

const createPlaceholderRecommendation = (
  character: Character,
  playstyle: string | undefined,
  variantIndex: number,
): IntelligentRecommendation => {
  const safePlaystyle = playstyle || 'balanced';
  const playstyleLabel = formatLabel(safePlaystyle);
  const baseTrinkets = rotateTrinkets(variantIndex);
  const baseOverall = clampRating(3 + variantIndex * 0.35);

  return {
    id: `${character.id}-${safePlaystyle}-${variantIndex + 1}`,
    name: `${character.name} ${playstyleLabel} Build ${variantIndex + 1}`,
    trinkets: baseTrinkets,
    reasoning: {
      primary: `Detailed optimization notes for ${character.name} (${playstyleLabel}) are being localized. These values keep the planner usable in the meantime.`,
      statSynergy: buildStatSynergy(baseTrinkets, playstyleLabel),
      scenarioExplanation: `Scenario guidance for ${playstyleLabel.toLowerCase()} runs is pending global release data. Use this stub to plan your sessions.`,
      numericalBenefits: [
        {
          stat: 'Damage throughput',
          from: 100,
          to: 118,
          improvement: '+18%',
          description: 'Projected increase once the featured trinkets are tuned around live numbers.',
        },
        {
          stat: 'Survivability',
          from: 95,
          to: 108,
          improvement: '+13%',
          description: 'Estimated mitigation gains while the final dataset is translated.',
        },
      ],
      tradeoffs: [
        'Stat lines are placeholders that will be replaced with localized balance data.',
        'Expect to revisit the trinket order once the Western launch numbers are published.',
      ],
    },
    effectiveness: {
      overall: baseOverall,
      damage: clampRating(baseOverall + 0.25),
      survival: clampRating(baseOverall + 0.1),
      utility: clampRating(baseOverall - 0.1),
      teamSupport: clampRating(baseOverall),
      soloPlay: clampRating(baseOverall - 0.15),
      highFloor: clampRating(baseOverall + 0.05),
    },
    difficulty: variantIndex === 0 ? 'intermediate' : variantIndex === 1 ? 'advanced' : 'beginner',
    scenarios: [
      `${playstyleLabel} focused encounters`,
      'Story progression sessions',
      'Coordinated squad objectives',
    ],
    metaTags: [safePlaystyle, character.type, 'placeholder'],
    confidence: clampRating(3 + variantIndex * 0.25),
    alternatives: buildAlternatives(baseTrinkets, playstyleLabel, variantIndex, baseOverall),
    acquisition: {
      requirements: baseTrinkets.slice(0, 2).map((trinket, idx) => ({
        type: idx === 0 ? 'research' : 'currency',
        description: `Collect the resources needed to secure ${trinket.name}.`,
        value: idx === 0 ? 'Chapter unlock' : '120 tapes',
        completed: false,
      })),
      estimatedCost: 'Pending balance pass',
      priority: 'medium',
      alternatives: baseTrinkets.map((trinket) => `Swap for ${trinket.name} equivalent if available.`),
      unlockSequence: baseTrinkets.map((trinket, idx) => `${idx + 1}. Acquire ${trinket.name}`),
    },
    teamCompatibility: {
      worksWellWith: [
        'Coordinated extractor squads',
        'Crowd-control heavy teams',
        'Support-focused duo partners',
      ],
      conflictsWith: [
        'Greedy solo builds with no utility',
        'Teams lacking objective pressure',
      ],
      teamRoles: [character.gameplay?.teamRole ?? 'flex role', `${playstyleLabel} specialist`],
      compositionNotes: 'Team synergy write-up is in progress; treat this as a temporary primer.',
    },
    metaAnalysis: {
      popularity: 48 + variantIndex * 6,
      winRate: 50 + variantIndex * 4,
      tier: variantIndex === 0 ? 'A' : variantIndex === 1 ? 'B' : 'C',
      metaPosition: 'Awaiting live dataset from the English release.',
      counterStrategies: [
        'Pressure objectives to force early swaps.',
        'Interrupt setup pieces before the build stabilizes.',
      ],
      strengths: [
        'Consistent performance across most public matchmaking scenarios.',
        'Flexible slot usage with easy upgrade paths.',
      ],
      weaknesses: [
        'Full optimization requires pending balance numbers.',
        'Resource intensive compared to pure budget loadouts.',
      ],
    },
    progressionPath: {
      current: 'Baseline loadout',
      next: 'Optimized variant',
      final: 'Fully tuned release build',
      steps: [
        {
          step: 1,
          description: `Secure the core trinket ${baseTrinkets[0]?.name ?? 'once data is live'}.`,
          requirement: 'Complete early-week objectives.',
          estimatedTime: '1-2 sessions',
          priority: 'medium',
        },
        {
          step: 2,
          description: 'Upgrade supporting slots with meta-aligned pieces.',
          requirement: 'Farm weekly contracts or trading post offers.',
          estimatedTime: '2-3 sessions',
          priority: 'high',
        },
        {
          step: 3,
          description: 'Fine-tune stats once localized numbers arrive.',
          requirement: 'Review patch notes and adjust.',
          estimatedTime: 'Ongoing',
          priority: 'medium',
        },
      ],
      estimatedTime: '~1 week of casual play',
      resourceRequirements: [
        '120 tapes (placeholder)',
        '2 research reports',
        '1 rare material token',
      ],
    },
  };
};

export const defaultEngineConfig: RecommendationEngineConfig = {
  weights: {
    statSynergy: 0.3,
    metaPopularity: 0.2,
    communityRating: 0.2,
    acquisitionDifficulty: 0.15,
    teamCompatibility: 0.15,
  },
  thresholds: {
    minimumEffectiveness: 2.5,
    maximumDifficulty: 4,
    minimumConfidence: 2.5,
  },
  preferences: {
    playstyle: 'balanced',
    difficulty: 'intermediate',
    budget: 'moderate',
    focus: 'balanced',
    preferredRoles: [],
    avoidRoles: [],
    metaPreference: 'balanced',
  },
};

export const getIntelligentRecommendations = (
  character: Character,
  playstyle?: string,
  limit = 3,
): IntelligentRecommendation[] => {
  const safeLimit = Math.max(1, limit);
  return Array.from({ length: safeLimit }, (_, index) =>
    createPlaceholderRecommendation(character, playstyle, index),
  );
};

export const getRecommendationForPlaystyle = (
  playstyle: string,
  limit = 3,
): IntelligentRecommendation[] => {
  return getAllCharacters()
    .slice(0, limit)
    .map((character, index) => createPlaceholderRecommendation(character, playstyle, index));
};
