import { Given,Then,When} from "@cucumber/cucumber"
import { pageFixture } from "../../hooks/pageFixture";


Given('El usuario abre la pagina con la url {string}', async function (string) {
    await pageFixture.page.goto("https://clarity.microsoft.com/projects/view/hnvtpd92eo/dashboard?date=Today"); 
});

  When('El usuario hace click en {string}', async function (string) {
    const practiceButton = await pageFixture.page.locator('//*[@id="googleSignIn"]/span');
    await practiceButton.click();

  });

  When('El usuario completa el campo {string} con "alan.duarte@lirmi.com', async function (string) {
    const usernameInput = await pageFixture.page.locator('//*[@id="identifierId"]');
    // await pageFixture.page.evaluate(() => {
    //   const scrollPosition = 200; // Ajusta la posición de desplazamiento según sea necesario
    //   document.documentElement.scrollTo(0, scrollPosition);
    // })
        
    await usernameInput.fill('alan.duarte@lirmi.com');
    
});

  When('Hace click en {string}', async function (string) {
    const testButton = await pageFixture.page.waitForSelector('#identifierNext', { visible: true }); // Espera a que el botón sea visible
    await testButton.click();

});

  When('Completa el campo {string} con {string}', async function (string, string2) {
    const usernameInput = await pageFixture.page.locator('//*[@id="password"]');
    await pageFixture.page.waitForTimeout(10000);
    await usernameInput.fill('Odioamoto1!');
});

  When('hace click en next', async function () {
    const testButton = await pageFixture.page.locator('//*[@id="passwordNext"]');
    await pageFixture.page.waitForTimeout(1000);
    await testButton.click();
    await pageFixture.page.waitForTimeout(40000); // Esperar un breve tiempo para asegurar que la página se cargue completamente
    await pageFixture.page.screenshot({ path: 'captura.png' }); // Guardar la captura de pantalla
    
    await pageFixture.page.waitForTimeout(10000);
});

  Then('clarity carga correctamente', async function () {
    await pageFixture.page.locator('//*[@id="firstContentItem"]');
    await pageFixture.page.waitForTimeout(2000);
  });

