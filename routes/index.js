var express = require('express');
var router = express.Router();

// GET home page.
router.get('/authentication', function(req, res) {
    res.redirect('./authRouter');
  });

  module.exports = router;
