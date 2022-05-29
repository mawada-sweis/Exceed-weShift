var express = require('express');
var router = express.Router();

// GET home page.
router.post('/authentication', function(req, res) {
    res.redirect('./authRouter');
  });

router.post('/salary', function(req, res) {
    res.redirect('./salaryRouter');
  });


router.post('/car', function(req, res) {
    res.redirect('./CarRouter');
  });


router.post('/shift', function(req, res) {
    res.redirect('./ShiftsRouter');
  });

  module.exports = router;
