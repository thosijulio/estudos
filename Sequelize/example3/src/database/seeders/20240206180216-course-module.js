'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  /**
   * 
   * @param {import('sequelize').QueryInterface} queryInterface 
   * @param {import('sequelize').Sequelize} Sequelize 
   */
  async up (queryInterface, _Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('courses-modules', [
      {
        idCourse: 3,
        idModule: 2,
      },
      {
        idCourse: 2,
        idModule: 1,
      },
      {
        idCourse: 1,
        idModule: 1,
      },
      {
        idCourse: 2,
        idModule: 2,
      },
      {
        idCourse: 3,
        idModule: 3,
      },
    ])
  },

  /**
   * 
   * @param {import('sequelize').QueryInterface} queryInterface 
   * @param {import('sequelize').Sequelize} Sequelize 
   */
  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('courses-modules', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
