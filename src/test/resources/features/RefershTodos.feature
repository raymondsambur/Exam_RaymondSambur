@Android
Feature: Press refresh button

  Scenario: User press the refresh button on more options
    Given User is on to do list page
    When User press more options button
    And user press refresh button
    Then To do list page is refreshed