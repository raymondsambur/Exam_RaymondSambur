package demo;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/resources/features",
        plugin = {"html:build/result"},
        stepNotifications = true,
        tags = {"@Android or @Web"}
        //tags = {"@Android or @Web"}
)
public class CucumberRunner {
}