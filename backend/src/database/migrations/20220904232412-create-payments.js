/* eslint-disable no-undef */
/* eslint-disable camelcase */
'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('payments', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      patient: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      procedure: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      paid: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      date: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      total_value: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      portion_value: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      qt_portion: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });

  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('payments');
  }
};
