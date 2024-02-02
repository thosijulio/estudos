'use strict';

const CourseSchema = (sequelize, DataTypes) => {
  const CourseTable = sequelize.define('Course', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    creationDate: DataTypes.DATE,
    active: DataTypes.BOOLEAN,
  },
  {
    tableName: 'courses',
    timestamps: false,
  }
  );

  return CourseTable;
}

module.exports = CourseSchema;
