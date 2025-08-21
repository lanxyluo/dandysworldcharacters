export interface Twisted {
  id: string;
  name: string;
  type: 'hunter' | 'patrol' | 'special' | 'boss';
  dangerLevel: 'low' | 'medium' | 'high' | 'extreme';
  speed: number; // 1-5 scale
  attentionSpan: number; // 1-5 scale
  specialAbilities: string[];
  appearance: string[];
  identificationTips: string[];
  avoidanceStrategies: string[];
  warnings: string[];
  image: string; // emoji representation
  description: string;
  spawnLocations: string[];
  behavior: string;
}
