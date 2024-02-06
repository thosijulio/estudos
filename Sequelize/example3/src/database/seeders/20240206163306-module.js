'use strict';

const MODULES = 'modules'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  /**
   * 
   * @param {import('sequelize').QueryInterface} queryInterface 
   * @param {import('sequelize').Sequelize} Sequelize 
   */
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert(MODULES, [
      {
        name: 'Fundamentos',
        description: 'Base para programação',
        duration: 2,
        qtBlock: 8,
      },
      {
        name: 'Frontend',
        description: 'Base para programação frontend',
        duration: 2,
        qtBlock: 6,
      },
      {
        name: 'Backend',
        description: 'Base para programação backend',
        duration: 12,
        qtBlock: 8,
      },
      {
        name: 'Mobile',
        description: 'Base para programação mobile',
        duration: 15,
        qtBlock: 4,
      },
      {
        name: 'Fundamentos',
        description: 'Base para programação',
        duration: 2,
        qtBlock: 8,
      },
      {
        name: 'Fundamentos',
        description: 'Base para programação',
        duration: 2,
        qtBlock: 8,
      },
    ])
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  /**
   * 
   * @param {import('sequelize').QueryInterface} queryInterface 
   * @param {import('sequelize').Sequelize} Sequelize 
  */
  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete(MODULES);
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
