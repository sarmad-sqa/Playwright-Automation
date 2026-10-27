import { test , expect }  from '@playwright/test';
import { LoginPage }      from '../pages/swag-lab-pages/TestDataLoginPage.js';
import { loginData } from './test-data/loginData.js';   

/*test ('Login using test data', async ({page}) =>{
const myPage = new LoginPage(page);
await myPage.goto();*/

for (const user of loginData) {
    test(`Login using ${user.username}`, async ({ page }) => {
        const myPage = new LoginPage(page);
        await myPage.goto();
        await myPage.login(user.username, user.password);
        await expect(page.locator('.app_logo')).toBeVisible();
});
}

//await myPage.login(loginData.username, loginData.password);
//await myPage.login(loginData[0].username, loginData[0].password);
//await expect (page.locator('.app_logo')).toBeVisible();
//}
//)