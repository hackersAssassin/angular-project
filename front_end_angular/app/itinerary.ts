import { Iitinerary } from "./iitinerary";

export class Itinerary implements Iitinerary {
    constructor(
   public itrid: number,  
   public packageid: number,
   public location: string,
   public  daywisedescription: string,
   public daynumber: number
    ){}
}
