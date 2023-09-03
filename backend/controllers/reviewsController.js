//const { CustomerReview } = require('../db'); // Adjust the import based on your models file
const { sequelize } = require('../db'); // Import the sequelize instance
const CustomerReview = require('../models/customerReviews')(sequelize);
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