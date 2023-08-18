// const express = require('express');
// const router = express.Router();
// const db = require('../db'); // Import your database configuration

// router.get('/', (req, res) => {
//     db.query('SELECT * FROM reviews', (err, results) => {
//       if (err) {
//         return res.status(500).json({ error: 'Error fetching reviews' });
//       }
//       res.json(results);
//     });
//   });
  
//   // Create a new review
//   router.post('/', (req, res) => {
//     const { title, content, rating } = req.body;
//     const query = 'INSERT INTO reviews (title, content, rating) VALUES (?, ?, ?)';
//     db.query(query, [title, content, rating], (err, result) => {
//       if (err) {
//         return res.status(500).json({ error: 'Error creating review' });
//       }
//       res.status(201).json({ message: 'Review created successfully', id: result.insertId });
//     });
//   });
  
//   // Get a specific review by ID
//   router.get('/:id', (req, res) => {
//     const reviewId = req.params.id;
//     db.query('SELECT * FROM reviews WHERE id = ?', [reviewId], (err, results) => {
//       if (err) {
//         return res.status(500).json({ error: 'Error fetching review' });
//       }
//       if (results.length === 0) {
//         return res.status(404).json({ error: 'Review not found' });
//       }
//       res.json(results[0]);
//     });
//   });
  
//   // Update a review by ID
//   router.put('/:id', (req, res) => {
//     const reviewId = req.params.id;
//     const { title, content, rating } = req.body;
//     const query = 'UPDATE reviews SET title = ?, content = ?, rating = ? WHERE id = ?';
//     db.query(query, [title, content, rating, reviewId], (err) => {
//       if (err) {
//         return res.status(500).json({ error: 'Error updating review' });
//       }
//       res.json({ message: 'Review updated successfully' });
//     });
//   });
  
//   // Delete a review by ID
//   router.delete('/:id', (req, res) => {
//     const reviewId = req.params.id;
//     db.query('DELETE FROM reviews WHERE id = ?', [reviewId], (err) => {
//       if (err) {
//         return res.status(500).json({ error: 'Error deleting review' });
//       }
//       res.json({ message: 'Review deleted successfully' });
//     });
//   });

// module.exports = router;
const express = require('express');
const router = express.Router();
const ReviewsController = require('../controllers/reviewsController');

// Define API routes for customer reviews
router.get('/reviews', ReviewsController.getAllReviews);
router.post('/reviews', ReviewsController.createReview);

module.exports = router;
