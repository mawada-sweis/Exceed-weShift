import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adddelete-salary',
  templateUrl: './adddelete-salary.component.html',
  styleUrls: ['./adddelete-salary.component.css']
})
export class AdddeleteSalaryComponent implements OnInit {

  salaries: Array<any> = [];
  constructor(private _http: HttpClient) {}

  ngOnInit(): void {
    this._http
      .get('http://localhost:3030/salaryRoute/addSalary')
      .subscribe((response: any) => {
        this.salaries = response.body;
      });
      console.log(this.salaries);
  }
   
  deleteSalary(id : any): void {
    let url = 'http://localhost:3030/salaryRoute/deleteSalary'+ id;
     this._http.delete(url).subscribe(data=>{console.log(data)})
     location.reload();
     console.log(this.salaries);
  }

}
