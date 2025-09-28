export interface UserProgress {
  ownedCharacters: string[];
  currentIchor: number;
  researchProgress: Record<string, number>Translation pending<UserProgress>
): UserProgress => {
  const updated = {
    ...currentProgress,
    ...updates,
    lastUpdated: new Date().toISOString()
  };
  saveUserProgress(updated);
  return updated;
};
