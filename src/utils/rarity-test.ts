import { 
  getCharacterStats, 
  getRarityDistribution, 
  getDifficultyCategories, 
  getAbilityCategories,
  getCharactersByRarity,
  getCharactersByRaritySorted
} from '../data/characters';

// TODO: update
export const testRaritySystem = () => {
  console.log('Translation pending');
  
  // TODO: update
  const stats = getCharacterStats();
  console.log('Translation pending', stats.total);
  console.log('Translation pending', stats.normal);
  console.log('Translation pending', stats.twisted);
  
  // TODO: update
  console.log('Translation pending');
  console.log('Toons:', stats.byType.toon);
  console.log('Main Characters:', stats.byType.main);
  console.log('Regular Characters:', stats.byType.regular);
  console.log('Event Characters:', stats.byType.event);
  console.log('Lethal Characters:', stats.byType.lethal);
  console.log('Twisted Characters:', stats.byType.twisted);
  
  // TODO: update
  console.log('Translation pending');
  console.log('Common:', stats.byRarity.common);
  console.log('Uncommon:', stats.byRarity.uncommon);
  console.log('Rare:', stats.byRarity.rare);
  console.log('Legendary:', stats.byRarity.legendary);
  console.log('Twisted:', stats.byRarity.twisted);
  
  // TODO: update
  const rarityDist = getRarityDistribution();
  console.log('Translation pending');
  console.log('Common:', rarityDist.common.percentage + '%');
  console.log('Uncommon:', rarityDist.uncommon.percentage + '%');
  console.log('Rare:', rarityDist.rare.percentage + '%');
  console.log('Legendary:', rarityDist.legendary.percentage + '%');
  console.log('Twisted:', rarityDist.twisted.percentage + '%');
  
  // TODO: update
  const difficulty = getDifficultyCategories();
  console.log('Translation pending');
  console.log('Starter:', difficulty.starter.count, '-', difficulty.starter.description);
  console.log('Easy:', difficulty.easy.count, '-', difficulty.easy.description);
  console.log('Medium:', difficulty.medium.count, '-', difficulty.medium.description);
  console.log('Hard:', difficulty.hard.count, '-', difficulty.hard.description);
  console.log('Event Only:', difficulty.eventOnly.count, '-', difficulty.eventOnly.description);
  console.log('Research Required:', difficulty.researchRequired.count, '-', difficulty.researchRequired.description);
  console.log('Mastery Required:', difficulty.masteryRequired.count, '-', difficulty.masteryRequired.description);
  
  // TODO: update
  const abilities = getAbilityCategories();
  console.log('Translation pending');
  console.log('Healers:', abilities.healers.count, '-', abilities.healers.description);
  console.log('Support:', abilities.support.count, '-', abilities.support.description);
  console.log('Stealth:', abilities.stealth.count, '-', abilities.stealth.description);
  console.log('High Damage:', abilities.highDamage.count, '-', abilities.highDamage.description);
  console.log('High Health:', abilities.highHealth.count, '-', abilities.highHealth.description);
  
  // TODO: update
  console.log('Translation pending');
  const legendaryChars = getCharactersByRarity('legendary');
  console.log('Translation pending', legendaryChars.length);
  console.log('Translation pending', legendaryChars.map(c => c.name).join(', '));
  
  const rareChars = getCharactersByRarity('rare');
  console.log('Translation pending', rareChars.length);
  console.log('Translation pending', rareChars.map(c => c.name).join(', '));
  
  const uncommonChars = getCharactersByRarity('uncommon');
  console.log('Translation pending', uncommonChars.length);
  console.log('Translation pending', uncommonChars.map(c => c.name).join(', '));
  
  const commonChars = getCharactersByRarity('common');
  console.log('Translation pending', commonChars.length);
  console.log('Translation pending', commonChars.map(c => c.name).join(', '));
  
  return {
    stats,
    rarityDist,
    difficulty,
    abilities,
    legendaryChars,
    rareChars,
    uncommonChars,
    commonChars
  };
};