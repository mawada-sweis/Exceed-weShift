import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.css']
})
export class EditAdminComponent implements OnInit {

  editAdminForm: FormGroup = this._formbuilder.group({
    Admin_Name : ['' , Validators.required],
    Admin_Phone : ['' , Validators.required],
    Admin_Email : ['' , Validators.required],
    Admin_City : ['' , Validators.required],
  });
  email :number = -1;
  constructor(private _formbuilder: FormBuilder,
    private _http: HttpClient,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.email = this.route.snapshot.params['email'];
  }

  editAdmin(){
    let AdminName = this.editAdminForm.get('Admin_Name')?.value
    let AdminPhone = this.editAdminForm.get('Admin_Phone')?.value
    let AdminEmail = this.editAdminForm.get('Admin_Email')?.value
    let AdminCity = this.editAdminForm.get('Admin_City')?.value

    let url = "http://localhost:3030/Admin/Admin";
    let obj = {Admin_Email:this.email , Admin_Name:AdminName , Admin_Phone:AdminPhone , Admin_City : AdminCity}
    this._http.put(url,obj).subscribe(data=>{console.log(data)
    alert("row edited");
    })

  }


}


