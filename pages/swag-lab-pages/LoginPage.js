export class LoginPage{
    constructor(page){
        this.page = page;
        this.usernameInput = this.page.getByPlaceholder('Username');
        this.passwordInput = this.page.getByPlaceholder('Password');
        this.loginButton   = this.page.getByRole('button',{name:'Login'});
    }

    async goto(){
        await this.page.goto('https://www.saucedemo.com/');
    }   

    async login(){
        await this.usernameInput.fill('standard_user');
        await this.passwordInput.fill('secret_sauce');
        await this.loginButton.click();
    }
}