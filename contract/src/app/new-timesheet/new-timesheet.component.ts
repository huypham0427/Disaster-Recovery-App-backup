import { Component } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-timesheet',
  templateUrl: './new-timesheet.component.html',
  styleUrls: ['./new-timesheet.component.css']
})
export class NewTimesheetComponent {

  constructor(public service: ServiceService,  private routes: Router){}

  logoutUser(){
    localStorage.clear();
    this.routes.navigate([('/home')])
  }


  onSummit(f:NgForm){
    
    let totalprice: number
    let totalhour: number;
    this.service.timecard  = f.value

   
   totalhour = this.service.timecard.total_hours + this.service.timecard.hoursUsed
    totalprice = this.service.timecard.laborTotal +this.service.timecard.machineTotal
    console.log(this.service.timecard.site_code)
    console.log(this.service.timecard.contractor_name)

    this.service.addtimecode(Number(localStorage.getItem("id")),this.service.timecard.site_code,this.service.timecard.contractor_name, totalhour, totalprice ).subscribe( (data:any)=>{
      console.log(data)
      
      
      
      this.routes.navigate(['/user']);
      // this.service.book.insert(this.service.Book)
      
     },
       (err) =>{
        alert("error something went wrong") 
       })


    }
   


    
  
  
    
    cancel(){
      this.routes.navigate(['/user']);
    }
  }



