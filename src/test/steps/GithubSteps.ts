// import { Given,Then,When,setDefaultTimeout} from "@cucumber/cucumber"
// import { pageFixture } from "../../hooks/pageFixture";

//   Given('El usuario abre la url {string}', async function (string) {
//     await pageFixture.page.goto("https://github.com/");  
//     });             


//   When('El usuario hace click en sign in {string}', async function (string) {
//     const signButton = await pageFixture.page.locator('/html/body/div[1]/div[4]/main/div[1]/div[2]/div/div/div[2]/div[2]/form/div/button');
//     await signButton.click(); 
//  });


//   When('Completa el campo {string}', async function (string) {
//     const correoInput = await pageFixture.page.locator('//*[@id="login_field"]');
//     await correoInput.fill('turkthiago3@gmail.com');
//   });

//   When('Completa el campo {string}', async function (string) {
//     const passInput = await pageFixture.page.locator('//*[@id="password"]');
//     await passInput.fill('messi2023A');

//   });


//   When('El usuario presiona {string}', async function (string) {
//     const signButton = await pageFixture.page.locator('//*[@id="login"]/div[4]/form/div/input[13]');
//     await signButton.click();
//     await pageFixture.page.waitForTimeout(5000);

//   });


//   When('El usuario proporciona {string}', async function (string) {
//     const recoveryButton = await pageFixture.page.locator('//*[@id="login"]/div[4]/div/ul/li/a');
//     await recoveryButton.click();
//   });


//   When('Completa el campo {string}', async function (string) {
//     const passInput = await pageFixture.page.locator('//*[@id="app_totp"]');
//     await passInput.fill('6f2f4-d1087');
//   });


//   When('Hace click en  {string}', async function (string) {
//     const verifyButton = await pageFixture.page.locator('//*[@id="login"]/form/div[3]/div[2]/button');
//     await verifyButton.click();
//     await pageFixture.page.waitForTimeout(3000);
  
//   });

//   When('Hace click en la {string}|', async function (string) {
//     const barraButton = await pageFixture.page.locator('//*[@id="dialog-show-dialog-f97ff4eb-51ae-498c-956e-f64d95fd558c"]');
//     await barraButton.click();
//     await pageFixture.page.waitForTimeout(3000);
  
//   });


//   When('click en {string}', async function (string) {
//     const barraButton = await pageFixture.page.locator('//*[@id="item-a1444295-ef48-4280-bf47-681f897f0580"]/span[2]');
//     await barraButton.click();
//     await pageFixture.page.waitForTimeout(5000);
  
//   });

//   Then('project-infinite se muestra', async function () {
//     await pageFixture.page.locator('//*[@id="repo-title-component"]/strong/a');
//     await pageFixture.page.waitForTimeout(5000);
//   });
