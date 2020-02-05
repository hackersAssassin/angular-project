package itinerary;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import packagecompletedetail.Packagecompletedetail;

@Entity
@Table(name = "itinerary", catalog = "etourfinal")
public class Itinerary {
	private int itrid;
	private Packagecompletedetail packagecompletedetail;
	private String location;
	private String daywisedescription;
	private Integer daynumber;

	public Itinerary() {
	}

	public Itinerary(int itrid) {
		this.itrid = itrid;
	}

	public Itinerary(int itrid, Packagecompletedetail packagecompletedetail, String location, String daywisedescription,
			Integer daynumber) {

		this.itrid = itrid;
		this.packagecompletedetail = packagecompletedetail;
		this.location = location;
		this.daywisedescription = daywisedescription;
		this.daynumber = daynumber;
	}

	public void setItrid(int itrid) {
		this.itrid = itrid;
	}

	@Id

	@Column(name = "itrid", unique = true, nullable = false)
	public int getItrid() {
		return itrid;
	}

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "packageid")
	public Packagecompletedetail getPackagecompletedetail() {
		return packagecompletedetail;
	}

	public void setPackagecompletedetail(Packagecompletedetail packagecompletedetail) {
		this.packagecompletedetail = packagecompletedetail;
	}

	@Column(name = "location", length = 250)

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	@Column(name = "daywisedescription", length = 65535)
	public String getDaywisedescription() {
		return daywisedescription;
	}

	public void setDaywisedescription(String daywisedescription) {
		this.daywisedescription = daywisedescription;
	}

	@Column(name = "daynumber")
	public Integer getDaynumber() {
		return daynumber;
	}

	public void setDaynumber(Integer daynumber) {
		this.daynumber = daynumber;
	}

}
