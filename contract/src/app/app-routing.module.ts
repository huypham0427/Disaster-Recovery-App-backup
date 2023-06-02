import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { SetpriceComponent } from './setprice/setprice.component';
import { NewTimesheetComponent } from './new-timesheet/new-timesheet.component';
import { MasterPrice } from './MasterPrice';
import { MasterpriceComponent } from './masterprice/masterprice/masterprice.component';
import { CompmannagementComponent } from './manigment/compmannagement/compmannagement.component';



const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent },
  {path: 'register', component: RegisterComponent },
  {path: 'login', component: LoginComponent },
  {path: 'admin', component: AdminComponent},
        // children:[{path:'new', component: CreateEmployeeComponent}]},
  {path:'new', component: CreateEmployeeComponent},
  {path:'setprice', component: SetpriceComponent},
  {path: 'user', component: UserComponent},
  {path: 'new-timesheet', component:NewTimesheetComponent},
  {path: 'price', component: MasterpriceComponent},
  {path:'contractor', component: CompmannagementComponent},
  // { path: 'employee', component: DisplayEmployeeComponent, canActivate:[LoginGuard], 
  //           children: [
  //             {path:'new', component: NewEmployeeComponent, canActivate:[LoginGuard], canActivateChild:[AdminGuard]}
  //           ]}
  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
