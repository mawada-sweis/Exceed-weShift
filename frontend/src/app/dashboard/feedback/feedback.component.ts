import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  FeedbackList: Array<any> = [];
  constructor(private _http: HttpClient) {}

  ngOnInit(): void {
    this._http
      .get('http://localhost:3030/Feedback/')
      .subscribe((response: any) => {
        this.FeedbackList = response;
      });
      console.log(this.FeedbackList);
  }
   
  deleteFeedback(id : any): void {
    let url = "http://localhost:3030/Feedback/delete/"+ id;
     this._http.delete(url).subscribe(data=>{console.log(data)})
     location.reload();
     console.log(this.FeedbackList);
  }
  

}
