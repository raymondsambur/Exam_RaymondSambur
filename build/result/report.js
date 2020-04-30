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
  "name": "clear completed todos",
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
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/CreateTodos.feature");
formatter.feature({
  "name": "Create New Todo",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Android"
    }
  ]
});
formatter.scenario({
  "name": "Add new task",
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
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Add new task",
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
  "name": "User input \"Study\" as title in title field on new task page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.TodosStepsDefinition.userInputAsTitleInTitleFieldOnNewTaskPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"Learn more to improved\" as description in description field on new task page",
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
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Add new task",
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
  "name": "User input \"Play Games\" as title in title field on new task page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.TodosStepsDefinition.userInputAsTitleInTitleFieldOnNewTaskPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"Mental refreshing\" as description in description field on new task page",
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
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/FilterTodoActiveOnly.feature");
formatter.feature({
  "name": "Filtering active task only",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Android"
    }
  ]
});
formatter.scenario({
  "name": "",
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
  "name": "User press filter button",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.TodosStepsDefinition.userPressFilterButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User press active button",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.TodosStepsDefinition.userPressActiveButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Task is filtered by active task",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps.TodosStepsDefinition.taskIsFilteredByActiveTask()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/FilterTodoCompleteOnly.feature");
formatter.feature({
  "name": "Filtering complete task only",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Android"
    }
  ]
});
formatter.scenario({
  "name": "",
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
  "name": "User press filter button",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.TodosStepsDefinition.userPressFilterButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User press complete button",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.TodosStepsDefinition.userPressCompleteButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Task is filtered by complete task",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps.TodosStepsDefinition.taskIsFilteredByCompleteTask()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/RefershTodos.feature");
formatter.feature({
  "name": "Press refresh button",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Android"
    }
  ]
});
formatter.scenario({
  "name": "User press refresh button",
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
  "name": "User press more options button",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.TodosStepsDefinition.userPressMoreOptionsButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user press refresh button",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.TodosStepsDefinition.userPressRefreshButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To do list page is refreshed",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps.TodosStepsDefinition.toDoListPageIsRefreshed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/UncheckTodo.feature");
formatter.feature({
  "name": "Uncheck the todos",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Android"
    }
  ]
});
formatter.scenario({
  "name": "Uncheck the new todos",
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
  "name": "Task is uncheck",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.TodosStepsDefinition.taskIsUncheck()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});