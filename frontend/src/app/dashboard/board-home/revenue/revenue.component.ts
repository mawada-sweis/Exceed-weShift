import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-revenue',
  templateUrl: './revenue.component.html',
  styleUrls: ['./revenue.component.css']
})
export class RevenueComponent implements OnInit {
  constructor(private private_http: HttpClient) { }
  
  revenue: number = 0;

  ngOnInit(): void {
    this.private_http.get('http://localhost:3030/dashboard/Revenue')
    .subscribe((results:any)=>{
      console.log(results);
      this.revenue = results.body[0]['COALESCE(SUM(Request.Reuest_Price),0) * COUNT(*)'];
    });
  }

}
