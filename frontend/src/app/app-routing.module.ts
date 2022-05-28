import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CarComponent } from './car/car.component';
import { CarListComponent } from './car-list/car-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EditCarComponent } from './edit-car/edit-car.component';

const routes: Routes = [
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"home", component:HomepageComponent},
  {path:"dashboard", component:DashboardComponent},
  {path:"car",component:CarComponent},
  {path:"car-list",component:CarListComponent},
  {path:"edit-car/:id",component:EditCarComponent},
  {path:"**", component:NotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const ArrayOfCar = [CarComponent,CarListComponent,EditCarComponent]
