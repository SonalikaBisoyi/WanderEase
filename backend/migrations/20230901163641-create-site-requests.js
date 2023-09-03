'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('SiteRequests', {
      siteRequestId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      siteName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      stateName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cityName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      imageUrl: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    }, {
      timestamps: false,
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('SiteRequests');
  },
};

