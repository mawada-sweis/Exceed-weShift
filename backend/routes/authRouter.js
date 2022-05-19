/// Authentication ROUTES ////

var express = require('express');
var router = express.Router();

// Require controller modules.
var auth_controller = require('../controllers/authController');

// POST request for Login.
router.post('/login', auth_controller.login);

// POST request for Sign up.
router.post('/signup', auth_controller.signup);

module.exports = router;
