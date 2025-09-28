import { getAllCharacters } from '../data/characters';
import type { Character } from '../types/character';
import type {
  CharacterRecommendation,
  TeamAnalysis,
  UserPreferences,
  RecommendationDifficulty,
  RecommendationRole,
  UnlockPriority,
} from '../types/character-recommendations';

type StatKey = 'health' | 'movementSpeed' | 'extractionSpeed' | 'stealth' | 'stamina' | 'skillCheck';

const statKeys: StatKey[] = ['health', 'movementSpeed', 'extractionSpeed', 'stealth', 'stamina', 'skillCheck'];

const getStatValue = (character: Character, key: StatKey): number => {
  if (character.attributes && typeof character.attributes[key] === 'number') {
    return character.attributes[key] ?? 0;
  }

  if (character.stats && typeof character.stats[key] === 'number') {
    return Number(character.stats[key]) || 0;
  }

  return 0;
};

const getIchorCost = (character: Character): number | null => {
  if (character.unlockRequirements?.ichorCost != null) {
    return character.unlockRequirements.ichorCost;
  }

  if (character.requirements?.ichor != null) {
    return character.requirements.ichor;
  }

  return null;
};

const clampScore = (score: number): number => Math.max(0, Math.min(100, score));

export class CharacterRecommender {
  private readonly characters: Character[] = getAllCharacters();

  getRecommendations(preferences: UserPreferences): CharacterRecommendation[] {
    return this.characters
      .map((character) => this.scoreCharacter(character, preferences))
      .filter((rec) => rec.recommendationScore > 30)
      .sort((a, b) => b.recommendationScore - a.recommendationScore)
      .slice(0, 8);
  }

  analyzeTeam(teamIds: string[]): TeamAnalysis {
    const team = teamIds
      .map((id) => this.characters.find((character) => character.id === id))
      .filter((character): character is Character => Boolean(character));

    const analysis: TeamAnalysis = {
      strengths: [],
      weaknesses: [],
      missingRoles: [],
      recommendations: [],
      synergies: [],
      conflicts: [],
    };

    if (team.length === 0) {
      return analysis;
    }

    const extractorCount = team.filter((character) => getStatValue(character, 'extractionSpeed') >= 4).length;
    const distractorCount = team.filter((character) => getStatValue(character, 'movementSpeed') >= 4).length;
    const supportCount = team.filter((character) => ['sprout', 'cosmo', 'teagan'].includes(character.id)).length;
    const stealthExperts = team.filter((character) => getStatValue(character, 'stealth') >= 4).length;

    if (extractorCount >= 2) {
      analysis.strengths.push('Strong machine completion potential.');
    }
    if (distractorCount >= 1) {
      analysis.strengths.push('At least one reliable distraction runner.');
    }
    if (supportCount >= 1) {
      analysis.strengths.push('Team sustain and healing are covered.');
    }
    if (stealthExperts >= 1) {
      analysis.strengths.push('Stealth options available for risky objectives.');
    }

    if (extractorCount === 0) {
      analysis.weaknesses.push('No dedicated extractor for machines.');
      analysis.missingRoles.push('Extraction specialist');
    }
    if (distractorCount === 0) {
      analysis.weaknesses.push('No high-mobility distraction option.');
      analysis.missingRoles.push('Distraction runner');
    }
    if (supportCount === 0) {
      analysis.weaknesses.push('Lacks healing or team sustain.');
      analysis.missingRoles.push('Support specialist');
    }
    if (stealthExperts === 0) {
      analysis.weaknesses.push('Stealth objectives may be risky.');
    }

    if (analysis.missingRoles.includes('Extraction specialist')) {
      analysis.recommendations.push('Add an extractor such as Vee, Glisten, or Pebble.');
    }
    if (analysis.missingRoles.includes('Distraction runner')) {
      analysis.recommendations.push('Add a high-speed runner like Tisha or Pebble.');
    }
    if (analysis.missingRoles.includes('Support specialist')) {
      analysis.recommendations.push('Add a support such as Sprout, Cosmo, or Teagan.');
    }

    team.forEach((character) => {
      const mobility = getStatValue(character, 'movementSpeed');
      const stamina = getStatValue(character, 'stamina');

      if (mobility >= 4 && stamina >= 4) {
        analysis.synergies.push(`${character.name} thrives when paired with long chase specialists.`);
      }

      if (mobility <= 2 && stamina <= 2) {
        analysis.conflicts.push(`${character.name} struggles in high-pressure chase scenarios.`);
      }
    });

    return analysis;
  }

