import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';


dotenv.config({ path: '.env' });

export default defineConfig({
  testDir: './tests',

  use: {
    baseURL: process.env.BASE_URL,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure'
  },

  projects: [
    {
      name: 'setup',
      testMatch: /auth\.setup\.ts/
    },

    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        storageState: 'playwright/.auth/storageState.json'
      },
      dependencies: ['setup']
    }
  ]
});