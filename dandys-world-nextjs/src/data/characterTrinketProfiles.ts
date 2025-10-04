export interface CharacterStyleProfile {
  characterId: string;
  style: 'extractor' | 'distractor' | 'support' | 'balanced';
  roleLabel: string;
  statWeights: {
    damage: number;
    survival: number;
    utility: number;
    teamSupport: number;
    soloPlay: number;
  };
  forbiddenTrinkets?: string[];
  mustHaveTraits?: string[];
  notes?: string;
}

export const characterStyleProfiles: CharacterStyleProfile[] = [
  {
    characterId: 'boxten',
    style: 'balanced',
    roleLabel: 'Balanced Beginner',
    statWeights: {
      damage: 0.15,
      survival: 0.25,
      utility: 0.3,
      teamSupport: 0.2,
      soloPlay: 0.1,
    },
    forbiddenTrinkets: ['vees-remote'],
    mustHaveTraits: ['beginner-friendly', 'stable'],
    notes: 'Boxten is ideal for learning fundamentals, so focus on forgiving, stable trinkets.',
  },
  {
    characterId: 'boxten',
    style: 'support',
    roleLabel: 'Support Apprentice',
    statWeights: {
      damage: 0.1,
      survival: 0.2,
      utility: 0.25,
      teamSupport: 0.35,
      soloPlay: 0.1,
    },
    forbiddenTrinkets: ['magnifying-glass'],
    mustHaveTraits: ['team-utility', 'safe'],
    notes: 'Support Boxten should prioritize team utility and safe decision-making.',
  },
  {
    characterId: 'vee',
    style: 'extractor',
    roleLabel: 'Extraction Specialist',
    statWeights: {
      damage: 0.05,
      survival: 0.15,
      utility: 0.45,
      teamSupport: 0.25,
      soloPlay: 0.1,
    },
    mustHaveTraits: ['extraction-speed', 'skill-check'],
    notes: 'Vee has five-star extraction, so lean into skill-check enhancing trinkets.',
  },
  {
    characterId: 'pebble',
    style: 'distractor',
    roleLabel: 'Distraction Expert',
    statWeights: {
      damage: 0.1,
      survival: 0.35,
      utility: 0.3,
      teamSupport: 0.2,
      soloPlay: 0.05,
    },
    mustHaveTraits: ['movement-speed', 'survival'],
    notes: 'Pebble excels at kiting thanks to top-tier mobility.',
  },
];
