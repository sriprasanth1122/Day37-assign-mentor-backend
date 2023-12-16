const { studentSchema} = require("../models/student");



const getStudent = async (req, res) => {
    try {
        const student = await studentSchema.find();
        res.status(200).json({ data: student , message : "Mentor details send successfull" });
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = { getStudent }