const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const CustomerReview = sequelize.define('customer_reviews', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    customerName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    customerImage: {
      type: DataTypes.STRING,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    opinion: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    }, {
    timestamps: false, 
  });
  console.log("458");
  console.log(CustomerReview);
  return CustomerReview;
};
