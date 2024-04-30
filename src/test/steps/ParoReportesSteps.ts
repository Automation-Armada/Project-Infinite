import { Given, Then, When } from "@cucumber/cucumber";
import { pageFixture } from "../../hooks/pageFixture";
// import { createObjectCsvWriter } from "csv-writer";


Given('El usuario abre la pagina {string}', async function (string) {
    await pageFixture.page.goto("https://www.google.com/"); 

  });


  When('EL usuario completa con {string}', async function (string) {
    const searchInput = await pageFixture.page.locator('//*[@id="APjFqb"]');
    await searchInput.fill('paro de colectivos');
});


  When('Hace cLick', async function () {
    const iconButton = await pageFixture.page.locator('//*[@id="jZ2SBf"]/div[1]/span');
    await iconButton.click();
   
  // const currentURL = pageFixture.page.url();

  
  // const csvWriter = createObjectCsvWriter({
  //   path: 'current_link.csv',
  //   header: [
  //     { id: 'url', title: 'Enlace' }
  //   ]
  // });
  // await csvWriter.writeRecords([{ url: currentURL }]);
  // console.log('Enlace actual guardado en current_link.csv en la raíz del repositorio.');
    await pageFixture.page.waitForTimeout(5000);
    await pageFixture.page.screenshot({ path: 'paro.png'});
  });




