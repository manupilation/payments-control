/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('entries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      date: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      value: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },

      procedure: {
        type: Sequelize.INTEGER,
        allowNull: false,
      }
    });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('entries');
  }
};
