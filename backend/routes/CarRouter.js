
/// Car ROUTES ////

var express = require('express');
var router = express.Router();

// Require controller modules.
var Car_controller = require('../controllers/CarController');


// get all car
router.get('/Car', Car_controller.getAllCar)

// get car where car model 
router.get('/Car/:Car_Model' , Car_controller.getCar_Model)

// post (add) new car  
router.post('/Car', Car_controller.addNewCar)

// delete car whene  Car_ID_PK
router.delete('/Car/:Car_ID_PK', Car_controller.deleteCar)

//Update car "updateCarModel" where  Car_ID_PK
router.put('/Car', Car_controller.updateCarModel)





module.exports = router;

 
