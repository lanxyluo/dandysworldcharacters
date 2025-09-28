export type CharacterType = 'toon' | 'main' | 'regular' | 'event' | 'lethal' | 'twisted';
export type Rarity = 'common' | 'uncommon' | 'rare' | 'legendary' | 'twisted';

export interface Character {
  id: string;
  name: string;
  fullName: string;
  type: CharacterType;
  rarity: Rarity;
  isMainCharacter: boolean;
  totalAttributePoints: number;
  image: string; // TODO: update
  
  // TODO: update
  attributes?: {
    health: number;
    skillCheck: number;
    movementSpeed: number;
    stamina: number;
    stealth: number;
    extractionSpeed: number;
  };
  
  // TODO: update
  stats?: {
    [key: string]: number;
  };
  
  abilities: {
    active: {
      name: string;
      description: string;
      cooldown: string;
      detailedDescription: string;
      howItWorks: string;
      bestUsage: string;
      visualEffects: string;
    };
    passive: {
      name: string;
      description: string;
      detailedDescription: string;
      howItWorks: string;
      strategicValue: string;
    };
  };
  
  unlockRequirements: {
    ichorCost: number;
    researchRequirements: string[];
    taskCompletion: string[];
    prerequisites: string[];
    specialCurrency?: {
      type: string;
      amount: number;
    };
  };
  
  // TODO: update
  requirements?: {
    ichor?: number;
    ornaments?: number;
    baskets?: number;
    research?: string;
    mastery?: string;
    other?: string[];
    note?: string;
  };
  
  features: {
    hasRainbowBorder: boolean;
    hasUniqueVoiceLines: boolean;
    voiceEffect: string;
    characterRelations: string[];
    lightProducing?: boolean;
    lightColor?: string;
  };
  
  description: string;
  overview: string;
  gameplay: {
    strengths: string[];
    weaknesses: string[];
    bestStrategy: string;
    teamRole: string;
  };
  
  // TODO: update
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
