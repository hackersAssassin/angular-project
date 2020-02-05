package itinerary;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ItinerarymanagerImpl implements Itinerarymanager {
	@Autowired
	ItineraryDAO dao;

	@Override
	public List<Itinerary> getitinerary() {
		return dao.getitinerary();
	}
	
	

}
