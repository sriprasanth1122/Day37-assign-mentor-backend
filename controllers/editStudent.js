const { studentSchema } = require("../models/student");



const editStudent = async (req, res) => {
    try {
       const {id , values} =req.body
        // await studentSchema.findByIdAndUpdate(id,values)
        res.json({
            error,
            message: "Student edit successfull",
            statusCode: 200,
        });
        }
    catch (error) {
        res.json({
            error,
            message: "Student edit failed",
            statusCode: 500,
        });
    }
};

module.exports = { editStudent };