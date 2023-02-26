import type Cypress from 'cypress';

const viewPortSizes: Array<Cypress.ViewportPreset> = [
  'iphone-6',
  'samsung-s10',
  'ipad-2',
  'macbook-13',
];

export function runTestForAllViewports(
  testingFunction: () => void | Promise<void>,
) {
  viewPortSizes.forEach((viewPort) => {
    cy.viewport(viewPort);

    return testingFunction();
  });
}

export function findAtLeastOneByText(text:string) {
  cy.findAllByText(text).should('have.length.at.least', 1);
}
