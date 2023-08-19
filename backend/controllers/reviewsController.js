// const express = require('express');
// const router = express.Router();
// const reviewsModel = require('../models/reviews');

// // Create a new review
// router.post('/', (req, res) => {
//   const { name, email, rating, opinion } = req.body;
//   reviewsModel.createReview(name, email, rating, opinion, (error, reviewId) => {
//     if (error) {
//       res.status(500).json({ error: 'An error occurred while creating the review' });
//     } else {
//       res.status(201).json({ message: 'Review created successfully', reviewId });
//     }
//   });
// });

// // Retrieve all reviews
// router.get('/', (req, res) => {
//   reviewsModel.getAllReviews((error, reviews) => {
//     if (error) {
//       res.status(500).json({ error: 'An error occurred while retrieving reviews' });
//     } else {
//       res.status(200).json(reviews);
//     }
//   });
// });

// // Other route handlers...

// module.exports = router;
// const Review = require('../models/reviews');

// class ReviewsController {
//   static async getAllReviews(req, res) {
//     try {
//       const reviews = await Review.getAllReviews();
//       res.json(reviews);
//     } catch (error) {
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   }

//   static async createReview(req, res) {
//     const { name, comment } = req.body;
//     if (!name || !comment) {
//       return res.status(400).json({ error: 'Missing required fields' });
//     }

//     try {
//       const newReview = { name, comment };
//       const result = await Review.createReview(newReview);
//       res.json({ message: 'Review created successfully', id: result.insertId });
//     } catch (error) {
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   }
// }

// module.exports = ReviewsController;


const { CustomerReview } = require('../db'); // Adjust the import based on your models file
console.log(CustomerReview);
console.log("456");
//const db = require('../db');
//console.log(db);
class ReviewsController {
  static async getAllReviews(req, res) {
    try {
      const reviews = await CustomerReview.findAll();
      
      res.json(reviews);
    } catch (error) {
      console.error('Error fetching reviews:', error); // Add this line
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  

  static async createReview(req, res) {
    const { customerName, customerImage, date, opinion } = req.body;
    
    try {
      const newReview = await CustomerReview.create({
        customerName,
        customerImage,
        date,
        opinion,
      });

      res.json({ message: 'Review created successfully', review: newReview });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = ReviewsController;



