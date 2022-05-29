const db = require('../models/promise-database');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Promise = require('promise');


// Body Parser
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json())

// get All Customer
exports.getAllCustomer = async (request, response) => {
    let [result, rows] = await db.connection.execute("SELECT * FROM Customer") 
    response.status(200).json(result)   
}


// get Customer Email 
exports.getCustomerWhereEmail= async(request,response)=>{
    var CustomerEmail = request.params.Customer_Email_PK
    let sql="SELECT * FROM Customer WHERE Customer_Email_PK=?";
    let result1=await db.connection.execute(sql,[CustomerEmail]);
 
   response.status(200).json(result1);
 
 }
 // post (add) new Customer 
 exports.addNewCustomer = async (request, response) => {
     let [result, rows] = await db.connection.execute("insert into Customer (Customer_Email_PK, Customer_Phone, Customer_Name ,Customer_City , Customer_Active ) values (?,?,?,?,?)", [request.body.Customer_Email_PK, request.body.Customer_Phone, request.body.Customer_Name, request.body.Customer_City ,request.body.Customer_Active])
     response.status(201).json(result);
 }
 
 // delete Customer whene Customer Email
 exports.deleteCustomer = async(request,response)=>{
     var Customer_CustomerEmail = request.params.Customer_Email_PK
     let sql="DELETE FROM Customer WHERE Customer_Email_PK=?";
     let result1=await db.connection.execute(sql,[Customer_CustomerEmail]);
  
    response.status(200).json("row deleted");
 
  }
 
  //Update Customer "CustomerPhone" where Customer_Email
 exports.updateCustomerPhone = async(request,response)=>{
     let sql="UPDATE Customer SET Customer_Phone=? WHERE Customer_Email_PK=?"
     let result1=await db.connection.execute(sql,[request.body.Customer_Phone,request.body.Customer_Email_PK]);
     response.status(200).json("row edited");
 
 }

