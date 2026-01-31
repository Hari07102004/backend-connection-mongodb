const mongoose = require('mongoose');

const student = new mongoose.Schema({
        name: String,
        course: String
});

const StudentModel = mongoose.model('student', student);
module.exports = StudentModel;