export interface Character {
  id: string;
  name: string;
  fullName: string;
  type: "main" | "regular" | "event" | "lethal" | "unobtainable";
  rarity: "common" | "uncommon" | "rare" | "legendary";
  isMainCharacter: boolean;
  totalAttributePoints: number;
  
  attributes: {
    health: number;
    skillCheck: number;
    movementSpeed: number;
    stamina: number;
    stealth: number;
    extractionSpeed: number;
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
}

export interface UnlockStep {
  order: number;
  character: string;
  ichorCost: number;
  cumulativeCost: number;
  requirements: string[];
  specialCurrency?: {
    type: string;
    amount: number;
  };
  estimatedDifficulty: 'Easy' | 'Medium' | 'Hard' | 'Very Hard';
  tips: string[];
}

export interface UnlockPlan {
  targetCharacters: string[];
  unlockPath: UnlockStep[];
  totalIchorNeeded: number;
  ichorDeficit: number;
  estimatedTimeToComplete: string;
  recommendations: string[];
}
