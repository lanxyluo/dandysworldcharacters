import type { UserProgressProfile } from '../types/progress-tracking';

const STORAGE_KEY = 'dandys-world-progress';
const TRACKED_CHARACTERS_KEY = 'dandys-world-tracked-characters';
const DEFAULT_TRACKED_CHARACTERS = ['brightney', 'toodles'];

const hasWindow = typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';

const reviveProfileDates = (profile: UserProgressProfile): UserProgressProfile => {
  return {
    ...profile,
    lastActive: new Date(profile.lastActive),
    researchProgress: profile.researchProgress.map((entry) => ({
      ...entry,
      lastUpdated: new Date(entry.lastUpdated),
    })),
  };
};

export class ProgressStorage {
  saveProgress(profile: UserProgressProfile): void {
    if (!hasWindow) {
      return;
    }

    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
    } catch (error) {
      console.warn('Failed to save progress:', error);
    }
  }

  loadProgress(): UserProgressProfile | null {
    if (!hasWindow) {
      return null;
    }

    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        return null;
      }

      const parsed = JSON.parse(stored) as UserProgressProfile;
      return reviveProfileDates(parsed);
    } catch (error) {
      console.warn('Failed to load progress:', error);
      return null;
    }
  }

  updateResearchProgress(twistedId: string, newProgress: number): void {
    const profile = this.loadProgress();
    if (!profile) {
      return;
    }

    const research = profile.researchProgress.find((entry) => entry.twistedId === twistedId);
    if (research) {
      research.currentProgress = Math.min(100, Math.max(0, newProgress));
      research.lastUpdated = new Date();
    }
    this.saveProgress(profile);
  }

  updateMasteryProgress(characterId: string, level: number, currentExp: number): void {
    const profile = this.loadProgress();
    if (!profile) {
      return;
    }

    const mastery = profile.masteryProgress.find((entry) => entry.characterId === characterId);
    if (mastery) {
      mastery.currentLevel = Math.min(level, mastery.maxLevel);
      mastery.currentExp = currentExp;
      mastery.expToNext = Math.max(0, mastery.maxLevel * 100 - currentExp);
    }

    this.saveProgress(profile);
  }

  loadTrackedCharacters(): string[] {
    if (!hasWindow) {
      return DEFAULT_TRACKED_CHARACTERS;
    }

    try {
      const stored = window.localStorage.getItem(TRACKED_CHARACTERS_KEY);
      if (!stored) {
        return DEFAULT_TRACKED_CHARACTERS;
      }

      const parsed = JSON.parse(stored) as string[];
      if (!Array.isArray(parsed) || parsed.length === 0) {
        return DEFAULT_TRACKED_CHARACTERS;
      }

      return parsed.filter((value): value is string => typeof value === 'string' && value.length > 0);
    } catch (error) {
      console.warn('Failed to load tracked characters:', error);
      return DEFAULT_TRACKED_CHARACTERS;
    }
  }

  updateTrackedCharacters(characterIds: string[]): void {
    if (!hasWindow) {
      return;
    }

    try {
      window.localStorage.setItem(TRACKED_CHARACTERS_KEY, JSON.stringify(characterIds));
    } catch (error) {
      console.warn('Failed to persist tracked characters:', error);
    }

    const profile = this.loadProgress();
    if (profile) {
      this.saveProgress(profile);
    }
  }
}
