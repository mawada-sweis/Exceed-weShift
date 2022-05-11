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
  isOTP = false;
  getData(data: any) {
    this.isOTP = data.status;
    this.code = data.value;
    if(this.isOTP){
      this.isLogin = false;
    }
  }
}
