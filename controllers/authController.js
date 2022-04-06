const con = require('../models/database');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Promise = require('promise');

// Body Parser
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json())

exports.login = async (req, res) => {
    let email = req.body.email;

    let status = await check_email(email);

    if (status == 200) {
        send_email(email);
    } else {
        res.redirect('/');
    }
};

exports.signup = async (req, response) => {
    let email = req.body.email;
    let name = req.body.fullname;
    let city = req.body.city;

    let status = await check_email(email);
    
    // Account is already exist
    if (status.length) {
        response.redirect('/');
    }
    else {
        let saveEmailSql = 'INSERT INTO Account (AccountEmail, City, Name, situation) VALUES (?, ?, ?, ?)';
        con.query(saveEmailSql, [email, city, name, 'Active'], (err, res) => {
            if (err) throw err;
            
            // Insert operation Not Success
            if (res.length > 0) {
                response.redirect('/');
            }
            else {
                send_email(email);
            }
        });
    }
}

const check_email = async email => new Promise((resolve, reject) => {
    con.query(`SELECT AccountEmail FROM Account WHERE AccountEmail = ?`,
        [email],
        (err, result) => {
            if (err) { reject(err); }
            resolve(result);
        }
    )
});

access_level = (req, res) => {
    res.send('NOT IMPLEMENTED: access_level');
};

send_email = (req, res) => {
    res.send('NOT IMPLEMENTED: send_email');
};

exports.check_otp = (req, res) => {
    res.send('NOT IMPLEMENTED: check_otp');
};

