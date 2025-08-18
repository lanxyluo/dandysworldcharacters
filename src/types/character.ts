export interface Character {
  id: string;
  name: string;
  fullName: string;
  type: 'main' | 'regular';
  rarity: 'legendary' | 'common';
  image: string;
  description: string;
  stats: {
    hearts: number;
    skillCheck: number;
    movementSpeed: number;
    stamina: number;
    stealth: number;
    extractionSpeed: number;
  };
  abilities: {
    active?: {
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
    ichor: number;
    research?: string;
    mastery?: string;
    other?: string[];
    note?: string;
  };
}
