import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  public SignupForm!: FormGroup;
  ngOnInit(): void {
    this.SignupForm = this.formBuilder.group({
      fullname: [''],
      email: [''],
      city: ['']
    });
  }

  signUp() {
    let encoding: { [symbol: string]: string } = {};
    encoding['0'] = ')';
    encoding['1'] = '!';
    encoding['2'] = '@';
    encoding['3'] = '#';
    encoding['4'] = '$';
    encoding['5'] = '%';
    encoding['6'] = '^';
    encoding['7'] = '&';
    encoding['8'] = '*';
    encoding['9'] = '(';

    this.http
      .post<any>(
        'http://localhost:3030/authentication/signup',
        this.SignupForm.value
      )
      .subscribe((res: any) => {
        if (res.status) {
          let code = res.code;
          code = '' + code;
          let codeAfter = '';
          for (let index = 0; index < code.length; index++) {
            codeAfter += encoding[code[index]];
          }
          this.router.navigate(['otp', codeAfter]);
        } else {
          alert('Account is already exist!');
        }
      });
  }
}
