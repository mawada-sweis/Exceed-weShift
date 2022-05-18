const con = require('../models/database');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Promise = require('promise');
const nodemailer = require('nodemailer');

// // Body Parser
// app.use(bodyParser.urlencoded({
//     extended: true
// }));
// app.use(bodyParser.json());

exports.dashboard = async(req, res) => {
    console.log('dashboard');
};

/**
 * Count all active customers
 * CRUD - Read  
 */
exports.activeCustomers = () => {
    let getActive = 'SELECT COUNT(*) FROM `Customer` WHERE Customer_Active = "Active" ';
    con.query(getActive, (error, results) => {
        if (error) {
            return console.error(error.message);
        }
        console.log(results);
    })
    console.log('Active customers');
    return getActive;
}


/**
 * Count number of requests
 * CRUD - Read  
 */
exports.NumberRequests = () => {
    let Nreq = 'SELECT COUNT(*) FROM Request';
    con.query(Nreq, (error, results) => {
        if (error) {
            return console.error(error.message);
        }
        console.log(results);

    })
    console.log('Number of Requests');
}

/**
 * Display the current shift, its start and end time
 * CRUD - Read  
 */
exports.CurrentShift = () => {
    let shift = 'SELECT Shift_ID_PK, Shift_Start, Shift_End FROM Shifts GROUP BY Shift_ID_PK ';
    con.query(shift, (error, results) => {
        if (error) {
            return console.error(error.message);
        }
        console.log(results);
    })
    console.log('Current shift');
}

/**
 * Display the Next donation
 * CRUD - Read  
 */
exports.NextDonation = () => {
    let nextdonation = 'SELECT sum(Next_Donation) as NextD FROM Salary ';
    con.query(nextdonation, (error, results) => {
        if (error) {
            return console.error(error.message);
        }
        console.log(results);
    })
    console.log('next donation');
}

/**
 * Display Total Revenue
 * Total Revenue = Number of requests * Price 
 * CRUD - Read  
 */
exports.Revenue = () => {
    let revenue = 'SELECT sum(Request.Reuest_Price) * COUNT(*) FROM Request ';
    con.query(revenue, (error, results) => {
        if (error) {
            return console.error(error.message);
        }
        console.log(results);
    })
    console.log('Revenue');
}

/**
 * Display Cars, drivers, number of requests in the current shift
 * CRUD - Read  
 */
exports.shiftInfo = () => {
    let shiftInfo = 'SELECT Shift_ID_PK, Driver_ID_FK, Car_ID_FK, Shift_Request_Number FROM Shifts';
    con.query(shiftInfo, (error, results) => {
        if (error) {
            return console.error(error.message);
        }
        console.log(results);
    })
    console.log('shift Info');
}