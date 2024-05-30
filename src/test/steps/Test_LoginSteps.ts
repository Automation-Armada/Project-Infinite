import { Given,When, setDefaultTimeout } from '@cucumber/cucumber';
import { pageFixture } from "../../hooks/pageFixture";
import { chromium, Browser, Page } from 'playwright';
import * as fs from 'fs';

setDefaultTimeout(60 * 1000); // Incrementa el tiempo de espera predeterminado

interface Account {
  username: string;
  password: string;
}

let browser: Browser;

Given('I login with account {int}', async function (accountIndex: number) {
  try {
    browser = await chromium.launch({ headless: false }); // Cambiado a no headless para depuración
    const page: Page = await browser.newPage();

    // Leer las cuentas desde el archivo JSON
    const accounts: Account[] = JSON.parse(fs.readFileSync('accounts.json', 'utf-8'));

    // Obtener las credenciales de la cuenta correspondiente
    const account = accounts[accountIndex];

    // Realizar el proceso de login
    await pageFixture.page.goto('https://login.lirmipre.com/login');
    await pageFixture.page.fill('//*[@id="email"]', account.username);
    await pageFixture.page.fill('//*[@id="password"]', account.password);
    await pageFixture.page.click('//*[@id="submit"]');

    // Esperar a que el login sea exitoso
    await pageFixture.page.waitForSelector('#logged-in-element', { timeout: 10000 }); // Cambia esto según tu aplicación
    console.log(`Login successful for account: ${account.username}`);


    // Guardar el contexto de la página para futuras acciones
    this.page = page;
  } catch (error) {
    console.error('Error during login:', error);
    if (browser) {
      await browser.close();
    }
  }
});

// When('clicks', async function () {
//     try {
//       // Completar algún campo adicional después de iniciar sesión
//       await pageFixture.page.locator("/html/body/main/section[1]/div[2]/nav/ul/li[2]/a/span[2]");
//       await pageFixture.page.click();
//       console.log('Field completed successfully');
//     } catch (error) {
//       console.error('Error during field completion:', error);
//     }
//   });

//   When('clicks again', async function () {
//     try {
//       // Completar algún campo adicional después de iniciar sesión
//       const button = await pageFixture.page.locator("/html/body/main/div[1]/div/div[2]/div[1]/div[2]/div/div[3]/div/button");
//       await button.click();
//       console.log('Field completed successfully');
//     } catch (error) {
//       console.error('Error during field completion:', error);
//     }
//   });
  
//   When('clicks agAin', async function () {
//     try {
//       // Completar algún campo adicional después de iniciar sesión
//       const aula = await pageFixture.page.locator("/html/body/main/div[2]/div[2]/section/div[1]/div/button[2]");
//       await aula.click();
//       console.log('Field completed successfully');
//     } catch (error) {
//       console.error('Error during field completion:', error);
//     }
//   });

//   When('Clicks again', async function () {
//     try {
//       // Completar algún campo adicional después de iniciar sesión
//       const clase = await pageFixture.page.locator("/html/body/main/div[2]/div[2]/section/div[2]/div/div[1]/div/div[2]/button[2]");
//       await clase.click();
//       console.log('Field completed successfully');
//     } catch (error) {
//       console.error('Error during field completion:', error);
//     }
//   });
// // Asegúrate de cerrar el navegador después de todas las pruebas
// AfterAll(async () => {
//   if (browser) {
//     await browser.close();
//   }
// });
