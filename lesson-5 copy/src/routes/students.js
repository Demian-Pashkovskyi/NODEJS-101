import {Router} from "express";

import { ctrlWrapper } from "../utils/ctrlWrapper.js";

import { getStudents, getStudentBuId } from "../controllers/students.js";

const router = Router();

router.get("/students", ctrlWrapper(getStudents));

router.get("/students/:studentId", ctrlWrapper(getStudentBuId));

export default router;
