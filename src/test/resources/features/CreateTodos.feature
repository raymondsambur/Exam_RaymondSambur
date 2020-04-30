@Android
Feature: Create New Todo

  Scenario: Add new task
    Given User is on to do list page
    When User click button add new task
    And User see add new task page
    And User input "Showering" as title in title field on new task page
    And User input "Try showering twice in a day" as description in description field on new task page
    And User click button finish add new task
    Then User is on to do list page

  Scenario: Add new task
    Given User is on to do list page
    When User click button add new task
    And User see add new task page
    And User input "Study" as title in title field on new task page
    And User input "Learn more to improved" as description in description field on new task page
    And User click button finish add new task
    Then User is on to do list page

  Scenario: Add new task
    Given User is on to do list page
    When User click button add new task
    And User see add new task page
    And User input "Play Games" as title in title field on new task page
    And User input "Mental refreshing" as description in description field on new task page
    And User click button finish add new task
    Then User is on to do list page