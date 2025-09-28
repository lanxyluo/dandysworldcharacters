import { Character } from '../types/character';
import { getAllCharacters } from './characters';

export interface RecommendationEngineConfig {
  weightings: Record<string, number>;
}

export const defaultEngineConfig: RecommendationEngineConfig = {
  weightings: {
    balance: 1,
  },
};

export interface IntelligentRecommendation {
  characterId: string;
  name: string;
  summary: string;
  score: number;
}

export const getIntelligentRecommendations = (
  character: Character,
  playstyle?: string,
  limit = 3,
): IntelligentRecommendation[] => {
  return [
    {
      characterId: character.id,
      name: character.name,
      summary: `Recommendation data (${playstyle || 'balanced'}) is being refreshed for the English release.`,
      score: 75,
    },
    ...getAllCharacters()
      .filter((entry) => entry.id !== character.id)
      .slice(0, Math.max(0, limit - 1))
      .map((entry, index) => ({
        characterId: entry.id,
        name: entry.name,
        summary: `Placeholder recommendation for ${playstyle || 'general'}.`,
        score: 65 - index * 5,
      })),
  ];
};

export const getRecommendationForPlaystyle = (playstyle: string): IntelligentRecommendation[] => {
  return getAllCharacters().slice(0, 3).map((character, index) => ({
    characterId: character.id,
    name: character.name,
    summary: `Placeholder recommendation for ${playstyle}.`,
    score: 60 - index * 5,
  }));
};
