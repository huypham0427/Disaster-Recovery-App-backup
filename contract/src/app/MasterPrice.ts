import { IMasterPrice } from "./IMasterPrice";


export class MasterPrice {

    data!: IMasterPrice [];
    service: any;
    
    
    
    
    constructor() {
    }

    findAll():IMasterPrice[]{
        return this.data
    }

    // getSpecal(){
    //     return this.data.specal
    // }
}