import { ILoging } from "./ilogin";

export class Login {
    data!:ILoging[] ;
    service: any;
    
    
    
    
    constructor() {
    }

    findAll():ILoging[]{
        return this.data
    }

    // getSpecal(){
    //     return this.data.specal
    // }
}