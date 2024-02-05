const { Student } = require('../database/models');

const getStudents = async () => {
  const students = await Student.findAll();

  return students;
}

module.exports = {
  getStudents,
}