const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();


const dbConnection = async () => {
    try {
        const url = process.env.MONGO_URL;
        await mongoose.connect(url, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
        console.log("Database connection successfull");
    } catch (error) {
        console.log(error);
    }
};

module.exports = dbConnection;