package categorysubcategory;

import java.util.List;

public interface CategoryManager {

	List<Categorysubcategory> getcatsubcat();

	List<Categorysubcategory> getRootCategory();

	List<Categorysubcategory> getSubCategory(int catid);

}
