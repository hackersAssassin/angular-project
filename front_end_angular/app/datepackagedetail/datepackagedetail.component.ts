import { Component, OnInit } from '@angular/core';
import { Idatepackagedetail } from '../idatepackagedetail';
import { Iitinerary } from '../iitinerary';
import { DatepackagedetailService } from '../datepackagedetail.service';
import { ItineraryService } from '../itinerary.service';

@Component({
  selector: 'app-datepackagedetail',
  templateUrl: './datepackagedetail.component.html',
  styleUrls: ['./datepackagedetail.component.css']
})
export class DatepackagedetailComponent implements OnInit {
 datepackagedetail:Idatepackagedetail[];
 itinerary:Iitinerary[];
  packagecode: any;

  constructor(private  _datepackagedetailservice:DatepackagedetailService,private _itineraryservice:ItineraryService){}

  ngOnInit() {
    this._datepackagedetailservice.getdatepackagedetail().subscribe(data=>this.datepackagedetail=data);
  }
  getdatevalue(datevalue:number)
  {
    
    localStorage.setItem("lsdatepackageid",datevalue.toString());
    
  }
  
    getdatepackageid(d:Idatepackagedetail[])
    {
      console.log(d);
      let dateid= d.filter(element=>(element.packagecompletedetail.packageid==this.packagecode));
      return dateid;
    }

}
