// pages/BasePage.ts
import { Page, Locator } from '@playwright/test';

export class BasePage {
  constructor(protected page: Page) {}

  locator(selector: string): Locator {
    return this.page.locator(selector);
  }

  async click(selector: string) {
    await this.locator(selector).click();
  }

  async fill(selector: string, value: string) {
    await this.locator(selector).fill(value);
  }

  async goto(path: string) {
    await this.page.goto(path);
  }

  async waitForVisible(selector: string) {
    await this.locator(selector).waitFor({ state: 'visible' });
  }

  async getText(selector: string): Promise<string> {
    return await this.locator(selector).innerText();
  }
}