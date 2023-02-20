describe('Main', () => {
  it('should display the main page correctly', () => {
    cy.visit('/');

    cy.compareSnapshot('main', 0.0);
    cy.compareSnapshot('main', 0.1);
  });
});

export {};
