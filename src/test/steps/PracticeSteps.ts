import { Given,Then,When,setDefaultTimeout} from "@cucumber/cucumber"
import { pageFixture } from "../../hooks/pageFixture";
  
Given('El usuario abre la url .', async function () {
    await pageFixture.page.goto("https://practicetestautomation.com/practice-test-login/"); 
  });


  Given('El usuario completa el campo username con {string} .', async function (string) {
    const usernameInput = await pageFixture.page.locator('//*[@id="username"]');
    await usernameInput.fill('student');
  });


  Given('Completa el  campo password con {string} .', async function (string) {
    const usernameInput = await pageFixture.page.locator('//*[@id="password"]');
    await pageFixture.page.waitForTimeout(2000);
    await usernameInput.fill('Password123');

  });


  When('El usuario hace click en {string} boton .', async function (string) {
    const submitButton = await pageFixture.page.locator('//*[@id="submit"]');
  await submitButton.click();

  });


  Then('Se muestra el mensaje {string} .', async function (string) {
    await pageFixture.page.locator('//*[@id="loop-container"]/div/article/div[1]/h1');
  });

  
//     Given('Open page', async function () {
//         await pageFixture.page.goto("https://practicetestautomation.com/practice-test-exceptions/"); 
//     });


//     When('Click Add button', async function () {
//         const submitButton = await pageFixture.page.locator('//*[@id="add_btn"]');
//         await submitButton.click();
//     });


//     Then('Wait for the second row to load', async function () {
//         await pageFixture.page.waitForTimeout(2000);
//     });


//     When('Type text into the second input field', async function () {
//         const usernameInput = await pageFixture.page.locator('//*[@id="row2"]/input');
//         await pageFixture.page.waitForTimeout(2000);
//         await usernameInput.fill('Add');
//     });


//     When('Push Save button', async function () {
//         const saveButton = await pageFixture.page.locator('//*[@id="save_btn"]');
//         await saveButton.click();
// ;
//     });


//     Then('Verify text saved', async function () {
//         await pageFixture.page.locator('//*[@id="confirmation"]');
//     });
