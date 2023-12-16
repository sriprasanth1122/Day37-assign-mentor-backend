const mongoose = require("mongoose");

const student = new mongoose.Schema(
    {
        firstName: { type: String, required: "Name is required", trim: true },
        lastName: { type: String, required: true, trim: true },
        email: { type: String, required: true, unique: true, },
        mobile: { type: Number, required: true, trim: true },
        course: { type: String, required: true, trim: true },
        roll : {type: String, default:"student"},
        mentorAssigned: {type: Object, default:"unAssigned"},
        createdAt: { type: Date, default: Date.now }
    }
);

const studentSchema = mongoose.model("Student", student);
module.exports = {studentSchema}