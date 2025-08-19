export interface Character {
  id: string;
  name: string;
  fullName: string;
  type: 'main' | 'regular' | 'event';
  rarity: 'common' | 'legendary';
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
    ornaments?: number;
    baskets?: number;
    ichor?: number;
    research?: string;
    note?: string;
    other?: string[];
    mastery?: string;
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
