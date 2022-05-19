/// Driver ROUTES ////

var express = require('express');
var router = express.Router();

// Require controller modules.
var Driver_controller = require('../controllers/DriverController');


// get all Driver
router.get('/Driver', Driver_controller.getAllDriver)

// get Driver where Driver Email 
router.get('/Driver/:Driver_Email_PK' , Driver_controller.getDriverWhereEmail)
///////note
// get Driver where Driver Name 
//router.get('/Driver/Driver_Phone' , Driver_controller.getDriverWhereName)

// post (add) new Driver  
router.post('/Driver', Driver_controller.addNewDriver)

// delete Admin whene Admin Email
router.delete('/Driver/:Driver_Email_PK', Driver_controller.deleteDriver)

//Update Admin "AdminName" where customer Email
router.put('/Driver', Driver_controller.updateDriverPhone)

module.exports = router;