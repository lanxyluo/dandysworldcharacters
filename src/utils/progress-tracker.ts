import { getAllCharacters } from '../data/characters';
import { twistedStrategies } from '../data/twisted-strategies';
import type { Character } from '../types/character';
import type {
  CharacterUnlockPath,
  UnlockRequirement,
  UserProgressProfile,
  UnlockTimeline,
} from '../types/progress-tracking';
import { getCharacterStat } from './character-recommender';

type TwistedId = string;

const getIchorCost = (character: Character): number => {
  if (character.unlockRequirements?.ichorCost != null) {
    return character.unlockRequirements.ichorCost;
  }

  if (character.requirements?.ichor != null) {
    return character.requirements.ichor;
  }

  return 0;
};

export class ProgressTracker {
  private readonly characters: Character[] = getAllCharacters();

  calculateUnlockPath(characterId: string, profile: UserProgressProfile): CharacterUnlockPath {
    const character = this.characters.find((entry) => entry.id === characterId);
    if (!character) {
      throw new Error(`Character not found: ${characterId}`);
    }

    const requirements: UnlockRequirement[] = [];

    const pushRequirement = (requirement: UnlockRequirement) => {
      requirements.push(requirement);
    };

    switch (characterId) {
      case 'vee':
        pushRequirement({
          type: 'mastery',
          target: 'brightney',
          currentProgress: this.getMasteryPercentage(profile, 'brightney'),
          maxProgress: 100,
          description: 'Complete Brightney Mastery (100%)',
          completed: this.getMasteryPercentage(profile, 'brightney') >= 100,
        });
        pushRequirement({
          type: 'research',
          target: 'twisted-vee',
          currentProgress: this.getResearchProgress(profile, 'twisted-vee'),
          maxProgress: 100,
          description: 'Finish Twisted Vee research (100%)',
          completed: this.getResearchProgress(profile, 'twisted-vee') >= 100,
        });
        pushRequirement({
          type: 'ichor',
          target: '10000',
          currentProgress: profile.currentIchor,
          maxProgress: 10000,
          description: 'Collect 10,000 Ichor',
          completed: profile.currentIchor >= 10000,
        });
        break;

      case 'pebble':
        pushRequirement({
          type: 'mastery',
          target: 'toodles',
          currentProgress: this.getMasteryPercentage(profile, 'toodles'),
          maxProgress: 100,
          description: 'Complete Toodles Mastery (100%)',
          completed: this.getMasteryPercentage(profile, 'toodles') >= 100,
        });
        pushRequirement({
          type: 'research',
          target: 'twisted-pebble',
          currentProgress: this.getResearchProgress(profile, 'twisted-pebble'),
          maxProgress: 100,
          description: 'Finish Twisted Pebble research (100%)',
          completed: this.getResearchProgress(profile, 'twisted-pebble') >= 100,
        });
        pushRequirement({
          type: 'ichor',
          target: '15000',
          currentProgress: profile.currentIchor,
          maxProgress: 15000,
          description: 'Collect 15,000 Ichor',
          completed: profile.currentIchor >= 15000,
        });
        break;

      case 'astro':
        pushRequirement({
          type: 'encounter',
          target: 'twisted-dandy',
          currentProgress: this.hasEncountered(profile, 'twisted-dandy') ? 1 : 0,
          maxProgress: 1,
          description: 'Encounter Twisted Dandy at least once',
          completed: this.hasEncountered(profile, 'twisted-dandy'),
        });
        pushRequirement({
          type: 'research',
          target: 'twisted-astro',
          currentProgress: this.getResearchProgress(profile, 'twisted-astro'),
          maxProgress: 100,
          description: 'Finish Twisted Astro research (100%)',
          completed: this.getResearchProgress(profile, 'twisted-astro') >= 100,
        });
        break;

      default:
        // Fallback: if the dataset contains unlockRequirements, mirror them.
        if (character.unlockRequirements) {
          const cost = character.unlockRequirements.ichorCost ?? 0;
          if (cost > 0) {
            pushRequirement({
              type: 'ichor',
              target: String(cost),
              currentProgress: profile.currentIchor,
              maxProgress: cost,
              description: `Collect ${cost.toLocaleString()} Ichor`,
              completed: profile.currentIchor >= cost,
            });
          }
        }
        break;
    }

    const totalSteps = Math.max(1, requirements.length);
    const currentStep = requirements.filter((req) => req.completed).length;

    return {
      characterId,
      currentStep,
      totalSteps,
      requirements,
      estimatedTime: this.calculateEstimatedTime(requirements),
      ichorCost: getIchorCost(character),
      priority: this.calculatePriority(requirements),
      benefits: this.getCharacterBenefits(character),
      blockedBy: requirements.filter((req) => !req.completed).map((req) => req.description),
    };
  }

