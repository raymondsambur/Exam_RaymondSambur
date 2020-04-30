package demo.steps;

import demo.pages.android.AddNewTaskPage;
import demo.pages.android.StatisticsPage;
import demo.pages.android.TodoHomePage;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class TodosStepsDefinition {

    TodoHomePage todoHomePage = new TodoHomePage();
    AddNewTaskPage addNewTaskPage = new AddNewTaskPage();
    StatisticsPage statisticsPage = new StatisticsPage();

    @Given("User is on to do list page")
    public void userIsOnToDoListPage() {
        Boolean check = todoHomePage.isOnTodoHomePage();
        Assert.assertTrue(check);
    }

    @When("User click button add new task")
    public void userClickButtonAddNewTask() {
        todoHomePage.clickAddNewTaskButton();
    }

    @And("User see add new task page")
    public void userSeeAddNewTaskPage() {
        addNewTaskPage.isOnAddNewTodoPage();
    }

    @And("User input {string} as title in title field on new task page")
    public void userInputAsTitleInTitleFieldOnNewTaskPage(String title) {
        addNewTaskPage.inputTitle(title);
    }

    @And("User input {string} as description in description field on new task page")
    public void userInputAsDescriptionInDescriptionFieldOnNewTaskPage(String description) {
        addNewTaskPage.inputDescription(description);
    }

    @And("User click button finish add new task")
    public void userClickButtonFinishAddNewTask() {
        addNewTaskPage.clickFinishAddNewTaskButton();
    }

    @And("User press check button")
    public void userPressCheckButton() {
        todoHomePage.clickCompleteButton();
    }

    @And("Task is completed")
    public void taskIsCompleted() {
        Boolean value = todoHomePage.checkCompleteButtonValue();
        Assert.assertTrue(value);
    }

    @And("Task is uncheck")
    public void taskIsUncheck() {
        Boolean value = todoHomePage.checkCompleteButtonValue();
        Assert.assertTrue(!value);
    }

    @When("User press more options button")
    public void userPressMoreOptionsButton() {
        todoHomePage.clickMoreOptionsButton();
    }

    @And("user press refresh button")
    public void userPressRefreshButton() {
        todoHomePage.clickButtonRefresh();
    }

    @Then("To do list page is refreshed")
    public void toDoListPageIsRefreshed() {
        Boolean check = todoHomePage.isOnTodoHomePage();
        Assert.assertTrue(check);
    }

    @When("User press Navigate Up button")
    public void userPressNavigateUpButton() {
        todoHomePage.clickNavigateUpButton();
    }

    @And("User press statistic button")
    public void userPressStatisticButton() {
        todoHomePage.clickStatisticButton();
    }

    @Then("User see statistic page")
    public void userSeeStatisticPage() {
        Boolean value = statisticsPage.isOnStatisticPage();
        Assert.assertTrue(value);
    }

    @When("User press filter button")
    public void userPressFilterButton() {
        todoHomePage.clickFilterButton();
    }

    @And("User press complete button")
    public void userPressCompleteButton() {
        todoHomePage.clickFilterCompletedButton();
    }

    @Then("Task is filtered by complete task")
    public void taskIsFilteredByCompleteTask() {
        Boolean check = todoHomePage.isOnTodoHomePage();
        Assert.assertTrue(check);
    }

    @And("User press active button")
    public void userPressActiveButton() {
        todoHomePage.clickFilterActiveButton();
    }

    @Then("Task is filtered by active task")
    public void taskIsFilteredByActiveTask() {
        Boolean check = todoHomePage.isOnTodoHomePage();
        Assert.assertTrue(check);
    }

    @And("User press clear completed button")
    public void userPressClearCompletedButton() {
        todoHomePage.clickClearCompletedButton();
    }

    @And("Completed task is removed")
    public void completedTaskIsRemoved() {
        Boolean check = todoHomePage.isOnTodoHomePage();
        Assert.assertTrue(check);
    }
}
