package categorysubcategory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;

@RestController
@CrossOrigin("http://localhost:4200")
public class Categorysubcategorycontroller {
	@Autowired
	CategoryManager manager;

	@GetMapping(value = "crud/Categorydetail", headers = "Accept=application/json")
	public String showcateogry() {
		return new Gson().toJson(manager.getcatsubcat());
	}

	@GetMapping(value = "crud/Rootcategorydetail", headers = "Accept=application/json")
	public String showRootcategory() {
		return new Gson().toJson(manager.getRootCategory());
	}

	@GetMapping(value = "crud/Subcategorydetail/{catid}", headers = "Accept=application/json")
	public String showSubcategory(@PathVariable int catid) {
		return new Gson().toJson(manager.getSubCategory(catid));
	}
}
