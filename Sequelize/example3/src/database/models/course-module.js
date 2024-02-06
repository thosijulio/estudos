/**
 * 
 * @param {import('sequelize').Sequelize} Sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */
const CourseModuleSchema = (sequelize, DataTypes) => {
  const CourseModuleTable = sequelize.define('CourseModule', {
    idCourse: {
      allowNull: false,
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    idModule: {
      allowNull: false,
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
  }, {
    tableName: 'courses-modules',
    timestamps: false,
    underscored: false,
  });

  CourseModuleTable.associate = (models) => {
    models.Course.belongsToMany(models.Module, {
      as: 'modules',
      foreignKey: 'idCourse',
      otherKey: 'idModule',
      through: CourseModuleTable,
    });

    models.Module.belongsToMany(models.Course, {
      as: 'courses',
      foreignKey: 'idModule',
      otherKey: 'idCourse',
      through: CourseModuleTable,
    })
  };

  return CourseModuleTable;
}

module.exports = CourseModuleSchema;
