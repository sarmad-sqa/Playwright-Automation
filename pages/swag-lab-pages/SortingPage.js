export class SortingPage {
    constructor(page){
        this.page=page;
        this.SortingFrom = this.page.locator('.product_sort_container');
    }

async SortZA(){
    await this.SortingFrom.selectOption('za');
}

async SortLtoH(){
    await this.SortingFrom.selectOption('lohi');
}

async SortHtoL(){
    await this.SortingFrom.selectOption('hilo');
}

async SortAtoZ(){
    await this.SortingFrom.selectOption('az'); 

}
}
