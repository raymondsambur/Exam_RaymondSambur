@Android
Feature: Filtering complete task only

  Scenario: user press Complete Only button on filter
    Given User is on to do list page
    When User press filter button
    And User press complete button
    Then Task is filtered by complete task