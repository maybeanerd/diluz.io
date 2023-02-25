import type Cypress from 'cypress';

const viewPortSizes: Array<Cypress.ViewportPreset> = [
  'iphone-6',
  'samsung-s10',
  'ipad-2',
  'macbook-13',
];

export function takeComparisonSnapshots(page: string = '') {
  viewPortSizes.forEach((viewPort) => {
    cy.viewport(viewPort);

    cy.visit(`/${page}`);

    cy.compareSnapshot(`${page ? `${page}-` : ''}${viewPort}`, 0.1);
  });
}
