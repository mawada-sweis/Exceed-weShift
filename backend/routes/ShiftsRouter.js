var express = require('express');
var router = express.Router();

// Require controller modules.
var Shift_controller = require('../controllers/ShiftsController');


// get all shift
router.get('/', Shift_controller.getAllShifts)

// post (add) new shift  
router.post('/add', Shift_controller.addNewShifts)

// delete shift whene  shift_ID_PK
router.delete('/delete/:Shift_ID_PK', Shift_controller.deleteShift)

//Update shift "update_Shift_start" 
router.put('/update', Shift_controller.update_Shift)

//Update shift "update_Shift_End" 
router.put('/update/end', Shift_controller.update_Shift_End)

module.exports = router;
