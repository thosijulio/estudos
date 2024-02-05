const { Student, Course } = require('../database/models');

const getStudents = async () => {
  const students = await Student.findAll({ include: { model: Course, as: 'course' } });

  return students;
}

module.exports = {
  getStudents,
}