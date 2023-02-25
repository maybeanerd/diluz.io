import { defineConfig } from 'cypress';
import getCompareSnapshotsPlugin from 'cypress-visual-regression/dist/plugin';

export default defineConfig({
  screenshotsFolder: './cypress/snapshots/actual',
  video: false,
  trashAssetsBeforeRuns: true,
  env: {
    // SNAPSHOT_BASE_DIRECTORY: './cypress/snapshots/base',
    type: 'actual',
  },
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      getCompareSnapshotsPlugin(on, config);
    },
  },
});
