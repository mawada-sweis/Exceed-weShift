
/// Car ROUTES ////

var express = require('express');
var router = express.Router();

// Require controller modules.
var Car_controller = require('../controllers/CarController');

// get all car
router.get('/', Car_controller.getAllCar);

// get car where car model 
router.get('/:Car_Model', Car_controller.getCar_Model);

// post (add) new car  
router.post('/add', Car_controller.addNewCar);

// delete car whene  Car_ID_PK
router.delete('/delete/:Car_ID_PK', Car_controller.deleteCar);

//Update car "updateCarModel" where  Car_ID_PK
router.put('/update', Car_controller.updateCarModel);


module.exports = router;

