import { Given, When } from "@cucumber/cucumber";
import { pageFixture } from "../../hooks/pageFixture";

Given('mfkdmfkdmf', async function () {
    await pageFixture.page.goto("https://login.lirmipre.com/login"); 
});

  Given('efkmkmllddfdfd', async function () {
    const usernameInput = await pageFixture.page.locator('//*[@id="email"]');
    await usernameInput.fill('prueba4@lirmi.com');
        
  });

  Given('kmkmkmldfdf', async function () {
    const usernameInput = await pageFixture.page.locator('//*[@id="password"]');
    await usernameInput.fill('secret');
    });



  When('dfdmlmñmlkmkl', async function () {
    const practiceButton = await pageFixture.page.locator('//*[@id="submit"]');
    await practiceButton.click();
  });
