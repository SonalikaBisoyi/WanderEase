const { DataTypes } = require('sequelize');
console.log('Defining Site_city model');
module.exports = (sequelize) => {
  const SiteCity = sequelize.define('SiteCity', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    city_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'states_cities', // Make sure this matches your actual table name
        key: 'city_id', // Make sure this matches the primary key of states_cities table
      },
    },
    site_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Site', // Make sure this matches the actual Site model
        key: 'site_id', // Make sure this matches the primary key of the Site model
      },
    },
  }, {
    timestamps: false,
  });
  SiteCity.associate = (models) => {
    // Associate with the Site model
    SiteCity.belongsTo(models.Site, {
      foreignKey: 'site_id',
      onDelete: 'CASCADE',
    });

    // Associate with the StatesCities model
    SiteCity.belongsTo(models.states_cities, {
      foreignKey: 'city_id',
      onDelete: 'CASCADE',
    });
  };

  return SiteCity;
};
