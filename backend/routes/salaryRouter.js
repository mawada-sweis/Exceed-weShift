var express = require('express');
var router = express.Router();

// Require controller modules.
var salary_controller = require('../controllers/salaryController');
router.get('/', salary_controller.salary);
router.get('/getSalaryID', salary_controller.getSalaryID);
router.post('/addSalary', salary_controller.addSalary);
router.delete('/deleteSalary', salary_controller.deleteSalary);
router.put('/updateSalary', salary_controller.updateSalary);

module.exports = router;