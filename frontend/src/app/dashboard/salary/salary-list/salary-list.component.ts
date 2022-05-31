import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salary-list',
  templateUrl: './salary-list.component.html',
  styleUrls: ['./salary-list.component.css']
})
export class SalaryListComponent implements OnInit {
  salaries: Array<any> = [];
  constructor(private private_http:HttpClient) {}

  ngOnInit(): void {
    this.private_http.get(
      'http://localhost:3030/salary/',
    ).subscribe((response:any)=>{
      this.salaries = response.body;
    });
  }

}
