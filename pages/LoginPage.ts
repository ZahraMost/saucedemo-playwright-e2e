// pages/LoginPage.ts
import { BasePage } from './BasePage';
import { config } from '../config/config';
import { expect } from '@playwright/test';

export class LoginPage extends BasePage {

  private selectors = {
    username: '#user-name',
    password: '#password',
    loginBtn: '#login-button',
    error: '[data-test="error"]'
  };

  async open() {
    await this.goto(config.baseURL);
  }

  async login(username: string, password: string) {
    await this.fill(this.selectors.username, username);
    await this.fill(this.selectors.password, password);
    await this.click(this.selectors.loginBtn);
  }

  async assertLoginSuccess() {
    await expect(this.page).toHaveURL(/inventory/);
  }

  async assertLoginError() {
    await expect(this.locator(this.selectors.error)).toBeVisible();
  }
}