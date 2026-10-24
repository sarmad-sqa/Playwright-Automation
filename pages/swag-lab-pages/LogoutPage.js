export class LogoutPage {
    constructor(page){
        this.page = page;
        this.LogoutMenu = this.page.locator('#react-burger-menu-btn');
        this.LogoutLink = this.page.locator('[data-test="logout-sidebar-link"]');
    }

    async LogoutAction (){
        await this.LogoutMenu.click();
        await this.LogoutLink.click();

    }
}