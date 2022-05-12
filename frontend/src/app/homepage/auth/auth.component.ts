import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor() { }
  ngOnInit(): void { }
  code:number = 0;
  isLogin = true;
  isSignup = false;
  isOTP = false;
  getData(data: any) {
    if(data.status){
      this.isOTP = true;
      this.code = data.value;
      this.isLogin = false;
      this.isSignup = false;
    } else {
      this.isLogin = false;
      this.isSignup = true;
      this.isOTP = false;
    }
  }
  getFromSignup(data: any){
    if(data.status){
      this.isOTP = true;
      this.code = data.value;
      this.isLogin = false;
      this.isSignup = false;
    }
    if(data.isLogin){
      this.isLogin = true;
      this.isSignup = false;
      this.isOTP = false;
    }
  }
}
