const con = require('../models/database');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Body Parser
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

exports.dashboard = async(req, res) => {
    console.log('dashboard');
};

/**
 * Count all active customers
 * CRUD - Read  
 */
exports.activeCustomers = (req, res) => {
    let getActive = 'SELECT COUNT(*) FROM `Customer` WHERE Customer_Active = "yes" ';
    con.query(getActive, (error, results) => {
        if (error) {
            console.error(error.message);
            return res.status(404);
        }
        console.log(results);
        return res.status(200).json({ status: true, body: results })
    })
}


/**
 * Count number of requests
 * CRUD - Read  
 */
exports.NumberRequests = (req, res) => {
    let Nreq = 'SELECT COUNT(*) FROM Request';
    con.query(Nreq, (error, results) => {
        if (error) {
            console.error(error.message);
            return res.status(404);
        }
        console.log(results);

        return res.status(200).json({ status: true, body: results })
    })
}

/**
 * Display the current shift, its start and end time
 * CRUD - Read  
 */
exports.CurrentShift = (req, res) => {
    let shift = 'SELECT Shift_ID_PK, Shift_Start, Shift_End FROM Shifts GROUP BY Shift_ID_PK ';
    con.query(shift, (error, results) => {
        if (error) {
            console.error(error.message);
            return res.status(404);
        }
        console.log(results);
        return res.status(200).json({ status: true, body: results })
    })
}

/**
 * Display the Next donation
 * CRUD - Read  
 */
exports.NextDonation = (req, res) => {
    let nextdonation = 'SELECT sum(Next_Salary) as NextD FROM Salary ';
    con.query(nextdonation, (error, results) => {
        if (error) {
            console.error(error.message);
            return res.status(404);
        }
        console.log(results);
        return res.status(200).json({ status: true, body: results })
    })
}

/**
 * Display Total Revenue
 * Total Revenue = Number of requests * Price 
 * CRUD - Read  
 */
exports.Revenue = (req, res) => {
    let revenue = 'SELECT COALESCE(SUM(Request.Reuest_Price),0) * COUNT(*) FROM Request ';
    con.query(revenue, (error, results) => {
        if (error) {
            console.error(error.message);
            return res.status(404);
        }
        console.log(results);
        return res.status(200).json({ status: true, body: results })
    })
}

/**
 * Display Cars, drivers, number of requests in the current shift
 * CRUD - Read  
 */
exports.shiftInfo = (req, res) => {
    let shiftInfo = 'SELECT Shift_ID_PK, Driver_ID_FK, Car_ID_FK, Shift_Request_Number FROM Shifts';
    con.query(shiftInfo, (error, results) => {
        if (error) {
            console.error(error.message);
            return res.status(404).json({ status: false });
        }
        console.log(results);
        return res.status(200).json({ status: true, body: results })
    })
}