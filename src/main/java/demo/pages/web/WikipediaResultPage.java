package demo.pages.web;

import demo.webdriver.WebDriverInstance;
import io.restassured.response.Response;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class WikipediaResultPage {

    public String onWikipediaResultPageName(){
        WebDriverWait wait = new WebDriverWait(WebDriverInstance.driver, 10);
        WebElement title = wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//p[1]//b[1]")));
        String getTitle = title.getText();
        return getTitle;
    }

    public String onWikipediaResultPageNumber(){
        WebDriverWait wait = new WebDriverWait(WebDriverInstance.driver, 10);
        WebElement number = wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//big//abbr")));
        String getNumber = number.getText();
        return getNumber;
    }




}

