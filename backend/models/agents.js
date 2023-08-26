const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
    const Agent = sequelize.define('Agent', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      site_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      name:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      contact: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      experience: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      languages: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    }, {
        timestamps: false,
    });
  
    Agent.associate = (models) => {
      Agent.belongsTo(models.Site, {
        foreignKey: 'site_id',
        onDelete: 'CASCADE',
      });
      Agent.belongsToMany(models.Site, {
        through: models.SiteAgent,
        foreignKey: 'agent_id',
    });
    };
  
    return Agent;
  };
  