  optimizeUnlockOrder(targetCharacters: string[], profile: UserProgressProfile): CharacterUnlockPath[] {
    const paths = targetCharacters.map((id) => this.calculateUnlockPath(id, profile));

    return paths.sort((a, b) => {
      const progressA = a.currentStep / a.totalSteps;
      const progressB = b.currentStep / b.totalSteps;

      if (Math.abs(progressA - progressB) > 0.3) {
        return progressB - progressA;
      }

      const weight: Record<UnlockTimeline, number> = {
        immediate: 3,
        short_term: 2,
        long_term: 1,
      };

      return weight[b.priority] - weight[a.priority];
    });
  }

  calculateResearchNeeded(twistedId: TwistedId, currentProgress: number, useRodger = false): {
    encountersNeeded: number;
    timeEstimate: string;
    strategy: string;
  } {
    const remaining = Math.max(0, 100 - currentProgress);
    const baseRate = useRodger ? 10 : 5;
    const capsuleRate = useRodger ? 2 : 1;

    const encountersNeeded = Math.ceil(remaining / baseRate);
    const capsulesNeeded = Math.ceil(remaining / capsuleRate);

    let timeEstimate: string;
    if (encountersNeeded <= 3) {
      timeEstimate = '1-2 runs';
    } else if (encountersNeeded <= 10) {
      timeEstimate = '3-5 runs';
    } else {
      timeEstimate = '5+ runs';
    }

    const strategy = useRodger
      ? `Use Rodger to halve the grind: expect ~${encountersNeeded} encounters or ${capsulesNeeded} capsules.`
      : `Standard pace: ~${encountersNeeded} encounters or ${capsulesNeeded} capsules. Bring Rodger to speed this up.`;

    return {
      encountersNeeded,
      timeEstimate,
      strategy,
    };
  }

  private getMasteryPercentage(profile: UserProgressProfile, characterId: string): number {
    const mastery = profile.masteryProgress.find((entry) => entry.characterId === characterId);
    if (!mastery || mastery.maxLevel === 0) {
      return 0;
    }
    return Math.min(100, (mastery.currentLevel / mastery.maxLevel) * 100);
  }

  private getResearchProgress(profile: UserProgressProfile, twistedId: TwistedId): number {
    const research = profile.researchProgress.find((entry) => entry.twistedId === twistedId);
    return research ? research.currentProgress : 0;
  }

  private hasEncountered(profile: UserProgressProfile, twistedId: TwistedId): boolean {
    return this.getResearchProgress(profile, twistedId) > 0;
  }

  private calculateEstimatedTime(requirements: UnlockRequirement[]): string {
    const outstanding = requirements.filter((req) => !req.completed);
    if (outstanding.length === 0) {
      return 'Ready to unlock';
    }

    const includesMastery = outstanding.some((req) => req.type === 'mastery');
    const includesResearch = outstanding.some((req) => req.type === 'research');

    if (includesMastery) {
      return '2-4 weeks (depending on task rotation)';
    }
    if (includesResearch) {
      return '3-7 days of focused farming';
    }
    return '1-3 days';
  }

  private calculatePriority(requirements: UnlockRequirement[]): UnlockTimeline {
    if (requirements.length === 0) {
      return 'immediate';
    }

    const completionRate = requirements.filter((req) => req.completed).length / requirements.length;

    if (completionRate >= 0.8) {
      return 'immediate';
    }
    if (completionRate >= 0.4) {
      return 'short_term';
    }
    return 'long_term';
  }

  private getCharacterBenefits(character: Character): string[] {
    const benefits: string[] = [];

    if (character.rarity === 'main') {
      benefits.push('Main story character with unique ability kit.');
      benefits.push('Higher stat ceiling compared with standard roster.');
    }

    if (getCharacterStat(character, 'extractionSpeed') >= 4) {
      benefits.push('Top-tier extraction specialist.');
    }

    if (getCharacterStat(character, 'movementSpeed') >= 4) {
      benefits.push('Excellent distraction runner.');
    }

    if (getCharacterStat(character, 'stealth') >= 4) {
      benefits.push('Ideal for stealth-based objectives.');
    }

    switch (character.id) {
      case 'vee':
        benefits.push('Fastest machine completion in the roster.');
        benefits.push('Locates and finishes machines instantly with actives.');
        break;
      case 'pebble':
        benefits.push('Fastest movement speed available.');
        benefits.push('Highlights items and assists team navigation.');
        break;
      case 'astro':
        benefits.push('Exceptional stealth and night vision utility.');
        benefits.push('Superior stamina management for long chases.');
        break;
      default:
        break;
    }

    return benefits;
  }
}

export const findTwistedById = (twistedId: TwistedId) => twistedStrategies.find((entry) => entry.twistedId === twistedId);
