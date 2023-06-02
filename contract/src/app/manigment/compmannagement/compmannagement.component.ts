import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-compmannagement',
  templateUrl: './compmannagement.component.html',
  styleUrls: ['./compmannagement.component.css']
})
export class CompmannagementComponent {

  constructor(public service: ServiceService,  private routes: Router){}
  logoutUser(){
    localStorage.clear();
    this.routes.navigate([('/home')])
  }

  ngOnInit(){
    const send = this.service.getContractor();

    send.subscribe( (data:any)=>{
      
      console.log(data)
      this.service.profile.data = data
      
     },
       (err: any) =>{
         console.log(err)
       })
     
  }


  deletecon(id: number){
    this.service.deleteContrators(id).subscribe( (data:any)=>{
      
    }
     ,
       (err) =>{
        alert("must be logged it to view data")
       });
       
  }

}
