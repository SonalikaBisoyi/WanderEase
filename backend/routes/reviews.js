const express = require('express');
const router = express.Router();
const ReviewsController = require('../controllers/reviewsController');


router.get('/reviews', ReviewsController.getAllReviews);
router.post('/reviews', ReviewsController.createReview);

module.exports = router;