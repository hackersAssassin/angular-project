package datepackagedetail;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DatepackagedetailmanagerImpl implements Datepackagemanager {

	@Autowired
	DatepackageDAO dao;

	@Override
	public List<Datepackagedetail> getdate() {
		// TODO Auto-generated method stub
		return dao.getdate();
	}

}
