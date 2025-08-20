# Dandy's World Calculator

## 概述

Dandy's World Calculator 是一个综合性的游戏进度优化工具，帮助玩家计算角色解锁路径、研究进度和资源分配策略。

## 功能特性

### 1. Research Calculator (研究计算器)
- **功能**: 计算完成特定角色研究所需的楼层数和时间
- **特性**:
  - 支持Rodger加速选项（2倍研究速度）
  - 自动保存研究进度
  - 实时计算结果显示
  - 智能推荐策略

### 2. Unlock Optimizer (解锁优化器)
- **功能**: 优化角色解锁顺序，最大化资源利用效率
- **特性**:
  - 基于当前拥有的角色计算最优解锁路径
  - 考虑Ichor成本和角色优先级
  - 支持多种游戏目标（效率、快速解锁、主要角色、完成度）
  - 自动保存解锁进度

### 3. Combined Strategy (综合策略)
- **功能**: 整合所有数据，提供全面的游戏策略建议
- **特性**:
  - 结合角色拥有状态、研究进度和Ichor数量
  - 生成分步骤的策略建议
  - 优先级排序和资源需求分析
  - 自动数据同步和保存

## 数据持久化

### 本地存储
- 使用localStorage自动保存用户进度
- 支持离线使用
- 数据自动同步

### 存储内容
- 已拥有角色列表
- 当前Ichor数量
- 各角色研究进度
- 最后更新时间

## 使用方法

### 基本使用流程
1. 选择计算器类型（研究/解锁/策略）
2. 输入当前游戏状态（角色、进度、资源）
3. 设置目标参数
4. 查看计算结果和建议
5. 数据自动保存，下次访问时自动加载

### 研究计算器
1. 选择要研究的Twisted角色
2. 设置当前研究进度（0-100%）
3. 设置目标进度
4. 选择是否使用Rodger加速
5. 查看所需楼层数和时间估算

### 解锁优化器
1. 选择游戏目标（效率/速度/主要角色/完成度）
2. 设置当前Ichor数量
3. 勾选已拥有的角色
4. 查看推荐解锁顺序和成本

### 综合策略
1. 配置所有相关参数
2. 点击"Generate Strategy"
3. 查看分步骤的策略建议
4. 按优先级执行建议

## 技术特性

### 响应式设计
- 支持桌面和移动设备
- 自适应布局
- 触摸友好的交互

### 性能优化
- 实时计算更新
- 防抖输入处理
- 高效的状态管理

### SEO优化
- 完整的meta标签
- Open Graph支持
- 结构化数据
- Sitemap和robots.txt

## 浏览器兼容性

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## 开发说明

### 技术栈
- React 18
- TypeScript
- Tailwind CSS
- Vite

### 主要依赖
- react-helmet-async (SEO)
- react-router-dom (路由)

### 文件结构
```
src/
├── components/
│   ├── calculator/
│   │   ├── ResearchCalculator.tsx
│   │   ├── UnlockOptimizer.tsx
│   │   └── CombinedStrategy.tsx
│   └── SEO.tsx
├── utils/
│   └── storage.ts
└── pages/
    └── calculator.tsx
```

## 更新日志

### v1.0.0
- 初始版本发布
- 三个主要计算器功能
- 数据持久化支持
- SEO优化
- 响应式设计

## 贡献指南

欢迎提交Issue和Pull Request来改进这个工具！

## 许可证

MIT License
