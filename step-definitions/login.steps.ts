import data from "../testdata/data.json";
import { Given, When, Then } from "@cucumber/cucumber";

import {Browser, chromium,expect} from '@playwright/test'
import { LoginPage } from "../pages/loginpage";
import { HomePage } from "../pages/homepage";
import { LeadPage } from "../pages/leadpage";

//import { data } from "testdata/data.json";





let page:any;
let lp:LoginPage;
let hp:HomePage;
let ldp:LeadPage;
let testData: any;


Given('User should be on login page',async function () {

  

  
 
  const browser = await chromium.launch({headless:false});
  const context = await browser.newContext();
  page = await context.newPage();
 
  await page.goto("http://localhost:100");

  lp = new LoginPage(page);
  hp = new HomePage(page);
  ldp = new LeadPage(page);


});

When('user enters the valid credentials and click login button',async function () {
  
  // await page.locator("//input[@name='user_name']").fill("admin");
  // await page.locator("//input[@name='user_password']").fill("admin");
  // await page.locator("//input[@name='Login']").click();
    lp.login(this.testData.username, this.testData.password);

});

Then('user should navigated to Home page', async function () {
  //await expect(page.locator("//a[text()='Home']")).toBeVisible();
  hp.verifyHomeLink();


});

Then('User can validate the logout link', async function () {
 //await expect(page.locator("//a[text()='Logout']")).toBeVisible();
 hp.verifyLogoutLink();
});

When('user enters the invalid credentials and click login button',async function () {
  //  await page.locator("//input[@name='user_name']").fill("admin22");
  // await page.locator("//input[@name='user_password']").fill("admin45");
  // await page.locator("//input[@name='Login']").click();
  lp.login(this.testData.username, this.testData.password);
});

Then('user should navigated to login page',async function () {
  // await expect(page.locator("//input[@name='user_name']")).toBeVisible();
  lp.verifyUserName();
});

Then('User can validate the error message',async function () {
//  await expect(page.locator("//*[contains(text(),'You must specify a valid username and password. ')]")).toBeVisible();
 lp.verifyErrorMsg();
});


Then('validate lead creation with lastname and company',async function () {
await hp.clickNewLead();
 await ldp.createlead(this.testData.lastname,this.testData.company);

});

When('user enters the username as {string} and password as {string} and click login button',async function (uid, pwd) {
  //   await page.locator("//input[@name='user_name']").fill(uid);
  //   await page.waitForTimeout(2000);
  // await page.locator("//input[@name='user_password']").fill(pwd);
  // await page.locator("//input[@name='Login']").click();
  lp.login(uid,pwd);

});

When('verify lead creation with lastname {string} and company {string}',async function (string, string2, dataTable) {
  
  const records = dataTable.hashes();

    for (const data of records) {
  // await page.locator("//a[text()='New Lead']").click();
  await hp.clickNewLead();
  // await page.locator("//input[@name='lastname']").fill(data.lastname);
  // await page.locator("//input[@name='company']").fill(data.company);
  // await page.locator("(//input[@name='button'])[1]").click();
  await ldp.createlead(data.lastname,data.company);
    }
});

When('user click on logout',async function () {

  // await page.locator("//a[text()='Logout']").click();
  await hp.clickLogout();
 
});