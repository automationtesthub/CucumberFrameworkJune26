Feature: lead functionality



@lead
Scenario: lead_creation_TC04
Given User should be on login page
When user enters the valid credentials and click login button
When verify lead creation with lastname "<lastname>" and company "<company>"
|lastname | company|
|modi     | BJP    |
|yogi     | BJP    |
|Mohan    | RSS    |
And user click on logout

@dt
Scenario: lead_creation_TC05
Given User should be on login page
When user enters the valid credentials and click login button
And validate lead creation with lastname and company 
And user click on logout