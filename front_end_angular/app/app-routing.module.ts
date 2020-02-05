import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerdetailComponent } from './customerdetail/customerdetail.component';
import { HomeComponent } from './home/home.component';
import { CustomerdetaillistComponent } from './customerdetaillist/customerdetaillist.component';
import { EditComponent } from './edit/edit.component';
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
const routes: Routes = [
  //{path:'home',component:HomeComponent},
  
  {path:'customerdetail',component:CustomerdetailComponent},

  {path:'customers',component:CustomerdetaillistComponent},

  {path:'passengerdetail',component:PassengerdetailComponent},
  {path:'passengerdetaillist',component:PassengerdetaillistComponent},
  {path:'home',component:CategorysubcategoryComponent},
  {path:'packagecompletedetail',component:PackagecompletedetailComponent},
  {path:'header',component:HeaderComponent},
  {path:'footer',component:FooterComponent},
  {path:'login',component:LoginComponent},
  {path:'subcategory',component:SubcategoryComponent},
  {path:'datepackagedetail',component:DatepackagedetailComponent},
  {path:'itinerary',component:ItineraryComponent},

  
{ path: '', redirectTo: '/home', pathMatch: 'full' },

//{ path: '**', component:  PageinvalidComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
