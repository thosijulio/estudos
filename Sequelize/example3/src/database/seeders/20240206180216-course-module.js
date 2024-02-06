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
    queryInterface.bulkInsert('courses-modules', [
      {
        courseId: 3,
        moduleId: 2,
      },
      {
        courseId: 2,
        moduleId: 1,
      },
      {
        courseId: 1,
        moduleId: 1,
      },
      {
        courseId: 2,
        moduleId: 2,
      },
      {
        courseId: 3,
        moduleId: 3,
      },
    ])
  },

  /**
   * 
   * @param {import('sequelize').QueryInterface} queryInterface 
   * @param {import('sequelize').Sequelize} Sequelize 
   */
  async down(queryInterface, _Sequelize) {
    queryInterface.bulkDelete('courses-modules', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
