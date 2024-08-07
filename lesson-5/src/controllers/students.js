import {Student} from "../models/student.js";

async function getStudents(req, res) {

  const students = await Student.find();

  res.send(students);
};

async function getStudentBuId (req, res) {
	const { studentId } = req.params;
	
	const user = await Student.findById(studentId);
	console.log(user);
	
	if (user === null) {
		return res.status(404).send({ status: 404, message: "User not found"});
	}
	
		res.send({ status: 200, data: user });
}


export { getStudents, getStudentBuId };
