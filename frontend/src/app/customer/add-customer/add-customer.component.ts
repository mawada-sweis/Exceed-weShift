import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  AddCustomerForm : FormGroup = this._formBuilder.group({
    Customer_Name : ['' , Validators.required],
    Customer_Phone : ['' , Validators.required],
    Customer_Email_PK : ['' , Validators.required],
    Customer_City : ['' , Validators.required],
    Customer_Active : ['' , Validators.required]
  });

  constructor(private _formBuilder : FormBuilder ,
    private _http : HttpClient) { }

  ngOnInit(): void {
  }

  onSave() : void {
    let CustomerName = this.AddCustomerForm.get('Customer_Name')?.value
    let CustomerNumber = this.AddCustomerForm.get('Customer_Phone')?.value
    let CustomerEmail = this.AddCustomerForm.get('Customer_Email_PK')?.value
    let CustomerCity = this.AddCustomerForm.get('Customer_City')?.value
    let CustomerActive = this.AddCustomerForm.get('Customer_Active')?.value

    let body = {
      Customer_Email_PK : CustomerEmail,
      Customer_Phone :CustomerNumber ,
      Customer_Name: CustomerName,
      Customer_City : CustomerCity ,
      Customer_Active :CustomerActive

    }
    
    this._http.post("http://localhost:3030/Customer/Customer" , body)
   .subscribe((x)=> console.log(x))
}


}
