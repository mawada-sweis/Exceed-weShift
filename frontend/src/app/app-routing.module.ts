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

const routes: Routes = [
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"home", component:HomepageComponent, children:[{path:"driver", component:AuthDriverComponent}]},
  {path:"dashboard", redirectTo: 'dashboard'},
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
