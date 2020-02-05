package pack;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate5.HibernateTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public class CustomerdetailDAOImpl implements CustomerdetailDAO {

	@Autowired
	HibernateTemplate template;

	@Override
	public List<Customerdetail> getCustomerdetail() {
		// TODO Auto-generated method stub
		List<Customerdetail> mylist = (List<Customerdetail>) template.find("from Customerdetail");
		return mylist;
	}

	@Override
	public void addCustomer(Customerdetail c) {
		// TODO Auto-generated method stub
		template.save(c);
	}

	@Override
	public void delete(int id) {
		// TODO Auto-generated method stub
		template.delete(template.get(Customerdetail.class, id));
	}

	@Override
	public void update(Customerdetail c, int customerid) {
		// TODO Auto-generated method stub
		// template.update(template.get(Customerdetail.class, id));

		template.bulkUpdate(
				"update Customerdetail c set c.customername=?,c.email=?,c.password=?,c.address1=?,c.address2=?,c.city=?,c.state=?,c.pin=?,c.telno=?,c.mobileno=?,c.registrationdate=? where c.customerid=?",
				c.getCustomername(), c.getEmail(), c.getPassword(), c.getAddress1(), c.getAddress2(), c.getCity(),
				c.getState(), c.getPin(), c.getTelno(), c.getMobileno(), c.getRegistrationdate(), customerid);
	}

	@Override
	public String searchUser(Customerdetail c) {
		// TODO Auto-generated method stub
		return null;
	}
}
