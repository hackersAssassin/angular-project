package categorysubcategory;

import java.util.List;

public interface CategorysubcategoryDAO {
	List<Categorysubcategory> getcatsubcat();

	List<Categorysubcategory> getRootCategory();

	List<Categorysubcategory> getSubCategory(int catid);

}
