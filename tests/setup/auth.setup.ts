// tests/setup/auth.setup.ts
import { test as setup, expect } from '@playwright/test';
import { config } from '../../config/config';
import { users } from '../../test-data/users';

setup('authenticate', async ({ page }) => {
  await page.goto(config.baseURL);

  await page.fill('#user-name', users.standard.username);
  await page.fill('#password', users.standard.password);
  await page.click('#login-button');

  await expect(page).toHaveURL(/inventory/);

  await page.context().storageState({
    path: 'playwright/.auth/storageState.json'
  });
});