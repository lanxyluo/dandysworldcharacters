import { Character } from '../types/character';
import {
  IntelligentRecommendation,
  RecommendationEngineConfig,
  RecommendationReasoning,
  RecommendationEffectiveness,
  TeamCompatibility,
  MetaAnalysis,
  ProgressionPath,
} from '../types/trinketOptimizer';
import { curatedTrinketBuilds, CharacterBuildsByStyle } from './trinketBuilds';

type GameStyle = 'extractor' | 'distractor' | 'support' | 'balanced';

const STYLE_LABEL: Record<GameStyle, string> = {
  extractor: 'Extractor',
  distractor: 'Distractor',
  support: 'Support',
  balanced: 'Balanced',
};

const formatStyleLabel = (style: string | undefined): string => {
  if (!style) return 'Balanced';
  return STYLE_LABEL[(style as GameStyle) || 'balanced'] ?? style;
};

const createUnderConstructionRecommendation = (
  character: Character,
  style: GameStyle,
): IntelligentRecommendation => {
  const label = formatStyleLabel(style);

  const reasoning: RecommendationReasoning = {
    primary: `${character.name} ${label} builds are still being curated.`,
    statSynergy: [],
    scenarioExplanation: 'Verified data from the official wiki and community testing is still in progress.',
    numericalBenefits: [],
    tradeoffs: ['No placeholder loadout is shown to avoid misleading players.'],
  };

  const effectiveness: RecommendationEffectiveness = {
    overall: 1,
    damage: 1,
    survival: 1,
    utility: 1,
    teamSupport: 1,
    soloPlay: 1,
    highFloor: 1,
  };

  const teamCompatibility: TeamCompatibility = {
    worksWellWith: [],
    conflictsWith: [],
    teamRoles: [],
    compositionNotes: 'Awaiting verified recommendations.',
  };

  const metaAnalysis: MetaAnalysis = {
    popularity: 0,
    winRate: 0,
    tier: 'C',
    metaPosition: 'Under construction',
    counterStrategies: [],
    strengths: [],
    weaknesses: [],
  };

  const progressionPath: ProgressionPath = {
    current: 'Data pending',
    next: 'Data pending',
    final: 'Data pending',
    steps: [],
    estimatedTime: 'TBD',
    resourceRequirements: [],
  };

  return {
    id: `${character.id}-${style}-pending`,
    name: `${character.name} ${label} build coming soon`,
    trinkets: [],
    reasoning,
    effectiveness,
    difficulty: 'beginner',
    scenarios: [],
    metaTags: [style, 'under-construction'],
    confidence: 1,
    alternatives: [],
    acquisition: {
      requirements: [],
      estimatedCost: 'TBD',
      priority: 'medium',
      alternatives: [],
      unlockSequence: [],
    },
    teamCompatibility,
    metaAnalysis,
    progressionPath,
  };
};

const findCuratedEntry = (
  characterId: string,
  targetStyle: GameStyle,
): CharacterBuildsByStyle | undefined =>
  curatedTrinketBuilds.find(
    (entry) => entry.characterId === characterId && entry.style === targetStyle,
  );

const resolveStyle = (style?: string): GameStyle => {
  if (style === 'extractor' || style === 'distractor' || style === 'support' || style === 'balanced') {
    return style;
  }
  return 'balanced';
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
  const style = resolveStyle(playstyle);
  const curated = findCuratedEntry(character.id, style);

  if (curated && curated.builds.length > 0) {
    return curated.builds.slice(0, Math.max(1, limit));
  }

  return [createUnderConstructionRecommendation(character, style)];
};

export const getRecommendationForPlaystyle = (
  playstyle: string,
  limit = 3,
): IntelligentRecommendation[] => {
  const style = resolveStyle(playstyle);

  const curated = curatedTrinketBuilds
    .filter((entry) => entry.style === style)
    .flatMap((entry) => entry.builds);

  if (curated.length > 0) {
    return curated.slice(0, Math.max(1, limit));
  }

  const placeholderCharacter: Character = {
    id: `style-${style}`,
    name: STYLE_LABEL[style],
    fullName: STYLE_LABEL[style],
    type: 'regular',
    rarity: 'common',
    isMainCharacter: false,
    totalAttributePoints: 0,
    image: '',
    abilities: {
      active: {
        name: '',
        description: '',
        cooldown: '',
        detailedDescription: '',
        howItWorks: '',
        bestUsage: '',
        visualEffects: '',
      },
      passive: {
        name: '',
        description: '',
        detailedDescription: '',
        howItWorks: '',
        strategicValue: '',
      },
    },
    unlockRequirements: {
      ichorCost: 0,
      researchRequirements: [],
      taskCompletion: [],
      prerequisites: [],
    },
    features: {
      hasRainbowBorder: false,
      hasUniqueVoiceLines: false,
      voiceEffect: '',
      characterRelations: [],
    },
    description: '',
    overview: '',
    gameplay: {
      strengths: [],
      weaknesses: [],
      bestStrategy: '',
      teamRole: '',
    },
  };

  return [createUnderConstructionRecommendation(placeholderCharacter, style)];
};
