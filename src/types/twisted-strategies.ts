export type TwistedThreatLevel = 'low' | 'medium' | 'high' | 'extreme';
export type TwistedSpeedRating = 'very_slow' | 'slow' | 'normal' | 'fast' | 'very_fast';
export type TwistedRarity = 'common' | 'uncommon' | 'rare' | 'main' | 'lethal';

export interface TwistedStrategyProfile {
  twistedId: string;
  name: string;
  rarity: TwistedRarity;
  threat_level: TwistedThreatLevel;
  speed: TwistedSpeedRating;
  special_abilities: string[];
  identification: {
    visual_cues: string[];
    audio_cues: string[];
    spawn_conditions: string[];
  };
  strategies: {
    avoidance: string[];
    if_spotted: string[];
    team_coordination: string[];
  };
  common_mistakes: string[];
  counters: string[];
  difficulty_rating: number;
}
