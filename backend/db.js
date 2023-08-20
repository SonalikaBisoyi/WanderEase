
const { Sequelize } = require('sequelize');
const config = require('../backend/config/config.json'); 
const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  config.development
);
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();
const defineCustomerReviewModel = require('./models/customerReviews');
const CustomerReview = defineCustomerReviewModel(sequelize);
const defineUserModel = require('./models/user');
const User = defineUserModel(sequelize);

module.exports = {
  sequelize,
  CustomerReview,
  User,
};
