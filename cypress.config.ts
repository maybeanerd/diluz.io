import { defineConfig } from 'cypress';
import getCompareSnapshotsPlugin from 'cypress-visual-regression/dist/plugin';

export default defineConfig({
  env: {
    screenshotsFolder: './cypress/snapshots/actual',
    SNAPSHOT_BASE_DIRECTORY: './cypress/snapshots/base',
    trashAssetsBeforeRuns: true,
    video: false,
    type: 'actual',
  },
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      getCompareSnapshotsPlugin(on, config);
    },
  },
});
