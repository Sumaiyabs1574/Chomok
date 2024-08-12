exports.addProductpage=
class addProductpage{

constructor(page){
this.page=page;

this.addButton="(//a[normalize-space()='Add'])[1]";
this.addtea="(//button[contains(text(),'Add')])[2]";
this.unitprice="(//input[@value='0'])[1]";
this.memberPrice="(//input[@value='0'])[2]"
this.stock="(//input[@value='0'])[3]";
this.addProductsToWarehouseButton ="(//button[normalize-space()='Add Product(s) to Warehouse'])[1]"
    }

    async addProduct() {
await this.page.locator(this.addButton).click();
await this.page.locator(this.addtea).click();
await this.page.mouse.wheel(0, 500); 
await this.page.locator(this.unitprice).fill('80');
await this.page.locator(this.memberPrice).fill('50');
await this.page.locator( this.stock).fill('2000');
await this.page.locator(this.addProductsToWarehouseButton).click();
    }



async productDetails(){

    await this.page.locator(this.emailInput).fill(email);

}



async editStock(){


}

async  productEdit(){}



async productRemove(){


}




}