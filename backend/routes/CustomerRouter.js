/// Customer ROUTES ////

var express = require('express');
var router = express.Router();

// Require controller modules.
var Customer_controller = require('../controllers/CustomerController');

// get all Customer
router.get('/Customer', Customer_controller.getAllCustomer)

// get Customer where Customer Email 
router.get('/Customer/:Customer_Email_PK' , Customer_controller.getCustomerWhereEmail)

// Post Customer where Customer Email 
router.post('/Customer' , Customer_controller.addNewCustomer)

// delete Customer where Customer Email
router.delete('/Customer/:Customer_Email_PK', Customer_controller.deleteCustomer)

//Update Customer "CustomerPhone" where Customer Email
router.put('/Customer', Customer_controller.updateCustomerPhone)

module.exports = router;
