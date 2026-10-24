import { test , expect }  from '@playwright/test';
import { LoginPage }      from '../pages/swag-lab-pages/TestDataLoginPage.js';
import { loginData } from './test-data/loginData.js';   

test ('Login using test data', async ({page}) =>{
const myPage = new LoginPage(page);
await myPage.goto();
await myPage.login(loginData.username, loginData.password);
await expect (page.locator('.app_logo')).toBeVisible();
}
)