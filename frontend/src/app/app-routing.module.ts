import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomepageComponent } from './homepage/homepage.component';
import {EditCustomerComponent} from './edit-customer/edit-customer/edit-customer.component';
import { AddCustomerComponent } from './add-customer/add-customer/add-customer.component';
import { CustomerListComponent } from './customer-list/customer-list/customer-list.component';

const routes: Routes = [
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"home", component:HomepageComponent},
  {path:"dashboard", component:DashboardComponent},
  {path:"editcustomer",component:EditCustomerComponent},
  {path:"customerlist",component:CustomerListComponent},
  {path:"addcustomer",component:AddCustomerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const ArrayOfCustomer =[EditCustomerComponent,AddCustomerComponent,CustomerListComponent]

