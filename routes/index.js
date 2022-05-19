var express = require('express');
var router = express.Router();

// Require controller modules.
var auth_controller = require('../controllers/authController');

// GET request for test 
router.get('/test', auth_controller.test);

/// Authentication ROUTES ////

// POST request for Login.
router.post('/authentication/:id/login', auth_controller.login);

// POST request for Sign up.
router.post('/authentication/signup', auth_controller.signup);

// POST request for Checking the user OTP Code.
router.post('/authentication/:code/otp', auth_controller.check_otp);

module.exports = router;
