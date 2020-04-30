@Android
Feature: Press refresh button

  Scenario: User press refresh button
    Given User is on to do list page
    When User press more options button
    And user press refresh button
    Then To do list page is refreshed