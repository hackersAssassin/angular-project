import { Icategorysubcategory } from "./icategorysubcategory";

export class Categorysubcategory implements Icategorysubcategory {
    constructor(
    public    catsubid:number,
    public categoryid:number,
    public categoryname:string,
    public categoryimage:string,
    public subcategoryid:number,
    public subcategoryname:string,
    public subcategoryimage:string,
    public eofflag:string
    ){}
}
