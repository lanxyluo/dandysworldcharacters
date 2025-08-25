import { Character } from '../../types/character';
import { mainCharacters } from './main-characters';
import { regularCharacters } from './regular-characters';
import { eventCharacters } from './event-characters';
import { lethalCharacters } from './lethal-characters';

// Export all character data
export { mainCharacters } from './main-characters';
export { commonCharacters } from './common-characters';

// Export types
export type { Character } from '../../types/character';

// Utility functions
export const getAllCharacters = (): Character[] => [
  ...mainCharacters,
  ...commonCharacters
];

export const getCharacterById = (id: string): Character | undefined => {
  return getAllCharacters().find(character => character.id === id);
};

export const getCharactersByType = (type: Character['type']): Character[] => {
  return getAllCharacters().filter(character => character.type === type);
};

export const getCharactersByRarity = (rarity: Character['rarity']): Character[] => {
  return getAllCharacters().filter(character => character.rarity === rarity);
};

export const getMainCharacters = (): Character[] => mainCharacters;

export const getPlayableCharacters = (): Character[] => {
  return getAllCharacters().filter(character => 
    character.type !== "lethal" && character.type !== "unobtainable"
  );
};

export const getRegularCharacters = (): Character[] => {
  return [...commonCharacters];
};

// Character statistics
export const characterStats = {
  total: getAllCharacters().length,
  playable: getPlayableCharacters().length,
  mainCharacters: mainCharacters.length,
  regular: {
    total: getRegularCharacters().length,
    common: commonCharacters.length,
  },
  attributeSystem: {
    totalPoints: {
      mainCharacters: 16,
      regularCharacters: 15,
    },
    attributes: [
      "Health (Hearts)", 
      "Skill Check", 
      "Movement Speed", 
      "Stamina", 
      "Stealth", 
      "Extraction Speed"
    ]
  }
};

// Default export
export default {
  // Character arrays
  mainCharacters,
  commonCharacters,
  allCharacters: getAllCharacters(),
  
  // Utility functions
  getAllCharacters,
  getCharacterById,
  getCharactersByType,
  getCharactersByRarity,
  getMainCharacters,
  getPlayableCharacters,
  getRegularCharacters,
  
  // Statistics
  characterStats
};
