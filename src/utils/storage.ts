export interface UserProgress {
  ownedCharacters: string[];
  currentIchor: number;
  researchProgress: Record<string, number>;
  lastUpdated: string;
}

// 保存用户进度到localStorage
export const saveUserProgress = (progress: UserProgress) => {
  try {
    localStorage.setItem('dandyworld_progress', JSON.stringify(progress));
  } catch (error) {
    console.warn('Failed to save progress to localStorage:', error);
  }
};

// 从localStorage读取用户进度
export const loadUserProgress = (): UserProgress | null => {
  try {
    const saved = localStorage.getItem('dandyworld_progress');
    return saved ? JSON.parse(saved) : null;
  } catch (error) {
    console.warn('Failed to load progress from localStorage:', error);
    return null;
  }
};

// 获取默认用户进度
export const getDefaultUserProgress = (): UserProgress => ({
  ownedCharacters: [],
  currentIchor: 500,
  researchProgress: {
    'Twisted Alice': 25,
    'Twisted Bob': 45,
    'Twisted Charlie': 10
  },
  lastUpdated: new Date().toISOString()
});

// 更新特定字段
export const updateUserProgress = (
  currentProgress: UserProgress,
  updates: Partial<UserProgress>
): UserProgress => {
  const updated = {
    ...currentProgress,
    ...updates,
    lastUpdated: new Date().toISOString()
  };
  saveUserProgress(updated);
  return updated;
};
