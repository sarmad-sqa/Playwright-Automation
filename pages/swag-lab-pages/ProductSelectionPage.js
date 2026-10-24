import { expect } from '@playwright/test';

export class ProductSelectionPage {
    constructor(page) {
        this.page = page;

        // Product on inventory page
        this.productname = this.page.locator('[data-test="item-5-title-link"]');

        // Actual product detail container
        this.productDetails = this.page.locator('div.inventory_details');

        // Cart
        this.cartIconVisibility = this.page.locator('.shopping_cart_badge');

        this.cartIconCounter = this.page.locator('.shopping_cart_badge');
    }

    async ProductSelection() {

        // Click Fleece Jacket
        await this.productname.click();

        console.log('🔥 PRODUCT CLICKED');
        console.log('URL:', this.page.url());

        // Confirm detail page
        await expect(this.page).toHaveURL(/inventory-item\.html\?id=5/);

        // Wait for actual product detail section
        await expect(this.productDetails).toBeVisible();

        // Add to Cart button inside product detail
        const addToCartButton = this.productDetails.getByRole('button',{ name: 'Add to cart' });

        await expect(addToCartButton).toBeVisible();
        await expect(addToCartButton).toBeEnabled();

        await addToCartButton.click();

        console.log('🔥 ADDED TO CART');

        // Verify cart
        await expect(this.cartIconVisibility).toBeVisible();
        await expect(this.cartIconCounter).toHaveText('1');
    }
}