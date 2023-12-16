const express = require("express");
const { getMentor } = require("../controllers/getMentor");
const { getStudent } = require("../controllers/getStudent");
const { createMentor } = require("../controllers/mentor");
const { assignStudent } = require("../controllers/assignStudent");
const { createStudent } = require("../controllers/student");
const { changeMentor } = require("../controllers/changeMentor");
const { deleteStudent } = require("../controllers/deleteStudent");
const { deleteMentor } = require("../controllers/deleteMentor");
const { editStudent } = require("../controllers/editStudent");
const { editMentor } = require("../controllers/editMentor");
const { unAssignedStudent } = require("../controllers/unAssignedStudent");


const router = express.Router();

// Add mentor & student data
router.post("/create-student",createStudent);
router.post("/create-mentor",createMentor);

// get mentor & student data
router.get("/mentor",getMentor);
router.get("/student",getStudent);

// Assign student
router.put("/assign-student",assignStudent);
router.put("/change-mentor",changeMentor);


// delete mentor & student
router.delete("/delete-student/:studentId",deleteStudent);
router.delete("/delete-mentor/:mentorId",deleteMentor);


// edit mentor & student
router.put("/edit-student",editStudent);
router.put("/edit-mentor",editMentor);

// unassigned student 


router.get("/unAssigned-student",unAssignedStudent);


module.exports = router;