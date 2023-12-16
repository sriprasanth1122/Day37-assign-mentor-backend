const { studentSchema } = require("../models/student");



const unAssignedStudent = async (req, res) => {
    try {
      let student =   await studentSchema.find()
  let data = student.filter((item)=>item.mentorAssigned === "unAssigned" )
        res.json({
            data,
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

module.exports = { unAssignedStudent };