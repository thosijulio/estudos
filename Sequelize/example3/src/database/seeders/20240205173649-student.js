'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  /**
   * 
   * @param {import('sequelize').QueryInterface} queryInterface 
   * @param {import('sequelize').Sequelize} Sequelize 
   */
  async up (queryInterface, _Sequelize) {
    queryInterface.bulkInsert(
      'students',
      [
        {
          name: 'Pedro Correa',
          email: "pedrinho@gmail.com",
          birthDay: '2000-12-12',
          active: true,
          courseId: 1,
        },
        {
          name: 'Lucia Silva',
          email: "lucia@gmail.com",
          birthDay: '2000-12-12',
          active: true,
          courseId: 2,
        }
      ],
    );
  },

  async down (queryInterface, _Sequelize) {
    queryInterface.bulkDelete('students', null, {});
  }
};
