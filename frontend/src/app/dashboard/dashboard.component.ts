import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) { }
 

  ngOnInit(): void {
  }
  /*
  coins(){
    this.router.navigate(['add-driver'], {relativeTo:this.route});
  }import { ADDDRIVErComponent } from './../add-driver/add-driver.component';
notes(){
    this.router.navigate(['add-driver'], {relativeTo:this.route});
  }*/

}
