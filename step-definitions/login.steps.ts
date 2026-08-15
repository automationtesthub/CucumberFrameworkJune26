import {Given,When,Then} from "@cucumber/cucumber"

import {Browser, chromium,expect} from '@playwright/test'

let page:any;


Given('User should be on login page',async function () {
 
  const browser = await chromium.launch({headless:false});
  const context = await browser.newContext();
  page = await context.newPage();
 
  await page.goto("http://localhost:100");


});

When('user enters the valid credentials and click login button',async function () {
  
  await page.locator("//input[@name='user_name']").fill("admin");
  await page.locator("//input[@name='user_password']").fill("admin");
  await page.locator("//input[@name='Login']").click();

});

Then('user should navigated to Home page', async function () {
  await expect(page.locator("//a[text()='Home']")).toBeVisible();
});

Then('User can validate the logout link', async function () {
 await expect(page.locator("//a[text()='Logout']")).toBeVisible();
});

When('user enters the invalid credentials and click login button',async function () {
   await page.locator("//input[@name='user_name']").fill("admin22");
  await page.locator("//input[@name='user_password']").fill("admin45");
  await page.locator("//input[@name='Login']").click();
});

Then('user should navigated to login page',async function () {
  await expect(page.locator("//input[@name='user_name']")).toBeVisible();
});

Then('User can validate the error message',async function () {
 await expect(page.locator("//*[contains(text(),'You must specify a valid username and password. ')]")).toBeVisible();
});