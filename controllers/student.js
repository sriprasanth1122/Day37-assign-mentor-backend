const {studentSchema} = require("../models/student")


const createStudent = async (req, res) => {
    try {
        let query = req.body.email;
        let student = await studentSchema.findOne({ email: query });
           if(!student){
            await studentSchema.create(req.body);
        res.json({
            statusCode:201,
            message:"Student added successfull"
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
            message:"Student added failed",
            statusCode:500,

        });
    }
};

module.exports = { createStudent };