// 检查角色重复情况的脚本
const fs = require('fs');
const path = require('path');

// 读取所有角色文件
const charactersDir = path.join(__dirname, 'src/data/characters');

function countCharacters() {
  const files = [
    'main-characters.ts',
    'common-characters.ts', 
    'uncommon-characters.ts',
    'rare-characters.ts',
    'event-characters.ts',
    'lethal-characters.ts'
  ];

  let totalCount = 0;
  let characterIds = [];

  files.forEach(file => {
    const filePath = path.join(charactersDir, file);
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // 计算 export const 的数量
      const matches = content.match(/export const \w+Characters: Character\[\] = \[/g);
      if (matches) {
        console.log(`${file}: ${matches.length} character arrays`);
      }
      
      // 计算角色ID的数量
      const idMatches = content.match(/id: "([^"]+)"/g);
      if (idMatches) {
        const ids = idMatches.map(match => match.match(/id: "([^"]+)"/)[1]);
        characterIds.push(...ids);
        console.log(`${file}: ${ids.length} characters - ${ids.join(', ')}`);
        totalCount += ids.length;
      }
    }
  });

  console.log(`\nTotal characters found: ${totalCount}`);
  console.log(`Character IDs: ${characterIds.join(', ')}`);
  
  // 检查是否有重复
  const duplicates = characterIds.filter((id, index) => characterIds.indexOf(id) !== index);
  if (duplicates.length > 0) {
    console.log(`\nDuplicate IDs found: ${duplicates.join(', ')}`);
  }
  
  // 检查是否缺少某些角色
  const expectedCharacters = [
    // Main characters (7)
    'astro', 'bassie', 'bobette', 'pebble', 'shelly', 'sprout', 'vee',
    // Common characters (8) 
    'boxten', 'poppy', 'finn', 'cosmo', 'tisha', 'rodger', 'teagan', 'toodles',
    // Uncommon characters (9)
    'brightney', 'goob', 'scraps', 'glisten', 'flutter', 'looey', 'razzle_dazzle', 'shrimpo', 'gigi',
    // Rare characters (8)
    'connie', 'yatta', 'blot', 'brusha', 'flyte', 'rudie', 'rnd', 'blot_jr',
    // Event characters (4)
    'coal', 'ginger', 'cocoa', 'eggson',
    // Lethal characters (2)
    'dandy', 'dyle'
  ];
  
  const missingCharacters = expectedCharacters.filter(id => !characterIds.includes(id));
  if (missingCharacters.length > 0) {
    console.log(`\nMissing characters: ${missingCharacters.join(', ')}`);
  }
  
  return { totalCount, characterIds, missingCharacters };
}

countCharacters();
