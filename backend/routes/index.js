var express = require('express');
var router = express.Router();

// GET home page.
router.post('/authentication', function(req, res) {
    res.redirect('./authRouter');
  });

router.post('/salary', function(req, res) {
    res.redirect('./salaryRouter');
  });

  router.post('/Customer', function(req, res) {
    res.redirect('./CustomerRouter');
  });

  router.post('/Feedback', function(req, res) {
    res.redirect('./FeedbackRouter');
  });




  module.exports = router;
