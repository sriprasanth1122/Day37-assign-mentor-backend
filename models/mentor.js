const mongoose = require("mongoose");

const mentor = new mongoose.Schema(
    {
        firstName: { type: String, required: "Name is required", trim: true },
        lastName: { type: String, required: true, trim: true },
        email: { type: String, required: true, unique: true, },
        mobile: { type: Number, required: true, trim: true },
        course: { type: String, required: true, trim: true },
        roll : {type: String, default:"mentor"},
        studentsAssigned:{type:Array,default:[]},
        createdAt: { type: Date, default: Date.now }
    }
);

const mentorSchema = mongoose.model("Mentor", mentor);
module.exports = {mentorSchema}