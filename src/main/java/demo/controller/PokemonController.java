package demo.controller;

import io.restassured.RestAssured;
import io.restassured.response.Response;

public class PokemonController {

    public Response getPokemon(String name){
        Response response = RestAssured
                .given()
                .baseUri("https://pokeapi.co/api/v2")
                .basePath("/pokemon")
                .log()
                .all()
                .pathParam("name", name)
                .header("Content-type", "application/json")
                .get("{name}");
        return response;
    }

}
