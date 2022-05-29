const db = require('../models/data');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Promise = require('promise');

// Body Parser
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json())


   // get All Shifts
   exports.getAllShifts = async (request, response) => {
    let [result, rows] = await db.connection.execute("SELECT * FROM Shifts") 
    response.status(200).json(result)   
}
 // get car model 
 exports.getCar_Model= async(request,response)=>{
    var Shift_ID = request.params.Car_Model
    let sql="SELECT * FROM Car WHERE Shift_ID_PK=?";
    let result1=await db.connection.execute(sql,[Shift_ID]);
 
   response.status(200).json(result1);
 
 }
// post (add) new Admin  
exports.addNewShifts = async (request, response) => {
let [result, rows] = await db.connection.execute("insert into Shifts (Shift_ID_PK,Driver_ID_FK,Car_ID_FK,Shift_Request_Number,Shift_Start,Shift_End ) values (?,?,?,?,?,?)", [request.body.Shift_ID_PK,request.body.Driver_ID_FK,request.body.Car_ID_FK,request.body.Shift_Request_Number,request.body.Shift_Start,request.body.Shift_End])
response.status(201).json(result);
}

// delete shift whene shift id
exports.deleteShift = async(request,response)=>{
var Shift_ID = request.params.Shift_ID_PK
let sql="DELETE FROM Shifts WHERE Shift_ID_PK=?";
let result1=await db.connection.execute(sql,[Shift_ID]);

response.status(200).json("row deleted");

}

//Update Car "Shift_ID_PK" where Shift_Start
exports.update_Shift_Start = async(request,response)=>{
let sql="UPDATE Shifts SET Shift_Start=?,Shift_End=?,Shift_Request_Number=? WHERE Shift_ID_PK=?"
let result1=await db.connection.execute(sql,[request.body.Shift_Start,request.body.Shift_End,request.body.Shift_Request_Number,request.body.Shift_ID_PK]);
response.status(200).json("row edited");

}

//Update Car "Shift_ID_PK" where Shift_Start
exports.update_Shift_End = async(request,response)=>{
    let sql="UPDATE Shifts SET Shift_End=? WHERE Shift_ID_PK=?"
    let result1=await db.connection.execute(sql,[request.body.Shift_End,request.body.Shift_ID_PK]);
    response.status(200).json("row edited");
    
    }

