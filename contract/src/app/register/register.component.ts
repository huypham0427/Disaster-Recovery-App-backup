import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceService } from '../service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private service: ServiceService,private routes: Router){}


  onSummit(f:NgForm){
    this.service.ilogin  = f.value
    


    if(this.service.ilogin.contracting_type.toLowerCase() === "admin"){
      this.service.addAdmin(this.service.ilogin).subscribe( (data:any)=>{
    
      
      
      
        this.routes.navigate(['/login']);
        // this.service.book.insert(this.service.Book)
        
       },
         (err) =>{
          alert("error something went wrong") 
         })
  
    }
    else{
      this.service.addContrater(this.service.ilogin).subscribe( (data:any)=>{
    
      
      
      
        this.routes.navigate(['/login']);
        // this.service.book.insert(this.service.Book)
        
       },
         (err) =>{
          alert("error something went wrong") 
         })

    }
  
  }

    }
   
   

    
   



