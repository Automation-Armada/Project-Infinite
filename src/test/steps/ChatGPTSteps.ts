// import { Given,Then,When,setDefaultTimeout} from "@cucumber/cucumber"
// import { pageFixture } from "../../hooks/pageFixture";

// setDefaultTimeout(80000);


// Given('El usuario abre la url {string}', async function (string) {
//     await pageFixture.page.goto("https://chat.openai.com/");  
// })



// When('Completar la pregunta con {string}', async (s: string) => {
//     const preguntaInput = await pageFixture.page.locator('//*[@id="prompt-textarea"]');
//     await preguntaInput.fill('Hola mi nombre es Infinite, soy un framework de automatizacion de preubas');
// })

// When('Hacer click en {string}', async (s: string) => {
//       const enviarButton = await pageFixture.page.locator('//*[@id="__next"]/div[1]/div[2]/main/div[2]/div[2]/form/div/div[2]/div/button');
//       await pageFixture.page.waitForTimeout(3000);
//       await enviarButton.click();
    
// })
    

// Given('El usuario la pregunta con {string}', async (s: string) => {
//         const preguntaInput = await pageFixture.page.locator('//*[@id="prompt-textarea"]');
//         await pageFixture.page.waitForTimeout(3000);
//         await preguntaInput.fill('Estoy construido con  playwright,cucumber y typescript');

// })

// When('El usuario completa en campo con {string}', async (s: string) => {
//     const preguntaInput = await pageFixture.page.locator('//*[@id="prompt-textarea"]');
//     await preguntaInput.fill('Cuentame un poco de playwright');
//     // await pageFixture.page.waitForTimeout(3000);
  
    
// })


// When('El usuario escribe en el campo   {string}', async (s: string) => {
//     const pregunta2Input = await pageFixture.page.locator('//*[@id="prompt-textarea"]');
//     await pregunta2Input.fill('En que beneficia a mi framework tener  plawright ,cucumber y typescript como dependencia');
    
// })
  
// When('El usuario escribe {string}', async (s: string) => {
//         const preguntaInput = await pageFixture.page.locator('//*[@id="prompt-textarea"]');
//         await preguntaInput.fill('gracias por tu ayuda');
//         await pageFixture.page.waitForTimeout(10000);
  
//     })



