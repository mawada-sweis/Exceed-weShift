const con = require('../models/database');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Body Parser
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

exports.salary = async(req, res) => {
    let query1 = "SELECT * FROM Salary";
    con.query(query1, (error, results) => {
        if (error) {
            console.error(error.message);
            return res.status(404);
        }
        return res.status(200).json({ body: results });
    })
};
exports.getSalaryID = async(req, res) => {
    let query1 = 'SELECT * FROM Salary WHERE Salary_ID_FK=?';
    con.connection.execute(query1, [salary_ID_FK], (error, results) => {
        if (error) {
            console.error(error.message);
            return res.status(404);
        }
        console.log(results);
        return res.status(200).json({ status: true, body: results });
    });
    console.log('get Salary');
};
/** 
 * Get Salary ID 
 * CRUD - Read
 */
// exports.getSalaryID = async(req, res) => {
//     var salary_ID = req.params.salary_ID_FK
//     let query1 = 'SELECT * FROM Salary WHERE Salary_ID_FK=?';
//     let result = await con.connection.execute(query1, [salary_ID_FK])
//     res.status(200).json(result);
//     console.log('get Salary');
// }

/**
 * Add a new salary
 * POST 
 * CRUD - Create
 */
exports.addSalary = async(req, res) => {
    console.log(req.body);
    let query1 = "INSERT INTO Salary (Salary_ID_FK, Request_Number, Next_Donation, Frequency, Next_Salary) VALUES (?,?,?,?,?)"
    let salary = [req.body.Salary_ID_FK, req.body.Request_Number, req.body.Next_Donation, req.body.Frequency, req.body.Next_Salary];
    con.connection.execute(query1, salary, (error, results) => {
        if (error) {
            console.error(error.message);
            return res.status(404);
        }
        console.log(results);
        return res.status(200).json({ status: true, body: results });
    });
    // let [result, rows] = await con.connection.execute(query1, salary);
    res.status(200).json(result);
    console.log('add Salary');
}

/**
 * Delete salary
 * based on salary_ID_FK
 * CRUD - DELETE
 */
exports.deleteSalary = async(req, res) => {
    var salary_ID = req.params.salary_ID_FK
    let query1 = "DELETE FROM Salary WHERE salary_ID_FK=?"
    let result = await con.connection.execute(query1, [salary_ID])
    res.status(200).json("DELETED");
    console.log('delete Salary');
}

/**
 * Update salary 
 * CRUD - Update
 */
exports.updateSalary = async(req, res) => {
    let query1 = "UPDATE Salary SET  Next_Donation=?, Next_Salary=? where Salary_ID_FK=?"
    let result = await con.connection.execute(query1, [req.body.Next_Donation, req.body.Next_Salary, req.body.Salary_ID_FK])
    res.status(200).json("row updated");
    console.log('update Salary');
}