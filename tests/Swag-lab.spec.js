//@ts-check
import { test, expect } from '@playwright/test';

test('Swag-lab login test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await expect(page).toHaveURL('https://www.saucedemo.com/');
  await expect (page.locator('.login_logo')).toBeVisible();
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button',{name:'Login'}).click();
  //await page.locator('.product_sort_container').selectOption('Name (Z to A)');
  
 /* await page.locator('.product_sort_container').selectOption('za');
  await page.locator('.product_sort_container').selectOption('lohi');
   await page.locator('.product_sort_container').selectOption('hilo');
  await page.locator('.product_sort_container').selectOption('az'); */

 // await page.getByText('Sauce Labs Fleece Jacket').click();
  //await page.getByRole('button', {name :'Add to cart'}).click()
  await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
  await expect(page.locator('.shopping_cart_badge')).toBeVisible();
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

  await page.locator('.shopping_cart_link').click();
  await page.getByRole("button", {name:'checkout'}).click();
  await page.getByPlaceholder("First Name").fill('Sarmad');
  await page.getByPlaceholder("Last Name").fill('Sarwar');
  await page.getByPlaceholder("Zip/Postal Code").fill('12345');
  await page.getByRole("button", {name:'Continue'}).click();
  await page.getByRole("button", {name:'Finish'}).click();
  await expect(page.locator('.complete-header')).toBeVisible();
 // await expect(page.locator('.complete-header')).toHaveText('THANK YOU FOR YOUR ORDER');
  await page.getByRole('button',{name:'Generate PDF order'}).click();
  await page.getByRole('button',{name:'Back Home'}).click();
  await page.locator('#react-burger-menu-btn').click();
  await page.locator('[data-test="logout-sidebar-link"]').click();


}
)