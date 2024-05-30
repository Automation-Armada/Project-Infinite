import { Given, When } from "@cucumber/cucumber";
import { pageFixture } from "../../hooks/pageFixture";

Given('sdksnkdnsknd', async function () {
    await pageFixture.page.goto("https://login.lirmipre.com/login"); 
});


  Given('ffefefefefefe', async function () {
    const usernameInput = await pageFixture.page.locator('//*[@id="email"]');
    await usernameInput.fill('alex.silva@lirmi.com');
        
  });


  Given('knknknknknkn', async function () {
    const usernameInput = await pageFixture.page.locator('//*[@id="password"]');
    await usernameInput.fill('secret');
    });


  When('oomlmlmlmlmlm', async function () {
    const practiceButton = await pageFixture.page.locator('//*[@id="submit"]');
    await practiceButton.click();
  });
