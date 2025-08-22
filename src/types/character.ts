export type CharacterType = 'toon' | 'main' | 'regular' | 'event' | 'lethal' | 'twisted';
export type Rarity = 'common' | 'uncommon' | 'rare' | 'legendary' | 'main' | 'lethal' | 'twisted';

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
  twistedVersion?: string; // 对应的扭曲版本ID
  originalVersion?: string; // 原始版本ID (用于扭曲角色)
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
