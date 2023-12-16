const {mentorSchema} = require("../models/mentor")


const createMentor = async (req, res) => {
    try {
        let query = req.body.email;
        let mentor = await mentorSchema.findOne({ email: query });
        console.log(mentor);
           if(!mentor){
            await mentorSchema.create(req.body);
        res.json({
            statusCode:201,
            message:"Mentor added successfull"
        });
           }else{
            res.json({
                statusCode:400,
                message:"Email address already exists !!!"
            });
           }
    } catch (error) {
        res.json({
            error,
            message:"Mentor added failed",
            statusCode:500,

        });
    }
};

module.exports = { createMentor };