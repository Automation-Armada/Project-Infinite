import { Given, When } from "@cucumber/cucumber";
import { pageFixture } from "../../hooks/pageFixture";

Given('fndknfjdnfjdjnfn', async function () {
    await pageFixture.page.goto("https://login.lirmipre.com/login"); 
});



  Given('skdnksndknskndknk', async function () {
    const usernameInput = await pageFixture.page.locator('//*[@id="email"]');
    await usernameInput.fill('allen.rodriguez@lirmi.com');
        
  });

  Given('fkdnkfnkknknk', async function () {
    const usernameInput = await pageFixture.page.locator('//*[@id="password"]');
    await usernameInput.fill('secret');
    });

  When('malmlmlmlmlm', async function () {
    const practiceButton = await pageFixture.page.locator('//*[@id="submit"]');
    await practiceButton.click();
  });
