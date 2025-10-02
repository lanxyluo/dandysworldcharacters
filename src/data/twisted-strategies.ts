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
      spawn_conditions: [
        'Main character Twisted spawning from floor 5 onward',
        'Initial 5% spawn chance, +4% every 5 floors (max 20%)',
        'Enhanced vision and barking reveal distant players quickly',
      ],
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
      spawn_conditions: [
        'Skip Dandy Shop offers three times consecutively without buying',
        'After the third skip, 20% spawn chance from floor 6 onward',
        'Each additional consecutive skip further increases the spawn rate',
      ],
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
      spawn_conditions: [
        'Appears from floor 5 onward as a main character Twisted',
        'Initial 5% spawn chance, +4% every 5 floors (max 20%)',
        'Aggro on failed skill-checks, rushing from anywhere on the map',
      ],
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
  {
    twistedId: 'twisted-astro',
    name: 'Twisted Astro',
    rarity: 'main',
    threat_level: 'high',
    speed: 'fast',
    special_abilities: [
      'Machine regression drains roughly 50% of current progress on failed nearby Skill Checks',
      'Applies Tired III debuff to chased players (-75% stamina regeneration)',
      'Above-average chase speed and long detection range',
      'Extended attention span compared to other Main Twisteds',
    ],
    identification: {
      visual_cues: ['Large four-armed figure', 'Ichor-coated celestial motifs', 'Soft moonlit glow'],
      audio_cues: ['Soft footsteps', 'Ethereal space ambience'],
      spawn_conditions: [
        'Main character Twisted spawning from floor 5 onward',
        'Initial 5% spawn chance, +4% every 5 floors (max 20%)',
        'Hardest Main to detect by sound cues alone',
      ],
    },
    strategies: {
      avoidance: [
        'Treat every Skill Check with high precision to avoid triggering regression.',
        'Move away from recently failed machines before hiding.',
        'Carry stamina recovery items to offset the Tired III debuff during chases.',
        'Track the faint ambient audio to gauge proximity.',
      ],
      if_spotted: [
        'Commit to clean Skill Checks until he disengages.',
        'Relocate from machines before attempting to hide or reset aggro.',
        'Use top-speed characters to kite him away from extractors.',
      ],
      team_coordination: [
        'Assign high-mobility teammates like Tisha, Pebble, or Goob to distract.',
        'Keep low-mobility characters off distraction duty when Astro is active.',
        'Coordinate Skill Check timing to minimise shared failures.',
        'Share stamina items or call out when teammates become Tired III.',
      ],
    },
    common_mistakes: [
      'Failing Skill Checks and lingering near the machine as it drains.',
      'Attempting to kite with low-speed characters.',
      'Ignoring stamina management while Tired III is applied.',
    ],
    counters: [
      'Perfect Skill Checks prevent machine regression entirely.',
      'High movement speed characters can keep distance despite the debuff.',
    ],
    difficulty_rating: 8,
  },
  {
    twistedId: 'twisted-shelly',
    name: 'Twisted Shelly',
    rarity: 'main',
    threat_level: 'high',
    speed: 'very_fast',
    special_abilities: [
      'Applies permanent Confused I debuff to all players on the floor (-25% extraction speed)',
      'Runs at high speed comparable to Twisted Toodles',
      'Shorter attention span than most Main Twisteds',
      'Floor-wide debuff cannot be removed until she leaves',
    ],
    identification: {
      visual_cues: ['Theropod dinosaur silhouette', 'Fossilised skeleton details', 'Ichor-coated plating'],
      audio_cues: ['Heavy stomping footsteps', 'Measured thunderous strides'],
      spawn_conditions: [
        'Main character Twisted spawning from floor 5 onward',
        'Initial 5% spawn chance, +4% every 5 floors (max 20%)',
      ],
    },
    strategies: {
      avoidance: [
        'Plan for a 25% extraction speed penalty and adjust pacing.',
        'Break line of sight quickly to exploit her short attention span.',
        'Use dense cover and corners instead of open hallways.',
        'Prepare for rapid chase acceleration despite brief focus windows.',
      ],
      if_spotted: [
        'Cut vision immediately and route through tight cover-heavy angles.',
        'Leverage obstacles and corners to shake her before the timer expires.',
        'Rely on 4-star speed builds with Dog Plush or Speedy Shoes to outwalk her.',
        'Deploy 5-star speed runners with a single speed trinket for reliable escapes.',
      ],
      team_coordination: [
        'Communicate extraction progress frequently since everyone is debuffed.',
        'Assign fast distractors to keep her away from essential objectives.',
        'Synchronise machine completions to leave the floor sooner.',
        'Remind teammates that Confused I persists until she departs.',
      ],
    },
    common_mistakes: [
      'Underestimating her chase speed due to the short attention span.',
      'Wasting resources attempting to cleanse the Confused debuff.',
      'Working in exposed areas without escape cover.',
    ],
    counters: [
      'Use the short attention span to reset aggro quickly.',
      'Participation Award with Magnifying Glass offsets some extraction loss.',
    ],
    difficulty_rating: 8,
  },
  {
    twistedId: 'twisted-sprout',
    name: 'Twisted Sprout',
    rarity: 'main',
    threat_level: 'medium',
    speed: 'slow',
    special_abilities: [
      'Summons Ichor tendrils at detected players on a 10-second cooldown',
      'Tendrils persist for 15 seconds and damage players who linger',
      'Can maintain up to two active tendrils simultaneously',
      'Slowest Main Twisted, enabling outwalking with adequate movement speed',
      'Ichor pools mark the active tendril area',
    ],
    identification: {
      visual_cues: ['Tall strawberry-themed frame', 'Ichor-lined clawed left arm', 'Pointed leaf hair'],
      audio_cues: ['Organic tendril summoning sounds'],
      spawn_conditions: [
        'Main character Twisted spawning from floor 5 onward',
        'Initial 5% spawn chance, +4% every 5 floors (max 20%)',
      ],
    },
    strategies: {
      avoidance: [
        'Leave machines before entering his detection radius.',
        'Retreat from Ichor pools immediately after tendrils spawn.',
        'Drag chases through wide areas with multiple exits.',
        'Avoid cramped rooms where tendrils can trap the team.',
        'Watch carefully during Blackouts when tendrils are harder to see.',
      ],
      if_spotted: [
        'Expect a tendril spawn and pre-plan escape routes.',
        'Track the ground for Ichor pools to dodge the damage zone.',
        'Exit the pool radius as soon as it appears.',
        'Weave through obstacles to slow his pursuit.',
      ],
      team_coordination: [
        'Separate Sprout from Twisted Razzle & Dazzle to avoid overlapping threats.',
        'Use island or perimeter kiting patterns for distractors.',
        'Call out tendril placements near machines to warn teammates.',
        'Coordinate when multiple Sprouts appear to prevent overlapping pools.',
      ],
    },
    common_mistakes: [
      'Staying on machines once he is within detection range.',
      'Attempting to distract in confined corridors.',
      'Losing track of tendril locations during Blackouts.',
    ],
    counters: [
      'Use open areas with clear escape paths to kite safely.',
      'Four-star movement speed characters can outwalk him without extra trinkets.',
      'Leaving tendril ranges quickly nullifies the damage threat.',
    ],
    difficulty_rating: 7,
  },
];
