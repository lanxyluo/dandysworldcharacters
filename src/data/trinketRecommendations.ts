import { trinkets, Trinket } from './trinkets';
import { enhancedTrinkets } from './enhancedTrinkets';
import { getAllCharacters } from './characters';
import { Character } from '../types/character';

// TODO: update
export interface TrinketRecommendation {
  trinket: Trinket;
  score: number;
  reasons: string[];
  synergies: string[];
  warnings: string[];
}

export interface BuildRecommendation {
  primary: TrinketRecommendation;
  secondary: TrinketRecommendation;
  tertiary: TrinketRecommendation;
  totalScore: number;
  buildType: 'offensive' | 'defensive' | 'balanced' | 'specialized';
  description: string;
  synergies: string[];
}

export interface CharacterBuildProfile {
  characterId: string;
  characterType: string;
  playstyle: 'aggressive' | 'defensive' | 'support' | 'hybrid';
  preferredStats: string[];
  avoidStats: string[];
  buildPreferences: {
    offensive: number; // 0-100
    defensive: number; // 0-100
    utility: number; // 0-100
  };
}

export interface EnhancedTrinketRecommendation {
  id: string;
  characterId: string;
  trinketIds: [string, string];
  trinkets: [TrinketRecommendation, TrinketRecommendation];
  strategy: 'speed' | 'extraction' | 'survival' | 'balanced';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  reasons: string[];
  warnings: string[];
  popularityScore: number;
  gameMode: 'normal' | 'dandy-run' | 'main-run';
  communityRating: number;
  usageRate: number;
}

interface RecommendationSeed {
  id: string;
  characterId: string;
  trinketIds: [string, string];
  strategy: 'speed' | 'extraction' | 'survival' | 'balanced';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  reasons: string[];
  warnings: string[];
  popularityScore: number;
  gameMode: 'normal' | 'dandy-run' | 'main-run';
}

const knownCharacterIds = new Set(getAllCharacters().map((character) =>Translation pending<string, CharacterBuildProfile>Translation pending<'offensive' | 'defensive' | 'balanced' | 'specialized'>Translation pending<string, string[]>Translation pending< 3) {
    recommendations.push('Translation pending');
  }
  
  return { synergies, conflicts, recommendations };
};

// TODO: update
export const getBuildProfile = (characterType: string): CharacterBuildProfile => {
  return characterBuildProfiles[characterType] || characterBuildProfiles['warrior'];
};

export const getRecommendedTrinkets = (
  character: Character,
  count: number = 5
): Trinket[] => {
  const buildProfile = getBuildProfile(character.type);
  const allTrinkets = require('./trinkets').trinkets;
  
  return allTrinkets
    .map(trinket => generateTrinketRecommendation(trinket, character, buildProfile))
    .sort((a, b) => b.score - a.score)
    .slice(0, count)
    .map(rec => rec.trinket);
};