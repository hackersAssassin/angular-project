import { Component, OnInit } from '@angular/core';
import { PackservService } from '../Packserv.service';
import { Ipackagecompletedetail } from '../Ipackagecompletedetail';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-packagecompletedetail',
  templateUrl: './packagecompletedetail.component.html',
  styleUrls: ['./packagecompletedetail.component.css']
})
export class PackagecompletedetailComponent implements OnInit {
  packagecompletedetail : Ipackagecompletedetail[];
  packages : Ipackagecompletedetail[];
  
  subcatid: number = parseInt(localStorage.getItem("catsubid"));

  constructor(private _packservice:PackservService,private _activatedRoute: ActivatedRoute, private _route: Router) { }

    getpackagedetail(packagecompletedetail: Ipackagecompletedetail[]):any
    {
    let pack = packagecompletedetail.filter(element => (element.categorysubcategory.catsubid==this.subcatid));
    console.log(pack);
    return pack;
  }

  getpackageid(id){
    //alert(id);
    localStorage.setItem("lspackageid",id);
    this._route.navigate(["/itinerary"]);
  }

  ngOnInit() {
    this._packservice.getpackages().subscribe(data=> {this.packagecompletedetail= data;
      this.packages= this.getpackagedetail(this.packagecompletedetail);
  });

}
}