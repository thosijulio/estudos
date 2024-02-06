'use strict';

const COURSES_MODULES = 'courses-modules'

/*
  EXEMPLO DE TABELA N-M 
*/

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  /**
   * 
   * @param {import('sequelize').QueryInterface} queryInterface 
   * @param {import('sequelize')} Sequelize 
   */
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(COURSES_MODULES, {
      idCourse: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'courses',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      idModule: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'modules',
          key: 'id',
        },
        onDelete: 'CASCADE',
      }
    })
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  /**
   * 
   * @param {import('sequelize').QueryInterface} queryInterface 
   * @param {import('sequelize')} Sequelize 
   */
  async down(queryInterface, _Sequelize) {
    queryInterface.dropTable(COURSES_MODULES, null, {});
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
