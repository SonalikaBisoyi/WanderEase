'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('SiteCities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      city_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'states_cities', // Make sure this matches your actual table name
          key: 'city_id', // Make sure this matches the primary key of states_cities table
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      site_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Sites', // Make sure this matches the actual Site model
          key: 'site_id', // Make sure this matches the primary key of the Site model
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('SiteCities');
  },
};