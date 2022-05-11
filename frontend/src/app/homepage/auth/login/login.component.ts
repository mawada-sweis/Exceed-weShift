import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public LoginForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.LoginForm = this.formBuilder.group({
      email: ['']
    });
  }

  login() {
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
        'http://localhost:3030/authentication/login',
        this.LoginForm.value
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
          alert('Account is not exist!');
        }
      });
  }
}
