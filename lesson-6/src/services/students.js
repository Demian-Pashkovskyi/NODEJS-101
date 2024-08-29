import {Student} from "../models/student.js";

function getStudents() {
	return Student.find();
}

function getStudentBuId(studentId) {
	return Student.findById(studentId);
}

function createStudent(student) {
	return Student.create(student);
}

function deleteStudent(studentId) {
	return Student.findByIdAndDelete(studentId);
}

function updateStudents(studentId, student) {
	return Student.findByIdAndUpdate(studentId, student, {new: true});
}

function changeStudentDuty(studentId, duty) {
	return Student.findByIdAndUpdate(studentId, {onDute : duty}, {new: true});

}

export { getStudents, getStudentBuId, createStudent, deleteStudent, updateStudents, changeStudentDuty };
