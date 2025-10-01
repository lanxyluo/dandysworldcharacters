import { curatedTrinketBuilds } from '../data/trinketBuilds';
import { TrinketDataValidator } from './trinketValidation';

export class TrinketDataMigrator {
  static migrateFromPlaceholder(): void {
    if (typeof window === 'undefined') {
      console.warn('TrinketDataMigrator can only run in a browser environment.');
      return;
    }

    console.log('Starting trinket data migration...');

    if (!localStorage.getItem('trinket-builds-backup')) {
      localStorage.setItem('trinket-builds-backup', JSON.stringify(curatedTrinketBuilds));
    }

    const validationResults = curatedTrinketBuilds.flatMap((group) =>
      group.builds.map((build) => TrinketDataValidator.validateRecommendation(build)),
    );

    const totalIssues = validationResults.reduce((count, result) => count + result.issues.length, 0);

    console.log(`Validation complete: ${totalIssues} issue(s) detected.`);

    validationResults.forEach((result, index) => {
      if (!result.isValid) {
        console.warn(`Build #${index + 1} issues:`, result.issues);
      }
      if (result.warnings.length > 0) {
        console.info(`Build #${index + 1} warnings:`, result.warnings);
      }
    });
  }
}
