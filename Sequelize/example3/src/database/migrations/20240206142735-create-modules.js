'use strict';

const MODULES = 'modules';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  /**
   * 
   * @param {import('sequelize').QueryInterface} queryInterface 
   * @param {import('sequelize')} Sequelize 
   */
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(MODULES, {
      id: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      description: {
        type: Sequelize.STRING,
      },
      duration: {
        allowNull: false,
        type: Sequelize.DECIMAL,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      qtBlock: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      }
    })
  },
  /**
   * 
   * @param {import('sequelize').QueryInterface} queryInterface 
   * @param {import('sequelize')} Sequelize 
   */
  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable(MODULES)
  }
};
