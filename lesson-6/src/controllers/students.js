import createHttpError from "http-errors";

import * as StudentService from '../services/students.js';

async function getStudents(req, res) {

  const students = await StudentService.getStudents();

  res.send({status: 200, data: students});
};

async function getStudentBuId (req, res, next) {
	const { studentId } = req.params;
	
	const student = await StudentService.getStudentBuId(studentId); 
	console.log(student);
	
	if (student === null) {
		// return next(new Error("Student note found"));

		return next(createHttpError(404, "Student note found"));
	}
	
	res.send({ status: 200, data: student });
}

async function createStudent
(req, res, next) {
	console.log(req.body);
	const student = {
		name: req.body.name,
		gender: req.body.gender,
		email: req.body.email,
		year: req.body.year, 
	};

	const createStudent = await StudentService.createStudent(student);

	// console.log(student);
	res.status(201).send({status: 201, message: "Student created", data: createStudent});
}

async function deleteStudent(req, res, next) {
	const { studentId } = req.params;

	const result = await StudentService.deleteStudent(studentId);
	
	if (result === null) {
		return next(createHttpError(404, "Student note found"));
	}

	res.status(204).end();
	};

async function updateStudents(req, res, next) {
	const {studentId} = req.params;

	const student = {
		name: req.body.name,
		gender: req.body.gender,
		email: req.body.email,
		year: req.body.year, 
	};

	const result = await StudentService.updateStudents(studentId, student);

	if (result === null) {
		return next(createHttpError(404, "Student note found"));
	}

	res.status(200).send({status: 200, message: "Student update", data: result});

};

async function changeStudentDuty(req, res, next) {
	const {studentId} = req.params;
	
	const duty = req.body.duty;

	const result = await StudentService.changeStudentDuty(studentId, duty);

	console.log({result});
	
	res.send("Duty");
}

export { getStudents, getStudentBuId, createStudent, deleteStudent, updateStudents, changeStudentDuty };

