package itinerary;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;

@RestController
@CrossOrigin("http://localhost:4200")
public class Itinerarycontroller {
	@Autowired
	Itinerarymanager manager;

	@GetMapping(value = "crud/Itidetail", headers = "Accept=application/json")
	public String showItinerary() {
		return new Gson().toJson(manager.getitinerary());
	}

}
