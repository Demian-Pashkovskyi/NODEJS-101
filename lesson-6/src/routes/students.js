import express from "express";

import { ctrlWrapper } from "../utils/ctrlWrapper.js";

import { getStudents, getStudentBuId, createStudent, deleteStudent, updateStudents, changeStudentDuty } from "../controllers/students.js";
// import { createStudent, deleteStudent } from "../services/students.js";

const router = express.Router();
const jsonParser = express.json();

router.get("/students", ctrlWrapper(getStudents));
router.get("/students/:studentId", ctrlWrapper(getStudentBuId));

router.post("/students", jsonParser, ctrlWrapper(createStudent));

router.delete("/students/:studentId", ctrlWrapper(deleteStudent));

router.put("/students/:studentId", jsonParser, ctrlWrapper(updateStudents));

router.patch("/students/:studentId/duty", jsonParser, ctrlWrapper(changeStudentDuty));

export default router;
