package pack;
// Generated 20 Jan, 2020 8:47:06 PM by Hibernate Tools 5.1.10.Final

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

/**
 * Bookingdetail generated by hbm2java
 */
@Entity
@Table(name = "bookingdetail", catalog = "etourfinal")
public class Bookingdetail implements java.io.Serializable {

	private int bookingid;
	private Customerdetail customerdetail;
	private Datepackagedetail datepackagedetail;
	private Packagecompletedetail packagecompletedetail;
	private Passengerdetail passengerdetail;
	private Date bookingdate;
	private String activestatus;
	private Set<Passengerdetail> passengerdetails = new HashSet<Passengerdetail>();

	public Bookingdetail() {
	}

	public Bookingdetail(int bookingid) {
		this.bookingid = bookingid;
	}

	public Bookingdetail(int bookingid, Customerdetail customerdetail, Datepackagedetail datepackagedetail,
			Packagecompletedetail packagecompletedetail, Passengerdetail passengerdetail, Date bookingdate,
			String activestatus, Set<Passengerdetail> passengerdetails) {
		this.bookingid = bookingid;
		this.customerdetail = customerdetail;
		this.datepackagedetail = datepackagedetail;
		this.packagecompletedetail = packagecompletedetail;
		this.passengerdetail = passengerdetail;
		this.bookingdate = bookingdate;
		this.activestatus = activestatus;
		this.passengerdetails = passengerdetails;
	}

	@Id

	@Column(name = "bookingid", unique = true, nullable = false)
	public int getBookingid() {
		return this.bookingid;
	}

	public void setBookingid(int bookingid) {
		this.bookingid = bookingid;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "customerid")
	public Customerdetail getCustomerdetail() {
		return this.customerdetail;
	}

	public void setCustomerdetail(Customerdetail customerdetail) {
		this.customerdetail = customerdetail;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "datepackageid")
	public Datepackagedetail getDatepackagedetail() {
		return this.datepackagedetail;
	}

	public void setDatepackagedetail(Datepackagedetail datepackagedetail) {
		this.datepackagedetail = datepackagedetail;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "packageid")
	public Packagecompletedetail getPackagecompletedetail() {
		return this.packagecompletedetail;
	}

	public void setPackagecompletedetail(Packagecompletedetail packagecompletedetail) {
		this.packagecompletedetail = packagecompletedetail;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "passengerid")
	public Passengerdetail getPassengerdetail() {
		return this.passengerdetail;
	}

	public void setPassengerdetail(Passengerdetail passengerdetail) {
		this.passengerdetail = passengerdetail;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "bookingdate", length = 10)
	public Date getBookingdate() {
		return this.bookingdate;
	}

	public void setBookingdate(Date bookingdate) {
		this.bookingdate = bookingdate;
	}

	@Column(name = "activestatus", length = 250)
	public String getActivestatus() {
		return this.activestatus;
	}

	public void setActivestatus(String activestatus) {
		this.activestatus = activestatus;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "bookingdetail")
	public Set<Passengerdetail> getPassengerdetails() {
		return this.passengerdetails;
	}

	public void setPassengerdetails(Set<Passengerdetail> passengerdetails) {
		this.passengerdetails = passengerdetails;
	}

}
