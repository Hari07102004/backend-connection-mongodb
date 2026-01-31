const StudentModel = require('../data/model');

exports.addStudent = async (req, res) => {
        const { name, course } = req.body;
        try {
                const newStudent = new StudentModel({ name, course });
                await newStudent.save();
                res.status(201).json({
                    message: "Student added successfully",
                    data:newStudent
                });
        } catch (error) {
                res.status(500).json({
                    message: "Error in adding student data",
                    error: error.message
                });
        }
};
exports.getStudents = async (req, res) => {
        try {
                const students = await StudentModel.find();
                res.status(200).json({
                    message: "Student is retrieved successfully",
                    data: students
                });
        } catch (error) {
                res.status(500).json({
                    message: "Error in retrieving student data", 
                    error: error.message
                });
        }
};  