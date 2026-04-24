// pages/CheckoutPage.ts
import { Page } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  getCompleteMessage() {
    return this.page.locator('.complete-header');
  }

  async startCheckout() {
    await this.page.click('#checkout');
  }

  async fillInfo(firstName: string, lastName: string, zip: string) {
    await this.page.fill('#first-name', firstName);
    await this.page.fill('#last-name', lastName);
    await this.page.fill('#postal-code', zip);
  }

  async continue() {
    await this.page.click('#continue');
  }

  async finish() {
    await this.page.click('#finish');
  }
}