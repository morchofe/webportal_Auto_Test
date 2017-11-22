Feature: Sort summary page
  As an fire chief user
  I want to be able to  sort the summary page by routes report
  @all
  @login1
  @login
  @login4
  Scenario: Sort through the summary page
    When I am on the home page
    Then I click on the summary link
    Then the summary page display
    Then I sort by route
    Then I sort by direction
    Then I sort by on time
    Then I sort by Early trip
    Then I sort by Late trip
    Then I sort by trip count
    Then I sort by dwell time
    Then I sort by travel time
    Then I sort by duration
