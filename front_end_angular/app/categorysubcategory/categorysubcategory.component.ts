import { Component, OnInit } from '@angular/core';
import { CategorysubcategoryService } from '../categorysubcategory.service';
import { Icategorysubcategory } from '../icategorysubcategory';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorysubcategory',
  templateUrl: './categorysubcategory.component.html',
  styleUrls: ['./categorysubcategory.component.css']
})
export class CategorysubcategoryComponent implements OnInit {
  categorysubcategories:Icategorysubcategory[];
  a:Icategorysubcategory[];


  //inside constructor router must be initilized
  constructor(private _catsubcatservice:CategorysubcategoryService ,private router:Router) { }

  icategoryDisp(categorysubcategories:Icategorysubcategory[]): any
  {
    let cat = categorysubcategories.filter(element => element.eofflag == 'N');
    console.log(cat);
    return cat;
  }

   subcatDisp(a)
    {
      if(a.eofflag == 'N') //if n it will go to subcategory page
      {
        console.log(a);
        localStorage.setItem("catid",a.catsubid);
        this.router.navigate(["/subcategory"]);//to load next component 
      }
      else if(a.eofflag == 'Y')//if yes it will go to packagedetail page
      {
        console.log(a.catsubid);
        alert("hello from cat CategorySubcategory")
        localStorage.setItem("catsubid",a.catsubid);
        this.router.navigate(["/packagecompletedetail"]);
      }
    }
 
  ngOnInit() {
    
    this._catsubcatservice.getcategorysubcategorys().subscribe(data=>{this.categorysubcategories=data;
    this.a = this.icategoryDisp(this.categorysubcategories);
    console.log(this.categorysubcategories)});
      
    }

}
