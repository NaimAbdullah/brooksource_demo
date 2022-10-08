import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testMatch: ["stepDef/brooksourcetests/validateBrooksourceURL.test.ts"],
  use: {
    headless: false,
    screenshot: "on",
    video: "retain-on-failure",
    launchOptions: {
      slowMo: 1000
    }
  },
  retries: 0,
  reporter: [["dot"], ["json", {
    outputFile: "jsonReports/jsonReports.json"
  }], ["html", {
    open: "always"
  }]]
};

export default config;
