'use strict';

/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 * @returns 
 */
const CourseSchema = (sequelize, DataTypes) => {
  const CourseTable = sequelize.define('Course', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    creationDate: DataTypes.DATE,
    active: DataTypes.BOOLEAN,
    duration: DataTypes.INTEGER,
  },
  {
    tableName: 'courses',
    timestamps: false,
  }
  );

  CourseTable.associate = (models) => {
    CourseTable.hasMany(models.Student, {
      as: 'students',
      foreignKey: 'courseId'
    })
  }

  return CourseTable;
}

module.exports = CourseSchema;
