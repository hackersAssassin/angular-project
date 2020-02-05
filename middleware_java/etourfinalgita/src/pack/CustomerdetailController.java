package pack;

import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;

@RestController
@CrossOrigin("http://localhost:4200")
public class CustomerdetailController {

	@Autowired
	CustomerdetailManager manager;

	@GetMapping(value = "crud/Customerdetail", headers = "Accept=application/json")
	public String showCustomerdetail() {
		return new Gson().toJson(manager.getCustomerdetail());
	}

	@PostMapping(value = "crud/addCustomer", headers = "Accept=application/json")
	public void addCustomer(@RequestBody Customerdetail c) {
		System.out.println("addpro called");
		manager.addCustomer(c);
	}

	@DeleteMapping(value = "crud/delete/{cid}", headers = "Accept=application/json")
	public void removeCustomer(@PathVariable int cid) {
		manager.delete(cid);
	}

	@PutMapping(value = "crud/update/{cid}", headers = "Accept=application/json")
	public void updateCustomer(@RequestBody Customerdetail customer, @PathVariable int cid) {
		manager.update(customer, cid);
	}

	@PostMapping(value = "/search")
	public Boolean searchUser(@RequestBody Customerdetail c) {
		String name = c.getCustomername();
		String pass = c.getPassword();

		System.out.println(name);
		List<Customerdetail> list = manager.getCustomerdetail();

		Iterator<Customerdetail> l = list.iterator();

		String cust_name = "";

		while (l.hasNext()) {
			Customerdetail c1 = l.next();
			String userdb = c1.getCustomername();
			String passdb = c1.getPassword();

			if (userdb.equals(name) && passdb.equals(pass)) {
				cust_name = "Login success";
				return true;
			}
		}
		cust_name = "Login failed";
		return false;
	}
}
