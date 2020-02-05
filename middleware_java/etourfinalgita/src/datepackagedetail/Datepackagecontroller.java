package datepackagedetail;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;

@RestController
@CrossOrigin("http://localhost:4200")
public class Datepackagecontroller {
	@Autowired
	Datepackagemanager manager;

	@GetMapping(value = "crud/datedetail", headers = "Accept=application/json")
	public String showdate() {
		return new Gson().toJson(manager.getdate());
	}
}
