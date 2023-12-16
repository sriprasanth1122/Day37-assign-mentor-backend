const { mentorSchema } = require("../models/mentor");



const editMentor = async (req, res) => {
    try {
        const { firstName, lastName, email, mobile, _id } = req.body

        let mentor = await mentorSchema.findById(_id)
        mentor.firstName = firstName;
        mentor.lastName = lastName;
        mentor.email = email;
        mentor.mobile = mobile;
        await mentor.save();
        console.log(mentor);
        res.json({
            message: "Mentor edit successfull",
            statusCode: 200,
        });
    }
    catch (error) {
        res.json({
            error,
            message: "Mentor edit failed",
            statusCode: 500,
        });
    }
};

module.exports = { editMentor };