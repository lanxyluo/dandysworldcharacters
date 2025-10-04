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
    name: 'Trinket Builds',
    path: '/trinket-builds',
    icon: '🛠️',
    description: 'Generate optimal trinket combinations for every run.',
    priority: 1,
  },
  {
    id: 'twisted-guide',
    name: 'Twisted Guide',
    path: '/twisted-guide',
    icon: '⚔️',
    description: 'Learn counter strategies for every Twisted threat.',
    priority: 2,
  },
  {
    id: 'character-recommender',
    name: 'Character Recommender',
    path: '/character-recommender',
    icon: '🎭',
    description: 'Find the best characters for your playstyle and team.',
    priority: 3,
  },
  {
    id: 'progress-tracker',
    name: 'Progress Tracker',
    path: '/progress-tracker',
    icon: '📊',
    description: 'Track research progress and plan unlock milestones.',
    priority: 4,
  },
  {
    id: 'guides',
    name: 'Guides',
    path: '/guides',
    icon: '📖',
    description: 'Browse tutorials covering mechanics, strategy, and more.',
    priority: 5,
  },
];
