import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-driver',
  templateUrl: './add-shift.component.html',
  styleUrls: ['./add-shift.component.css']
})
export class AddShiftComponent implements OnInit {

  AddShiftForm: FormGroup = this._formBuilder.group({
    Shift_ID_PK: ['', Validators.required],
    Driver_ID_FK: ['', Validators.required],
    Car_ID_FK: ['', Validators.required],
    Shift_Request_Number: ['', Validators.required],
    Insurance_License: ['', Validators.required],
    Shift_Start: ['', Validators.required],
    Shift_End: ['', Validators.required]
  });
  constructor(private _formBuilder: FormBuilder,
    private _http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  onSave(): void {
    let ShiftIDPK = this.AddShiftForm.get('Shift_ID_PK')?.value
    let DriverIDFK = this.AddShiftForm.get('Driver_ID_FK')?.value
    let CarIDFK = this.AddShiftForm.get('Car_ID_FK')?.value
    let ShiftRequestNumber = this.AddShiftForm.get('Shift_Request_Number')?.value
    let InsuranceLicense = this.AddShiftForm.get('Insurance_License')?.value
    let ShiftStart = this.AddShiftForm.get('Shift_Start')?.value
    let ShiftEnd = this.AddShiftForm.get('Shift_End')?.value

    let body = {
      Shift_ID_PK: ShiftIDPK,
      Driver_ID_FK: DriverIDFK,
      Car_ID_FK: CarIDFK,
      Shift_Request_Number: ShiftRequestNumber,
      Insurance_License: InsuranceLicense,
      Shift_Start: ShiftStart,
      Shift_End: ShiftEnd

    }

    this._http.post("http://localhost:3030/shift/", body)
      .subscribe((x) => console.log(x))
  }
}
