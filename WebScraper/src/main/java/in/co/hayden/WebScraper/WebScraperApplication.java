package in.co.hayden.WebScraper;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class WebScraperApplication {

	public static void main(String[] args) {
		SpringApplication.run(WebScraperApplication.class, args);
	}

}
