import {
  EnhancedTrinket,
  IntelligentRecommendation,
  AlternativeBuild,
  AcquisitionRequirement,
  ProgressionStep,
} from '../types/trinketOptimizer';
import { Trinket, trinkets } from './trinkets';

export interface CharacterBuildsByStyle {
  characterId: string;
  style: 'extractor' | 'distractor' | 'support' | 'balanced';
  builds: IntelligentRecommendation[];
}

const difficultyToBuildDifficulty = (
  difficulty: Trinket['acquisition']['difficulty'],
): 'beginner' | 'intermediate' | 'advanced' => {
  switch (difficulty) {
    case 'easy':
      return 'beginner';
    case 'moderate':
      return 'intermediate';
    case 'hard':
    default:
      return 'advanced';
  }
};

const difficultyToPriority = (
  difficulty: Trinket['acquisition']['difficulty'],
): 'low' | 'medium' | 'high' | 'critical' => {
  switch (difficulty) {
    case 'easy':
      return 'medium';
    case 'moderate':
      return 'high';
    case 'hard':
    default:
      return 'critical';
  }
};

const toEnhancedTrinket = (trinket: Trinket): EnhancedTrinket => {
  const acquisitionRequirements: AcquisitionRequirement[] = [
    {
      type: 'currency',
      description: `Purchase ${trinket.name}`,
      value: trinket.acquisition.estimatedCost,
      completed: false,
    },
    ...trinket.acquisition.sources.map((source) => ({
      type: 'event',
      description: `Acquire ${trinket.name} from ${source}`,
      completed: false,
    })),
  ];

  return {
    id: trinket.id,
    name: trinket.name,
    rarity: trinket.rarity,
    type: trinket.type as unknown as EnhancedTrinket['type'],
    slot: trinket.slot as unknown as EnhancedTrinket['slot'],
    stats: {
      damage: trinket.stats.damage,
      survival: trinket.stats.survival,
      utility: trinket.stats.utility,
      teamSupport: trinket.stats.teamSupport,
    },
    effects: trinket.effects.map((effect) => ({
      name: effect.name,
      description: effect.description,
      trigger: effect.trigger as EnhancedTrinket['effects'][number]['trigger'],
      value: effect.value ?? 0,
      duration: effect.duration,
      stackable: effect.stackable ?? false,
      condition: undefined,
      cooldown: undefined,
    })),
    description: trinket.description,
    image: trinket.image,
    unlockCondition: trinket.unlockCondition,
    synergies: trinket.synergies,
    drawbacks: trinket.drawbacks,
    bestFor: trinket.bestFor,
    acquisition: {
      requirements: acquisitionRequirements,
      estimatedCost: trinket.acquisition.estimatedCost,
      priority: difficultyToPriority(trinket.acquisition.difficulty),
      alternatives: trinket.synergies,
      unlockPath: trinket.acquisition.sources.map((source, index) => ({
        step: index + 1,
        description: `Visit ${source} to secure ${trinket.name}`,
        requirement: `Complete the tasks associated with ${source}`,
        estimatedTime: trinket.acquisition.timeToFarm ?? 'Unknown',
        completed: false,
      })),
      estimatedTime: trinket.acquisition.timeToFarm ?? 'Unknown',
    },
    metaTags: Array.from(new Set([trinket.type, ...trinket.bestFor])),
    difficulty: difficultyToBuildDifficulty(trinket.acquisition.difficulty),
    communityRating: 4.2,
    usageRate: 55,
  };
};

const lookupTrinket = (id: string): EnhancedTrinket => {
  const base = trinkets.find((entry) => entry.id === id);
  if (!base) {
    throw new Error(`Trinket ${id} not found in base library`);
  }
  return toEnhancedTrinket(base);
};

const toAlternative = (config: {
  name: string;
  trinketIds: string[];
  reasoning: string;
  tradeoffs: string[];
  difficulty: AlternativeBuild['difficulty'];
  cost: AlternativeBuild['cost'];
  effectiveness: number;
}): AlternativeBuild => ({
  name: config.name,
  trinkets: config.trinketIds.map(lookupTrinket),
  reasoning: config.reasoning,
  tradeoffs: config.tradeoffs,
  difficulty: config.difficulty,
  cost: config.cost,
  effectiveness: config.effectiveness,
});

