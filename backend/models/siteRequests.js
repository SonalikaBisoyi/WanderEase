// Import Sequelize and the connection instance (sequelize)
const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
const SiteRequests = sequelize.define('SiteRequests', {
  siteRequestId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  siteName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  stateName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cityName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
    timestamps: false,
});
console.log('at',SiteRequests);
return SiteRequests;

}
