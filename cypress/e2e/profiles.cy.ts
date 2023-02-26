import { profiles } from '~/scripts/profiles';
import { runTestForAllViewports } from '~/cypress/support/util';

describe('Profiles', () => {
  profiles.forEach((profile) => {
    const firstName = profile.person.name.first;
    it(`should display the profile page correctly for ${firstName}`, () => {
      runTestForAllViewports(() => {
        cy.visit(`/${firstName}`);

        // Navbar
        cy.findByText('Home');
        profiles.forEach((profileInNavbar) => {
          cy.findByText(profileInNavbar.person.name.first);
        });

        // Projects sections
        cy.findByText('Projects and Jobs');

        // Footer
        cy.findByText('made with');
      });
    });
  });
});

export {};
