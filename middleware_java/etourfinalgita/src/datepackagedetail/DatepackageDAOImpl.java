package datepackagedetail;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate5.HibernateTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public class DatepackageDAOImpl implements DatepackageDAO {

	@Autowired
	HibernateTemplate template;

	@Override
	public List<Datepackagedetail> getdate() {
		// TODO Auto-generated method stub
		List<Datepackagedetail> mylist = (List<Datepackagedetail>) template.find("from Datepackagedetail");
		return mylist;
	}

}
