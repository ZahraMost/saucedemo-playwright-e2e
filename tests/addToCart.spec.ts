// addToCart.spec.ts
import { test } from '../fixtures/fixtures';

test('Add to cart flow', async ({ inventoryPage, cartPage }) => {
  await inventoryPage.addBackpackToCart();
  await inventoryPage.openCart();

  await cartPage.verifyItemInCart();
});