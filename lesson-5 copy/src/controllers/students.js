import createHttpError from "http-errors";

import {Student} from "../models/student.js";

async function getStudents(req, res) {

  const students = await Student.find();

  res.send(students);
};

async function getStudentBuId (req, res, next) {
	const { studentId } = req.params;
	
	const user = await Student.findById(studentId);
	console.log(user);
	
	if (user === null) {
		// return next(new Error("Student note found"));

		return next(createHttpError(404, "Student note found"));
	}
	
	res.send({ status: 200, data: user });
}

export { getStudents, getStudentBuId };

