const { DataTypes } = require('sequelize');
console.log('Defining StatesCities model');
module.exports = (sequelize) => {
  const StatesCities = sequelize.define('states_cities', {
    city_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    region: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {
    timestamps: false,
  });
  StatesCities.associate = (models) => {
    

    StatesCities.hasMany(models.SiteCity, { // Add this association
      foreignKey: 'city_id',
      onDelete: 'CASCADE',
    });
    StatesCities.belongsToMany(models.Site, {
      through: models.SiteCity,
      foreignKey: 'city_id',
    });
  };
  console.log('m',StatesCities)
  return StatesCities;
};