const defaultProgressionSteps = (
  steps: Array<Omit<ProgressionStep, 'priority'>>,
  priorities: Array<'low' | 'medium' | 'high'>,
): ProgressionStep[] =>
  steps.map((step, index) => ({
    ...step,
    priority: priorities[index] ?? 'medium',
  }));

export const curatedTrinketBuilds: CharacterBuildsByStyle[] = [
  {
    characterId: 'boxten',
    style: 'balanced',
    builds: [
      {
        id: 'boxten-beginner-safe',
        name: 'Beginner Safety Set',
        trinkets: [lookupTrinket('thinking-cap'), lookupTrinket('research-map')],
        reasoning: {
          primary:
            'Beginner-friendly loadout that widens the skill-check window while passively generating research capsules.',
          statSynergy: [
            {
              stats: ['survival', 'utility'],
              description: 'Thinking Cap reduces failure risk and Research Map keeps unlock progress ticking forward.',
              beforeValue: 60,
              afterValue: 78,
              improvement: '+30%',
            },
          ],
          scenarioExplanation: 'Ideal for floors 1-10 when players are still learning enemy patterns and objectives.',
          numericalBenefits: [
            {
              stat: 'Skill-check success rate',
              from: 65,
              to: 85,
              improvement: '+20% success rate',
              description: 'The enlarged timing window makes perfect hits far more forgiving for new players.',
            },
          ],
          tradeoffs: [
            'Extraction pace stays modest, so it is not designed for speedrunning.',
            'Limited mobility tools mean you should rely on teammates for escorts.',
          ],
        },
        effectiveness: {
          overall: 3.2,
          damage: 1.8,
          survival: 4.1,
          utility: 3.5,
          teamSupport: 2.8,
          soloPlay: 3.8,
          highFloor: 2.5,
        },
        difficulty: 'beginner',
        scenarios: ['Learning runs', 'Floors 1-10'],
        metaTags: ['beginner', 'safety', 'learning'],
        confidence: 4.5,
        alternatives: [
          toAlternative({
            name: 'Budget Variant',
            trinketIds: ['machine-manual', 'research-map'],
            reasoning: 'Automatic machine progress lowers pressure when you are still practicing skill-checks.',
            tradeoffs: ['Skill-check difficulty remains unchanged.'],
            difficulty: 'beginner',
            cost: 'budget',
            effectiveness: 3,
          }),
        ],
        acquisition: {
          requirements: [
            { type: 'currency', description: 'Purchase Thinking Cap', value: '450 Ichor', completed: false },
            { type: 'currency', description: 'Purchase Research Map', value: '200 Ichor', completed: false },
          ],
          estimatedCost: '650 Ichor',
          priority: 'high',
          alternatives: ['machine-manual'],
          unlockSequence: ['Buy Research Map for steady capsules', 'Add Thinking Cap to widen skill-checks'],
        },
        teamCompatibility: {
          worksWellWith: ['Experienced teammates', 'Dedicated distractors'],
          conflictsWith: ['All-rookie squads'],
          teamRoles: ['Learner', 'Support extractor'],
          compositionNotes: 'Pair with at least one veteran who can handle rescues and callouts.',
        },
        metaAnalysis: {
          popularity: 45,
          winRate: 72,
          tier: 'C',
          metaPosition: 'Teaching-oriented setup valued more for safety than for raw efficiency.',
          counterStrategies: [],
          strengths: ['Low pressure', 'Consistent research flow', 'Beginner friendly'],
          weaknesses: ['Slow completion speed', 'Limited mobility'],
        },
        progressionPath: {
          current: 'Beginner safety set',
          next: 'Balanced efficiency set',
          final: 'Specialized team roles',
          steps: defaultProgressionSteps(
            [
              {
                step: 1,
                description: 'Practice landing consecutive skill-checks.',
                requirement: 'Achieve 20 successful skill-checks in a row.',
                estimatedTime: '3-5 runs',
              },
              {
                step: 2,
                description: 'Learn to identify and respond to different Twisted behaviors.',
                requirement: 'Encounter and classify 5 unique Twisted types.',
                estimatedTime: '5-8 runs',
              },
            ],
            ['high', 'medium'],
          ),
          estimatedTime: 'One week of casual play',
          resourceRequirements: ['650 Ichor'],
        },
      },
      {
        id: 'boxten-balanced-efficient',
        name: 'Balanced Efficiency Set',
        trinkets: [lookupTrinket('dog-plush'), lookupTrinket('wrench')],
        reasoning: {
          primary: 'Mixes mobility with early-machine acceleration for intermediate Boxten players.',
          statSynergy: [
            {
              stats: ['utility', 'survival'],
              description: 'Dog Plush keeps rotations fast while Wrench spikes extraction at low progress.',
              beforeValue: 72,
              afterValue: 89,
              improvement: '+24%',
            },
          ],
          scenarioExplanation: 'Great for floors 5-15 where you need to swap between objectives and assists quickly.',
          numericalBenefits: [
            {
              stat: 'Early machine speed',
              from: 100,
              to: 125,
              improvement: '+25% extraction speed',
              description: 'Wrench delivers a major boost while machines are below 50% completion.',
            },
          ],
          tradeoffs: [
            'Once machines pass halfway, the Wrench bonus disappears.',
            'No direct skill-check support, so maintain solid fundamentals.',
          ],
        },
        effectiveness: {
          overall: 4,
          damage: 2.2,
          survival: 3.8,
          utility: 4.2,
          teamSupport: 3.5,
          soloPlay: 4.1,
          highFloor: 3.5,
        },
        difficulty: 'intermediate',
        scenarios: ['Floors 5-15', 'Coordinated teams', 'Balanced gameplay'],
        metaTags: ['balanced', 'efficient', 'mobile'],
        confidence: 4.3,
        alternatives: [
          toAlternative({
            name: 'Mobility Focus',
            trinketIds: ['dog-plush', 'pink-bow'],
            reasoning: 'Maximize chase potential when constant repositioning is more valuable than extraction speed.',
            tradeoffs: ['Slower machine progress overall.'],
            difficulty: 'intermediate',
            cost: 'moderate',
            effectiveness: 3.7,
          }),
        ],
        acquisition: {
          requirements: [
            { type: 'currency', description: 'Purchase Dog Plush', value: '400 Ichor', completed: false },
            { type: 'currency', description: 'Purchase Wrench', value: '350 Ichor', completed: false },
          ],
          estimatedCost: '750 Ichor',
          priority: 'high',
          alternatives: ['speedy-shoes'],
          unlockSequence: ['Secure Dog Plush for movement speed', 'Add Wrench for extraction bursts'],
        },
        teamCompatibility: {
          worksWellWith: ['Vee', 'Brightney', 'Teagan'],
          conflictsWith: ['Teams lacking a dedicated distractor'],
          teamRoles: ['Secondary extractor', 'Emergency support'],
          compositionNotes: 'Pair with a skill-check specialist to finish machines once Wrench loses value.',
        },
        metaAnalysis: {
          popularity: 58,
          winRate: 69,
          tier: 'B',
          metaPosition: 'Popular mid-tier option balancing safety and tempo.',
          counterStrategies: ['Pressure machines past 50% to neutralize Wrench.'],
          strengths: ['Flexible rotations', 'Strong early push'],
          weaknesses: ['Drops off late', 'Limited defensive tools'],
        },
        progressionPath: {
          current: 'Mid-tier efficiency set',
          next: 'Advanced support package',
          final: 'Team anchor build',
          steps: defaultProgressionSteps(
            [
              {
                step: 1,
                description: 'Add Pink Bow to further improve rotation speed.',
                requirement: 'Save 325 Ichor for Pink Bow.',
                estimatedTime: '3-4 runs',
              },
              {
                step: 2,
                description: 'Practice triggering Wrench early in machine cycles.',
                requirement: 'Use Wrench on 10 machines below 50% progress.',
                estimatedTime: '5 runs',
              },
            ],
            ['medium', 'medium'],
          ),
          estimatedTime: 'About one week of routine play',
          resourceRequirements: ['750 Ichor', 'Optional 325 Ichor for Pink Bow'],
        },
      },
    ],
  },
  {
    characterId: 'boxten',
    style: 'support',
    builds: [
      {
        id: 'boxten-support-anchor',
        name: 'Support Anchor Set',
        trinkets: [lookupTrinket('dandy-plush'), lookupTrinket('thermos')],
        reasoning: {
          primary:
            'Resource-focused support loadout that halves shop costs while improving stamina sustain for rescues.',
          statSynergy: [
            {
              stats: ['utility', 'teamSupport'],
              description: 'Dandy Plush frees team economy and Thermos keeps Boxten healthy during long standoffs.',
              beforeValue: 70,
              afterValue: 90,
              improvement: '+20%',
            },
          ],
          scenarioExplanation: 'Great for coordinated groups that want reliable restocks and steady body-block potential.',
          numericalBenefits: [
            {
              stat: 'Shop purchase cost',
              from: 100,
              to: 50,
              improvement: '50% cheaper items',
              description: 'Dandy Plush halves the price of consumables and emergency tools.',
            },
          ],
          tradeoffs: [
            'Minimal personal damage output.',
            'High cost investment: requires floor 20 plus significant Ichor.',
          ],
        },
        effectiveness: {
          overall: 4.1,
          damage: 1.8,
          survival: 4,
          utility: 4.6,
          teamSupport: 4.7,
          soloPlay: 3,
          highFloor: 3.7,
        },
        difficulty: 'advanced',
        scenarios: ['Team economy focus', 'Coordinated rescue squads'],
        metaTags: ['support', 'economy', 'sustain'],
        confidence: 4.2,
        alternatives: [
          toAlternative({
            name: 'Entry-Level Support',
            trinketIds: ['thermos', 'research-map'],
            reasoning: 'Cheaper combination that trades shop savings for faster research unlocks.',
            tradeoffs: ['No shop discount, so long-term value is lower.'],
            difficulty: 'intermediate',
            cost: 'moderate',
            effectiveness: 3.6,
          }),
        ],
        acquisition: {
          requirements: [
            { type: 'currency', description: 'Purchase Dandy Plush', value: '1850 Ichor', completed: false },
            { type: 'level', description: 'Reach floor 20', completed: false },
            { type: 'currency', description: 'Purchase Thermos', value: '1500 Ichor', completed: false },
          ],
          estimatedCost: '3350 Ichor + reach floor 20',
          priority: 'critical',
          alternatives: ['thermos', 'research-map'],
          unlockSequence: ['Reach floor 20', 'Buy Dandy Plush for discounts', 'Add Thermos for extra stamina'],
        },
        teamCompatibility: {
          worksWellWith: ['High-cost builds', 'Dedicated extractors', 'Late-game specialists'],
          conflictsWith: ['Teams already stacked with economic tools'],
          teamRoles: ['Economy anchor', 'Body-block support'],
          compositionNotes: 'Coordinate purchases with teammates to maximize the 50% discount window.',
        },
        metaAnalysis: {
          popularity: 36,
          winRate: 70,
          tier: 'B',
          metaPosition: 'Niche but powerful when the team invests in consumable strategies.',
          counterStrategies: ['Apply pressure when the shop is on cooldown to reduce discount value.'],
          strengths: ['Massive economic value', 'Reliable stamina sustain'],
          weaknesses: ['High upfront cost', 'Low personal damage'],
        },
        progressionPath: {
          current: 'Economy-focused support core',
          next: 'Add mobility tools for safer rotations',
          final: 'Hybrid support/extractor specialist',
          steps: defaultProgressionSteps(
            [
              {
                step: 1,
                description: 'Farm Ichor to afford Dandy Plush after unlocking floor 20.',
                requirement: 'Save 1850 Ichor and reach floor 20.',
                estimatedTime: '6-8 runs',
              },
              {
                step: 2,
                description: 'Purchase Thermos to handle extended body-blocking.',
                requirement: 'Spend 1500 Ichor on Thermos.',
                estimatedTime: '5-7 runs',
              },
            ],
            ['high', 'high'],
          ),
          estimatedTime: 'Roughly two weeks of regular play',
          resourceRequirements: ['3350 Ichor', 'Floor 20 clearance'],
        },
      },
      {
        id: 'boxten-support-runner',
        name: 'Support Runner Set',
        trinkets: [lookupTrinket('dog-plush'), lookupTrinket('research-map')],
        reasoning: {
          primary: 'Lightweight support kit that keeps Boxten mobile while feeding research progression.',
          statSynergy: [
            {
              stats: ['utility', 'teamSupport'],
              description: 'Dog Plush speeds up rotations and Research Map provides steady unlock capsules.',
              beforeValue: 65,
              afterValue: 80,
              improvement: '+15%',
            },
          ],
          scenarioExplanation: 'Works well in mixed-skill lobbies where Boxten escorts teammates and tags objectives.',
          numericalBenefits: [
            {
              stat: 'Research capsule gain',
              from: 0,
              to: 1,
              improvement: '1 capsule every 10 seconds',
              description: 'Research Map ensures progress even while rotating between tasks.',
            },
          ],
          tradeoffs: [
            'Limited defensive tools compared to stamina-focused options.',
            'Shop purchases still cost full price.',
          ],
        },
        effectiveness: {
          overall: 3.6,
          damage: 1.9,
          survival: 3.4,
          utility: 4,
          teamSupport: 3.9,
          soloPlay: 3.8,
          highFloor: 3.2,
        },
        difficulty: 'beginner',
        scenarios: ['Mixed-skill teams', 'Objective rotations'],
        metaTags: ['support', 'mobility', 'research'],
        confidence: 4.1,
        alternatives: [
          toAlternative({
            name: 'Mobility Surge',
            trinketIds: ['dog-plush', 'pink-bow'],
            reasoning: 'Go all-in on chase speed when you have another teammate handling research.',
            tradeoffs: ['No passive progression while rotating.'],
            difficulty: 'intermediate',
            cost: 'moderate',
            effectiveness: 3.5,
          }),
        ],
        acquisition: {
          requirements: [
            { type: 'currency', description: 'Purchase Dog Plush', value: '400 Ichor', completed: false },
            { type: 'currency', description: 'Purchase Research Map', value: '200 Ichor', completed: false },
          ],
          estimatedCost: '600 Ichor',
          priority: 'medium',
          alternatives: ['thermos'],
          unlockSequence: ['Buy Dog Plush for movement speed', 'Add Research Map for capsule income'],
        },
        teamCompatibility: {
          worksWellWith: ['Vee', 'Cosmo', 'Sprout'],
          conflictsWith: ['Teams that already have multiple mobility specialists'],
          teamRoles: ['Escort support', 'Research runner'],
          compositionNotes: 'Coordinate rotations with the extractor so capsules are collected between objectives.',
        },
        metaAnalysis: {
          popularity: 52,
          winRate: 65,
          tier: 'B',
          metaPosition: 'Common entry-level support package for public lobbies.',
          counterStrategies: ['Force long chases to exploit the lower stamina pool.'],
          strengths: ['Good map coverage', 'Consistent research income'],
          weaknesses: ['No defensive panic button', 'Full-price shop items'],
        },
        progressionPath: {
          current: 'Mobile support toolkit',
          next: 'Upgrade to economic support',
          final: 'Hybrid support/extractor role',
          steps: defaultProgressionSteps(
            [
              {
                step: 1,
                description: 'Practice escorting teammates while collecting capsules.',
                requirement: 'Complete five runs where capsules are delivered every floor.',
                estimatedTime: '5 runs',
              },
              {
                step: 2,
                description: 'Transition to higher-cost support options.',
                requirement: 'Save for Dandy Plush or Thermos upgrades.',
                estimatedTime: 'One week of casual play',
              },
            ],
            ['medium', 'medium'],
          ),
          estimatedTime: 'About one week of casual play',
          resourceRequirements: ['600 Ichor', 'Time investment for capsule farming'],
        },
      },
    ],
  },
  {
    characterId: 'vee',
    style: 'extractor',
    builds: [
      {
        id: 'vee-extraction-master',
        name: 'Extraction Master Set',
        trinkets: [lookupTrinket('magnifying-glass'), lookupTrinket('participation-award')],
        reasoning: {
          primary: 'Leverages Vee’s five-star extraction with aggressive skill-check amplification.',
          statSynergy: [
            {
              stats: ['utility', 'teamSupport'],
              description: 'Magnifying Glass increases skill-check frequency while Participation Award raises completion gain.',
              beforeValue: 85,
              afterValue: 96,
              improvement: '+13%',
            },
          ],
          scenarioExplanation: 'Best when teammates handle distractions so Vee can tunnel machines uninterrupted.',
          numericalBenefits: [
            {
              stat: 'Machine completion speed',
              from: 100,
              to: 145,
              improvement: '+45% completion rate',
              description: 'Stacked bonuses make each successful skill-check chunk enormous.',
            },
          ],
          tradeoffs: [
            'Shrinks the skill-check window, demanding precise timing.',
            'Offers little personal defense, so rely on escorts.',
          ],
        },
        effectiveness: {
          overall: 4.7,
          damage: 1.5,
          survival: 2.8,
          utility: 4.9,
          teamSupport: 4.2,
          soloPlay: 2.1,
          highFloor: 4.8,
        },
        difficulty: 'advanced',
        scenarios: ['Coordinated teams', 'Dedicated distractor support', 'High-floor pushing'],
        metaTags: ['extraction', 'skill-intensive', 'team-dependent'],
        confidence: 4.8,
        alternatives: [
          toAlternative({
            name: 'Stable Window',
            trinketIds: ['thinking-cap', 'participation-award'],
            reasoning: 'Keep bonus completion while easing the timing window for squads still learning.',
            tradeoffs: ['Slightly slower machines overall.'],
            difficulty: 'intermediate',
            cost: 'moderate',
            effectiveness: 4.1,
          }),
        ],
        acquisition: {
          requirements: [
            { type: 'currency', description: 'Purchase Magnifying Glass', value: '750 Ichor', completed: false },
            { type: 'currency', description: 'Purchase Participation Award', value: '1250 Ichor', completed: false },
            { type: 'research', description: 'Complete any Twisted research to 100%', completed: false },
          ],
          estimatedCost: '2000 Ichor + research completion',
          priority: 'critical',
          alternatives: ['machine-manual'],
          unlockSequence: ['Secure Participation Award', 'Add Magnifying Glass for frequency spikes'],
        },
        teamCompatibility: {
          worksWellWith: ['Pebble', 'Tisha', 'Cosmo'],
          conflictsWith: ['Teams lacking reliable distraction'],
          teamRoles: ['Primary extractor', 'Objective closer'],
          compositionNotes: 'Assign one teammate to permanent distraction duty so Vee can stay on machines.',
        },
        metaAnalysis: {
          popularity: 67,
          winRate: 74,
          tier: 'A',
          metaPosition: 'Common high-level extraction strategy when a team builds around Vee.',
          counterStrategies: ['Focus pressure on Vee to force missed checks.'],
          strengths: ['Fastest machine clear speed', 'High team value with coordination'],
          weaknesses: ['Extremely skill-dependent', 'Fragile under pressure'],
        },
        progressionPath: {
          current: 'High-intensity extraction core',
          next: 'Add Vee’s Remote for floor-ending bursts',
          final: 'Full tournament-ready extraction suite',
          steps: defaultProgressionSteps(
            [
              {
                step: 1,
                description: 'Master the tighter skill-check window.',
                requirement: 'Achieve 30 perfect skill-checks in practice.',
                estimatedTime: '5 runs',
              },
              {
                step: 2,
                description: 'Coordinate with your distractor to keep machines uncontested.',
                requirement: 'Complete five runs with zero machine interruptions.',
                estimatedTime: 'One week of focused play',
              },
            ],
            ['high', 'medium'],
          ),
          estimatedTime: 'About two weeks of coordinated sessions',
          resourceRequirements: ['2000 Ichor', 'Completed Twisted research'],
        },
      },
    ],
  },
];
