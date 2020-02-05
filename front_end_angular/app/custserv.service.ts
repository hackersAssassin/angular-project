import { Injectable } from '@angular/core';
import { Customerdetail } from './customerdetail';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Icustomer } from './icustomer';

@Injectable({
  providedIn: 'root'
})
export class CustservService {

  
  url="http://localhost:8080/etourfinal/crud/Customerdetail";
  
  url1="http://localhost:8080/etourfinal/crud/addCustomer";


  constructor(private http:HttpClient) {

   }
   postcustomer(custobj):Observable<any>{
     return this.http.post<any>(this.url1,custobj);
   }

   getcustomers():Observable<Icustomer[]>{
     return this.http.get<Icustomer[]>(this.url);
   }

}
