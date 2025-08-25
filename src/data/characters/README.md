# 角色数据结构说明

## 📁 文件组织

按照**方案1（按类型分离）**重构，提高代码可维护性：

```
src/data/characters/
├── main-characters.ts      # 主角角色 (Dandy, Dyle, Vee, Astro等)
├── regular-characters.ts   # 普通角色
├── event-characters.ts     # 活动角色 (圣诞、复活节等)
├── lethal-characters.ts    # 致命角色 (反派)
├── twisted-characters.ts   # Twisted角色 (已存在)
├── index.ts               # 统一导出
└── README.md              # 本说明文档
```

## 🔄 重构优势

### **维护性提升**
- **按类型分离** - 每个文件职责清晰
- **易于扩展** - 新增角色类型只需添加对应文件
- **团队协作** - 不同开发者可并行工作

### **代码组织**
- **统一入口** - `index.ts` 合并所有角色数据
- **类型安全** - 保持完整的TypeScript类型定义
- **向后兼容** - 现有导入路径无需大改

## 📝 使用方式

### **导入所有角色**
```typescript
import { characters } from '../data/characters';
```

### **导入特定类型角色**
```typescript
import { mainCharacters } from '../data/characters';
import { regularCharacters } from '../data/characters';
import { eventCharacters } from '../data/characters';
import { lethalCharacters } from '../data/characters';
```

## 🎯 详细指南优化

### **内容精简原则**
- **突出重点** - 避免废话，快速传达关键信息
- **添加提示** - 在推断内容前加"*基于角色描述推断，具体效果以游戏实际表现为准*"
- **结构清晰** - 使用简洁明了的表达

### **示例格式**
```typescript
detailedGuide: {
  abilityMechanics: {
    active: {
      detailedDescription: "核心效果描述。*基于角色描述推断，具体效果以游戏实际表现为准*",
      howItWorks: "简洁的机制说明",
      bestUsage: "关键使用建议",
      visualEffects: "重要视觉效果"
    }
  }
}
```

### **已完成的角色详细指南**
✅ **主要角色 (main-characters.ts)**
- Vee - 情报和侦察专家
- Astro - 支援和潜行专家  
- Dandy - 全能型角色，适应性强
- Dyle - 高速移动专家，游击战术
- Brightney - 治疗和支援专家
- Clown - 混乱制造者，高风险高回报

✅ **普通角色 (regular-characters.ts)**
- Cosmo - 治疗专家，资源管理
- Tisha - 支援和清理专家

✅ **活动角色 (event-characters.ts)**
- Coal - 区域控制和支援专家

✅ **致命角色 (lethal-characters.ts)**
- Dandy-lethal - 终极猎手，恐惧制造
- Dyle-lethal - 待添加详细指南

## 🚀 后续开发

### **添加新角色**
1. 确定角色类型
2. 在对应文件中添加数据
3. 确保 `index.ts` 正确导出

### **修改现有角色**
1. 找到对应类型文件
2. 修改角色数据
3. 测试构建是否成功

### **添加新类型**
1. 创建新的类型文件
2. 在 `index.ts` 中导入和导出
3. 更新类型定义（如需要）

### **完善剩余角色详细指南**
- [ ] 为剩余普通角色添加详细指南
- [ ] 为剩余活动角色添加详细指南
- [ ] 为Dyle-lethal添加详细指南
- [ ] 为Twisted角色添加详细指南

## ✅ 验证

- [x] 构建成功 (`npm run build`)
- [x] 导入路径更新
- [x] 类型定义完整
- [x] 向后兼容性保持
- [x] 主要角色详细指南完成
- [x] 部分普通角色详细指南完成
- [x] 部分活动角色详细指南完成
- [x] 部分致命角色详细指南完成
