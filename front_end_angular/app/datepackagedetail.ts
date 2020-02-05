import { Idatepackagedetail } from "./Idatepackagedetail";

export class Datepackagedetail implements Idatepackagedetail {
  packagecompletedetail: any;
 constructor(
    public datepackageid: number,
   public  startdate: Date,
   public  enddate: string,
   public  packageid: number
 ){}
    
}
