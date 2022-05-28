import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-driver',
  templateUrl: './add-driver.component.html',
  styleUrls: ['./add-driver.component.css']
})
export class ADDDRIVErComponent implements OnInit {

  AddDriverForm : FormGroup = this._formBuilder.group({
    Driverin_Name : ['' , Validators.required],
    Driver_Phone : ['' , Validators.required],
    Driver_Email_PK : ['' , Validators.required],
    Driver_BirthDate: ['' , Validators.required],
    Driver_City : ['' , Validators.required],
    Driver_Req_Type : ['' , Validators.required],
    Driver_License : ['' , Validators.required],
    Driver_License_Date : ['' , Validators.required],
    Driver_Shifts_Number :['' , Validators.required]
  });
  constructor(private _formBuilder : FormBuilder ,
    private _http : HttpClient
    ) { }

  ngOnInit(): void { 
  }

  onSave() : void {
    let DriverName = this.AddDriverForm.get('Driverin_Name')?.value
    let DriverNumber = this.AddDriverForm.get('Driver_Phone')?.value
    let DriverEmail = this.AddDriverForm.get('Driver_Email_PK')?.value
    let DriverBDate = this.AddDriverForm.get('Driver_BirthDate')?.value
    let DriverCity = this.AddDriverForm.get('Driver_City')?.value
    let DriverRequestT = this.AddDriverForm.get('Driver_Req_Type')?.value
    let Driverlicense = this.AddDriverForm.get('Driver_License')?.value
    let DriverLdate = this.AddDriverForm.get('Driver_License_Date')?.value
    let DriverShiftN = this.AddDriverForm.get('Driver_Shifts_Number')?.value

    let body = {
      Driver_Email_PK : DriverEmail,
      Driver_Phone :DriverNumber ,
      Driverin_Name: DriverName,
      Driver_BirthDate : DriverBDate ,
      Driver_City : DriverCity ,
      Driver_Req_Type :DriverRequestT ,
      Driver_License :Driverlicense ,
      Driver_License_Date :DriverLdate ,
      Driver_Shifts_Number :DriverShiftN

    }
    
    this._http.post("http://localhost:3030/Driver/Driver" , body)
   .subscribe((x)=> console.log(x))
 

}
}

