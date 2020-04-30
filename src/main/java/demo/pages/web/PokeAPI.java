package demo.pages.web;

import io.restassured.RestAssured;
import io.restassured.response.Response;
import org.junit.Assert;

public class PokeAPI {

    public void apiChecking(String getPokemonName){
        Response response = RestAssured.given().baseUri("https://pokeapi.co/api/v2/pokemon/").get(getPokemonName);
        response.getBody().prettyPrint();
        String pokemonName = response.path("name");
        String pokemonNumber = response.path("id");

//        Assert.assertTrue(pokemonNumber.contains(getPokemonNumber));
//        Assert.assertTrue(pokemonName.contains(getPokemonName));
    }

}
