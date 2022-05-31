import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shift-info',
  templateUrl: './shift-info.component.html',
  styleUrls: ['./shift-info.component.css']
})
export class ShiftInfoComponent implements OnInit {

  constructor(private private_http: HttpClient) { }
  
  shiftInfo: Array<any> = [];

  ngOnInit(): void {
    this.private_http.get('http://localhost:3030/dashboard/shiftInfo')
    .subscribe((results:any)=>{
      this.shiftInfo = results.body;
      console.log(this.shiftInfo);
    });
  }
}
