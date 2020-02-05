import { Isubcategory } from "./isubcategory";

export class Subcategory implements Isubcategory {
    constructor(
    public subcategoryname: string,    
    public subcategoryimage: string,
    public eofflag: string
    ){}
}
