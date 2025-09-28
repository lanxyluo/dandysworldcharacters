import { Character } from '../../types/character';
import { mainCharacters } from './main-characters';
import { commonCharacters } from './common-characters';
import { uncommonCharacters } from './uncommon-characters';
import { rareCharacters } from './rare-characters';
import { eventCharacters } from './event-characters';
import { lethalCharacters } from './lethal-characters';
import { twistedCharacters } from './twisted-characters';

export { mainCharacters } from './main-characters';
export { commonCharacters } from './common-characters';
export { uncommonCharacters } from './uncommon-characters';
export { rareCharacters } from './rare-characters';
export { eventCharacters } from './event-characters';
export { lethalCharacters } from './lethal-characters';
export { twistedCharacters } from './twisted-characters';

export type { Character } from '../../types/character';

const collections = [
  mainCharacters,
  commonCharacters,
  uncommonCharacters,
  rareCharacters,
  eventCharacters,
  lethalCharacters,
  twistedCharacters,
];

export const getAllCharacters = (): Character[] => {
  const registry = new Map<string, Character>();
  for (const group of collections) {
    for (const character of group) {
      if (!registry.has(character.id)) {
        registry.set(character.id, character);
      }
    }
  }
  return Array.from(registry.values());
};

export const getCharacterById = (id: string): Character | undefined => {
  return getAllCharacters().find((character) => character.id === id);
};

export const getCharactersByType = (type: Character['type']): Character[] => {
  return getAllCharacters().filter((character) => character.type === type);
};

export const getCharactersByRarity = (rarity: Character['rarity']): Character[] => {
  return getAllCharacters().filter((character) => character.rarity === rarity);
};

export const getCharacterStats = () => {
  const all = getAllCharacters();
  const byType = all.reduce<Record<Character['type'], number>>((acc, character) => {
    acc[character.type] = (acc[character.type] ?? 0) + 1;
    return acc;
  }, { main: 0, regular: 0, event: 0, lethal: 0, twisted: 0, toon: 0 });

  const byRarity = all.reduce<Record<Character['rarity'], number>>((acc, character) => {
    acc[character.rarity] = (acc[character.rarity] ?? 0) + 1;
    return acc;
  }, { common: 0, uncommon: 0, rare: 0, legendary: 0, twisted: 0 });

  return {
    total: all.length,
    byType,
    byRarity,
  };
};

export const getRarityDistribution = () => {
  const stats = getCharacterStats();
  const { total, byRarity } = stats;
  return Object.entries(byRarity).map(([rarity, count]) => ({
    rarity,
    count,
    percentage: total === 0 ? 0 : Math.round((count / total) * 100),
  }));
};
