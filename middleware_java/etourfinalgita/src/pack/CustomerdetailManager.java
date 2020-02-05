package pack;

import java.util.List;

import pack.Customerdetail;

public interface CustomerdetailManager {

	List<Customerdetail> getCustomerdetail();

	void addCustomer(Customerdetail c);

	void delete(int id);

	void update(Customerdetail c, int id);
	
	public String searchUser(Customerdetail c);
}
