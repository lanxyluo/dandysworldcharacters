export type ResearchPriority = 'high' | 'medium' | 'low';
export type UnlockTimeline = 'immediate' | 'short_term' | 'long_term';
export type RequirementType = 'research' | 'mastery' | 'ichor' | 'encounter' | 'special';
export type MasteryRewardType = 'cosmetic' | 'trinket' | 'character_unlock' | 'lore';
export type MasteryTaskType =
  | 'ability'
  | 'extraction'
  | 'collection'
  | 'survival'
  | 'utility'
  | 'movement'
  | 'combat'
  | 'environmental';

export interface MasteryTaskDefinition {
  id: string;
  description: string;
  target: number;
  type: MasteryTaskType;
  unit?: string;
}

export interface CharacterMasteryData {
  characterId: string;
  totalTasks: number;
  tasks: MasteryTaskDefinition[];
  rewardSummary: string;
  unlocks: string[];
}

export interface ResearchProgress {
  twistedId: string;
  currentProgress: number;
  targetProgress: number;
  encountersNeeded: number;
  timeEstimate: string;
  priority: ResearchPriority;
  unlockBenefits: string[];
  lastUpdated: Date;
}

export interface UnlockRequirement {
  type: RequirementType;
  target: string;
  currentProgress: number;
  maxProgress: number;
  description: string;
  completed: boolean;
  readyNote?: string;
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

export interface MasteryTaskProgress {
  description: string;
  current: number;
  target: number;
  status: 'complete' | 'in_progress';
  note?: string;
}

export interface MasteryProgress {
  characterId: string;
  currentLevel: number;
  maxLevel: number;
  currentExp: number;
  expToNext: number;
  completedTasks: MasteryTaskProgress[];
  availableTasks: MasteryTaskProgress[];
  rewards: MasteryReward[];
  rewardSummary?: string;
  unlockTargets?: string[];
}

export interface SpecialEncounterProgress {
  id: string;
  encountered: boolean;
  note?: string;
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
  specialEncounters?: SpecialEncounterProgress[];
}
