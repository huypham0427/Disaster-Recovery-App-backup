import { ITimecard } from "./ITimeCard";


export class Timecard {

    data!: ITimecard [];
    service: any;
    
    
    
    
    constructor() {
    }

    findAll():ITimecard[]{
        return this.data
    }

    // getSpecal(){
    //     return this.data.specal
    // }
}