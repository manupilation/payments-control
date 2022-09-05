/* eslint-disable no-undef */
/* eslint-disable camelcase */
'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('pay-users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      pay_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('pay-users');
  }
};
