import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  requestList: Array<any> = []
  constructor(private http:HttpClient) { }

  getAllRequest() {
    this.http.get('http://localhost:3030/request/admin/get').subscribe((data: any) => {
        this.requestList = data;
        console.log(this.requestList);
      });
  }

  ngOnInit(): void {
    this.getAllRequest();
  }

  deleteRequest(id: string){

   if(!confirm("Are you sure do want delete this Request")) return;

    console.log("im in delete")
    this.http.delete(`http://localhost:3030/request/admin/delete/${id}`).subscribe((data: any) => {
      this.getAllRequest();
    });


  }



}
