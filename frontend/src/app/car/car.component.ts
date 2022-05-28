import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-driver',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  AddCarForm : FormGroup = this._formBuilder.group({
    Car_ID_PK : ['' , Validators.required],
    Car_Model : ['' , Validators.required],
    Car_Number : ['' , Validators.required],
    Expenses: ['' , Validators.required],
    Insurance_License : ['' , Validators.required],
    Car_Fuel_Type : ['' , Validators.required],
    Car_Fuel_Price : ['' , Validators.required],
    Car_Type : ['' , Validators.required],
    Car_Year_Release :['' , Validators.required],
    Car_Passenger_Number :['' , Validators.required]
  });
  constructor(private _formBuilder : FormBuilder ,
    private _http : HttpClient
    ) { }

  ngOnInit(): void { 
  }

  onSave() : void {
    let CarID = this.AddCarForm.get('Car_ID_PK')?.value
    let CarModel = this.AddCarForm.get('Car_Model')?.value
    let CarNumber = this.AddCarForm.get('Car_Number')?.value
    let Expense = this.AddCarForm.get('Expenses')?.value
    let InsuranceLicense = this.AddCarForm.get('Insurance_License')?.value
    let CarFuelType = this.AddCarForm.get('Car_Fuel_Type')?.value
    let CarFuelPrice = this.AddCarForm.get('Car_Fuel_Price')?.value
    let CarType = this.AddCarForm.get('Car_Type')?.value
    let CarYearRelease = this.AddCarForm.get('Car_Year_Release')?.value
    let CarPassengerNumber = this.AddCarForm.get('Car_Passenger_Number')?.value

    let body = {
      Car_ID_PK : CarID,
      Car_Model :CarModel ,
      Car_Number: CarNumber,
      Expenses : Expense ,
      Insurance_License : InsuranceLicense ,
      Car_Fuel_Type :CarFuelType ,
      Car_Fuel_Price :CarFuelPrice ,
      Car_Type :CarType ,
      Car_Year_Release :CarYearRelease,
      Car_Passenger_Number :CarPassengerNumber

    }
    
    this._http.post("http://localhost:3030/Car/Car" , body)
   .subscribe((x)=> console.log(x))
 

}
}