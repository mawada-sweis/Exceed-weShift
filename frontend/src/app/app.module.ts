import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule, CarsComponent, CustomersComponent,DriverComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ServicesComponent } from './homepage/services/services.component';
import { ContactUsComponent } from './homepage/contact-us/contact-us.component';
import { AboutUsComponent } from './homepage/about-us/about-us.component';
import { AuthComponent } from './homepage/auth/auth.component';
import { LoginComponent } from './homepage/auth/login/login.component';
import { OtpComponent } from './homepage/auth/otp/otp.component';
import { SignupComponent } from './homepage/auth/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthDriverComponent } from './homepage/auth/auth-driver/auth-driver.component';
import { BoardHomeComponent } from './dashboard/board-home/board-home.component';
import { CarComponent } from './dashboard/car/car.component';
import { CustomerComponent } from './dashboard/customer/customer.component';
import { DriverComponent } from './dashboard/driver/driver.component';
import { FeedbackComponent } from './dashboard/feedback/feedback.component';
import { RequestComponent } from './dashboard/request/request.component';
import { SalaryComponent } from './dashboard/salary/salary.component';
import { ShiftComponent } from './dashboard/shift/shift.component';
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
import { ShiftInfoComponent } from './dashboard/board-home/shift-info/shift-info.component';
import { ActiveCustomersComponent } from './dashboard/board-home/active-customers/active-customers.component';
import { NumberRequestsComponent } from './dashboard/board-home/number-requests/number-requests.component';
import { CurrentShiftComponent } from './dashboard/board-home/current-shift/current-shift.component';
import { NextDonationComponent } from './dashboard/board-home/next-donation/next-donation.component';
import { RevenueComponent } from './dashboard/board-home/revenue/revenue.component';
import { EditSalaryComponent } from './dashboard/salary/edit-salary/edit-salary.component';
import { AdddeleteSalaryComponent } from './dashboard/salary/adddelete-salary/adddelete-salary.component';
import { SalaryListComponent } from './dashboard/salary/salary-list/salary-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ServicesComponent,
    ContactUsComponent,
    AboutUsComponent,
    AuthComponent,
    LoginComponent,
    SignupComponent,
    OtpComponent,
    DashboardComponent,
    NotFoundComponent,
    AuthDriverComponent,
    BoardHomeComponent,
    CarComponent,
    CustomerComponent,
    DriverComponent,
    FeedbackComponent,
    RequestComponent,
    SalaryComponent,
    ShiftComponent,
    CustomersComponent,
    CarsComponent,
    DriverComponents,
    AddShiftComponent,
    ShiftListComponent,
    EditShiftComponent,
    CarListComponent,
    AddCarComponent,
    EditCarComponent,
    AddDriverComponent,
    EditDriverComponent,
    AdminListComponent,
    AddAdminComponent,
    EditAdminComponent,
    ShiftInfoComponent,
    ActiveCustomersComponent,
    NumberRequestsComponent,
    CurrentShiftComponent,
    NextDonationComponent,
    RevenueComponent,
    EditSalaryComponent,
    AdddeleteSalaryComponent,
    SalaryListComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
