import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-next-donation',
  templateUrl: './next-donation.component.html',
  styleUrls: ['./next-donation.component.css']
})
export class NextDonationComponent implements OnInit {

  constructor(private private_http:HttpClient) { }
  donation : number = 0;
  ngOnInit(): void {
    this.private_http.get('http://localhost:3030/dashboard/NextDonation').subscribe((results:any)=>{
      this.donation = results.body[0]['NextD'];
    }); 
  }

}
