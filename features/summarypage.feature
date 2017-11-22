Feature: Analyze summary page
  As an fire chief user
  In order to find out more about runs
  I want to be able to analyze the summary page
  @login2
  @login3
  Scenario: Click on the summary page
    When I am on the home page
    Then I click on the summary link
    Then the summary page display
    Then I close webportal
