Feature: lead functionality



@lead
Scenario: lead creation
Given User should be on login page
When user enters the valid credentials and click login button
When verify lead creation with lastname "<lastname>" and company "<company>"
|lastname | company|
|modi     | BJP    |
|yogi     | BJP    |
|Mohan    | RSS    |
And user click on logout