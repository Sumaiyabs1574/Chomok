exports.loginPage=
class loginPage{

constructor(page){
this.page=page;

this.emailInput="#email";
this.passwordInput="#password";
this.loginButton ="(//button[normalize-space()='Sign in'])[1]";
this.productPage="(//a[@class='bg-gray-200 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold transition-all'])[1]";
    }
async gotologin(){

    await this.page.goto('http://13.229.14.238:8080/auth/sign-in');

}
async loginfuntion (email,password){

await this.page.locator(this.emailInput).fill(email);
await this.page.locator(this.passwordInput).fill(password);
await this.page.locator(this.loginButton).click();
await this.page.locator(this.productPage).click();

}


}