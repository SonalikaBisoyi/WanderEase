const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
    const PopularSite = sequelize.define('PopularSite', {
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
    }, {
        timestamps: false,
      });
      PopularSite.associate = (models) => {
        // Associate with the Site model
        PopularSite.belongsTo(models.Site, {
            foreignKey: 'site_id',
            onDelete: 'CASCADE',
            as: 'site',
        });
      };
    return PopularSite;
  };
  