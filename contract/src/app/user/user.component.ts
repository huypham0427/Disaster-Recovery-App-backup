import { Component } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  constructor(public service: ServiceService,  private routes: Router){}

  ngOnInit(){
    let id =localStorage.getItem("id")

    const send = this.service.getusertime(id);

    send.subscribe( (data:any)=>{
      
      console.log(data)
      this.service.timesheet.data = data
      
     },
       (err: any) =>{
         console.log(err)
       })
     
  }

  logoutUser(){
    localStorage.clear();
    this.routes.navigate([('/home')])
  }

  submit(){
    
  }
}
