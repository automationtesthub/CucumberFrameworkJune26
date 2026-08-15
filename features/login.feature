Feature: Login functionality

Scenario: Valid login
Given User should be on login page
When user enters the valid credentials and click login button
Then user should navigated to Home page
And User can validate the logout link

Scenario: InValid login
Given User should be on login page
When user enters the invalid credentials and click login button
Then user should navigated to login page
And User can validate the error message