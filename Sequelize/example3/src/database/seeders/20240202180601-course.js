'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    /**
   * 
   * @param {import('sequelize').QueryInterface} queryInterface 
   * @param {import('sequelize').Sequelize} Sequelize 
   */
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert(
      'courses',
      [
        {
          name: 'Fullstack',
          description: 'Formação FullStack',
          creationDate: '2023-12-12T00:00:00',
          active: true,
          duration: 50,
        },
        {
          name: 'BackEnd',
          description: 'Formação Back-end',
          creationDate: '2022-12-12T00:00:00',
          active: true,
          duration: 90,
        },
        {
          name: 'FrontEnd',
          description: 'Formação Front-end',
          creationDate: '2023-01-12T00:00:00',
          active: false,
          duration: 40,
        }
      ]
    )
  },

  async down (queryInterface, _Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('courses', null, {});
  }
};
