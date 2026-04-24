// login.spec.ts
import { test } from '../fixtures/fixtures';
import { LoginPage } from '@pages/LoginPage';

test('@smoke login works', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await page.goto('/');

  await loginPage.login('wrong_user', 'wrong_pass');

  await loginPage.assertLoginError();
});