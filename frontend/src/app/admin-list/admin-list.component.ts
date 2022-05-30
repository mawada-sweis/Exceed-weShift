import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {

  AdminsList: Array<any> = [];
  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
    this._http
      .get('http://localhost:3030/Admin/Admin')
      .subscribe((response: any) => {
        this.AdminsList = response;
      });
      console.log(this.AdminsList);
  }
  deleteAdmin(id : any): void {
    let url = "http://localhost:3030/Admin/Admin/"+ id;
     this._http.delete(url).subscribe(data=>{console.log(data)})
     location.reload();
     console.log(this.AdminsList);
  }

}



 