
// const { DataTypes } = require('sequelize');
// const { sequelize } = require('../db');
// //module.exports = (sequelize) => {
//   const User = sequelize.define('users', {
//     id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     username: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     email: {
//       type: DataTypes.STRING,
//       unique : true,
//       allowNull: false,
//     },
//     password: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   },{
//     timestamps: false, 
//   });
//   module.exports = User;

// models/user.js

const { DataTypes } = require('sequelize');
//const { sequelize } = require('../db'); // Import the sequelize instance
module.exports = (sequelize) => {
const User = sequelize.define('users', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: false,
});

return User;
};