const { studentSchema } = require("../models/student");
const { mentorSchema } = require("../models/mentor");


const deleteMentor = async (req, res) => {
    try {

        const mentor = await mentorSchema.findById(req.params.mentorId);
        const { studentsAssigned } = mentor

        if (studentsAssigned.length > 0) {
            studentsAssigned.forEach(async (item) => {
                const student = await studentSchema.findById(item.id);
                student.mentorAssigned = "unAssigned";
                await student.save();
            })
            await mentorSchema.findByIdAndDelete(req.params.mentorId)
            res.json({
                message: "Mentor Delete successfull",
                statusCode: 200,
            });
        } else {
            console.log("sivanathan");
            await mentorSchema.findByIdAndDelete(req.params.mentorId)
            res.json({
                message: "Mentor Delete successfull",
                statusCode: 200,
            });
        }
    } catch (error) {
        res.json({
            error,
            message: "Mentor delete failed",
            statusCode: 500,
        });
    }
};

module.exports = { deleteMentor };