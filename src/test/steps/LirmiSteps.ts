// import { Given, setDefaultTimeout } from '@cucumber/cucumber';
// import { chromium, Browser, Page } from 'playwright';
// import * as fs from 'fs';

// setDefaultTimeout(60 * 1000); // Incrementa el tiempo de espera predeterminado

// interface Account {
//   username: string;
//   password: string;
// }

// let browser: Browser;

// Given('I login with account {int}', async function (accountIndex: number) {
//   browser = await chromium.launch();
//   const page: Page = await browser.newPage();

//   // Leer las cuentas desde el archivo JSON
//   const accounts: Account[] = JSON.parse(fs.readFileSync('accounts.json', 'utf-8'));

//   // Obtener las credenciales de la cuenta correspondiente
//   const account = accounts[accountIndex];

//   // Realizar el proceso de login
//   await page.goto('https://login.lirmipre.com/login');
//   await page.fill('input[name="username"]', account.username);
//   await page.fill('input[name="password"]', account.password);
//   await page.click('button[type="submit"]');

//   // Esperar a que el login sea exitoso
//   await page.waitForSelector('#logged-in-element'); // Cambia esto según tu aplicación

//   // Guardar el contexto de la página para futuras acciones
//   this.page = page;
// });

// // AfterAll(async () => {
// //   await browser.close();
// // });
