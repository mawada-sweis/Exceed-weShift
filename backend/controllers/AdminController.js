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

// get All Admin 
exports.getAllAdmin = async (request, response) => {
    let [result, rows] = await db.connection.execute("SELECT * FROM Admin") 
    response.status(200).json(result)   
}

// get Admin Email 
exports.getAdminWhereEmail= async(request,response)=>{
    var AdminEmail = request.params.Admin_Email
    let sql="SELECT * FROM Admin WHERE Admin_Email=?";
    let result1=await db.connection.execute(sql,[AdminEmail]);
 
   response.status(200).json(result1);
 
 }
//////////////note
 // get Admin City 
exports.getAdminWhereCity= async(request,response)=>{
    var AdminCity = request.params.Admin_Phone
    let sql="SELECT * FROM Admin WHERE Admin_Phone=?";
    let result1=await db.connection.execute(sql,[AdminCity]);
 
   response.status(200).json(result1);
 }

// post (add) new Admin  
exports.addNewAdmin = async (request, response) => {
    let [result, rows] = await db.connection.execute("insert into Admin (Admin_Name, Admin_Email, Admin_Phone, Admin_City ) values (?,?,?,?)", [request.body.Admin_Name, request.body.Admin_Email, request.body.Admin_Phone, request.body.Admin_City])
    response.status(201).json(result);
}

// delete Admin whene Admin Email
exports.deleteAdmin = async(request,response)=>{
    var Admin_AdminEmail = request.params.Admin_Email
    let sql="DELETE FROM Admin WHERE Admin_Email=?";
    let result1=await db.connection.execute(sql,[Admin_AdminEmail]);
 
   response.status(200).json("row deleted");

 }

 //Update Admin "AdminPhone" where Admin_Email
exports.updateAdminPhone = async(request,response)=>{
    let sql="UPDATE Admin SET Admin_Phone=? WHERE Admin_Email=?"
    let result1=await db.connection.execute(sql,[request.body.Admin_Phone,request.body.Admin_Email]);
    response.status(200).json("row edited");

}



