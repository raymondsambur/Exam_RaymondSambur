package demo.pages.android;

import demo.webdriver.AndroidDriverInstance;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class TodoHomePage {

    public boolean isOnTodoHomePage(){
        WebDriverWait wait = new WebDriverWait(AndroidDriverInstance.androidDriver, 15);
        return wait.until(ExpectedConditions.presenceOfElementLocated(By.id("fab_add_task"))).isDisplayed();
    }

    public void clickAddNewTaskButton() {
        WebElement buttonAdd = AndroidDriverInstance.androidDriver.findElement(By.id("fab_add_task"));
        buttonAdd.click();
    }

    public void clickCompleteButton(){
        WebElement buttonComplete = AndroidDriverInstance.androidDriver.findElement(By.xpath("(//android.widget.CheckBox)[1]"));
        buttonComplete.click();
    }

    public boolean checkCompleteButtonValue(){
        String buttonComplete = AndroidDriverInstance.androidDriver.findElement(By.xpath("(//android.widget.CheckBox)[1]")).getAttribute("checked");
        boolean data = Boolean.valueOf(buttonComplete);
        return data;
    }

    public void clickMoreOptionsButton(){
        WebElement buttonMore = AndroidDriverInstance.androidDriver.findElement(By.xpath("//android.widget.ImageView[@content-desc='More options']"));
        buttonMore.click();
    }

    public void clickButtonRefresh(){
        WebElement buttonRefresh = AndroidDriverInstance.androidDriver.findElement(By.xpath("(//android.widget.TextView)[2]"));
        buttonRefresh.click();
    }

    public void clickNavigateUpButton(){
        WebElement buttonNavigateUp = AndroidDriverInstance.androidDriver.findElement(By.xpath("//android.widget.ImageButton[@content-desc='Navigate up']"));
        buttonNavigateUp.click();
    }

    public void clickStatisticButton(){
        WebElement buttonStatistic = AndroidDriverInstance.androidDriver.findElement(By.xpath("(//android.widget.CheckedTextView)[2]"));
        buttonStatistic.click();
    }

    public void clickFilterButton(){
        WebElement buttonFilter = AndroidDriverInstance.androidDriver.findElement(By.id("menu_filter"));
        buttonFilter.click();
    }

    public void clickFilterActiveButton(){
        WebElement buttonActive = AndroidDriverInstance.androidDriver.findElement(By.xpath("(//android.widget.TextView)[2]"));
        buttonActive.click();
    }

    public void clickFilterCompletedButton(){
        WebElement buttonComplete = AndroidDriverInstance.androidDriver.findElement(By.xpath("(//android.widget.TextView)[3]"));
        buttonComplete.click();
    }

    public void clickClearCompletedButton(){
        WebElement buttonClear = AndroidDriverInstance.androidDriver.findElement(By.xpath("(//android.widget.TextView)[1]"));
        buttonClear.click();
    }

}
