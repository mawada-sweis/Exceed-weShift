import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css'],
})
export class OtpComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  @Input() codeUser: number = 0;
  @Input() emailType: string = '';
  public OTPForm!: FormGroup;

  ngOnInit(): void {
    this.OTPForm = this.formBuilder.group({
      code1: [''],
      code2: [''],
      code3: [''],
      code4: [''],
    });
    console.log('Code: ', this.codeUser);
    console.log('Email Type: ', this.emailType);
  }

  checkOTP() {
    let code =
      this.OTPForm.value.code1 +
      this.OTPForm.value.code2 +
      this.OTPForm.value.code3 +
      this.OTPForm.value.code4;
    if (code == this.codeUser) {
      if (this.emailType == 'Admin') {
        this.router.navigate(['dashboard']);
      }
      if(this.emailType == 'Customer') {
        this.router.navigate(['customer']);
      }
      if(this.emailType == 'Driver') {
        this.router.navigate(['driver']);
      }
    } else {
      alert(
        'The code is not correct, please enter the code that recived in youy email'
      );
    }
  }
}
