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

const routes: Routes = [
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"home", component:HomepageComponent, children:[{path:"driver", component:AuthDriverComponent}]},
  {path:"dashboard", redirectTo: 'dashboard'},
  {path:"addcustomer" , component: AddCustomerComponent},
  {path:"customer-list" , redirectTo: 'dashboard/customer'},
  {path:"editcustomer/:email" , component: EditCustomerComponent},
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
        component:CarComponent
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
        component:SalaryComponent
      },
      {
        path:'shift',
        component:ShiftComponent
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