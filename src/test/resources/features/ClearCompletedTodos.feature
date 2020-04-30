@Android
  Feature: Clear Completed Todos

    Scenario: User clear all completed todos
      Given User is on to do list page
      When User click button add new task
      And User see add new task page
      And User input "Showering" as title in title field on new task page
      And User input "Try showering twice in a day" as description in description field on new task page
      And User click button finish add new task
      Then User is on to do list page
      And User press check button
      And Task is completed
      And User press more options button
      And User press clear completed button
      And Completed task is removed