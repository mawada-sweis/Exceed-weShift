
var express = require('express');
var router = express.Router();

// Require controller modules.
var Feedback_controller = require('../controllers/FeedbackController');

// get all Feedback
router.get('/', Feedback_controller.getAllFeedback)

// get Feedback by id
router.get('/:Feedback_ID' , Feedback_controller.getFeedbackById)

// Post Feedback 
router.post('/add' , Feedback_controller.addNewFeedback)

// delete Feedback by id
router.delete('/delete/:Feedback_ID', Feedback_controller.deleteFeedback)

//Update feedback 
router.put('/update', Feedback_controller.updateFeedback)

module.exports = router;
