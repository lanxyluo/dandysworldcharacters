import { 
  getCharacterStats, 
  getRarityDistribution, 
  getDifficultyCategories, 
  getAbilityCategories,
  getCharactersByRarity,
  getCharactersByRaritySorted
} from '../data/characters';

// 测试稀有度系统
export const testRaritySystem = () => {
  console.log('=== 稀有度系统测试 ===');
  
  // 获取基本统计
  const stats = getCharacterStats();
  console.log('总角色数:', stats.total);
  console.log('正常角色数:', stats.normal);
  console.log('扭曲角色数:', stats.twisted);
  
  // 按类型统计
  console.log('\n=== 按类型统计 ===');
  console.log('Toons:', stats.byType.toon);
  console.log('Main Characters:', stats.byType.main);
  console.log('Regular Characters:', stats.byType.regular);
  console.log('Event Characters:', stats.byType.event);
  console.log('Lethal Characters:', stats.byType.lethal);
  console.log('Twisted Characters:', stats.byType.twisted);
  
  // 按稀有度统计
  console.log('\n=== 按稀有度统计 ===');
  console.log('Common:', stats.byRarity.common);
  console.log('Uncommon:', stats.byRarity.uncommon);
  console.log('Rare:', stats.byRarity.rare);
  console.log('Legendary:', stats.byRarity.legendary);
  console.log('Twisted:', stats.byRarity.twisted);
  
  // 稀有度分布
  const rarityDist = getRarityDistribution();
  console.log('\n=== 稀有度分布百分比 ===');
  console.log('Common:', rarityDist.common.percentage + '%');
  console.log('Uncommon:', rarityDist.uncommon.percentage + '%');
  console.log('Rare:', rarityDist.rare.percentage + '%');
  console.log('Legendary:', rarityDist.legendary.percentage + '%');
  console.log('Twisted:', rarityDist.twisted.percentage + '%');
  
  // 获取难度分类
  const difficulty = getDifficultyCategories();
  console.log('\n=== 获取难度分类 ===');
  console.log('Starter:', difficulty.starter.count, '-', difficulty.starter.description);
  console.log('Easy:', difficulty.easy.count, '-', difficulty.easy.description);
  console.log('Medium:', difficulty.medium.count, '-', difficulty.medium.description);
  console.log('Hard:', difficulty.hard.count, '-', difficulty.hard.description);
  console.log('Event Only:', difficulty.eventOnly.count, '-', difficulty.eventOnly.description);
  console.log('Research Required:', difficulty.researchRequired.count, '-', difficulty.researchRequired.description);
  console.log('Mastery Required:', difficulty.masteryRequired.count, '-', difficulty.masteryRequired.description);
  
  // 能力分类
  const abilities = getAbilityCategories();
  console.log('\n=== 能力分类 ===');
  console.log('Healers:', abilities.healers.count, '-', abilities.healers.description);
  console.log('Support:', abilities.support.count, '-', abilities.support.description);
  console.log('Stealth:', abilities.stealth.count, '-', abilities.stealth.description);
  console.log('High Damage:', abilities.highDamage.count, '-', abilities.highDamage.description);
  console.log('High Health:', abilities.highHealth.count, '-', abilities.highHealth.description);
  
  // 测试按稀有度获取角色
  console.log('\n=== 按稀有度获取角色测试 ===');
  const legendaryChars = getCharactersByRarity('legendary');
  console.log('Legendary 角色数量:', legendaryChars.length);
  console.log('Legendary 角色名称:', legendaryChars.map(c => c.name).join(', '));
  
  const rareChars = getCharactersByRarity('rare');
  console.log('Rare 角色数量:', rareChars.length);
  console.log('Rare 角色名称:', rareChars.map(c => c.name).join(', '));
  
  const uncommonChars = getCharactersByRarity('uncommon');
  console.log('Uncommon 角色数量:', uncommonChars.length);
  console.log('Uncommon 角色名称:', uncommonChars.map(c => c.name).join(', '));
  
  const commonChars = getCharactersByRarity('common');
  console.log('Common 角色数量:', commonChars.length);
  console.log('Common 角色名称:', commonChars.map(c => c.name).join(', '));
  
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
