import { Given, When } from "@cucumber/cucumber";
import { pageFixture } from "../../hooks/pageFixture";


Given('El usuario se logea en {string}', async (s: string) => {
  await pageFixture.page.goto("https://login.lirmipre.com/login"); 
});


    Given('El usuario completa el campo Gamail con {string}', async (s: string) => {
    const usernameInput = await pageFixture.page.locator('//*[@id="email"]');
    await usernameInput.fill('alejandro.gamboa@lirmi.com');
    
  });
  
  
  Given('El usuario completa el campO Password con {string}', async (s: string) => {
    const usernameInput = await pageFixture.page.locator('//*[@id="password"]');
    await usernameInput.fill('secret');
    });


  When('eL uSuario hace click en {string} button', async (s: string) => {
    const practiceButton = await pageFixture.page.locator('//*[@id="submit"]');
    await practiceButton.click();
  });

