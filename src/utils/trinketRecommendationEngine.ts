import { enhancedTrinkets } from '../data/enhancedTrinkets';
import { gameSpecificRecommendations, EnhancedTrinketRecommendation } from '../data/trinketRecommendations';

export type PlayerExperience = 'beginner' | 'intermediate' | 'advanced';
export type SupportedGameMode = 'normal' | 'dandy-run' | 'main-run';

export interface RecommendationOptions {
  characterId: string;
  userExperience: PlayerExperience;
  ownedTrinkets?: string[];
  gameMode?: SupportedGameMode;
}

interface ScoredRecommendation extends EnhancedTrinketRecommendation {
  weightedScore: number;
}

const usageRateToFraction = (rate: number): number => {
  return rate > 1 ? rate / 100 : rate;
};

const clamp = (value: number, min: number, max: number): number => {
  return Math.min(Math.max(value, min), max);
};

export class TrinketRecommendationEngine {
  private readonly recommendations = gameSpecificRecommendations;
  private readonly enhanced = enhancedTrinkets;

  getRecommendations(options: RecommendationOptions): EnhancedTrinketRecommendation[] {
    const { characterId, userExperience, ownedTrinkets = [], gameMode = 'normal' } = options;

    const scored = this.recommendations
      .filter((recommendation) => {
        if (recommendation.characterId !== characterId) {
          return false;
        }

        if (gameMode !== 'normal' && recommendation.gameMode !== 'normal' && recommendation.gameMode !== gameMode) {
          return false;
        }

        if (userExperience === 'beginner' && recommendation.difficulty === 'advanced') {
          return false;
        }

        return true;
      })
      .map<ScoredRecommendation>((recommendation) => {
        const ownedPenalty = this.calculateOwnershipPenalty(recommendation, ownedTrinkets);
        const experienceBoost = userExperience === recommendation.difficulty ? 1.1 : 1;
        const popularity = recommendation.popularityScore / 100;
        const community = clamp(recommendation.communityRating / 5, 0, 1);
        const usage = usageRateToFraction(recommendation.usageRate);

        const baseScore = (popularity * 0.5 + community * 0.25 + usage * 0.25) * 100;
        const weightedScore = baseScore * experienceBoost * ownedPenalty;

        return {
          ...recommendation,
          weightedScore,
        };
      })
      .sort((a, b) => b.weightedScore - a.weightedScore)
      .slice(0, 6)
      .map(({ weightedScore, ...rest }) => rest);

    return scored;
  }

  getTrinketDetails(trinketId: string) {
    return this.enhanced.find((trinket) => trinket.id === trinketId);
  }

  getPopularCombinations(characterId: string) {
    return this.recommendations
      .filter((recommendation) => recommendation.characterId === characterId)
      .map((recommendation) => ({
        trinkets: recommendation.trinketIds,
        usageRate: recommendation.usageRate,
        synergy: this.calculateSynergy(recommendation.trinketIds),
      }))
      .sort((a, b) => b.usageRate - a.usageRate);
  }

  private calculateOwnershipPenalty(recommendation: EnhancedTrinketRecommendation, ownedTrinkets: string[]): number {
    if (!ownedTrinkets.length) {
      return 1;
    }

    const ownedCount = recommendation.trinketIds.filter((id) => ownedTrinkets.includes(id)).length;

    if (ownedCount === recommendation.trinketIds.length) {
      return 1.1;
    }

    if (ownedCount === 1) {
      return 0.9;
    }

    return 0.75;
  }

  private calculateSynergy([firstId, secondId]: [string, string]): string {
    const first = this.getTrinketDetails(firstId);
    const second = this.getTrinketDetails(secondId);

    if (!first || !second) {
      return 'Translation pending';
    }

    const commonTags = first.metaTags.filter((tag) => second.metaTags.includes(tag));
    const sharedSynergies = first.synergies?.filter((id) => second.synergies?.includes(id)) ?? [];

    if (sharedSynergies.length) {
      return `Translation pending`;
    }

    if (commonTags.length) {
      return `Translation pending`;
    }

    return 'Translation pending';
  }
}

export default TrinketRecommendationEngine;
