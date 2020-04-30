import demo.controller.PokemonController;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import org.junit.Test;

public class Pokemon {

    public static String pokemon;
    PokemonController pokemonController = new PokemonController();

    @Test
    public void getPokemon(){
        String name = "Bulbasaur";
//        Response response = pokemonController.getPokemon(name);
        Response response = RestAssured.given().baseUri("https://pokeapi.co/api/v2/pokemon/").get(name);
        response.getBody().prettyPrint();
        String test = response.path("id");
        System.out.println(test);
    }

}
