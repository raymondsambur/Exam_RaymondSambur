package demo.pages.android;

import demo.webdriver.AndroidDriverInstance;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class AddNewTaskPage {

    public boolean isOnAddNewTodoPage(){
        WebDriverWait wait = new WebDriverWait(AndroidDriverInstance.androidDriver, 15);
        return wait.until(ExpectedConditions.presenceOfElementLocated(By.id("fab_edit_task_done"))).isDisplayed();
    }

    public void inputTitle(String title){
        WebElement inputTitle = AndroidDriverInstance.androidDriver.findElement(By.id("add_task_title"));
        inputTitle.sendKeys(title);
    }

    public void inputDescription(String description){
        WebElement inputDescription = AndroidDriverInstance.androidDriver.findElement(By.id("add_task_description"));
        inputDescription.sendKeys(description);
    }

    public void clickFinishAddNewTaskButton() {
        WebElement buttonFinish = AndroidDriverInstance.androidDriver.findElement(By.id("fab_edit_task_done"));
        buttonFinish.click();
    }

}
