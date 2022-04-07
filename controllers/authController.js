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
app.use(bodyParser.json())

exports.login = async (req, res) => {
    let email = req.body.email;

    let status = await check_email(email);

    // Account is already exist
    if (status.length) {
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

send_email = async (email) => {
    const code = Math.floor(1000 + Math.random() * 9000);
    
    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the Gmail transport
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: "exceed2022web@gmail.com", 
            pass: "Exceed2022@",
        },
    });

    transporter.verify().then(console.log).catch(console.error);

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Exceed- WeShift" <exceed2022web@gmail.com>', // sender address
        to: email, // receiver
        subject: "OTP Code", // Subject line
        text: "Here is your OTD Code: "  + code // plain text body
    }).then(info => {
        console.log("Some code to display otp page");
    }).catch(console.error);
};

exports.check_otp = (req, res) => {
    res.send('NOT IMPLEMENTED: check_otp');
};

