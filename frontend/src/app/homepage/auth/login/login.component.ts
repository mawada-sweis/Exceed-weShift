import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public LoginForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.LoginForm = this.formBuilder.group({
      email: ['']
    });
  }
  @Output() isOTP = new EventEmitter<any>();

  login() {
    this.http
      .post<any>(
        'http://localhost:3030/authentication/login',
        this.LoginForm.value
      )
      .subscribe((res: any) => {
        if (res.status) {
          this.isOTP.emit({ status: true, value: res.code, type: res.type });
        } else {
          alert('Account is not exist!');
        }
      });
  }
  openReg(){
    this.isOTP.emit({ status: false });
  }
}
