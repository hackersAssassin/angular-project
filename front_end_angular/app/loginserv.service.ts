import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginservService {

  url="http://localhost:8080/etourfinal/search";
  constructor(private http:HttpClient) { }

  postlogin(loginobj):Observable<any>{
    return this.http.post<any>(this.url,loginobj);
  }
}
