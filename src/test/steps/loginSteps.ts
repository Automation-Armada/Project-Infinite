import {Given,When,Then, After} from "@cucumber/cucumber"
import {chromium,Page,Browser } from "@playwright/test";

let browser: Browser;
let page: Page;

Given('El usuario abrio la url {string}', async function (string) {
  browser = await chromium.launch({ headless:false});
  page = await browser.newPage();
  await page.goto("https://sso.lirmi.dev/login"); 
});

Given('Completa el  campo Username con {string}', async function (string) {
  const emailInput = await page.locator('//*[@id="email"]');
  await emailInput.fill('alan.duarte@lirmi.com');
});


Given('Completa el campo password con {string}', async function (string) {
  const contraseñaInput = await page.locator('//*[@id="password"]');
  await contraseñaInput.fill('alan2024');

});


When('Presiona el boton {string}', async function (string) {
  const submitButton = await page.locator('//*[@id="submit"]/span[1]');
 await submitButton.click();

});

Then('la pagina carga exitosamente', async function () {
  await page.waitForSelector('text=Buenas tardes');
});

When('El usuario Presiona el boton mis planificaciones {string}', async (s: string) => {
  const xpath = '//a[contains(text(), "Mis planificaciones")]';
  const applyPlanificacionButton = await page.locator(xpath);
  await applyPlanificacionButton.click();

});

Then('Se muestra mis planificaciones', async function () {
    await page.waitForSelector('Mis Planificaciones');
}); 


When('El usuario Presiona el boton Aplicar Evaluacion {string}', async (s: string) => {
  const xpath = '//a[contains(text(), "Aplicar evaluación")]';
  const applyEvaluationButton = await page.locator(xpath);
  await applyEvaluationButton.click();

})

Then('Se muestra filtrar evaluaciones', async function () {
  await page.waitForSelector('Filtrar evaluaciones');
}); 



When('Presiona el boton crear evaluacion {string}', async (s: string) => {
  const xpath = '//a[contains(text(), "Crear evaluación")]';
  const applyCrearevaluationButton = await page.locator(xpath);
  await applyCrearevaluationButton.click();

})


Then('Se muestra crear evaluación', async function () {
  await page.waitForSelector('Crear evaluación');
}); 


When('Presiona el boton evaluaciones estandarizadas {string}', async (s: string) => {
  const xpath = '//a[contains(text(), "Evaluaciones estandarizadas")]';
  const applyEvaluationEstandarizadasButton = await page.locator(xpath);
  await applyEvaluationEstandarizadasButton.click();
})

Then('Se muestra evaluaciones estandarizadas', async function () {
  await page.waitForSelector('Evaluaciones estandarizadas Lirmi');
}); 


When('Presiona el boton mis evaluaciones {string}', async (s: string) => {
  const xpath = '//a[contains(text(), "Mis evaluaciones")]';
  const applyEvaluationEstandarizadasButton = await page.locator(xpath);
  await applyEvaluationEstandarizadasButton.click();
})

Then('Se muestra mis evaluaciones', async function () {
  await page.waitForSelector('Mis Evaluaciones');
}); 

When('Presiona el boton matricula {string}', async (s: string) => {
  const xpath = '//a[contains(text(), "Matrícula")]';
  const applyEvaluationEstandarizadasButton = await page.locator(xpath);
  await applyEvaluationEstandarizadasButton.click();
})

Then('Se muestra matricula', async function () {
  await page.waitForSelector('Matrícula');
}); 

When('Presiona el boton asistencia {string}', async (s: string) => {
  const xpath = '//a[contains(text(), "Asistencia")]';
  const applyEvaluationEstandarizadasButton = await page.locator(xpath);
  await applyEvaluationEstandarizadasButton.click();
})

Then('Se muestra asistencia', async function () {
  await page.waitForSelector('Libro Clases: Asistencia Diaria');
}); 

When('Presiona el boton calificaciones {string}', async (s: string) => {
  const xpath = '//a[contains(text(), "Calificaciones")]';
  const applyEvaluationEstandarizadasButton = await page.locator(xpath);
  await applyEvaluationEstandarizadasButton.click();
})

Then('Se muestra calificaciones', async function () {
  await page.waitForSelector('Libro Clases: Calificaciones');
}); 

When('Presiona el boton registro de actividades {string}', async (s: string) => {
  const xpath = '//a[contains(text(), "Registro de actividades")]';
  const applyEvaluationEstandarizadasButton = await page.locator(xpath);
  await applyEvaluationEstandarizadasButton.click();
})
Then('Se muestra registro de actividades', async function () {
  await page.waitForSelector('Libro Clases: Registro de actividades');
}); 

When('Presiona el boton ficha de estudiantes {string}', async (s: string) => {
  const xpath = '//a[contains(text(), "Ficha de estudiante")]';
  const applyEvaluationEstandarizadasButton = await page.locator(xpath);
  await applyEvaluationEstandarizadasButton.click();
})

Then('Se muestra ficha de estudiantes', async function () {
  await page.waitForSelector('Libro clases: Ficha de Estudiantes');
}); 


When('Presiona el boton certificados {string}', async (s: string) => {
  const xpath = '//a[contains(text(), "Certificados")]';
  const applyEvaluationEstandarizadasButton = await page.locator(xpath);
  await applyEvaluationEstandarizadasButton.click();
})


Then('Se muestra certificados', async function () {
  await page.waitForSelector('Libro Clases: Informes');
}); 

After(async function () {
  await page.close();
});











