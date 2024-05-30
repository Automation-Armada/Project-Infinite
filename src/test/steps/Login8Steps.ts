import { Given, When } from "@cucumber/cucumber";
import { pageFixture } from "../../hooks/pageFixture";

Given('kndfkdnsdksnkn', async function () {
    await pageFixture.page.goto("https://login.lirmipre.com/login"); 
});

  Given('dkfkknlmj', async function () {
    const usernameInput = await pageFixture.page.locator('//*[@id="email"]');
    await usernameInput.fill('carolina.silva@lirmi.com');
        
  });


  Given('skdnskdkmkmk', async function () {
    const usernameInput = await pageFixture.page.locator('//*[@id="password"]');
    await usernameInput.fill('secret');
    });


  When('ksndknknkn', async function () {
    const practiceButton = await pageFixture.page.locator('//*[@id="submit"]');
    await practiceButton.click();
  });
