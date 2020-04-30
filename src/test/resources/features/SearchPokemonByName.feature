@Web
Feature: Search Pokemon by Name on Wikipedia using google search

  Scenario: Search Pikachu on Wikipedia using Google search
    Given User is on Google search page
    When User input "Pikachu" Wikipedia Indonesia on Google search field
    And User press ENTER on the keyboard
    Then User see search result on google
    And User click the first result
    And User see "Pikachu" result page on Wikipedia
    And User see Pokemon number "#025"

  Scenario: Search Charizard on Wikipedia using Google search
    Given User is on Google search page
    When User input "Charizard" Wikipedia Indonesia on Google search field
    And User press ENTER on the keyboard
    Then User see search result on google
    And User click the first result
    And User see "Charizard" result page on Wikipedia
    And User see Pokemon number "#006"

  Scenario: Search Bulbasaur on Wikipedia using Google search
    Given User is on Google search page
    When User input "Bulbasaur" Wikipedia Indonesia on Google search field
    And User press ENTER on the keyboard
    Then User see search result on google
    And User click the first result
    And User see "Bulbasaur" result page on Wikipedia
    And User see Pokemon number "#001"

  Scenario: Search Mewtwo on Wikipedia using Google search
    Given User is on Google search page
    When User input "Mewtwo" Wikipedia Indonesia on Google search field
    And User press ENTER on the keyboard
    Then User see search result on google
    And User click the first result
    And User see "Mewtwo" result page on Wikipedia
    And User see Pokemon number "#150"
