// pages/InventoryPage.ts
import { BasePage } from './BasePage';
import { Locator, expect } from '@playwright/test';

export class InventoryPage extends BasePage {
  private backpackAddBtn: Locator;
  private cartIcon: Locator;
  private inventoryList: Locator;

  constructor(page: any) {
    super(page);

    this.backpackAddBtn = this.page.locator(
      'button[data-test="add-to-cart-sauce-labs-backpack"]'
    );
    this.cartIcon = this.page.locator('.shopping_cart_link');
    this.inventoryList = this.page.locator('.inventory_list');
  }

  async open() {
    await this.page.goto('/inventory.html');
  }

  async isLoaded() {
    await expect(this.inventoryList).toBeVisible();
  }

  async addBackpackToCart() {
    await this.backpackAddBtn.click();
  }

  async openCart() {
    await this.cartIcon.click();
  }

  async addItemByName(name: string) {
    await this.page.locator(`text=${name}`).click();
  }
}