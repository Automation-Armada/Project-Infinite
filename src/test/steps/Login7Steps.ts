import { Given, When } from "@cucumber/cucumber";
import { pageFixture } from "../../hooks/pageFixture";

Given('dsndksndksndk', async function () {
    await pageFixture.page.goto("https://login.lirmipre.com/login"); 
});

  Given('knfkdnfknkdfnkdnfk', async function () {
    const usernameInput = await pageFixture.page.locator('//*[@id="email"]');
    await usernameInput.fill('pruebazz@lirmi.com');
        
  });


  Given('knfkdnfknkdfnkdnfkwhr', async function () {
    const usernameInput = await pageFixture.page.locator('//*[@id="password"]');
    await usernameInput.fill('secret');
    });


  When('kxfdfmdfmldmlm', async function () {
    const practiceButton = await pageFixture.page.locator('//*[@id="submit"]');
    await practiceButton.click();
  });

