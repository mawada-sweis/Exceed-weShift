const db = require('../models/datalocal');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Promise = require('promise');

// Body Parser
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json())



// get All Feedbacks
exports.getAllFeedback = async (request, response) => {
    let [result, rows] = await db.connection.execute("SELECT * FROM feedback") 
    response.status(200).json(result)   
}

// get Feedback by Id 
exports.getFeedbackById= async(request,response)=>{
    var FeedbackId = request.params.Feedback_ID
    let sql="SELECT * FROM feedback WHERE Feedback_ID=?";
    let result1=await db.connection.execute(sql,[FeedbackId]);
 
   response.status(200).json(result1);
 
 }
 // post (add) new Feedback 
 exports.addNewFeedback = async (request, response) => {
     let [result, rows] = await db.connection.execute("insert into feedback (Feedback_ID, Custmor_ID, Feedback ,Feedback_Developer , Customer_Satisfaction, Admin_ID_FK ) values (?,?,?,?,?,?)", [request.body.Feedback_ID, request.body.Custmor_ID, request.body.Feedback, request.body.Feedback_Developer ,request.body.Customer_Satisfaction,request.body.Admin_ID_FK])
     response.status(201).json(result);
 }
 
 // delete Feedback by id
 exports.deleteFeedback = async(request,response)=>{
     var FeedbackId = request.params.Feedback_ID
     let sql="DELETE FROM feedback WHERE Feedback_ID=?";
     let result1=await db.connection.execute(sql,[FeedbackId]);
  
    response.status(200).json("row deleted");
 
  }
 
  //Update Feedback by id
 exports.updateFeedback = async(request,response)=>{
     let sql="UPDATE feedback SET Feedback=? WHERE Feedback_ID=?"
     let result1=await db.connection.execute(sql,[request.body.Feedback,request.body.Feedback_ID]);
     response.status(200).json("row edited");
 
 }

