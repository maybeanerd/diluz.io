import { profiles } from '~/scripts/profiles';

describe('Profiles', () => {
  profiles.forEach((profile) => {
    const firstName = profile.person.name.first;
    it(`should display the profile page correctly for ${firstName}`, () => {
      cy.visit(`/${firstName}`);
      cy.compareSnapshot(firstName, 0.0);
      cy.compareSnapshot(firstName, 0.1);
    });
  });
});

export {};
