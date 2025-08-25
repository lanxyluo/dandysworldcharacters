import { Character } from '../../types/character';
import { mainCharacters } from './main-characters';
import { regularCharacters } from './regular-characters';
import { eventCharacters } from './event-characters';
import { lethalCharacters } from './lethal-characters';
import { twistedCharacters } from '../twisted-characters';

// 合并所有角色数据
export const characters: Character[] = [
  ...mainCharacters,
  ...regularCharacters,
  ...eventCharacters,
  ...lethalCharacters,
  ...twistedCharacters
];

// 按类型导出
export { mainCharacters } from './main-characters';
export { regularCharacters } from './regular-characters';
export { eventCharacters } from './event-characters';
export { lethalCharacters } from './lethal-characters';
export { twistedCharacters } from '../twisted-characters';

// 导出类型
export type { Character } from '../../types/character';
