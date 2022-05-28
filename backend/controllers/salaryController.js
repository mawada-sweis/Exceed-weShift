const con = require('../models/database');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Body Parser
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json())


exports.addSalary = async (req, res) => {
    data = req.body;

    let salary = 'INSERT INTO `Salary`(`Salary_ID_FK`, `Request_Number`, `Next_Donation`, `Frequency`, `Next_Salary`) VALUES (?,?,?,?,?)';
    con.query(salary, [data.Salary_ID_FK, data.Request_Number, data.Next_Donation, data.Frequency, data.Next_Salary], 
        (err, res) => {
        if (err) throw err;
    }
    );

    res.status(200).json("salary added");
};

exports.updateSalary = async (req, res) => {

    data = req.body;
    let salary = "UPDATE `Salary` SET `Request_Number`=?,`Next_Donation`= ?,`Frequency`= ? ,`Next_Salary`= ?\
                  WHERE `Salary_ID_FK`= ?";
    con.query(salary, [data.Request_Number, data.Next_Donation, data.Frequency, data.Next_Salary, data.Salary_ID_FK], 
        (err, res) => {
        if (err) throw err;
    });

    res.status(200).json("salary updated");
};

exports.getSalary = async (req, res) => {

    let salary = "SELECT * FROM `Salary`";
    con.query(salary, 
        (err, respon) => {
            if (err) throw err;
            res.status(200).json(respon);
    });
};

exports.deleteSalary = async (req, res) => {

    let salary = "DELETE FROM `Salary` WHERE `Salary_ID_FK`= ?";
    con.query(salary, [req.params.id], 
        (err, res) => {
        if (err) throw err;
    });

    res.status(200).json("salary has deleted");
};

