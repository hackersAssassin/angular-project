import { Component, OnInit } from '@angular/core';
import { ItineraryService } from '../itinerary.service';
import { Iitinerary } from '../iitinerary';
import { Idatepackagedetail } from '../idatepackagedetail';
import { Ipricedetail } from '../ipricedetail';
import { DatepackagedetailService } from '../datepackagedetail.service';
import { PricedetailService } from '../pricedetail.service';
import { Ipackagecompletedetail } from '../Ipackagecompletedetail';
import { Router } from '@angular/router';

@Component({
  selector: 'app-itinerary',
  templateUrl: './itinerary.component.html',
  styleUrls: ['./itinerary.component.css']
})
export class ItineraryComponent implements OnInit {
  itinerary: Iitinerary[];
  itr: Iitinerary[];
 packagedetail: Ipackagecompletedetail[];
 packid:number = parseInt(localStorage.getItem("lspackageid"));
  constructor(private _itineraryservice: ItineraryService, private _router:Router) { }

  getitinerary(itinerary: Iitinerary[]){
    alert(this.packid);
    let itr = itinerary.filter(element => (element.packagecompletedetail.packageid == this.packid));
    console.log(itr);
    return itr;
  }

  getpackageid(itinerary:Iitinerary){
    alert(this.packid);
  
    this._router.navigate(["/datepackagedetail"]);
  }
  ngOnInit() {
    this._itineraryservice.getItinerary().subscribe(data => {this.itinerary = data;
      this.itr=this.getitinerary(this.itinerary);
    });
  }

}