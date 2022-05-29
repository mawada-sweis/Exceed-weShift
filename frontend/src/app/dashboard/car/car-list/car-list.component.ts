
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})

export class CarListComponent implements OnInit {

  CarList: Array<any> = [];
  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
    this._http
      .get('http://localhost:3030/car')
      .subscribe((response: any) => {
        this.CarList = response;
      });
    console.log(this.CarList);
  }

  deleteCar(id: any): void {
    let url = "http://localhost:3030/car/" + id;
    this._http.delete(url).subscribe(data => { console.log(data) })
    location.reload();
    console.log(this.CarList);
  }

}


