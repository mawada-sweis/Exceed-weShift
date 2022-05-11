import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  myParam: any;
  state: any = {};
  public OTPForm!: FormGroup;

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => (this.myParam = params['code'])
    );
    console.log(this.myParam);

    this.OTPForm = this.formBuilder.group({
      code1: [''],
      code2: [''],
      code3: [''],
      code4: [''],
    });
  }

  checkOTP() {
    let codeAfter = '';
    let code =
      this.OTPForm.value.code1 +
      this.OTPForm.value.code2 +
      this.OTPForm.value.code3 +
      this.OTPForm.value.code4;
    let encoding: { [symbol: string]: string } = {};
    encoding[')'] = '0';
    encoding['!'] = '1';
    encoding['@'] = '2';
    encoding['#'] = '3';
    encoding['$'] = '4';
    encoding['%'] = '5';
    encoding['^'] = '6';
    encoding['&'] = '7';
    encoding['*'] = '8';
    encoding['('] = '9';
    console.log(this.myParam);
    for (let index = 0; index < code.length; index++) {
      codeAfter += encoding[this.myParam[index]];
    }
    if (code == codeAfter) {
      this.router.navigate(['dashboard']);
    } else {
      alert(
        'The code is not correct, please enter the code that recived in youy email'
      );
    }
  }
}
