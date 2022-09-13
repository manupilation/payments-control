/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('payments', [
      {
        patient: 'Carlos Munhoz',
        procedure: 'Remoção de aparelho',
        paid: false,
        date: Sequelize.fn('NOW'),
        total_value: 350.50,
        portion_value: 175.25,
        qt_portion: 2,
      },
      {
        patient: 'Lanai Conceição',
        procedure: 'Limpeza dentária',
        paid: true,
        date: new Date(2022, 5, 14, 13, 40, 0),
        total_value: 100.00,
        portion_value: 100.00,
        qt_portion: 0,
      },
      {
        patient: 'Marcos Rodriguez',
        procedure: 'Osteoplastia de maxila',
        paid: false,
        date: new Date(2022, 6, 15, 10, 40, 0),
        total_value: 6000.00,
        portion_value: 1000.00,
        qt_portion: 6,
      },
      {
        patient: 'Samanta Heinz',
        procedure: 'Limpeza com curetagem',
        paid: false,
        date: new Date(2022, 5, 15, 14, 0, 0),
        total_value: 260.00,
        portion_value: 130.00,
        qt_portion: 2,
      }
    ], {});
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('payments', null, {});
  }
};
