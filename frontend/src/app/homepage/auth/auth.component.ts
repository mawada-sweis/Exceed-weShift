import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}
  
  code: number = 0;
  type: string = '';
  isLogin = true;
  isSignup = false;
  isOTP = false;
  isDriver = false;
  
  getData(data: any) {
    if (data.status) {
      this.isOTP = true;
      this.code = data.value;
      this.type = data.type;
      this.isLogin = false;
    } else {
      this.isLogin = false;
      this.isSignup = true;
    }
  }
  
  getFromSignup(data: any) {
    if (data.status) {
      this.isOTP = true;
      this.code = data.value;
      this.type = data.type;
      this.isSignup = false;
    }
    if (data.isLogin) {
      this.isLogin = true;
      this.isSignup = false;
    }
  }

  getFromDriver(data: any) {
    if (data.status) {
      this.isOTP = true;
      this.code = data.value;
      this.type = data.type;
      this.isDriver = false;
    }
  }
}
