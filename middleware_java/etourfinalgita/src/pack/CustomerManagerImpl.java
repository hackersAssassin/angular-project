package pack;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerManagerImpl implements CustomerdetailManager {

	@Autowired
	CustomerdetailDAO dao;

	@Override
	public List<Customerdetail> getCustomerdetail() {
		// TODO Auto-generated method stub
		return dao.getCustomerdetail();
	}

	@Override
	public void addCustomer(Customerdetail c) {
		// TODO Auto-generated method stub
		dao.addCustomer(c);
	}

	@Override
	public void delete(int id) {
		// TODO Auto-generated method stub
		dao.delete(id);
	}

	@Override
	public void update(Customerdetail c, int id) {
		// TODO Auto-generated method stub
		dao.update(c, id);
	}

	@Override
	public String searchUser(Customerdetail c) {
		// TODO Auto-generated method stub
		return dao.searchUser(c);
	}
	
	

}
