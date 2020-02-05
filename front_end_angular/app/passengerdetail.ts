import { Ipassenger } from "./ipassenger";

export class Passengerdetail implements Ipassenger

{
    constructor(
   public bookingid: number,
   public passengername: string,
   public roomtype: string,
   public cost: number,
   public passengeriddocument: string,
   public passengeridno: string,
   public passengersex: string,
   public passengeremail: string,
   public passengerdob?: Date
    )
    {}
    

}
