const { studentSchema } = require("../models/student");
const { mentorSchema } = require("../models/mentor");


const assignStudent = async (req, res) => {
    try {
        const { mentor, student } = req.body
        let query = mentor.id;
        for (const i of student) {
            await studentSchema.findByIdAndUpdate(i.id, { $set: { mentorAssigned: mentor } })
            await mentorSchema.findByIdAndUpdate(query, { $push: { studentsAssigned: i } })
        }
        res.json({
            message: "Student assign successfull",
            statusCode: 200,
        });
    } catch (error) {
        res.json({
            error,
            message: "Student assign failed",
            statusCode: 500,
        });
    }
};

module.exports = { assignStudent };