var express = require('express');
var router = express.Router();

// Require Salary controller modules.
var salary_controller = require('../controllers/requestByCustomerController');

// POST request for add salary.
router.post('/add', salary_controller.add_by_customer);
router.get('/get/:id', salary_controller.show_by_customer);
router.put('/update', salary_controller.updated_by_customer);
router.delete('/delete/:id', salary_controller.delete_by_customer);

module.exports = router;
//Controller.js