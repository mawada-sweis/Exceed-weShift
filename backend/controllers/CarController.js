const db = require('../models/Promise_database');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Body Parser
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json())


// get All car
exports.getAllCar = async (request, response) => {
    let [result, rows] = await db.connection.execute("SELECT * FROM Car")
    response.status(200).json(result)
}

// get car model 
exports.getCar_Model = async (request, response) => {
    var Car_Model = request.params.Car_Model
    let sql = "SELECT * FROM Car WHERE Car_Model=?";
    let result1 = await db.connection.execute(sql, [Car_Model]);

    response.status(200).json(result1);

}

// post (add) new Admin  
exports.addNewCar = async (request, response) => {
    let [result, rows] = await db.connection.execute("insert into Car (Car_ID_PK ,Car_Model,Car_Number,Expenses,Insurance_License,Car_Fuel_Type,Car_Fuel_Price,Car_Type,Car_Year_Release,Car_Passenger_Number ) values (?,?,?,?,?,?,?,?,?,?)", [request.body.Car_ID_PK, request.body.Car_Model, request.body.Car_Number, request.body.Expenses, request.body.Insurance_License, request.body.Car_Fuel_Type, request.body.Car_Fuel_Price, request.body.Car_Type, request.body.Car_Year_Release, request.body.Car_Passenger_Number])
    response.status(201).json(result);
}

// delete car whene car id
exports.deleteCar = async (request, response) => {
    var Car_ID = request.params.Car_ID_PK
    let sql = "DELETE FROM Car WHERE Car_ID_PK=?";
    let result1 = await db.connection.execute(sql, [Car_ID]);

    response.status(200).json("row deleted");

}

//Update Car "Car_ID_PK" where carId
exports.updateCarModel = async (request, response) => {
    let sql = "UPDATE Car SET Car_Model=? ,Car_Number=?,Expenses=?,Insurance_License=?,Car_Fuel_Type=?,Car_Fuel_Price=? WHERE Car_ID_PK=?"
    let result1 = await db.connection.execute(sql, [request.body.Car_Model, request.body.Car_Number, request.body.Expenses, request.body.Insurance_License, request.body.Car_Fuel_Type, request.body.Car_Fuel_Price, request.body.Car_ID_PK]);
    response.status(200).json("row edited");

}

