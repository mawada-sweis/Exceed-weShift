import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
//updates salaries 
@Component({
  selector: 'app-edit-salary',
  templateUrl: './edit-salary.component.html',
  styleUrls: ['./edit-salary.component.css']
})
export class EditSalaryComponent implements OnInit {

  EditSalaryComponent: FormGroup = this._formbuilder.group({
    Salary_ID_FK : ['' , Validators.required],
    Request_Number : ['' , Validators.required],
    Next_Donation : ['' , Validators.required],
    Frequency: ['' , Validators.required],
    Next_Salary : ['' , Validators.required]
  });
  id :number = -1;
  constructor(private _formbuilder: FormBuilder,
    private _http: HttpClient,
    private route:ActivatedRoute
    ) { }

  ngOnInit(): void {
   this.id = this.route.snapshot.params['id'];
  }

  editSalary(){
    let Salary_ID_FK = this.EditSalaryComponent.get('Salary_ID_FK')?.value
    let Request_Number = this.EditSalaryComponent.get('Request_Number')?.value
    let Next_Donation = this.EditSalaryComponent.get('Next_Donation')?.value
    let Frequency = this.EditSalaryComponent.get('Frequency')?.value
    let Next_Salary = this.EditSalaryComponent.get('Next_Salary')?.value

    let url = "http://localhost:3030/salary/updateSalary";
    let obj = {Salary_ID_FK:this.id , Request_Number:Request_Number , Next_Donation:Next_Donation , Frequency : Frequency ,Next_Salary : Next_Salary}
    this._http.put(url,obj).subscribe(data=>{console.log(data)
    alert("Salary Edited");
    })

  }

}
