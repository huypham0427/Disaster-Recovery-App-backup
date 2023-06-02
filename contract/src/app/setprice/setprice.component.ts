import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ServiceService } from '../service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setprice',
  templateUrl: './setprice.component.html',
  styleUrls: ['./setprice.component.css']
})
export class SetpriceComponent {
  item = this.service.price
  myForm!:FormGroup;
  constructor(private service: ServiceService,private routes: Router){}
 
  ngOnInit(){
     
    this.myForm =  new FormGroup({
      "id": new FormControl(this.item.id),
      "description": new FormControl(this.item.description, Validators.required),
      "jobcode":new FormControl(this.item.jobcode, Validators.required),
      "hourly_rate":new FormControl(this.item.hourly_rate,Validators.required),
      "max_hours_per_day":new FormControl(this.item.max_hours_per_day,Validators.required),
    }
  

    )

  

  }

  onSubmit(){
    this.service.updateprice(this.item.id,this.myForm.value).subscribe( (data:any)=>{
      
    
      this.service.Newprice.data = data;
      
      this.routes.navigate(['/price']);
     
     },
       (err) =>{
        alert("error something went wrong") 
       })

  }

  
  }

   
  
