// const { Sequelize } = require('sequelize');
// const config = require('../backend/config/config.json'); // Adjust the path if necessary

// // Set up database connection
// const sequelize = new Sequelize(
//   config.development.database,
//   config.development.username,
//   config.development.password,
//   config.development
// );

// // Test the database connection
// (async () => {
//   try {
//     await sequelize.authenticate();
//     console.log('Database connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// })();

// // Load and define the CustomerReview model
// const defineCustomerReviewModel = require('./models/customerReviews');
// const CustomerReview = defineCustomerReviewModel(sequelize);
// const defineUserModel = require('./models/user.js');
// const User = defineUserModel(sequelize);
// console.log("123");
// console.log(User);
// module.exports = {
//   sequelize,
//   CustomerReview,
//   User,
// };
// db.js

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  // Database configuration options
  dialect: 'mysql', // Use the appropriate dialect
  host: 'localhost', // Database host
  username: 'root', // Database username
  password: 'root@24', // Database password
  database: 'wanderease', // Database name
});

module.exports = { sequelize };
