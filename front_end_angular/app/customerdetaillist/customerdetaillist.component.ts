import { Component, OnInit } from '@angular/core';
import { CustservService } from '../custserv.service';
import { Icustomer } from '../icustomer';

@Component({
  selector: 'app-customerdetaillist',
  templateUrl: './customerdetaillist.component.html',
  styleUrls: ['./customerdetaillist.component.css']
})
export class CustomerdetaillistComponent implements OnInit {

  customers:Icustomer[];

  constructor(private _custservice:CustservService) { }

  ngOnInit() {

    this._custservice.getcustomers().subscribe(data=>this.customers=data);
  }

}
