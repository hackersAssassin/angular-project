import { Component, OnInit } from '@angular/core';
import { PassengerService } from '../passenger.service';
import { Ipassenger } from '../ipassenger';


@Component({
  selector: 'app-passengerdetaillist',
  templateUrl: './passengerdetaillist.component.html',
  styleUrls: ['./passengerdetaillist.component.css']
})
export class PassengerdetaillistComponent implements OnInit {
  passengers:Ipassenger[];

  constructor(private _passservice:PassengerService) { }

  ngOnInit() {
    this._passservice.getpassengers().subscribe(data=>this.passengers=data);
  }

}
