const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const NewAgent = sequelize.define('NewAgent', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    siteName: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    contact: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    experience: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    languages: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  }, {
    timestamps: false, // Set this to true if you want createdAt and updatedAt columns
  });

  return NewAgent;
};
