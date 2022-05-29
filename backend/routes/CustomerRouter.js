/// Customer ROUTES ////

var express = require('express');
var router = express.Router();

// Require controller modules.
var Customer_controller = require('../controllers/CustomerController');

// get all Customer
router.get('/', Customer_controller.getAllCustomer)

// get Customer where Customer Email 
router.get('/:Customer_Email_PK' , Customer_controller.getCustomerWhereEmail)

// Post Customer where Customer Email 
router.post('/add' , Customer_controller.addNewCustomer)

// delete Customer where Customer Email
router.delete('/delete/:Customer_Email_PK', Customer_controller.deleteCustomer)

//Update Customer "CustomerPhone" where Customer Email
router.put('/update', Customer_controller.updateCustomerPhone)

module.exports = router;
