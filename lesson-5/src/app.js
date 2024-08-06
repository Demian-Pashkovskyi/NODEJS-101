import express from "express";

import { Student } from "./models/student.js";

const app = express();

app.get("/students", async (req, res) => {
	try {
		const students = await Student.find();

		res.send(students);
	} catch(error) {
		console.error(error);
		res.status(500).send("Internal Server Error")
	}
});

app.get("/students/:studentId", async (req, res) => {
  try {
    const { studentId } = req.params;

    const user = await Student.findById(studentId);
		console.log(user);

    if (user === null) {
      return res.status(404).send({ status: 404, message: "User not found"});
    }

    res.send({ status: 200, data: user });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.use((req, res, next) => {
	res.status(404).send({message: "Route not found!"});
});

app.use((error, req, res, next) => {
	res.status(500).send({message: "Internal server error!"});
});

export default app;
