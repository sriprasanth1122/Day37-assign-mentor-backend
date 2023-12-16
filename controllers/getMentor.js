const { mentorSchema } = require("../models/mentor");



const getMentor = async (req, res) => {
    try {
        const mentor = await mentorSchema.find();
        res.status(200).json({ data: mentor , message : "Mentor details send successfull" });
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = { getMentor }