import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ILoging } from '../ilogin';
import { Login } from '../login';
import { Router } from '@angular/router';
import { IMasterPrice } from '../IMasterPrice';
import { MasterPrice } from '../MasterPrice';
import { ITimecard } from '../ITimeCard';
import { Timecard } from '../TimeCard';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  timecard!:ITimecard;
  timesheet: Timecard = new Timecard();
  ilogin!:ILoging ;
  profile: Login = new Login();
  price!:IMasterPrice ;
  Newprice: MasterPrice = new MasterPrice();
  url = "http://localhost:8085/"
  
  

  constructor(private http:HttpClient) { }

  adminlogin(cred:any ,cred2:any){
    return this.http.get(this.url+"adminlogin/"+ cred+'/'+cred2)
  }
  userlogin(cred:any ,cred2:any){
    return this.http.get(this.url+"conlogin/"+ cred+'/'+cred2)
  }
  addAdmin(body:any){
   const admin = {  
      "username": body.username,
      "password": body.password,
      "email": body.email
  }
    return this.http.post(this.url+"adminregister/",admin)
 }

addContrater(body: any ){
  return this.http.post(this.url+"conregister/",body)

}
deleteprice(id: number){
  return this.http.delete(this.url+"deletecode/"+id)
 }
 deleteContrators(id: number){
  return this.http.delete(this.url+"deletecon/"+id)
 }

 getPrice(){
  return this.http.get<IMasterPrice[]>(this.url+"price/")
 }
 addprice(body: any ){
  return this.http.post(this.url+"newprice/",body)

}
updateprice(id:number,body:IMasterPrice){
  return this.http.put(this.url+"updateprice/", body)
  
 }
 getContractor(){
  return this.http.get<ILoging[]>(this.url+"contractor/")
 }
 getTime(){
  return this.http.get<ITimecard[]>(this.url+"timecard/")
 }
 getusertime(id:string|null){
  return this.http.get<ITimecard[]>(this.url+"timecardcon/"+id)
 }

 updatetimesheet(id:ITimecard){
  return this.http.put(this.url+"admintimesheet/",id)
  
 }
 addtimecode(id:number ,site_code:string, contractor_name:string, totalhour:number, totalprice:number){
  const body = {
    "contractor_id": id,
    "site_code": site_code,
    "contractor_name": contractor_name,
    "total_hours" :totalhour,
    "total_amount": totalprice,
  }
  console.log(id)
  
   return this.http.post(this.url+"timesheet/",body)
}

  

getPricecode(code: string){
  return this.http.get<IMasterPrice[]>(this.url+"pricecode/"+code)
 }
}
