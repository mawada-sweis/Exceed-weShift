import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule,ArrayOfComponents } from './app-routing.module';
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
    ArrayOfComponents,
    NotFoundComponent,


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
