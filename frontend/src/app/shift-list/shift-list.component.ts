import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-car-list',
  templateUrl: './shift-list.component.html',
  styleUrls: ['./shift-list.component.css']
})
export class ShiftListComponent implements OnInit {

  ShiftList: Array<any> = [];
  constructor(private _http: HttpClient) {}

  ngOnInit(): void {
    this._http
      .get('http://localhost:3030/Shifts/Shifts')
      .subscribe((response: any) => {
        this.ShiftList = response;
      });
      console.log(this.ShiftList);
  }
   
  deleteShifts(id : any): void {
    let url = "http://localhost:3030/Shifts/Shifts/"+ id;
     this._http.delete(url).subscribe(data=>{console.log(data)})
     location.reload();
     console.log(this.ShiftList);
  }
  




}



