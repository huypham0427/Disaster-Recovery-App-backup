import { Component } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private service: ServiceService,private router : Router){}


  onSummit(f:NgForm){
    let url = "/login"
    this.service.ilogin  = f.value

    
    this.service.adminlogin(this.service.ilogin.email,this.service.ilogin.password).subscribe( (data:any)=>{
    
      //fix later add insert
      console.log(data);
      if(data.length > 0){
        

      
      this.service.profile.data = data
        let emp = this.service.profile.data
         localStorage.setItem("id",emp[0].id.toString());
      
      url ='/admin';
        this.admin();
      }
      else{
        // alert("wrong username or password")
      }
     
       

      
      
     },
       (err) =>{
        alert("error something went wrong") 
       })


       this.service.userlogin(this.service.ilogin.email,this.service.ilogin.password).subscribe( (data:any)=>{
    
        //fix later add insert
        console.log(data);
        if(data.length > 0){
          
  
        
        this.service.profile.data = data
          let emp = this.service.profile.data
           localStorage.setItem("id",emp[0].id.toString());
        
       url = "/user"
       this.user();
  
        }
        else{
          // alert("wrong username or password")
        }
         
  
        // this.service.book.insert(this.service.Book)
        
       },
         (err) =>{
          alert("error something went wrong") 
         })
        
  }

  admin(){
    this.router.navigate(['/admin']);

  }
  user(){
    this.router.navigate(['/user']);
  }
}
