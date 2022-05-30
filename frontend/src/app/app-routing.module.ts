import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthDriverComponent } from './homepage/auth/auth-driver/auth-driver.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BoardHomeComponent } from './dashboard/board-home/board-home.component';
import { CarComponent } from './dashboard/car/car.component';
import { CustomerComponent } from './dashboard/customer/customer.component';
import { DriverComponent } from './dashboard/driver/driver.component';
import { FeedbackComponent } from './dashboard/feedback/feedback.component';
import { RequestComponent } from './dashboard/request/request.component';
import { SalaryComponent } from './dashboard/salary/salary.component';
import { ShiftComponent } from './dashboard/shift/shift.component';

import { AddCustomerComponent } from './dashboard/customer/add-customer/add-customer.component';
import { CustomerListComponent } from './dashboard/customer/customer-list/customer-list.component';
import { EditCustomerComponent } from './dashboard/customer/edit-customer/edit-customer.component';

import { AddShiftComponent } from './dashboard/shift/add-shift/add-shift.component';
import { ShiftListComponent } from './dashboard/shift/shift-list/shift-list.component';
import { EditShiftComponent } from './dashboard/shift/edit-shift/edit-shift.component';
import { CarListComponent } from './dashboard/car/car-list/car-list.component';
import { AddCarComponent } from './dashboard/car/add-car/add-car.component';
import { EditCarComponent } from './dashboard/car/edit-car/edit-car.component';

import { AddDriverComponent } from './add-driver/add-driver.component';
import { EditDriverComponent } from './edit-driver/edit-driver.component';

import { AdminListComponent } from './admin-list/admin-list.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { EditAdminComponent } from './edit-admin/edit-admin.component';
import { AdddeleteSalaryComponent } from './dashboard/salary/adddelete-salary/adddelete-salary.component';
import { EditSalaryComponent } from './dashboard/salary/edit-salary/edit-salary.component';
import { SalaryListComponent } from './dashboard/salary/salary-list/salary-list.component';

const routes: Routes = [
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"home", component:HomepageComponent, children:[{path:"driver", component:AuthDriverComponent}]},
  {path:"dashboard", redirectTo: 'dashboard'},
  {path:"addcustomer" , component: AddCustomerComponent},
  {path:"customer-list" , redirectTo: 'dashboard/customer'},
  {path:"editcustomer/:email" , component: EditCustomerComponent},
  {path:"addcar" , component: AddCarComponent},
  {path:"car-list" , redirectTo: 'dashboard/car'},
  {path:"editcar/:email" , component: EditCarComponent},
  {path:"addshitf" , component: AddShiftComponent},
  {path:"shift-list" , redirectTo: 'dashboard/shift'},
  {path:"add-driver" ,component: AddDriverComponent},
  {path:"Edit-Driver/:email", component:EditDriverComponent},
  {path:"Admin-list", component:AdminListComponent},
  {path:"Add-Admin", component:AddAdminComponent},
  {path:"Edit-Admin/:email", component:EditAdminComponent},
  {path:"editshift/:id" , component: EditShiftComponent},
  {
    path:'dashboard',
    component:DashboardComponent,
    children: [
      {
        path:'home',
        component:BoardHomeComponent
      },
      {
        path:'car',
        component:CarComponent,
        children:[
          {
            path:"car-list",
            component:CarListComponent
          },
          {
            path:"add-car",
            component:AddCarComponent
          },
          {
            path:"edit-car",
            component:EditCarComponent
          }
        ]
      },
      {
        path:'customer',
        component:CustomerComponent
      },
      {
        path:'driver',
        component:DriverComponent
      },
      {
        path:'feedback',
        component:FeedbackComponent
      },
      {
        path:'request',
        component:RequestComponent
      },
      {
        path:'salary',
        component:SalaryComponent,children:[
          {
            path:"salary-list",
            component:SalaryListComponent
          },
          {
            path:"adddelete-salary",
            component:AdddeleteSalaryComponent
          },
          {
            path:"edit-salary",
            component:EditSalaryComponent
          }
        ]
      },
      {
        path:'shift',
        component:ShiftComponent,
        children:[
          {
            path:"add-shift",
            component:AddShiftComponent
          },
          {
            path:"shift-list",
            component:ShiftListComponent
          },
          {
            path:"edit-shift",
            component:EditShiftComponent
          }
        ]
      }
    ]
  },
  {path:"**", component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


export const CustomersComponent = [ AddCustomerComponent,
  EditCustomerComponent,
  CustomerListComponent]

export const CarsComponent = [ AddCarComponent,
    EditCarComponent,
    CarListComponent]

export const DriverComponents = [AddDriverComponent,EditDriverComponent ]

export const AdminComponents=[EditAdminComponent,AddAdminComponent,AdminListComponent]