import { Given, When } from "@cucumber/cucumber";
import { pageFixture } from "../../hooks/pageFixture";

  Given('El usuario abre la pAgina', async function () {
    await pageFixture.page.goto("https://login.lirmipre.com/login"); 
  });


  Given('Se logea', async function () {
    const usernameInput = await pageFixture.page.locator('//*[@id="email"]');
    await usernameInput.fill('alejandro.gamboa@lirmi.com');
        
  });


  Given('completa el campO', async function () {
    const usernameInput = await pageFixture.page.locator('//*[@id="password"]');
    await usernameInput.fill('secret');
    });


  When('Hace clicK', async function () {
    const practiceButton = await pageFixture.page.locator('//*[@id="submit"]');
    await practiceButton.click();
  });
