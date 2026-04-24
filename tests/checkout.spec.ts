// checkout.spec.ts
import { test, expect } from '../fixtures/fixtures';

test('Complete checkout flow', async ({ inventoryPage, cartPage, checkoutPage }) => {
  await inventoryPage.addBackpackToCart();
  await inventoryPage.openCart();

  await cartPage.verifyItemInCart();

  await checkoutPage.startCheckout();
  await checkoutPage.fillInfo('Ali', 'Testi', '12345');
  await checkoutPage.continue();
  await checkoutPage.finish();

  await expect(checkoutPage.page).toHaveURL(/checkout-complete/);
});