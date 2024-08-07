import express from "express";

import studentRoutes from "./routes/students.js";

const app = express();

app.use(studentRoutes);

app.use((req, res, next) => {
	res.status(404).send({message: "Route not found!"});
});

app.use((error, req, res, next) => {
	
	console.error(error);
	res.status(500).send({message: "Internal server error!"});
});

export default app;
