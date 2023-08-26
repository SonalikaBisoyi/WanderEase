const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  const Site = sequelize.define('Site', {
    site_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    city_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'states_cities', // Correct table name
        key: 'city_id', // Make sure this matches the primary key of the states_cities table
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    best_visit: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    requirements: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    image1: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image3: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    food: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    tourism_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {
    timestamps: false,
  });

  Site.associate = (models) => {
    

    Site.hasMany(models.SiteAgent, {
      foreignKey: 'site_id',
      onDelete: 'CASCADE',
    });

    Site.hasMany(models.PopularSite, {
      foreignKey: 'site_id',
      onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        as: 'site',
    });

    Site.hasMany(models.SiteCity, {
      foreignKey: 'site_id',
      onDelete: 'CASCADE',
    });
    Site.belongsToMany(models.Agent, {
      through: models.SiteAgent,
      foreignKey: 'site_id',
    });

    Site.belongsToMany(models.states_cities, {
      through: models.SiteCity, // Use the new SiteCity model
      foreignKey: 'site_id',
    });
  };

  return Site;
};