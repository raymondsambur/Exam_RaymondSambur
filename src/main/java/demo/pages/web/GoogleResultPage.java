package demo.pages.web;

import demo.webdriver.WebDriverInstance;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class GoogleResultPage {

    public boolean onResultPage(){
        WebDriverWait wait = new WebDriverWait(WebDriverInstance.driver, 10);
        Boolean title = wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//a[@id='logo']//img"))).isDisplayed();
        return title;
    }

    public void clickResult(){
        WebElement searchResult = WebDriverInstance.driver.findElement(By.xpath("(//div[@id='search']//h3)[1]"));
        searchResult.click();
    }


}
