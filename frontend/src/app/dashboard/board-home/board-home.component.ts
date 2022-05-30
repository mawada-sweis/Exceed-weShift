import { Component, OnInit } from '@angular/core';
import {forkJoin} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-board-home',
  templateUrl: './board-home.component.html',
  styleUrls: ['./board-home.component.css']
})
export class BoardHomeComponent implements OnInit {
  shiftInfo: Array<any> = [];
  active: Array<any> = [];
  requests: Array<any> = [];
  shifts : Array<any> = [];
  donation : Array<any> = [];
  revenue: Array<any> = [];
  constructor(private private_http: HttpClient) { }

  ngOnInit(): void {
    let shift = this.private_http.get('http://localhost:3030/dashboard/shiftInfo');
    let activeC = this.private_http.get('http://localhost:3030/dashboard/activeCustomers');
    let req = this.private_http.get('http://localhost:3030/dashboard/NumberRequests');
    let shifts = this.private_http.get('http://localhost:3030/dashboard/CurrentShift');
    let Next_Donation = this.private_http.get('http://localhost:3030/dashboard/NextDonation');
    let rev = this.private_http.get('http://localhost:3030/dashboard/Revenue');

   forkJoin([shift,activeC,req,shifts,Next_Donation,rev]).subscribe((results:any)=>{
     this.shiftInfo = results[0].body;
     this.active = results[1].body;
     this.requests = results[2].body;
     this.shifts = results[3].body;
     this.donation = results[4].body;
     this.revenue = results[5].body;
   })
  }

}
