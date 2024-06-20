Feature: login
Log in to practice automation

Scenario: Login
Given The user opens the URL.
When The user clicks on the "Practice" button.
When The user clicks on the "Test login" button.
Given The user fills in the username field with "student".
And Fills in the password field with "Password123".
And Clicks on "Submit".