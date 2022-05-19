const db = require('../models/localDatabase');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Promise = require('promise');

// Body Parser
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json())

// get All Driver 
exports.getAllDriver = async (request, response) => {
    let [result, rows] = await db.connection.execute("SELECT * FROM Driver") 
    response.status(200).json(result)   
}

// get Driver Email 
exports.getDriverWhereEmail= async(request,response)=>{
    var Driver_Email = request.params.Driver_Email_PK
    let sql="SELECT * FROM Driver WHERE Driver_Email_PK=?";
    let result1=await db.connection.execute(sql,[Driver_Email]);
 
   response.status(200).json(result1);
 
 }

// post (add) new Driver  
exports.addNewDriver = async (request,response) => {
    let [result, rows] = await db.connection.execute("INSERT INTO Driver (Driver_Email_PK, Driver_Phone, Driverin_Name, Driver_BirthDate, Driver_City, Driver_Req_Type, Driver_License, Driver_License_Date, Driver_Shifts_Number) VALUES (?,?,?,?,?,?,?,?,?)",[request.body.Driver_Email_PK, request.body.Driver_Phone, request.body.Driverin_Name, request.body.Driver_BirthDate, request.body.Driver_City , request.body.Driver_Req_Type, request.body.Driver_License, request.body.Driver_License_Date, request.body.Driver_Shifts_Number])
    response.status(200).json(result);
}

// delete Driver whene Driver Email
exports.deleteDriver = async(request,response)=>{
    var Driver_DriverEmail = request.params.Driver_Email_PK
    let sql="DELETE FROM Driver WHERE Driver_Email_PK=?";
    let result1=await db.connection.execute(sql,[Driver_DriverEmail]);
 
   response.status(200).json("row deleted");

 }

 //Update Driver "DriverPhone" where Driver Email
exports.updateDriverPhone = async(request,response)=>{
    let sql="UPDATE Driver SET Driver_Phone=? WHERE Driver_Email_PK=?"
    let result1=await db.connection.execute(sql,[request.body.Driver_Phone,request.body.Driver_Email_PK]);
    response.status(200).json("row edited");

}