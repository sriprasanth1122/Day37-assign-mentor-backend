const { studentSchema } = require("../models/student");
const { mentorSchema } = require("../models/mentor");


const changeMentor = async (req, res) => {
    try {
        const { mentor, student } = req.body
        let query = mentor.id;

        const { mentorAssigned } = await studentSchema.findById(student.id);
        const currentMentorId = mentorAssigned.id.toString();
        if (mentor.id == currentMentorId) {
            res.json({
                message: "Assigned mentor is same for this student",
                statusCode: 400,
            });
        } else {
            const { studentsAssigned } = await mentorSchema.findById(mentorAssigned.id);

            let index = studentsAssigned.findIndex((item) => item.id == student.id)
            studentsAssigned.splice(index, 1);

            await mentorSchema.findByIdAndUpdate(mentorAssigned.id, { $set: { studentsAssigned: studentsAssigned } })
            await studentSchema.findByIdAndUpdate(student.id, { $set: { mentorAssigned: mentor } })
            await mentorSchema.findByIdAndUpdate(mentor.id, { $push: { studentsAssigned: student } })
            res.json({
                message: "Mentor change successfull",
                statusCode: 200,
            });
        }


    } catch (error) {
        res.json({
            error,
            message: "Student assign failed",
            statusCode: 500,
        });
    }
};

module.exports = { changeMentor };