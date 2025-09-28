export type ResearchPriority = 'high' | 'medium' | 'low';
export type UnlockTimeline = 'immediate' | 'short_term' | 'long_term';
export type RequirementType = 'research' | 'mastery' | 'ichor' | 'encounter' | 'special';
export type MasteryRewardType = 'cosmetic' | 'trinket' | 'character_unlock' | 'lore';

export interface ResearchProgress {
  twistedId: string;
  currentProgress: number;
  targetProgress: number;
  encountersNeeded: number;
  timeEstimate: string;
  priority: ResearchPriority;
  unlocksBenefit: string;
  lastUpdated: Date;
}

export interface UnlockRequirement {
  type: RequirementType;
  target: string;
  currentProgress: number;
  maxProgress: number;
  description: string;
  completed: boolean;
}

export interface CharacterUnlockPath {
  characterId: string;
  currentStep: number;
  totalSteps: number;
  requirements: UnlockRequirement[];
  estimatedTime: string;
  ichorCost: number;
  priority: UnlockTimeline;
  benefits: string[];
  blockedBy: string[];
}

export interface MasteryReward {
  level: number;
  type: MasteryRewardType;
  item: string;
  description: string;
  unlocked: boolean;
}

export interface MasteryProgress {
  characterId: string;
  currentLevel: number;
  maxLevel: number;
  currentExp: number;
  expToNext: number;
  completedTasks: string[];
  availableTasks: string[];
  rewards: MasteryReward[];
}

export interface UserProgressProfile {
  playerId: string;
  totalPlaytime: number;
  researchProgress: ResearchProgress[];
  masteryProgress: MasteryProgress[];
  unlockedCharacters: string[];
  unlockedTrinkets: string[];
  currentIchor: number;
  preferredGoals: string[];
  lastActive: Date;
}
