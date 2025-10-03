import { CharacterMasteryData } from '../types/progress-tracking';

const MASTERY_DATA: Record<string, CharacterMasteryData> = {
  boxten: {
    characterId: 'boxten',
    totalTasks: 6,
    tasks: [
      { id: 'ability_uses', description: 'Use Active Ability 30 times', target: 30, type: 'ability' },
      { id: 'machines', description: 'Finish 30 Machines', target: 30, type: 'extraction' },
      { id: 'items', description: 'Pick up 30 Items', target: 30, type: 'collection' },
      { id: 'floors', description: 'Survive 25 Floors', target: 25, type: 'survival' },
      { id: 'item_uses', description: 'Use 30 Items', target: 30, type: 'utility' },
      { id: 'travel', description: 'Travel 50,000 meters', target: 50000, type: 'movement', unit: 'meters' },
    ],
    rewardSummary: 'Vintage Boxten skin',
    unlocks: [],
  },
  poppy: {
    characterId: 'poppy',
    totalTasks: 6,
    tasks: [
      { id: 'ability_uses', description: 'Use Active Ability 50 times', target: 50, type: 'ability' },
      { id: 'machines', description: 'Finish 50 Machines', target: 50, type: 'extraction' },
      { id: 'items', description: 'Pick up 50 Items', target: 50, type: 'collection' },
      { id: 'floors', description: 'Survive 30 Floors', target: 30, type: 'survival' },
      { id: 'item_uses', description: 'Use 40 Items', target: 40, type: 'utility' },
      { id: 'travel', description: 'Travel 60,000 meters', target: 60000, type: 'movement', unit: 'meters' },
    ],
    rewardSummary: 'Vintage Poppy skin + Unlocks Looey',
    unlocks: ['looey'],
  },
  finn: {
    characterId: 'finn',
    totalTasks: 6,
    tasks: [
      { id: 'ability_uses', description: 'Use Active Ability 40 times', target: 40, type: 'ability' },
      { id: 'machines', description: 'Finish 35 Machines', target: 35, type: 'extraction' },
      { id: 'items', description: 'Pick up 40 Items', target: 40, type: 'collection' },
      { id: 'floors', description: 'Survive 28 Floors', target: 28, type: 'survival' },
      { id: 'item_uses', description: 'Use 35 Items', target: 35, type: 'utility' },
      { id: 'travel', description: 'Travel 55,000 meters', target: 55000, type: 'movement', unit: 'meters' },
    ],
    rewardSummary: 'Vintage Finn skin',
    unlocks: [],
  },
  tisha: {
    characterId: 'tisha',
    totalTasks: 6,
    tasks: [
      { id: 'ability_uses', description: 'Use Active Ability 30 times', target: 30, type: 'ability' },
      { id: 'machines', description: 'Finish 30 Machines', target: 30, type: 'extraction' },
      { id: 'items', description: 'Pick up 30 Items', target: 30, type: 'collection' },
      { id: 'floors', description: 'Survive 25 Floors', target: 25, type: 'survival' },
      { id: 'item_uses', description: 'Use 30 Items', target: 30, type: 'utility' },
      { id: 'travel', description: 'Travel 50,000 meters', target: 50000, type: 'movement', unit: 'meters' },
    ],
    rewardSummary: 'Vintage Tisha skin + Unlocks Shelly',
    unlocks: ['shelly'],
  },
  brightney: {
    characterId: 'brightney',
    totalTasks: 6,
    tasks: [
      { id: 'ability_uses', description: 'Use Active Ability 150 times', target: 150, type: 'ability' },
      { id: 'blackouts', description: 'Experience 12 Blackouts', target: 12, type: 'environmental' },
      { id: 'machines', description: 'Finish 150 Machines', target: 150, type: 'extraction' },
      { id: 'twisteds', description: 'Encounter 75 Twisteds', target: 75, type: 'combat' },
      { id: 'items', description: 'Pick up 200 Items', target: 200, type: 'collection' },
      { id: 'travel', description: 'Travel 100,000 meters', target: 100000, type: 'movement', unit: 'meters' },
    ],
    rewardSummary: 'Vintage Brightney skin + Unlocks Vee',
    unlocks: ['vee'],
  },
  goob: {
    characterId: 'goob',
    totalTasks: 6,
    tasks: [
      { id: 'ability_uses', description: 'Use Active Ability 100 times', target: 100, type: 'ability' },
      { id: 'rescues', description: 'Rescue teammates with Grab 50 times', target: 50, type: 'utility' },
      { id: 'machines', description: 'Finish 100 Machines', target: 100, type: 'extraction' },
      { id: 'floors', description: 'Survive 40 Floors', target: 40, type: 'survival' },
      { id: 'items', description: 'Pick up 150 Items', target: 150, type: 'collection' },
      { id: 'travel', description: 'Travel 80,000 meters', target: 80000, type: 'movement', unit: 'meters' },
    ],
    rewardSummary: 'Vintage Goob skin',
    unlocks: [],
  },
  scraps: {
    characterId: 'scraps',
    totalTasks: 6,
    tasks: [
      { id: 'ability_uses', description: 'Use Active Ability 80 times', target: 80, type: 'ability' },
      { id: 'crafty_saves', description: 'Save items through Crafty passive 25 times', target: 25, type: 'utility' },
      { id: 'machines', description: 'Finish 80 Machines', target: 80, type: 'extraction' },
      { id: 'floors', description: 'Survive 35 Floors', target: 35, type: 'survival' },
      { id: 'item_uses', description: 'Use 50 Items', target: 50, type: 'utility' },
      { id: 'travel', description: 'Travel 75,000 meters', target: 75000, type: 'movement', unit: 'meters' },
    ],
    rewardSummary: 'Vintage Scraps skin',
    unlocks: [],
  },
  glisten: {
    characterId: 'glisten',
    totalTasks: 6,
    tasks: [
      { id: 'ability_uses', description: 'Use Active Ability 90 times', target: 90, type: 'ability' },
      { id: 'group_machines', description: 'Complete machines with teammates nearby 100 times', target: 100, type: 'extraction' },
      { id: 'machines', description: 'Finish 120 Machines', target: 120, type: 'extraction' },
      { id: 'floors', description: 'Survive 38 Floors', target: 38, type: 'survival' },
      { id: 'items', description: 'Pick up 130 Items', target: 130, type: 'collection' },
      { id: 'travel', description: 'Travel 85,000 meters', target: 85000, type: 'movement', unit: 'meters' },
    ],
    rewardSummary: 'Vintage Glisten skin',
    unlocks: [],
  },
  flutter: {
    characterId: 'flutter',
    totalTasks: 6,
    tasks: [
      { id: 'ability_uses', description: 'Use Active Ability 70 times', target: 70, type: 'ability' },
      { id: 'damage_reduction', description: 'Take reduced damage 40 times (via Airborne passive)', target: 40, type: 'combat' },
      { id: 'machines', description: 'Finish 70 Machines', target: 70, type: 'extraction' },
      { id: 'floors', description: 'Survive 32 Floors', target: 32, type: 'survival' },
      { id: 'item_uses', description: 'Use 45 Items', target: 45, type: 'utility' },
      { id: 'travel', description: 'Travel 70,000 meters', target: 70000, type: 'movement', unit: 'meters' },
    ],
    rewardSummary: 'Vintage Flutter skin',
    unlocks: [],
  },
  looey: {
    characterId: 'looey',
    totalTasks: 6,
    tasks: [
      { id: 'ability_uses', description: 'Use Active Ability 60 times', target: 60, type: 'ability' },
      { id: 'stuns', description: 'Stun Twisteds with Chomp 30 times', target: 30, type: 'combat' },
      { id: 'machines', description: 'Finish 75 Machines', target: 75, type: 'extraction' },
      { id: 'injured_floors', description: 'Survive 35 Floors while injured', target: 35, type: 'survival' },
      { id: 'items', description: 'Pick up 100 Items', target: 100, type: 'collection' },
      { id: 'travel', description: 'Travel 80,000 meters', target: 80000, type: 'movement', unit: 'meters' },
    ],
    rewardSummary: 'Vintage Looey skin + Unlocks Yatta',
    unlocks: ['yatta'],
  },
  razzle_dazzle: {
    characterId: 'razzle_dazzle',
    totalTasks: 6,
    tasks: [
      { id: 'ability_uses', description: 'Use Active Ability 80 times', target: 80, type: 'ability' },
      { id: 'mode_switches', description: 'Switch between Comedy and Tragedy modes 50 times', target: 50, type: 'ability' },
      { id: 'machines', description: 'Finish 90 Machines', target: 90, type: 'extraction' },
      { id: 'floors', description: 'Survive 15 even floors and 15 odd floors', target: 30, type: 'survival' },
      { id: 'items', description: 'Pick up 110 Items', target: 110, type: 'collection' },
      { id: 'travel', description: 'Travel 75,000 meters', target: 75000, type: 'movement', unit: 'meters' },
    ],
    rewardSummary: 'Vintage Razzle & Dazzle skin',
    unlocks: [],
  },
  shrimpo: {
    characterId: 'shrimpo',
    totalTasks: 6,
    tasks: [
      { id: 'ability_uses', description: 'Use Active Ability 20 times', target: 20, type: 'ability' },
      { id: 'aggro_all', description: 'Attract all Twisteds on floor 15 times', target: 15, type: 'combat' },
      { id: 'machines', description: 'Finish 15 Machines', target: 15, type: 'extraction' },
      { id: 'floors', description: 'Survive 20 Floors', target: 20, type: 'survival' },
      { id: 'item_uses', description: 'Use 20 Items', target: 20, type: 'utility' },
      { id: 'travel', description: 'Travel 40,000 meters', target: 40000, type: 'movement', unit: 'meters' },
    ],
    rewardSummary: 'Vintage Shrimpo skin (Ultimate Challenge Badge)',
    unlocks: [],
  },
  gigi: {
    characterId: 'gigi',
    totalTasks: 6,
    tasks: [
      { id: 'ability_uses', description: 'Use Active Ability 100 times', target: 100, type: 'ability' },
      { id: 'perfect_checks', description: 'Hit perfect skill checks 200 times', target: 200, type: 'extraction' },
      { id: 'machines', description: 'Finish 140 Machines', target: 140, type: 'extraction' },
      { id: 'floors', description: 'Survive 40 Floors', target: 40, type: 'survival' },
      { id: 'items', description: 'Pick up 150 Items', target: 150, type: 'collection' },
      { id: 'travel', description: 'Travel 90,000 meters', target: 90000, type: 'movement', unit: 'meters' },
    ],
    rewardSummary: 'Vintage Gigi skin',
    unlocks: [],
  },
  rodger: {
    characterId: 'rodger',
    totalTasks: 6,
    tasks: [
      { id: 'ability_uses', description: 'Use Active Ability 120 times', target: 120, type: 'ability' },
      { id: 'double_research', description: 'Collect double research capsules 100 times', target: 100, type: 'collection' },
      { id: 'machines', description: 'Finish 130 Machines', target: 130, type: 'extraction' },
      { id: 'floors', description: 'Survive 45 Floors', target: 45, type: 'survival' },
      { id: 'items', description: 'Pick up 180 Items', target: 180, type: 'collection' },
      { id: 'travel', description: 'Travel 95,000 meters', target: 95000, type: 'movement', unit: 'meters' },
    ],
    rewardSummary: 'Vintage Rodger skin',
    unlocks: [],
  },
  toodles: {
    characterId: 'toodles',
    totalTasks: 6,
    tasks: [
      { id: 'ability_uses', description: 'Use Active Ability 75 times', target: 75, type: 'ability' },
      { id: 'machines', description: 'Finish 30 Machines', target: 30, type: 'extraction' },
      { id: 'items', description: 'Pick up 35 Items', target: 35, type: 'collection' },
      { id: 'floors', description: 'Survive 30 Floors', target: 30, type: 'survival' },
      { id: 'item_uses', description: 'Use 30 Items', target: 30, type: 'utility' },
      { id: 'travel', description: 'Travel 50,000 meters', target: 50000, type: 'movement', unit: 'meters' },
    ],
    rewardSummary: 'Vintage Toodles skin + Unlocks Pebble',
    unlocks: ['pebble'],
  },
  teagan: {
    characterId: 'teagan',
    totalTasks: 6,
    tasks: [
      { id: 'ability_uses', description: 'Use Active Ability 110 times', target: 110, type: 'ability' },
      { id: 'tea_heals', description: 'Heal teammates with tea 60 times', target: 60, type: 'utility' },
      { id: 'machines', description: 'Finish 120 Machines', target: 120, type: 'extraction' },
      { id: 'floors', description: 'Survive 42 Floors', target: 42, type: 'survival' },
      { id: 'item_uses', description: 'Use 80 Items', target: 80, type: 'utility' },
      { id: 'travel', description: 'Travel 90,000 meters', target: 90000, type: 'movement', unit: 'meters' },
    ],
    rewardSummary: 'Vintage Teagan skin',
    unlocks: [],
  },
  cosmo: {
    characterId: 'cosmo',
    totalTasks: 6,
    tasks: [
      { id: 'ability_uses', description: 'Use Active Ability 130 times', target: 130, type: 'ability' },
      { id: 'item_shares', description: 'Share items with Crafty passive 75 times', target: 75, type: 'utility' },
      { id: 'machines', description: 'Finish 140 Machines', target: 140, type: 'extraction' },
      { id: 'floors', description: 'Survive 48 Floors', target: 48, type: 'survival' },
      { id: 'items', description: 'Pick up 200 Items', target: 200, type: 'collection' },
      { id: 'travel', description: 'Travel 100,000 meters', target: 100000, type: 'movement', unit: 'meters' },
    ],
    rewardSummary: 'Vintage Cosmo skin + Unlocks Sprout',
    unlocks: ['sprout'],
  },
  coal: {
    characterId: 'coal',
    totalTasks: 6,
    tasks: [
      { id: 'ability_uses', description: 'Use Active Ability 70 times', target: 70, type: 'ability' },
      { id: 'machines', description: 'Finish 70 Machines', target: 70, type: 'extraction' },
      { id: 'items', description: 'Pick up 95 Items', target: 95, type: 'collection' },
      { id: 'floors', description: 'Survive 32 Floors', target: 32, type: 'survival' },
      { id: 'item_uses', description: 'Use 45 Items', target: 45, type: 'utility' },
      { id: 'travel', description: 'Travel 70,000 meters', target: 70000, type: 'movement', unit: 'meters' },
    ],
    rewardSummary: 'Vintage Coal skin',
    unlocks: [],
  },
  ginger: {
    characterId: 'ginger',
    totalTasks: 6,
    tasks: [
      { id: 'ability_uses', description: 'Use Active Ability 85 times', target: 85, type: 'ability' },
      { id: 'machines', description: 'Finish 90 Machines', target: 90, type: 'extraction' },
      { id: 'items', description: 'Pick up 115 Items', target: 115, type: 'collection' },
      { id: 'floors', description: 'Survive 36 Floors', target: 36, type: 'survival' },
      { id: 'item_uses', description: 'Use 55 Items', target: 55, type: 'utility' },
      { id: 'travel', description: 'Travel 80,000 meters', target: 80000, type: 'movement', unit: 'meters' },
    ],
    rewardSummary: 'Vintage Ginger skin',
    unlocks: [],
  },
  cocoa: {
    characterId: 'cocoa',
    totalTasks: 6,
    tasks: [
      { id: 'ability_uses', description: 'Use Active Ability 90 times', target: 90, type: 'ability' },
      { id: 'machines', description: 'Finish 95 Machines', target: 95, type: 'extraction' },
      { id: 'items', description: 'Pick up 120 Items', target: 120, type: 'collection' },
      { id: 'floors', description: 'Survive 38 Floors', target: 38, type: 'survival' },
      { id: 'item_uses', description: 'Use 60 Items', target: 60, type: 'utility' },
      { id: 'travel', description: 'Travel 85,000 meters', target: 85000, type: 'movement', unit: 'meters' },
    ],
    rewardSummary: 'Vintage Cocoa skin',
    unlocks: [],
  },
  eggson: {
    characterId: 'eggson',
    totalTasks: 6,
    tasks: [
      { id: 'ability_uses', description: 'Use Active Ability 80 times', target: 80, type: 'ability' },
      { id: 'machines', description: 'Finish 85 Machines', target: 85, type: 'extraction' },
      { id: 'items', description: 'Pick up 110 Items', target: 110, type: 'collection' },
      { id: 'floors', description: 'Survive 34 Floors', target: 34, type: 'survival' },
      { id: 'item_uses', description: 'Use 52 Items', target: 52, type: 'utility' },
      { id: 'travel', description: 'Travel 78,000 meters', target: 78000, type: 'movement', unit: 'meters' },
    ],
    rewardSummary: 'Vintage Eggson skin',
    unlocks: [],
  },
  connie: {
    characterId: 'connie',
    totalTasks: 6,
    tasks: [
      { id: 'ability_uses', description: 'Use Active Ability 95 times', target: 95, type: 'ability' },
      { id: 'machines', description: 'Finish 100 Machines', target: 100, type: 'extraction' },
      { id: 'items', description: 'Pick up 130 Items', target: 130, type: 'collection' },
      { id: 'floors', description: 'Survive 40 Floors', target: 40, type: 'survival' },
      { id: 'item_uses', description: 'Use 65 Items', target: 65, type: 'utility' },
      { id: 'travel', description: 'Travel 88,000 meters', target: 88000, type: 'movement', unit: 'meters' },
    ],
    rewardSummary: 'Vintage Connie skin',
    unlocks: [],
  },
  yatta: {
    characterId: 'yatta',
    totalTasks: 6,
    tasks: [
      { id: 'ability_uses', description: 'Use Active Ability 95 times', target: 95, type: 'ability' },
      { id: 'machines', description: 'Finish 105 Machines', target: 105, type: 'extraction' },
      { id: 'items', description: 'Pick up 140 Items', target: 140, type: 'collection' },
      { id: 'floors', description: 'Survive 38 Floors', target: 38, type: 'survival' },
      { id: 'item_uses', description: 'Use 60 Items', target: 60, type: 'utility' },
      { id: 'travel', description: 'Travel 87,000 meters', target: 87000, type: 'movement', unit: 'meters' },
    ],
    rewardSummary: 'Vintage Yatta skin + Unlocks Blot',
    unlocks: ['blot'],
  },
  blot: {
    characterId: 'blot',
    totalTasks: 6,
    tasks: [
      { id: 'ability_uses', description: 'Use Active Ability 125 times', target: 125, type: 'ability' },
      { id: 'machines', description: 'Finish 135 Machines', target: 135, type: 'extraction' },
      { id: 'items', description: 'Pick up 175 Items', target: 175, type: 'collection' },
      { id: 'floors', description: 'Survive 44 Floors', target: 44, type: 'survival' },
      { id: 'item_uses', description: 'Use 70 Items', target: 70, type: 'utility' },
      { id: 'travel', description: 'Travel 98,000 meters', target: 98000, type: 'movement', unit: 'meters' },
    ],
    rewardSummary: 'Vintage Blot skin',
    unlocks: [],
  },
  flyte: {
    characterId: 'flyte',
    totalTasks: 6,
    tasks: [
      { id: 'ability_uses', description: 'Use Active Ability 105 times', target: 105, type: 'ability' },
      { id: 'machines', description: 'Finish 115 Machines', target: 115, type: 'extraction' },
      { id: 'items', description: 'Pick up 155 Items', target: 155, type: 'collection' },
      { id: 'floors', description: 'Survive 42 Floors', target: 42, type: 'survival' },
      { id: 'item_uses', description: 'Use 68 Items', target: 68, type: 'utility' },
      { id: 'travel', description: 'Travel 93,000 meters', target: 93000, type: 'movement', unit: 'meters' },
    ],
    rewardSummary: 'Vintage Flyte skin',
    unlocks: [],
  },
  rudie: {
    characterId: 'rudie',
    totalTasks: 6,
    tasks: [
      { id: 'ability_uses', description: 'Use Active Ability 100 times', target: 100, type: 'ability' },
      { id: 'machines', description: 'Finish 110 Machines', target: 110, type: 'extraction' },
      { id: 'items', description: 'Pick up 145 Items', target: 145, type: 'collection' },
      { id: 'floors', description: 'Survive 40 Floors', target: 40, type: 'survival' },
      { id: 'item_uses', description: 'Use 63 Items', target: 63, type: 'utility' },
      { id: 'travel', description: 'Travel 90,000 meters', target: 90000, type: 'movement', unit: 'meters' },
    ],
    rewardSummary: 'Vintage Rudie skin',
    unlocks: [],
  },
  astro: {
    characterId: 'astro',
    totalTasks: 6,
    tasks: [
      { id: 'ability_uses', description: 'Use Active Ability 140 times', target: 140, type: 'ability' },
      { id: 'stamina_restore', description: 'Restore teammate stamina 100 times', target: 100, type: 'utility' },
      { id: 'machines', description: 'Finish 150 Machines', target: 150, type: 'extraction' },
      { id: 'floors', description: 'Survive 50 Floors', target: 50, type: 'survival' },
      { id: 'items', description: 'Pick up 220 Items', target: 220, type: 'collection' },
      { id: 'travel', description: 'Travel 110,000 meters', target: 110000, type: 'movement', unit: 'meters' },
    ],
    rewardSummary: 'Vintage Astro skin',
    unlocks: [],
  },
  bassie: {
    characterId: 'bassie',
    totalTasks: 6,
    tasks: [
      { id: 'ability_uses', description: 'Use Active Ability 100 times', target: 100, type: 'ability' },
      { id: 'item_drops', description: 'Share items with teammates 80 times', target: 80, type: 'utility' },
      { id: 'machines', description: 'Finish 100 Machines', target: 100, type: 'extraction' },
      { id: 'floors', description: 'Survive 40 Floors', target: 40, type: 'survival' },
      { id: 'items', description: 'Pick up 180 Items', target: 180, type: 'collection' },
      { id: 'travel', description: 'Travel 90,000 meters', target: 90000, type: 'movement', unit: 'meters' },
    ],
    rewardSummary: 'Vintage Bassie skin (Easter Event)',
    unlocks: [],
  },
  bobette: {
    characterId: 'bobette',
    totalTasks: 6,
    tasks: [
      { id: 'ability_uses', description: 'Use Active Ability 90 times', target: 90, type: 'ability' },
      { id: 'stamina_boost', description: 'Boost teammate stamina recovery 100 times', target: 100, type: 'utility' },
      { id: 'machines', description: 'Finish 110 Machines', target: 110, type: 'extraction' },
      { id: 'floors', description: 'Survive 42 Floors', target: 42, type: 'survival' },
      { id: 'items', description: 'Pick up 160 Items', target: 160, type: 'collection' },
      { id: 'travel', description: 'Travel 95,000 meters', target: 95000, type: 'movement', unit: 'meters' },
    ],
    rewardSummary: 'Vintage Bobette skin (Christmas Event)',
    unlocks: [],
  },
  pebble: {
    characterId: 'pebble',
    totalTasks: 6,
    tasks: [
      { id: 'ability_uses', description: 'Use Active Ability 120 times', target: 120, type: 'ability' },
      { id: 'item_highlights', description: 'Highlight items for team 150 times', target: 150, type: 'utility' },
      { id: 'machines', description: 'Finish 60 Machines', target: 60, type: 'extraction' },
      { id: 'floors', description: 'Survive 45 Floors', target: 45, type: 'survival' },
      { id: 'items', description: 'Pick up 190 Items', target: 190, type: 'collection' },
      { id: 'travel', description: 'Travel 105,000 meters', target: 105000, type: 'movement', unit: 'meters' },
    ],
    rewardSummary: 'Vintage Pebble skin',
    unlocks: [],
  },
  shelly: {
    characterId: 'shelly',
    totalTasks: 6,
    tasks: [
      { id: 'ability_uses', description: 'Use Active Ability 135 times', target: 135, type: 'ability' },
      { id: 'extraction_boost', description: 'Boost teammate extraction speed 90 times', target: 90, type: 'utility' },
      { id: 'machines', description: 'Finish 160 Machines', target: 160, type: 'extraction' },
      { id: 'floors', description: 'Survive 48 Floors', target: 48, type: 'survival' },
      { id: 'items', description: 'Pick up 210 Items', target: 210, type: 'collection' },
      { id: 'travel', description: 'Travel 108,000 meters', target: 108000, type: 'movement', unit: 'meters' },
    ],
    rewardSummary: 'Vintage Shelly skin',
    unlocks: [],
  },
  sprout: {
    characterId: 'sprout',
    totalTasks: 6,
    tasks: [
      { id: 'ability_uses', description: 'Use Active Ability 110 times', target: 110, type: 'ability' },
      { id: 'heals', description: 'Heal teammates 70 times', target: 70, type: 'utility' },
      { id: 'machines', description: 'Finish 145 Machines', target: 145, type: 'extraction' },
      { id: 'floors', description: 'Survive 50 Floors', target: 50, type: 'survival' },
      { id: 'health_monitoring', description: 'Monitor team health status for 500 total seconds', target: 500, type: 'utility' },
      { id: 'travel', description: 'Travel 110,000 meters', target: 110000, type: 'movement', unit: 'meters' },
    ],
    rewardSummary: 'Vintage Sprout skin',
    unlocks: [],
  },
  vee: {
    characterId: 'vee',
    totalTasks: 6,
    tasks: [
      { id: 'ability_uses', description: 'Use Active Ability 150 times', target: 150, type: 'ability' },
      { id: 'twisted_highlights', description: 'Highlight Twisteds for team 200 times', target: 200, type: 'combat' },
      { id: 'machines', description: 'Finish 170 Machines', target: 170, type: 'extraction' },
      { id: 'floors', description: 'Survive 52 Floors', target: 52, type: 'survival' },
      { id: 'items', description: 'Pick up 230 Items', target: 230, type: 'collection' },
      { id: 'travel', description: 'Travel 115,000 meters', target: 115000, type: 'movement', unit: 'meters' },
    ],
    rewardSummary: 'Vintage Vee skin',
    unlocks: [],
  },
  'dandy-lethal': {
    characterId: 'dandy-lethal',
    totalTasks: 0,
    tasks: [],
    rewardSummary: 'No Mastery available (Lethal Character)',
    unlocks: [],
  },
};

export const getMasteryData = (characterId: string): CharacterMasteryData | null => {
  return MASTERY_DATA[characterId] ?? null;
};

export const getCharactersWithMastery = (): string[] => {
  return Object.keys(MASTERY_DATA).filter((id) => MASTERY_DATA[id].totalTasks > 0);
};

export const getUnlockChain = (characterId: string): string[] => {
  const chain: string[] = [];
  const visited = new Set<string>();

  const traverse = (id: string) => {
    if (visited.has(id)) {
      return;
    }
    visited.add(id);

    const data = MASTERY_DATA[id];
    if (!data) {
      return;
    }

    chain.push(id);
    data.unlocks.forEach((nextId) => traverse(nextId));
  };

  traverse(characterId);
  return chain;
};

export default MASTERY_DATA;
