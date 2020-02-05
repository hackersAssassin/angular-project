package categorysubcategory;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class categorymanagerImpl implements CategoryManager {

	@Autowired
	CategorysubcategoryDAO dao;

	@Override
	public List<Categorysubcategory> getcatsubcat() {
		// TODO Auto-generated method stub
		return dao.getcatsubcat();
	}

	@Override
	public List<Categorysubcategory> getRootCategory() {
		// TODO Auto-generated method stub
		return dao.getRootCategory();
	}

	@Override
	public List<Categorysubcategory> getSubCategory(int catid) {
		// TODO Auto-generated method stub
		return dao.getSubCategory(catid);
	}
}
