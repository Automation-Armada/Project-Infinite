# Project-Infinite 🚀

Project Infinite  es un marco de pruebas de automatización avanzado y altamente eficiente diseñado para revolucionar su proceso de pruebas. Nuestro marco está meticulosamente elaborado para optimizar el flujo de trabajo de pruebas, brindándole una experiencia sin problemas y capacidades de pruebas poderosas.

Características Clave:

Integración de Playwright: Aproveche todo el potencial de Playwright para automatizar interacciones con sus aplicaciones web en múltiples navegadores.

Soporte de Cucumber: Escriba escenarios de prueba expresivos y fáciles de entender utilizando la sintaxis Gherkin, facilitando la colaboración entre miembros técnicos y no técnicos del equipo.

Potenciado por TypeScript: Utilice los beneficios de TypeScript para un código robusto y mantenible, incluyendo tipado estático .


![Project Infinit (1)](https://github.com/armadaautomationteam/Project-Infinite/assets/149462281/cf0ffd43-6154-4071-afe2-3147e7421859)

# Pre-requsitos 📝 :

- Node.js: Asegúrese de tener Node.js instalado en su sistema. Puede descargarlo desde https://nodejs.org/en/download.
- Editor de Texto: Se requiere un editor de texto para editar y gestionar sus scripts de prueba. Recomendamos usar Visual Studio Code (VSCode) para la mejor experiencia. Puede descargarlo desde https://code.visualstudio.com/.


# Windows:

Descargar Node.js:

- Visita https://nodejs.org/en/download .
- Descarga la version recomendada para windows .

Instalar Node.js:

- Ejecuta el instalador .
- Siga las instrucciones de instalación, aceptando la configuración predeterminada.
- Node.js y npm se instalarán automáticamente.
Verificar la Instalación:
- Abra el Símbolo del Sistema (CMD) o PowerShell.
```bash
node -v  # y presione Enter. Debería ver la versión de Node.js instalada.
npm -v   # y presione Enter. Debería ver la versión de npm instalada.
```
# Linux:
Usando el Gestor de Paquetes (apt o yum):

Abra Terminal.
Actualice las listas de paquetes:
``` sudo apt update ``` ( Debian/Ubuntu) o ``` sudo yum update ``` ( Red Hat/Fedora).
Instalar Node.js y npm: ``` sudo apt install nodejs npm ``` ( Debian/Ubuntu) or ``` sudo yum install nodejs npm ``` ( Red Hat/Fedora).
Usando Node Version Manager (nvm):

Abrir Terminal.

Instale nvm: 
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```
Cierre y vuelva a abrir Terminal para comenzar a usar nvm.
Instale Node.js y npm usando nvm:
```bash
nvm install node
```
Verificar Instalacion:

Abrir Terminal.
```bash
node -v  # y presione Enter. Debería ver la versión de Node.js instalada.
npm -v   # y presione Enter. Debería ver la versión de npm instalada.
```
# Instalacion

Clonar este repository:

```bash
git clone https://github.com/tu-usuario/project-infinite.git
```
 Navegar hasta la carpeta del proyecto:

```bash
 cd project-infinite
```
Instalar dependencias:

```bash
npm install
```
# Diseño de Pruebas

Features:

```cucumber
Feature: TestLogin
 Como usuario quiero iniciar 
 secion .

Background:
  Given El usuario abrio la url "https://sso.lirmi.dev/login"
  Given Completa el  campo Username con "estudiante"
  And Completa el campo password con "Contraseña"
  When Presiona el boton "Submit" 
  

Scenario: Positive Planificacion test
  When El usuario Presiona el boton mis planificaciones "Mis planificaciones"


Scenario: Positive Aplicar Evaluación test
  When El usuario Presiona el boton Aplicar Evaluacion "Aplicar evaluación"

Scenario: Positive Crear Evaluación test
  When Presiona el boton crear evaluacion "Crear evaluación"

Scenario: Positive  Evaluaciones Estandarizadas test
 When Presiona el boton evaluaciones estandarizadas "Evaluacion estandarizadas"

Scenario: Positive Mis Evaluaciones test
 When Presiona el boton mis evaluaciones "Mis evaluacions"

Scenario: Positive Matrícula test
 When Presiona el boton matricula "Matrícula"

Scenario: Positive Asistencia test
 When Presiona el boton asistencia "Asistencia"

Scenario: Positive Calificaciones test
 When Presiona el boton calificaciones "Calificaciones"

Scenario: Positive Registro de Actividades test
 When Presiona el boton registro de actividades "Registro de Actividades"

Scenario: Positive Ficha de Estudiante test
 When Presiona el boton ficha de estudiantes "Ficha de Estudiantes"

 Scenario: Positive Certificados test
 When Presiona el boton certificados "Certificados"

```

Steps:

```typescript

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
  await emailInput.fill('randomname@gmail.com');
});


Given('Completa el campo password con {string}', async function (string) {
  const contraseñaInput = await page.locator('//*[@id="password"]');
  await contraseñaInput.fill('contraseña28');

});


When('Presiona el boton {string}', async function (string) {
  const submitButton = await page.locator('//*[@id="submit"]/span[1]');
 await submitButton.click();

});

```
Correr Pruebas :

```bash
npm run test
```
![image](https://github.com/armadaautomationteam/Project-Infinite/assets/149462281/63c1e93f-4e27-41ed-b6ca-703534605993)


# Autor 🛠️

Automation Armada
