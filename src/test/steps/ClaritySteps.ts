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
