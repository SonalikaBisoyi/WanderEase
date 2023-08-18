// const mysql = require('mysql2');

// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'root@24',
//   database: 'wanderease'
// });

// module.exports = db;
const { Sequelize } = require('sequelize');
const config = require('../backend/config/config.json'); // Adjust the path if necessary

// Set up database connection
const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  config.development
);

// Test the database connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

// Load and define the CustomerReview model
const defineCustomerReviewModel = require('./models/customerReviews');
const CustomerReview = defineCustomerReviewModel(sequelize);

module.exports = {
  sequelize,
  CustomerReview,
};
