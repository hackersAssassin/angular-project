import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,FormArray, Validators} from '@angular/forms';
import { Ipassenger } from '../ipassenger';
import { PassengerService } from '../passenger.service';
import { Router } from '@angular/router';
import { Passengerdetail } from '../passengerdetail';
import { from } from 'rxjs';





@Component({
  selector: 'app-passengerdetail',
  templateUrl: './passengerdetail.component.html',
  styleUrls: ['./passengerdetail.component.css']
})
export class PassengerdetailComponent implements OnInit {
  passengerdetail:FormGroup;
  passobj:Ipassenger;
  submitted: boolean;

  
  ngOnInit() {
    this.create1form();
  }

  constructor(private fb: FormBuilder,private dataserv:PassengerService,private router:Router) { 
    this.create1form();
  }


  public create1form()
  {
    this.passengerdetail=this.fb.group
    (
      { 
       
        bookingid :['',[Validators.required]],
        passengername:['',[Validators.required]],
        passengerdob :['',[Validators.required]],
        roomtype :['',[Validators.required]],
        passengeriddocument :['',[Validators.required]],
        passengeridno :['',[Validators.required]],
        passengersex :['',[Validators.required]],
        passengeremail :['',[Validators.required]],
   
      }
   );
}



get bookingid()
{
  return this.passengerdetail.get('bookingid');
}
get passengername()
{
  return this.passengerdetail.get('passengername');
}

get passengerdob()
{
  return this.passengerdetail.get('passengerdob');
}

get roomtype()
{
  return this.passengerdetail.get('roomtype');
}

get passengeriddocument()
{
  return this.passengerdetail.get('passengeriddocument');
}

get passengeridno()
{
  return this.passengerdetail.get('passengeridno');
}

get passengersex()
{
  return this.passengerdetail.get('passengersex');
}

get passengeremail()
{
  return this.passengerdetail.get('passengeremail');
}




onSubmit1(Passengerdetail:FormGroup)
{
  this.submitted = true;
  if(!Passengerdetail.valid)
  {
    console.log(Passengerdetail.value);
    return;
  }
 
  this.mapFormValues1(Passengerdetail);
  this.postdata1(this.passobj);
}


mapFormValues1(form:FormGroup)
{
  this.passobj=new Passengerdetail(null,'','',null,'','','','',null);
  this.passobj.bookingid=form.controls.bookingid.value;
  this.passobj.passengername=form.controls.passengername.value;
  this.passobj.passengerdob=form.controls.passengerdob.value;
  this.passobj.roomtype=form.controls.roomtype.value;
  this.passobj.passengeriddocument=form.controls.passengeriddocument.value;
  this.passobj.passengeridno=form.controls.passengeridno.value;
  this.passobj.passengersex=form.controls.passengersex.value;
  this.passobj.passengeremail=form.controls.passengeremail.value;
 
  //this.Custobj.registrationdate=form.controls.registrationdate.value;

}

postdata1(passobj){
  this.dataserv.postpassenger(passobj).subscribe((data) => {
    console.log(data);
    this.router.navigate(['/home']);
  });
}




}

