import { Injectable } from '@angular/core';
import { Ipackagecompletedetail } from './Ipackagecompletedetail';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PackservService {

  url3="http://localhost:8080/etourfinal/crud/Packagedetail";
  constructor(private http:HttpClient) { }

  
  getpackages():Observable<Ipackagecompletedetail[]>{
    return this.http.get<Ipackagecompletedetail[]>(this.url3);
  }
}
