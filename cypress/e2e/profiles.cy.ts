import { profiles } from '~/scripts/profiles';
import { viewPortSizes } from '~/cypress/support/util';

describe('Profiles', () => {
  profiles.forEach((profile) => {
    viewPortSizes.forEach((viewPortSize) => {
      const firstName = profile.person.name.first;
      it(`should display the profile page correctly for ${firstName} (${viewPortSize})`, () => {
        cy.viewport(viewPortSize);

        cy.visit(`/${firstName}`);

        cy.compareSnapshot(`${firstName} (${viewPortSize})`, 0.1);
      });
    });
  });
});

export {};
