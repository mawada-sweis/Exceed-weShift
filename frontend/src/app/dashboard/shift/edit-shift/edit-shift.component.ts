import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit-shift',
  templateUrl: './edit-shift.component.html',
  styleUrls: ['./edit-shift.component.css']
})
export class EditShiftComponent implements OnInit {

  EditShiftComponent: FormGroup = this._formbuilder.group({
    Shift_ID_PK : ['' , Validators.required],
    Driver_ID_FK : ['' , Validators.required],
    Car_ID_FK : ['' , Validators.required],
    Shift_Request_Number: ['' , Validators.required],
    Insurance_License : ['' , Validators.required],
    Shift_Start : ['' , Validators.required],
    Shift_End : ['' , Validators.required]

  });
  id :number = -1;
  constructor(private _formbuilder: FormBuilder,
    private _http: HttpClient,
    private route:ActivatedRoute
    ) { }

  ngOnInit(): void {
   this.id = this.route.snapshot.params['id'];
  }

  editShift(){
    let ShiftIDPK = this.EditShiftComponent.get('Shift_ID_PK')?.value
    let DriverIDFK = this.EditShiftComponent.get('Driver_ID_FK')?.value
    let CarIDFK = this.EditShiftComponent.get('Car_ID_FK')?.value
    let ShiftRequestNumber = this.EditShiftComponent.get('Shift_Request_Number')?.value
    let InsuranceLicense = this.EditShiftComponent.get('Insurance_License')?.value
    let ShiftStart = this.EditShiftComponent.get('Shift_Start')?.value
    let ShiftEnd = this.EditShiftComponent.get('Shift_End')?.value

    let url = "http://localhost:3030/shift/update";
    let obj = {Shift_ID_PK:this.id , Driver_ID_FK:DriverIDFK , Car_ID_FK:CarIDFK , Shift_Request_Number : ShiftRequestNumber ,
      Insurance_License : InsuranceLicense, Shift_Start : ShiftStart,Shift_End :ShiftEnd}
    this._http.put(url,obj).subscribe(data=>{console.log(data)
    alert("row edited");
    })

  }


}