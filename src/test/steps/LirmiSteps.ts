import { Given,Then,When,setDefaultTimeout} from "@cucumber/cucumber"
import { pageFixture } from "../../hooks/pageFixture";


       Given('El usuario abre la url', async function () {
       await pageFixture.page.goto("https://sso.lirmi.dev/login");  
         });             
   

         Given('Completa el campo {string} con {string}', async function (string, string2) {
            const correoInput = await pageFixture.page.locator('//*[@id="email"]');
            await correoInput.fill('alan.duarte@lirmi.com');
         });   


         Given('Completa el  campo {string} con {string}', async (s: string, s2: string) => {
            const contraseñaInput = await pageFixture.page.locator('//*[@id="password"]');
            await contraseñaInput.fill('Alan2024');
           }); 
            
         
         When('El usuario hace click en {string}', async function (string) {
            const submitButton = await pageFixture.page.locator('//*[@id="submit"]');
            await submitButton.click();
        })    
 
         Then('La pagina carga corectamente', async function () {
            await pageFixture.page.locator('//*[@id="app"]/section[1]/div[1]/div/div/div/h1/span[2]');
         // await pageFixture.page.waitForTimeout(10000);   
         
         });
         
         Given('El usuario hace click en mi planificaciones {string}', async (s: string) => {
            const planificacionButton = await pageFixture.page.locator('//*[@id="app"]/section[2]/div/div[1]/div[1]/div/div[2]/div[2]/div/div/a');
            await planificacionButton.click();
         })
         
         When('El usuario click en crear {string}', async (s: string) => {
         const crearpButton = await pageFixture.page.locator('//*[@id="app"]/section[2]/div/div[3]/div[2]/button/span[2]');
         await crearpButton.click();
         await pageFixture.page.waitForTimeout(5000);

         })
         
   
         
          When('El usuario especifica la unidad', async () => {
            const crearppButton = await pageFixture.page.locator('//*[@id="app"]/div/div[2]/section/div[2]/div[2]/div/div[2]/div/button');
            await crearppButton.click();
            await pageFixture.page.waitForTimeout(5000);
            
         })
         
         When('El usuario hacer click en unidad {string}', async (s: string) => {
            const unidadButton = await pageFixture.page.locator('//*[@id="plan-23309809"]/div/div[3]/form[2]/div/button/span');
            await unidadButton.click();
            await pageFixture.page.waitForTimeout(2000);
            
         })
 
         Then('{string} se muestra', async (s: string) => {
            await pageFixture.page.locator('//*[@id="app"]/div[1]/section[1]/div[1]/div/a/span[2]'); 
            await pageFixture.page.waitForTimeout(3000);
         })
         
         // When('El usuario Cierra el  pop up', async () => {
            //    const popupButton = await pageFixture.page.locator('//*[@id="ZfEmbedPopModalBox"]/div/span/svg/path');   
            //    await popupButton.click();
            // })
            
            
            Given('El usuario hace click en crar evaluacion {string}', async function (string) {
               const crearEvalucionButton = await pageFixture.page.locator('//*[@id="app"]/section[2]/div/div[1]/div[2]/div/div[2]/div[2]/div[2]/div/a');
            await crearEvalucionButton.click();
            await pageFixture.page.waitForTimeout(2000);

         });   

   
         When('El usuario hace click en escrita {string}', async function (string) {
            const escritaButton = await pageFixture.page.locator('//*[@id="modal-crear"]/div[2]/section/div/div[1]/div/div/div/div/div[1]/label/b');
            await escritaButton.click();
            await pageFixture.page.waitForTimeout(2000);

         });   

   
         When('El usuario hace click en parcial \'Parcial', async function () {
            const parcialButton = await pageFixture.page.locator('//*[@id="modal-crear"]/div[2]/section/div/div[2]/div/div/div/div/p[1]/label/b');
            await parcialButton.click();
            await pageFixture.page.waitForTimeout(2000);
         });   

            
         When('El usuario hace click en Idioma\' Idioma Extranjero: Inglés\'', async function () {
            const idiomaButton = await pageFixture.page.locator('//*[@id="modal-crear"]/div[2]/section/div/div[3]/div/div/div/div/p[3]/label/b');
            await idiomaButton.click();
            await pageFixture.page.waitForTimeout(2000);

         });   

   
         When('El usuario hace click en Laboral\'Laboral {int} A\'', async function (int) {
            const cursoButton = await pageFixture.page.locator('//*[@id="modal-crear"]/div[2]/section/div/div[4]/div/div/div/div/p/label/b');
            await cursoButton.click();
            await pageFixture.page.waitForTimeout(2000);

         });   

   
         When('El usuario hace click en crear\'Crear\'', async function () {
            const crearButton = await pageFixture.page.locator('//*[@id="modal-crear"]/div[2]/footer/button');
            await crearButton.click();
            await pageFixture.page.waitForTimeout(10000);

         });   


   
          Then('Se muestra el titulo {string}', async function (string) {
            await pageFixture.page.locator('//*[@id="app"]/section[1]/div/div/h2'); 
            await pageFixture.page.waitForTimeout(1000);

         });   


         

         //  Given('El usuario hace click {string}', async (s: string) => {
         //    const inButton = await pageFixture.page.locator('//*[@id="main"]/div[4]/div[2]/div[3]/div/div[2]/div/div[1]/a');
         //    await inButton.page.click();
         // })

         //  Given('El usuario describe el objetivo de Aprendizaje con {string}', async (s: string) => {
         //    const campoInput = await pageFixture.page.locator('/html');
         //    await campoInput.fill('test playwright');
            
         // })

         //  When('El usuario oprime {string}', async (s: string) => {
         //    const indicadorButton = await pageFixture.page.locator('//*[@id="main"]/div[5]/div[2]/footer/button[2]');
         //    await indicadorButton.click();
         // })


