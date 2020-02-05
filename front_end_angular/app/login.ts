import { Ilogin } from "./ilogin";

export class Login implements Ilogin {

    constructor( 
        public customername: string,
        public password: string
    ){}
}
