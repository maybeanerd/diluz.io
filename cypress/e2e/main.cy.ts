import { runTestForAllViewports } from '~/cypress/support/util';
import { profiles } from '~/scripts/profiles';

beforeEach(() => {
  cy.visit('/');
});

describe('Main', () => {
  it('should display the main page', () => {
    runTestForAllViewports(() => {
      cy.findByText('Check out the diluz.ios:');

      cy.findByText('View the sourcecode on GitHub');

      cy.findByText('made with');
    });
  });

  it('should link to all profiles', () => {
    runTestForAllViewports(() => {
      profiles.forEach((profile) => {
        cy.findByText(profile.person.name.first).click();

        cy.url().should('contain', `/${profile.person.name.first.toLowerCase()}`);

        cy.go('back');
      });
    });
  });
});

export {};
