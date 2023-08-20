const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const user = sequelize.define('users', {
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
      unique : true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },{
    timestamps: false, 
  });
  console.log("458");
  console.log(user);
  return user;
};