  private scoreCharacter(character: Character, prefs: UserPreferences): CharacterRecommendation {
    let score = 50;
    const reasons: string[] = [];
    const warnings: string[] = [];

    if (prefs.unlocked_characters.includes(character.id)) {
      score += 10;
      reasons.push('Already unlocked and ready to deploy.');
    }

    switch (prefs.experience) {
      case 'new':
        if (['tisha', 'boxten', 'poppy', 'sprout'].includes(character.id)) {
          score += 25;
          reasons.push('Friendly learning curve for new players.');
        }
        if (character.type === 'main') {
          score -= 20;
          warnings.push('Main story characters demand advanced unlock requirements.');
        }
        break;
      case 'experienced':
        if (character.type === 'main' || character.rarity === 'rare') {
          score += 10;
          reasons.push('Offers complex mechanics suited for veterans.');
        }
        break;
      default:
        break;
    }

    if (prefs.preferred_playstyle === 'aggressive') {
      if (getStatValue(character, 'movementSpeed') >= 4) {
        score += 15;
        reasons.push('High mobility supports aggressive rotations.');
      }
      if (getStatValue(character, 'stealth') <= 2) {
        score -= 10;
        warnings.push('Limited stealth can make escapes harder.');
      }
    }

    if (prefs.preferred_playstyle === 'support') {
      if (['sprout', 'cosmo', 'teagan'].includes(character.id)) {
        score += 20;
        reasons.push('Exceptional team healing and sustain.');
      }
    }

    if (prefs.preferred_playstyle === 'cautious') {
      if (getStatValue(character, 'stealth') >= 4) {
        score += 15;
        reasons.push('Reliable stealth for risk-free objectives.');
      } else {
        warnings.push('Limited stealth options for cautious play.');
      }
    }

    const ichorCost = getIchorCost(character);
    if (ichorCost != null) {
      if (ichorCost > prefs.available_ichor) {
        score -= 30;
        warnings.push(`Requires ${ichorCost} Ichor, which exceeds your current budget.`);
      } else if (ichorCost === 0) {
        reasons.push('No Ichor cost required.');
      } else if (ichorCost <= prefs.available_ichor) {
        score += 5;
        reasons.push('Unlockable with your available Ichor.');
      }
    }

    if (prefs.current_team?.length) {
      const teamScore = this.evaluateTeamFit(character, prefs.current_team);
      score += teamScore;
      if (teamScore > 0) {
        reasons.push('Fills a gap in your current roster.');
      }
    }

    if (prefs.preferred_floors === 'late' && character.type === 'main') {
      score += 5;
      reasons.push('Scales well for late-floor challenges.');
    }

    return {
      characterId: character.id,
      recommendationScore: clampScore(score),
      reasons,
      warnings,
      difficulty: this.getDifficulty(character),
      role: this.getRole(character),
      teamFit: this.getTeamFitRoles(character),
      unlockPriority: this.getUnlockPriority(character, prefs),
    };
  }

  private evaluateTeamFit(character: Character, currentTeam: string[]): number {
    const teamCharacters = currentTeam
      .map((id) => this.characters.find((c) => c.id === id))
      .filter((c): c is Character => Boolean(c));

    let synergy = 0;

    const hasExtractor = teamCharacters.some((member) => getStatValue(member, 'extractionSpeed') >= 4);
    const hasDistractor = teamCharacters.some((member) => getStatValue(member, 'movementSpeed') >= 4);
    const hasSupport = teamCharacters.some((member) => ['sprout', 'cosmo', 'teagan'].includes(member.id));

    if (!hasExtractor && getStatValue(character, 'extractionSpeed') >= 4) {
      synergy += 15;
    }
    if (!hasDistractor && getStatValue(character, 'movementSpeed') >= 4) {
      synergy += 15;
    }
    if (!hasSupport && ['sprout', 'cosmo', 'teagan'].includes(character.id)) {
      synergy += 15;
    }

    return synergy;
  }

  private getDifficulty(character: Character): RecommendationDifficulty {
    if (character.type === 'main' || character.rarity === 'legendary') {
      return 'advanced';
    }
    if (character.rarity === 'rare' || character.rarity === 'twisted') {
      return 'intermediate';
    }
    return 'beginner';
  }

  private getRole(character: Character): RecommendationRole {
    if (['sprout', 'cosmo', 'teagan'].includes(character.id)) {
      return 'support';
    }
    if (getStatValue(character, 'extractionSpeed') >= 4) {
      return 'extractor';
    }
    if (getStatValue(character, 'movementSpeed') >= 4) {
      return 'distractor';
    }
    return 'hybrid';
  }

  private getTeamFitRoles(character: Character): string[] {
    const roles: string[] = [];

    if (getStatValue(character, 'extractionSpeed') >= 3) {
      roles.push('Machine completion specialist');
    }
    if (getStatValue(character, 'movementSpeed') >= 4) {
      roles.push('Distraction runner');
    }
    if (['sprout', 'cosmo', 'teagan'].includes(character.id)) {
      roles.push('Team support');
    }
    if (getStatValue(character, 'stealth') >= 4) {
      roles.push('Stealth operative');
    }

    return roles;
  }

  private getUnlockPriority(character: Character, prefs: UserPreferences): UnlockPriority {
    if (prefs.unlocked_characters.includes(character.id)) {
      return 'immediate';
    }

    const ichorCost = getIchorCost(character);

    if (character.type === 'main') {
      return 'long_term';
    }

    if (ichorCost == null) {
      return 'short_term';
    }

    if (ichorCost <= prefs.available_ichor) {
      return 'immediate';
    }

    if (ichorCost <= prefs.available_ichor * 2) {
      return 'short_term';
    }

    return 'long_term';
  }
}

export const STAT_KEYS: StatKey[] = [...statKeys];
export const getCharacterStat = (character: Character, key: StatKey): number => getStatValue(character, key);
