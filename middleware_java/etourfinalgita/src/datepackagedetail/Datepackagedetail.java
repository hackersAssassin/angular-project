package datepackagedetail;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonFormat;

import packagecompletedetail.Packagecompletedetail;

@Entity
@Table(name = "datepackagedetail", catalog = "etourfinal")
public class Datepackagedetail {

	private int datepackageid;
	private Packagecompletedetail packagecompletedetail;
	private Date startdate;
	private Date enddate;

	public Datepackagedetail() {
	}

	public Datepackagedetail(int datepackageid) {
		this.datepackageid = datepackageid;
	}

	public Datepackagedetail(int datepackageid, Packagecompletedetail packagecompletedetail, Date startdate,
			Date enddate) {
		this.datepackageid = datepackageid;
		this.packagecompletedetail = packagecompletedetail;
		this.startdate = startdate;
		this.enddate = enddate;

	}

	@Id
	// @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "datepackageid", unique = true, nullable = false)
	public int getDatepackageid() {
		return datepackageid;
	}

	public void setDatepackageid(int datepackageid) {
		this.datepackageid = datepackageid;
	}

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "packageid")
	public Packagecompletedetail getPackagecompletedetail() {
		return packagecompletedetail;
	}

	public void setPackagecompletedetail(Packagecompletedetail packagecompletedetail) {
		this.packagecompletedetail = packagecompletedetail;
	}

	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-mm-yyyy")
	@Temporal(TemporalType.DATE)
	@Column(name = "startdate", length = 10)
	public Date getStartdate() {
		return startdate;
	}

	public void setStartdate(Date startdate) {
		this.startdate = startdate;
	}

	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-mm-yyyy")
	@Temporal(TemporalType.DATE)
	@Column(name = "enddate", length = 10)
	public Date getEnddate() {
		return enddate;
	}

	public void setEnddate(Date enddate) {
		this.enddate = enddate;
	}

}
