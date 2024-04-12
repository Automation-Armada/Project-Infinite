// import { Given,Then,When,setDefaultTimeout} from "@cucumber/cucumber"
// import { pageFixture } from "../../hooks/pageFixture";


// Given('El usuario abre la pagina con {string}', async (s: string) => {
//   await pageFixture.page.goto("https://open.spotify.com/"); 
// });


//   When('El usuario Hace click en {string}', async function (string) {
//     const loginButton = await pageFixture.page.locator('//*[@id="main"]/div/div[2]/div[3]/header/div[4]/div[1]/button[2]/span');
//     await loginButton.click();
//   });


//   When('Completa el campo correo', async function () {
//     const usernameInput = await pageFixture.page.locator('//*[@id="login-username"]');
//     await pageFixture.page.evaluate(() => {
//       const scrollPosition = 400; // Ajusta la posición de desplazamiento según sea necesario
//       document.documentElement.scrollTo(0, scrollPosition);
//     });

//     await usernameInput.fill('thiagotobiias23@gmail.com');
    
//   });


//   When('Completa el campo contraseña', async function () {
//     const usernameInput = await pageFixture.page.locator('//*[@id="login-password"]');
//     await usernameInput.fill('messi2022A');
 
//   });


//   When('El hace click en {string}', async function (string) {
//     const loginButton = await pageFixture.page.locator('//*[@id="login-button"]/span[1]');
//     await loginButton.click();

//   });

//   When('Click en {string}', async (s: string) => {
//     const thisButton = await pageFixture.page.locator('//*[@id="main"]/div/div[2]/div[2]/footer/div/div[2]/div/div[1]/button');
//     await thisButton.click();
// });


