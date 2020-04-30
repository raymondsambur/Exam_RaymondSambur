package demo.pages.web;

import demo.webdriver.WebDriverInstance;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;

public class GoogleSearchPage {

    WebElement inputSearch;
    String word = "";

    public void onSearchPage(){
        WebDriverInstance.driver.get("https://www.google.com/");
    }

    public void inputSearchKeywords(String keyword){
        inputSearch = WebDriverInstance.driver.findElement(By.xpath("//input[@name='q']"));
        word = keyword;
    }

    public void pressEnterKey(){
        word = word + " Wikipedia Indonesia";
        inputSearch.sendKeys(word, Keys.ENTER);
    }

}
