
import { test, expect } from '@playwright/test';

async function login (page){
  await page.goto('https://www.saucedemo.com/');
  await expect(page).toHaveURL('https://www.saucedemo.com/');
  await expect(page.locator('.login_logo')).toBeVisible();
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button',{name:'Login'}).click();
}

async function sorting (page){
  await page.locator('.product_sort_container').selectOption('za');
  await page.locator('.product_sort_container').selectOption('lohi');
  await page.locator('.product_sort_container').selectOption('hilo');
  await page.locator('.product_sort_container').selectOption('az'); 

}

async function selectProduct (page){
async function selectProduct(page) {
  await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();

  await expect(page.locator('.shopping_cart_badge')).toBeVisible();
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
}
}

async function checkout (page){
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


test('Swag-lab login test', async ({ page }) => {
  await login(page);
  await sorting(page);
  await selectProduct(page);
  await checkout(page);
}
)