import { Given, When } from "@cucumber/cucumber";
import { pageFixture } from "../../hooks/pageFixture";

Given('fikdnlfsñfwek', async function () {
    await pageFixture.page.goto("https://login.lirmipre.com/login"); 
});


  Given('oldfofeoemo', async function () {
    const usernameInput = await pageFixture.page.locator('//*[@id="email"]');
    await usernameInput.fill('camilo.mora@lirmi.com');
        
  });

  Given('fdkfmdkfmkldmflm', async function () {
    const usernameInput = await pageFixture.page.locator('//*[@id="password"]');
    await usernameInput.fill('secret');
    });


  When('emdlsmdlmlmlm', async function () {
    const practiceButton = await pageFixture.page.locator('//*[@id="submit"]');
    await practiceButton.click();
  });