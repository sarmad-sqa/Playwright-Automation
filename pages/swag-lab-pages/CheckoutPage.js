export class CheckoutPage{
    constructor(page){
        this.page = page;
        this.ShoppingCart = this.page.locator('.shopping_cart_link');
        this.CheckoutButton = this.page.getByRole('button', {name :'Checkout'});
        this.CheckoutFirstName = this.page.getByPlaceholder("First Name");
        this.CheckoutLastName  = this.page.getByPlaceholder("Last Name");
        this.CheckoutZipCode = this.page.getByPlaceholder("Zip/Postal Code");
        this.CheckoutContinue = this.page.getByRole("button", {name : 'continue'});
        this.CheckoutFinish = this.page.getByRole("button", {name: 'Finish'});
        this.CheckoutPDF = this.page.getByRole("button", {name : 'Generate PDF order'});
        this.BackToHome = this.page.getByRole("button", {name : 'Back Home'});
    }

    async CheckoutProcess (){
        await this.ShoppingCart.click();
        await this.CheckoutButton.click();
        await this.CheckoutFirstName.fill('Sarmad');
        await this.CheckoutLastName.fill('Sarwar');
        await this.CheckoutZipCode.fill('54000');
        await this.CheckoutContinue.click();
        await this.CheckoutFinish.click();
        await this.CheckoutPDF.click();
        await this.BackToHome.click();
    }
}