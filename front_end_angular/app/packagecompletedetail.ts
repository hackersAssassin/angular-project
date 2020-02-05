import { Ipackagecompletedetail } from "./ipackagecompletedetail";

export class Packagecompletedetail implements Ipackagecompletedetail
{
constructor(


    public packageid: number, 
    public tourname: string,
    public tourimage: string,
    public catsubid: number,
    public description: string,
    public categorysubcategory: any
)
{}
}
