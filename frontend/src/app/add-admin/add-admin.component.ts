import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators, FormBuilder, FormControl } from '@angular/forms';


@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {

  AddAdminForm : FormGroup = this._formBuilder.group({
    Admin_Name : ['' , Validators.required],
    Admin_Phone : ['' , Validators.required],
    Admin_Email : ['' , Validators.required],
    Admin_City : ['' , Validators.required],

  });

  constructor(private _formBuilder : FormBuilder ,
    private _http : HttpClient) { }
  

  ngOnInit(): void {
  }
  onSave() : void {
    let AdminName = this.AddAdminForm.get('Admin_Name')?.value
    let AdminPhone = this.AddAdminForm.get('Admin_Phone')?.value
    let AdminEmail = this.AddAdminForm.get('Admin_Email')?.value
    let AdminCity = this.AddAdminForm.get('Admin_City')?.value
   

    let body = {
      Admin_Name : AdminName,
      Admin_Phone :AdminPhone ,
      Admin_Email: AdminEmail,
      Admin_City : AdminCity 

    }
    
    this._http.post("http://localhost:3030/Admin/Admin" , body)
   .subscribe((x)=> console.log(x))

}

}


  



