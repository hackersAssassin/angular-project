package pack;
// Generated 20 Jan, 2020 8:47:06 PM by Hibernate Tools 5.1.10.Final

import java.math.BigDecimal;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

/**
 * Pricedetail generated by hbm2java
 */
@Entity
@Table(name = "pricedetail", catalog = "etourfinal")
public class Pricedetail implements java.io.Serializable {

	private int priceid;
	private Packagecompletedetail packagecompletedetail;
	private BigDecimal tourcost;
	private BigDecimal singleperson;
	private BigDecimal adultprice;
	private BigDecimal childrenwobed;
	private BigDecimal childrenwithbed;

	public Pricedetail() {
	}

	public Pricedetail(int priceid) {
		this.priceid = priceid;
	}

	public Pricedetail(int priceid, Packagecompletedetail packagecompletedetail, BigDecimal tourcost,
			BigDecimal singleperson, BigDecimal adultprice, BigDecimal childrenwobed, BigDecimal childrenwithbed) {
		this.priceid = priceid;
		this.packagecompletedetail = packagecompletedetail;
		this.tourcost = tourcost;
		this.singleperson = singleperson;
		this.adultprice = adultprice;
		this.childrenwobed = childrenwobed;
		this.childrenwithbed = childrenwithbed;
	}

	@Id

	@Column(name = "priceid", unique = true, nullable = false)
	public int getPriceid() {
		return this.priceid;
	}

	public void setPriceid(int priceid) {
		this.priceid = priceid;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "packageid")
	public Packagecompletedetail getPackagecompletedetail() {
		return this.packagecompletedetail;
	}

	public void setPackagecompletedetail(Packagecompletedetail packagecompletedetail) {
		this.packagecompletedetail = packagecompletedetail;
	}

	@Column(name = "tourcost", precision = 8)
	public BigDecimal getTourcost() {
		return this.tourcost;
	}

	public void setTourcost(BigDecimal tourcost) {
		this.tourcost = tourcost;
	}

	@Column(name = "singleperson", precision = 8)
	public BigDecimal getSingleperson() {
		return this.singleperson;
	}

	public void setSingleperson(BigDecimal singleperson) {
		this.singleperson = singleperson;
	}

	@Column(name = "adultprice", precision = 8)
	public BigDecimal getAdultprice() {
		return this.adultprice;
	}

	public void setAdultprice(BigDecimal adultprice) {
		this.adultprice = adultprice;
	}

	@Column(name = "childrenwobed", precision = 8)
	public BigDecimal getChildrenwobed() {
		return this.childrenwobed;
	}

	public void setChildrenwobed(BigDecimal childrenwobed) {
		this.childrenwobed = childrenwobed;
	}

	@Column(name = "childrenwithbed", precision = 8)
	public BigDecimal getChildrenwithbed() {
		return this.childrenwithbed;
	}

	public void setChildrenwithbed(BigDecimal childrenwithbed) {
		this.childrenwithbed = childrenwithbed;
	}

}