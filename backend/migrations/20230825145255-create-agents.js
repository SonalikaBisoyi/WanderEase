'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Agents', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      site_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Sites',
          key: 'site_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      contact: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      experience: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      languages: {
        type: Sequelize.STRING,
        allowNull: true,
      },
    }, {
      timestamps: false,
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Agents');
  },
};

