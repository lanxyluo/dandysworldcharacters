import type { UserProgressProfile } from '../types/progress-tracking';

const STORAGE_KEY = 'dandys-world-progress';

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
}
