
Feature: Login functionality

Background:
Given User should be on login page


Scenario: Valid login
When user enters the valid credentials and click login button
Then user should navigated to Home page
And User can validate the logout link

Scenario: InValid login
When user enters the invalid credentials and click login button
Then user should navigated to login page
And User can validate the error message

@datadriven  @smoke @regression
Scenario Outline: InValid login data driven
When user enters the username as "<userid>" and password as "<password>" and click login button
Then user should navigated to login page
And User can validate the error message

Examples:
|userid | password | 
|admin1 | pwd1      |
|admin2 | pwd2     |
|admin3 | pwd1      |
|admin4 | pwd2     |