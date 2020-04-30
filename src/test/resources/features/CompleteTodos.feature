@Android
Feature: Complete the todos

  Scenario: Completing the new todos
    Given User is on to do list page
    When User click button add new task
    And User see add new task page
    And User input "Showering" as title in title field on new task page
    And User input "Try showering twice in a day" as description in description field on new task page
    And User click button finish add new task
    Then User is on to do list page
    And User press check button
    And Task is completed