import { IntelligentRecommendation } from '../types/trinketOptimizer';
import { trinkets } from '../data/trinkets';

export interface ValidationResult {
  isValid: boolean;
  issues: string[];
  warnings: string[];
}

export class TrinketDataValidator {
  static validateRecommendation(recommendation: IntelligentRecommendation): ValidationResult {
    const issues: string[] = [];

    recommendation.trinkets.forEach((trinket) => {
      if (!trinkets.find((entry) => entry.id === trinket.id)) {
        issues.push(`Trinket ${trinket.id} is missing from the base dataset.`);
      }
    });

    if (recommendation.effectiveness.overall > 5 || recommendation.effectiveness.overall < 1) {
      issues.push(`总体评分 ${recommendation.effectiveness.overall} 超出合理范围 [1-5]`);
    }

    return {
      isValid: issues.length === 0,
      issues,
      warnings: this.generateWarnings(recommendation),
    };
  }

  private static generateWarnings(recommendation: IntelligentRecommendation): string[] {
    const warnings: string[] = [];

    const cost = recommendation.acquisition.estimatedCost;
    if (cost.includes('2750') && recommendation.difficulty === 'beginner') {
      warnings.push('High-cost trinkets should not be tagged as beginner difficulty.');
    }

    return warnings;
  }
}
