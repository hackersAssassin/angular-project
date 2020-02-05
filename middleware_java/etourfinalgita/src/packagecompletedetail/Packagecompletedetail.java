package packagecompletedetail;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import categorysubcategory.Categorysubcategory;

@Entity
@Table(name = "packagecompletedetail", catalog = "etourfinal")
public class Packagecompletedetail {

	private int packageid;
	private Categorysubcategory categorysubcategory;
	private String tourname;
	private String tourimage;
	private String description;

	public Packagecompletedetail() {
	}

	public Packagecompletedetail(int packageid) {
		this.packageid = packageid;
	}

	public Packagecompletedetail(int packageid, Categorysubcategory categorysubcategory, String tourname,
			String tourimage, String description) {
		this.packageid = packageid;
		this.categorysubcategory = categorysubcategory;
		this.tourname = tourname;
		this.tourimage = tourimage;
		this.description = description;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "packageid", unique = true, nullable = false)
	public int getPackageid() {
		return packageid;
	}

	public void setPackageid(int packageid) {
		this.packageid = packageid;
	}

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "catsubid")
	public Categorysubcategory getCategorysubcategory() {
		return categorysubcategory;
	}

	public void setCategorysubcategory(Categorysubcategory categorysubcategory) {
		this.categorysubcategory = categorysubcategory;
	}

	public String getTourname() {
		return tourname;
	}

	public void setTourname(String tourname) {
		this.tourname = tourname;
	}

	public String getTourimage() {
		return tourimage;
	}

	public void setTourimage(String tourimage) {
		this.tourimage = tourimage;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

}
