/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes
 */
const StudentSchema = (sequelize, DataTypes) => {
  const StudentTable = sequelize.define(
    'Student',
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      birthDay: DataTypes.DATE,
      active: DataTypes.BOOLEAN,
      courseId: DataTypes.INTEGER,
    },
    {
      tableName: 'students',
      timestamps: false,
      underscored: false,
    },
  );

  StudentTable.associate = (models) => {
    StudentTable.belongsTo(models.Course, {
      foreignKey: 'courseId',
      as: 'course',
    });
  };

  return StudentTable;
}

module.exports = StudentSchema;
