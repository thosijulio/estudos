const studentService = require('../service/student.service');

const getStudents = async (_req, res) => {
  const students = await studentService.getStudents();

  return res.status(200).json(students);
}

module.exports = {
  getStudents,
}