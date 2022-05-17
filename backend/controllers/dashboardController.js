const con = require('../models/database');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Promise = require('promise');
const nodemailer = require('nodemailer');

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
exports.activeCustomers = () => {
    let getActive = 'SELECT Customer_Active, count(*) FROM Customer GROUP BY Customer_Active ';
    con.query(getActive, (error, results) => {
        if (error) {
            return console.error(error.message);
        }
        console.log(results);
    })
    console.log('Active customers');
}