const { studentSchema } = require("../models/student");
const { mentorSchema } = require("../models/mentor");


const deleteStudent = async (req, res) => {
    try {
        const student = await studentSchema.findById(req.params.studentId);
        const { mentorAssigned } = student
        if (mentorAssigned === "unAssigned") {
            await studentSchema.findByIdAndDelete(req.params.studentId)
            res.json({
                message: "Student Delete successfull",
                statusCode: 200,
            });
        } else {
            await mentorSchema.findByIdAndUpdate(mentorAssigned.id, { $pull: { studentsAssigned: { id: req.params.studentId } } })
            await studentSchema.findByIdAndDelete(req.params.studentId)
            res.json({
                message: "Student Delete successfull",
                statusCode: 200,
            });
        }
    } catch (error) {
        res.json({
            error,
            message: "Student delete failed",
            statusCode: 500,
        });
    }
};

module.exports = { deleteStudent };
