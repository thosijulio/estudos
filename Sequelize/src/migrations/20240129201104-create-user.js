// Comando p/ criar o arquivo padrão de migration: npx sequelize migration:generate --name create-user 
'use strict';

/*
  Funções up e down: A up serve para indicar a migration o que fazer para executar as mudanças desejadas no db
  e a down para reverter essas mudanças

  Parametros das funções up e down:
    _ queryInterface: Usado para modificar o banco
    _ Sequelize: Tipo de dados disponíveis no contexto do banco (varchar, date, string, etc)
*/

// O Objetivo dessa migration, como o nome já indica, é criar a tabeta Users.
// Logo, a funcao up deve ser responsavel por criar a tabela e a down por deleta-la

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      fullName: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    })
  },

  async down (queryInterface, _Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('Users');
  }
};
