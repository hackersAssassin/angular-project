package itinerary;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate5.HibernateTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;


@Repository
@Transactional
public class ItineraryDAOImpl implements ItineraryDAO {

	@Autowired
	HibernateTemplate template;
	
	@Override
	public List<Itinerary> getitinerary() {
		List<Itinerary> mylist = (List<Itinerary>) template.find("from Itinerary");
		return mylist;	
	}

}
