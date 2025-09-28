import { TwistedStrategyProfile } from '../types/twisted-strategies';

export const twistedStrategies: TwistedStrategyProfile[] = [
  {
    twistedId: 'twisted-pebble',
    name: 'Twisted Pebble',
    rarity: 'main',
    threat_level: 'extreme',
    speed: 'very_fast',
    special_abilities: ['Bark detection', 'Enhanced vision', 'Aggressive pursuit'],
    identification: {
      visual_cues: ['Massive hound silhouette', 'Jet-black body', 'Glowing red eyes'],
      audio_cues: ['Piercing barking', 'Thunderous paw steps'],
      spawn_conditions: ['Available from floor 5 onward', 'Base 4% chance, +4% every 5 floors'],
    },
    strategies: {
      avoidance: [
        'Stick to cover-heavy paths and avoid open courtyards.',
        'Break line of sight immediately once barking starts.',
        'Traverse outer map lanes to reduce encounter probability.',
        'Keep the squad spread to prevent multi-target reveals.',
      ],
      if_spotted: [
        'Dash to the nearest obstacle and cut vision hard.',
        'Do not try to outrun Pebble — weave through cover instead.',
        'Funnel the chase through narrow hallways to slow it down.',
        'Hold position until the aggro timer expires before rotating.',
      ],
      team_coordination: [
        'Assign a high-speed runner (4+ speed) to kite if required.',
        'Pause machine work until the chase resolves.',
        'Skip clutch rescues mid-chase and wait for a safe window.',
        'Keep voice comms active to broadcast Pebble locations.',
      ],
    },
    common_mistakes: [
      'Running in straight lines and getting overtaken.',
      'Loitering in wide-open areas with no cover.',
      'Attempting reckless rescues while Pebble is engaged.',
    ],
    counters: ['Dog Plush + Pink Bow grants a small speed edge for specific characters.'],
    difficulty_rating: 10,
  },
  {
    twistedId: 'twisted-dandy',
    name: 'Twisted Dandy',
    rarity: 'lethal',
    threat_level: 'extreme',
    speed: 'very_slow',
    special_abilities: ['One-hit execution', 'Machine completion awareness', 'Global audio tracking'],
    identification: {
      visual_cues: ['Rainbow petal headpiece', 'Hunched forward gait', 'Oversized parasol outline'],
      audio_cues: ['Clair de Lune music box', 'Heavy footsteps', 'Accelerated stomps post-machine'],
      spawn_conditions: ['Skipping Dandy purchases three times consecutively', 'Earliest appearance on floor 6'],
    },
    strategies: {
      avoidance: [
        'Leave the area immediately after finishing a machine.',
        'Rotate purchase duties to keep anger stacks low.',
        'Use cover whenever the music swells.',
        'Prioritise mobility perks or characters with speed tools.',
      ],
      if_spotted: [
        'Orbit the largest nearby obstacle for the full attention timer (~5 seconds).',
        'Skip smoke bombs — they barely impact Dandy.',
        'If available, Pebble’s Speak can redirect aggro briefly.',
        'Stay composed and wait for focus to drop before sprinting.',
      ],
      team_coordination: [
        'Agree on a purchase rotation before the run begins.',
        'Call out musical cues so everyone is ready to move.',
        'Save speed boosts for emergency escapes.',
        'Assign self-sufficient characters (Sprout, Teagan) to risky tasks.',
      ],
    },
    common_mistakes: [
      'Celebrating on the completed machine instead of rotating.',
      'Panicking and running without a cover path.',
      'Ignoring shopping rotations and triggering rage increases.',
    ],
    counters: ['Buying any Dandy item immediately resets anger stacks.'],
    difficulty_rating: 10,
  },
  {
    twistedId: 'twisted-vee',
    name: 'Twisted Vee',
    rarity: 'main',
    threat_level: 'high',
    speed: 'normal',
    special_abilities: ['Pop-up ad distraction', 'Failed skill-check lock-on', 'Slow II debuff'],
    identification: {
      visual_cues: ['Television head', 'Mechanical chassis', 'Ichor footprints'],
      audio_cues: ['Electronic feedback', 'Alert beeps', 'Metallic steps'],
      spawn_conditions: ['Random ad spawn from floor 5 onward', 'Aggro on failed skill-checks'],
    },
    strategies: {
      avoidance: [
        'Close pop-up ads immediately to avoid stacking penalties.',
        'Aim for perfect skill-check timing to prevent lock-ons.',
        'Split extraction duties to reduce consecutive failures.',
        'Equip items that widen the skill-check success window.',
      ],
      if_spotted: [
        'During Slow II, prioritise cover and stall until the debuff fades.',
        'Weave through obstacles to extend the chase route.',
        'Avoid straight-line sprints while the slow is active.',
        'Wait for the debuff to drop before rotating to new objectives.',
      ],
      team_coordination: [
        'Assign high-skill teammates to risky machines.',
        'Announce failed checks so the team can prep for kiting.',
        'Astro can soak attention and free slowed teammates.',
        'Pre-plan safe zones near terminals in case an ad appears.',
      ],
    },
    common_mistakes: [
      'Ignoring ads and letting the debuff stack endlessly.',
      'Standing still after a failed check and getting locked on.',
      'Attempting to outrun Slow II instead of stalling it out.',
    ],
    counters: ['Participation Award improves skill-check forgiveness.', 'Magnifying Glass expands the success zone.'],
    difficulty_rating: 7,
  },
];
