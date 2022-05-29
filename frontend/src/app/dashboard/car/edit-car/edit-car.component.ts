import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css']
})
export class EditCarComponent implements OnInit {

  EditCarComponent: FormGroup = this._formbuilder.group({
    Car_ID_PK: ['', Validators.required],
    Car_Model: ['', Validators.required],
    Car_Number: ['', Validators.required],
    Expenses: ['', Validators.required],
    Insurance_License: ['', Validators.required],
    Car_Fuel_Type: ['', Validators.required],
    Car_Fuel_Price: ['', Validators.required],
    Car_Type: ['', Validators.required],
    Car_Year_Release: ['', Validators.required],
    Car_Passenger_Number: ['', Validators.required]

  });
  id: number = -1;
  constructor(private _formbuilder: FormBuilder,
    private _http: HttpClient,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  }

  editCar() {
    let CarID = this.EditCarComponent.get('Car_ID_PK')?.value
    let CarModel = this.EditCarComponent.get('Car_Model')?.value
    let CarNumber = this.EditCarComponent.get('Car_Number')?.value
    let Expense = this.EditCarComponent.get('Expenses')?.value
    let InsuranceLicense = this.EditCarComponent.get('Insurance_License')?.value
    let CarFuelType = this.EditCarComponent.get('Car_Fuel_Type')?.value
    let CarFuelPrice = this.EditCarComponent.get('Car_Fuel_Price')?.value
    let CarType = this.EditCarComponent.get('Car_Type')?.value
    let CarYearRelease = this.EditCarComponent.get('Car_Year_Release')?.value
    let CarPassengerNumber = this.EditCarComponent.get('Car_Passenger_Number')?.value

    let url = "http://localhost:3030/car/update";
    let obj = {
      Car_ID_PK: this.id, Car_Model: CarModel, Car_Number: CarNumber, Expenses: Expense,
      Insurance_License: InsuranceLicense, Car_Fuel_Type: CarFuelType, Car_Fuel_Price: CarFuelPrice, Car_Type: CarType,
      Car_Year_Release: CarYearRelease, Car_Passenger_Number: CarPassengerNumber
    }
    this._http.put(url, obj).subscribe(data => {
      console.log(data)
      alert("row edited");
    })

  }
}