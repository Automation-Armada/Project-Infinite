Feature: TestLirmi
 Como usuario quiero iniciar 
 secion en  lirmi .

Background:
  Given El usuario abrio la url "https://sso.lirmi.dev/login"
  Given Completa el  campo Username con "estudiante"
  And Completa el campo password con "Contraseña"
  When Presiona el boton "Submit" 
  # Then la pagina carga exitosamente 

Scenario: Positive Planificacion test
  When El usuario Presiona el boton mis planificaciones "Mis planificaciones"
  # Then Se muestra mis planificaciones
  

Scenario: Positive Aplicar Evaluación test
  When El usuario Presiona el boton Aplicar Evaluacion "Aplicar evaluación"
  # Then Se muestra filtrar evaluaciones

Scenario: Positive Crear Evaluación test
  When Presiona el boton crear evaluacion "Crear evaluación"
  # Then Se muestra crear evaluación

Scenario: Positive  Evaluaciones Estandarizadas test
 When Presiona el boton evaluaciones estandarizadas "Evaluacion estandarizadas"
#  Then Se muestra evaluaciones estandarizadas 

Scenario: Positive Mis Evaluaciones test
 When Presiona el boton mis evaluaciones "Mis evaluacions"
#  Then Se muestra mis evaluaciones 

Scenario: Positive Matrícula test
 When Presiona el boton matricula "Matrícula"
#  Then Se muestra matricula

Scenario: Positive Asistencia test
 When Presiona el boton asistencia "Asistencia"
#  Then Se muestra asistencia

Scenario: Positive Calificaciones test
 When Presiona el boton calificaciones "Calificaciones"
#  Then Se muestra calificaciones

Scenario: Positive Registro de Actividades test
 When Presiona el boton registro de actividades "Registro de Actividades"
#  Then Se muestra registro de actividades

Scenario: Positive Ficha de Estudiante test
 When Presiona el boton ficha de estudiantes "Ficha de Estudiantes"
#  Then Se muestra ficha de estudiantes

 Scenario: Positive Certificados test
 When Presiona el boton certificados "Certificados"
#  Then Se muestra certificados








