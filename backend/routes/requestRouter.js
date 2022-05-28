var express = require('express');
var router = express.Router();

// Require Salary controller modules.
var salary_controller = require('../controllers/requestController');

// POST request for add salary.
router.post('/add', salary_controller.add_by_admin);
router.get('/get', salary_controller.show_by_admin);
router.put('/update', salary_controller.updated_by_admin);
router.delete('/delete/:id', salary_controller.delete_by_admin);

module.exports = router;