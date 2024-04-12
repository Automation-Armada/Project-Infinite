Feature:login
iniicar secion en practice automation
 
Scenario:Login 
Given El usuario abre la url .
When El usuario hace click en "Practice" boton .
When El usuario hace click "Test login" boton .
Given El usuario completa el campo username con "student" .
And Completa el  campo password con "Password123" .
And Hace click en "Submit"
Then Se muestra el mensaje "Logged In Successfully" .
When El usuario hace click en "Practice" boton .
When El usuario hace click en el test "Test Exceptions"
When usuario hace click en "Add"
And Verifica que "Row 2" se desplegue
And completar "Row 2 " con "add"

Scenario: Test error
Given El usuario abre la url .
When El usuario hace click en "Practice" boton .
When El usuario hace click "Test login" boton .
Given El usuario completa el campo con "student22" .
And Completa el  campo con "Password12322" .
And Hace click en "Submit"
Then Se muestra el mensaje "Logged In Successfully" .

Scenario: test error username
Given El usuario abre la url .
When El usuario hace click en "Practice" boton .
When El usuario hace click "Test login" boton .
And El usuario escribe "incorrectUser" en e campo "username" 
And Completa el  campo con "Password12322" .
And Hace click en "Submit"
Then Se muestra el error "Your username is invalid!"

Scenario: test error username
Given El usuario abre la url .
When El usuario hace click en "Practice" boton .
When El usuario hace click "Test login" boton .
Given El usuario completa el campo con "student22" .
And El usuario escribe con "incorrectPassword" en e campo "username" 
And Hace click en "Submit"
Then Se muestra  "Your password is invalid!"

 
