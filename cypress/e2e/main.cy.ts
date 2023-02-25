import { takeComparisonSnapshots } from '~/cypress/support/util';

describe('Main', () => {
  it('should display the main page correctly', () => {
    takeComparisonSnapshots();
  });
});

export {};
