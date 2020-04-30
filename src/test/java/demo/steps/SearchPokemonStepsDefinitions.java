package demo.steps;

import demo.pages.web.GoogleResultPage;
import demo.pages.web.GoogleSearchPage;
import demo.pages.web.PokeAPI;
import demo.pages.web.WikipediaResultPage;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class SearchPokemonStepsDefinitions {

    GoogleSearchPage googleSearchPage = new GoogleSearchPage();
    GoogleResultPage googleResultPage = new GoogleResultPage();
    WikipediaResultPage wikipediaResultPage = new WikipediaResultPage();
    PokeAPI pokeAPI = new PokeAPI();


    @Given("User is on Google search page")
    public void userIsOnGoogleSearchPage() {
        googleSearchPage.onSearchPage();
    }

    @When("User input {string} Wikipedia Indonesia on Google search field")
    public void userInputWikipediaIndonesiaOnGoogleSearchField(String pokemonName) {
        googleSearchPage.inputSearchKeywords(pokemonName);
    }

    @And("User press ENTER on the keyboard")
    public void userPressENTERRETURNOnTheKeyboard() {
        googleSearchPage.pressEnterKey();
    }

    @Then("User see search result on google")
    public void userSeeSearchResultOnGoogle() {
        Boolean getTitle = googleResultPage.onResultPage();
        Assert.assertTrue(getTitle);
    }

    @And("User click the first result")
    public void userClickTheFirstResult() {
        googleResultPage.clickResult();
    }

    @And("User see {string} result page on Wikipedia")
    public void userSeeResultPageOnWikipedia(String pokemonName) {
        String getPokemonName = wikipediaResultPage.onWikipediaResultPageName();
        Assert.assertTrue(getPokemonName.contains(pokemonName));
    }

    @And("User see Pokemon number {string}")
    public void userSeePokemonNumber(String pokemonNumber) {
        String getPokemonNumber = wikipediaResultPage.onWikipediaResultPageNumber();
        Assert.assertTrue(pokemonNumber.contains(getPokemonNumber));
    }
}
