Feature:login
iniicar secion en practice automation
 
Scenario:Login 
Given El usuario abre la url .
Given El usuario completa el campo username con "student" .
And Completa el  campo password con "Password123" .
When El usuario hace click en "Submit" boton .
Then Se muestra el mensaje "Logged In Successfully" . 
 
# Scenario:Test Exceptions
# Given Open page
# When Click Add button
# Then Wait for the second row to load
# And Type text into the second input field
# When Push Save button 
# Then Verify text saved

 
