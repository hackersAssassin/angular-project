import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Icustomer } from '../icustomer';
import { LoginservService } from '../loginserv.service';
import { Router } from '@angular/router';
import { Login } from '../login';
import { Ilogin } from '../ilogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login:FormGroup;
  LoginObj:Ilogin;
  constructor(private fb: FormBuilder,private dataserv:LoginservService,private router:Router) { }

  ngOnInit() {
    this.createloginform()
  }

  public createloginform()
  {
    this.login=this.fb.group(
      {
      customername:['',[Validators.required]],
      password:['',[Validators.required]]
      }
    );
  }

get customername()
  {
   return this.login.get('customername')
  }

get password()
  {
    return this.login.get('password');
  }

onSubmit(login:FormGroup)
{
  if(!login.valid)
  {
    console.log(login.value)
    return;
  }

  this.mapLoginvalues(login);
  this.postlogindata(this.LoginObj)
}

mapLoginvalues(form:FormGroup)
{
  this.LoginObj=new Login('','');
  this.LoginObj.customername=form.controls.customername.value;
  this.LoginObj.password=form.controls.password.value;
}

postlogindata(LoginObj)
{
  this.dataserv.postlogin(LoginObj).subscribe((data)=>{
    console.log(data);
    if(data==true){
    this.router.navigate(['/home']);
    }
    else{
      this.router.navigate(['/login']);
    }

  }
  );
}
}
