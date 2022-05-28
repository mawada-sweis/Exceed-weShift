import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ADDDRIVErComponent } from './add-driver/add-driver.component';
import { DriverListComponent } from './driver-list/driver-list.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { EditDriverComponent } from './edit-driver/edit-driver.component';

const routes: Routes = [
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"home", component:HomepageComponent},
  {path:"dashboard", component:DashboardComponent},
  {path:"add-driver", component:ADDDRIVErComponent},
  {path:"driver-list", component:DriverListComponent},
  {path:"Profile", component:AdminPageComponent},
  {path:"Edit-Driver/:email", component:EditDriverComponent},
  {path:"**", component:NotFoundComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const ArrayOfComponents = [ADDDRIVErComponent,DriverListComponent,AdminPageComponent,EditDriverComponent ]