import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IMasterPrice } from 'src/app/IMasterPrice';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-masterprice',
  templateUrl: './masterprice.component.html',
  styleUrls: ['./masterprice.component.css']
})
export class MasterpriceComponent {
  constructor(public service: ServiceService,  private routes: Router){}

  ngOnInit(){
    const send = this.service.getPrice();

    send.subscribe( (data:any)=>{
      
      console.log(data)
      this.service.Newprice.data = data
      
     },
       (err: any) =>{
         console.log(err)
       })
     
  }
  logoutUser(){
    localStorage.clear();
    this.routes.navigate([('/home')])
  }

  deleteprice(id: number){
    this.service.deleteprice(id).subscribe( (data:any)=>{
      
    }
     ,
       (err) =>{
        alert("must be logged it to view data")
       });
       
  }
  updateprice(emp: IMasterPrice){
    this.service.price = emp;

  
  }
}
