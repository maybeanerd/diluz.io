import { profiles } from '~/scripts/profiles';
import { runTestForAllViewports } from '~/cypress/support/util';

describe('Profiles', () => {
  profiles.forEach((profile) => {
    const firstName = profile.person.name.first.toLowerCase();

    describe(`Profile: ${firstName}`, () => {
      it('should have the navbar', () => {
        runTestForAllViewports(() => {
          cy.visit(`/${firstName}`);

          cy.findByText('Home').should('be.hidden');

          cy.findByTestId('navbar-hamburger').click();

          cy.findByText('Home').should('be.visible');

          cy.findByText('Home').click();

          cy.url().should('contain', '/');

          cy.findByText('Check out the diluz.ios:');

          profiles.forEach((profileInNavbar) => {
            cy.visit(`/${firstName}`);

            cy.findByText(profileInNavbar.person.name.first).should(
              'be.hidden',
            );
            cy.findByTestId('navbar-hamburger').click();

            const firstNameInNavbar = profileInNavbar.person.name.first;

            cy.findByText(firstNameInNavbar).should('be.visible');

            if (firstNameInNavbar.toLowerCase() === firstName) {
              cy.findByText(firstNameInNavbar)
                .parent()
                .parent()
                .should('have.class', 'v-list-item--active');
              return;
            }
            cy.findByText(firstNameInNavbar)
              .parent()
              .parent()
              .should('not.have.class', 'v-list-item--active');

            cy.findByText(firstNameInNavbar).click();

            cy.url().should('contain', `/${firstNameInNavbar.toLowerCase()}`);

            cy.findByText('Home').should('be.hidden');
          });
        });
      });

      it('should have the footer', () => {
        runTestForAllViewports(() => {
          cy.visit(`/${firstName}`);

          cy.findByText('made with');

          cy.findByText('© Sebastian Di Luzio');
        });
      });

      it('should have the projects and jobs', () => {
        runTestForAllViewports(() => {
          cy.visit(`/${firstName}`);

          cy.findByText('Projects and Jobs');

          // TODO add useful tests
        });
      });

      // TODO add tests for the other sections
    });
  });
});

export {};
