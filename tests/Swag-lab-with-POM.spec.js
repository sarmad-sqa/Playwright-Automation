import { test } from '@playwright/test';
import {LoginPage} from '../pages/swag-lab-pages/LoginPage';
import {SortingPage} from '../pages/swag-lab-pages/SortingPage';
import {ProductSelectionPage} from '../pages/swag-lab-pages/ProductSelectionPage';
import {CheckoutPage} from '../pages/swag-lab-pages/CheckoutPage';
import { LogoutPage } from '../pages/swag-lab-pages/LogoutPage';


test('Login via POM', async ({page}) => {

const ForLogin = new LoginPage(page);
const ForSorting = new SortingPage(page);
const ForSelectingProduct = new ProductSelectionPage(page);
const ForCheckout = new CheckoutPage(page);
const ForLogout = new LogoutPage(page);


await ForLogin.goto();
await ForLogin.login();

await ForSorting.SortZA();
await ForSorting.SortLtoH();
await ForSorting.SortHtoL();
await ForSorting.SortAtoZ();

await ForSelectingProduct.ProductSelection();

await ForCheckout.CheckoutProcess();

await ForLogout.LogoutAction();
}
)

