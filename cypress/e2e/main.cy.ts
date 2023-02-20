import { viewPortSizes } from '~/cypress/support/util';

describe('Main', () => {
  viewPortSizes.forEach((viewPortSize) => {
    it(`should display the main page correctly (${viewPortSize})`, () => {
      cy.viewport(viewPortSize);

      cy.visit('/');

      cy.compareSnapshot(viewPortSize, 0.1);
    });
  });
});

export {};
