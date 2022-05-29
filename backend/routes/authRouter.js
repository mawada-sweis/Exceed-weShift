/// Authentication ROUTES ////

var express = require('express');
var router = express.Router();

// Require controller modules.
var auth_controller = require('../controllers/authController');

// POST request for Login.
router.post('/login', auth_controller.login);

// POST request for Sign up.
router.post('/signup', auth_controller.signup);

router.post('/driver/login', auth_controller.driver_login);

// delete request for delete customer
router.delete('/delete/customer', auth_controller.delete_profile);

// put request for update customer
router.put('/update/customer', auth_controller.update_profile);

module.exports = router;
