@Android
Feature: Checking the statistics

  Scenario: User check the scenario with empty task
    Given User is on to do list page
    When User press Navigate Up button
    And User press statistic button
    Then User see statistic page