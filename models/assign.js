const mongoose = require("mongoose");

const data = new mongoose.Schema(
    {
        // student : { type: Array , required: true },
        mentor : { type: Object , required: true },
        createdAt: { type: Date, default: Date.now }
    }
);

const assignSchema = mongoose.model("Assign", data);
module.exports = {assignSchema}