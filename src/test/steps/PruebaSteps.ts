import { Given, When } from "@cucumber/cucumber";
import { pageFixture } from "../../hooks/pageFixture";

Given('The user opens the URL.', async function () {
    await pageFixture.page.goto('https://practicetestautomation.com/'); 
  })


  When('The user clicks on the {string} button.', async function (string) {
    const practiceButton = await pageFixture.page.locator('remplaza_con_xpath');
    await practiceButton.click();
  })


  When('The user clicks on the {string} button.', async function (string) {
    const practiceButton = await pageFixture.page.locator('remplaza_con_xpath');
    await practiceButton.click();
  });


  Given('The user fills in the username field with {string}.', async function (string) {
    const usernameInput = await pageFixture.page.locator('remplaza_con_xpath');
    await pageFixture.page.evaluate(() => {
      const scrollPosition = 200; // Ajusta la posición de desplazamiento según sea necesario
      document.documentElement.scrollTo(0, scrollPosition);
    })
        
    await usernameInput.fill('remplaza_con_username');
    
  })


  Given('Fills in the password field with {string}.', async function (string) {
    const usernameInput = await pageFixture.page.locator('remplaza_con_xpath');
    await usernameInput.fill('remplaza_con_password');

  })


  When('Clicks on {string}.', async function (string) {
    const testButton = await pageFixture.page.locator('remplaza_con_xpath');
    await pageFixture.page.waitForTimeout(1000);
    await testButton.click();
  });
