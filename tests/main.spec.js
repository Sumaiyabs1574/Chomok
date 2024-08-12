const { test, expect } = require('@playwright/test');
import{loginPage}from "../pages/loginPage";

test('Chomok', async ({ page }) => {
   
//login
  const login = new loginPage(page);
await login.gotologin();
await login.loginfuntion('sanjeeda.hossain11@gmail.com','secret');
 //page.waitForTimeout(6000);

  });
 