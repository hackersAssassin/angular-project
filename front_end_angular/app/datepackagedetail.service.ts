import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Datepackagedetail} from './datepackagedetail';
import { Idatepackagedetail } from './idatepackagedetail';
@Injectable({
  providedIn: 'root'
})
export class DatepackagedetailService {
  url="http://localhost:8080/etourfinal/crud/datedetail";

  constructor(private http: HttpClient) { }
  getdatepackagedetail(): Observable<Idatepackagedetail[]>{
    return this.http.get<Idatepackagedetail[]>(this.url)
  }
}
