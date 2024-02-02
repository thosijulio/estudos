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
      active: DataTypes.BOOLEAN
    },
    {
      tableName: 'students',
      timestamps: false,
    },
  );

  return StudentTable;
}

module.exports = StudentSchema;
