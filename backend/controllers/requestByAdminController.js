const con = require('../models/database');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Body Parser
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json())


exports.add_by_admin = async (req, res) => {

    data = req.body;

    let requests = 'INSERT INTO `Request`(`Request_ID_PK`, `Driver_ID_FK`, `Customer_ID_FK`, `Request_Driver_Shift_FK`, `Request_Type`, `Reuest_Price`, `Reuest_City_Destination`, `Reuest_City_Location`, `Request_Destination`, `Request_Location`, `Request_Time`, `Request_Passenger_Number`, `Request_Is_Luggage`, `Request_All_One`) \
                 VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
    con.query(requests, [data.Request_ID_PK, data.Driver_ID_FK, data.Customer_ID_FK, data.Request_Driver_Shift_FK, data.Request_Type, data.Reuest_Price, data.Reuest_City_Destination, data.Reuest_City_Location, data.Request_Destination,data.Request_Location, data.Request_Time, data.Request_Passenger_Number, data.Request_Is_Luggage, data.Request_All_One], 
        (err, res) => {
        if (err) throw err;
    }
    );

    res.status(200).json({status: true});
};

exports.show_by_admin = async (req, res) => {

    let requests = "SELECT * FROM `Request`";
    con.query(requests, 
        (err, respon) => {
            if (err) throw err;
            res.status(200).json(respon);
    });
};

exports.delete_by_admin = async (req, res) => {

    let salary = "DELETE FROM `Request` WHERE `Request_ID_PK`= ?";
    con.query(salary, [req.params.id], 
        (err, res) => {
        if (err) throw err;
    });

    res.status(200).json({status: true});
};


exports.updated_by_admin = async (req, res) => {

    data = req.body;
    let requests = "UPDATE `Request` SET `Driver_ID_FK`=?,`Customer_ID_FK`=?,`Request_Driver_Shift_FK`=?,`Request_Type`=?,`Reuest_Price`=?,`Reuest_City_Destination`=?,`Reuest_City_Location`=?,`Request_Destination`=?,`Request_Location`=?,`Request_Time`=?,`Request_Passenger_Number`=?,`Request_Is_Luggage`=?,`Request_All_One`=?\
                 WHERE `Request_ID_PK`=?";
    con.query(requests, [data.Driver_ID_FK, data.Customer_ID_FK, data.Request_Driver_Shift_FK, data.Request_Type, data.Reuest_Price, data.Reuest_City_Destination, data.Reuest_City_Location, data.Request_Destination,data.Request_Location, data.Request_Time, data.Request_Passenger_Number, data.Request_Is_Luggage, data.Request_All_One, data.Request_ID_PK], 
        (err, res) => {
        if (err) throw err;
    });

    res.status(200).json({status: true});
};


