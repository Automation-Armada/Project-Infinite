import { Given,Then,When,setDefaultTimeout} from "@cucumber/cucumber"
import { pageFixture } from "../../hooks/pageFixture";
  

Given('El usuario abre la url .', async function () {
    await pageFixture.page.goto("https://practicetestautomation.com/"); 
  })


  
  
  When('El usuario hace click en {string} boton .', async function (string) {
    const practiceButton = await pageFixture.page.locator('//*[@id="menu-item-20"]');
    await practiceButton.click();
  })

  When('El usuario hace click {string} boton .', async (s: string) => {
    const loginButton = await pageFixture.page.locator('//*[@id="loop-container"]/div/article/div[2]/div[1]/div[1]/p/a');
    await loginButton.click();
}) 
  
  Given('El usuario completa el campo username con {string} .', async function (string) {
    const usernameInput = await pageFixture.page.locator('//*[@id="username"]');
    await pageFixture.page.evaluate(() => {
      const scrollPosition = 200; 
      document.documentElement.scrollTo(0, scrollPosition);
    })
        
    await usernameInput.fill('student');
    
  })

  
  Given('Completa el  campo password con {string} .', async function (string) {
    const usernameInput = await pageFixture.page.locator('//*[@id="password"]');
    await usernameInput.fill('Password123');

  })
  
  Given('Hace click en {string}', async (s: string) => {
    const testButton = await pageFixture.page.locator('//*[@id="submit"]');
    await pageFixture.page.waitForTimeout(1000);
    await testButton.click();
    await pageFixture.page.waitForTimeout(18000); // Esperar un breve tiempo para asegurar que la página se cargue completamente
    await pageFixture.page.screenshot({ path: 'captura.png' }); // Guardar la captura de pantalla
    
    // await pageFixture.page.waitForTimeout(10000);
  })

  Then('Se muestra el mensaje {string} .', async function (string) {
    await pageFixture.page.locator('//*[@id="loop-container"]/div/article/div[1]/h1');
    await pageFixture.page.waitForTimeout(2000);

  })
  
  When('El usuario hace click en el test {string}', async (s: string) => {
    const testexButton = await pageFixture.page.locator('//*[@id="loop-container"]/div/article/div[2]/div[2]/div[1]/p/a');
    await pageFixture.page.waitForTimeout(2000);
    await testexButton.click();

  })
 
 
  When('usuario hace click en {string}', async (s: string) => {
  const addButton = await pageFixture.page.locator('//*[@id="add_btn"]');
  await pageFixture.page.evaluate(() => {
    const scrollPosition = 200; 
    document.documentElement.scrollTo(0, scrollPosition);
  })
     await pageFixture.page.waitForTimeout(1000); 

   await addButton.click();
  })

  Then('Verifica que {string} se desplegue', async (s: string) => {
    await pageFixture.page.locator('//*[@id="row2"]/input');
    await pageFixture.page.waitForTimeout(4000);
  })

  
  When('completar {string} con {string}', async (s: string, s2: string) => {
    const rowInput = await pageFixture.page.locator('//*[@id="row2"]/input');
    await rowInput.fill('add');
    await pageFixture.page.waitForTimeout(2000);
  
  })

  Given('El usuario completa el campo con {string} .', async (s: string) => {
    const usernameInput = await pageFixture.page.locator('//*[@id="username"]');
    await pageFixture.page.evaluate(() => {
      const scrollPosition = 200; // Ajusta la posición de desplazamiento según sea necesario
      document.documentElement.scrollTo(0, scrollPosition);
    })
        
    await usernameInput.fill('student');
      
  })
  Given('Completa el  campo con {string} .', async (s: string) => {
    const usernameInput = await pageFixture.page.locator('//*[@id="password"]');
    await usernameInput.fill('Password12322');
  })

  
  When('El usuario escribe {string} en e campo {string}', async (s: string, s2: string) => {
    const usernameInput = await pageFixture.page.locator('//*[@id="username"]');
    await pageFixture.page.evaluate(() => {
      const scrollPosition = 200; // Ajusta la posición de desplazamiento según sea necesario
      document.documentElement.scrollTo(0, scrollPosition);
    })
        
    await usernameInput.fill('incorrectUser');
      
  })
  
  Then('Se muestra el error {string}', async (s: string) => {
    await pageFixture.page.locator('//*[@id="error"]');
    await pageFixture.page.waitForTimeout(2000);
  })

  Given('El usuario escribe con {string} en e campo {string}', async (s: string, s2: string) => {
    const passwordInput = await pageFixture.page.locator('//*[@id="password"]');
    await passwordInput.fill(' incorrectPassword');
  
  })

Then('Se muestra  {string}', async (s: string) => {
  await pageFixture.page.locator('//*[@id="error"]');
  await pageFixture.page.waitForTimeout(2000);
})


