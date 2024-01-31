/* Um model (UserModel por exemplo) é uma abstração que representa uma linha na tabela do DB, e passa várias informações
   ao Sequelize sobre a entidade, como nome, atributos e tipo de dados.
   Por padrão, o nome do arquivo e da função é no singular, já que representam um registro na tabela. As tabelas são nomeadas no plural por padrão, ou como no caso
   também é possível definir seu nome passando um parametro para a funcao define.
*/

const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    dateBirth: DataTypes.DATE,
  }, { tableName: 'Users' })

    // Função responsável por sincronizar a model com os métodos do Sequelize. Ela é definida e já invocada.
    (async () => {
      await sequelize.sync({ forced: true }); // forced recria a tabela toda vez que o servidor for iniciado (recomendado apenas p/ testes)
      // Aqui dentro é possível utilizar funcões da model do Sequelize

      // O método build cria uma instância de um model, mas não o salva no banco (tanto que não é assincrono). Útil p/ dados temporários
      const Sarah = User.build({ fullName: 'Sarah Rodrigues', email: 'sarah@gmail.com' })

      console.log(Sarah instanceof User); // true
      console.log(Sarah.fullName); // Sarah Rodrigues

      await Sarah.save(); // O método Save é responsável por salvar no banco uma instância criada com o método build.

      // Create: Mistura de build com save (cria uma instância de um model e salva no banco)
      const Pedro = await User.create({ fullName: 'Pedro Correa', email: 'pedro@gmail.com' });

      console.log(Pedro instanceof User); // true

      Pedro.fullName = 'Otávio Correa'; // Apenas a instância foi atualizada (temp), o nome do banco ainda não foi alterado
      Pedro.set({ fullName: 'Teste', email: 'Mais de um campo alterado' }) // Atualizar mais de um campo

      await Pedro.save(); // Agora o nome foi atualizado no banco

      Pedro.update({ fullName: 'Apenas esse campo alterado' }) // Update serve para atualizar uma instância que já tem alguns atributos alterados mas o desejado é alterar apenas o que foi passado no update
      
      await Sarah.destroy() // Exclui o model do banco;
    })();
  return User;
}

module.exports = UserModel;
