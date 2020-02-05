package packagecompletedetail;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;

@RestController
@CrossOrigin("http://localhost:4200")
public class PackagecompleteController {

	@Autowired
	PackagecompleteManager manager;

	@GetMapping(value = "crud/Packagedetail", headers = "Accept=application/json")
	public String showPackagedetail() {
		return new Gson().toJson(manager.getPackagedetail());
	}
}
