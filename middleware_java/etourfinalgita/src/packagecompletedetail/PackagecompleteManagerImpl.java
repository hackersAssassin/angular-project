package packagecompletedetail;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PackagecompleteManagerImpl implements PackagecompleteManager {

	@Autowired
	PackagecompletedetailDAO dao;

	@Override
	public List<Packagecompletedetail> getPackagedetail() {
		// TODO Auto-generated method stub
		return dao.getPackagedetail();
	}

}
