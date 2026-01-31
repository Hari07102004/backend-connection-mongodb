const express = require('express');
const router = express.Router();

const StudentController = require('../controller/controller');
const { logger } = require('../middleware/middleware');
router.get('/', logger, StudentController.getStudents);
router.post('/add', logger, StudentController.addStudent);
// router.put('/:id', logger, StudentController.updateStudent);
// router.delete('/:id', logger, StudentController.deleteStudent);

module.exports = router;