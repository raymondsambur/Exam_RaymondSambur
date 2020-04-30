import demo.controller.PokemonController;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import org.junit.Test;

public class Pokemon {

    PokemonController pokemonController = new PokemonController();

    @Test
    public void getPokemon(){
        String name = "Mewtwo";
        Response response = pokemonController.getPokemon(name);
//        Response response = RestAssured.given().baseUri("https://pokeapi.co/api/v2/pokemon/Mewtwo").get(name);
        response.getBody().prettyPrint();
//        String test = response.path("");
//        System.out.println(test);
    }

}
