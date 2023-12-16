const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const dbConnection = require("./dbConfig");
const studentMentor = require("./routes/studentMentor")






// assign object to an app
const app = express();


dotenv.config();

app.use(
    cors({
        origin: "*",
    })
);

app.use(express.json());
app.use(morgan("dev"));

dbConnection();

app.get("/", async function (request, response) {
    response.send("Server is Running Successfull");
});

app.use("/api",studentMentor);

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log("Connection Success running on Port 8000 or 4000");
});