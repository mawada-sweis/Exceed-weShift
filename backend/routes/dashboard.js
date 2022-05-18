var express = require('express');
var router = express.Router();

// Require controller modules.
var dashboard_controller = require('../controllers/dashboardController');

router.get('/', dashboard_controller.dashboard);
router.get('/activeCustomers', dashboard_controller.activeCustomers);
router.get('/NumberRequests', dashboard_controller.NumberRequests);
router.get('/CurrentShift', dashboard_controller.CurrentShift);
router.get('/NextDonation', dashboard_controller.NextDonation);
router.get('/Revenue', dashboard_controller.Revenue);
router.get('/shiftInfo', dashboard_controller.shiftInfo);


module.exports = router;