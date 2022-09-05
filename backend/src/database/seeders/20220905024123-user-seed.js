/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('users', [{
      username: 'admin',
      email: 'yas@jasmine.com',
      password: '123456',
    }], {});
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
