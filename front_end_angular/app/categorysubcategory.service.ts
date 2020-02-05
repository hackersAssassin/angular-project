import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Icategorysubcategory } from './icategorysubcategory';
import { HttpClient } from '@angular/common/http';
import { Isubcategory } from './isubcategory';

@Injectable({
  providedIn: 'root'
})
export class CategorysubcategoryService {
  url="http://localhost:8080/etourfinal/crud/Categorydetail";

  constructor(private http:HttpClient) { }
  
  
  postcategorysubcategory(catsubobj):Observable<any>{
    return this.http.post<any>(this.url,catsubobj);
  }

  getcategorysubcategorys():Observable<Icategorysubcategory[]>{
    return this.http.get<Icategorysubcategory[]>(this.url);
  }

}
