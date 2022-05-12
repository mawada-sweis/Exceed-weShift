import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {}

  public SignupForm!: FormGroup;
  ngOnInit(): void {
    this.SignupForm = this.formBuilder.group({
      fullname: [''],
      email: [''],
      city: ['']
    });
  }
  @Output() isOTP = new EventEmitter<any>();

  signUp() {
    this.http
      .post<any>(
        'http://localhost:3030/authentication/signup',
        this.SignupForm.value
      )
      .subscribe((res: any) => {
        if (res.status) {
          this.isOTP.emit({ status: true, value: res.code });
        } else {
          alert('Account is already exist!');
        }
      });
  }
  openLogin(){
    this.isOTP.emit({ isLogin: true });
  }
}
