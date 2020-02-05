package categorysubcategory;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate5.HibernateTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional

public class CategorysubcategoryDAOImpl implements CategorysubcategoryDAO {
	@Autowired
	HibernateTemplate template;

	@Override
	public List<Categorysubcategory> getcatsubcat() {
		// TODO Auto-generated method stub
		List<Categorysubcategory> mylist = (List<Categorysubcategory>) template.find("from Categorysubcategory");
		return mylist;
	}

	@Override
	public List<Categorysubcategory> getRootCategory() {
		// TODO Auto-generated method stub

		List<Categorysubcategory> mylist = (List<Categorysubcategory>) template
				.find("select * from Categorysubcategory c where c.subcategoryid=0");

		/*
		 * List<Categorysubcategory> mylist = (List<Categorysubcategory>) template
		 * .find("from Categorysubcategory c where c.categoryid=1001");
		 */
		if (mylist.isEmpty()) {
			System.out.println("mylist is empty");
		}
		return mylist;
	}

	@Override
	public List<Categorysubcategory> getSubCategory(int catid) {
		// TODO Auto-generated method stub
		List<Categorysubcategory> list = (List<Categorysubcategory>) template.find(
				"select c.subcategoryname,c.subcategoryimage,c.eofflag from Categorysubcategory c where c.categoryid=? and c.eofflag='Y' and c.subcategoryid is not null",
				catid);
		return list;
	}

}
