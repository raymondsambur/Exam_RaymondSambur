@Android
Feature: Filter active task only

  Scenario: User press Active Only button on filter
    Given User is on to do list page
    When User press filter button
    And User press active button
    Then Task is filtered by active task