import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,FormArray, Validators} from '@angular/forms';
import { from } from 'rxjs';
import { Icustomer } from '../icustomer';
import { CustservService } from '../custserv.service';
import { Customerdetail } from '../customerdetail';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customerdetail',
  templateUrl: './customerdetail.component.html',
  styleUrls: ['./customerdetail.component.css']
})
export class CustomerdetailComponent implements OnInit {

  customerdetail:FormGroup;
  Custobj:Icustomer;
  submitted: boolean;

  ngOnInit() {
    this.createform();
  }

  
  constructor(private fb: FormBuilder,private dataserv:CustservService,private router:Router) { 
    this.createform();
  }

  public createform()
  {
    this.customerdetail=this.fb.group(
      {
        customername:['',[Validators.required]],
        email:['',[Validators.required]],
        password:['',[Validators.required]],
        address1:['',[Validators.required]],
        address2:['',[Validators.required]],
        city:['',[Validators.required]],
        state:['',[Validators.required]],
        pin:['',[Validators.required]],
        telno:['',[Validators.required]],
        //registrationdate:['',[Validators.required]],
      });
    
  }

 
  get customername()
  {
    return this.customerdetail.get('customername');
  }
  get email()
  {
    return this.customerdetail.get('email');
  }

  get password()
  {
    return this.customerdetail.get('password');
  }

  get address1()
  {
    return this.customerdetail.get('address1');
  }

  get address2()
  {
    return this.customerdetail.get('address2');
  }

  get city()
  {
    return this.customerdetail.get('city');
  }

  get state()
  {
    return this.customerdetail.get('state');
  }

  get pin()
  {
    return this.customerdetail.get('pin');
  }
  
  get telno()
  {
    return this.customerdetail.get('telno');
  }




  onSubmit(customerdetail:FormGroup)
  {
    this.submitted = true;
    if(!customerdetail.valid)
    {
      console.log(customerdetail.value);
      return;
    }
   
    this.mapFormValues(customerdetail);
    this.postdata(this.Custobj);
  }

mapFormValues(form:FormGroup)
{
  this.Custobj=new Customerdetail(null,'','','','','','','',null,'');
  this.Custobj.customername=form.controls.customername.value;
  this.Custobj.email=form.controls.email.value;
  this.Custobj.password=form.controls.password.value;
  this.Custobj.address1=form.controls.address1.value;
  this.Custobj.address2=form.controls.address2.value;
  this.Custobj.city=form.controls.city.value;
  this.Custobj.state=form.controls.state.value;
  this.Custobj.pin=form.controls.pin.value;
  this.Custobj.telno=form.controls.telno.value;
  //this.Custobj.registrationdate=form.controls.registrationdate.value;


}

postdata(custobj){
  this.dataserv.postcustomer(custobj).subscribe((data) => {
    console.log(data);
    this.router.navigate(['/home']);
  });
}

}





















  






