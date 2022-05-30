import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {


  save = false;
  cancel = false;
  request = true;
  req_id = true;
   
    Request_ID = new FormControl('',[Validators.required]);
    Driver_ID = new FormControl('',[Validators.required]);
    Customer_ID= new FormControl('',[Validators.required]);
    Request_Driver_Shift= new FormControl('',[Validators.required]);
    Request_Type= new FormControl('',[Validators.required]);
    Reuest_Price= new FormControl('',[Validators.required]);
    Reuest_City_Destination= new FormControl('',[Validators.required]);
    Reuest_City_Location= new FormControl('',[Validators.required]);
    Request_Destination= new FormControl('',[Validators.required]);
    Request_Location= new FormControl('',[Validators.required]);
    Request_Time= new FormControl('',[Validators.required]);
    Request_Passenger_Number= new FormControl('',[Validators.required]);
    Request_Is_Luggage= new FormControl('',[Validators.required]);
    Request_All_One= new FormControl('',[Validators.required]);
  
  
  requestList: Array<any> = []
  constructor(private http:HttpClient) { }

  

  ngOnInit(): void {
    this.getAllRequest();
  }

  getAllRequest() {

    this.http.get('http://localhost:3030/request/admin/get').subscribe((data: any) => {
    this.requestList = data;
    });
  }

  deleteRequest(id: string){

   if(!confirm("Are you sure do want delete this Request")) return;
      this.http.delete(`http://localhost:3030/request/admin/delete/${id}`).subscribe((data: any) => {
      this.getAllRequest();
    });

  }


  addRequest() {

   if(!confirm("Are you sure do you want to add this Request")) return;
   let body = {
      Request_ID_PK: this.Request_ID.value,
      Driver_ID_FK: this.Driver_ID.value,
      Customer_ID_FK: this.Customer_ID.value,
      Request_Driver_Shift_FK: this.Request_Driver_Shift.value,
      Request_Type: this.Request_Type.value,
      Reuest_Price: this.Reuest_Price.value,
      Reuest_City_Destination: this.Reuest_City_Destination.value,
      Reuest_City_Location: this.Reuest_City_Location.value,
      Request_Destination: this.Request_Destination.value,
      Request_Location: this.Request_Location.value,
      Request_Time: this.Request_Time.value,
      Request_Passenger_Number: this.Request_Passenger_Number.value,
      Request_Is_Luggage: this.Request_Is_Luggage.value,
      Request_All_One: this.Request_All_One.value,
    }
    console.log(body)
    this.http.post(`http://localhost:3030/request/admin/add`, body).subscribe((data: any) => {
      this.getAllRequest();
    });
      
  }

  updateRequst(request: any){

    this.Request_ID.setValue(request.Request_ID_PK);
    this.Driver_ID.setValue(request.Driver_ID_FK);
    this.Customer_ID.setValue(request.Customer_ID_FK);
    this.Request_Driver_Shift.setValue(request.Request_Driver_Shift_FK);
    this.Request_Type.setValue(request.Request_Type);
    this.Reuest_Price.setValue(request.Reuest_Price);
    this.Reuest_City_Destination.setValue(request.Reuest_City_Destination);
    this.Reuest_City_Location.setValue(request.Reuest_City_Location);
    this.Request_Destination.setValue(request.Request_Destination);
    this.Request_Location.setValue(request.Request_Location);
    this.Request_Time.setValue(request.Request_Time);
    this.Request_Passenger_Number.setValue(request.Request_Passenger_Number);
    this.Request_Is_Luggage.setValue(request.Request_Is_Luggage);
    this.Request_All_One.setValue(request.Request_All_One);

    this.save = true;
    this.cancel = true;
    this.request = false;
    this.req_id = false;

  }

  saveUpdate(){

    if(!confirm("Are you sure do you want to update this Request")) return;

    let body = {
      Request_ID_PK: this.Request_ID.value,
      Driver_ID_FK: this.Driver_ID.value,
      Customer_ID_FK: this.Customer_ID.value,
      Request_Driver_Shift_FK: this.Request_Driver_Shift.value,
      Request_Type: this.Request_Type.value,
      Reuest_Price: this.Reuest_Price.value,
      Reuest_City_Destination: this.Reuest_City_Destination.value,
      Reuest_City_Location: this.Reuest_City_Location.value,
      Request_Destination: this.Request_Destination.value,
      Request_Location: this.Request_Location.value,
      Request_Time: this.Request_Time.value,
      Request_Passenger_Number: this.Request_Passenger_Number.value,
      Request_Is_Luggage: this.Request_Is_Luggage.value,
      Request_All_One: this.Request_All_One.value,
    }
    this.cancelUpdate();
    
    console.log(body)

    this.http.put(`http://localhost:3030/request/admin/update`, body).subscribe((data: any) => {
      this.getAllRequest();
    });
  }

  cancelUpdate(){
    this.Request_ID.setValue('');
    this.Driver_ID.setValue('');
    this.Customer_ID.setValue('');
    this.Request_Driver_Shift.setValue('');
    this.Request_Type.setValue('');
    this.Reuest_Price.setValue('');
    this.Reuest_City_Destination.setValue('');
    this.Reuest_City_Location.setValue('');
    this.Request_Destination.setValue('');
    this.Request_Location.setValue('');
    this.Request_Time.setValue('');
    this.Request_Passenger_Number.setValue('');
    this.Request_Is_Luggage.setValue('');
    this.Request_All_One.setValue('');

    this.save = false;
    this.cancel = false;
    this.request = true;
    this.req_id = true;

  }
}
