const courseService = require('../service/course.service');

const createCourse = async (req, res) => {
  const newCourse = await courseService.createCourse(req.body);

  return res.status(201).json(newCourse);
}

const getCourses = async (_req, res) => {
  const courses = await courseService.getCourses();

  return res.status(200).json(courses);
}

const updateCourse = async (req, res) => {
  const { id } = req.params;
  const updatedCourse = req.body;

  const isUpdated = await courseService.updateCourse(id, updatedCourse);

  if (isUpdated) {
    return res.status(200).json({ message: `Curso ${id} atualizado com sucesso.`})
  } else {
    return res.status(404).json({ message: `Curso ${id} não encontrado.` });
  }
}

const removeCourse = async (req, res) => {
  const { id } = req.params;
  const isRemoved = await courseService.removeCourse(id);

  if (isRemoved) {
    return res.status(200).json({ message: `Curso ${id} removido com sucesso.`})
  } else {
    return res.status(404).json({ message: `Curso ${id} não encontrado.` });
  }
}

module.exports = {
  createCourse,
  getCourses,
  updateCourse,
  removeCourse,
}