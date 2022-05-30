import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-number-requests',
  templateUrl: './number-requests.component.html',
  styleUrls: ['./number-requests.component.css']
})
export class NumberRequestsComponent implements OnInit {

  constructor(private private_http: HttpClient) { }

  requests: number = 0; 

  ngOnInit(): void {
    this.private_http.get('http://localhost:3030/dashboard/NumberRequests')
    .subscribe((results:any)=>{
      console.log(results.body);
      this.requests = results.body[0]['COUNT(*)'];
    });
  }
}

