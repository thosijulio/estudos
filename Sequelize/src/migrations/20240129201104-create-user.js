// Comando p/ criar o arquivo padrão de migration: npx sequelize migration:generate --name create-user 
'use strict';

/*
  Parametros das funções up e down:
    _ queryInterface: Usado para modificar o banco
    _ Sequelize: Tipo de dados disponíveis no contexto do banco (varchar, date, string, etc)
*/

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
