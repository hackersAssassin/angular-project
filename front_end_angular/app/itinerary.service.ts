import { Injectable } from '@angular/core';
import { Iitinerary } from './iitinerary';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ItineraryService {

  url="http://localhost:8080/etourfinal/crud/Itidetail";

  constructor(private http: HttpClient) { }
  getItinerary(): Observable<Iitinerary[]>{
    return this.http.get<Iitinerary[]>(this.url);
  }
  getItinerarybyid(id :number): Observable<Iitinerary[]>{
    return this.http.get<Iitinerary[]>(this.url+"itinerary/search/");
  }

}
