const { test, expect } = require('@playwright/test');
import{loginPage}from "../pages/loginPage";
import{ addProductpage, productPage} from "../pages/addProductpage";

test.beforeEach('login', async ({ page }) => {
   
//login
  const login = new loginPage(page);
await login.gotologin();
await login.loginfuntion('sanjeeda.hossain11@gmail.com','secret');
  });


  test('add', async ({ page }) => {
   
   //Action
     const add=new addProductpage(page);
     await add.addProduct();
     
      });

      test('Edit', async ({ page }) => {
   
        //Action
          const add=new producteditPage(page);
          await add.editProduct();
      })