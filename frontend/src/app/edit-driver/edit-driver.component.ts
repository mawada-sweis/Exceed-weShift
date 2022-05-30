import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-driver',
  templateUrl: './edit-driver.component.html',
  styleUrls: ['./edit-driver.component.css']
})
export class EditDriverComponent implements OnInit {

  editDriverForm: FormGroup = this._formbuilder.group({
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
  email :number = -1;
  constructor(private _formbuilder: FormBuilder,
    private _http: HttpClient,
    private route:ActivatedRoute
    ) { }

  ngOnInit(): void {
   this.email = this.route.snapshot.params['email'];
  }
  
  editDriver(){
    let DriverName = this.editDriverForm.get('Driverin_Name')?.value
    let DriverNumber = this.editDriverForm.get('Driver_Phone')?.value
    let DriverEmail = this.editDriverForm.get('Driver_Email_PK')?.value
    let DriverBDate = this.editDriverForm.get('Driver_BirthDate')?.value
    let DriverCity = this.editDriverForm.get('Driver_City')?.value
    let DriverRequestT = this.editDriverForm.get('Driver_Req_Type')?.value
    let Driverlicense = this.editDriverForm.get('Driver_License')?.value
    let DriverLdate = this.editDriverForm.get('Driver_License_Date')?.value
    let DriverShiftN = this.editDriverForm.get('Driver_Shifts_Number')?.value

    let url = "http://localhost:3030/Driver/Driver";
    let obj = {Driver_Email_PK:this.email , Driverin_Name:DriverName , Driver_Phone:DriverNumber , Driver_BirthDate : DriverBDate ,
      Driver_City : DriverCity, Driver_Req_Type : DriverRequestT,Driver_License :Driverlicense, Driver_License_Date:DriverLdate,
      Driver_Shifts_Number:DriverShiftN}
    this._http.put(url,obj).subscribe(data=>{console.log(data)
    alert("row edited");
    })

  }

}

