import data from "../testdata/data.json";
import { Given, When, Then } from "@cucumber/cucumber";

import {Browser, chromium,expect} from '@playwright/test'

import { CustomWorld } from '../support/world';



//import { data } from "testdata/data.json";







let testData: any;


Given('User should be on login page',async function () {

   await this.page.goto("http://localhost:100");



  this.loginPage = this.pom.getLoginPage();
  this.homePage = this.pom.getHomePage();
  this.leadPage = this.pom.getLeadPage();
  


});

When('user enters the valid credentials and click login button',async function () {
  
  // await page.locator("//input[@name='user_name']").fill("admin");
  // await page.locator("//input[@name='user_password']").fill("admin");
  // await page.locator("//input[@name='Login']").click();
   // this.loginPage.login(this.testData.username, this.testData.password);
     this.pom.getLoginPage().login(this.testData.username, this.testData.password);

});

Then('user should navigated to Home page', async function () {
  //await expect(page.locator("//a[text()='Home']")).toBeVisible();
  this.homePage.verifyHomeLink();


});

Then('User can validate the logout link', async function () {
 //await expect(page.locator("//a[text()='Logout']")).toBeVisible();
 this.homePage.verifyLogoutLink();
});

When('user enters the invalid credentials and click login button',async function () {
  //  await page.locator("//input[@name='user_name']").fill("admin22");
  // await page.locator("//input[@name='user_password']").fill("admin45");
  // await page.locator("//input[@name='Login']").click();
  this.loginPage.login(this.testData.username, this.testData.password);
});

Then('user should navigated to login page',async function () {
  // await expect(page.locator("//input[@name='user_name']")).toBeVisible();
  this.loginPage.verifyUserName();
});

Then('User can validate the error message',async function () {
//  await expect(page.locator("//*[contains(text(),'You must specify a valid username and password. ')]")).toBeVisible();
 this.loginPage.verifyErrorMsg();
});


Then('validate lead creation with lastname and company',async function () {
await this.homePage.clickNewLead();
 await this.leadPage.createlead(this.testData.lastname,this.testData.company);

});

When('user enters the username as {string} and password as {string} and click login button',async function (uid, pwd) {
  //   await page.locator("//input[@name='user_name']").fill(uid);
  //   await page.waitForTimeout(2000);
  // await page.locator("//input[@name='user_password']").fill(pwd);
  // await page.locator("//input[@name='Login']").click();
  this.loginPage.login(uid,pwd);

});

When('verify lead creation with lastname {string} and company {string}',async function (string, string2, dataTable) {
  
  const records = dataTable.hashes();

    for (const data of records) {
  // await page.locator("//a[text()='New Lead']").click();
  await this.homePage.clickNewLead();
  // await page.locator("//input[@name='lastname']").fill(data.lastname);
  // await page.locator("//input[@name='company']").fill(data.company);
  // await page.locator("(//input[@name='button'])[1]").click();
  await this.leadPage.createlead(data.lastname,data.company);
    }
});

When('user click on logout',async function () {

  // await page.locator("//a[text()='Logout']").click();
  await this.homePage.clickLogout();
 
});