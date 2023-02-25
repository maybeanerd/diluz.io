import { profiles } from '~/scripts/profiles';
import { takeComparisonSnapshots } from '~/cypress/support/util';

describe('Profiles', () => {
  profiles.forEach((profile) => {
    const firstName = profile.person.name.first;
    it(`should display the profile page correctly for ${firstName}`, () => {
      takeComparisonSnapshots(firstName);
    });
  });
});

export {};
