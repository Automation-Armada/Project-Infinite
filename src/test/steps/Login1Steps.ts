import { Given, When } from "@cucumber/cucumber";
import { pageFixture } from "../../hooks/pageFixture";


Given('sdnsdnsndinsnis', async function () {
    await pageFixture.page.goto("https://login.lirmipre.com/login"); 
});


  Given('sdsdmskdmksdmk', async function () {
    const usernameInput = await pageFixture.page.locator('//*[@id="email"]');
    await usernameInput.fill('alejandro.gamboa@lirmi.com');
        
  });


  Given('kndfkdfnkdnfk', async function () {
    const usernameInput = await pageFixture.page.locator('//*[@id="password"]');
    await usernameInput.fill('secret');
    });


  When('sdsdsdsdsdsds', async function () {
    const practiceButton = await pageFixture.page.locator('//*[@id="submit"]');
    await practiceButton.click();
  });