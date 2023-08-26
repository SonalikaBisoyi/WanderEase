
const { sequelize } = require('../db'); 
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
      console.error('Error fetching reviews:', error); 
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