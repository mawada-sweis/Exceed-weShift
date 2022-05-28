var express = require('express');
var router = express.Router();

// GET home page.
router.post('/authentication', function(req, res) {
    res.redirect('./authRouter');
  });

router.post('/salary', function(req, res) {
    res.redirect('./salaryRouter');
  });

router.post('/request', function(req, res) {
    res.redirect('./requestByAdminRouter');
  });


  module.exports = router;
