  /**
   * 
   * @param {import('sequelize').Sequelize} QueryInterface
   * @param {import('sequelize').DataTypes} DataTypes
   */
const ModuleSchema = (sequelize, DataTypes) => {
  const ModuleTable = () => {
    sequelize.define('Module', {
      id: DataTypes.INTEGER,
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      duration: DataTypes.DECIMAL,
      qtBlock: DataTypes.DECIMAL,
    }, {
      tableName: 'courses',
      timestamps: false,
      underscored: false
    })
  };

  return ModuleTable;
}

module.exports = ModuleSchema;
