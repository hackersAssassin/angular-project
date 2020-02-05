import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ipassenger } from './Ipassenger';
import { Passengerdetail } from './passengerdetail';



@Injectable({
  providedIn: 'root'
})
export class PassengerService 
{

  url2="http://localhost:8080/etourfinal/crud/ggggggggggggggggggggg";

  url3="http://localhost:8080/etourfinal/crud/add.................";

  constructor(private http:HttpClient) { }



  postpassenger(passobj):Observable<any>{
    return this.http.post<any>(this.url2,passobj);
  }

  
  getpassengers():Observable<Ipassenger[]>{
    return this.http.get<Ipassenger[]>(this.url3);
  }


}
