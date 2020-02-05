import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule}from '@angular/forms';
import {HttpClientModule}from '@angular/common/http';

import {enableProdMode} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerdetailComponent } from './customerdetail/customerdetail.component';
import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { CustomerdetaillistComponent } from './customerdetaillist/customerdetaillist.component';
import { EditComponent } from './edit/edit.component';
import { CustservService } from './custserv.service';
import { PassengerdetailComponent } from './passengerdetail/passengerdetail.component';
import { PassengerdetaillistComponent } from './passengerdetaillist/passengerdetaillist.component';
import { CategorysubcategoryComponent } from './categorysubcategory/categorysubcategory.component';
import { PackagecompletedetailComponent } from './packagecompletedetail/packagecompletedetail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { DatepackagedetailComponent } from './datepackagedetail/datepackagedetail.component';
import { ItineraryComponent } from './itinerary/itinerary.component';
import { PricedetailComponent } from './pricedetail/pricedetail.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerdetailComponent,
    HomeComponent,
    CustomerdetaillistComponent,
    EditComponent,
    PassengerdetailComponent,
    PassengerdetaillistComponent,
    CategorysubcategoryComponent,
     PackagecompletedetailComponent,
     HeaderComponent,
     FooterComponent,
     LoginComponent,
     SubcategoryComponent,
     DatepackagedetailComponent,
     ItineraryComponent,
     PricedetailComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CustservService],
  bootstrap: [AppComponent]
})
export class AppModule { }
