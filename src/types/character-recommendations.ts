export type RecommendationDifficulty = 'beginner' | 'intermediate' | 'advanced';
export type RecommendationRole = 'extractor' | 'distractor' | 'support' | 'hybrid';
export type UnlockPriority = 'immediate' | 'short_term' | 'long_term';

export interface CharacterRecommendation {
  characterId: string;
  recommendationScore: number; // 0-100
  reasons: string[];
  warnings: string[];
  difficulty: RecommendationDifficulty;
  role: RecommendationRole;
  teamFit: string[];
  unlockPriority: UnlockPriority;
}

export interface TeamAnalysis {
  strengths: string[];
  weaknesses: string[];
  missingRoles: string[];
  recommendations: string[];
  synergies: string[];
  conflicts: string[];
}

export interface UserPreferences {
  experience: 'new' | 'some_experience' | 'experienced';
  preferred_playstyle: 'aggressive' | 'cautious' | 'support' | 'flexible';
  team_size: number;
  current_team?: string[];
  available_ichor: number;
  unlocked_characters: string[];
  preferred_floors: 'early' | 'mid' | 'late' | 'all';
}
