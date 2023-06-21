import { runTestForAllViewports } from '~/cypress/support/util';
import { profiles } from '~/scripts/profiles';

describe('Main', () => {
  it('should display the main page', () => {
    runTestForAllViewports(() => {
      cy.visit('/');

      cy.findByText('Check out the diluz.ios:');

      cy.findByText('View the sourcecode on GitHub');

      cy.findByText('made with');
    });
  });

  it('should link to all profiles', () => {
    runTestForAllViewports(() => {
      profiles.forEach((profile) => {
        cy.visit('/');

        cy.findByText(profile.person.name.first).click();

        cy.url().should(
          'contain',
          `/${profile.person.name.first.toLowerCase()}`,
        );
      });
    });
  });

  it('should have the easteregg', () => {
    runTestForAllViewports(() => {
      cy.visit('/');

      cy.findByTestId('dvd-easteregg').should('be.hidden');

      for (let i = 0; i < 5; i++) {
        cy.findByText('© Sebastian Di Luzio').click();
      }

      cy.findByTestId('dvd-easteregg').should('be.visible');
    });
  });
});

export {};
