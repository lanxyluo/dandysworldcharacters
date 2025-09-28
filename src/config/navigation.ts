export interface NavItem {
  id: string;
  name: string;
  path: string;
  icon: string;
  description: string;
  priority: number;
}

export const mainNavigation: NavItem[] = [
  {
    id: 'trinket-builds',
    name: 'Trinket配装',
    path: '/trinket-builds',
    icon: '🛠️',
    description: '智能推荐最佳Trinket组合',
    priority: 1,
  },
  {
    id: 'twisted-guide',
    name: 'Twisted对抗',
    path: '/twisted-guide',
    icon: '⚔️',
    description: '快速查询Twisted应对策略',
    priority: 2,
  },
  {
    id: 'character-recommender',
    name: '角色推荐',
    path: '/character-recommender',
    icon: '🎭',
    description: '角色选择和数据对比',
    priority: 3,
  },
  {
    id: 'progress-tracker',
    name: '进度追踪',
    path: '/progress-tracker',
    icon: '📊',
    description: 'Research进度和解锁路径',
    priority: 4,
  },
  {
    id: 'guides',
    name: '新手指南',
    path: '/guides',
    icon: '📖',
    description: '游戏机制和策略教程',
    priority: 5,
  },
];
