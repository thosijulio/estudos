'use strict';

/* Qualquer migration que subir para o banco já populado não apagara seu conteúdo. Nesse exemplo, estamos adicionando uma nova coluna em uma tabela populada
  sem permitir nulo para a nova coluna, e passando um valor default para os dados já existentes no banco. Ao executar a migrations, os dados permanecerão lá. */

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('Users', 'birthDate', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      after: 'email', // Por padrão, a coluna será posicionada por último na tabela. Para ordenar na posição desejada, utilizar o after ou before e passar a coluna
    })
  },

  async down(queryInterface, Sequelize) {
    queryInterface.removeColumn('Users', 'birthDate')
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
