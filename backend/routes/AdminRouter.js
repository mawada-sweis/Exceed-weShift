/// Admin ROUTES ////

var express = require('express');
var router = express.Router();

// Require controller modules.
var Admin_controller = require('../controllers/AdminController');


// get all Admin
router.get('/Admin', Admin_controller.getAllAdmin)

// get Admin where Admin Email 
router.get('/Admin/:Admin_Email' , Admin_controller.getAdminWhereEmail)

// get Admin where Admin City 
router.get('/Admin/:Admin_Phone' , Admin_controller.getAdminWhereCity)

// post (add) new Admin  
router.post('/Admin', Admin_controller.addNewAdmin)

// delete Admin whene Admin Email
router.delete('/Admin/:Admin_Email', Admin_controller.deleteAdmin)

//Update Admin "AdminPhone" where Admin Email
router.put('/Admin', Admin_controller.updateAdminPhone)


module.exports = router;