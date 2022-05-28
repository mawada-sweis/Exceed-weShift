var express = require('express');
var router = express.Router();

// Require Salary controller modules.
var salary_controller = require('../controllers/salaryController');

// POST request for add salary.
router.post('/add', salary_controller.addSalary);
router.put('/update', salary_controller.updateSalary);
router.get('/get', salary_controller.getSalary);

module.exports = router;