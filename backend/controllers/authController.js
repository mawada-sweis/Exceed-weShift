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
    const code = Math.floor(1000 + Math.random() * 9000);
    let status = await check_email(email);
    let account_type = "";
    console.log(status);

    for (let index = status.length - 1; index > -1; index--) {
        // Account is already exist
        if (status[index] != 0) {
            account_type = status[index];
            send_email(email, code);
            res.status(200).json({ status: true, code: code, type: account_type });
        }
    }
    res.status(200).json({ status: false });
};

exports.signup = async (req, response) => {
    let email = req.body[0].email;
    let name = req.body[0].fullname;
    let city = req.body[0].city;
    let type = req.body[1].type;
    const code = Math.floor(1000 + Math.random() * 9000);

    let status = await check_email(email);

    // Account is already exist
    for (let index = status.length - 1; index > -1; index--) {
        if (status[index] != 0) {
            response.status(200).json({ status: false });
        }
    }
    if (type == 'Customer') {
        let customer = 'INSERT INTO Customer (Customer_Email_PK, Customer_City, Customer_Name) VALUES (?, ?, ?)';
        con.query(customer, [email, city, name], (err, res) => {
            if (err) throw err;
            send_email(email, code);
        });
    }

    response.status(200).json({ status: true, code: code, type: type });
}

const check_email = async email => {
    const Admin = new Promise((resolve, reject) => {
        con.query(`SELECT Admin_Email FROM Admin WHERE Admin_Email = ?`,
            [email],
            (err, result) => {
                if (err) { reject(err); }
                if (result.length > 0) {
                    resolve('Admin');
                }
                resolve(0);
            }
        )
    });

    const Customer = new Promise((resolve, reject) => {
        con.query(`SELECT Customer_Email_PK FROM Customer WHERE Customer_Email_PK = ?`,
            [email],
            (err, result) => {
                if (err) { reject(err); }
                if (result.length > 0) {
                    resolve('Customer');
                }
                resolve(0);
            }
        )
    });

    const p = Promise.all([Admin, Customer]);
    return p;
};

access_level = (req, res) => {
    res.send('NOT IMPLEMENTED: access_level');
};

send_email = async (email, code) => {

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
        text: "Here is your OTD Code: " + code // plain text body
    }).then(info => {
        //console.log("Some code to display otp page");
    }).catch(console.error);
};

exports.check_otp = (req, res) => {
    res.send('NOT IMPLEMENTED: check_otp');
};

