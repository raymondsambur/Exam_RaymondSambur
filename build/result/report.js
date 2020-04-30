$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/CheckStatistic.feature");
formatter.feature({
  "name": "Checking the statistics",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Android"
    }
  ]
});
formatter.scenario({
  "name": "User check the scenario with empty task",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Android"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on to do list page",
  "keyword": "Given "
});
formatter.match({
  "location": "demo.steps.TodosStepsDefinition.userIsOnToDoListPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User press Navigate Up button",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.TodosStepsDefinition.userPressNavigateUpButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User press statistic button",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.TodosStepsDefinition.userPressStatisticButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see statistic page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps.TodosStepsDefinition.userSeeStatisticPage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/ClearCompletedTodos.feature");
formatter.feature({
  "name": "Clear Completed Todos",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Android"
    }
  ]
});
formatter.scenario({
  "name": "User clear all completed todos",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Android"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on to do list page",
  "keyword": "Given "
});
formatter.match({
  "location": "demo.steps.TodosStepsDefinition.userIsOnToDoListPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click button add new task",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.TodosStepsDefinition.userClickButtonAddNewTask()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see add new task page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.TodosStepsDefinition.userSeeAddNewTaskPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"Showering\" as title in title field on new task page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.TodosStepsDefinition.userInputAsTitleInTitleFieldOnNewTaskPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"Try showering twice in a day\" as description in description field on new task page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.TodosStepsDefinition.userInputAsDescriptionInDescriptionFieldOnNewTaskPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click button finish add new task",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.TodosStepsDefinition.userClickButtonFinishAddNewTask()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is on to do list page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps.TodosStepsDefinition.userIsOnToDoListPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User press check button",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.TodosStepsDefinition.userPressCheckButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Task is completed",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.TodosStepsDefinition.taskIsCompleted()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User press more options button",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.TodosStepsDefinition.userPressMoreOptionsButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User press clear completed button",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.TodosStepsDefinition.userPressClearCompletedButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Completed task is removed",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.TodosStepsDefinition.completedTaskIsRemoved()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/CompleteTodos.feature");
formatter.feature({
  "name": "Complete the todos",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Android"
    }
  ]
});
formatter.scenario({
  "name": "Completing the new todos",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Android"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on to do list page",
  "keyword": "Given "
});
formatter.match({
  "location": "demo.steps.TodosStepsDefinition.userIsOnToDoListPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click button add new task",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.TodosStepsDefinition.userClickButtonAddNewTask()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see add new task page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.TodosStepsDefinition.userSeeAddNewTaskPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"Showering\" as title in title field on new task page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.TodosStepsDefinition.userInputAsTitleInTitleFieldOnNewTaskPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"Try showering twice in a day\" as description in description field on new task page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.TodosStepsDefinition.userInputAsDescriptionInDescriptionFieldOnNewTaskPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click button finish add new task",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.TodosStepsDefinition.userClickButtonFinishAddNewTask()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is on to do list page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps.TodosStepsDefinition.userIsOnToDoListPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User press check button",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.TodosStepsDefinition.userPressCheckButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Task is completed",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.TodosStepsDefinition.taskIsCompleted()"
});
