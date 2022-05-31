import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-shift',
  templateUrl: './current-shift.component.html',
  styleUrls: ['./current-shift.component.css']
})
export class CurrentShiftComponent implements OnInit {

  constructor(private private_http:HttpClient) { }
  shifts : Array<any> = [];
  ngOnInit(): void {
    this.private_http.get('http://localhost:3030/dashboard/CurrentShift').subscribe((results:any)=>{
      this.shifts = results.body;
    }); 
  }

}
