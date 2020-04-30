@Android
Feature: Filtering active task only

  Scenario:
    Given User is on to do list page
    When User press filter button
    And User press active button
    Then Task is filtered by active task