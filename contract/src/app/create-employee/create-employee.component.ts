import { Component } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {
  constructor(public service: ServiceService,  private routes: Router){}

  logoutUser(){
    localStorage.clear();
    this.routes.navigate([('/home')])
  }

  onSummit(f:NgForm){
    this.service.price  = f.value
    


   
      this.service.addprice(this.service.price).subscribe( (data:any)=>{
    
      
      
      
        this.routes.navigate(['/price']);
        // this.service.book.insert(this.service.Book)
        
       },
         (err) =>{
          alert("error something went wrong") 
         })
  
    

  }
}
