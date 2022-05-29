import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  EditCustomerForm: FormGroup = this._formbuilder.group({
    Customer_Name : ['' , Validators.required],
    Customer_Phone : ['' , Validators.required],
    Customer_Email_PK : ['' , Validators.required],
    Customer_BirthDate: ['' , Validators.required],
    Customer_City : ['' , Validators.required],
    Customer_Active :['' , Validators.required]

  });
  email :number = -1;
  constructor(private _formbuilder: FormBuilder,
    private _http: HttpClient,
    private route:ActivatedRoute
    ) { }

  ngOnInit(): void {
   this.email = this.route.snapshot.params['email'];
  }

  editCustomer(){
    let CustomerName = this.EditCustomerForm.get('Customer_Name')?.value
    let CustomerNumber = this.EditCustomerForm.get('Customer_Phone')?.value
    let CustomerEmail = this.EditCustomerForm.get('Customer_Email_PK')?.value
    let CustomerCity = this.EditCustomerForm.get('Customer_City')?.value
    let Customer_Active = this.EditCustomerForm.get('Customer_Active')?.value

    let url = "http://localhost:3030/Customer/update";
    let obj = {Customer_Email_PK:this.email , Customer_Name:CustomerName , Customer_Phone:CustomerNumber ,
      Customer_City : CustomerCity, Customer_Active : Customer_Active}
    this._http.put(url,obj).subscribe(data=>{console.log(data)
    alert("row edited");
    })

  }

}
