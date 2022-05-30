import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-active-customers',
  templateUrl: './active-customers.component.html',
  styleUrls: ['./active-customers.component.css']
})
export class ActiveCustomersComponent implements OnInit {
  constructor(private private_http: HttpClient) { }
  
  active: number=0;

  ngOnInit(): void {
    this.private_http.get('http://localhost:3030/dashboard/activeCustomers')
    .subscribe((results:any)=>{
      this.active = results.body[0]["COUNT(*)"];
    });
  }
}
