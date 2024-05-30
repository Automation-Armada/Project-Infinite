Feature: Clarity 
Mostrar datos de Clarity

Scenario Outline:Hacer captura en Clarity_Home
Given El usuario abre la pagina con la url "https://clarity.microsoft.com/projects/view/hnvtpd92eo/dashboard?date=Today" 
When El usuario hace click en " Sign in to Google "
When El usuario completa el campo "Email" con "alan.duarte@lirmi.com
When Hace click en " siguiente "
When Completa el campo " password " con " Odioamoto1! "
When hace click en next
Then clarity carga correctamente 
