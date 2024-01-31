'use strict';

/* As seeders servem para popular o banco de dados. Possuem a mesma estrutura de uma migration */

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Users', [
      {
        fullName: 'Leonardo Garcia',
        email: 'leo@gmail.com',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'), // função direta do mysql (current timestamp)
        phone: '14991987657',
      },
      {
        fullName: 'JEduardo',
        email: 'edu@test.com',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        phone: '12998767657',
      }
    ])
  },

  async down (queryInterface, _Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {})
  }
};
