/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('payments', [{
      patient: 'Carlos Munhoz',
      procedure: 'Remoção de aparelho',
      paid: false,
      date: Sequelize.fn('NOW'),
      total_value: 350.50,
      portion_value: 175.25,
      qt_portion: 2,
    }], {});
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('payments', null, {});
  }
};
