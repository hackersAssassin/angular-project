import { Component, OnInit } from '@angular/core';
import { Icategorysubcategory } from '../icategorysubcategory';
import { CategorysubcategoryService } from '../categorysubcategory.service';
import { Router } from '@angular/router';
import { Isubcategory } from '../isubcategory';
import { element } from '@angular/core/src/render3';
@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css']
})
export class SubcategoryComponent implements OnInit {
  categorysubcategories:Icategorysubcategory[];
  a:Icategorysubcategory[];
  id:number=parseInt(localStorage.getItem('catid'));
  
  constructor(private _catsubcatservice:CategorysubcategoryService,private router:Router) { }

  subcatDisp(a)
    {
     if(a.eofflag == 'Y')
     {
        alert("hello from subcategory");
        localStorage.setItem("catsubid",a.catsubid);
       this.router.navigate(["/packagecompletedetail"]);
     }
    }
  isubcatDisp(categorysubcategories:Icategorysubcategory[]) : any
  {
    console.log(categorysubcategories);
    console.log(this.id);
     let x= categorysubcategories.filter(element => ((element.categoryid == this.id) && (element.subcategoryid != 0 )));
     console.log(x);
    return x;
  }
  ngOnInit() {
    alert(this.id);
    this._catsubcatservice.getcategorysubcategorys().subscribe(data=>{this.categorysubcategories=data;
      this.a=this.isubcatDisp(this.categorysubcategories);
      console.log(this.a)}) ;
  }

}























/*
subcategory:Icategorysubcategory[];
categorysubcategory:Icategorysubcategory[];
id: number=parseInt(localStorage.getItem('catid'))

  constructor(private _catsubcatserv:CategorysubcategoryService,private router:Router) { }
isubcatdisp(categorysubcategory:Icategorysubcategory[]) : any
{
  let subcat= categorysubcategory.filter(element=>(element.categoryid == this.id) && (element.subcategoryid !=null));
  console.log();
  return subcat;
}

 getsubid(id)
 {
   console.log(id);
   localStorage.setItem("subcatid",id);
   this.router.navigate(['/packagecompletdetail']);
 }
  ngOnInit() {
    this._catsubcatserv.getcategorysubcategorys().subscribe(data=>{this.categorysubcategory=data;
    this.subcategory=this.isubcatdisp(this.categorysubcategory);
    console.log(this.subcategory)});
    
  }

}
*/