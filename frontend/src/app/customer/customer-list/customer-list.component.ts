import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {


  CustomersList: Array<any> = [];
  constructor(private _http: HttpClient) {}

  ngOnInit(): void {
    this._http
      .get('http://localhost:3030/Customer/')
      .subscribe((response: any) => {
        this.CustomersList = response;
      });
      console.log(this.CustomersList);
  }
   
  deleteCustomer(id : any): void {
    let url = "http://localhost:3030/Customer/delete/"+ id;
     this._http.delete(url).subscribe(data=>{console.log(data)})
     location.reload();
     console.log(this.CustomersList);
  }
  

}
