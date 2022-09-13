/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('entries', [{
      date: new Date(2022, 5, 14, 13, 40, 0),
      value: 100.00,
      procedure: 'Limpeza dentária',
      patient: 'Lanai Conceicao'
    }], {});
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('entries', null, {});
  }
};
