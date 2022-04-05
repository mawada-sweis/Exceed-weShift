/// Authentication ROUTES ////

var express = require('express');
var router = express.Router();

// Require controller modules.
var auth_controller = require('../controllers/authController');

// POST request for Login.
router.post('/login', auth_controller.login);

// POST request for Sign up.
router.post('/signup', auth_controller.signup);

// POST request for Checking the user OTP Code.
router.post('/:code/otp', auth_controller.check_otp);

module.exports = router;
