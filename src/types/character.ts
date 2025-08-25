export type CharacterType = 'toon' | 'main' | 'regular' | 'event' | 'lethal' | 'twisted';
export type Rarity = 'common' | 'uncommon' | 'rare' | 'legendary' | 'twisted';

export interface Character {
  id: string;
  name: string;
  fullName?: string;
  image: string;
  type: CharacterType;
  rarity: Rarity;
  description: string;
  stats: {
    skillCheck: number;
    stealth: number;
    speed: number;
    health: number;
    damage: number;
  };
  abilities: {
    active: {
      name: string;
      description: string;
      cooldown: number;
    };
    passive: {
      name: string;
      description: string;
    };
  };
  requirements: {
    ichor?: number;
    ornaments?: number;
    baskets?: number;
    research?: string;
    mastery?: string;
    other?: string[];
    note?: string;
  };
  twistedVersion?: string;
  
  // 新增详细说明字段
  detailedGuide?: {
    abilityMechanics: {
      active: {
        detailedDescription: string;
        howItWorks: string;
        bestUsage: string;
        visualEffects: string;
      };
      passive: {
        detailedDescription: string;
        howItWorks: string;
        strategicValue: string;
      };
    };
    strategies: {
      playingAs: {
        overview: string;
        tips: string[];
        commonMistakes: string[];
        advancedTechniques: string[];
      };
      playingAgainst: {
        overview: string;
        counterStrategies: string[];
        whatToAvoid: string[];
        teamComposition: string[];
      };
    };
    interactions: {
      synergies: {
        description: string;
        bestPartners: Array<{
          character: string;
          reason: string;
          combo: string;
        }>;
      };
      counters: {
        description: string;
        strongAgainst: Array<{
          character: string;
          reason: string;
        }>;
        weakAgainst: Array<{
          character: string;
          reason: string;
        }>;
      };
    };
    scenarios: {
      bestMaps: string[];
      bestSituations: string[];
      challengingSituations: string[];
      teamRoles: string[];
    };
  };
}

export interface CharacterSelectorProps {
  characters: Character[];
  selectedCharacters: Character[];
  onAddCharacter: (character: Character) => void;
  onRemoveCharacter: (characterId: string) => void;
  onClearAll: () => void;
}

export interface ComparisonTableProps {
  characters: Character[];
}
