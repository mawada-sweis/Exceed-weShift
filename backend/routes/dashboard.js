var express = require('express');
var router = express.Router();

// Require controller modules.
var dashboard_controller = require('../controllers/dashboardController');

router.get('/', dashboard_controller.dashboard);
router.get('/activeCustomers', dashboard_controller.activeCustomers);

module.exports = router;