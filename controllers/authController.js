const con = require('../models/database');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');


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

exports.signup = (req, res) => {
    res.send('NOT IMPLEMENTED: signup' + req.body);
};

function check_email(email) {

    let AccountSql = 'SELECT * FROM Account WHERE AccountEmail = ?';

    // Execute Customer SQL query
    let result = con.query(AccountSql, [email]);

    // If the account exists
    if (result.length > 0) {
        return 200;
    }
    else {
        return 404;
    }
}

access_level = (req, res) => {
    res.send('NOT IMPLEMENTED: access_level');
};

send_email = (req, res) => {
    res.send('NOT IMPLEMENTED: send_email');
};

exports.check_otp = (req, res) => {
    res.send('NOT IMPLEMENTED: check_otp');
};

