import { Component, OnInit ,Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginComponent } from '../homepage/auth/login/login.component';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  DriversList: Array<any> = [];
  constructor(private _http: HttpClient,public login: LoginComponent) {}

  ngOnInit(): void {
    this._http
      .get('http://localhost:3030/Admin/Admin')
      .subscribe((response: any) => {
        this.DriversList = response;
      });
      console.log(this.DriversList);
  }
   
  
}
