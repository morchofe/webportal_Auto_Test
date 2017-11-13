Feature: Login to Webportal
  As an fire chief user
  In order to find out more about runs
  I want to be able to access webportal for my city
  @login
  Scenario: Login to webportal
    When I type in username and password
    Then I click on the login button
    Then I go to the home page
    Then I go to the summary page
    Then I go to the vehicle reporting page
    
