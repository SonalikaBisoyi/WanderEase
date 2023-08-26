'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Sites', {
      site_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      city_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'states_cities', // Correct table name
          key: 'city_id', // Make sure this matches the primary key of the states_cities table
        },
      },
      best_visit: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      requirements: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      image1: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      image2: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      image3: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      food: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      tourism_type: {
        type: Sequelize.STRING,
        allowNull: true,
      },
    }, {
      timestamps: false,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Sites');
  },
};
