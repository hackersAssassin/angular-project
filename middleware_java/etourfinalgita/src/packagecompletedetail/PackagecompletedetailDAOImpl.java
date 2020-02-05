package packagecompletedetail;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate5.HibernateTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public class PackagecompletedetailDAOImpl implements PackagecompletedetailDAO {

	@Autowired
	HibernateTemplate template;

	@Override
	public List<Packagecompletedetail> getPackagedetail() {
		// TODO Auto-generated method stub
		List<Packagecompletedetail> packagelist = (List<Packagecompletedetail>) template
				.find("from Packagecompletedetail");
		return packagelist;
	}

}
