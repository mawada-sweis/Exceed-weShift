import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.css']
})
export class DriverListComponent implements OnInit {

  DriversList: Array<any> = [];
  constructor(private _http: HttpClient) {}

  ngOnInit(): void {
    this._http
      .get('http://localhost:3030/Driver/Driver')
      .subscribe((response: any) => {
        this.DriversList = response;
      });
      console.log(this.DriversList);
  }
   
  deleteDriver(id : any): void {
    let url = "http://localhost:3030/Driver/Driver/"+ id;
     this._http.delete(url).subscribe(data=>{console.log(data)})
     location.reload();
     console.log(this.DriversList);
  }
  




}