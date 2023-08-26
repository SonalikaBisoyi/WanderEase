const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
    const SiteAgent = sequelize.define('SiteAgent', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      site_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Sites',
          key: 'site_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      agent_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Agents',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    }, {
        timestamps: false,
      });
      SiteAgent.associate = (models) => {
        // Associate with the Site model
        SiteAgent.belongsTo(models.Site, {
          foreignKey: 'site_id',
          onDelete: 'CASCADE',
        });
    
        // Associate with the Agent model
        SiteAgent.belongsTo(models.Agent, {
          foreignKey: 'agent_id',
          onDelete: 'CASCADE',
        });
      };
    
  
    return SiteAgent;
  };
  