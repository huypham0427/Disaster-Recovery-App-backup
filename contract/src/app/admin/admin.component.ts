import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { ITimecard } from '../ITimeCard';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  
  constructor(public service: ServiceService,  private routes: Router){}

  ngOnInit(){
    const send = this.service.getTime();

    send.subscribe( (data:any)=>{
      console.log(data)
      this.service.timesheet.data = data
      
     },
       (err: any) =>{
         console.log(err)
       })
     
  }


  

  setMasterPrice() {
   
    // TODO: send an API request to set the master price using the provided job code and hourly rate
    // Example API call:
    // this.apiService.setMasterPrice(masterPrice).subscribe(response => {
    //   console.log('Master price set successfully');
    //   // Perform any additional actions if needed
    // }, error => {
    //   console.error('Error setting master price', error);
    //   // Handle the error appropriately
    // });
  }

  approveTimecard(timecard: ITimecard) {
    

    this.service.updatetimesheet(timecard).subscribe( (data:any)=>{
    
     
      
     },
       (err: any) =>{
         console.log(err)
       })  }

  createContractorUser() {
    this.routes.navigate([('/new')])
  }

  logout(){
    localStorage.clear();
    this.routes.navigate([('/home')])
  }
}
