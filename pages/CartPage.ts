// pages/CartPage.ts
import { Page, expect } from '@playwright/test';

export class CartPage {
  readonly page: Page;

  private cartItem = '.cart_item';

  constructor(page: Page) {
    this.page = page;
  }

  async verifyItemInCart() {
    await expect(this.page.locator(this.cartItem)).toBeVisible();
  }
}